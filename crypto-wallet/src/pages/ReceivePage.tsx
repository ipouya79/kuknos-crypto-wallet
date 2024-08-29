import React from "react";
import { QRCodeSVG } from "qrcode.react";

const ReceivePage: React.FC = () => {
  const walletAddress = localStorage.getItem("walletAddress");

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-sm text-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          Your Wallet Address
        </h1>
        {walletAddress ? (
          <div className="flex flex-col items-center">
            <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-inner">
              <QRCodeSVG
                value={walletAddress}
                size={150}
                className="rounded-lg"
              />
            </div>
            <p className="mt-6  text-sm font-bold text-gray-800 dark:text-gray-200 break-words">
              {walletAddress}
            </p>
          </div>
        ) : (
          <p className="text-sm text-gray-600 dark:text-gray-300">
            No wallet address found
          </p>
        )}
      </div>
    </div>
  );
};

export default ReceivePage;
