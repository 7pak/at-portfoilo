import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const translations = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      team: 'Team',
      contact: 'Contact',
      resume: 'Resume',
    },
    hero: {
      greeting: "Hello, I'm",
      name: 'Abdalla Tawfig',
      roles: ['Software Engineer', 'Mobile Developer', 'Full‑Stack Developer'],
      tagline:
        'I’m a software engineer who loves building smooth, intuitive digital experiences. I enjoy turning ideas into real products that solve real problems. Always learning, always creating.',
      ctas: { work: 'View My Work', contact: 'Get In Touch' },
    },
    about: {
      index: '01.',
      title: 'About Me',
      p1:
        'My journey in software began at university, where I studied Software Engineering. That foundation in systems thinking, clean abstractions, and building maintainable code sparked a deep curiosity about how digital products come together — and what makes them feel smooth and intuitive. Since then, I’ve focused on mobile (Flutter, Kotlin), frontend (React), and backend (Spring Boot, REST APIs, Firebase/PostgreSQL), bringing the pieces together with clear architecture and practical delivery.',
      p2:
        'What I enjoy most is the mix of creativity and problem-solving. Every project is a chance to design something simple, solve a real challenge, and bring ideas to life in a way that feels effortless for the user. My philosophy is straightforward: build with clarity, keep things scalable, and always keep learning.',
      p3:
        'I’m also part of DRAXA, a small but focused team that builds modern apps, websites, and end-to-end systems. We use AI throughout our development process to help our clients save money, reduce delivery time, and get smarter, more efficient solutions. Our goal is to blend thoughtful design with solid engineering to create products that look great, perform well, and deliver real value.',
      servicesTitle: 'What We Offer',
      services: [
        { title: 'Frontend Development', desc: 'Modern React UIs that are fast, accessible, and scalable.' },
        { title: 'Backend Development', desc: 'Robust APIs and services designed for reliability and security.' },
        { title: 'Mobile Development', desc: 'Native iOS/Android and cross‑platform apps with clean architecture.' },
        { title: 'UI/UX Design', desc: 'Design systems, prototypes, and delightful micro‑interactions.' },
      ],
    },
    experience: {
      index: '02.',
      title: 'Experience',
      aria: {
        selectCompany: 'Select company to view details',
        techStack: 'Tech stack used',
        openCompany: (c) => `Open ${c} website`,
      },
    },
    projects: {
      index: '03.',
      title: "Things I've Built Lately",
      aria: {
        technologies: 'Technologies',
        github: 'GitHub Repository',
        demo: 'Live Demo',
      },
      cta: {
        showMore: 'Show More',
        showLess: 'Show Less',
      },
      featured: [
        {
          label: 'Featured Project',
          alt: 'Corteks app icon',
          desc:
            'Currently building the mobile app for corteksa.org with a focus on clean UI, robust data handling, and scalable architecture. Iterative development in progress with staged releases.',
        },
        {
          label: 'Featured Project',
          alt: 'Autoinvo app screen showing receipt list',
          desc:
            'Autoinvo is a smart receipt management and invoicing app built for simplicity, speed, and reliability. Users can scan receipts using the camera or upload from their gallery, then filter and export them as PDFs. It supports full offline functionality with automatic sync when online — perfect for tracking expenses on the go.',
        },
        {
          label: 'Featured Project',
          alt: 'B2B Marketer product video demo',
          desc:
            'A B2B e-commerce platform connecting Turkish manufacturers with global buyers, particularly in Arab markets. It spans textiles, electronics, food, and machinery — facilitating seamless trade and helping boost exports. Uses clean architecture, reliable payments, and in-app browsing for a cohesive experience.',
        },
      ],
      others: [
        { desc: 'A sleek eCommerce app focused on fast shopping, clean architecture, and dynamic price updates — simplifying product browsing and purchasing.' },
        { desc: 'WebSocket-based chat with presence, typing indicators, and message history.' },
        { desc: 'Drag-and-drop tasks, swimlanes, and team assignments with activity logs.' },
        { desc: 'Secure payment flows with 3DS and webhook reconciliation.' },
        { desc: 'Camera-based attendance with geofencing and notifications.' },
        { desc: 'Filterable insights with real-time charts and custom segments.' },
        { desc: 'Unified routing handling for app ↔ web deep links.' },
        { desc: 'Chunked uploads with retry, thumbnail generation, and CDN caching.' },
        { desc: 'Multi-channel notifications with templates and scheduling.' },
        { desc: 'Markdown posts with tags, search, and RSS feed.' },
      ],
    },
    skills: {
      index: '04.',
      title: 'Skills & Technologies',
      categoriesTitles: {
        'prog-langs': 'Languages',
        'backend-databases': 'Backend & Databases',
        'frontend-mobile': 'Frontend & Mobile',
        architecture: 'Architectural Pattern',
        'testing-tools': 'Testing & Tools',
        'spoken-langs': 'Languages (Human)',
      },
      spokenNames: { english: 'English', arabic: 'Arabic' },
    },
    contact: {
      index: '06.',
      title: 'Get In Touch',
      heroTitle: "Let's Work Together",
      subtitle:
        "Have a project in mind or looking for a collaborator? I'm available for freelance, contract, and product‑focused engagements. Let's build something reliable, scalable, and delightful.",
      ctas: { sayHello: 'Say Hello', whatsapp: 'WhatsApp Me' },
      labels: { github: 'GitHub', email: 'Email' },
      methods: { orEmail: 'Or email me at', orWhatsApp: 'Or WhatsApp me at', orFindMeOn: 'Or find me on' },
      aria: { sendEmail: 'Send email', whatsapp: 'WhatsApp' },
    },
    footer: {
      creditPrefix: 'Designed & Built by',
      tooltip: 'Thanks for visiting! ✨',
      builtWith: 'Built with React',
      copyright: '© {year} AT Software',
    },
    social: {
      aria: 'Social links',
      labels: { github: 'GitHub', linkedin: 'LinkedIn', email: 'Email' },
    },
    scrollTop: { aria: 'Scroll to top' },
  },
  ar: {
    nav: {
      about: 'عنّي',
      experience: 'الخبرات',
      projects: 'المشاريع',
      skills: 'المهارات',
      team: 'الفريق',
      contact: 'تواصل',
      resume: 'السيرة الذاتية',
    },
    hero: {
      greeting: 'مرحباً، أنا',
      name: 'عبدالله توفيق',
      roles: ['مهندس برمجيات', 'مطوّر تطبيقات جوّال', 'مطوّر متكامل'],
      tagline:
        'أنا مهندس برمجيات أحب بناء تجارب رقمية سلسة وبديهية. أستمتع بتحويل الأفكار إلى منتجات حقيقية تحلّ مشكلات فعلية. أتعلم دائماً وأصنع دائماً.',
      ctas: { work: 'شاهد أعمالي', contact: 'تواصل معي' },
    },
    about: {
      index: '01.',
      title: 'نبذة عنّي',
      p1:
        'بدأت رحلتي في البرمجة من الجامعة حيث درست هندسة البرمجيات. هذا الأساس في التفكير المنظومي والبُنى الواضحة وبناء كود قابل للصيانة أشعل فضولي حول كيف تتكامل المنتجات الرقمية — وما الذي يجعلها سلسة وبديهية. منذ ذلك الحين ركّزت على تطوير المحمول (Flutter, Kotlin)، والواجهة الأمامية (React)، والخلفية (Spring Boot, REST APIs, Firebase/PostgreSQL)، مع بنية واضحة وتسليم عملي.',
      p2:
        'أكثر ما أحبّه هو مزيج الإبداع وحلّ المشكلات. كل مشروع فرصة لتصميم شيء بسيط، وحلّ تحدٍ حقيقي، وتحويل الأفكار إلى تجارب سهلة للمستخدم. فلسفتي واضحة: ابنِ بوضوح، حافظ على قابلية التوسّع، واستمرّ بالتعلّم.',
      p3:
        'أنا أيضاً جزء من فريق DRAXA؛ فريق صغير ومركّز يبني تطبيقات ومواقع وأنظمة شاملة. نستخدم الذكاء الاصطناعي طوال عملية التطوير لمساعدة عملائنا على خفض التكاليف وتسريع التسليم والحصول على حلول أذكى وأكثر كفاءة. هدفنا المزج بين التصميم المدروس والهندسة المتينة لصناعة منتجات جميلة وعملية وتمنح قيمة حقيقية.',
      servicesTitle: 'ماذا نقدّم',
      services: [
        { title: 'تطوير الواجهة الأمامية', desc: 'واجهات React حديثة سريعة وقابلة للوصول وقابلة للتوسّع.' },
        { title: 'تطوير الخلفية', desc: 'واجهات وخدمات موثوقة مصمّمة للأمان والاعتمادية.' },
        { title: 'تطوير المحمول', desc: 'تطبيقات iOS/Android أصلية ومتعدّدة المنصات ببنية نظيفة.' },
        { title: 'تصميم واجهات وتجربة المستخدم', desc: 'أنظمة تصميم ونماذج أولية وتفاعلات دقيقة ممتعة.' },
      ],
    },
    experience: {
      index: '02.',
      title: 'الخبرات',
      aria: {
        selectCompany: 'اختر شركة لعرض التفاصيل',
        techStack: 'التقنيات المستخدمة',
        openCompany: (c) => `فتح موقع ${c}`,
      },
    },
    projects: {
      index: '03.',
      title: 'أعمال صنعتها مؤخراً',
      aria: {
        technologies: 'التقنيات',
        github: 'مستودع GitHub',
        demo: 'عرض حي',
      },
      cta: {
        showMore: 'عرض المزيد',
        showLess: 'إظهار أقل',
      },
      featured: [
        {
          label: 'مشروع مميّز',
          alt: 'أيقونة تطبيق كورتكس',
          desc:
            'أعمل حالياً على تطبيق المحمول لموقع corteksa.org مع تركيز على واجهة نظيفة، معالجة بيانات قوية، وبنية قابلة للتوسّع. يتم التطوير بشكل متدرّج مع إصدارات مرحلية.',
        },
        {
          label: 'مشروع مميّز',
          alt: 'شاشة تطبيق Autoinvo تعرض قائمة الإيصالات',
          desc:
            'Autoinvo تطبيق ذكي لإدارة الإيصالات والفواتير، مبني على البساطة والسرعة والموثوقية. يمكن للمستخدمين مسح الإيصالات بالكاميرا أو رفعها من المعرض ثم تصفيتها وتصديرها كملفات PDF. يدعم العمل دون اتصال مع مزامنة تلقائية عند الاتصال — مثالي لتتبع المصاريف أثناء التنقّل.',
        },
        {
          label: 'مشروع مميّز',
          alt: 'فيديو عرض لمنتج B2B Marketer',
          desc:
            'منصّة تجارة بين الشركات تربط المصنّعين الأتراك بالمشترين حول العالم، خاصةً في الأسواق العربية. تشمل المنصّة مجالات النسيج والإلكترونيات والأغذية والآلات — لتسهيل التجارة وتعزيز الصادرات. تعتمد بنية نظيفة، مدفوعات موثوقة، وتصفّح داخل التطبيق لتجربة متكاملة.',
        },
      ],
      others: [
        { desc: 'تطبيق تجارة إلكترونية أنيق يركّز على سرعة التسوّق والبنية النظيفة وتحديث الأسعار ديناميكياً — لتبسيط تصفّح المنتجات والشراء.' },
        { desc: 'خدمة محادثة تعتمد WebSocket مع مؤشرات التواجد والكتابة وسجلّ الرسائل.' },
        { desc: 'لوحة كانبان بميزة السحب والإفلات ومسارات العمل وتعيين المهام وسجلّ النشاط.' },
        { desc: 'تدفّقات دفع آمنة مع 3DS ومطابقة عبر webhook.' },
        { desc: 'تتبّع الحضور عبر الكاميرا مع تحديد مواقع وإشعارات.' },
        { desc: 'لوحة تحليلات بمرشّحات وإحصاءات حيّة وشرائح مخصّصة.' },
        { desc: 'توجيه موحّد للروابط العميقة بين التطبيق والويب.' },
        { desc: 'رفع الصور على شكل أجزاء مع إعادة المحاولة وتوليد مصغّرات وتخزين مؤقّت على CDN.' },
        { desc: 'نظام إشعارات متعدد القنوات بقوالب وجدولة.' },
        { desc: 'محرّك تدوين يدعم Markdown مع الوسوم والبحث وخلاصات RSS.' },
      ],
    },
    skills: {
      index: '04.',
      title: 'المهارات والتقنيات',
      categoriesTitles: {
        'prog-langs': 'اللغات',
        'backend-databases': 'الخلفية وقواعد البيانات',
        'frontend-mobile': 'الواجهة الأمامية والمحمول',
        architecture: 'الأنماط المعمارية',
        'testing-tools': 'الاختبار والأدوات',
        'spoken-langs': 'اللغات (البشرية)',
      },
      spokenNames: { english: 'الإنجليزية', arabic: 'العربية' },
    },
    contact: {
      index: '06.',
      title: 'تواصل معي',
      heroTitle: 'لنعمل معاً',
      subtitle:
        'هل لديك مشروع أو تبحث عن متعاون؟ أنا متاح للعمل الحرّ والعقود والمشاريع ذات التركيز المنتجّي. دعنا نبني شيئاً موثوقاً وقابلاً للتوسّع وممتعاً.',
      ctas: { sayHello: 'قل مرحباً', whatsapp: 'راسلني على واتساب' },
      labels: { github: 'جيتهاب', email: 'البريد الإلكتروني' },
      methods: { orEmail: 'أو راسلني عبر البريد على', orWhatsApp: 'أو عبر واتساب على', orFindMeOn: 'أو تجدني على' },
      aria: { sendEmail: 'إرسال بريد إلكتروني', whatsapp: 'واتساب' },
    },
    footer: {
      creditPrefix: 'مصمّم ومبني بواسطة',
      tooltip: 'شكراً لزيارتك! ✨',
      builtWith: 'مبني باستخدام React',
      copyright: '© {year} AT Software',
    },
    social: {
      aria: 'روابط اجتماعية',
      labels: { github: 'جيتهاب', linkedin: 'لينكدإن', email: 'البريد الإلكتروني' },
    },
    scrollTop: { aria: 'الانتقال للأعلى' },
  },
}

function detectLang() {
  const navLangs = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || '']).map((l) => l?.toLowerCase())
  const isArabic = navLangs.some((l) => l && (l === 'ar' || l.startsWith('ar-')))
  return isArabic ? 'ar' : 'en'
}

const I18nContext = createContext({ lang: 'en', setLang: () => {}, t: (k) => k })

function initialLang() {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'en' || saved === 'ar') return saved
  } catch {}
  // Default to English when no saved preference
  return 'en'
}

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => initialLang())

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    try { localStorage.setItem('lang', lang) } catch {}
  }, [lang])

  const t = useMemo(() => {
    const dict = translations[lang] || translations.en
    const translate = (key) => {
      if (typeof key !== 'string') return key
      return key.split('.').reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), dict) ?? key
    }
    return translate
  }, [lang])

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  return useContext(I18nContext)
}