// Gestion de la navigation responsive
const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav-links')

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active')
  burger.classList.toggle('toggle')
})

// Animation au scroll
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section')

  const options = {
    threshold: 0.3,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-visible')
      }
    })
  }, options)

  sections.forEach((section) => {
    observer.observe(section)
  })
})

// Gestion du formulaire de contact
const contactForm = document.getElementById('contact-form')

contactForm.addEventListener('submit', (e) => {
  e.preventDefault()

  // Récupération des valeurs du formulaire
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const message = document.getElementById('message').value

  // Simulation d'envoi (à remplacer par votre logique d'envoi réelle)
  console.log('Formulaire soumis:', { name, email, message })

  // Création du message de confirmation
  const confirmationMessage = document.createElement('div')
  confirmationMessage.className = 'confirmation-message'
  confirmationMessage.textContent = 'Message envoyé avec succès!'
  document.body.appendChild(confirmationMessage)

  // Suppression du message après l'animation
  setTimeout(() => {
    confirmationMessage.remove()
  }, 3000)

  // Réinitialisation du formulaire
  contactForm.reset()
})

// Animation au scroll avec Intersection Observer
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px',
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate')
      if (entry.target.classList.contains('skill-item')) {
        const progressBar = entry.target.querySelector('.progress')
        progressBar.style.width = progressBar.getAttribute('data-progress')
      }
    }
  })
}, observerOptions)

document.querySelectorAll('section, .skill-item, .project-card').forEach((el) => {
  observer.observe(el)
})
