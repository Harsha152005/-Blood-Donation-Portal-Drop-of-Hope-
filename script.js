// Optional: Add interactivity if needed
document.querySelectorAll('.step').forEach(step => {
  step.addEventListener('mouseenter', () => {
    step.style.transform = 'scale(1.05)';
    step.style.transition = '0.3s';
  });
  step.addEventListener('mouseleave', () => {
    step.style.transform = 'scale(1)';
  });
});
