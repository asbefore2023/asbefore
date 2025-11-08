import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'he' | 'en' | 'fr' | 'es' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('he');
  const [customTranslations, setCustomTranslations] = useState<Record<Language, Record<string, string>>>({} as any);

  useEffect(() => {
    const loadCustomTranslations = () => {
      const langs: Language[] = ['he', 'en', 'fr', 'es', 'ru'];
      const custom: Record<Language, Record<string, string>> = {} as any;

      langs.forEach(lang => {
        const stored = localStorage.getItem(`translations_${lang}`);
        if (stored) {
          try {
            custom[lang] = JSON.parse(stored);
          } catch (e) {
            custom[lang] = {};
          }
        } else {
          custom[lang] = {};
        }
      });

      setCustomTranslations(custom);
    };

    loadCustomTranslations();

    window.addEventListener('translationsUpdated', loadCustomTranslations);
    return () => window.removeEventListener('translationsUpdated', loadCustomTranslations);
  }, []);

  const t = (key: string): string => {
    if (customTranslations[language]?.[key]) {
      return customTranslations[language][key];
    }
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

const translations: Record<Language, Record<string, string>> = {
  he: {
    'header.bsd': 'בס״ד',
    'hero.title': 'כמו פעם',
    'hero.subtitle': 'הדרכות והסברה בנושאי ממשל וכלכלה',
    'hero.cta': 'חייגו לפרטים וקביעת הדרכות',
    'form.name': 'שם',
    'form.phone': 'טלפון',
    'form.email': 'אימייל',
    'form.institution': 'שם המוסד',
    'form.submit': 'שליחה',
    'form.success': 'תודה! ניצור איתך קשר בקרוב.',
    'advantages.1': 'הדרכות מותאמות ובגובה העיניים לכולם',
    'advantages.2': 'מעל 3 שנות ניסיון בהדרכה',
    'advantages.3': 'מחירים נוחים למוסדות וארגונים אקדמיים וסטודנטיאליים',
    'advantages.4': '30 אחוזי הנחה קבועים למוסדות קדם-צבאיים וצבאיים',
    'about.pretitle': 'מי אנחנו',
    'about.title': 'אודות',
    'about.p1': 'נכון למציאות הנוכחית בימינו, נושאים חשובים רבים המשפיעים על חיינו אינם נלמדים באופן ממוקד, אם בכלל, במערכת החינוך הממלכתית. כתוצאה מכך, דורות רבים בישראל גדלים ללא הבנה בסיסית בנושאים הנחשבים בעולם המודרני לידע סטנדרטי אליו כל תלמיד ממוצע נחשף. כאן נכנסת "כמו פעם" –  תכנית המציעה הדרכות במגוון נושאים, בינהם: כלכלה, בנקאות, ממשל, מנהל ומשפטים. ההדרכות מיועדות למגוון גילאים רחב, ובנויות בגובה העניים בהתאמה לקהל היעד. אלו נועדו לספק ידע מעמיק וכלים מעשיים שיסייעו לצעירים להבין את המורכבויות של העולם הכלכלי, החברתי, והמדיני – ולהכינם לקראת אתגרי העתיד.',
    'about.p2': 'אנו מציעים מגוון רחב של הדרכות מקצועיות. כל תוכנית מעוצבת באופן שמדגיש את הקשרים בין התיאוריה לפרקטיקה, ומקנה למשתתפים הבנה רחבה על כל נושא, במטרה ראשית לכסות על פערי הידע, אך עם מטרה משנית לא פחות חשובה – לשמור את ההדרכה מעניינת, ממוקדת – ובעיקר בשפה קלילה ופשוטה.',
    'about.p3': '',
    'about.p4': '',
    'methodology.title': 'תוך שמירה על חווית למידה מעשירה,',
    'methodology.p1': 'תוך שמירה על חווית למידה מעשירה, מהנה ומעוררת סקרנות. בהדרכות יש שימת לב לפיתוח מיומנויות רכות כמו חשיבה ביקורתית. במהלך ההדרכות תשארנה (לעיתים בכוונת תחילה) שאלות פתוחות לחשיבה. שאלות שיבהירו לצעירים את מורכבות המציאות בה אנו חיים, ואת ההבנה כי לא לכל בעיה ישנה תשובה פשוטה חד-משמעית ומיידית, ולעיתים נקיטת צעדים של שמרנות וזהירות בקבלת החלטות עשויה להיות הדרך להתמודד עם אתגרים; תכונה החיונית לכל צעיר בתחילת חייו.',
    'methodology.p2': '',
    'methodology.p3': '',
    'methodology.p4': '',
    'methodology.conclusion.title': 'בסופו של דבר,',
    'methodology.conclusion.text': 'אנו מאמינים שהשקעה בהכשרה איכותית לצעירים היא המפתח לבניית חברה מצליחה ומודעת, ולכן אנו מחויבים להציע תוכן רלוונטי ועדכני, שיסייע להוביל את הדור הצעיר לעתיד מוצלח ובטוח.',
    'courses.title': 'הדרכות והרצאות',
    'courses.subtitle': 'סדרת הדרכות המיועדת והמותאמת לבכלל הגילים - א-ט (תכנית "עולם גדול במילים קטנות") והדרכות לתלמידים החל מכיתות ט-י עד לסטודנטים, חיילים וצעירים.',
    'courses.1.title': 'מערכת המשפט בישראל',
    'courses.1.desc': 'מבנה, תפקוד והמשמעות של מערכת המשפט\nההדרכה מעניקה הבנה על מערכת המשפט בישראל, מבנה ערכאותיה, סוגי הדין (פלילי, אזרחי, חוקתי ומנהלי), ותפקידה בשמירה על שלטון החוק, זכויות האזרח והסדר הציבורי. היא מיועדת להעמיק את הידע על תפקודה ומשמעותה במדינה דמוקרטית.',
    'courses.2.title': 'מדינה וכלכלה',
    'courses.2.desc': 'כל מה שצעירים חייבים לדעת לפני שיוצאים לעולם הגדול\nההדרכה מלמדת באופן קליל ומעשי על עקרונות בסיסיים בכלכלה, כמו סחר, מיסוי, תקציב מדינה, שווי המטבע ועוד... ומעניקה כלים תיאורתיים להבנת כלכלת המדינה. המטרה היא להכין את המשתתפים להתמודדות עם העולם הכלכלי ולסייע להבין את יסודות הכלכלה והתנהלותה במדינה המודרנית.',
    'courses.3.title': 'מבנה השלטון בישראל',
    'courses.3.desc': 'סמכויות, דינמיקה ותפקיד האזרח בדמוקרטיה\nההדרכה מספקת ידע על מבנה השלטון בישראל, סמכויות הרשויות ותפקידן, הדינמיקה ביניהן, ותפקידי האזרח בדמוקרטיה. היא נועדה לחזק את ההבנה, המעורבות והאחריות האזרחית ללא נקיטת עמדה פוליטית.',
    'approach.title': 'עולם גדול במילים קטנות',
    'approach.subtitle': 'הדרכה לכיתות א-ט - אז איך בעצם העולם עובד?\nכשזה מגיע לחינוך, אנו שואפים לתת לילדינו את המירב והמיטב בידיעה שאת היסודות ההשכלתיים רוכשים בגילים נמוכים ביתר קלות. במסגרת הדרכה זו יש שלוש הדרכות, אינטראקטיביות, ומלאות סיפורים – בהם התלמידים ילמדו על שלושה עקרונות בסיסיים:',
    'approach.gov.title': '1) מבנה השלטון בישראל',
    'approach.gov.desc': 'בהדרכה אינטראקטיבית.',
    'approach.econ.title': '2) התנהלות הכלכלה',
    'approach.econ.desc': 'בהדרכה סיפורית משעשעת.',
    'approach.civic.title': '3) מקומו של האזרח וכוחו במדינה',
    'approach.civic.desc': 'הדרכה מותאמת לגילי התלמידים (עד כיתה ד במשחק, ומכיתה ה בהדרכה אינטראקטיבית).',
    'approach.method.title': 'הגישה שלנו',
    'approach.method.p1': 'הגישה שלנו ב"כמו פעם" מתבססת על עקרון פארטו "שיטת 80-20" 20% מהמאמץ מפיק 80% מהתועלת.',
    'approach.method.p2': 'אנו מתמקדים בעקרונות הבסיסיים של התחומים אותם אנו מלמדים, ומתמקדים בעיקר.',
    'approach.method.p3': 'לתפיסתנו, בעצם הכרת והבנת התחומים אליהם רוב הנוער והצעירים לא נחשפים, הם מרוויחים נקודת מבט שונה וביקורתית על המציאות.',
    'approach.method.p4': 'משפט, כלכלה, ממשל ומנהל – מלבד היותם נושאים מעניינים ומסקרנים הם נושאים המשפיעים באופן ישיר על המציאות בישראל. לצערנו, נכון להיום אינם נמצאים במסגרות הלימודים באופן קבוע ועמוק – וכאן אנחנו נכנסים.',
    'approach.method.p5': 'לכל שאלה, ניתן לפנות לטלפון, לWhatsApp, או להשאיר פרטים ונחזור אליכם בהקדם.',
    'footer.contact': 'צור קשר',
    'footer.title': 'כמו פעם',
    'footer.subtitle': 'הדרכות והסברה בנושאי ממשל, מנהל וכלכלה בישראל',
    'footer.location': 'פועלים בכל הארץ',
    'footer.hours': 'ימי פעילות - א-ה',
    'footer.rights': 'כל הזכויות שמורות ל - כמו פעם',
    'footer.copyright': 'Copyright © 2024. All rights reserved.',
  },
  en: {
    'header.bsd': 'B"H',
    'hero.title': 'Kmo Pa\'am',
    'hero.subtitle': 'Training and Education in Governance and Economics',
    'hero.cta': 'Call for Details and Training Scheduling',
    'form.name': 'Name',
    'form.phone': 'Phone',
    'form.email': 'Email',
    'form.institution': 'Institution Name',
    'form.submit': 'Submit',
    'form.success': 'Thank you! We will contact you soon.',
    'advantages.1': 'Customized training accessible to everyone',
    'advantages.2': 'Over 3 years of training experience',
    'advantages.3': 'Affordable prices for academic and student institutions and organizations',
    'advantages.4': 'Permanent 30% discount for military and pre-military institutions',
    'about.pretitle': 'Who We Are',
    'about.title': 'About',
    'about.p1': 'In today\'s reality, many important topics that affect our lives are not taught in a focused manner, if at all, in the state education system. As a result, many generations in Israel grow up without a basic understanding of subjects that are considered standard knowledge in the modern world to which every average student is exposed. This is where "Kmo Pa\'am" comes in – a program offering training in a variety of topics, including: economics, banking, government, administration, and law. The training is designed for a wide range of ages, built accessibly according to the target audience. These are designed to provide in-depth knowledge and practical tools that will help young people understand the complexities of the economic, social, and political world – and prepare them for future challenges.',
    'about.p2': 'We offer a wide range of professional training. Each program is designed to emphasize the connections between theory and practice, and gives participants a broad understanding of each topic, with the primary goal of covering knowledge gaps, but with an equally important secondary goal – keeping the training interesting, focused – and especially in light and simple language.',
    'about.p3': '',
    'about.p4': '',
    'methodology.title': 'While maintaining an enriching learning experience,',
    'methodology.p1': 'While maintaining an enriching, enjoyable, and curiosity-inspiring learning experience. The training pays attention to developing soft skills such as critical thinking. During the training, open-ended questions for thought will remain (sometimes intentionally from the start). Questions that will clarify to young people the complexity of the reality in which we live, and the understanding that not every problem has a simple, unambiguous, and immediate answer, and sometimes taking steps of conservatism and caution in decision-making may be the way to deal with challenges; a characteristic vital to every young person at the beginning of their life.',
    'methodology.p2': '',
    'methodology.p3': '',
    'methodology.p4': '',
    'methodology.conclusion.title': 'At the end of the day,',
    'methodology.conclusion.text': 'We believe that investing in quality training for young people is the key to building a successful and aware society, and therefore we are committed to offering relevant and up-to-date content that will help lead the younger generation to a successful and secure future.',
    'courses.title': 'Training and Lectures',
    'courses.subtitle': 'A series of trainings designed and adapted for all ages - grades 1-9 ("A Big World in Small Words" program) and training for students from grades 9-10 onwards to university students, soldiers, and young adults.',
    'courses.1.title': 'The Israeli Legal System',
    'courses.1.desc': 'Structure, function, and significance of the legal system\nThe training provides understanding of Israel\'s legal system, the structure of its courts, types of law (criminal, civil, constitutional, and administrative), and its role in maintaining the rule of law, citizen rights, and public order. It is designed to deepen knowledge about its function and significance in a democratic state.',
    'courses.2.title': 'State and Economy',
    'courses.2.desc': 'Everything young people need to know before entering the big world\nThe training teaches in a light and practical way about basic principles in economics, such as trade, taxation, state budget, currency value, and more... and provides theoretical tools for understanding the state\'s economy. The goal is to prepare participants to deal with the economic world and help understand the foundations of economics and its conduct in the modern state.',
    'courses.3.title': 'Structure of Israeli Government',
    'courses.3.desc': 'Powers, dynamics, and the citizen\'s role in democracy\nThe training provides knowledge about the structure of government in Israel, the powers and roles of authorities, the dynamics between them, and the citizen\'s roles in democracy. It is designed to strengthen understanding, involvement, and civic responsibility without taking a political stance.',
    'approach.title': 'A Big World in Small Words',
    'approach.subtitle': 'Training for grades 1-9 - So how does the world actually work?\nWhen it comes to education, we strive to give our children the best, knowing that educational foundations are acquired more easily at a young age. Within this training, there are three interactive training sessions full of stories – in which students will learn about three basic principles:',
    'approach.gov.title': '1) Structure of Government in Israel',
    'approach.gov.desc': 'In an interactive training.',
    'approach.econ.title': '2) How the Economy Works',
    'approach.econ.desc': 'In an entertaining storytelling training.',
    'approach.civic.title': '3) The Citizen\'s Place and Power in the State',
    'approach.civic.desc': 'Training adapted to students\' ages (up to grade 4 as a game, and from grade 5 in an interactive training).',
    'approach.method.title': 'Our Approach',
    'approach.method.p1': 'Our approach at "Kmo Pa\'am" is based on the Pareto principle "80-20 method" 20% of the effort produces 80% of the benefit.',
    'approach.method.p2': 'We focus on the basic principles of the fields we teach, and focus mainly.',
    'approach.method.p3': 'In our view, by simply knowing and understanding the fields to which most youth and young people are not exposed, they gain a different and critical perspective on reality.',
    'approach.method.p4': 'Law, economics, government, and administration – in addition to being interesting and intriguing subjects, they are subjects that directly affect the reality in Israel. Unfortunately, as of today they are not found in the curriculum in a regular and deep manner – and this is where we come in.',
    'approach.method.p5': 'For any question, you can contact by phone, WhatsApp, or leave details and we will get back to you as soon as possible.',
    'footer.contact': 'Contact Us',
    'footer.title': 'Kmo Pa\'am',
    'footer.subtitle': 'Training and education in governance, administration and economics in Israel',
    'footer.location': 'Operating nationwide',
    'footer.hours': 'Business days - Sun-Thu',
    'footer.rights': 'All rights reserved to - Kmo Pa\'am',
    'footer.copyright': 'Copyright © 2024. All rights reserved.',
  },
  fr: {
    'header.bsd': 'B"H',
    'hero.title': 'Kmo Pa\'am',
    'hero.subtitle': 'Formation et Éducation en Gouvernance et Économie',
    'hero.cta': 'Appelez pour Détails et Planification de Formation',
    'form.name': 'Nom',
    'form.phone': 'Téléphone',
    'form.email': 'Email',
    'form.institution': 'Nom de l\'Institution',
    'form.submit': 'Envoyer',
    'form.success': 'Merci ! Nous vous contacterons bientôt.',
    'advantages.1': 'Formations personnalisées accessibles à tous',
    'advantages.2': 'Plus de 3 ans d\'expérience en formation',
    'advantages.3': 'Prix abordables pour les institutions et organisations académiques et étudiantes',
    'advantages.4': 'Réduction permanente de 30% pour les institutions militaires et prémilitaires',
    'about.pretitle': 'Qui Sommes-Nous',
    'about.title': 'À Propos',
    'about.p1': 'Kmo Pa\'am est une initiative éducative unique visant à fournir aux jeunes une compréhension approfondie des systèmes de gouvernance et économiques d\'Israël. Nous croyons que la connaissance est un pouvoir, et que comprendre les mécanismes qui animent l\'État et la société est essentiel pour chaque citoyen.',
    'about.p2': 'Dans le monde moderne, où l\'information est abondante mais la véritable compréhension est rare, nous apportons une nouvelle approche de l\'enseignement - une approche qui traduit des concepts complexes en un langage simple et compréhensible, permettant à chacun de saisir la vue d\'ensemble.',
    'about.p3': 'Nos formations sont adaptées à tous les groupes d\'âge, des lycéens aux jeunes qui commencent leur carrière professionnelle. Nous travaillons avec des institutions éducatives, des organisations militaires et des groupes privés, en adaptant le contenu précisément à leur situation et à leurs besoins.',
    'about.p4': 'Avec plus de trois ans d\'expérience en formation, nous sommes fiers d\'avoir réussi à transformer des sujets considérés comme "arides" ou "compliqués" en sujets fascinants, pertinents et accessibles à tous.',
    'methodology.title': 'Chaque formation est soigneusement planifiée,',
    'methodology.p1': 'Notre approche pédagogique est basée sur l\'apprentissage actif et l\'engagement continu. Nous ne croyons pas aux cours magistraux à sens unique, mais au dialogue authentique qui encourage la pensée critique et les questions.',
    'methodology.p2': 'Chaque formation commence par la compréhension des besoins spécifiques du groupe - quel est leur bagage de connaissances, quels sont leurs objectifs, et qu\'ont-ils vraiment besoin d\'apprendre. Sur cette base, nous construisons un programme personnalisé.',
    'methodology.p3': 'Nous utilisons des exemples de la vie réelle, des simulations et des exercices pratiques qui permettent aux participants d\'intérioriser le contenu de manière significative. Nous soulignons les connexions entre les différents sujets et leur pertinence pour la vie quotidienne.',
    'methodology.p4': 'De plus, nous assurons un suivi personnel - chaque participant peut nous contacter avec des questions même après la formation, et nous sommes disponibles pour des conseils et une orientation.',
    'methodology.conclusion.title': 'En fin de compte,',
    'methodology.conclusion.text': 'Notre objectif n\'est pas seulement de transmettre des informations, mais de cultiver une nouvelle génération de citoyens conscients et engagés qui comprennent les systèmes qui affectent leur vie. Nous croyons que c\'est l\'investissement le plus important dans l\'avenir de notre société.',
    'courses.title': 'Formations et Conférences',
    'courses.subtitle': 'Une série de formations conçues et adaptées pour tous les âges - des étudiants aux jeunes adultes.',
    'courses.1.title': 'Le Système Juridique Israélien',
    'courses.1.desc': 'Structure, rôle et signification du système juridique',
    'courses.2.title': 'État et Économie',
    'courses.2.desc': 'Tout ce que les jeunes doivent savoir avant d\'entrer dans le monde réel',
    'courses.3.title': 'Structure du Gouvernement Israélien',
    'courses.3.desc': 'Pouvoirs, dynamiques et rôle du citoyen dans la démocratie',
    'approach.title': 'Un Grand Monde en Petits Mots',
    'approach.subtitle': 'Formation de Développement de A à Z – Alors Comment le Monde Fonctionne-t-il Vraiment ?',
    'approach.gov.title': 'Gouvernance',
    'approach.gov.desc': 'Comprendre la structure gouvernementale, les processus de prise de décision et l\'impact du système politique sur la vie quotidienne.',
    'approach.econ.title': 'Économie',
    'approach.econ.desc': 'Principes économiques de base, compréhension du marché, gestion des finances personnelles et impact de la politique économique.',
    'approach.civic.title': 'Citoyenneté',
    'approach.civic.desc': 'Droits et devoirs, participation civique et compréhension du rôle de chaque citoyen dans une société démocratique.',
    'approach.method.title': 'Notre Approche',
    'approach.method.p1': 'Nous croyons au principe de Pareto - 80/20. Au lieu de submerger les participants d\'informations inutiles, nous nous concentrons sur les 20% les plus importants qui leur donneront 80% de la compréhension dont ils ont besoin.',
    'approach.method.p2': 'Notre approche est pratique et concrète. Nous ne parlons pas de théories abstraites, mais montrons comment les choses fonctionnent en pratique, ce qu\'elles signifient pour la vie réelle et comment utiliser ces connaissances.',
    'approach.method.p3': 'Nous utilisons un langage simple et des exemples familiers. Chaque concept complexe est traduit en mots que tout le monde comprend, construit étape par étape jusqu\'à une compréhension complète.',
    'approach.method.p4': 'À la fin de chaque formation, les participants ne savent pas seulement plus - ils comprennent mieux, peuvent penser de manière critique sur les sujets et se sentent confiants dans leurs connaissances.',
    'footer.contact': 'Contactez-Nous',
    'footer.title': 'Kmo Pa\'am',
    'footer.subtitle': 'Formation et éducation en gouvernance, administration et économie en Israël',
    'footer.location': 'Opérant dans tout le pays',
    'footer.hours': 'Jours ouvrables - Dim-Jeu',
    'footer.rights': 'Tous droits réservés à - Kmo Pa\'am',
    'footer.copyright': 'Copyright © 2024. Tous droits réservés.',
  },
  es: {
    'header.bsd': 'B"H',
    'hero.title': 'Kmo Pa\'am',
    'hero.subtitle': 'Capacitación y Educación en Gobernanza y Economía',
    'hero.cta': 'Llame para Detalles y Programación de Capacitación',
    'form.name': 'Nombre',
    'form.phone': 'Teléfono',
    'form.email': 'Correo',
    'form.institution': 'Nombre de la Institución',
    'form.submit': 'Enviar',
    'form.success': '¡Gracias! Nos pondremos en contacto pronto.',
    'advantages.1': 'Capacitación personalizada accesible para todos',
    'advantages.2': 'Más de 3 años de experiencia en capacitación',
    'advantages.3': 'Precios asequibles para instituciones y organizaciones académicas y estudiantiles',
    'advantages.4': 'Descuento permanente del 30% para instituciones militares y premilitares',
    'about.pretitle': 'Quiénes Somos',
    'about.title': 'Acerca de',
    'about.p1': 'Kmo Pa\'am es una iniciativa educativa única dirigida a proporcionar a los jóvenes una comprensión profunda de los sistemas de gobernanza y económicos de Israel. Creemos que el conocimiento es poder, y que comprender los mecanismos que impulsan el estado y la sociedad es esencial para cada ciudadano.',
    'about.p2': 'En el mundo moderno, donde la información es abundante pero la verdadera comprensión es rara, traemos un nuevo enfoque de enseñanza - un enfoque que traduce conceptos complejos en un lenguaje simple y comprensible, permitiendo a todos captar el panorama general.',
    'about.p3': 'Nuestras capacitaciones están adaptadas a todos los grupos de edad, desde estudiantes de secundaria hasta jóvenes que comienzan sus carreras profesionales. Trabajamos con instituciones educativas, organizaciones militares y grupos privados, adaptando el contenido precisamente a su situación y necesidades.',
    'about.p4': 'Con más de tres años de experiencia en capacitación, estamos orgullosos de haber logrado convertir temas considerados "áridos" o "complicados" en temas fascinantes, relevantes y accesibles para todos.',
    'methodology.title': 'Cada capacitación está cuidadosamente planificada,',
    'methodology.p1': 'Nuestro enfoque pedagógico se basa en el aprendizaje activo y el compromiso continuo. No creemos en conferencias unidireccionales, sino en el diálogo genuino que fomenta el pensamiento crítico y las preguntas.',
    'methodology.p2': 'Cada capacitación comienza comprendiendo las necesidades específicas del grupo: cuál es su base de conocimientos, cuáles son sus objetivos y qué necesitan realmente aprender. Sobre esta base, construimos un programa personalizado.',
    'methodology.p3': 'Utilizamos ejemplos de la vida real, simulaciones y ejercicios prácticos que permiten a los participantes interiorizar el material de manera significativa. Enfatizamos las conexiones entre los diferentes temas y su relevancia para la vida diaria.',
    'methodology.p4': 'Además, aseguramos un seguimiento personal: cada participante puede contactarnos con preguntas incluso después de la capacitación, y estamos disponibles para asesoramiento y orientación.',
    'methodology.conclusion.title': 'Al final del día,',
    'methodology.conclusion.text': 'Nuestro objetivo no es solo transmitir información, sino cultivar una nueva generación de ciudadanos conscientes y comprometidos que comprendan los sistemas que afectan sus vidas. Creemos que esta es la inversión más importante en el futuro de nuestra sociedad.',
    'courses.title': 'Capacitaciones y Conferencias',
    'courses.subtitle': 'Una serie de capacitaciones diseñadas y adaptadas para todas las edades - desde estudiantes hasta jóvenes adultos.',
    'courses.1.title': 'El Sistema Legal Israelí',
    'courses.1.desc': 'Estructura, rol y significado del sistema legal',
    'courses.2.title': 'Estado y Economía',
    'courses.2.desc': 'Todo lo que los jóvenes necesitan saber antes de entrar al mundo real',
    'courses.3.title': 'Estructura del Gobierno Israelí',
    'courses.3.desc': 'Poderes, dinámica y papel del ciudadano en la democracia',
    'approach.title': 'Un Gran Mundo en Palabras Pequeñas',
    'approach.subtitle': 'Capacitación de Desarrollo de la A a la Z – Entonces, ¿Cómo Funciona Realmente el Mundo?',
    'approach.gov.title': 'Gobernanza',
    'approach.gov.desc': 'Comprender la estructura gubernamental, los procesos de toma de decisiones y el impacto del sistema político en la vida diaria.',
    'approach.econ.title': 'Economía',
    'approach.econ.desc': 'Principios económicos básicos, comprensión del mercado, gestión de finanzas personales e impacto de la política económica.',
    'approach.civic.title': 'Ciudadanía',
    'approach.civic.desc': 'Derechos y deberes, participación cívica y comprensión del papel de cada ciudadano en una sociedad democrática.',
    'approach.method.title': 'Nuestro Enfoque',
    'approach.method.p1': 'Creemos en el principio de Pareto - 80/20. En lugar de abrumar a los participantes con información innecesaria, nos enfocamos en el 20% más importante que les dará el 80% de la comprensión que necesitan.',
    'approach.method.p2': 'Nuestro enfoque es práctico y concreto. No hablamos de teorías abstractas, sino que mostramos cómo funcionan las cosas en la práctica, qué significan para la vida real y cómo se puede usar este conocimiento.',
    'approach.method.p3': 'Utilizamos un lenguaje simple y ejemplos familiares. Cada concepto complejo se traduce en palabras que todos entienden, construido paso a paso hasta una comprensión completa.',
    'approach.method.p4': 'Al final de cada capacitación, los participantes no solo saben más - comprenden más, pueden pensar críticamente sobre los temas y se sienten seguros de sus conocimientos.',
    'footer.contact': 'Contáctenos',
    'footer.title': 'Kmo Pa\'am',
    'footer.subtitle': 'Capacitación y educación en gobernanza, administración y economía en Israel',
    'footer.location': 'Operando en todo el país',
    'footer.hours': 'Días laborables - Dom-Jue',
    'footer.rights': 'Todos los derechos reservados a - Kmo Pa\'am',
    'footer.copyright': 'Copyright © 2024. Todos los derechos reservados.',
  },
  ru: {
    'header.bsd': 'Б"Х',
    'hero.title': 'Кмо Паам',
    'hero.subtitle': 'Обучение и Образование по Вопросам Управления и Экономики',
    'hero.cta': 'Звоните для Получения Информации и Записи на Обучение',
    'form.name': 'Имя',
    'form.phone': 'Телефон',
    'form.email': 'Email',
    'form.institution': 'Название Учреждения',
    'form.submit': 'Отправить',
    'form.success': 'Спасибо! Мы свяжемся с вами в ближайшее время.',
    'advantages.1': 'Индивидуальное обучение, доступное каждому',
    'advantages.2': 'Более 3 лет опыта в обучении',
    'advantages.3': 'Доступные цены для академических и студенческих учреждений и организаций',
    'advantages.4': 'Постоянная скидка 30% для военных и допризывных учреждений',
    'about.pretitle': 'Кто Мы',
    'about.title': 'О Нас',
    'about.p1': 'Кмо Паам - это уникальная образовательная инициатива, направленная на предоставление молодежи глубокого понимания систем управления и экономики Израиля. Мы верим, что знание - это сила, и понимание механизмов, движущих государством и обществом, необходимо каждому гражданину.',
    'about.p2': 'В современном мире, где информация изобилует, но истинное понимание редко, мы предлагаем новый подход к обучению - подход, который переводит сложные концепции в простой, понятный язык, позволяя каждому увидеть общую картину.',
    'about.p3': 'Наши тренинги адаптированы для всех возрастных групп, от старшеклассников до молодых людей, начинающих свою профессиональную карьеру. Мы работаем с образовательными учреждениями, военными организациями и частными группами, адаптируя содержание точно под их ситуацию и потребности.',
    'about.p4': 'С более чем трехлетним опытом обучения мы гордимся тем, что нам удалось превратить темы, считающиеся "сухими" или "сложными", в увлекательные, актуальные и доступные для всех.',
    'methodology.title': 'Каждое обучение тщательно спланировано,',
    'methodology.p1': 'Наш педагогический подход основан на активном обучении и постоянном вовлечении. Мы не верим в односторонние лекции, а в подлинный диалог, который поощряет критическое мышление и вопросы.',
    'methodology.p2': 'Каждое обучение начинается с понимания конкретных потребностей группы - каков их базовый уровень знаний, каковы их цели и что им действительно нужно изучить. На этой основе мы строим индивидуальную программу.',
    'methodology.p3': 'Мы используем примеры из реальной жизни, симуляции и практические упражнения, которые позволяют участникам усвоить материал осмысленно. Мы подчеркиваем связи между различными темами и их актуальность для повседневной жизни.',
    'methodology.p4': 'Кроме того, мы обеспечиваем личное сопровождение - каждый участник может обратиться к нам с вопросами даже после обучения, и мы доступны для консультаций и руководства.',
    'methodology.conclusion.title': 'В конце концов,',
    'methodology.conclusion.text': 'Наша цель - не просто передать информацию, а воспитать новое поколение сознательных, вовлеченных граждан, понимающих системы, влияющие на их жизнь. Мы верим, что это самая важная инвестиция в будущее нашего общества.',
    'courses.title': 'Тренинги и Лекции',
    'courses.subtitle': 'Серия тренингов, разработанных и адаптированных для всех возрастов - от студентов до молодых взрослых.',
    'courses.1.title': 'Правовая Система Израиля',
    'courses.1.desc': 'Структура, роль и значение правовой системы',
    'courses.2.title': 'Государство и Экономика',
    'courses.2.desc': 'Все, что молодые люди должны знать перед выходом в реальный мир',
    'courses.3.title': 'Структура Правительства Израиля',
    'courses.3.desc': 'Полномочия, динамика и роль гражданина в демократии',
    'approach.title': 'Большой Мир Малыми Словами',
    'approach.subtitle': 'Тренинг по Развитию от А до Я – Как на Самом Деле Устроен Мир?',
    'approach.gov.title': 'Управление',
    'approach.gov.desc': 'Понимание структуры правительства, процессов принятия решений и влияния политической системы на повседневную жизнь.',
    'approach.econ.title': 'Экономика',
    'approach.econ.desc': 'Основные экономические принципы, понимание рынка, управление личными финансами и влияние экономической политики.',
    'approach.civic.title': 'Гражданство',
    'approach.civic.desc': 'Права и обязанности, гражданское участие и понимание роли каждого гражданина в демократическом обществе.',
    'approach.method.title': 'Наш Подход',
    'approach.method.p1': 'Мы верим в принцип Парето - 80/20. Вместо того, чтобы перегружать участников ненужной информацией, мы фокусируемся на самых важных 20%, которые дадут им 80% необходимого понимания.',
    'approach.method.p2': 'Наш подход практичен и конкретен. Мы не говорим об абстрактных теориях, а показываем, как все работает на практике, что это значит для реальной жизни и как можно использовать эти знания.',
    'approach.method.p3': 'Мы используем простой язык и знакомые примеры. Каждая сложная концепция переводится в слова, понятные всем, и строится шаг за шагом до полного понимания.',
    'approach.method.p4': 'В конце каждого обучения участники не просто знают больше - они понимают больше, могут критически мыслить о темах и чувствуют уверенность в своих знаниях.',
    'footer.contact': 'Свяжитесь с Нами',
    'footer.title': 'Кмо Паам',
    'footer.subtitle': 'Обучение и образование по вопросам управления, администрирования и экономики в Израиле',
    'footer.location': 'Работаем по всей стране',
    'footer.hours': 'Рабочие дни - Вс-Чт',
    'footer.rights': 'Все права защищены - Кмо Паам',
    'footer.copyright': 'Copyright © 2024. Все права защищены.',
  }
};
