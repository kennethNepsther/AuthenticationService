import jwt from "jsonwebtoken"; 


export const generateTokenAndSetCookie = (res, userId) => {
    // Generate JWT token with user ID and expiration time
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
    
    // Set the token in a cookie with HTTP-only and secure flags
    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Set to true in production
        maxAge: 3600000, // 1 hour
        sameSite: 'Strict', // Optional: helps prevent CSRF attacks
    });
    
    return token; // Return the generated token if needed
}