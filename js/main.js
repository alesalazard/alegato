import { renderLanding } from './landing.js';
import { setupTabs } from './tabs.js';
import { applyTheme } from './theme.js';
import { setupSocialLinks } from './social.js';

document.addEventListener('DOMContentLoaded', () => {
  renderLanding();
  setupTabs();
  applyTheme();
  setupSocialLinks();
});