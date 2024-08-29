import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import WalletPage from "../pages/WalletPage";
import SendPage from "../pages/SendPage";
import ReceivePage from "../pages/ReceivePage";
import ThemeToggleButton from "../components/ThemeToggleButton";

const AppRouter: React.FC = () => {
  const [isWalletCreated, setIsWalletCreated] = useState<boolean>(false);

  useEffect(() => {
    const walletAddress = localStorage.getItem("walletAddress");
    setIsWalletCreated(Boolean(walletAddress));
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isWalletCreated ? <Navigate to="/wallet" /> : <LoginPage />}
        />
        <Route
          path="/wallet"
          element={<WalletPage setIsWalletCreated={setIsWalletCreated} />}
        />
        <Route path="/send" element={<SendPage />} />
        <Route path="/receive" element={<ReceivePage />} />
      </Routes>
      <ThemeToggleButton />
    </Router>
  );
};

export default AppRouter;
