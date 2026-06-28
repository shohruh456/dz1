import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        isDark ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
          <div
        className={`p-8 rounded-lg shadow-lg w-96 ${isDark ? "bg-gray-800" : "bg-white"}`}
      >
        <div className="flex justify-between items-center mb-6">
          <h1
            className={`text-2xl font-bold ${isDark ? "text-white" : "text-black"}`}
          >
            Счетчик
          </h1>
          <button
            onClick={() => setIsDark(!isDark)}
            className="px-3 py-1 bg-blue-500 text-white rounded"
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>

        <div
          className={`text-6xl font-bold text-center mb-6 ${
            count < 0 ? "text-red-600" : isDark ? "text-white" : "text-black"
          }`}
        >
          {count}
        </div>

        {count > 10 && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
            Limit! Больше 10
          </div>
        )}

        <div className="flex gap-3 mb-4">
          <button
            onClick={() => setCount(count - 1)}
            className="flex-1 py-2 bg-red-500 text-white rounded font-bold hover:bg-red-600"
          >
            −
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="flex-1 py-2 bg-green-500 text-white rounded font-bold hover:bg-green-600"
          >
            +
          </button>
        </div>

      </div>
    </div>
  );
};

export default Counter;
