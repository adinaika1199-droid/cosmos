import { useEffect, useState } from 'react'
import './App.css'

const skills = [
  { name: 'HTML', level: '90%', icon: '🧩', color: '#ff8a65' },
  { name: 'CSS', level: '88%', icon: '🎨', color: '#64b5f6' },
  { name: 'JavaScript', level: '84%', icon: '⚡', color: '#ffd54f' },
  { name: 'React', level: '80%', icon: '⚛️', color: '#81d4fa' },
  { name: 'Python', level: '72%', icon: '🐍', color: '#4db6ac' },
  { name: 'Git & GitHub', level: '76%', icon: '🧠', color: '#a5d6a7' },
]

const projects = [
  {
    title: 'Creative Portfolio Landing',
    description: 'A visual landing page with glassmorphism, gradients and modern interactions.',
    tech: ['React', 'CSS', 'UI Design'],
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    link: '#contact',
  },
  {
    title: 'Smart Study Planner',
    description: 'A productivity-focused web app for organizing daily tasks and study goals.',
    tech: ['JavaScript', 'HTML', 'Responsive'],
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    link: '#contact',
  },
  {
    title: 'Brand Showcase Website',
    description: 'A sleek business-style webpage designed to highlight digital products and services.',
    tech: ['React', 'UX', 'Figma'],
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    link: '#contact',
  },
]

const dreams = [
  'Become a strong IT specialist',
  'Study abroad',
  'Master Chinese and English',
  'Build my own IT company',
  'Create large-scale projects',
  'Open a big restaurant and fashion store',
  'Take my parents on a trip',
  'Turn my dreams into action',
]

const timeline = [
  'Initial interest in programming',
  'Learning HTML and CSS',
  'Exploring JavaScript',
  'Working with React',
  'Creating my own projects',
  'Big future goals and growth',
]

const translations = {
  en: {
    nav: ['About', 'Skills', 'Projects', 'Dreams', 'Journey', 'Contact'],
    home: {
      greeting: "Hello! I'm Adina 👋",
      title: "I'm a Future IT Specialist & Creative Developer.",
      text: 'I enjoy technology, programming, and learning new things.',
      primary: 'View My Projects',
      secondary: 'Contact Me',
    },
    about: {
      label: 'About Me',
      title: 'I am a curious learner with a passion for technology.',
      paragraph1:
        'I am 9th grade student. I enjoy technology, programming, and learning new things every day.',
      paragraph2:
        'Right now I am learning HTML, CSS, JavaScript and Python, and I am excited to keep growing in the IT field.',
      paragraph3:
        'In the future, I want to become a professional IT specialist, build great projects, and open my own company.',
      card1: 'Always learning',
      card2: 'Creative mindset',
      card3: 'Big future goals',
    },
    skills: {
      label: 'My Skills',
      title: 'Building my knowledge step by step with passion and consistency.',
    },
    projects: {
      label: 'My Projects',
      title: 'I create modern and meaningful digital experiences.',
      button: 'View Project',
    },
    dreams: {
      label: 'My Dreams',
      title: 'My goals are big, bold, and built for the future.',
    },
    journey: {
      label: 'My Journey',
      title: 'This is how my path in IT is growing every day.',
    },
    contact: {
      label: 'Contact Me',
      title: 'Let’s connect and create something amazing together.',
      email: 'mailto:adina@example.com',
      telegram: 'https://t.me/adina',
      instagram: 'https://instagram.com/adina',
      github: 'https://github.com/adina',
    },
    footer: 'Built with passion and creativity.',
  },
  ru: {
    nav: ['Обо мне', 'Навыки', 'Проекты', 'Мечты', 'Путь', 'Контакты'],
    home: {
      greeting: 'Привет! Я Адина 👋',
      title: 'Я будущий IT-специалист и творческий разработчик.',
      text: 'Мне нравится технологии, программирование и обучение новому.',
      primary: 'Посмотреть проекты',
      secondary: 'Связаться со мной',
    },
    about: {
      label: 'Обо мне',
      title: 'Я любознательный ученик, который любит технологии.',
      paragraph1:
        'Я учусь в 9 классе. Мне нравятся технологии, программирование и постоянное обучение.',
      paragraph2:
        'Сейчас я изучаю HTML, CSS, JavaScript и Python, и хочу продолжать развиваться в IT.',
      paragraph3:
        'В будущем я хочу стать профессиональным IT-специалистом, создавать большие проекты и открыть свою компанию.',
      card1: 'Всегда учусь',
      card2: 'Творческое мышление',
      card3: 'Большие цели',
    },
    skills: {
      label: 'Мои навыки',
      title: 'Строю знания шаг за шагом с любовью и усердием.',
    },
    projects: {
      label: 'Мои проекты',
      title: 'Создаю современные и полезные цифровые решения.',
      button: 'Смотреть проект',
    },
    dreams: {
      label: 'Мои мечты',
      title: 'Мои цели большие, смелые и направлены в будущее.',
    },
    journey: {
      label: 'Мой путь',
      title: 'Так мой путь в IT развивается день за днем.',
    },
    contact: {
      label: 'Связаться со мной',
      title: 'Давайте создадим что-то удивительное вместе.',
      email: 'mailto:adina@example.com',
      telegram: 'https://t.me/adina',
      instagram: 'https://instagram.com/adina',
      github: 'https://github.com/adina',
    },
    footer: 'Создано с любовью и вдохновением.',
  },
  ky: {
    nav: ['Жөнүндө', 'Билимдер', 'Долбоорлор', 'Кыялы', 'Жолу', 'Байланыш'],
    home: {
      greeting: 'Салам! Мен Адина 👋',
      title: 'Мен келечектеги IT адиси жана чыгармачыл developer.',
      text: 'Мен технологияларга, программалоого жана жаңы нерселерди үйрөнүүгө кызыгам.',
      primary: 'Долбоорлорумду көрүү',
      secondary: 'Байланышуу',
    },
    about: {
      label: 'Өзүм жөнүндө',
      title: 'Мен кызыгуу менен окуп, технологияны жактырам.',
      paragraph1:
        'Мен 9-класста окуйм. Технологияларга, программалоого жана жаңы нерселерди үйрөнүүгө кызыгам.',
      paragraph2:
        'Учурда HTML, CSS, JavaScript жана Python тилдерин үйрөнүп жатам. IT тармагында өсүп, билимимди кеңейтем.',
      paragraph3:
        'Келечекте мыкты IT адиси болуп, чоң долбоорлорду түзүп, өзүмдүн жеке компаниямды ачкым келет.',
      card1: 'Ар дайым үйрөнөм',
      card2: 'Жасалма акыл',
      card3: 'Чоң максаттар',
    },
    skills: {
      label: 'Менин билимдерим',
      title: 'Билимдеримди сабырдуу жана ыктыярдуу түрде үйрөнөм.',
    },
    projects: {
      label: 'Менин долбоорлорум',
      title: 'Мен заманбап жана пайдалуу цифралык долбоорлорду түзөм.',
      button: 'Долбоорду көрүү',
    },
    dreams: {
      label: 'Менин киялдарым',
      title: 'Менин максаттарым чоң, бат, жана келечекке багытталган.',
    },
    journey: {
      label: 'Менин жолум',
      title: 'Ошентип, IT тармагындагы жолум күн сайын өсүп жатат.',
    },
    contact: {
      label: 'Байланыш',
      title: 'Бирге керемет нерсе түзүштүңүз.',
      email: 'mailto:adina@example.com',
      telegram: 'https://t.me/adina',
      instagram: 'https://instagram.com/adina',
      github: 'https://github.com/adina',
    },
    footer: 'Ылдамдык менен чыгармачылык менен түзүлдү.',
  },
}

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme')
    return saved || 'dark'
  })

  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('portfolio-language')
    return saved || 'en'
  })

  const [isLoading, setIsLoading] = useState(true)
  const [showTop, setShowTop] = useState(false)

  const t = translations[language]

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = language
    localStorage.setItem('portfolio-language', language)
  }, [language])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 900)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.18 },
    )

    revealItems.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [language, theme])

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="portfolio-app">
      <div className={`loader ${isLoading ? 'active' : 'hidden'}`}>
        <div className="loader-ring" />
      </div>

      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">A</span>
          <span>Adina</span>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          {t.nav.map((item, index) => {
            const sectionMap = ['#about', '#skills', '#projects', '#dreams', '#journey', '#contact']
            return (
              <a key={item} href={sectionMap[index]}>
                {item}
              </a>
            )
          })}
        </nav>

        <div className="toolbar">
          <div className="lang-switcher" aria-label="Language switcher">
            {Object.keys(translations).map((lang) => (
              <button
                key={lang}
                type="button"
                className={`lang-btn ${language === lang ? 'active' : ''}`}
                onClick={() => setLanguage(lang)}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="theme-toggle"
            aria-label="Toggle theme"
            onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      <main>
        <section className="hero section">
          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />

          <div className="hero-copy reveal">
            <p className="eyebrow">{t.home.greeting}</p>
            <h1>{t.home.title}</h1>
            <p className="lead">{t.home.text}</p>

            <div className="cta-row">
              <a href="#projects" className="button primary">
                {t.home.primary}
              </a>
              <a href="#contact" className="button secondary">
                {t.home.secondary}
              </a>
            </div>

            <div className="stats-row">
              <div className="stat-box">
                <span className="stat-number">9</span>
                <span className="stat-label">Grade</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">6+</span>
                <span className="stat-label">Skills</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">∞</span>
                <span className="stat-label">Dreams</span>
              </div>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="profile-card">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="profile-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80"
                  alt="Adina portrait"
                />
              </div>

              <div className="floating-tag tag-one">HTML</div>
              <div className="floating-tag tag-two">React</div>
              <div className="floating-tag tag-three">Python</div>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="section-header reveal">
            <p className="eyebrow">{t.about.label}</p>
            <h2>{t.about.title}</h2>
          </div>

          <div className="about-grid">
            <div className="about-text reveal">
              <p>{t.about.paragraph1}</p>
              <p>{t.about.paragraph2}</p>
              <p>{t.about.paragraph3}</p>
            </div>

            <div className="about-cards reveal">
              <div className="mini-card">
                <span className="mini-icon">🚀</span>
                <p>{t.about.card1}</p>
              </div>
              <div className="mini-card">
                <span className="mini-icon">💡</span>
                <p>{t.about.card2}</p>
              </div>
              <div className="mini-card">
                <span className="mini-icon">🎯</span>
                <p>{t.about.card3}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="section-header reveal">
            <p className="eyebrow">{t.skills.label}</p>
            <h2>{t.skills.title}</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={skill.name} className="skill-card reveal" style={{ animationDelay: `${index * 120}ms` }}>
                <div className="skill-meta">
                  <span className="skill-icon" style={{ background: skill.color }}>{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.level}</span>
                </div>
                <div className="skill-track">
                  <span className="skill-progress" style={{ width: skill.level, background: skill.color }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-header reveal">
            <p className="eyebrow">{t.projects.label}</p>
            <h2>{t.projects.title}</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article key={project.title} className="project-card reveal" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="project-image-wrap">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-list">
                    {project.tech.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a href={project.link} className="project-link">
                    {t.projects.button}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="dreams" className="section dreams-section">
          <div className="section-header reveal">
            <p className="eyebrow">{t.dreams.label}</p>
            <h2>{t.dreams.title}</h2>
          </div>

          <div className="dreams-grid">
            {dreams.map((dream, index) => (
              <div key={dream} className="dream-card reveal" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="dream-icon">{['✨', '🌍', '🗣️', '🏢', '🚀', '🍽️', '✈️', '🏆'][index]}</div>
                <p>{dream}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="journey" className="section journey-section">
          <div className="section-header reveal">
            <p className="eyebrow">{t.journey.label}</p>
            <h2>{t.journey.title}</h2>
          </div>

          <div className="timeline reveal">
            {timeline.map((item, index) => (
              <div key={item} className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <span className="timeline-step">0{index + 1}</span>
                  <p>{item}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-panel reveal">
            <div className="contact-copy">
              <p className="eyebrow">{t.contact.label}</p>
              <h2>{t.contact.title}</h2>
              <p>
                I am open to learning, collaboration, and new creative opportunities in the tech world.
              </p>
            </div>

            <div className="contact-links">
              <a href={t.contact.email} className="contact-card">
                <span className="contact-icon">✉️</span>
                <span>Email</span>
              </a>
              <a href={t.contact.telegram} target="_blank" rel="noreferrer" className="contact-card">
                <span className="contact-icon">💬</span>
                <span>Telegram</span>
              </a>
              <a href={t.contact.instagram} target="_blank" rel="noreferrer" className="contact-card">
                <span className="contact-icon">📸</span>
                <span>Instagram</span>
              </a>
              <a href={t.contact.github} target="_blank" rel="noreferrer" className="contact-card">
                <span className="contact-icon">💻</span>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">{t.footer}</footer>

      <button className={`back-to-top ${showTop ? 'visible' : ''}`} onClick={scrollToTop} type="button">
        ↑
      </button>
    </div>
  )
}

export default App
