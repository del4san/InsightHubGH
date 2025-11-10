// src/components/PromptForm.tsx

import React from "react";

interface PromptFormProps {
  prompt: string;
  setPrompt: (value: string) => void;
  onSubmit: () => void;
}

export default function PromptForm({ prompt, setPrompt, onSubmit }: PromptFormProps) {
  return (
    <div className="prompt-form">
      <input
        className="prompt-input"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your civic prompt..."
      />
      <button className="submit-button" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
}