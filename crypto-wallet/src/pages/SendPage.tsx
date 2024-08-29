import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SendPage: React.FC = () => {
  const [formData, setFormData] = useState({
    amount: "",
    destination: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { amount, destination } = formData;
    console.log(`Sending ${amount} to ${destination}`);
    navigate("/wallet");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-8">
          Send Crypto
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="amount"
              className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"
            >
              Amount
            </label>
            <input
              type="text"
              id="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Enter amount"
              autoComplete="off"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="destination"
              className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"
            >
              Wallet Address
            </label>
            <input
              type="text"
              id="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="Enter wallet address"
              autoComplete="off"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendPage;
