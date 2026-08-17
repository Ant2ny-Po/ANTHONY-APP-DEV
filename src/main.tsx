import "@/styles/global.css";

import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import GuestLayout from "@/pages/guest/layout";
import HomePage from "@/pages/guest/home/index.tsx";
import AboutPage from "@/pages/guest/about/index.tsx";
import SocialPage from "@/pages/guest/socialmedia/index.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<GuestLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/social" element={<SocialPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);