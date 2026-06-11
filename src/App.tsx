import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import MainMenu from "@/components/MainMenu";

const GamePage = lazy(() => import("@/pages/GamePage"));
const ReplayPage = lazy(() => import("@/pages/ReplayPage"));

function LoadingFallback() {
  return (
    <div className="min-h-screen w-full bg-[#0a0f0a] flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-amber-500/30 border-t-amber-500 rounded-full animate-spin mx-auto mb-4" />
        <p className="text-zinc-500 text-sm">加载中...</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/replays" element={<ReplayPage />} />
          <Route path="/replays/:id" element={<ReplayPage />} />
          <Route path="*" element={<MainMenu />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
