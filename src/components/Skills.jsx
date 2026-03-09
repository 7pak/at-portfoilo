import React from 'react';
import styles from './Skills.module.css';
import { useInView } from '../hooks/useInView';
import { Code2, Layout, Server, Smartphone, Cog } from 'lucide-react';
import {
  SiJavascript,
  SiTypescript,
  SiDart,
  SiPython,
  SiKotlin,
  SiReact,
  SiHtml5,
  SiCss3,
  SiFlutter,
  SiAndroid,
  SiSpringboot,
  SiFirebase,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiApachemaven,
  SiGradle,
  SiAndroidstudio,
  SiIntellijidea,
  SiJira,
  SiNpm,
  SiVite,
  SiFigma,
} from 'react-icons/si';
import { FaJava, FaAws, FaFlask, FaRobot, FaDatabase, FaLanguage } from 'react-icons/fa';
import { MdHttp } from 'react-icons/md';
import { useI18n } from '../i18n/index.jsx';

const categories = [
  {
    key: 'prog-langs',
    title: 'Languages',
    icon: Code2,
    items: [
      { icon: FaJava, name: 'Java', level: 4 },
      { icon: SiKotlin, name: 'Kotlin', level: 4 },
      { icon: SiDart, name: 'Dart', level: 4 },
      { icon: SiPython, name: 'Python', level: 3 },
      { icon: FaDatabase, name: 'SQL', level: 4 },
    ],
  },
  {
    key: 'backend-databases',
    title: 'Backend & Databases',
    icon: Server,
    items: [
      { icon: SiSpringboot, name: 'Spring Boot', level: 4 },
      { icon: MdHttp, name: 'REST APIs', level: 5 },
      { icon: SiFirebase, name: 'Firebase', level: 4 },
      { icon: SiPostgresql, name: 'PostgreSQL', level: 4 },
      { icon: SiMongodb, name: 'MongoDB', level: 3 },
      { icon: SiPostgresql, name: 'Supabase', level: 3 },
    ],
  },
  {
    key: 'frontend-mobile',
    title: 'Frontend & Mobile',
    icon: Smartphone,
    items: [
      { icon: SiFlutter, name: 'Flutter', level: 4 },
      { icon: SiReact, name: 'React', level: 4 },
      { icon: SiHtml5, name: 'HTML', level: 5 },
      { icon: SiCss3, name: 'CSS', level: 5 },
      { icon: SiAndroid, name: 'Jetpack Compose', level: 3 },
    ],
  },
  {
    key: 'architecture',
    title: 'Architectural Pattern',
    icon: Cog,
    items: [
      { icon: Cog, name: 'Clean Architecture', level: 5 },
      { icon: Cog, name: 'Design Pattern', level: 4 },
      { icon: Cog, name: 'Dependency Injection', level: 4 },
      { icon: Cog, name: 'Multi-module Design', level: 4 },
      { icon: Cog, name: 'CI/CD Pipelines', level: 3 },
    ],
  },
  {
    key: 'testing-tools',
    title: 'Testing & Tools',
    icon: Cog,
    items: [
      { icon: FaFlask, name: 'JUnit', level: 4 },
      { icon: FaFlask, name: 'Mockito', level: 4 },
      { icon: SiGit, name: 'Git', level: 5 },
      { icon: SiApachemaven, name: 'Maven', level: 4 },
      { icon: SiGradle, name: 'Gradle', level: 4 },
      { icon: SiAndroidstudio, name: 'Android Studio', level: 5 },
      { icon: FaRobot, name: 'ClaudeCode', level: 3 },
      { icon: SiIntellijidea, name: 'IntelliJ IDEA', level: 5 },
      { icon: SiDocker, name: 'Docker', level: 3 },
      { icon: FaAws, name: 'AWS', level: 3 },
      { icon: SiJira, name: 'Jira', level: 3 },
      { icon: SiNpm, name: 'npm', level: 4 },
      { icon: SiVite, name: 'Vite', level: 4 },
      { icon: SiFigma, name: 'Figma', level: 4 },
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