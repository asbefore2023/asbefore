# 📧 מדריך שלם להגדרת EmailJS - צעד אחר צעד עם כל הפרטים

## 🎯 מה נלמד במדריך?
1. איך ליצור חשבון EmailJS
2. איך לחבר את Gmail
3. איך ליצור תבנית אימייל מעוצבת בעברית
4. איך להזין את המפתחות בקוד
5. פתרון בעיות נפוצות

**זמן משוער:** 15 דקות

---

# חלק 1: יצירת חשבון והגדרה בסיסית

## שלב 1: הרשמה לEmailJS

### 1️⃣ פתח את האתר
```
🌐 https://www.emailjs.com
```

### 2️⃣ לחץ על Sign Up
- תמצא את הכפתור בפינה השמאלית העליונה
- או בתפריט הראשי

### 3️⃣ מלא פרטים
```
📧 Email: your-email@gmail.com
🔒 Password: [סיסמה חזקה - לפחות 8 תווים]
```

### 4️⃣ אמת אימייל
- עבור לתיבת הדואר
- פתח מייל מ-EmailJS
- לחץ "Verify Email"
- חזור ל-EmailJS

---

## שלב 2: הוספת שירות Gmail

### 1️⃣ היכנס לדשבורד
אחרי התחברות תראה מסך ראשי

### 2️⃣ לחץ Email Services
```
📍 מיקום: תפריט שמאלי → Email Services
```

### 3️⃣ לחץ Add New Service
```
📍 מיקום: כפתור כחול בצד ימין למעלה
```

### 4️⃣ בחר Gmail
תראה רשימה של ספקים:
- Gmail ✅ (בחר את זה)
- Outlook
- Yahoo
- ועוד...

### 5️⃣ חבר חשבון Google
1. לחץ "Connect Account"
2. תיפתח חלונית Google
3. בחר את האימייל שאליו תרצה לקבל הודעות
4. לחץ "Allow" (אשר הרשאות)

### 6️⃣ שמור Service
1. (אופציונלי) שנה את שם השירות
2. לחץ "Create Service"

### ⚠️ חשוב! שמור את ה-Service ID
```
תראה משהו כמו:
service_abc123xyz

📋 העתק והדבק בקובץ טקסט זמני!
```

---

# חלק 2: יצירת תבנית אימייל

## שלב 3: בניית Template מעוצב

### 1️⃣ פתח Email Templates
```
📍 תפריט שמאלי → Email Templates
```

### 2️⃣ צור תבנית חדשה
לחץ "Create New Template"

### 3️⃣ שם התבנית
```
Template Name: contact_form_hebrew
```

### 4️⃣ נושא האימייל (Subject)
מחק הכל ושים:
```
הודעה חדשה מהאתר - {{from_name}}
```

### 5️⃣ תוכן האימייל - COPY & PASTE

**👇 העתק את כל הקוד הזה:**

```html
<div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f5f5f5;">
  
  <!-- כותרת עליונה -->
  <div style="background: linear-gradient(135deg, #001f5b 0%, #003080 100%); color: white; padding: 30px 20px; text-align: center; border-radius: 10px 10px 0 0;">
    <h1 style="margin: 0 0 10px 0; font-size: 28px; font-weight: bold;">
      🔔 הודעה חדשה מהאתר
    </h1>
    <p style="margin: 0; font-size: 16px; opacity: 0.9;">
      כמו פעם - הדרכות והסברה בנושאי ממשל וכלכלה
    </p>
  </div>

  <!-- תוכן ראשי -->
  <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px;">
    
    <!-- כותרת פנימית -->
    <h2 style="color: #001f5b; font-size: 22px; margin: 0 0 20px 0; padding-bottom: 10px; border-bottom: 3px solid #001f5b;">
      📋 פרטי הפונה
    </h2>

    <!-- טבלת פרטים -->
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 15px; font-weight: bold; font-size: 16px; width: 140px; border: 1px solid #e0e0e0;">
          👤 שם מלא
        </td>
        <td style="padding: 15px; font-size: 16px; border: 1px solid #e0e0e0;">
          {{from_name}}
        </td>
      </tr>
      <tr>
        <td style="padding: 15px; font-weight: bold; font-size: 16px; border: 1px solid #e0e0e0;">
          📞 טלפון
        </td>
        <td style="padding: 15px; font-size: 16px; border: 1px solid #e0e0e0;">
          <a href="tel:{{phone}}" style="color: #001f5b; text-decoration: none; font-weight: 500;">
            {{phone}}
          </a>
        </td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 15px; font-weight: bold; font-size: 16px; border: 1px solid #e0e0e0;">
          📧 אימייל
        </td>
        <td style="padding: 15px; font-size: 16px; border: 1px solid #e0e0e0;">
          <a href="mailto:{{email}}" style="color: #001f5b; text-decoration: none; font-weight: 500;">
            {{email}}
          </a>
        </td>
      </tr>
      <tr>
        <td style="padding: 15px; font-weight: bold; font-size: 16px; border: 1px solid #e0e0e0;">
          🏢 מוסד/ארגון
        </td>
        <td style="padding: 15px; font-size: 16px; border: 1px solid #e0e0e0;">
          {{institution}}
        </td>
      </tr>
    </table>

    <!-- מידע נוסף -->
    <div style="background-color: #e8f0ff; padding: 20px; border-radius: 8px; border-right: 4px solid #001f5b; margin-bottom: 25px;">
      <p style="margin: 0 0 10px 0; font-size: 15px; color: #333;">
        <strong>📅 תאריך ושעה:</strong> {{date}}
      </p>
      <p style="margin: 0; font-size: 15px; color: #333;">
        <strong>🌐 שפת הטופס:</strong> {{language}}
      </p>
    </div>

    <!-- קריאה לפעולה -->
    <div style="text-align: center; padding: 25px 0; border-top: 2px solid #f0f0f0;">
      <a href="tel:{{phone}}" style="display: inline-block; background-color: #001f5b; color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
        📞 התקשר עכשיו
      </a>
    </div>

  </div>

  <!-- פוטר -->
  <div style="background-color: #f5f5f5; padding: 20px; text-align: center;">
    <p style="margin: 0 0 10px 0; color: #666; font-size: 14px;">
      הודעה זו נשלחה אוטומטית מטופס הקשר באתר "כמו פעם"
    </p>
    <p style="margin: 0; color: #999; font-size: 12px;">
      📱 <a href="tel:0553070093" style="color: #001f5b; text-decoration: none; font-weight: bold;">0553070093</a>
      | <a href="tel:+972553070093" style="color: #001f5b; text-decoration: none;">+972-55-307-0093</a>
    </p>
    <p style="margin: 10px 0 0 0; color: #999; font-size: 11px;">
      פועלים בכל הארץ | ימי פעילות: א-ה
    </p>
  </div>

</div>
```

### 6️⃣ הגדרות Template (Settings)

גלול למטה למקטע "Settings" והגדר:

#### To email:
```
{{email}}
```
*(שולח עותק גם למי שמילא)*

#### From name:
```
כמו פעם - {{from_name}}
```

#### Reply to:
```
{{email}}
```
*(מאפשר לענות ישירות)*

### 7️⃣ בדוק את התבנית

לחץ "Test it" ומלא:
```
from_name: יוסי כהן
phone: 050-1234567
email: test@example.com
institution: תיכון דוגמה
date: 08/11/2025 15:30
language: עברית
```

לחץ "Send Test Email" ובדוק שקיבלת!

### 8️⃣ שמור Template

1. לחץ "Save" (למעלה מימין)
2. **שמור את ה-Template ID!**

```
⚠️ חשוב!
template_xyz789abc

📋 העתק לקובץ טקסט!
```

---

# חלק 3: קבלת המפתחות

## שלב 4: Public Key

### 1️⃣ לחץ על שם המשתמש
```
📍 פינה שמאלית עליונה
```

### 2️⃣ בחר Account

### 3️⃣ לחץ General (בתפריט צד)

### 4️⃣ העתק Public Key
```
תראה קופסה:
Public Key: xYzAbC123...

לחץ על כפתור ה-Copy 📋
```

**שמור בקובץ טקסט!**

---

# חלק 4: הזנה בקוד

## שלב 5: עדכון הפרויקט

### 1️⃣ פתח את הקובץ
```
src/config/emailjs.ts
```

### 2️⃣ תראה את זה:
```typescript
export const EMAILJS_CONFIG = {
  publicKey: 'VOTRE_PUBLIC_KEY',
  serviceId: 'VOTRE_SERVICE_ID',
  templateId: 'VOTRE_TEMPLATE_ID',
};
```

### 3️⃣ החלף לערכים שלך:
```typescript
export const EMAILJS_CONFIG = {
  publicKey: 'xYzAbC123DefGhi456',    // ← הדבק כאן
  serviceId: 'service_abc123xyz',     // ← הדבק כאן  
  templateId: 'template_xyz789abc',   // ← הדבק כאן
};
```

### 4️⃣ שמור (Ctrl+S / Cmd+S)

---

# חלק 5: בדיקה

## שלב 6: טסט סופי

### 1️⃣ הרץ את הפרויקט
```bash
npm run dev
```

### 2️⃣ פתח דפדפן
```
http://localhost:5173
```

### 3️⃣ גלול לטופס קשר

### 4️⃣ מלא פרטים:
```
שם: יוסי כהן
טלפון: 050-1234567
אימייל: your-test@gmail.com  
מוסד: תיכון דוגמה
```

### 5️⃣ לחץ "שליחה"

### ✅ מה צריך לקרות:
1. כפתור יראה "שולח..." עם אנימציה
2. אחרי 2-3 שניות: הודעת הצלחה
3. השדות יתרוקנו
4. תקבל אימייל תוך 1-2 דקות

---

# 🔧 פתרון בעיות

## בעיה: "שגיאה בשליחת ההודעה"

### פתרון A: בדוק Console
1. לחץ F12 בדפדפן
2. טאב Console
3. חפש שגיאות אדומות

### שגיאות נפוצות:

#### "The public key is required"
```
✅ פתרון: בדוק ש-publicKey בקובץ emailjs.ts לא ריק
```

#### "Service doesn't exist"
```
✅ פתרון:
1. חזור ל-EmailJS → Email Services
2. לחץ על השירות
3. העתק שוב את ה-Service ID
```

#### "Template not found"
```
✅ פתרון:
1. חזור ל-EmailJS → Email Templates
2. לחץ על התבנית
3. העתק שוב את ה-Template ID
```

---

## בעיה: האימייל לא מגיע

### ✅ בדיקות:
1. חפש בספאם/דואר זבל
2. EmailJS Dashboard → Logs (בדוק שגיאות)
3. וודא שאישרת את כתובת האימייל
4. בדוק ש-Gmail מחובר נכון

---

## בעיה: תצוגה לא תקינה

### אימייל באנגלית?
```
✅ וודא שהעתקת את כל ה-HTML מהמדריך
✅ בדוק שיש dir="rtl" בתחילת ה-div
```

### עיצוב שבור?
```
✅ חלק מ-Email Clients לא תומכים ב-CSS מלא
✅ Gmail אמור להציג נכון
```

---

# 📊 ניהול ומעקב

## בדיקת Logs

### איפה?
```
EmailJS Dashboard → Logs
```

### מה תראה?
- ✅ ירוק = הצליח
- ❌ אדום = נכשל
- 📊 סטטיסטיקות שימוש

## בדיקת מכסה

```
Dashboard → פינה שמאלית עליונה
"X / 200 emails this month"
```

### אם מגיע ל-200:
1. חכה לחודש הבא (מתאפס אוטומטית)
2. שדרג לתוכנית בתשלום ($7-15/חודש)

---

# 💡 טיפים חשובים

## 1. אבטחה
```
❌ אל תפרסם את המפתחות ב:
- GitHub ציבורי (בלי .gitignore)
- פורומים
- קבוצות WhatsApp

✅ המפתחות בטוחים בצד הלקוח
(Public Key מיועד לזה)
```

## 2. תחזוקה
```
✅ בדוק פעם בחודש ששליחה עובדת
✅ עקוב אחר המכסה
✅ שמור את המפתחות במקום בטוח
```

## 3. שדרוגים עתידיים (אופציונלי)

### תבניות מרובות:
```javascript
// בקוד
const templateId = language === 'he' 
  ? 'template_hebrew'
  : 'template_english';
```

### שדות נוספים:
```
- הודעה חופשית
- העדפת זמן ליצירת קשר
- נושא ההדרכה
```

---

# ✅ Checklist סופי

לפני שסוגרים:

- [ ] חשבון EmailJS פעיל
- [ ] Gmail מחובר
- [ ] Service ID שמור
- [ ] Template נוצר ונבדק
- [ ] Template ID שמור
- [ ] Public Key הועתק
- [ ] כל 3 המפתחות הוזנו ב-emailjs.ts
- [ ] npm run dev רץ
- [ ] שלחתי טופס בדיקה
- [ ] קיבלתי אימייל מעוצב
- [ ] האימייל בעברית (RTL)

---

# 🎉 סיימת בהצלחה!

## מה יקרה עכשיו?

כל פעם שמישהו ימלא טופס באתר:
1. האימייל יישלח אוטומטית
2. תקבל הודעה מעוצבת בעברית
3. תוכל ללחוץ ישירות לטלפון/אימייל
4. הכל ימשך 2-3 שניות

## תמיכה נוספת

- 📚 EmailJS Docs: https://www.emailjs.com/docs/
- 💬 Support: support@emailjs.com
- 🐛 GitHub Issues: בפרויקט

---

**בהצלחה רבה! 🚀**

*מדריך זה נכתב במיוחד עבור "כמו פעם"*
*עודכן לאחרונה: נובמבר 2025*
