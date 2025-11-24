import { loadContent } from './content.js';

export function setupTabs() {
  const buttons = document.querySelectorAll('.tab-nav button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const tab = button.getAttribute('data-tab');
      document.querySelector('.landing').style.display = 'none';
      loadContent(tab);
    });
  });
}
