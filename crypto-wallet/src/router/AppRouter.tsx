import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import WalletPage from "../pages/WalletPage";
import SendPage from "../pages/SendPage";
import ReceivePage from "../pages/ReceivePage";

const AppRouter: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/wallet" element={<WalletPage />} />
      <Route path="/send" element={<SendPage />} />
      <Route path="/receive" element={<ReceivePage />} />
    </Routes>
  </Router>
);

export default AppRouter;
