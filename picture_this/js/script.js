document.addEventListener('DOMContentLoaded', function() {
  // Kolla om det är en touch-enhet
  if ('ontouchstart' in window) {
    
    // Skapa tooltip-element
    const tooltip = document.createElement('div');
    tooltip.className = 'mobile-tooltip';
    document.body.appendChild(tooltip);
    
    // Hitta alla bilder med title
    document.querySelectorAll('img[title]').forEach(img => {
      
      img.addEventListener('touchstart', function(e) {
        const title = this.getAttribute('title');
        const touch = e.touches[0]; // Hämta touch-positionen
        
        tooltip.textContent = title;
        tooltip.style.display = 'block';
        
        // Placera tooltipet där fingret är
        tooltip.style.left = touch.pageX + 'px';
        tooltip.style.top = (touch.pageY - 50) + 'px'; // 50px ovanför fingret
      });
      
      img.addEventListener('touchend', function() {
        setTimeout(() => {
          tooltip.style.display = 'none';
        }, 2500);
      });
    });
  }
});