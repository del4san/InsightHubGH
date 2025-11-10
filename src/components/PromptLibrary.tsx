import React from "react";

export default function PromptLibrary() {
  const prompts = [
    "What are Ghana’s top exports?",
    "Summarize the 2024 budget highlights.",
    "List 3 environmental risks facing Accra.",
  ];

  return (
    <div>
      <h2>Prompt Library</h2>
      <ul>
        {prompts.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  );
}