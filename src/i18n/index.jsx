import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const translations = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
      resume: 'Resume',
    },
    hero: {
      greeting: "Hello, I'm",
      name: 'Abdalla Tawfig',
      roles: ['Mobile Engineer', 'Flutter & Kotlin Developer', 'Builder of AI-powered apps'],
      tagline:
        'Mobile Engineer building production iOS and Android apps with Flutter and native Kotlin, with a growing focus on AI-powered products that solve real business problems.',
      ctas: { work: 'View My Work', contact: 'Get In Touch' },
    },
    about: {
      index: '01.',
      title: 'About Me',
      p1:
        'I\'m Abdalla, a mobile engineer who likes building things people actually use. Most of my work is in Flutter and Kotlin. Right now I\'m the only mobile engineer on Corteksa, a CRM that businesses run their day on, so I own everything from how the app is structured to the moment it ships, and I\'m the one who wants to know why when something breaks.',
      p2:
        'Lately AI has taken over a big part of my curiosity. I like putting different models against the same problem and seeing which one actually holds up, not which one looks best in a demo. I\'ve been learning to fine-tune smaller models and wiring them into real products, because to me the interesting part isn\'t the model itself, it\'s whether it fixes a real business problem once it\'s in people\'s hands. I got a taste of that building the app side of an AI assistant at work, and I haven\'t stopped since.',
      p3:
        'Outside work I ship my own apps, like Recallly, a native Kotlin app that turns a spoken field visit into CRM data, and AutoInvo, a receipt scanner. I\'m always up for a good conversation about AI or engineering.',
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
      title: "Things I've Built",
      aria: {
        technologies: 'Technologies',
        github: 'GitHub Repository',
        demo: 'Live Demo',
        playStore: 'Google Play',
        appStore: 'App Store',
        close: 'Close',
        openDetails: 'View project details',
      },
      cta: {
        showMore: 'Show More',
        showLess: 'Show Less',
      },
      detail: {
        screenshots: 'Screenshots',
        viewGithub: 'View on GitHub',
        viewDemo: 'Visit Live Demo',
        viewPlayStore: 'Get it on Google Play',
        viewAppStore: 'Download on the App Store',
      },
      featured: [
        {
          label: 'Featured Project',
          alt: 'Corteksa CRM app icon',
          desc:
            'A multi-tenant B2B CRM for iOS and Android, live on both stores. I am the sole mobile engineer: real-time omnichannel messaging (WhatsApp, Instagram, Messenger, TikTok) over WebSockets, the client for a multi-agent AI assistant with human approval before any data change, an offline-first outbox that delivers every message exactly once, native Kotlin and Swift notifications, and a metadata engine that renders 33 field types from server configuration.',
        },
        {
          label: 'Featured Project',
          alt: 'Mwaqi3 app logo',
          desc:
            'A local business directory and service marketplace for Kuwait. Users can browse companies by category, save favorites, and manage their own listings. Features real-time push notifications, search and filtering, user profiles with Arabic and English support, and a trust and verification system for businesses.',
        },
        {
          label: 'Featured Project',
          alt: 'Recallly app logo',
          desc:
            'An AI-powered voice-to-CRM native Android app for field professionals. Tap the mic, talk naturally about a field visit, and the app transcribes and extracts structured CRM data automatically. Features dual-mode transcription (online and offline via whisper.cpp), AI extraction via Gemini 2.5 Flash, PDF export, Google Calendar integration, and offline-first architecture.',
        },
        {
          label: 'Featured Project',
          alt: 'Autoinvo app screen showing receipt list',
          desc:
            'A smart receipt management and invoicing app built for simplicity, speed, and reliability. Users can scan receipts using the camera or upload from their gallery, then filter and export them as PDFs. Supports full offline functionality with automatic sync when online, perfect for tracking expenses on the go.',
        },
      ],
      others: [
        { desc: 'A B2B e-commerce platform connecting Turkish manufacturers with global buyers, particularly in Arab markets. Spans textiles, electronics, food, and machinery, facilitating seamless trade and helping boost exports. Uses clean architecture, reliable payments, and in-app browsing for a cohesive experience.' },
        { desc: 'A sleek eCommerce app focused on fast shopping, clean architecture, and dynamic price updates, simplifying product browsing and purchasing.' },
        { desc: 'A mobile platform connecting pet owners with potential adopters. Browse pets by category, save favorites, post adoption listings, and chat directly with owners, streamlining the entire adoption process.' },
        { desc: 'A recipe discovery app that helps users find delicious meals by name or category. Browse detailed ingredients and instructions, watch cooking videos, and bookmark favorites for quick access.' },
        { desc: 'An Android music player with background playback, system notification controls, metadata extraction, and a collapsible UI, built for a smooth listening experience.' },
        { desc: 'An e-commerce app for browsing and purchasing eyewear. Features product catalogs, filtering, and a clean shopping experience built with modern architecture.' },
      ],
    },
    skills: {
      index: '04.',
      title: 'Skills & Technologies',
      categoriesTitles: {
        'prog-langs': 'Languages',
        'frontend-mobile': 'Mobile',
        ai: 'AI & LLMs',
        'backend-databases': 'APIs & Data',
        architecture: 'Architecture',
        'testing-tools': 'Testing & Tools',
        'spoken-langs': 'Languages (Human)',
      },
      spokenNames: { english: 'English', arabic: 'Arabic' },
    },
    contact: {
      index: '05.',
      title: 'Get In Touch',
      heroTitle: "Let's Work Together",
      subtitle:
        'Hiring for a mobile or AI-focused role, or have a product idea? I\'m open to full-time roles and selected freelance projects. Let\'s build something reliable that people actually use.',
      ctas: { sayHello: 'Say Hello', whatsapp: 'WhatsApp Me' },
      labels: { github: 'GitHub', linkedin: 'LinkedIn', email: 'Email' },
      methods: { orEmail: 'Or email me at', orWhatsApp: 'Or WhatsApp me at', orFindMeOn: 'Or find me on' },
      aria: { sendEmail: 'Send email', whatsapp: 'WhatsApp' },
    },
    footer: {
      creditPrefix: 'Designed & Built by',
      tooltip: 'Thanks for visiting! \u2728',
      builtWith: 'Built with React',
      copyright: '\u00a9 {year} AT Software',
    },
    social: {
      aria: 'Social links',
      labels: { github: 'GitHub', linkedin: 'LinkedIn', email: 'Email' },
    },
    scrollTop: { aria: 'Scroll to top' },
  },
  ar: {
    nav: {
      about: '\u0639\u0646\u0651\u064a',
      experience: '\u0627\u0644\u062e\u0628\u0631\u0627\u062a',
      projects: '\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639',
      skills: '\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a',
      contact: '\u062a\u0648\u0627\u0635\u0644',
      resume: '\u0627\u0644\u0633\u064a\u0631\u0629 \u0627\u0644\u0630\u0627\u062a\u064a\u0629',
    },
    hero: {
      greeting: '\u0645\u0631\u062d\u0628\u0627\u064b\u060c \u0623\u0646\u0627',
      name: '\u0639\u0628\u062f\u0627\u0644\u0644\u0647 \u062a\u0648\u0641\u064a\u0642',
      roles: ['مهندس تطبيقات جوال', 'مطوّر Flutter وKotlin', 'أبني تطبيقات مدعومة بالذكاء الاصطناعي'],
      tagline:
        'مهندس تطبيقات جوال أبني تطبيقات iOS وAndroid حقيقية باستخدام Flutter وKotlin، مع اهتمام متزايد بالمنتجات المدعومة بالذكاء الاصطناعي التي تحل مشاكل أعمال حقيقية.',
      ctas: { work: '\u0634\u0627\u0647\u062f \u0623\u0639\u0645\u0627\u0644\u064a', contact: '\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u064a' },
    },
    about: {
      index: '01.',
      title: '\u0646\u0628\u0630\u0629 \u0639\u0646\u0651\u064a',
      p1:
        'أنا عبدالله، مهندس تطبيقات جوال أحب بناء أشياء يستخدمها الناس فعلاً. أغلب عملي بـ Flutter وKotlin. حالياً أنا مهندس الجوال الوحيد في Corteksa، نظام CRM تعتمد عليه الشركات في يومها، لذلك أتولى كل شيء من بنية التطبيق حتى لحظة إطلاقه، وأنا من يريد أن يعرف السبب عندما يتعطل شيء.',
      p2:
        'مؤخراً أخذ الذكاء الاصطناعي جزءاً كبيراً من فضولي. أحب أن أضع نماذج مختلفة أمام نفس المشكلة وأرى أيها يصمد فعلاً، لا أيها يبدو أفضل في العرض. أتعلّم ضبط النماذج الأصغر (fine-tuning) ودمجها في منتجات حقيقية، لأن الجزء المثير بالنسبة لي ليس النموذج نفسه، بل هل يحل مشكلة عمل حقيقية عندما يصبح بين أيدي الناس. جرّبت ذلك وأنا أبني واجهة مساعد ذكاء اصطناعي في العمل، ولم أتوقف منذ ذلك الحين.',
      p3:
        'خارج العمل أطلق تطبيقاتي الخاصة، مثل Recallly، تطبيق Kotlin أصلي يحوّل حديثك عن زيارة ميدانية إلى بيانات CRM، وAutoInvo لمسح الإيصالات. ويسعدني دائماً حديث جيد عن الذكاء الاصطناعي أو الهندسة.',
    },
    experience: {
      index: '02.',
      title: '\u0627\u0644\u062e\u0628\u0631\u0627\u062a',
      aria: {
        selectCompany: '\u0627\u062e\u062a\u0631 \u0634\u0631\u0643\u0629 \u0644\u0639\u0631\u0636 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644',
        techStack: '\u0627\u0644\u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u0629',
        openCompany: (c) => `\u0641\u062a\u062d \u0645\u0648\u0642\u0639 ${c}`,
      },
    },
    projects: {
      index: '03.',
      title: '\u0623\u0639\u0645\u0627\u0644 \u0635\u0646\u0639\u062a\u0647\u0627',
      aria: {
        technologies: '\u0627\u0644\u062a\u0642\u0646\u064a\u0627\u062a',
        github: '\u0645\u0633\u062a\u0648\u062f\u0639 GitHub',
        demo: '\u0639\u0631\u0636 \u062d\u064a',
        playStore: '\u062c\u0648\u062c\u0644 \u0628\u0644\u0627\u064a',
        appStore: '\u0622\u0628 \u0633\u062a\u0648\u0631',
        close: '\u0625\u063a\u0644\u0627\u0642',
        openDetails: '\u0639\u0631\u0636 \u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0645\u0634\u0631\u0648\u0639',
      },
      cta: {
        showMore: '\u0639\u0631\u0636 \u0627\u0644\u0645\u0632\u064a\u062f',
        showLess: '\u0625\u0638\u0647\u0627\u0631 \u0623\u0642\u0644',
      },
      detail: {
        screenshots: '\u0644\u0642\u0637\u0627\u062a \u0627\u0644\u0634\u0627\u0634\u0629',
        viewGithub: '\u0639\u0631\u0636 \u0639\u0644\u0649 GitHub',
        viewDemo: '\u0632\u064a\u0627\u0631\u0629 \u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u0645\u0628\u0627\u0634\u0631',
        viewPlayStore: '\u0627\u0644\u062a\u062d\u0645\u064a\u0644 \u0645\u0646 Google Play',
        viewAppStore: '\u0627\u0644\u062a\u062d\u0645\u064a\u0644 \u0645\u0646 App Store',
      },
      featured: [
        {
          label: '\u0645\u0634\u0631\u0648\u0639 \u0645\u0645\u064a\u0651\u0632',
          alt: '\u0623\u064a\u0642\u0648\u0646\u0629 \u062a\u0637\u0628\u064a\u0642 \u0643\u0648\u0631\u062a\u0643\u0633\u0627 CRM',
          desc:
            'نظام CRM متعدد المستأجرين للشركات على iOS وAndroid، متاح على المتجرين. أنا مهندس الجوال الوحيد فيه: مراسلة فورية متعددة القنوات (واتساب، إنستغرام، ماسنجر، تيك توك) عبر WebSockets، وواجهة مساعد ذكاء اصطناعي متعدد الوكلاء مع موافقة بشرية قبل أي تغيير في البيانات، وصندوق صادر يعمل دون اتصال ويوصل كل رسالة مرة واحدة فقط، وإشعارات أصلية بـ Kotlin وSwift، ومحرك يعرض 33 نوع حقل من إعدادات الخادم.',
        },
        {
          label: '\u0645\u0634\u0631\u0648\u0639 \u0645\u0645\u064a\u0651\u0632',
          alt: '\u0634\u0639\u0627\u0631 \u062a\u0637\u0628\u064a\u0642 \u0645\u0648\u0627\u0642\u0639',
          desc:
            '\u062f\u0644\u064a\u0644 \u0623\u0639\u0645\u0627\u0644 \u0645\u062d\u0644\u064a \u0648\u0633\u0648\u0642 \u062e\u062f\u0645\u0627\u062a \u0641\u064a \u0627\u0644\u0643\u0648\u064a\u062a. \u064a\u062a\u064a\u062d \u0644\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646 \u062a\u0635\u0641\u0651\u062d \u0627\u0644\u0634\u0631\u0643\u0627\u062a \u062d\u0633\u0628 \u0627\u0644\u0641\u0626\u0629 \u0648\u062d\u0641\u0638 \u0627\u0644\u0645\u0641\u0636\u0651\u0644\u0627\u062a \u0648\u0625\u062f\u0627\u0631\u0629 \u0642\u0648\u0627\u0626\u0645\u0647\u0645. \u064a\u062a\u0636\u0645\u0651\u0646 \u0625\u0634\u0639\u0627\u0631\u0627\u062a \u0641\u0648\u0631\u064a\u0629\u060c \u0628\u062d\u062b \u0648\u062a\u0635\u0641\u064a\u0629\u060c \u0645\u0644\u0641\u0627\u062a \u0634\u062e\u0635\u064a\u0629 \u0645\u0639 \u062f\u0639\u0645 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0648\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629\u060c \u0648\u0646\u0638\u0627\u0645 \u062b\u0642\u0629 \u0648\u062a\u062d\u0642\u0651\u0642 \u0644\u0644\u0634\u0631\u0643\u0627\u062a.',
        },
        {
          label: '\u0645\u0634\u0631\u0648\u0639 \u0645\u0645\u064a\u0651\u0632',
          alt: '\u0634\u0639\u0627\u0631 \u062a\u0637\u0628\u064a\u0642 \u0631\u064a\u0643\u0648\u0644\u064a',
          desc:
            '\u062a\u0637\u0628\u064a\u0642 \u0623\u0646\u062f\u0631\u0648\u064a\u062f \u0623\u0635\u0644\u064a \u064a\u062d\u0648\u0651\u0644 \u0627\u0644\u0635\u0648\u062a \u0625\u0644\u0649 \u0628\u064a\u0627\u0646\u0627\u062a CRM \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a\u060c \u0645\u0635\u0645\u0651\u0645 \u0644\u0644\u0645\u0647\u0646\u064a\u064a\u0646 \u0627\u0644\u0645\u064a\u062f\u0627\u0646\u064a\u064a\u0646. \u0627\u0646\u0642\u0631 \u0639\u0644\u0649 \u0627\u0644\u0645\u0627\u064a\u0643\u0631\u0648\u0641\u0648\u0646 \u0648\u062a\u062d\u062f\u0651\u062b \u0628\u0637\u0628\u064a\u0639\u064a\u0629 \u0639\u0646 \u0632\u064a\u0627\u0631\u0629 \u0645\u064a\u062f\u0627\u0646\u064a\u0629\u060c \u0648\u064a\u0642\u0648\u0645 \u0627\u0644\u062a\u0637\u0628\u064a\u0642 \u0628\u0627\u0644\u0646\u0633\u062e \u0627\u0644\u062a\u0644\u0642\u0627\u0626\u064a \u0648\u0627\u0633\u062a\u062e\u0631\u0627\u062c \u0628\u064a\u0627\u0646\u0627\u062a CRM \u0645\u0646\u0638\u0651\u0645\u0629. \u064a\u062a\u0645\u064a\u0651\u0632 \u0628\u0646\u0633\u062e \u0635\u0648\u062a\u064a \u062b\u0646\u0627\u0626\u064a \u0627\u0644\u0648\u0636\u0639 (\u0645\u062a\u0635\u0644 \u0648\u063a\u064a\u0631 \u0645\u062a\u0635\u0644 \u0639\u0628\u0631 whisper.cpp)\u060c \u0627\u0633\u062a\u062e\u0631\u0627\u062c \u0630\u0643\u064a \u0639\u0628\u0631 Gemini 2.5 Flash\u060c \u062a\u0635\u062f\u064a\u0631 PDF\u060c \u062a\u0643\u0627\u0645\u0644 \u062a\u0642\u0648\u064a\u0645 Google\u060c \u0648\u0628\u0646\u064a\u0629 \u062a\u0639\u0645\u0644 \u062f\u0648\u0646 \u0627\u062a\u0635\u0627\u0644.',
        },
        {
          label: '\u0645\u0634\u0631\u0648\u0639 \u0645\u0645\u064a\u0651\u0632',
          alt: '\u0634\u0627\u0634\u0629 \u062a\u0637\u0628\u064a\u0642 Autoinvo \u062a\u0639\u0631\u0636 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0625\u064a\u0635\u0627\u0644\u0627\u062a',
          desc:
            'Autoinvo \u062a\u0637\u0628\u064a\u0642 \u0630\u0643\u064a \u0644\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0625\u064a\u0635\u0627\u0644\u0627\u062a \u0648\u0627\u0644\u0641\u0648\u0627\u062a\u064a\u0631\u060c \u0645\u0628\u0646\u064a \u0639\u0644\u0649 \u0627\u0644\u0628\u0633\u0627\u0637\u0629 \u0648\u0627\u0644\u0633\u0631\u0639\u0629 \u0648\u0627\u0644\u0645\u0648\u062b\u0648\u0642\u064a\u0629. \u064a\u0645\u0643\u0646 \u0644\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646 \u0645\u0633\u062d \u0627\u0644\u0625\u064a\u0635\u0627\u0644\u0627\u062a \u0628\u0627\u0644\u0643\u0627\u0645\u064a\u0631\u0627 \u0623\u0648 \u0631\u0641\u0639\u0647\u0627 \u0645\u0646 \u0627\u0644\u0645\u0639\u0631\u0636 \u062b\u0645 \u062a\u0635\u0641\u064a\u062a\u0647\u0627 \u0648\u062a\u0635\u062f\u064a\u0631\u0647\u0627 \u0643\u0645\u0644\u0641\u0627\u062a PDF. \u064a\u062f\u0639\u0645 \u0627\u0644\u0639\u0645\u0644 \u062f\u0648\u0646 \u0627\u062a\u0635\u0627\u0644 \u0645\u0639 \u0645\u0632\u0627\u0645\u0646\u0629 \u062a\u0644\u0642\u0627\u0626\u064a\u0629 \u0639\u0646\u062f \u0627\u0644\u0627\u062a\u0635\u0627\u0644، \u0645\u062b\u0627\u0644\u064a \u0644\u062a\u062a\u0628\u0639 \u0627\u0644\u0645\u0635\u0627\u0631\u064a\u0641 \u0623\u062b\u0646\u0627\u0621 \u0627\u0644\u062a\u0646\u0642\u0651\u0644.',
        },
      ],
      others: [
        { desc: '\u0645\u0646\u0635\u0651\u0629 \u062a\u062c\u0627\u0631\u0629 \u0628\u064a\u0646 \u0627\u0644\u0634\u0631\u0643\u0627\u062a \u062a\u0631\u0628\u0637 \u0627\u0644\u0645\u0635\u0646\u0651\u0639\u064a\u0646 \u0627\u0644\u0623\u062a\u0631\u0627\u0643 \u0628\u0627\u0644\u0645\u0634\u062a\u0631\u064a\u0646 \u062d\u0648\u0644 \u0627\u0644\u0639\u0627\u0644\u0645\u060c \u062e\u0627\u0635\u0629\u064b \u0641\u064a \u0627\u0644\u0623\u0633\u0648\u0627\u0642 \u0627\u0644\u0639\u0631\u0628\u064a\u0629. \u062a\u0634\u0645\u0644 \u0627\u0644\u0646\u0633\u064a\u062c \u0648\u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0627\u062a \u0648\u0627\u0644\u0623\u063a\u0630\u064a\u0629 \u0648\u0627\u0644\u0622\u0644\u0627\u062a، \u0644\u062a\u0633\u0647\u064a\u0644 \u0627\u0644\u062a\u062c\u0627\u0631\u0629 \u0648\u062a\u0639\u0632\u064a\u0632 \u0627\u0644\u0635\u0627\u062f\u0631\u0627\u062a. \u0628\u0646\u064a\u0629 \u0646\u0638\u064a\u0641\u0629\u060c \u0645\u062f\u0641\u0648\u0639\u0627\u062a \u0645\u0648\u062b\u0648\u0642\u0629\u060c \u0648\u062a\u0635\u0641\u0651\u062d \u062f\u0627\u062e\u0644 \u0627\u0644\u062a\u0637\u0628\u064a\u0642.' },
        { desc: '\u062a\u0637\u0628\u064a\u0642 \u062a\u062c\u0627\u0631\u0629 \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629 \u0623\u0646\u064a\u0642 \u064a\u0631\u0643\u0651\u0632 \u0639\u0644\u0649 \u0633\u0631\u0639\u0629 \u0627\u0644\u062a\u0633\u0648\u0651\u0642 \u0648\u0627\u0644\u0628\u0646\u064a\u0629 \u0627\u0644\u0646\u0638\u064a\u0641\u0629 \u0648\u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u062f\u064a\u0646\u0627\u0645\u064a\u0643\u064a\u0627\u064b، \u0644\u062a\u0628\u0633\u064a\u0637 \u062a\u0635\u0641\u0651\u062d \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a \u0648\u0627\u0644\u0634\u0631\u0627\u0621.' },
        { desc: '\u0645\u0646\u0635\u0651\u0629 \u0645\u062d\u0645\u0648\u0644\u0629 \u062a\u0631\u0628\u0637 \u0623\u0635\u062d\u0627\u0628 \u0627\u0644\u062d\u064a\u0648\u0627\u0646\u0627\u062a \u0628\u0627\u0644\u0645\u062a\u0628\u0646\u0651\u064a\u0646 \u0627\u0644\u0645\u062d\u062a\u0645\u0644\u064a\u0646. \u062a\u0635\u0641\u0651\u062d \u0627\u0644\u062d\u064a\u0648\u0627\u0646\u0627\u062a \u062d\u0633\u0628 \u0627\u0644\u0641\u0626\u0629\u060c \u0627\u062d\u0641\u0638 \u0627\u0644\u0645\u0641\u0636\u0651\u0644\u0627\u062a\u060c \u0627\u0646\u0634\u0631 \u0625\u0639\u0644\u0627\u0646\u0627\u062a \u0627\u0644\u062a\u0628\u0646\u0651\u064a\u060c \u0648\u062a\u0648\u0627\u0635\u0644 \u0645\u0628\u0627\u0634\u0631\u0629\u064b \u0645\u0639 \u0627\u0644\u0645\u0627\u0644\u0643\u064a\u0646، \u0644\u062a\u0628\u0633\u064a\u0637 \u0639\u0645\u0644\u064a\u0629 \u0627\u0644\u062a\u0628\u0646\u0651\u064a \u0628\u0627\u0644\u0643\u0627\u0645\u0644.' },
        { desc: '\u062a\u0637\u0628\u064a\u0642 \u0627\u0643\u062a\u0634\u0627\u0641 \u0648\u0635\u0641\u0627\u062a \u064a\u0633\u0627\u0639\u062f \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646 \u0639\u0644\u0649 \u0625\u064a\u062c\u0627\u062f \u0648\u062c\u0628\u0627\u062a \u0634\u0647\u064a\u0651\u0629 \u062d\u0633\u0628 \u0627\u0644\u0627\u0633\u0645 \u0623\u0648 \u0627\u0644\u0641\u0626\u0629. \u062a\u0635\u0641\u0651\u062d \u0627\u0644\u0645\u0643\u0648\u0651\u0646\u0627\u062a \u0648\u0627\u0644\u062a\u0639\u0644\u064a\u0645\u0627\u062a\u060c \u0634\u0627\u0647\u062f \u0641\u064a\u062f\u064a\u0648\u0647\u0627\u062a \u0627\u0644\u0637\u0628\u062e\u060c \u0648\u0627\u062d\u0641\u0638 \u0627\u0644\u0645\u0641\u0636\u0651\u0644\u0627\u062a \u0644\u0644\u0648\u0635\u0648\u0644 \u0627\u0644\u0633\u0631\u064a\u0639.' },
        { desc: '\u0645\u0634\u063a\u0651\u0644 \u0645\u0648\u0633\u064a\u0642\u0649 \u0644\u0623\u0646\u062f\u0631\u0648\u064a\u062f \u0645\u0639 \u062a\u0634\u063a\u064a\u0644 \u0641\u064a \u0627\u0644\u062e\u0644\u0641\u064a\u0629\u060c \u0639\u0646\u0627\u0635\u0631 \u062a\u062d\u0643\u0651\u0645 \u0641\u064a \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062a\u060c \u0627\u0633\u062a\u062e\u0631\u0627\u062c \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0644\u0641\u0627\u062a\u060c \u0648\u0648\u0627\u062c\u0647\u0629 \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u0637\u064a، \u0644\u062a\u062c\u0631\u0628\u0629 \u0627\u0633\u062a\u0645\u0627\u0639 \u0633\u0644\u0633\u0629.' },
        { desc: '\u062a\u0637\u0628\u064a\u0642 \u062a\u062c\u0627\u0631\u0629 \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629 \u0644\u062a\u0635\u0641\u0651\u062d \u0648\u0634\u0631\u0627\u0621 \u0627\u0644\u0646\u0638\u0627\u0631\u0627\u062a. \u064a\u062a\u0636\u0645\u0651\u0646 \u0643\u062a\u0627\u0644\u0648\u062c\u0627\u062a \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a\u060c \u062a\u0635\u0641\u064a\u0629\u060c \u0648\u062a\u062c\u0631\u0628\u0629 \u062a\u0633\u0648\u0651\u0642 \u0646\u0638\u064a\u0641\u0629 \u0628\u0628\u0646\u064a\u0629 \u062d\u062f\u064a\u062b\u0629.' },
      ],
    },
    skills: {
      index: '04.',
      title: '\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a \u0648\u0627\u0644\u062a\u0642\u0646\u064a\u0627\u062a',
      categoriesTitles: {
        'prog-langs': 'اللغات',
        'frontend-mobile': 'تطوير الجوال',
        ai: 'الذكاء الاصطناعي والنماذج اللغوية',
        'backend-databases': 'الواجهات البرمجية والبيانات',
        architecture: 'البنية المعمارية',
        'testing-tools': 'الاختبار والأدوات',
        'spoken-langs': 'اللغات (البشرية)',
      },
      spokenNames: { english: '\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629', arabic: '\u0627\u0644\u0639\u0631\u0628\u064a\u0629' },
    },
    contact: {
      index: '05.',
      title: '\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u064a',
      heroTitle: '\u0644\u0646\u0639\u0645\u0644 \u0645\u0639\u0627\u064b',
      subtitle:
        'تبحث عن مهندس جوال أو دور يركز على الذكاء الاصطناعي، أو لديك فكرة منتج؟ أنا منفتح على الوظائف بدوام كامل ومشاريع حرة مختارة. لنبنِ شيئاً موثوقاً يستخدمه الناس فعلاً.',
      ctas: { sayHello: '\u0642\u0644 \u0645\u0631\u062d\u0628\u0627\u064b', whatsapp: '\u0631\u0627\u0633\u0644\u0646\u064a \u0639\u0644\u0649 \u0648\u0627\u062a\u0633\u0627\u0628' },
      labels: { github: '\u062c\u064a\u062a\u0647\u0627\u0628', linkedin: '\u0644\u064a\u0646\u0643\u062f\u0625\u0646', email: '\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a' },
      methods: { orEmail: '\u0623\u0648 \u0631\u0627\u0633\u0644\u0646\u064a \u0639\u0628\u0631 \u0627\u0644\u0628\u0631\u064a\u062f \u0639\u0644\u0649', orWhatsApp: '\u0623\u0648 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628 \u0639\u0644\u0649', orFindMeOn: '\u0623\u0648 \u062a\u062c\u062f\u0646\u064a \u0639\u0644\u0649' },
      aria: { sendEmail: '\u0625\u0631\u0633\u0627\u0644 \u0628\u0631\u064a\u062f \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a', whatsapp: '\u0648\u0627\u062a\u0633\u0627\u0628' },
    },
    footer: {
      creditPrefix: '\u0645\u0635\u0645\u0651\u0645 \u0648\u0645\u0628\u0646\u064a \u0628\u0648\u0627\u0633\u0637\u0629',
      tooltip: '\u0634\u0643\u0631\u0627\u064b \u0644\u0632\u064a\u0627\u0631\u062a\u0643! \u2728',
      builtWith: '\u0645\u0628\u0646\u064a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 React',
      copyright: '\u00a9 {year} AT Software',
    },
    social: {
      aria: '\u0631\u0648\u0627\u0628\u0637 \u0627\u062c\u062a\u0645\u0627\u0639\u064a\u0629',
      labels: { github: '\u062c\u064a\u062a\u0647\u0627\u0628', linkedin: '\u0644\u064a\u0646\u0643\u062f\u0625\u0646', email: '\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a' },
    },
    scrollTop: { aria: '\u0627\u0644\u0627\u0646\u062a\u0642\u0627\u0644 \u0644\u0644\u0623\u0639\u0644\u0649' },
  },
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
