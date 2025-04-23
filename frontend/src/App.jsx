import FloatingShape from "./components/FloatingShape";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";



function App() {
  return (
    <div
    className="min-h-screen bg-gradient-to-br from-white via-[#EFE6FB] to-gray-300 
  flex items-center justify-center relative overflow-hidden"
  
    >
      <FloatingShape
        color="bg-purple-600"
        size="w-64 h-64"
        top="-5%"
        left="10"
        delay={0}
      />
      <FloatingShape
        color="bg-purple-200"
        size="w-64 h-64"
        top="-5%"
        left="10"
        delay={5}
      />
      <FloatingShape
        color="bg-green-500"
        size="w-64 h-64"
        top="-5%"
        left="10"
        delay={2}
      />

      <Routes>
        <Route path="/" element={"Home"} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/verify-email" element={"EmailVerificationPage"} /> */}
        {/* <Route path="/forgot-password" element={"Forgot Password"} />
        <Route path="/reset-password" element={"Reset Password"} /> */}
      </Routes>
    </div>
  );
}

export default App;
