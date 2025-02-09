import { Route, Routes, Navigate } from "react-router-dom";
import { IntroPage } from "@/pages/IntroPage";
import { PublicSentimentPage } from "./pages/PublicSentimentPage";
import { MainPage } from "./pages/MainPage";
import { IndustriesPage } from "./pages/IndustriesPage";
import TabLayout from "./layouts/tab-layout";
import { SubPageLayout } from "./layouts/sub-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/main" />} />
      <Route path="/main" element={<MainPage />} />
      <Route element={<SubPageLayout />}>
        <Route path="/main/sentiment" element={<PublicSentimentPage />} />
        <Route path="/main/policies" element={<TabLayout />} />
        <Route path="/main/industries" element={<IndustriesPage />} />
      </Route>
      <Route path="/main/history" element={<IntroPage />} />
    </Routes>
  );
}

export default App;
