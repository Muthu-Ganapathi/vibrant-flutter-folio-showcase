
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink, Phone, MapPin, Code, Smartphone, Monitor, Zap } from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  
  const roles = ['Flutter Developer', 'React.js Developer', 'Vue.js Developer', 'Mobile App Developer'];
  
  useEffect(() => {
    setIsVisible(true);
    
    // Typing animation
    const text = roles[textIndex % roles.length];
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setCurrentText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setTextIndex(prev => prev + 1);
        }, 2000);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, [textIndex]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const skills = [
    { name: 'Flutter', level: 95, icon: Smartphone, color: 'from-blue-500 to-cyan-500' },
    { name: 'React.js', level: 90, icon: Code, color: 'from-cyan-500 to-blue-500' },
    { name: 'Vue.js', level: 85, icon: Zap, color: 'from-green-500 to-teal-500' },
    { name: 'Mobile Development', level: 95, icon: Smartphone, color: 'from-purple-500 to-pink-500' },
    { name: 'Web Development', level: 92, icon: Monitor, color: 'from-orange-500 to-red-500' },
  ];

  const projects = [
    {
      title: 'E-Commerce Flutter App',
      description: 'A complete e-commerce solution built with Flutter, featuring payment integration, real-time notifications, and smooth animations.',
      tech: ['Flutter', 'Firebase', 'Stripe', 'Provider'],
      image: 'photo-1649972904349-6e44c42644a7',
      link: '#'
    },
    {
      title: 'React Dashboard',
      description: 'Modern admin dashboard with real-time data visualization, built using React.js and Chart.js with responsive design.',
      tech: ['React.js', 'Chart.js', 'Material-UI', 'Redux'],
      image: 'photo-1488590528505-98d2b5aba04b',
      link: '#'
    },
    {
      title: 'Vue.js Portfolio',
      description: 'Interactive portfolio website showcasing Vue.js capabilities with smooth animations and modern design patterns.',
      tech: ['Vue.js', 'Vuex', 'SCSS', 'Nuxt.js'],
      image: 'photo-1486312338219-ce68d2c6f44d',
      link: '#'
    },
    {
      title: 'Cross-Platform Mobile App',
      description: 'Feature-rich mobile application with offline support, push notifications, and seamless user experience.',
      tech: ['Flutter', 'SQLite', 'REST API', 'BLoC'],
      image: 'photo-1581091226825-a6a2a5aee158',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-700"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-cyan-400 transition-colors duration-300">Home</a>
              <a href="#about" className="hover:text-cyan-400 transition-colors duration-300">About</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors duration-300">Skills</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors duration-300">Projects</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors duration-300">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 bg-clip-text text-transparent">
              Hello, I'm a
            </span>
          </h1>
          <div className="text-3xl md:text-5xl font-bold mb-8 h-16 flex items-center justify-center">
            <span className="text-white">{currentText}</span>
            <span className="animate-pulse ml-2">|</span>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            With 5+ years of experience in Flutter, React.js, and Vue.js development, 
            I create beautiful, responsive applications that deliver exceptional user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300"
            >
              View My Work
            </Button>
            <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-3 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300">
              Download CV
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience building 
                high-quality mobile and web applications. My expertise spans across Flutter for 
                cross-platform mobile development, React.js for dynamic web applications, and 
                Vue.js for modern frontend solutions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I believe in writing clean, maintainable code and creating user experiences that 
                are not only functional but also delightful. I'm always eager to learn new 
                technologies and take on challenging projects that push my skills to the next level.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">5+ Years Experience</Badge>
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Mobile First</Badge>
                <Badge className="bg-teal-500/20 text-teal-400 border-teal-500/30">Clean Code</Badge>
                <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">UI/UX Focus</Badge>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/30">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-cyan-400" size={20} />
                    <span className="text-gray-300">Available Worldwide</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-cyan-400" size={20} />
                    <span className="text-gray-300">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-cyan-400" size={20} />
                    <span className="text-gray-300">hello@developer.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            My Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card key={skill.name} className={`bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105 animate-fade-in`} style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color}`}>
                      <skill.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                      <p className="text-gray-400">{skill.level}% Proficiency</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                      style={{width: `${skill.level}%`}}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className={`bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105 animate-fade-in group`} style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=800&q=80`}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full p-2">
                        <ExternalLink size={16} />
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always interested in new opportunities and exciting projects. 
            Let's create something amazing together!
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <Button className="bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-full transform hover:scale-110 transition-all duration-300">
              <Github size={24} />
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full transform hover:scale-110 transition-all duration-300">
              <Linkedin size={24} />
            </Button>
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white p-4 rounded-full transform hover:scale-110 transition-all duration-300">
              <Mail size={24} />
            </Button>
          </div>
          <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-4 rounded-full text-xl font-semibold transform hover:scale-105 transition-all duration-300">
            Get In Touch
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Flutter Developer Portfolio. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
