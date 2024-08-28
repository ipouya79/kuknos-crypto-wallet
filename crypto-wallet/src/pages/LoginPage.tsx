import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

// Generate a random word with specified length using a-z letters
const generateRandomWord = (length: number): string => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    result += letters[randomIndex];
  }
  return result;
};

const LoginPage: React.FC = () => {
  const [mnemonic, setMnemonic] = useState<string[]>([]);
  const navigate = useNavigate();

  const generateMnemonic = (): string[] => {
    return Array.from({ length: 12 }, () => generateRandomWord(5));
  };

  const handleCreateWallet = () => {
    const generatedMnemonic = generateMnemonic();
    setMnemonic(generatedMnemonic);
  };

  const handleConfirmMnemonic = () => {
    const walletAddress = uuidv4();
    localStorage.setItem("walletAddress", walletAddress);
    localStorage.setItem("mnemonic", JSON.stringify(mnemonic));
    localStorage.setItem("balance", "0");
    navigate("/wallet");
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
        {mnemonic.length === 0 ? (
          <button
            onClick={handleCreateWallet}
            className="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white font-bold py-3 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50"
          >
            Create Wallet
          </button>
        ) : (
          <div>
            <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
              Your Recovery Words
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 justify-items-center mb-6">
              {mnemonic.map((item, index) => (
                <div
                  key={index}
                  className="h-20 w-24 flex items-center justify-center text-lg font-semibold text-gray-900 border border-gray-300 rounded-lg shadow-md bg-gradient-to-r from-gray-100 to-gray-200"
                >
                  {item}
                </div>
              ))}
            </div>

            <button
              onClick={handleConfirmMnemonic}
              className="w-full bg-gradient-to-r from-green-500 to-lime-400 text-white font-bold py-3 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-50"
            >
              Create
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
