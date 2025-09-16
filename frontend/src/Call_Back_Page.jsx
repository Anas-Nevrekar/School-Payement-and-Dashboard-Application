import React from "react";
import { Link } from "react-router-dom";

function Call_Back_Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center">
        <svg
          className="w-16 h-16 text-green-500 mb-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 12l2 2l4-4"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <h1 className="text-2xl font-bold text-green-700 mb-2">Payment Successful!</h1>
        <p className="text-gray-700 mb-6 text-center">
          Thank you! Your payment has been executed.<br />
          You may now return to your dashboard.
        </p>
        <Link
          to="/dashboard"
          className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default Call_Back_Page;