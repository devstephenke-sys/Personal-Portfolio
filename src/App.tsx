import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Cpu, 
  Globe, 
  ArrowUpRight,
  MapPin,
  Clock,
  Sparkles,
  Phone,
  Database,
  BookOpen,
  BrainCircuit,
  Layout,
  Home as HomeIcon,
  User,
  Wrench,
  Briefcase,
  Send,
  Download,
  Award,
  TrendingUp,
  MessageSquare,
  FileText
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Shared Components ---

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="w-full"
  >
    {children}
  </motion.div>
);

const SectionTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-12">
    <h2 className="text-4xl md:text-6xl font-serif italic tracking-tight mb-4">{title}</h2>
    {subtitle && <p className="text-xl text-brand-text-dim max-w-2xl font-light">{subtitle}</p>}
  </div>
);

const BentoCard = ({ 
  children, 
  className, 
  title, 
  subtitle,
  icon: Icon
}: { 
  children?: React.ReactNode; 
  className?: string; 
  title?: string; 
  subtitle?: string;
  icon?: any;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className={cn(
      "glass glass-hover p-6 flex flex-col gap-4 relative group",
      className
    )}
  >
    {(title || Icon) && (
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {Icon && <Icon className="w-4 h-4 text-brand-text-dim" />}
          {title && <h3 className="text-xs font-mono uppercase tracking-widest text-brand-text-dim">{title}</h3>}
        </div>
        {subtitle && <span className="text-[10px] font-mono text-brand-text-dim/50 uppercase">{subtitle}</span>}
      </div>
    )}
    {children}
  </motion.div>
);

const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  link,
  image,
  metrics
}: { 
  title: string; 
  description: string; 
  tags: string[]; 
  link: string;
  image?: string;
  metrics?: string;
}) => (
  <a 
    href={link} 
    target="_blank" 
    rel="noopener noreferrer"
    className="glass glass-hover p-4 flex flex-col gap-4 group/project h-full transition-all"
  >
    <div className="aspect-video rounded-xl bg-white/5 overflow-hidden relative">
      <img 
        src={image || `https://picsum.photos/seed/${title}/800/450`} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover/project:scale-105"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/project:opacity-100 transition-opacity flex items-center justify-center">
        <ExternalLink className="w-6 h-6 text-white" />
      </div>
    </div>
    <div className="flex flex-col flex-grow">
      <div className="flex items-center justify-between">
        <h4 className="font-medium text-lg group-hover/project:text-white/90 transition-colors">{title}</h4>
        <ArrowUpRight className="w-4 h-4 text-brand-text-dim group-hover/project:translate-x-0.5 group-hover/project:-translate-y-0.5 transition-transform" />
      </div>
      <p className="text-sm text-brand-text-dim line-clamp-2 mt-1 flex-grow">{description}</p>
      {metrics && (
        <div className="mt-2 text-xs text-emerald-400 font-mono bg-emerald-500/5 px-2 py-1 rounded-lg border border-emerald-500/10">
          <Award className="w-3 h-3 inline mr-1" /> {metrics}
        </div>
      )}
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] font-mono px-2 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </a>
);

// --- Pages ---

const Home = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <PageWrapper>
      <div className="flex flex-col gap-12">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 text-blue-400 bg-blue-500/5 px-3 py-1 rounded-full border border-blue-500/10">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-tighter">Learning something new</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/5 px-3 py-1 rounded-full border border-emerald-500/10">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-mono uppercase tracking-tighter">Open for consultant roles</span>
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif italic tracking-tight leading-none">Stephen <br /> Njuguna</h1>
            <p className="text-2xl text-brand-text-dim max-w-2xl font-light leading-relaxed">
              Data Scientist & eLearning Developer. Bridging the gap between <span className="text-white">complex data</span> and <span className="text-white">interactive learning</span>.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="mailto:devstephen.ke@gmail.com" 
                className="px-6 py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-colors flex items-center gap-2"
              >
                <Send className="w-4 h-4" /> Hire Me
              </a>
              <a 
                href="/resume.html" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4" /> Download Resume
              </a>
              <a 
                href="/resume.html" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl font-medium hover:bg-emerald-500/20 transition-colors flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" /> View Resume
              </a>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <BentoCard title="At a Glance" icon={Sparkles} className="h-full">
            <div className="space-y-4">
              <p className="text-lg text-brand-text-dim leading-relaxed">
                Computer Scientist from Rongo University. I specialize in building high-performance eLearning modules and data-driven analytics platforms.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <div className="flex items-center gap-2 text-xs font-mono text-brand-text-dim bg-white/5 px-3 py-2 rounded-xl border border-white/10">
                  <MapPin className="w-3 h-3" /> Nairobi, Kenya
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-brand-text-dim bg-white/5 px-3 py-2 rounded-xl border border-white/10">
                  <Clock className="w-3 h-3" /> {time.toLocaleTimeString()}
                </div>
              </div>
            </div>
          </BentoCard>
          <BentoCard className="flex items-center justify-center text-center">
            <div>
              <div className="text-5xl font-serif italic mb-1 text-blue-400">4+</div>
              <div className="text-[10px] font-mono text-brand-text-dim uppercase tracking-widest">Years Exp</div>
            </div>
          </BentoCard>
          <BentoCard className="flex items-center justify-center text-center">
            <div>
              <div className="text-5xl font-serif italic mb-1 text-blue-400">40+</div>
              <div className="text-[10px] font-mono text-brand-text-dim uppercase tracking-widest">Projects</div>
            </div>
          </BentoCard>
          <BentoCard className="flex items-center justify-center text-center">
            <div>
              <div className="text-5xl font-serif italic mb-1 text-blue-400">50+</div>
              <div className="text-[10px] font-mono text-brand-text-dim uppercase tracking-widest">TVET Centres</div>
            </div>
          </BentoCard>
        </div>

        <BentoCard title="Key Impact" icon={TrendingUp}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-serif italic text-blue-400 mb-2">40%</div>
              <div className="text-sm text-brand-text-dim">Training time reduction through AI-powered learning</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif italic text-blue-400 mb-2">200+</div>
              <div className="text-sm text-brand-text-dim">Students trained via eLearning modules</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif italic text-blue-400 mb-2">10+</div>
              <div className="text-sm text-brand-text-dim">Organizations using my systems</div>
            </div>
          </div>
        </BentoCard>
      </div>
    </PageWrapper>
  );
};

const About = () => (
  <PageWrapper>
    <SectionTitle 
      title="About & Experience" 
      subtitle="A journey through computer science, data analysis, and digital education."
    />
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <BentoCard title="My Story" icon={User}>
          <div className="space-y-4 text-lg text-brand-text-dim leading-relaxed">
            <p>
              I am a dedicated Computer Scientist with a Bachelor's degree from Rongo University (2019-2023). My career is built on the foundation of continuous learning and a passion for solving complex problems through technology.
            </p>
            <p>
              I've transitioned from data entry to becoming a specialized eLearning Developer and Data Analyst. I believe that data is only as powerful as the insights we can teach others to derive from it.
            </p>
          </div>
        </BentoCard>

        <BentoCard title="Work Experience" icon={Briefcase}>
          <div className="space-y-8">
            {[
              {
                role: "eLearning Officer",
                company: "Don Bosco Tech Africa",
                period: "Jan 2026 - Present",
                desc: "Managing Learning Management System (LMS) platforms and developing high-quality technical and vocational training modules tailored for digital and blended learning environments. Leading the digital transformation of vocational education across Africa by integrating data systems, learning platforms, and modern instructional technologies to support evidence-based decision-making, institutional performance monitoring, and scalable skills development.",
                current: true
              },
              {
                role: "Data Analyst",
                company: "Don Bosco Tech Africa",
                period: "Jan 2026 - Present",
                desc: "I am responsible for end-to-end data management and analytics across TVET centres in multiple countries under Don Bosco Tech Africa. My role focuses on ensuring data accuracy, consistency, and usability to support evidence-based decision-making at institutional and regional levels..",
                current: true
              },
              {
                role: "eLearning Intern",
                company: "Don Bosco Tech Africa",
                period: "Jan 2025 - Dec 2025",
                desc: "Focused on interactive module design and data-driven content evaluation. Developed standards-aligned digital learning experiences."
              },
              {
                role: "Data Entry Specialist",
                company: "Mwangaza",
                period: "2023 - 2024",
                desc: "Managed comprehensive data entry, cleaning, and storage for organizational systems."
              }
            ].map((exp, i) => (
              <div key={i} className="relative pl-8 border-l border-white/10">
                <div className={cn(
                  "absolute left-[-5px] top-1 w-2 h-2 rounded-full",
                  exp.current ? "bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)]" : "bg-white/20"
                )} />
                <h4 className="text-xl font-medium text-white">{exp.role}</h4>
                <p className="text-sm text-blue-400 font-mono mb-2">{exp.company} • {exp.period}</p>
                <p className="text-brand-text-dim leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </BentoCard>
      </div>

      <div className="space-y-8">
        <BentoCard title="Education" icon={Terminal}>
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-white">B.Sc. Computer Science</h4>
              <p className="text-sm text-brand-text-dim">Rongo University</p>
              <p className="text-xs text-blue-400 font-mono">2019 - 2023</p>
            </div>
            <div className="h-px bg-white/5" />
            <div>
              <h4 className="font-medium text-white">KCSE</h4>
              <p className="text-sm text-brand-text-dim">Kabazi High School</p>
              <p className="text-xs text-blue-400 font-mono">2015 - 2018</p>
            </div>
          </div>
        </BentoCard>

        <BentoCard title="Certifications" icon={Sparkles}>
          <div className="space-y-4">
            <div className="p-3 rounded-xl bg-blue-500/5 border border-blue-500/10">
              <h4 className="text-sm font-medium text-blue-400">IBM Data Analysis Professional</h4>
              <p className="text-[10px] text-brand-text-dim uppercase tracking-wider">IBM • 2024</p>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <h4 className="text-sm font-medium">Computer Packages Certificate</h4>
              <p className="text-[10px] text-brand-text-dim uppercase tracking-wider">Awake Computers</p>
            </div>
          </div>
        </BentoCard>

        <BentoCard title="Resume" icon={FileText} className="bg-emerald-500/5 border-emerald-500/20">
          <div className="space-y-4">
            <p className="text-sm text-brand-text-dim leading-relaxed">
              Download or view my complete CV with detailed work experience, education, and project history.
            </p>
            <a 
              href="/resume.html" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-emerald-500 text-white rounded-xl font-medium hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" /> Download CV
            </a>
            <a 
              href="/resume.html" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-white/5 border border-white/10 text-white rounded-xl font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4" /> View in Browser
            </a>
          </div>
        </BentoCard>
      </div>
    </div>
  </PageWrapper>
);

const Skills = () => (
  <PageWrapper>
    <SectionTitle 
      title="Skills & Expertise" 
      subtitle="Role-aligned technical capabilities for Data Science, eLearning Development, and Full Stack Development."
    />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <BentoCard title="Data Scientist" icon={BrainCircuit} subtitle="AI & Analytics">
        <div className="space-y-6">
          {[
            { name: "Python (Pandas, NumPy)", level: 95 },
            { name: "Machine Learning", level: 85 },
            { name: "Fast API", level: 80 },
            { name: "SQL & NoSQL Databases", level: 90 },
            { name: "Neural Networks / LLMs", level: 75 },
            { name: "Data Visualization", level: 85 }
          ].map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white">{skill.name}</span>
                <span className="text-blue-400 font-mono">{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  className="h-full bg-blue-400"
                />
              </div>
            </div>
          ))}
        </div>
      </BentoCard>

      <BentoCard title="eLearning Developer" icon={BookOpen} subtitle="Instructional Tech">
        <div className="space-y-6">
          {[
            { name: "Articulate Storyline", level: 95 },
            { name: "Articulate Rise", level: 90 },
            { name: "Moodle / LearnDash LMS", level: 88 },
            { name: "Instructional Design", level: 85 },
            { name: "AI Tutor Integration", level: 80 },
            { name: "WordPress & LMS", level: 85 }
          ].map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white">{skill.name}</span>
                <span className="text-blue-400 font-mono">{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  className="h-full bg-blue-400"
                />
              </div>
            </div>
          ))}
        </div>
      </BentoCard>

      <BentoCard title="Full Stack Developer" icon={Wrench} subtitle="Web Applications">
        <div className="space-y-6">
          {[
            { name: "React, Next.js", level: 95 },
            { name: "Laravel, PHP", level: 90 },
            { name: "Java, JavaScript", level: 85 },
            { name: "Web Development", level: 90 },
            { name: "API Development", level: 85 },
            { name: "Database Design", level: 88 }
          ].map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white">{skill.name}</span>
                <span className="text-blue-400 font-mono">{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  className="h-full bg-blue-400"
                />
              </div>
            </div>
          ))}
        </div>
      </BentoCard>

      <BentoCard title="AI & Advanced Tech" icon={Sparkles} subtitle="Emerging Technologies">
        <div className="space-y-6">
          {[
            { name: "AI Agents & MCP Servers", level: 85 },
            { name: "Computer Vision", level: 80 },
            { name: "GenAI Applications", level: 75 },
            { name: "Streamlit Dashboards", level: 90 },
            { name: "Deep Learning", level: 70 },
            { name: "Cloud & Deployment", level: 75 }
          ].map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white">{skill.name}</span>
                <span className="text-blue-400 font-mono">{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  className="h-full bg-blue-400"
                />
              </div>
            </div>
          ))}
        </div>
      </BentoCard>
    </div>
  </PageWrapper>
);
const Projects = () => (
  <PageWrapper>
    <SectionTitle 
      title="Featured Projects" 
      subtitle="A collection of work spanning interactive learning, AI/ML, web systems, and data analytics."
    />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProjectCard 
        title="TVET AI Tutor"
        description="AI-powered tutoring system designed for TVET institutions, providing personalized learning support and intelligent feedback to students."
        tags={["AI", "Python", "Education", "LLMs"]}
        link="https://github.com/devstephenke-sys/TVET-AI-TUTOR"
        metrics="Deployed across 50+ TVET centres"
      />
      <ProjectCard 
        title="AI Debate Arena"
        description="An interactive platform where AI models engage in structured debates, showcasing natural language processing and reasoning capabilities."
        tags={["AI", "Python", "NLP", "GenAI"]}
        link="https://github.com/devstephenke-sys/AI-Debate-Arena"
        metrics="Featured in AI research showcase"
      />
      <ProjectCard 
        title="Gen-AI Agents Training"
        description="Comprehensive notebook-based training materials for building and deploying AI agents using modern frameworks and best practices."
        tags={["AI Agents", "Python", "Notebooks", "Training"]}
        link="https://github.com/devstephenke-sys/Gen-AI-Agents-Notebook-Training"
        metrics="Used by 100+ developers"
      />
      <ProjectCard 
        title="Breast Cancer Image Analysis"
        description="Machine learning model for analyzing medical images to detect breast cancer, demonstrating computer vision applications in healthcare."
        tags={["Machine Learning", "Computer Vision", "Python", "Healthcare"]}
        link="https://github.com/devstephenke-sys/breast-cancer-image-analysis-model"
        metrics="IBM Professional Certificate Project"
      />
      <ProjectCard 
        title="TVET Management System"
        description="Comprehensive management system for TVET institutions, handling student records, course management, and administrative workflows."
        tags={["Web Development", "Laravel", "PHP", "Database"]}
        link="https://github.com/devstephenke-sys/TVET-Management-System"
        metrics="Managing 10,000+ student records"
      />
      <ProjectCard 
        title="Don Bosco TVET Explorer"
        description="Interactive web application for exploring and visualizing TVET centre data across multiple African countries."
        tags={["React", "Data Visualization", "Web Development", "Maps"]}
        link="https://github.com/devstephenke-sys/Don-Bosco-TVET-Centres-Explorer"
        metrics="Data from 8 African countries"
      />
      <ProjectCard 
        title="Electude Dashboard"
        description="Enhanced dashboard system for monitoring and analyzing learner progress in technical training environments."
        tags={["Dashboards", "Python", "Data Analysis", "Visualization"]}
        link="https://github.com/devstephenke-sys/Electude-Dashboard"
        metrics="Tracking 500+ learners daily"
      />
      <ProjectCard 
        title="Farm Management System"
        description="Livestock management system designed for agricultural operations, tracking animal health, feeding schedules, and production metrics."
        tags={["Web Development", "Database", "Agriculture", "Management"]}
        link="https://github.com/devstephenke-sys/Farm-Management-for-Livestock-System"
        metrics="Used by 5+ agricultural enterprises"
      />
      <ProjectCard 
        title="Applicant Tracking System"
        description="Streamlined system for managing job applications, candidate evaluations, and hiring workflows for organizations."
        tags={["Web Development", "Laravel", "HR Tech", "Database"]}
        link="https://github.com/devstephenke-sys/Applicant-tracking-system"
        metrics="Processed 1,000+ applications"
      />
      <ProjectCard 
        title="Yambio Catholic Web System"
        description="Complete web system for the Catholic Diocese of Yambio, South Sudan, providing information management and community services."
        tags={["Web Development", "Laravel", "Community", "Africa"]}
        link="https://github.com/devstephenke-sys/Yambio-Catholic-South-Sudan-Web-System"
        metrics="Serving 10,000+ community members"
      />
      <ProjectCard 
        title="Plant Disease Analysis"
        description="Machine learning model and Fast API implementation for predicting plant diseases from image data."
        tags={["Python", "Fast API", "Machine Learning", "Data Science"]}
        link="https://github.com/devstephenke-sys/Disease-Prediction-Model-IBM-Assignment"
        metrics="95% accuracy on test dataset"
      />
      <ProjectCard 
        title="DBTA Survey Analysis"
        description="Interactive Streamlit dashboard for analyzing survey data and monitoring learning experiences across DBTA platforms."
        tags={["Streamlit", "Python", "Data Visualization", "Pandas"]}
        link="https://dbtagp2jsosurveyanalysis-2huah8psohhxgibwp4dprm.streamlit.app/"
        metrics="Real-time analytics dashboard"
      />
      <ProjectCard 
        title="Festo: Household Electrician"
        description="Comprehensive learning path for household electricians, focusing on technical and vocational education standards."
        tags={["Articulate", "LMS", "Vocational Training", "Instructional Design"]}
        link="https://lx.festo.com/en/learning-paths/2684"
        metrics="Published on Festo Learning Platform"
      />
      <ProjectCard 
        title="Basic Python Training"
        description="Comprehensive repository for learning Python fundamentals, covering data types, control structures, and basic algorithms."
        tags={["Python", "Training", "Basics", "Education"]}
        link="https://github.com/devstephenke-sys/Basic-Python"
        metrics="500+ GitHub stars"
      />
      <ProjectCard 
        title="ResearchHub"
        description="Academic research platform facilitating collaboration, document management, and knowledge sharing for researchers."
        tags={["Web Development", "Research", "Collaboration", "Academic"]}
        link="https://github.com/devstephenke-sys/ResearchHub"
        metrics="Facilitating 50+ research projects"
      />
    </div>
  </PageWrapper>
);

const Testimonials = () => (
  <PageWrapper>
    <SectionTitle 
      title="Testimonials" 
      subtitle="What colleagues and organizations say about working with me."
    />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <BentoCard className="h-full">
        <div className="space-y-4">
          <div className="flex items-center gap-1 text-yellow-400">
            <Award className="w-4 h-4" />
            <Award className="w-4 h-4" />
            <Award className="w-4 h-4" />
            <Award className="w-4 h-4" />
            <Award className="w-4 h-4" />
          </div>
          <p className="text-lg text-brand-text-dim leading-relaxed italic">
            "Stephen's AI tutoring system has transformed how we deliver technical training. Student engagement increased by 40% within the first month of deployment."
          </p>
          <div className="pt-4">
            <h4 className="font-medium text-white">Technical Director</h4>
            <p className="text-sm text-blue-400">Don Bosco Tech Africa</p>
          </div>
        </div>
      </BentoCard>
      <BentoCard className="h-full">
        <div className="space-y-4">
          <div className="flex items-center gap-1 text-yellow-400">
            <Award className="w-4 h-4" />
            <Award className="w-4 h-4" />
            <Award className="w-4 h-4" />
            <Award className="w-4 h-4" />
            <Award className="w-4 h-4" />
          </div>
          <p className="text-lg text-brand-text-dim leading-relaxed italic">
            "The data analysis dashboard Stephen built for us provides real-time insights that have improved our decision-making process significantly."
          </p>
          <div className="pt-4">
            <h4 className="font-medium text-white">Program Manager</h4>
            <p className="text-sm text-blue-400">Electude Training Platform</p>
          </div>
        </div>
      </BentoCard>
    </div>
  </PageWrapper>
);

const Contact = () => (
  <PageWrapper>
    <SectionTitle 
      title="Get in Touch" 
      subtitle="Let's discuss how I can help you with your next data or eLearning project."
    />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <BentoCard title="Contact Information" icon={Mail} className="bg-blue-500/5 border-blue-500/20">
          <div className="space-y-6">
            <a href="mailto:devstephen.ke@gmail.com" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-xs font-mono text-blue-400 uppercase tracking-widest">Email</p>
                <p className="text-lg text-white">devstephen.ke@gmail.com</p>
              </div>
            </a>
            <a href="tel:0745534836" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                <Phone className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-xs font-mono text-blue-400 uppercase tracking-widest">Phone</p>
                <p className="text-lg text-white">0745 534 836</p>
              </div>
            </a>
            <a href="/resume.html" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                <FileText className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <p className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Resume</p>
                <p className="text-lg text-white">Download / View CV</p>
              </div>
            </a>
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-xs font-mono text-blue-400 uppercase tracking-widest">Location</p>
                <p className="text-lg text-white">Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </BentoCard>

        <BentoCard title="Social Profiles" icon={Globe}>
          <div className="flex gap-4">
            {[
              { icon: Github, href: "https://github.com/devstephenke-sys", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/stephen-mwangi-bb39713a8/", label: "LinkedIn" }
            ].map((social) => (
              <a 
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass flex flex-col items-center justify-center gap-3 py-6 hover:bg-blue-500/10 hover:border-blue-500/20 transition-all group"
              >
                <social.icon className="w-6 h-6 text-brand-text-dim group-hover:text-blue-400 transition-colors" />
                <span className="text-xs font-mono text-brand-text-dim group-hover:text-white">{social.label}</span>
              </a>
            ))}
          </div>
        </BentoCard>
      </div>

      <BentoCard title="Send a Message" icon={Send}>
        <form className="space-y-4" onSubmit={e => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-mono text-brand-text-dim uppercase">Name</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500/50 text-white" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-brand-text-dim uppercase">Email</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500/50 text-white" placeholder="john@example.com" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-mono text-brand-text-dim uppercase">Subject</label>
            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500/50 text-white" placeholder="Project Inquiry" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-mono text-brand-text-dim uppercase">Message</label>
            <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500/50 text-white min-h-[150px]" placeholder="How can I help you?" />
          </div>
          <button className="w-full py-4 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
            Send Message <Send className="w-4 h-4" />
          </button>
        </form>
      </BentoCard>
    </div>
  </PageWrapper>
);

// --- Layout ---

const Navigation = () => {
  const location = useLocation();
  const navItems = [
    { name: "Home", path: "/", icon: HomeIcon },
    { name: "About", path: "/about", icon: User },
    { name: "Skills", path: "/skills", icon: Wrench },
    { name: "Projects", path: "/projects", icon: Briefcase },
    { name: "Testimonials", path: "/testimonials", icon: MessageSquare },
    { name: "Contact", path: "/contact", icon: Mail }
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-4 py-3 glass backdrop-blur-md flex items-center gap-2 shadow-2xl border-white/10">
      {navItems.map(item => {
        const isActive = location.pathname === item.path;
        return (
          <Link 
            key={item.name} 
            to={item.path}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-widest transition-all",
              isActive ? "bg-blue-500 text-white" : "text-brand-text-dim hover:text-white hover:bg-white/5"
            )}
          >
            <item.icon className="w-4 h-4" />
            <span className="hidden md:inline">{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-brand-bg text-white selection:bg-blue-500/30 selection:text-white pt-32 pb-20">
        <Navigation />
        <main className="max-w-6xl mx-auto p-6 md:p-12 lg:p-20">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        
        <footer className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-brand-text-dim text-[10px] font-mono uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Stephen Njuguna Mwangi</p>
          <div className="flex gap-8">
            <a href="https://github.com/devstephenke-sys" target="_blank" className="hover:text-blue-400 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/stephen-mwangi-bb39713a8/" target="_blank" className="hover:text-blue-400 transition-colors">LinkedIn</a>
          </div>
        </footer>
      </div>
    </Router>
  );
}
