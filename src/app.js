// Interactive Application Logic
document.addEventListener('DOMContentLoaded', () => {
  // 1. Mouse Spotlight tracking
  document.querySelectorAll('.spotlight-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // 2. Simulated real-time metrics update
  const cpuEl = document.getElementById('metric-cpu');
  const reqEl = document.getElementById('metric-req');

  setInterval(() => {
    if (cpuEl && reqEl) {
      const cpu = (Math.random() * 8 + 18).toFixed(1);
      const req = Math.floor(Math.random() * 120 + 1380);
      cpuEl.textContent = `${cpu}%`;
      reqEl.textContent = `${req.toLocaleString()} req/s`;
    }
  }, 3000);
});

// Interactive Tab Switcher
window.switchTab = function(tabName) {
  const tabs = ['tab-dashboard', 'tab-nodes', 'tab-settings'];
  tabs.forEach(tab => {
    const el = document.getElementById(tab);
    if (!el) return;
    if (tab === 'tab-' + tabName) {
      el.className = "px-3.5 py-1.5 rounded-lg bg-zinc-800 text-white font-medium shadow-sm transition-all";
    } else {
      el.className = "px-3.5 py-1.5 rounded-lg text-zinc-400 hover:text-zinc-200 transition-all";
    }
  });

  const banner = document.getElementById('active-view-label');
  if (banner) {
    banner.textContent = tabName.charAt(0).toUpperCase() + tabName.slice(1);
  }
};
