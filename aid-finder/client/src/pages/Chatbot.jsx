import React from "react";
import { FullPageChat } from "flowise-embed-react";

const Chatbot = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        AidFinder Assistant 💬
      </h1>
      <div className="w-full max-w-7xl shadow-lg rounded-xl overflow-hidden">
        <FullPageChat
          chatflowid="a38c58e7-7385-4250-90b2-038af483494c"
          apiHost="https://cloud.flowiseai.com"
        />
      </div>
    </div>
  );
};

export default Chatbot;
