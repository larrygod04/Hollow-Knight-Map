const regions = document.querySelectorAll('.region');
const locationName = document.getElementById('location-name');
const locationInfo = document.getElementById('location-info');
const tooltip = document.getElementById('tooltip');
const infoPanel = document.getElementById('info-panel');
const closeBtn = document.getElementById('close-panel');

// Show tooltip on hover
regions.forEach(region => {
  region.addEventListener('mousemove', e => {
    tooltip.style.display = "block";
    tooltip.textContent = region.dataset.name;
    tooltip.style.left = e.pageX + 15 + "px";
    tooltip.style.top = e.pageY + 15 + "px";
  });

  region.addEventListener('mouseleave', () => {
    tooltip.style.display = "none";
  });

  // Open panel with details when clicked
  region.addEventListener('click', () => {
    locationName.textContent = region.dataset.name;
    locationInfo.textContent = region.dataset.info;
    infoPanel.classList.add('active');
  });
});

// Close panel
closeBtn.addEventListener('click', () => {
  infoPanel.classList.remove('active');
});
