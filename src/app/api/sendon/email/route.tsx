import { NextResponse } from 'next/server'
import { Resend } from 'resend';
import { pool } from '@/lib/db'

interface ContactRequestBody {
  name?: string
  email?: string
  number?:string
  message?: string
  bot?:string
}

export async function POST(request:Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const body:ContactRequestBody = await request.json();
    const { name, email, number, message,bot } = body;

    if (bot) {
      return NextResponse.json({ success: true }, {status:200})
    }


    if (!name || !email) {
      return NextResponse.json({ error: 'Имя и почта обязательны' }, { status: 400 })
    }

    const insertQuery = `INSERT INTO leads (name, email, number, message) VALUES($1, $2, $3,$4) RETURNING id`

    await pool.query(insertQuery, [name, email, number, message]);

    try {
      await resend.emails.send({
        from: 'PerSolution bot',
        to: [process.env.NOTIFICATION_EMAIL as string],
        subject: `🔥 Новая заявка от ${name}`,
        html: `
        <h2>Новая заявка с сайта</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Телефон:</strong> ${number || 'Не указан'}</p>
        <p><strong>Сообщение:</strong> ${message || 'Без сообщения'}</p>
        `
      })
    } catch (emailError) {
      console.error('Ошибка отправки через Resend:', emailError);
    }
     return NextResponse.json({ success: true, message: 'Заявка отправлена' }, { status: 200 });

  } catch (error) {
    console.error("Ошибка сервера", error);
    return NextResponse.json({ error: "Внутренняя ошибка сервера" }, {status: 500})
  }
}
