export async function fetchGeminiResponse(prompt: string): Promise<string> {
  try {
    const res = await fetch("/api/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });

    const data = await res.json();
    return data.response || "";
  } catch {
    return "Error fetching Gemini response.";
  }
}