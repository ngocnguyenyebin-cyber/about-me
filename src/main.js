import './style.css'

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(({ isIntersecting, target }) => {
    if (isIntersecting) {
      target.classList.add('is-visible')
      observer.unobserve(target)
    }
  })
}, { threshold: 0.12 })

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element))
