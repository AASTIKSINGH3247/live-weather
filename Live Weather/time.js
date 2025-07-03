function updateTime() {
  const now = new Date();

  const timeString = now.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const dateString = now.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
  const dayString = now.toLocaleDateString(undefined, { weekday: 'long' });

  timeEl.textContent = timeString;
  dateEl.textContent = dateString;

  // Update day element
  const dayEl = document.getElementById('day');
  if (dayEl) {
    dayEl.textContent = dayString;
  }
}
