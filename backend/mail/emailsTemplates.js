export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verifique seu e-mail</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #BA4DE3, #8A05BE); padding: 20px; text-align: center; border-radius: 5px 5px 0 0;">
    <h1 style="color: white; margin: 0;">Confirme seu e-mail</h1>
  </div>
  <div style="background-color: #ffffff; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Olá,</p>
    <p>Obrigado por se cadastrar! Seu código de verificação é:</p>
    <div style="text-align: center; margin: 30px 0;">
      <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #BA4DE3;">{verificationCode}</span>
    </div>
    <p>Digite este código na página de verificação para concluir seu cadastro.</p>
    <p>Por motivos de segurança, este código expira em 15 minutos.</p>
    <p>Se você não criou uma conta conosco, ignore este e-mail.</p>    
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>Esta é uma mensagem automática. Por favor, não responda este e-mail.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #BA4DE3, #8A05BE); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Password Reset Successful</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We're writing to confirm that your password has been successfully reset.</p>
    <div style="text-align: center; margin: 30px 0;">
      <div style="background-color: #BA4DE3; color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 30px;">
        ✓
      </div>
    </div>
    <p>If you did not initiate this password reset, please contact our support team immediately.</p>
    <p>For security reasons, we recommend that you:</p>
    <ul>
      <li>Use a strong, unique password</li>
      <li>Enable two-factor authentication if available</li>
      <li>Avoid using the same password across multiple sites</li>
    </ul>
    <p>Thank you for helping us keep your account secure.</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Redefinir Senha</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
  <table align="center" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; margin: 0 auto; border-radius: 8px; overflow: hidden;">
    <tr>
      <td style="background: linear-gradient(to right, #BA4DE3, #8A05BE); padding: 30px; text-align: center;">
        <img src="{logoUrl}" alt="Logo do App" style="max-height: 50px; margin-bottom: 15px;">
        <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Redefinir a Senha</h1>
      </td>
    </tr>
    <tr>
      <td style="padding: 30px; color: #333;">       

        <p style="font-size: 16px;">
          Recebemos uma solicitação para redefinir a sua senha. Se você não fez essa solicitação, basta ignorar este e-mail.
        </p>

        <p style="font-size: 16px;">
          Para redefinir sua senha, clique no botão abaixo:
        </p>

        <div style="text-align: center; margin: 30px 0;">
          <a href="{resetURL}" style="background-color: #BA4DE3; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-size: 16px; font-weight: bold;">
            Redefinir Senha
          </a>
        </div>

        <p style="font-size: 14px; color: #555;">
          Este link expirará em 1 hora por motivos de segurança.
        </p>
        
      </td>
    </tr>
    <tr>
      <td style="text-align: center; padding: 20px; font-size: 12px; color: #aaa;">
        Esta é uma mensagem automática. Por favor, não responda este e-mail.
      </td>
    </tr>
  </table>
</body>
</html>

`;

export const WELCOME_EMAIL_TEMPLATE = `

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Bem-vindo(a)!</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
  <table align="center" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; margin: 0 auto; border-radius: 8px; overflow: hidden;">
    <tr>
      <td style="background: linear-gradient(to right, #BA4DE3, #8A05BE); padding: 30px; text-align: center;">
        <img src="{logoUrl}" alt="Logo do App" style="max-height: 50px; margin-bottom: 15px;">
        <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Bem-vindo(a)</h1>
      </td>
    </tr>
    <tr>
      <td style="padding: 30px; color: #333;">
        <p style="font-size: 16px;">Olá, <strong>{userName}</strong>,</p>

        <p style="font-size: 16px;">
          Estamos muito felizes em ter você conosco! 🎉
        </p>

        <p style="font-size: 16px;">
          Com sua conta agora ativa, você já pode explorar todos os recursos do nosso aplicativo e aproveitar ao máximo a sua experiência.
        </p>

        <div style="text-align: center; margin: 30px 0;">
          <a href="{startLink}" style="background-color: #BA4DE3; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-size: 16px;">
            Começar Agora
          </a>
        </div>

        <p style="font-size: 14px; color: #555;">
          Se tiver alguma dúvida ou precisar de ajuda, nossa equipe está aqui para você.
        </p>

        <p style="margin-top: 30px; font-size: 14px;">Bem-vindo mais uma vez!<br><strong>Equipe do {appName}</strong></p>
      </td>
    </tr>
    <tr>
      <td style="text-align: center; padding: 20px; font-size: 12px; color: #aaa;">
        Esta é uma mensagem automática. Por favor, não responda este e-mail.
      </td>
    </tr>
  </table>
</body>
</html>

`;