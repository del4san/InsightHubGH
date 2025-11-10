export const useGemini = () => {
  const generate = async (prompt: string): Promise<string> => {
    const res = await fetch("/api/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const { text } = await res.json();
    return text;
  };

  return { generate };
};