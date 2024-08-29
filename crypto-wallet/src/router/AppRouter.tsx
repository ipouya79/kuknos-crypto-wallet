import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import WalletPage from "../pages/WalletPage";
import SendPage from "../pages/SendPage";
import ReceivePage from "../pages/ReceivePage";
import ThemeToggleButton from "../components/ThemeToggleButton";

const AppRouter: React.FC = () => {
  const walletExists = !!localStorage.getItem("walletAddress");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={walletExists ? <Navigate to="/wallet" /> : <LoginPage />}
        />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/send" element={<SendPage />} />
        <Route path="/receive" element={<ReceivePage />} />
      </Routes>
      <ThemeToggleButton />
    </Router>
  );
};

export default AppRouter;
