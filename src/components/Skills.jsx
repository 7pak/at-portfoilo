import React from 'react';
import styles from './Skills.module.css';
import { useInView } from '../hooks/useInView';
import { Code2, Server, Smartphone, Cog, Sparkles } from 'lucide-react';
import {
  SiDart,
  SiPython,
  SiKotlin,
  SiSwift,
  SiFlutter,
  SiAndroid,
  SiJetpackcompose,
  SiApple,
  SiFirebase,
  SiPostgresql,
  SiSupabase,
  SiSqlite,
  SiGit,
  SiGradle,
  SiAndroidstudio,
  SiJira,
  SiFigma,
  SiGooglegemini,
  SiAnthropic,
  SiClaude,
} from 'react-icons/si';
import { FaJava, FaFlask, FaRobot, FaDatabase, FaLanguage } from 'react-icons/fa';
import { MdHttp, MdSyncAlt } from 'react-icons/md';
import { useI18n } from '../i18n/index.jsx';

// Only what Abdalla uses in shipped work today.
const categories = [
  {
    key: 'prog-langs',
    title: 'Languages',
    icon: Code2,
    items: [
      { icon: SiDart, name: 'Dart' },
      { icon: SiKotlin, name: 'Kotlin' },
      { icon: SiSwift, name: 'Swift' },
      { icon: FaJava, name: 'Java' },
      { icon: SiPython, name: 'Python' },
      { icon: FaDatabase, name: 'SQL' },
    ],
  },
  {
    key: 'frontend-mobile',
    title: 'Mobile',
    icon: Smartphone,
    items: [
      { icon: SiFlutter, name: 'Flutter' },
      { icon: SiAndroid, name: 'Android' },
      { icon: SiJetpackcompose, name: 'Jetpack Compose' },
      { icon: SiApple, name: 'iOS' },
      { icon: Cog, name: 'Native Bridges' },
      { icon: SiFirebase, name: 'Firebase' },
    ],
  },
  {
    key: 'ai',
    title: 'AI & LLMs',
    icon: Sparkles,
    items: [
      { icon: FaRobot, name: 'AI Agents' },
      { icon: SiGooglegemini, name: 'Gemini API' },
      { icon: SiAnthropic, name: 'LLM APIs' },
      { icon: Sparkles, name: 'Prompting' },
      { icon: FaRobot, name: 'Whisper' },
      { icon: SiClaude, name: 'Claude Code' },
    ],
  },
  {
    key: 'backend-databases',
    title: 'APIs & Data',
    icon: Server,
    items: [
      { icon: MdHttp, name: 'REST APIs' },
      { icon: MdSyncAlt, name: 'WebSockets' },
      { icon: SiPostgresql, name: 'PostgreSQL' },
      { icon: SiSupabase, name: 'Supabase' },
      { icon: SiSqlite, name: 'SQLite' },
    ],
  },
  {
    key: 'architecture',
    title: 'Architecture',
    icon: Cog,
    items: [
      { icon: Cog, name: 'Clean Architecture' },
      { icon: Cog, name: 'BLoC / Cubit' },
      { icon: Cog, name: 'MVVM / MVI' },
      { icon: Cog, name: 'Dependency Injection' },
      { icon: Cog, name: 'Offline-first' },
    ],
  },
  {
    key: 'testing-tools',
    title: 'Testing & Tools',
    icon: Cog,
    items: [
      { icon: FaFlask, name: 'Testing' },
      { icon: Cog, name: 'CI/CD' },
      { icon: SiGit, name: 'Git' },
      { icon: SiGradle, name: 'Gradle' },
      { icon: SiAndroidstudio, name: 'Android Studio' },
      { icon: SiJira, name: 'Jira' },
      { icon: SiFigma, name: 'Figma' },
    ],
  },
  {
    key: 'spoken-langs',
    title: 'Languages (Human)',
    icon: FaLanguage,
    items: [
      { icon: FaLanguage, name: 'English', level: 5 },
      { icon: FaLanguage, name: 'Arabic', level: 5 },
    ],
  },
];

function SkillItem({ Icon, name, index }) {
  return (
    <div className={styles.skillItem} style={{ '--i': index }} aria-label={name} title={name}>
      <Icon className={styles.skillIcon} />
      <div className={styles.skillName}>{name}</div>
    </div>
  );
}

function CategoryCard({ title, Icon, items, reveal, index = 0 }) {
  return (
    <div className={`${styles.card} ${styles.reveal} ${reveal ? styles.show : ''}`} style={{ transitionDelay: `${index * 100}ms` }}>
      <div className={styles.cardHeader}>
        <Icon size={20} className={styles.categoryIcon} />
        <div className={styles.categoryTitle}>{title}</div>
      </div>
      <div className={styles.skillGrid}>
        {items.map((item, i) => (
          <SkillItem key={item.name} Icon={item.icon} name={item.name} index={i} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const header = useInView({ rootMargin: '-20% 0px' });
  const grid = useInView({ rootMargin: '-10% 0px' });
  const { t } = useI18n();

  const localizedCategories = categories.map((cat) => {
    const title = t(`skills.categoriesTitles.${cat.key}`) || cat.title;
    const items = cat.items.map((item) => {
      if (cat.key === 'spoken-langs') {
        const key = item.name.toLowerCase() === 'english' ? 'english' : item.name.toLowerCase() === 'arabic' ? 'arabic' : null;
        const name = key ? t(`skills.spokenNames.${key}`) : item.name;
        return { ...item, name };
      }
      return item;
    });
    return { ...cat, title, items };
  });

  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <div ref={header.ref} className={`${styles.header} ${styles.reveal} ${header.inView ? styles.show : ''}`}>
          <span className={styles.index}>{t('skills.index')}</span>
          <h2 className={styles.title}>{t('skills.title')}</h2>
          <span className={styles.line}></span>
        </div>

        <div ref={grid.ref} className={`${styles.grid} ${styles.reveal} ${grid.inView ? styles.show : ''}`}>
          {localizedCategories.map((cat, i) => (
            <CategoryCard
              key={cat.key}
              title={cat.title}
              Icon={cat.icon}
              items={cat.items}
              reveal={grid.inView}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}