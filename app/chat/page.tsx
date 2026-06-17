import { Suspense } from "react";
import ChatPage from "@/components/ChatPage";

export const metadata = {
  title: "Chat — Reuzenpanda",
};

export default function Chat() {
  return (
    <Suspense>
      <ChatPage />
    </Suspense>
  );
}
