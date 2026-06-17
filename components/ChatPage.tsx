"use client";

import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Send, ArrowUp, SquarePen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const INITIAL: Message[] = [
  {
    id: "0",
    role: "assistant",
    content: "Hey! Ik ben Panda, jouw AI-assistent van Reuzenpanda. Ik help je in een paar minuten een gratis account aanmaken en je eerste automatisering opzetten.\n\nHoe heet jouw bedrijf?",
  },
];

type FlowStep = { response: string; next?: string };
const FLOW: Record<string, FlowStep> = {
  bedrijfsnaam: {
    response: "Top! En hoeveel mensen werken er bij jullie? (inclusief jezelf)",
    next: "teamgrootte",
  },
  teamgrootte: {
    response: "Perfect. Welk proces wil je het eerst automatiseren?\n\n1. Offerte aanvragen & opvolging\n2. Klantcommunicatie via WhatsApp\n3. Facturatie & documentbeheer\n4. Iets anders",
    next: "proces",
  },
  proces: {
    response: "Goed gekozen. Wat is je e-mailadres? Dan zet ik je account direct klaar.",
    next: "email",
  },
  email: {
    response: "Je account wordt aangemaakt...\n\nEven geduld, ik stel je omgeving in op basis van jouw antwoorden.",
    next: "done",
  },
  done: {
    response: "Klaar! Je kunt nu inloggen. In je dashboard vind je een startgids afgestemd op jouw branche.\n\nWelkom bij Reuzenpanda.",
  },
};

const FLOW_KEYS = Object.keys(FLOW);

let msgCounter = 1;
const nextId = () => String(++msgCounter);

export default function ChatPage() {
  const searchParams = useSearchParams();
  const initialMsg = searchParams.get("msg") ?? "";

  const [messages, setMessages] = useState<Message[]>(INITIAL);
  const [input, setInput] = useState("");
  const [step, setStep] = useState(0);
  const [typing, setTyping] = useState(false);
  const [done, setDone] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const sentInitial = useRef(false);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    inputRef.current?.focus();
    if (initialMsg.trim() && !sentInitial.current) {
      sentInitial.current = true;
      sendMsg(initialMsg);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const sendMsg = async (text: string) => {
    if (!text.trim() || done) return;
    setInput("");

    setMessages((prev) => [...prev, { id: nextId(), role: "user", content: text }]);
    setTyping(true);

    const flowStep = FLOW[FLOW_KEYS[step]];
    await new Promise((r) => setTimeout(r, 900 + Math.random() * 700));

    setTyping(false);
    setMessages((prev) => [...prev, { id: nextId(), role: "assistant", content: flowStep.response }]);

    if (!flowStep.next) setDone(true);
    else setStep((s) => s + 1);
  };

  const handleKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (input.trim()) sendMsg(input);
    }
  };

  const autoResize = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = Math.min(e.target.scrollHeight, 200) + "px";
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <header className="shrink-0 flex items-center justify-between px-5 py-3 border-b border-gray-100">
        <Link href="/" className="flex items-center gap-2 group">
          <Image src="/logo.png" alt="Reuzenpanda" width={161} height={51} className="h-6 w-auto" />
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-[13px] text-gray-400 hidden sm:block">Gesprek met Panda</span>
          <button
            onClick={() => { setMessages(INITIAL); setStep(0); setDone(false); setInput(""); sentInitial.current = false; }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[13px] text-gray-500 hover:bg-gray-100 transition-colors"
          >
            <SquarePen size={14} />
            Nieuw gesprek
          </button>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-[760px] mx-auto px-4 py-8 flex flex-col gap-8">
          {messages.map((m) => (
            <div key={m.id} className={`flex gap-3 ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              {m.role === "assistant" && (
                <div className="w-8 h-8 rounded-full bg-primary/15 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Image src="/logo.png" alt="Panda" width={161} height={51} className="w-5 h-auto" />
                </div>
              )}
              <div className={`flex flex-col gap-1 ${m.role === "user" ? "items-end max-w-[75%]" : "items-start max-w-[85%]"}`}>
                {m.role === "user" ? (
                  <div className="bg-gray-100 text-gray-900 text-[15px] leading-relaxed px-4 py-3 rounded-3xl rounded-tr-md whitespace-pre-line">
                    {m.content}
                  </div>
                ) : (
                  <div className="text-gray-800 text-[15px] leading-relaxed whitespace-pre-line">
                    {m.content}
                  </div>
                )}
              </div>
            </div>
          ))}

          {typing && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 rounded-full bg-primary/15 border border-primary/20 flex items-center justify-center shrink-0">
                <Image src="/logo.png" alt="Panda" width={161} height={51} className="w-5 h-auto" />
              </div>
              <div className="flex items-center gap-1.5 py-3">
                <div className="typing-dot w-2 h-2 rounded-full bg-gray-300" />
                <div className="typing-dot w-2 h-2 rounded-full bg-gray-300" />
                <div className="typing-dot w-2 h-2 rounded-full bg-gray-300" />
              </div>
            </div>
          )}

          {done && (
            <div className="flex justify-center">
              <Link
                href="/"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold text-[14px] hover:bg-primary-dark transition-colors shadow-md shadow-primary/20"
              >
                Ga naar mijn dashboard →
              </Link>
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input */}
      {!done && (
        <div className="shrink-0 border-t border-gray-100 bg-white px-4 pt-4 pb-6">
          <div className="max-w-[760px] mx-auto">
            <div className="flex items-end gap-3 bg-white rounded-3xl border border-gray-200 shadow-sm px-4 py-3 focus-within:border-gray-300 focus-within:shadow-md transition-all">
              <textarea
                ref={inputRef}
                rows={1}
                value={input}
                onChange={autoResize}
                onKeyDown={handleKey}
                placeholder="Stuur een bericht..."
                disabled={typing}
                className="flex-1 text-[15px] text-gray-800 placeholder-gray-400 outline-none resize-none bg-transparent leading-relaxed disabled:opacity-50"
                style={{ maxHeight: "200px" }}
              />
              <button
                onClick={() => { if (input.trim()) sendMsg(input); }}
                disabled={!input.trim() || typing}
                className="w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-700 disabled:opacity-25 disabled:cursor-not-allowed transition-all shrink-0"
              >
                <ArrowUp size={16} className="text-white" />
              </button>
            </div>
            <p className="text-center text-[11px] text-gray-300 mt-3">
              Panda kan fouten maken. Controleer altijd belangrijke informatie.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
