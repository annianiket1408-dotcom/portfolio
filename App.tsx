/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from "react";
import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Globe, 
  Database, 
  Award,
  ChevronRight
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

interface Skill {
  name: string;
  icon: ReactNode;
}

const skills: Skill[] = [
  { name: "React", icon: <Code2 className="w-5 h-5 text-blue-400" /> },
  { name: "HTML/CSS", icon: <Globe className="w-5 h-5 text-orange-400" /> },
  { name: "JavaScript", icon: <Code2 className="w-5 h-5 text-yellow-400" /> },
  { name: "Firebase", icon: <Database className="w-5 h-5 text-yellow-500" /> },
  { name: "GitHub", icon: <Github className="w-5 h-5 text-slate-300" /> },
  { name: "Basic Backend", icon: <Database className="w-5 h-5 text-green-400" /> },
  { name: "AI Tools", icon: <Cpu className="w-5 h-5 text-purple-400" /> },
];

export default function App() {
  return (
    <div className="min-h-screen bg-bg-dark font-sans selection:bg-accent-blue/30 selection:text-white relative overflow-x-hidden">
      {/* Mesh Gradient Background */}
      <div className="fixed inset-0 mesh-gradient pointer-events-none z-0" />

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-12 lg:py-24 space-y-32">
        {/* Navigation - Minimal Frosted */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-dark/40 backdrop-blur-xl border-b border-white/5">
          <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
            <span className="font-display font-bold text-lg tracking-tight text-white">Aniket Kumar</span>
            <div className="hidden md:flex gap-10 text-xs font-semibold uppercase tracking-wider text-text-secondary">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#skills" className="hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="hero" className="pt-24 grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
          <motion.div 
            {...fadeIn}
            className="flex flex-col justify-center"
          >
            <motion.div className="badge w-fit">Available for work</motion.div>
            <motion.h1 
              className="text-6xl md:text-8xl font-display font-bold tracking-tighter text-white mb-6 leading-[0.95]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Hi, I'm <br />
              <span className="bg-gradient-to-br from-white via-white to-text-secondary bg-clip-text text-transparent">Aniket Kumar</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-accent-blue font-medium font-display mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              AI Enthusiast | Developer
            </motion.p>
            <motion.p 
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.6 }}
              className="text-lg text-text-secondary max-w-lg leading-relaxed mb-10"
            >
              I build practical web applications and explore AI-driven ideas with a focus on real-world implementation.
            </motion.p>

            <motion.div 
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.8 }}
              className="flex items-center gap-5"
            >
              <a 
                href="#contact" 
                className="px-8 py-4 bg-white text-bg-dark font-bold text-sm rounded-2xl hover:bg-slate-200 transition-all duration-300"
              >
                Get in touch
              </a>
              <a 
                href="#projects" 
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-sm rounded-2xl hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-2"
              >
                View Projects <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>

          <div className="space-y-6">
            {/* About Card in Right Col for Hero */}
            <motion.div 
              {...fadeIn}
              transition={{ delay: 1 }}
              className="glass-card p-10"
            >
              <div className="section-title">About Me</div>
              <p className="text-text-secondary leading-relaxed">
                Student at <span className="text-white">Oriental Institute of Science and Technology</span>. 
                Focused on building real, working projects and exploring the intersection of modern web development and AI tools.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-8 scroll-mt-32">
          <motion.div {...fadeIn} className="space-y-2">
            <h2 className="text-3xl font-display font-bold text-white tracking-tight">Technical Arsenal</h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="flex flex-wrap gap-4"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={fadeIn}
                className="skill-tag flex items-center gap-3 hover:border-accent-blue/40 hover:bg-accent-blue/5 group cursor-default"
              >
                <span className="opacity-70 group-hover:opacity-100 transition-opacity">{skill.icon}</span>
                <span className="font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-8 scroll-mt-32">
          <motion.div {...fadeIn} className="space-y-2">
            <h2 className="text-3xl font-display font-bold text-white tracking-tight">Active Projects</h2>
          </motion.div>

          <motion.div {...fadeIn} className="glass-card p-16 flex flex-col items-center justify-center text-center space-y-4 border-dashed border-white/10 bg-transparent">
            <div className="p-4 bg-white/3 rounded-full">
              <Award className="w-8 h-8 text-white/20" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white">Under Construction</h3>
              <p className="text-text-secondary max-w-sm italic">
                Projects will be updated soon as I continue building my catalog of real-world applications.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-8 pb-24 scroll-mt-32">
          <motion.div {...fadeIn} className="space-y-2">
            <h2 className="text-3xl font-display font-bold text-white tracking-tight">Get In Touch</h2>
          </motion.div>

          <motion.div 
            {...fadeIn}
            className="grid md:grid-cols-2 gap-6"
          >
            <a href="mailto:annianiket1408@gmail.com" className="glass-card p-8 flex items-center gap-5 group hover:border-accent-blue/40 transition-all duration-300">
              <div className="p-3 bg-accent-blue/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-accent-blue" />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.2em]">Email</p>
                <p className="text-white font-medium group-hover:text-accent-blue transition-colors">annianiket1408@gmail.com</p>
              </div>
            </a>

            <a 
              href="https://www.linkedin.com/in/aniket-kumar-baa4b1384" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-8 flex items-center gap-5 group hover:border-accent-purple/40 transition-all duration-300"
            >
              <div className="p-3 bg-accent-purple/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Linkedin className="w-6 h-6 text-accent-purple" />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.2em]">LinkedIn</p>
                <p className="text-white font-medium group-hover:text-accent-purple transition-colors">Professional Profile</p>
              </div>
            </a>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-12 bg-bg-dark/40 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-semibold uppercase tracking-widest text-text-secondary">
          <p>© {new Date().getFullYear()} Aniket Kumar</p>
          <div className="flex gap-10">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

