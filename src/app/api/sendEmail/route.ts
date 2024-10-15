import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { nome, email, cidade, pais, empresa, telefone, endereco, mensagem } = await req.json();

  // Configuração do transportador de e-mail
  const transporter = nodemailer.createTransport({
    port: 587,
    host: process.env.EMAIL_HOST,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    secure: false, // true para port 465, false para outros ports
  });

  // Configuração do e-mail
  const mailOptions = {
    from: `"Soft Eletrônica" <${process.env.EMAIL_FROM}>`, // Seu endereço de e-mail
    to: process.env.EMAIL_TO, // Destinatário
    subject: `Contato via site - ${nome}`,
    text: nome,
    html: `
      <p><strong>Nome:</strong> ${nome}<br>
      <strong>Email:</strong> ${email}<br>
      <strong>Cidade:</strong> ${cidade}<br>
      <strong>País:</strong> ${pais}<br>
      <strong>Empresa:</strong> ${empresa}<br>
      <strong>Telefone:</strong> ${telefone}<br>
      <strong>Endereço:</strong> ${endereco}<br>
      <strong>Mensagem:</strong> <br>
      ${mensagem}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (error) {
    return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
  }
}
