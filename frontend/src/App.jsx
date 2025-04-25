import FloatingShape from "./components/FloatingShape";
import { Navigate, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import { Toaster } from "react-hot-toast";

//import DashboardPage from "./pages/DashboardPage";
//import ForgotPasswordPage from "./pages/ForgotPasswordPage";
//import ResetPasswordPage from "./pages/ResetPasswordPage";
import LoadingSpinner from "./components/LoadingSpinner";

import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";


// protect routes that require authentication

// const ProtectedRoute = ({ children }) => {
// 	const { isAuthenticated, user } = useAuthStore();

// 	if (!isAuthenticated) {
// 		return <Navigate to='/login' replace />;
// 	}

// 	if (!user.isVerified) {
// 		return <Navigate to='/verify-email' replace />;
// 	}

// 	return children;
// };


// redirect authenticated users to the home page
// const RedirectAuthenticatedUser = ({ children }) => {
// 	const { isAuthenticated, user } = useAuthStore();

// 	if (isAuthenticated && user.isVerified) {
// 		return <Navigate to='/' replace />;
// 	}

// 	return children;
// };



function App() {


  const { isCheckingAuth, checkAuth } = useAuthStore();

	useEffect(() => {
		checkAuth();
	}, [checkAuth]);

	if (isCheckingAuth) return <LoadingSpinner />;


  return (
    <div
    className="min-h-screen bg-gradient-to-br from-white via-[#EFE6FB] to-gray-300 
  flex items-center justify-center relative overflow-hidden"
  
    >
      {/* <FloatingShape
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
      /> */}

      <Routes>
        <Route path="/" element={"Home"} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verify-email" element={<EmailVerificationPage/>} />
        {/* <Route path="/forgot-password" element={"ForgotPassword"} />
        <Route path="/reset-password" element={"ResetPassword"} /> */}
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
