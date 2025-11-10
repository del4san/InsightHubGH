import { useCallback } from "react";

export const useGeminiStream = () => {
  const sendPrompt = useCallback(async function* (prompt: string): AsyncGenerator<string> {
    const response = await fetch("/api/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok || !response.body) {
      console.error("❌ Gemini response error:", response.status);
      return;
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      yield decoder.decode(value);
    }
  }, []);

  return { sendPrompt };
};