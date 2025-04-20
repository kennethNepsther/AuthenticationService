import bcrypt from "bcryptjs";
import crypto from "crypto";
import User from "../models/UserModel.js";
import { sendVerificationEmail, sendWelcomeEmail, sendPasswordResetEmail } from "../mail/emails.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";

export const signup = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    // Validate request body
    if (!name || !email || !password || !phone) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email format" });
    }
    // Check if password is strong enough (at least 6 characters)
    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters long",
      });
    }

    // Check if phone number is valid (assuming a simple regex for demonstration)
    const phoneRegex = /^\d{9}$/; // Example: 9-digit phone number 924260010
    if (!phoneRegex.test(phone)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid phone number format" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }
    // Hash password (you can use bcrypt or any other hashing library)
    const hashedPassword = await bcrypt.hash(password, 10);

    const verificationToken = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      phone,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 3600000, // 1 hour from now,
    });
    await newUser.save();
    //jwt token generation
    generateTokenAndSetCookie(res, newUser._id);

    await sendVerificationEmail( newUser.email, verificationToken ); 
    
    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        ...newUser._doc,
        password: undefined, // Exclude password from response
      },
    });
  } catch (error) {
    console.error("Error in signup:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const verifyEmail = async (req, res) => {
  const { code } = req.body;
  try {
    // Check if the user exists and the verification code matches
    const user = await User.findOne({
      verificationToken: code,
      verificationTokenExpiresAt: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired verification code",
      });
    }

    // Update user to mark email as verified and clear the verification token
    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpiresAt = undefined;
    await user.save();

    await sendWelcomeEmail(user.email, user.name); // Send welcome email

    res.status(200).json({
      success: true,
      message: "Email verified successfully",
      user: {
        ...user._doc,
        password: undefined, // Exclude password from response
      },
    });
    
  } catch (error) {
    console.error("Error in verifyEmail:", error); 
    res.status(500).json({  success: false, message: "Internal server error" });
    
  }


}


export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Validate request body
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Deve preenceher os campos  obrigatórios" });
    }

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Credenciais inválido",
      });
    }

    // Check if password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Credenciais inválido",
      });
    }

    // Check if email is verified
    if (!user.isVerified) {
      return res.status(403).json({
        success: false,
        message: "Email não verificado",
      });
    }

    //jwt token generation
    generateTokenAndSetCookie(res, user._id);
    user.lastLogin = Date.now(); // Update last login time
    await user.save(); 

    res.status(200).json({
      success: true,
      message: "Login bem sucedido",
      user: {
        ...user._doc,
        password: undefined, // Exclude password from response
      },
    });
  } catch (error) {
    console.error("Error in login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
 
};

export const logout = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ success: true, message: "Terminou a sessão com sucesso" });
 

};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    // Validate request body
    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "Deve preenceher os campos  obrigatórios" });
    }

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Utilizador não encontrado",
      });
    }

    // Generate a password reset token 
    const resetToken = crypto.randomBytes(20).toString("hex");
    const resetTokenExpiresAt = Date.now() + 3600000; // 1 hour from now
    user.resetPasswordToken = resetToken;
    user.resetPasswordTokenExpiresAt = resetTokenExpiresAt;
    await user.save();

    // Send password reset email 
    await sendPasswordResetEmail(user.email, user.name,`${process.env.CLIENT_URL}/reset-password/${resetToken}`); 
    res.status(200).json({
      success: true,
      message: "Foi enviado um email para redefinir a senha",
    });
    
  } catch (error) {
    console.error("Error in resetPassword:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};