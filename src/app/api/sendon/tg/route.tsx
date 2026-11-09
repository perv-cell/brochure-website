import { NextResponse } from "next/server";
import { db } from '@/db'
import { leads } from '@/db/schema'

interface ContactRequestBody {
  name?: string
  email?: string
  number?:string
  message?: string
  bot?:string
}

export async function POST(request: Request) {

  try {
    const body: ContactRequestBody = await request.json();
    const { name, email, number, message, bot } = body;

    if (bot) {
      return NextResponse.json({ success: true }, {status:200})
    }

    if (!name || !email) {
      return NextResponse.json({ error: 'Имя и почта обязательны' }, { status: 400 })
    }

    await db.insert(leads).values({name, email, message})
    const tokenId = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (tokenId && chatId) {
      try {
        const res = await fetch(`https://api.telegram.org/bot${tokenId}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: `🔥 Новая заявка!\n\nИмя: ${name}\nНомер: ${number}\nEmail: ${email}\nСообщение: ${message || 'Без сообщения'}`,
          }),
        });
      } catch (tgError) {
        console.error('Ошибка отправки в Telegram:', tgError);
      }
    }
    return NextResponse.json({ success: true, message: 'Заявка успешно отправлена'}, {status:200})
  }catch (error) {

      console.error('Ошибка сервера при обработке заявки:', error);


      return NextResponse.json(
        { error: 'Внутренняя ошибка сервера. Попробуйте позже.' },
        { status: 500 }
      );
    }

}
