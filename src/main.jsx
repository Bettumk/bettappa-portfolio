import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowUpRight, Mail, Download, Code2, Database,
  Terminal, Cpu, ChevronDown, MapPin, Trophy, GraduationCap,
  Layers3, Smartphone, Cloud, CheckCircle2, ExternalLink, Menu, X,
  Sparkles, GitBranch, Star, Users
} from "lucide-react";
import "./styles.css";

function Linkedin({ size = 24, strokeWidth = 2 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function Github({ size = 24, strokeWidth = 2 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4c.1-1.2.1-2.4-.1-3.4 0 0-1.2-.4-4 1.5a13.4 13.4 0 0 0-7.3 0C5.2.2 4 .6 4 .6c-.2 1-.2 2.2-.1 3.4A5.4 5.4 0 0 0 2.2 7.5c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4"/>
      <path d="M8 18c-3 .9-3-1.5-4.2-2"/>
    </svg>
  );
}

const profile = {
  name: "BETTAPPA",
  role: "Computer Science & Engineering Student",
  tagline: "Aspiring Software Developer",
  college: "Dayananda Sagar Academy of Technology and Management",
  degree: "B.E. in Computer Science Engineering",
  graduation: "2027",
  email: "bettumk@gmail.com",
  github: "https://github.com/Bettumk",
  linkedin: "https://www.linkedin.com/in/bettappa-76ab7a2a5",
};

const skills = [
  { icon: Code2, title: "Programming", items: ["C", "Python", "Java", "Kotlin", "C++ (Basics)"] },
 {
  icon: Cpu,
  title: "AI / ML",
  items: [
    "Artificial Intelligence",
    "AI Agents",
    "Generative AI",
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "Emotion Recognition",
  ],
},
  { icon: Layers3, title: "Web & Mobile", items: ["HTML", "CSS", "JavaScript", "Django", "Android / Kotlin"] },
  { icon: Database, title: "Data & Systems", items: ["MySQL", "OOP", "TCP Sockets", "P2P Networking", "AES Encryption"] },
  { icon: Smartphone, title: "IoT", items: ["ESP8266", "Arduino", "Blynk", "Sensors", "Automation"] },
];

const projects = [
  {
    number: "01",
    title: "TechMate AI — Intelligent CSE, Coding and Career Assistant",
    status: "AI Agent · Personal Project · Deployed",
    demo: "https://techmate-ai-1-c2vy.onrender.com/",
    description:
      "An AI-powered assistant designed to help Computer Science students with coding, technical concepts, interview preparation, career guidance, and learning support.",
    role:
      "Designed and built the AI assistant using Google Antigravity, focused on conversational interaction, student-oriented technical support, and deployment as a working web application.",
    tags: ["AI Agent", "Generative AI", "CSE", "Coding Assistant", "Career Assistant"],
    icon: Sparkles,
    featured: true,
  },
  {
    number: "02",
    title: "Smart Soil Monitoring System",
    status: "Engineering Exploration · Group Project",
    github: "https://github.com/Bettumk/smart-soil-monitoring-system",
    description:
      "An IoT-based smart soil monitoring and automated irrigation system that monitors soil moisture and temperature in real time and helps control irrigation efficiently.",
    role:
      "Contributed as a team member across problem identification, system design, hardware assembly, NodeMCU programming, sensor integration, Blynk setup, irrigation automation, testing, and project documentation.",
    tags: ["IoT", "ESP8266", "NodeMCU", "Arduino", "C/C++", "Blynk", "Soil Moisture Sensor", "DS18B20", "Wi-Fi"],
    icon: Cpu,
    featured: true,
  },
  {
    number: "03",
    title: "Stock Market Prediction System",
    status: "Group Project · 2024-25",
    github: "https://github.com/Bettumk/Stock-marketprediction-system",
    description:
      "A machine-learning-based stock market prediction system developed to analyze historical market data and generate predictions to support data-driven analysis of stock price trends.",
    role:
      "Contributed as a team member across data preparation, model development, testing, result analysis, and project documentation.",
    tags: ["Python", "Machine Learning", "Data Analysis", "Prediction", "Pandas", "NumPy"],
    icon: GitBranch,
    featured: true,
  },
  {
    number: "04",
    title: "AI-Based Adaptive Mental Health Monitoring System",
    status: "Final Year Project · In Progress · Group Project",
    description:
      "A multimodal AI framework combining text and voice signals for emotion detection, stress and depression-risk assessment, adaptive questioning, and real-time emotional visualization.",
    role:
      "Contributing as a member of the final-year development team across AI research, system design, model integration, testing, and project documentation.",
    tags: ["AI", "Deep Learning", "BERT", "RoBERTa", "NLP", "Speech Emotion", "Multimodal AI"],
    icon: Cpu,
    featured: true,
  },
  {
    number: "05",
    title: "Airline Management System",
    status: "Mini Project · 2024-25 · Group Project",
    github: "https://github.com/Bettumk/Airline-Management-System-README.md",
    description:
      "A Java-based airline management application with MySQL database integration for managing flights, passenger details, journey information, ticket booking, payments, cancellations, and flight information.",
    role:
      "Contributed as a team member across application development, database integration, module implementation, testing, debugging, and project documentation.",
    tags: ["Java", "MySQL", "JDBC", "Database", "GUI", "Flight Management", "Ticket Booking"],
    icon: Database,
    featured: true,
  },
  {
    number: "06",
    title: "AI Customer Support",
    status: "Group Project",
    description:
      "An AI-powered customer-support system designed to answer customer calls and messages, interpret questions using machine learning, and respond through human-like real-time interaction.",
    role:
      "Contributed to the group project covering AI/ML-driven customer interaction and support workflow development.",
    tags: ["AI", "Machine Learning", "Voice", "Chat", "Customer Support"],
    icon: Cloud,
    featured: true,
  },
  {
    number: "07",
    title: "WiFi File Transfer",
    status: "Cryptography & Network Security · 2025-26 · Group Project",
    description:
      "A secure Android peer-to-peer file-transfer application using direct LAN communication, peer discovery, and end-to-end AES-256 encryption.",
    role:
      "Contributed to the secure mobile file-transfer project and its networking/cryptography workflow.",
    tags: ["Android", "Kotlin", "TCP Sockets", "P2P", "AES-256", "SHA-256"],
    icon: Smartphone,
  },
  {
    number: "08",
    title: "Home Planner App",
    status: "Mobile Application Development · 2025-26 · Group Project",
    description:
      "A mobile-friendly home-planning application for creating rooms, placing furniture, drawing walls, visualizing 2D layouts, and estimating selected material costs.",
    role:
      "Contributed to a web-to-mobile application built around interactive layout design and touch-friendly visualization.",
    tags: ["HTML5", "CSS3", "JavaScript", "Canvas API", "Android Studio", "LocalStorage"],
    icon: Code2,
  },
  {
    number: "09",
    title: "Crowd Controlling System Using IoT",
    status: "Group Project",
    description:
      "An IoT-oriented academic project focused on monitoring and managing crowd movement using connected sensing and automation concepts.",
    role:
      "Collaborative IoT project covering system concept, implementation, testing, and presentation.",
    tags: ["IoT", "Monitoring", "Sensors", "Automation"],
    icon: Layers3,
  },
  {
    number: "10",
    title: "Food Hub Website",
    status: "Group Project",
    description:
      "A web-development project focused on creating a user-friendly online food platform and presenting food services through an accessible website experience.",
    role:
      "Collaborative web project covering interface development and project integration.",
    tags: ["Web Development", "UI", "Website"],
    icon: Code2,
  },
];
const journey = [
  ["2027", "B.E. — Computer Science Engineering", "Dayananda Sagar Academy of Technology and Management", "Currently pursuing · 8.04 CGPA at 7th semester"],
  ["2023", "XII / PUC", "Morarji Desai Residential College (MDRS)", "86.83%"],
  ["2021", "10th / SSLC", "Karnataka Secondary Education Examination Board", "96.16%"],
];

function Nav() {
  const [open, setOpen] = useState(false);
  const links = ["about", "skills", "projects", "journey", "contact"];
  return (
    <header className="nav">
      <a href="#home" className="brand">B<span>.</span></a>
      <nav className={open ? "mobile-open" : ""}>
        {links.map(x => <a key={x} href={`#${x}`} onClick={() => setOpen(false)}>{x[0].toUpperCase()+x.slice(1)}</a>)}
      </nav>
      <a className="nav-cta" href={profile.linkedin} target="_blank" rel="noreferrer">Let's connect <ArrowUpRight size={16}/></a>
      <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
    </header>
  );
}

function Reveal({ children, className="" }) {
  return <motion.div className={className}
    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: .16 }} transition={{ duration: .65, ease: "easeOut" }}>
    {children}
  </motion.div>;
}

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 110, damping: 30 });
  const [repoCount, setRepoCount] = useState(null);
  const [stars, setStars] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/Bettumk")
      .then(r => r.ok ? r.json() : null)
      .then(d => {
        if (d) setRepoCount(d.public_repos);
      }).catch(() => {});
    fetch("https://api.github.com/users/Bettumk/repos?per_page=100")
      .then(r => r.ok ? r.json() : [])
      .then(rs => {
        if (Array.isArray(rs)) setStars(rs.reduce((n, r) => n + (r.stargazers_count || 0), 0));
      }).catch(() => {});
  }, []);

  return (
    <div className="site">
      <motion.div className="progress" style={{ scaleX }} />
      <Nav />

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <motion.div className="eyebrow" initial={{ opacity:0, y:15 }} animate={{opacity:1,y:0}} transition={{delay:.2}}>
              <span className="pulse"/> Open to internships & opportunities
            </motion.div>
            <p className="mini">HELLO, I'M</p>
            <motion.h1 initial={{opacity:0, letterSpacing:".02em"}} animate={{opacity:1,letterSpacing:"-.07em"}} transition={{duration:.9}}>{profile.name}<span>.</span></motion.h1>
            <h2>{profile.role}<br/><em>{profile.tagline}</em></h2>
            <p className="hero-text">I enjoy solving problems with code, learning new technologies, and turning practical ideas into useful software solutions.</p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">Explore my work <ArrowUpRight size={18}/></a>
              <a className="button secondary" href="/BETTAPPA-Resume.pdf" download>Download resume <Download size={17}/></a>
            </div>
            <div className="socials">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a>
              <a href={`mailto:${profile.email}`} aria-label="Email"><Mail/></a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orb orb-one"/><div className="orb orb-two"/>
            <motion.div className="photo-frame" initial={{opacity:0, scale:.88, rotate:6}} animate={{opacity:1,scale:1,rotate:2}} transition={{duration:1, delay:.2}}>
              <div className="photo-glow"/>
              <img src="/profile.jpg" alt="BETTAPPA profile portrait"/>
              <div className="photo-tag"><span/> CSE • 2027</div>
            </motion.div>
            <motion.div className="floating-card card-top" animate={{y:[0,-7,0]}} transition={{duration:4,repeat:Infinity}}>
              <Trophy size={17}/><div><strong>59+</strong><small>LeetCode problems</small></div>
            </motion.div>
            <motion.div className="floating-card card-bottom" animate={{y:[0,7,0]}} transition={{duration:4.5,repeat:Infinity}}>
              <GraduationCap size={18}/><div><strong>8.04</strong><small>CGPA · 7th Semester</small></div>
            </motion.div>
          </div>
          <a href="#about" className="scroll-hint"><ChevronDown size={18}/> Scroll to explore</a>
        </section>

        <section id="about" className="section content-section">
          <Reveal><div className="section-label">01 — About</div></Reveal>
          <div className="about-grid">
            <Reveal><h3>Building skills.<br/><span>Creating solutions.</span></h3></Reveal>
            <Reveal className="about-copy">
              <p>I am a Computer Science & Engineering student at Dayananda Sagar Academy of Technology and Management, Bengaluru, pursuing my B.E. with expected graduation in 2027.</p>
              <p>My foundation includes programming, object-oriented programming, database handling, problem solving, debugging, and software testing. I am a quick learner and enjoy working as part of a team.</p>
              <div className="facts">
                <div><MapPin size={17}/> Bengaluru, India</div><div><GraduationCap size={17}/> B.E. CSE · 2027</div><div><CheckCircle2 size={17}/> 8.04 CGPA</div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="skills" className="section content-section">
          <Reveal><div className="section-label">02 — Skills</div></Reveal>
          <div className="section-heading"><Reveal><h3>My technical <span>toolkit.</span></h3></Reveal><Reveal><p>A practical foundation built through coursework, projects, coding practice, and hands-on learning.</p></Reveal></div>
          <div className="skills-grid">
            {skills.map(({icon:Icon,title,items},i)=><Reveal key={title}><article className="skill-card"><div className="icon-box"><Icon size={22}/></div><h4>{title}</h4><div className="chips">{items.map(item=><span key={item}>{item}</span>)}</div></article></Reveal>)}
          </div>
        </section>

        <section id="projects" className="section content-section projects-section">
          <Reveal><div className="section-label">03 — Selected Projects</div></Reveal>
          <div className="section-heading"><Reveal><h3>Work I'm <span>proud of.</span></h3></Reveal><Reveal><p>Academic projects where I applied programming, systems thinking, integration, and testing to practical problems.</p></Reveal></div>
          <div className="projects-list">
            <div className="project-group-note"><Sparkles size={15}/> Featured work includes my final-year project and strongest engineering projects. Other academic/group projects are included to show breadth.</div>
               {projects.map(({number,title,status,description,role,tags,icon:Icon,flow,featured,image,github,demo}) => (
  <Reveal key={title}>
    <article className={`project-card ${featured ? "featured-project" : ""}`}>
              <div className="project-number">{number}</div><div className="project-icon"><Icon size={28}/></div>
              <div className="project-main">
                {image && <div className="project-visual"><img src={image} alt={`${title} project visual`} /></div>}<div className="project-title-row">
  <div>
    <h4>{title}</h4>
    {status && <span className="project-status">{status}</span>}
  </div>
 <div className="project-links">
  {demo && (
    <a
      className="project-link"
      href={demo}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${title} live demo`}
      title="Live Demo"
    >
      <ExternalLink size={20}/>
    </a>
  )}

  {github && (
    <a
      className="project-link"
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${title} on GitHub`}
      title="GitHub"
    >
      <Github size={20}/>
    </a>
  )}
</div>
</div><p>{description}</p><div className="project-role"><strong>My role</strong><span>{role}</span></div>
                  {flow && <div className="project-flow">
                    <span>Sensors</span><b>→</b><span>ESP8266</span><b>→</b><span>Wi-Fi</span><b>→</b><span>Blynk</span><b>→</b><span>Pump / Alerts</span>
                  </div>}
                  <div className="chips">{tags.map(t=><span key={t}>{t}</span>)}</div></div>
            </article></Reveal>))}
          </div>
        </section>

        <section className="section stats-section">
          <Reveal><div className="section-label">GitHub snapshot</div></Reveal>
          <div className="stats-grid">
            <a className="stat-card" href={profile.github} target="_blank" rel="noreferrer"><Github/><strong>{repoCount ?? "—"}</strong><span>Public repositories</span><ArrowUpRight/></a>
            <a className="stat-card" href={profile.github} target="_blank" rel="noreferrer"><Star/><strong>{stars ?? "—"}</strong><span>Total repository stars</span><ArrowUpRight/></a>
            <div className="stat-card"><GitBranch/><strong>59+</strong><span>LeetCode problems</span><Trophy/></div>
            <div className="stat-card"><Sparkles/><strong>49</strong><span>Agent Blazer badges</span><Trophy/></div>
          </div>
          <p className="api-note">GitHub repository figures load live from the public GitHub API when the portfolio is opened.</p>
        </section>

        <section id="journey" className="section content-section">
          <Reveal><div className="section-label">04 — Journey</div></Reveal>
          <div className="journey-grid">
            <div className="timeline">
              {journey.map(([year,title,school,detail])=><Reveal key={year}><div className="timeline-item"><span className="year">{year}</span><div><h4>{title}</h4><p>{school}</p><small>{detail}</small></div></div></Reveal>)}
            </div>
            <Reveal><div className="achievements"><h4>Highlights</h4>
              <div className="achievement"><Trophy/><div><strong>59+ coding problems</strong><span>LeetCode using C and Data Structures</span></div></div>
              <div className="achievement"><Trophy/><div><strong>49 badges</strong><span>Agent Blazer Champion and Innovator tasks</span></div></div>
              <div className="achievement"><Cloud/><div><strong>Cloud & AI exposure</strong><span>Cloud Computing and Agentic AI seminars/workshops</span></div></div>
            </div></Reveal>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <Reveal><div className="section-label">05 — Contact</div></Reveal>
          <Reveal className="contact-inner">
            <p className="mini">HAVE AN OPPORTUNITY?</p><h3>Let's build something<br/><span>meaningful together.</span></h3>
            <p className="contact-text">I'm open to internships, entry-level opportunities, collaborative projects, and learning-focused experiences.</p>
            <a className="button primary big" href={`mailto:${profile.email}`}>Say hello <Mail size={18}/></a>
            <div className="contact-links"><a href={`mailto:${profile.email}`}><Mail size={17}/> {profile.email}</a><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a></div>
          </Reveal>
        </section>
      </main>

      <footer><span>© {new Date().getFullYear()} BETTAPPA</span><span>React · Vite · Framer Motion</span><a href="#home">Back to top ↑</a></footer>
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App/>);
