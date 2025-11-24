import { renderOcupacionale } from '../sections/ocupacionale.js';
import { renderHobbies } from '../sections/hobbies.js';
import { renderAlecode } from '../sections/alecode.js';
import { renderNavigation } from './navigation.js';
import { renderProductos } from '../sections/productos.js';

export function loadContent(tab) {
  const app = document.getElementById('app');
  app.innerHTML = '';

  const nav = renderNavigation();
  app.appendChild(nav);

  const main = document.createElement('main');
  main.id = 'tab-content';

  switch (tab) {
    case 'ocupacionale':
      main.innerHTML = renderOcupacionale();
      break;
    case 'hobbies':
      main.innerHTML = renderHobbies();
      break;
    case 'alecode':
      main.innerHTML = renderAlecode();
      break;
    case 'productos':
      main.innerHTML = renderProductos();
      break;
    case 'home':
      location.reload(); // recarga para mostrar landing
      return;
    default:
      main.innerHTML = `<p>Contenido no disponible.</p>`;
  }

  app.appendChild(main);

  const footer = document.createElement('footer');
  footer.innerHTML = `<p>© 2025 Ale - Terapeuta ocupacional & desarrolladora web</p>`;
  app.appendChild(footer);

  // Activar navegación desde el menú
  nav.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');
      loadContent(target);
    });
  });
}