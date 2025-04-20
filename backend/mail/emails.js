import dotenv from "dotenv";
import { mailtrapClient, sender } from "./mailtrapConfig.js";
import { VERIFICATION_EMAIL_TEMPLATE, WELCOME_EMAIL_TEMPLATE, PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE} from "./emailsTemplates.js";

dotenv.config();

export const sendVerificationEmail = async (email, verificationToken) => {

    const recipient = [{ email }]; 
    
    const html = VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken);

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verificar a conta",
      html,
      category: "Email verification",
    });
    console.log("Verification email sent successfully", response);
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw new Error(`Error sending verification email: ${error}`);
  }
}

export const sendWelcomeEmail = async (email, name) => {
    const appName = process.env.appName;   //"EventosApp"; 
    const subject = `Bem-vindo ao ${appName}`;
    const recipient = [{ email }];

    const html = WELCOME_EMAIL_TEMPLATE
                .replace("{userName}", name)
                .replace("{appName}", appName)  
                .replace("{logoUrl}", "https://example.com/logo.png")
                .replace("{startLink}", "http://localhost:5000/api/auth/login"); // "https://eventosapp.com/login"


  

    try {
        const response = await mailtrapClient.send({
          from: sender,
          to: recipient,
          subject: subject,
          html,
          category: "welcome email",
        });
        console.log("welcome email sent successfully", response);
      } catch (error) {
        console.error("Error sending welcome email:", error);
        throw new Error(`Error sending welcome email: ${error}`);
      }
   
  
}

export const sendPasswordResetEmail = async (email,resetURL) => {
    const recipient = [{ email }];
    const html = PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL);

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Redefinição de senha",
            html,
            category: "password reset",
        });
        console.log("Password reset email sent successfully", response);
    } catch (error) {
        console.error("Error sending password reset email:", error);
        throw new Error(`Error sending password reset email: ${error}`);
    }
}

export const sendResetSuccessEmail = async (email, name) => {
    const recipient = [{ email }];
    const subject = "Redifinição de senha bem-sucedida";
    const html = PASSWORD_RESET_SUCCESS_TEMPLATE.replace("{userName}", name);

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: subject,
            html,
            category: "password reset success",
        });
        console.log("Password reset success email sent successfully", response);
    } catch (error) {
        console.error("Error sending password reset success email:", error);
        throw new Error(`Error sending password reset success email: ${error}`);
    }
}