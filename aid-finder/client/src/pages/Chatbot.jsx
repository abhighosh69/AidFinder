import axios from "axios";
import React, { useState } from "react";

const Chatbot = () => {
  const [userInput, setUserInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const generateAnswer = async () => {
    if (!userInput.trim()) return; // Prevent empty requests

    setLoading(true);
    setAnswer(""); // Clear previous answer

    try {
      const response = await axios({
        url: import.meta.env.VITE_GEMINI_API_URL,
        method: "POST",
        data: {
          contents: [
            {
              parts: [{ text: userInput }],
            },
          ],
        },
      });

      const answerText =
        response.data.candidates[0].content.parts[0].text;
      setAnswer(answerText);
    } catch (error) {
      console.error("Error generating answer:", error);
      setAnswer("There was an error generating the answer.");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Chatbot</h1>
      <textarea
        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
        rows="3"
        placeholder="Type your question here..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button
        onClick={generateAnswer}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        disabled={loading}
      >
        {loading ? "Loading..." : "Generate Answer"}
      </button>
      {answer && (
        <div className="mt-6 p-4 bg-white border border-gray-300 rounded">
          <h2 className="text-xl font-semibold mb-2">Answer:</h2>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
