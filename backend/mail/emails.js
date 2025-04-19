import { VERIFICATION_EMAIL_TEMPLATE, WELCOME_EMAIL_TEMPLATE } from "./emailsTemplates.js";
import { mailtrapClient, sender } from "./mailtrapConfig.js";

export const sendVerificationEmail = async (email, verificationToken) => {

    const recipient = [{ email }]; 
    
    const html = VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken);

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "verifica a sua conta",
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
    const appName = "UIN";
    const subject = `Bem-vindo ao ${appName}`;
    const recipient = [{ email }];
    const html = WELCOME_EMAIL_TEMPLATE.replace("{userName}", name, "{appName}", appName);

   // const html = WELCOME_EMAIL_TEMPLATE.replace("{userName}", name, "{appName}", appName, "{logoUrl}", "https://example.com/logo.png", "{startLink}", "https://example.com/start");


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