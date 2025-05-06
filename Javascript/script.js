// Smooth scrolling for nav links
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      if (this.hash !== '') {
        e.preventDefault();
        const hash = this.hash;
  
        document.querySelector(hash).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Back to top button logic
  const backToTop = document.createElement('button');
  backToTop.innerText = '⬆️';
  backToTop.id = 'backToTopBtn';
  document.body.appendChild(backToTop);
  
  backToTop.style.position = 'fixed';
  backToTop.style.bottom = '20px';
  backToTop.style.right = '20px';
  backToTop.style.padding = '10px 15px';
  backToTop.style.fontSize = '18px';
  backToTop.style.display = 'none';
  backToTop.style.border = 'none';
  backToTop.style.borderRadius = '5px';
  backToTop.style.backgroundColor = '#0d6efd';
  backToTop.style.color = 'white';
  backToTop.style.cursor = 'pointer';
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });
  
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  