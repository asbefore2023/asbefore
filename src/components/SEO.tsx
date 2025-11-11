import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';

const seoData = {
  he: {
    title: 'כמו פעם - הדרכות והסברה בנושאי ממשל וכלכלה',
    description: 'הדרכות מקצועיות בנושאי כלכלה, בנקאות, ממשל, מנהל ומשפטים. תוכניות מותאמות לכל הגילאים עם מחירים נוחים למוסדות קדם-צבאיים וצבאיים.',
    keywords: 'הדרכות, כלכלה, ממשל, חינוך כלכלי, משפט, בנקאות, מערכת המשפט בישראל, מבנה השלטון',
  },
  en: {
    title: 'Kmo Pa\'am - Training and Education in Governance and Economics',
    description: 'Professional training in economics, banking, government, administration, and law. Programs adapted for all ages with affordable prices for military and pre-military institutions.',
    keywords: 'training, economics, government, economic education, law, banking, Israeli legal system, government structure',
  },
  fr: {
    title: 'Kmo Pa\'am - Formation et Éducation en Gouvernance et Économie',
    description: 'Formation professionnelle en économie, banque, gouvernance, administration et droit. Programmes adaptés à tous les âges avec des prix abordables pour les institutions militaires et prémilitaires.',
    keywords: 'formation, économie, gouvernance, éducation économique, droit, banque, système juridique israélien, structure gouvernementale',
  },
  es: {
    title: 'Kmo Pa\'am - Capacitación y Educación en Gobernanza y Economía',
    description: 'Capacitación profesional en economía, banca, gobierno, administración y derecho. Programas adaptados para todas las edades con precios asequibles para instituciones militares y premilitares.',
    keywords: 'capacitación, economía, gobierno, educación económica, derecho, banca, sistema legal israelí, estructura gubernamental',
  },
  ru: {
    title: 'Кмо Паам - Обучение и Образование по Вопросам Управления и Экономики',
    description: 'Профессиональное обучение по вопросам экономики, банковского дела, управления, администрирования и права. Программы адаптированы для всех возрастов с доступными ценами для военных и допризывных учреждений.',
    keywords: 'обучение, экономика, управление, экономическое образование, право, банковское дело, правовая система Израиля, структура правительства',
  },
};

export default function SEO() {
  const { language } = useLanguage();
  const seo = seoData[language];

  return (
    <Helmet>
      <html lang={language} dir={language === 'he' ? 'rtl' : 'ltr'} />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://asbefore2023.com/${language}`} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:site_name" content="Kmo Pa'am" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={`https://asbefore2023.com/${language}`} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />

      {/* Alternate Languages */}
      <link rel="alternate" hrefLang="he" href="https://asbefore2023.com/he" />
      <link rel="alternate" hrefLang="en" href="https://asbefore2023.com/en" />
      <link rel="alternate" hrefLang="fr" href="https://asbefore2023.com/fr" />
      <link rel="alternate" hrefLang="es" href="https://asbefore2023.com/es" />
      <link rel="alternate" hrefLang="ru" href="https://asbefore2023.com/ru" />
      <link rel="alternate" hrefLang="x-default" href="https://asbefore2023.com/he" />

      {/* Canonical URL */}
      <link rel="canonical" href={`https://asbefore2023.com/${language}`} />
    </Helmet>
  );
}
