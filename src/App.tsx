import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatUIPage from "./pages/ChatUIPage";
import CaptureMenu from "./pages/RedesignExtension";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat-ui" element={<ChatUIPage />} />
        <Route path="/extension-ui" element={<CaptureMenu />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
