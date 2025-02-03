import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {
  FaCode,
  FaDatabase,
  FaProjectDiagram,
  FaUsers,
  FaShieldAlt,
  FaCogs,
  FaGraduationCap,
  FaBuilding,
  FaGithub,
  FaFileAlt,
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaFilePdf,
} from 'react-icons/fa'
import './App.css'

function App() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  // Animation pour le texte qui apparaît lettre par lettre
  const [text] = useState('Développeur Full Stack')
  const [displayText, setDisplayText] = useState('')
  const [index, setIndex] = useState(0)
  // Nouvel état pour le formulaire
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [selectedProject, setSelectedProject] = useState(null)

  const competences = [
    {
      title: "Réaliser un développement d'application",
      icon: <FaCode className="w-8 h-8 mb-4" />,
      description: "Conception et développement d'applications en suivant les bonnes pratiques",
      badges: ['Java', 'Python', 'JavaScript', 'Angular'],
      projetsAssocies: ['DailyBank', 'Emcaffe', 'Portfolio', 'Jeux Olympiques'],
    },
    {
      title: 'Optimiser des applications',
      icon: <FaCogs className="w-8 h-8 mb-4" />,
      description: 'Amélioration des performances et de la qualité des applications',
      badges: ['JUnit', 'Git', 'Docker'],
      projetsAssocies: ['DailyBank', 'Emcaffe'],
    },
    {
      title: 'Administrer des systèmes informatiques',
      icon: <FaDatabase className="w-8 h-8 mb-4" />,
      description: 'Gestion et maintenance des systèmes et réseaux',
      badges: ['Linux', 'Apache', 'Docker'],
      projetsAssocies: ['Jeux Olympiques'],
    },
    {
      title: 'Gérer des données',
      icon: <FaProjectDiagram className="w-8 h-8 mb-4" />,
      description: 'Conception et administration de bases de données',
      badges: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle', 'SQL Server'],
      projetsAssocies: ['DailyBank', 'Emcaffe', 'Jeux Olympiques'],
    },
    {
      title: 'Conduire un projet',
      icon: <FaUsers className="w-8 h-8 mb-4" />,
      description: "Management d'équipe et gestion de projet agile",
      badges: ['Gantt', 'GitHub', 'GitLab'],
      projetsAssocies: ['Portfolio', 'Jeux Olympiques'],
    },
    {
      title: 'Travailler dans une équipe informatique',
      icon: <FaShieldAlt className="w-8 h-8 mb-4" />,
      description: 'Collaboration, communication et veille technologique',
      badges: ['Scrum', 'Agile'],
      projetsAssocies: ['DailyBank', 'Emcaffe'],
    },
  ]

  const technologies = {
    languages: [
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
      {
        name: 'JavaScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      },
    ],
    frontend: [
      { name: 'Vue JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
      { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    ],
    backend: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
    ],
    tools: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'VSCode', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    ],
  }

  const parcours = [
    {
      period: '2024-2025',
      title: 'Alternant Développeur Vue JS',
      location: 'CNRS',
      type: 'professional',
      description: "Développement d'applications en Vue JS",
    },
    {
      period: '2022-2025',
      title: 'BUT Informatique',
      location: 'IUT de Blagnac',
      type: 'education',
      description: 'Formation en développement informatique, en alternance',
    },
    {
      period: '1945-1948',
      title: 'BAC STI2D',
      location: 'Lycée Stéphane-Hessel',
      type: 'education',
      description: "Sciences et Technologies de l'Industrie et du Développement Durable",
    },
  ]

  const projects = [
    {
      title: 'DailyBank',
      image: '/portfolio-rouquieyann/projects/dailybank.png',
      description:
        'Application de gestion bancaire développée en Java avec JavaFX. Permet la gestion des comptes, des clients et des opérations bancaires.',
      technologies: ['Java', 'SQL', 'Git'],
      year: '2023',
      competencesAssociees: [
        "Réaliser un développement d'application",
        'Optimiser des applications',
        'Gérer des données',
        'Travailler dans une équipe informatique',
      ],
    },
    {
      title: 'Emcaffe',
      image: '/portfolio-rouquieyann/projects/emcaffe.png',
      description: 'Marketplace de vente de café en ligne développé avec React, Node.js et Supabase.',
      technologies: ['React', 'Node.js', 'Supabase', 'Git'],
      year: '2024',
      competencesAssociees: [
        "Réaliser un développement d'application",
        'Optimiser des applications',
        'Gérer des données',
      ],
    },
    {
      title: 'Portfolio',
      image: '/portfolio-rouquieyann/projects/portfolio.png',
      description: 'Portfolio personnel développé avec React et TailwindCSS, présentant mes projets et compétences.',
      technologies: ['React', 'TailwindCSS', 'Framer Motion'],
      year: '2024',
      competencesAssociees: ["Réaliser un développement d'application", 'Conduire un projet'],
    },
    {
      title: 'Jeux Olympiques',
      image: '/portfolio-rouquieyann/projects/jo.png',
      description:
        'Application de gestion des Jeux Olympiques permettant de gérer les athlètes, les disciplines et les pays.',
      technologies: ['PHP', 'Synfony', 'PHPMyAdmin', 'Bootstrap'],
      year: '2024',
      competencesAssociees: [
        'Administrer des systèmes informatiques',
        'Gérer des données',
        'Conduire un projet',
        'Travailler dans une équipe informatique',
      ],
    },
  ]

  // Ajout d'un lien vers le CV et GitHub
  const socialLinks = {
    github: 'https://github.com/YannRouquie',
    cv: '/cv.pdf',
    email: 'yann.rouquie@gmail.com',
    phone: '+33600000000',
  }

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index])
        setIndex(index + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [index, text])

  useEffect(() => {
    return scrollY.onChange(() => {
      if (scrollY?.current < scrollY?.prev) {
        setHidden(false)
      } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
        setHidden(true)
      }
    })
  }, [scrollY])

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    })
    // Reset success message after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false)
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      {/* Navbar */}
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: '-100%' },
        }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="fixed top-0 w-full z-50 bg-[#1A1A1A]/80 backdrop-blur-md border-b border-[#333333]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Name */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-600"
            >
              YR
            </motion.div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Accueil' },
                { id: 'technologies', label: 'Technologies' },
                { id: 'competences', label: 'Compétences' },
                { id: 'projets', label: 'Projets' },
                { id: 'parcours', label: 'Parcours' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-emerald-400 ${
                    activeSection === item.id ? 'text-emerald-400' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-gray-300 hover:text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center z-10 max-w-4xl px-4 flex flex-col md:flex-row items-center gap-8"
        >
          <div className="text-left">
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-green-500 to-teal-600">
              ROUQUIE YANN
            </h1>
            <h2 className="text-2xl text-gray-400 font-mono mb-6">{displayText}</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Passionné par le développement et les nouvelles technologies, je suis actuellement en formation BUT
              Informatique où je développe des solutions innovantes. Mon parcours militaire m'a permis d'acquérir une
              solide expérience en gestion d'équipe et en administration système.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href={`mailto:${socialLinks.email}`}
                className="px-4 py-2 bg-emerald-500/10 rounded-lg hover:bg-emerald-500/20 transition-colors flex items-center gap-2"
              >
                <FaEnvelope /> Email
              </a>
              <a
                href={`tel:${socialLinks.phone}`}
                className="px-4 py-2 bg-emerald-500/10 rounded-lg hover:bg-emerald-500/20 transition-colors flex items-center gap-2"
              >
                <FaFilePdf /> CV
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-[#222222] to-[#1A1A1A]" />
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-green-500 to-teal-600">
            Technologies
          </h2>

          {/* Technology cards with updated styling */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(technologies).map(([category, techs], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 rounded-xl bg-[#2A2A2A] backdrop-blur-sm border border-[#333333] hover:border-emerald-500/50 transition-colors"
              >
                <h3 className="text-xl font-bold mb-6 text-emerald-400">{category}</h3>
                <div className="grid grid-cols-4 gap-6">
                  {techs.map((tech, index) => (
                    <motion.div key={index} whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
                      <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
                      <span className="mt-2 text-sm text-gray-400">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section id="competences" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-[#222222] to-[#1A1A1A]" />
        <h2 className="text-4xl font-bold text-center mb-12 relative bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-500">
          Compétences
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {competences.map((competence, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-xl bg-[#2A2A2A] backdrop-blur-sm border border-[#333333] flex flex-col items-center text-center cursor-pointer h-auto hover:bg-[#333333] transition-colors"
            >
              <div className="flex items-center gap-4 mb-3 w-full">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }} className="text-emerald-400">
                  {competence.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white/90">{competence.title}</h3>
              </div>
              <p className="text-gray-400 mb-4 text-sm">{competence.description}</p>
              <div className="flex flex-wrap gap-2 justify-start w-full mb-4">
                {competence.badges.map((badge, badgeIndex) => (
                  <motion.span
                    key={badgeIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: badgeIndex * 0.1 }}
                    className="px-3 py-1 text-sm font-medium rounded-full bg-white/5 text-emerald-300 border border-emerald-500/20"
                  >
                    {badge}
                  </motion.span>
                ))}
              </div>
              {competence.projetsAssocies.length > 0 && (
                <div className="w-full">
                  <p className="text-sm text-gray-400 mb-2">Projets associés :</p>
                  <div className="flex flex-wrap gap-2">
                    {competence.projetsAssocies.map((projet, projetIndex) => (
                      <span
                        key={projetIndex}
                        className="px-3 py-1 text-sm font-medium rounded-full bg-green-500/10 text-green-300 border border-green-500/20"
                      >
                        {projet}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projets Section */}
      <section id="projets" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-[#222222] to-[#1A1A1A]" />
        <h2 className="text-4xl font-bold text-center mb-12 relative bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-500">
          Projets
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8 relative">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.01 }}
              className="relative group cursor-pointer bg-[#2A2A2A] backdrop-blur-sm border border-[#333333] rounded-xl overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image section */}
                <div className="md:w-1/3 relative" onClick={() => setSelectedProject(project)}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent md:bg-gradient-to-r" />
                </div>

                {/* Content section */}
                <div className="p-6 md:w-2/3 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      <span className="text-sm text-gray-400">{project.year}</span>
                    </div>

                    <p className="text-gray-300 mb-4">{project.description}</p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <p className="text-sm text-gray-400 mb-2">Technologies :</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-sm font-medium rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Compétences BUT */}
                    <div>
                      <p className="text-sm text-gray-400 mb-2">Compétences BUT :</p>
                      <div className="flex flex-wrap gap-2">
                        {project.competencesAssociees.map((comp, compIndex) => (
                          <span
                            key={compIndex}
                            className="px-3 py-1 text-sm font-medium rounded-full bg-green-500/10 text-green-300 border border-green-500/20"
                          >
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* View More Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="mt-4 px-4 py-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-2 self-end"
                  >
                    Voir plus
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#2A2A2A] rounded-2xl p-6 max-w-2xl w-full relative overflow-hidden"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />

              <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
              <p className="text-gray-300 mb-4">{selectedProject.description}</p>

              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-2">Technologies utilisées :</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-2">Compétences BUT associées :</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.competencesAssociees.map((comp, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-green-500/10 text-green-300 border border-green-500/20"
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Parcours Section */}
      <section id="parcours" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-[#222222] to-[#1A1A1A]" />
        <div className="max-w-4xl mx-auto relative">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-500">
            Parcours
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-emerald-500 via-green-500 to-teal-500" />

            {/* Timeline items */}
            {parcours.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center justify-between md:justify-normal gap-8 mb-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-6 rounded-xl bg-[#2A2A2A] backdrop-blur-sm border border-[#333333] hover:bg-[#333333] transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      {item.type === 'education' ? (
                        <FaGraduationCap className="text-emerald-400 text-xl" />
                      ) : (
                        <FaBuilding className="text-green-400 text-xl" />
                      )}
                      <span className="text-sm font-semibold text-emerald-400">{item.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white/90 mb-1">{item.title}</h3>
                    <p className="text-green-400 font-medium mb-2">{item.location}</p>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-[#1A1A1A]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire de contact amélioré */}
      <section id="contact" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-500">
            Me Contacter
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#2A2A2A] p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Informations de contact</h3>
              <div className="space-y-4">
                <p className="flex items-center gap-3">
                  <FaEnvelope className="text-emerald-400" />
                  {socialLinks.email}
                </p>
                <p className="flex items-center gap-3">
                  <FaPhone className="text-emerald-400" />
                  {socialLinks.phone}
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#2A2A2A] backdrop-blur-sm border border-white/10 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#2A2A2A] backdrop-blur-sm border border-white/10 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-[#2A2A2A] backdrop-blur-sm border border-white/10 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none text-white"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg font-bold hover:opacity-90 transition-opacity"
              >
                Envoyer
              </motion.button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
