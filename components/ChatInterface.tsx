"use client";

import { useState, useRef, useEffect } from "react";
import { Send, X, Sparkles } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const INITIAL: Message[] = [
  {
    id: "0",
    role: "assistant",
    content:
      "Hey! Ik ben Panda, jouw AI-assistent. Ik help je in 2 minuten een gratis account aanmaken. Hoe heet je bedrijf?",
  },
];

type FlowStep = { response: string; next?: string };
const FLOW: Record<string, FlowStep> = {
  bedrijfsnaam: {
    response: "Top! En hoeveel mensen werken er bij jullie? (inclusief jezelf)",
    next: "teamgrootte",
  },
  teamgrootte: {
    response:
      "Perfect. Welk proces wil je het eerst automatiseren?\n\n1. Offerte aanvragen & opvolging\n2. Klantcommunicatie via WhatsApp\n3. Facturatie & documentbeheer\n4. Iets anders",
    next: "proces",
  },
  proces: {
    response:
      "Goed gekozen. Wat is je e-mailadres? Dan zet ik je account direct klaar.",
    next: "email",
  },
  email: {
    response: "Je account wordt aangemaakt... ✓\n\nEven geduld, ik stel je omgeving in.",
    next: "done",
  },
  done: {
    response:
      "Klaar! Je kunt nu inloggen. In je dashboard vind je direct een startgids afgestemd op jouw branche. Welkom bij Reuzenpanda.",
  },
};

const FLOW_KEYS = Object.keys(FLOW);

interface Props {
  initialMessage?: string;
  onClose?: () => void;
}

let msgCounter = 0;
const nextId = () => String(++msgCounter);

export default function ChatInterface({ initialMessage = "", onClose }: Props) {
  const [messages, setMessages] = useState<Message[]>(INITIAL);
  const [input, setInput] = useState(initialMessage);
  const [step, setStep] = useState(0);
  const [typing, setTyping] = useState(false);
  const [done, setDone] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    inputRef.current?.focus();
    if (initialMessage.trim()) {
      sendMsg(initialMessage);
      setInput("");
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const sendMsg = async (text: string) => {
    if (!text.trim() || done) return;
    setInput("");

    setMessages((prev) => [
      ...prev,
      { id: nextId(), role: "user", content: text },
    ]);
    setTyping(true);

    const flowStep = FLOW[FLOW_KEYS[step]];
    await new Promise((r) => setTimeout(r, 800 + Math.random() * 600));

    setTyping(false);
    setMessages((prev) => [
      ...prev,
      { id: nextId(), role: "assistant", content: flowStep.response },
    ]);

    if (!flowStep.next) setDone(true);
    else setStep((s) => s + 1);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Window */}
      <div className="relative w-full md:w-[500px] h-[85vh] md:h-[580px] bg-white rounded-t-3xl md:rounded-[32px] shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0">
              <Sparkles size={15} className="text-white" />
            </div>
            <div>
              <p className="font-semibold text-[14px] text-gray-900 leading-tight">Panda</p>
              <p className="text-[11px] text-primary-deep">● Online</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-2xl hover:bg-gray-100 transition-colors text-gray-400"
          >
            <X size={17} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-3">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[82%] px-4 py-3 rounded-3xl text-[14px] leading-relaxed whitespace-pre-line ${
                  m.role === "user"
                    ? "chat-bubble-out bg-gray-900 text-white rounded-br-sm"
                    : "chat-bubble-in bg-gray-100 text-gray-800 rounded-bl-sm"
                }`}
              >
                {m.content}
              </div>
            </div>
          ))}

          {typing && (
            <div className="flex justify-start">
              <div className="bg-gray-100 px-4 py-3 rounded-3xl rounded-bl-sm flex gap-1.5 items-center">
                <div className="typing-dot w-1.5 h-1.5 rounded-full bg-gray-400" />
                <div className="typing-dot w-1.5 h-1.5 rounded-full bg-gray-400" />
                <div className="typing-dot w-1.5 h-1.5 rounded-full bg-gray-400" />
              </div>
            </div>
          )}

          {done && (
            <div className="flex justify-center mt-2">
              <a
                href="/dashboard"
                className="px-6 py-3 bg-primary text-white rounded-full font-semibold text-[14px] hover:bg-primary-dark transition-colors"
              >
                Ga naar mijn dashboard →
              </a>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input */}
        {!done && (
          <div className="px-4 pb-5 pt-2 border-t border-gray-100 shrink-0">
            <div className="flex items-center gap-2.5 bg-gray-50 rounded-3xl px-4 py-2.5 border border-gray-200 focus-within:border-primary/40 transition-colors">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && input.trim()) sendMsg(input);
                }}
                placeholder="Typ je antwoord..."
                className="flex-1 bg-transparent text-[14px] text-gray-800 placeholder-gray-400 outline-none"
              />
              <button
                onClick={() => sendMsg(input)}
                disabled={!input.trim()}
                className="w-8 h-8 rounded-2xl bg-primary flex items-center justify-center hover:bg-primary-dark disabled:opacity-40 transition-colors shrink-0"
              >
                <Send size={13} className="text-white" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
