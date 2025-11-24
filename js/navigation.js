export function renderNavigation() {
  const nav = document.createElement('nav');
  nav.className = 'content-nav';
  nav.innerHTML = `
    <ul>
      <li><button data-tab="home">Inicio</button></li>
      <li><button data-tab="ocupacionale">Ocupacionale</button></li>
      <li><button data-tab="hobbies">Hobbies</button></li>
      <li><button data-tab="alecode">Alecode</button></li>
      <li><button data-tab="productos">Productos</button></li>
    </ul>
  `;
  return nav;
}