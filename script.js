document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons safely
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  } else {
    console.warn('Lucide icons failed to load.');
  }

  // Dynamic year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Header scroll effect
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('bg-slate-950/95', 'backdrop-blur-md', 'border-slate-800', 'shadow-lg');
        header.classList.remove('border-transparent');
      } else {
        header.classList.remove('bg-slate-950/95', 'backdrop-blur-md', 'border-slate-800', 'shadow-lg');
        header.classList.add('border-transparent');
      }
    });
  }

  // Mobile menu toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('flex');
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
      });
    });
  }

  // Scroll reveal animation
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach(el => revealObserver.observe(el));
  }

  // Counter animation
  const counters = document.querySelectorAll('.counter');
  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.dataset.target);
          const suffix = entry.target.dataset.suffix || '';
          const duration = 2000;
          const start = performance.now();
          
          const update = (time) => {
            const elapsed = time - start;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(ease * target);
            entry.target.innerText = current + suffix;
            
            if (progress < 1) {
              requestAnimationFrame(update);
            } else {
              entry.target.innerText = target + suffix;
            }
          };
          
          requestAnimationFrame(update);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => counterObserver.observe(c));
  }

  // Form Submission via FormSubmit AJAX
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = e.target.querySelector('button');
      if (btn) {
        const originalText = btn.innerText;
        btn.innerText = 'Enviando...';
        btn.disabled = true;
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        data._captcha = "false";
        data._subject = "Novo Contato - RTT Site";

        try {
          const response = await fetch('https://formsubmit.co/ajax/projetos@rtt4x4.com.br', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(data)
          });

          if (response.ok) {
            btn.innerText = 'Recebido!';
            btn.classList.add('bg-green-600');
            btn.classList.remove('bg-rtt-orange-500');
            form.reset();
          } else {
            throw new Error('FormSubmit error');
          }
        } catch (error) {
          console.error(error);
          btn.innerText = 'Erro ao enviar';
          btn.classList.add('bg-red-600');
          btn.classList.remove('bg-rtt-orange-500');
        } finally {
          setTimeout(() => {
            btn.innerText = originalText;
            btn.disabled = false;
            btn.classList.remove('bg-green-600', 'bg-red-600');
            btn.classList.add('bg-rtt-orange-500');
          }, 3000);
        }
      }
    });
  }

  // Wiper Carousel Logic
  const carousels = document.querySelectorAll('.carousel-wrapper');
  
  carousels.forEach(wrapper => {
    const images = wrapper.querySelectorAll('.carousel-img');
    const prevBtn = wrapper.querySelector('.carousel-prev');
    const nextBtn = wrapper.querySelector('.carousel-next');
    let currentIndex = 0;
    let autoPlayInterval;
    const intervalTime = 4000;
    
    if (images.length === 0) return;

    function goToSlide(index, direction = 'next') {
      const currentImg = images[currentIndex];
      
      // Update index
      currentIndex = index;
      if (currentIndex < 0) currentIndex = images.length - 1;
      if (currentIndex >= images.length) currentIndex = 0;
      
      const nextImg = images[currentIndex];
      
      // Remove old animations
      images.forEach(img => {
        img.classList.remove('wiper-next', 'wiper-prev', 'active');
      });
      wrapper.classList.remove('wiping-next', 'wiping-prev');
      
      // Force reflow
      void wrapper.offsetWidth;
      
      // Apply new animations
      currentImg.classList.add('active'); // Keep current visible under the wipe
      nextImg.classList.add(direction === 'next' ? 'wiper-next' : 'wiper-prev');
      wrapper.classList.add(direction === 'next' ? 'wiping-next' : 'wiping-prev');
      
      // After animation completes, set new active
      setTimeout(() => {
        images.forEach(img => img.classList.remove('active'));
        nextImg.classList.add('active');
        nextImg.classList.remove('wiper-next', 'wiper-prev');
        wrapper.classList.remove('wiping-next', 'wiping-prev');
      }, 1000); // match CSS animation duration
    }

    function nextSlide() {
      goToSlide(currentIndex + 1, 'next');
    }

    function prevSlide() {
      goToSlide(currentIndex - 1, 'prev');
    }

    // Auto-play
    function startAutoPlay() {
      autoPlayInterval = setInterval(nextSlide, intervalTime);
    }
    
    function stopAutoPlay() {
      clearInterval(autoPlayInterval);
    }

    // Event Listeners
    if(prevBtn) prevBtn.addEventListener('click', () => { stopAutoPlay(); prevSlide(); startAutoPlay(); });
    if(nextBtn) nextBtn.addEventListener('click', () => { stopAutoPlay(); nextSlide(); startAutoPlay(); });
    
    wrapper.addEventListener('mouseenter', stopAutoPlay);
    wrapper.addEventListener('mouseleave', startAutoPlay);

    // Initialize
    startAutoPlay();
  });
});
