document.querySelectorAll('.faq-container').forEach(container => {
  container.addEventListener('click', () => {
      const content = container.nextElementSibling;
      content.classList.toggle('open');
      container.classList.toggle('open');
  });
});