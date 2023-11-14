import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AttendanceTracking from "./pages/AttendanceTrackingPage";
import BehavioralAnalyticsPage from "./pages/BehavioralAnalyticsPage";
import AcademicPerformancePage from "./pages/AcademicPerformancePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/attendance-tracking" element={<AttendanceTracking />} />
        <Route
          path="/behavioral-analytics"
          element={<BehavioralAnalyticsPage />}
        />
        <Route
          path="/academic-performance"
          element={<AcademicPerformancePage />}
        />
      </Routes>
    </>
  );
}

export default App;
