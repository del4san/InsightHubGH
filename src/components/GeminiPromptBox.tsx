import React, { useState } from "react";

export default function GeminiPromptBox() {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    // Placeholder for future logic
  };

  return (
    <div className="gemini-prompt-box">
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}