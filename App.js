import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignInPage from "./components/SignInPage";
import ChatPage from "./components/ChatPage";
import EscalationForm from "./components/EscalationForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/escalate" element={<EscalationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
