import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAxios } from "../hooks/useAxios";
import { Transaction } from "../types/transaction";
import Pagination from "../components/Pagination";
import moment from "jalali-moment";
import "moment/locale/fa";

const WalletPage: React.FC<{
  setIsWalletCreated: (value: boolean) => void;
}> = ({ setIsWalletCreated }) => {
  const [balance, setBalance] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [transactionsPerPage] = useState<number>(5);
  const navigate = useNavigate();

  const axiosConfig = useMemo(
    () => ({
      url: "../server/data.json",
      method: "GET",
    }),
    []
  );

  const {
    data: transactions,
    loading,
    error,
  } = useAxios<Transaction[]>(axiosConfig);

  useEffect(() => {
    const storedBalance = localStorage.getItem("balance");
    if (storedBalance) {
      setBalance(parseFloat(storedBalance));
    }
  }, []);

  const handleIncreaseBalance = () => {
    const newBalance = balance + 1;
    setBalance(newBalance);
    localStorage.setItem("balance", newBalance.toString());
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsWalletCreated(false); // notify AppRouter about logout
    navigate("/");
  };
  const formatPersianDate = useCallback((date: string) => {
    return moment(date).locale("fa").format("YYYY/MM/DD HH:mm:ss");
  }, []);

  // pagination logic
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions =
    transactions?.slice(indexOfFirstTransaction, indexOfLastTransaction) || [];
  const totalPages = Math.ceil(
    (transactions?.length || 0) / transactionsPerPage
  );

  const buttonStyles =
    "flex-1 text-white font-semibold py-2 rounded-full transition duration-300";

  const buttons = [
    {
      onClick: handleIncreaseBalance,
      text: "Increase Balance",
      bgClass: "bg-blue-500 hover:bg-blue-600 focus:ring-blue-500",
    },
    {
      onClick: () => navigate("/send"),
      text: "Send",
      bgClass: "bg-green-500 hover:bg-green-600 focus:ring-green-500",
    },
    {
      onClick: () => navigate("/receive"),
      text: "Receive",
      bgClass: "bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-500",
    },
    {
      onClick: handleLogout,
      text: "Logout",
      bgClass: "bg-red-500 hover:bg-red-600 focus:ring-red-500",
    },
  ];

  return (
    <div className="min-h-screen p-8 flex flex-col items-center">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-6">
          Balance: {balance}
        </h1>

        <div className="flex flex-col sm:flex-row justify-between gap-4">
          {buttons.map((btn, index) => (
            <button
              key={index}
              onClick={btn.onClick}
              className={`${buttonStyles} ${btn.bgClass} focus:outline-none focus:ring-2 focus:ring-opacity-50`}
            >
              {btn.text}
            </button>
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-8 mb-4 text-center">
          Transaction History
        </h2>

        {loading ? (
          <p className="text-center text-gray-700 dark:text-gray-300">
            Loading...
          </p>
        ) : error ? (
          <p className="text-center text-red-500">Error: {error}</p>
        ) : (
          <div className="space-y-4">
            {currentTransactions.map((transaction, index) => (
              <div
                key={index}
                className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-sm flex justify-between items-center"
              >
                <div className=" w-full flex items-center justify-between">
                  <p className="text-lg font-medium text-gray-800 dark:text-white">
                    {transaction.crypto_currency_symbol} {transaction.amount}
                  </p>

                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    {formatPersianDate(transaction.transaction_date)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default WalletPage;
