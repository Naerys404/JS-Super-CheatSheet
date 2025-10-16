  let navbar =`
    <nav class="navbar bg-base-100 shadow-md z-50">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl" href="/">JS CheatSheet</a>
  </div>
  <div class="flex-2">
    <ul class="menu menu-horizontal px-1">
      <li><a href="/">Accueil</a></li>
      <li>
        <details>
          <summary>Leçons</summary>
          <ul class="bg-base-100 rounded-t-none p-2">
            <li><a href="/src/pages/lessons/variables.html">Variables</a></li>
            <li><a href="/src/pages/lessons/numbers.html">Nombres et calculs</a></li>
            <li><a href="/src/pages/lessons/strings.html">Strings</a></li>
            <li><a href="/src/pages/lessons/arrays.html">Tableaux</a></li>
            <li><a href="/src/pages/lessons/objects.html">Objets</a></li>
            <li><a href="/src/pages/lessons/functions.html">Fonctions</a></li>
            <li><a href="/src/pages/lessons/loops.html">Boucles</a></li>
            <li><a href="/src/pages/lessons/dom-selectors.html">DOM : Sélecteurs</a></li>
            <li><a href="/src/pages/lessons/dom-attributes.html">DOM : Attributs </a></li>
            <li><a href="/src/pages/lessons/dom-events.html">DOM : Evenements </a></li>
            <li><a href="/src/pages/lessons/web-storage.html">Web Storage</a></li>
            <li><a href="/src/pages/lessons/api.html">API</a></li>
            <li><a href="/src/pages/lessons/classes.html">Classes</a></li>
            <li><a href="/src/pages/lessons/regexp.html">Regex</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Exercices</summary>
          <ul class="bg-base-100 rounded-t-none p-2">
            <li><a href="/src/pages/exercices/variables.html">Variables</a></li>
            <li><a href="/src/pages/exercices/strings.html">Strings</a></li>
            <li><a href="/src/pages/exercices/scope.html">Scope</a></li>
            <li><a href="/src/pages/exercices/regexp.html">Regex</a></li>
            <li><a href="/src/pages/exercices/imc.html">IMC</a></li>
            <li><a href="/src/pages/exercices/pme.html">PME</a></li>
          </ul>
        </details>
      </li>
      <li><a href="#">TP</a></li>
    </ul>
  </div>
</nav>
`;

const navContainer = document.querySelector('.navbar-container');
navContainer.innerHTML += navbar;
