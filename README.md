# Prop Trading Landing Page

Bu loyiha prop trading xizmatlari uchun landing page hisoblanadi.

## O'rnatish

1. Loyihani klonlang
2. `npm install` buyrug'ini ishga tushiring
3. `.env.local` faylini yarating va quyidagi o'zgaruvchilarni qo'shing:

```env
# Telegram Bot Configuration
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
```

4. `npm run dev` buyrug'i bilan loyihani ishga tushiring

## Xususiyatlar

- Prop hisob sotib olish so'rovlarini raqamlash
- Telegram kanalga avtomatik xabar yuborish
- So'rov raqami bilan foydalanuvchiga ma'lumot berish
- JSON faylda so'rov raqamini saqlash

## API Endpoint

`/api/submit-request` - Prop hisob sotib olish so'rovini qabul qiladi va Telegram kanalga yuboradi.

### So'rov format:
```json
{
  "name": "Foydalanuvchi ismi",
  "phone": "Telefon raqami",
  "accountType": "Hisob turi va narxi",
  "message": "Qo'shimcha ma'lumot"
}
```

### Javob format:
```json
{
  "success": true,
  "requestNumber": 1,
  "message": "So'rovingiz muvaffaqiyatli yuborildi!"
}
``` 
