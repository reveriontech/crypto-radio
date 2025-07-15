import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SkeletonLoader from "@/components/loader/SkeletonLoader";

// ANCHOR: Lazy Imports
const Home = React.lazy(() => import("@/pages/Home"));
const About = React.lazy(() => import("@/pages/About"));

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Suspense fallback={<SkeletonLoader />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Suspense>
    </BrowserRouter>
  )
}

export default AppRoutes