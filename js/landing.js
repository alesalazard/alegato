export function renderLanding() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <section class="landing">
      <div class="overlay">
        <div class="title">
          <img src="img/logo5.png" alt="Logo de Alegato" class="logo"/>
          <h1 class="title1">ALEGATO</h1> 
          <p class="title2">Desarrollo de software, terapia Ocupacional, y cyber-historias</p>
        </div>
        
        <nav class="tab-nav">
          <button data-tab="ocupacionale">Ocupacionale</button>
          <button data-tab="hobbies">Hobbies</button>
          <button data-tab="alecode">Alecode</button>
          <button data-tab="productos">Productos</button>
        </nav>
        <div class="social-links">
          <a href="https://botandocorriente.blogspot.com/" target="_blank" >Blogger</a>
          <a href="https://github.com/alesalazard" target="_blank">GitHub</a>
          <a href="https://www.instagram.com/ocupacionale/">Instagram</a>
        </div>
      </div>
    </section>
    <footer>
      <p>© 2025 Alecode - Terapeuta ocupacional & desarrolladora web</p>
    </footer>
  `;
}
