import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, ChevronDown, ExternalLink, Code, Database, Shield, Zap, Award, Calendar } from 'lucide-react';

const SkillTag = ({ skill, category }) => {
  const colors = {
    frontend: "bg-gradient-to-r from-blue-500 to-purple-600 text-white",
    backend: "bg-gradient-to-r from-green-500 to-teal-600 text-white",
    blockchain: "bg-gradient-to-r from-orange-500 to-red-600 text-white",
    tools: "bg-gradient-to-r from-gray-600 to-gray-800 text-white"
  };
  
  return (
    <span className={`${colors[category] || colors.tools} text-sm font-medium mr-2 mb-2 px-3 py-1.5 rounded-full shadow-md transform hover:scale-105 transition-all duration-200 inline-block`}>
      {skill}
    </span>
  );
};

const ProjectCard = ({ title, description, details, impact, technologies, featured = false }) => (
  <div className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${featured ? 'border-l-4 border-blue-500' : ''}`}>
    {featured && (
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2">
        <div className="flex items-center">
          <Award className="mr-2" size={16} />
          <span className="text-sm font-semibold">Featured Project</span>
        </div>
      </div>
    )}
    <div className="p-6">
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      {details && (
        <div className="mb-4">
          <h4 className="font-semibold mb-2 text-gray-800 flex items-center">
            <Code className="mr-2" size={16} />
            Key Aspects:
          </h4>
          <ul className="space-y-1">
            {details.map((detail, index) => (
              <li key={index} className="text-gray-600 flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                {detail}
              </li>
            ))}
          </ul>
        </div>
      )}
      {impact && (
        <div className="mb-4 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
          <p className="text-gray-700">
            <strong className="text-blue-700">Impact:</strong> {impact}
          </p>
        </div>
      )}
      <div className="flex flex-wrap">
        {technologies.map((tech, index) => (
          <SkillTag key={index} skill={tech} category="tools" />
        ))}
      </div>
    </div>
  </div>
);

const ExperienceItem = ({ company, position, period, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-shadow duration-300">
    <div className="flex items-start justify-between mb-3">
      <div>
        <h3 className="text-xl font-bold text-gray-800">{company}</h3>
        <p className="text-lg font-semibold text-blue-600">{position}</p>
      </div>
      <div className="flex items-center text-gray-500">
        <Calendar size={16} className="mr-1" />
        <span className="text-sm">{period}</span>
      </div>
    </div>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration]);
  
  return <span>{count}{suffix}</span>;
};

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isVisible, setIsVisible] = useState({});
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const skillCategories = {
    frontend: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "Responsive Design"],
    backend: ["Python", "Flask", "Django", "Node.js", "API Development"],
    blockchain: ["Blockchain", "ICP", "Decentralized Systems", "Smart Contracts"],
    tools: ["Git", "Agile", "DevOps", "CI/CD", "Docker"]
  };

  const projects = [
    {
      title: "Blockchain-Based EHR System for NHS Leveraging ICP Technology",
      description: "Revolutionary Master's thesis research addressing critical NHS challenges through blockchain innovation. This comprehensive study combines theoretical research with practical implementation to transform healthcare delivery in the UK.",
      details: [
        "Architected a prototype framework leveraging Internet Computer Protocol (ICP) for NHS ecosystem transformation",
        "Executed mixed-method research combining qualitative literature analysis with quantitative NHS professional insights",
        "Conducted comparative analysis against existing methodologies, emphasizing data security and system integration",  
        "Evaluated critical KPIs: interoperability, scalability, access control, and data integrity",
        "Delivered evidence-based implementation roadmap with strategic recommendations for NHS adoption"
      ],
      impact: "Potential to revolutionize UK healthcare delivery through integrated, patient-centric, secure EHR systems, contributing significantly to blockchain healthcare applications knowledge base.",
      technologies: ["Blockchain", "ICP", "Healthcare IT", "Data Security", "Research", "System Architecture"],
      featured: true
    },
    {
      title: "Greenaware E-commerce Climate Platform",
      description: "Full-stack e-commerce solution focused on climate awareness, built with modern security practices and responsive design principles.",
      technologies: ["Django", "Flask", "JavaScript", "API", "Security", "Responsive Design"]
    },
    {
      title: "EEPAS Event Booking Application",
      description: "Led DevOps team in developing scalable event booking platform with modern deployment practices and containerization.",
      technologies: ["DevOps", "CI/CD", "Docker", "Agile", "Team Leadership", "Cloud Deployment"]
    }
  ];

  const experiences = [
    {
      company: "Dreamsync Network Ltd UK",
      position: "Junior Front-End Developer (Intern)",
      period: "Oct 2022 - Jun 2023",
      description: "Spearheaded responsive web application development using modern frontend technologies. Collaborated effectively with cross-functional teams to deliver seamless user experiences and ensure optimal component integration."
    },
    {
      company: "Intrum UK",
      position: "Customer Support Representative", 
      period: "Jul 2023 - Nov 2023",
      description: "Managed complex customer credit portfolios and debt solutions while maintaining strict GDPR compliance. Built strong client relationships through effective communication and problem-solving."
    }
  ];

  const stats = [
    { label: "Projects Completed", value: 15, suffix: "+" },
    { label: "Technologies Mastered", value: 12, suffix: "+" },
    { label: "Months Experience", value: 18, suffix: "+" },
    { label: "Client Satisfaction", value: 100, suffix: "%" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Enhanced Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Chris Emetoh
            </div>
            <nav className="hidden md:flex space-x-8">
              {['about', 'skills', 'projects', 'experience', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-medium transition-all duration-200 hover:text-blue-600 ${
                    activeSection === section ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700'
                  }`}
                >
                  {section}
                </button>
              ))}
            </nav>
            <button onClick={toggleMenu} className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-white border-t border-gray-200">
            {['about', 'skills', 'projects', 'experience', 'education', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left py-3 px-6 hover:bg-gray-50 transition-colors capitalize"
              >
                {section}
              </button>
            ))}
          </nav>
        )}
      </header>

      <main className="container mx-auto px-6">
        {/* Hero Section */}
        <section id="about" className="py-20">
          <div className="text-center mb-12">
            <div className="mb-6">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl">
                <span className="text-white text-4xl font-bold">CE</span>
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Innovative Software Engineer
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Blockchain specialist with full-stack expertise, transforming complex healthcare challenges through cutting-edge technology solutions.
            </p>
            
            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="text-2xl font-bold text-blue-600">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              Innovative software engineer with a robust foundation in full-stack development and specialized expertise in blockchain technology. My recent Master's research demonstrates the ability to apply cutting-edge solutions to complex real-world challenges in healthcare IT. Skilled in project requirement evaluation, creative solution design, and seamless collaboration to meet critical deadlines. Passionate about leveraging technology to optimize user experiences, drive operational efficiency, and foster sustainable business growth through transformative digital innovation.
            </p>
          </div>
        </section>

        {/* Enhanced Skills Section */}
        <section id="skills" className="py-16">
          <h2 className="text-4xl font-bold text-center mb-12">Technical Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skillCategories).map(([category, skills]) => (
              <div key={category} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {category === 'frontend' && <Code className="text-blue-500 mr-2" />}
                  {category === 'backend' && <Database className="text-green-500 mr-2" />}
                  {category === 'blockchain' && <Shield className="text-orange-500 mr-2" />}
                  {category === 'tools' && <Zap className="text-purple-500 mr-2" />}
                  <h3 className="text-xl font-semibold capitalize">{category}</h3>
                </div>
                <div className="space-y-2">
                  {skills.map((skill, index) => (
                    <SkillTag key={index} skill={skill} category={category} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Projects Section */}
        <section id="projects" className="py-16">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        {/* Enhanced Experience Section */}
        <section id="experience" className="py-16">
          <h2 className="text-4xl font-bold text-center mb-12">Professional Experience</h2>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} {...exp} />
            ))}
          </div>
        </section>

        {/* Enhanced Education Section */}
        <section id="education" className="py-16">
          <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Master of Science - Software Engineering</h3>
                  <p className="text-xl text-blue-600 font-semibold">University of Bolton</p>
                </div>
                <div className="text-gray-500 flex items-center">
                  <Calendar size={16} className="mr-1" />
                  <span>Sep 2023 - Aug 2024</span>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Thesis:</strong> Blockchain-Based EHR System for NHS Leveraging ICP Technology
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Bachelor of Science (Hons) - Computing (2:1)</h3>
                  <p className="text-xl text-blue-600 font-semibold">University of Bolton</p>
                </div>
                <div className="text-gray-500 flex items-center">
                  <Calendar size={16} className="mr-1" />
                  <span>Sep 2022 - Jun 2023</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section id="contact" className="py-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
            <p className="text-xl mb-8 opacity-90">Ready to discuss your next project or opportunity?</p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Mail className="mx-auto mb-4" size={32} />
                <p className="font-semibold">Email</p>
                <a href="mailto:palwitchris25@gmail.com" className="hover:underline">
                  palwitchris25@gmail.com
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <span className="text-2xl mb-4 block">📱</span>
                <p className="font-semibold">Phone</p>
                <p>(+44) 7733-460-570</p>
              </div>
            </div>
            
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/officialchris89"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 transition-colors p-4 rounded-full"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/chris-emetoh"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 transition-colors p-4 rounded-full"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:palwitchris25@gmail.com"
                className="bg-white/20 hover:bg-white/30 transition-colors p-4 rounded-full"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Chris Emetoh. Crafted with passion for innovation.
          </p>
        </div>
      </footer>
    </div>
  );
}