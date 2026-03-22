window.addEventListener("load", () => {

  function loadComponent(id, path) {
    fetch(path)
      .then(res => {
        if (!res.ok) throw new Error(`Failed to load ${path}`);
        return res.text();
      })
      .then(data => {
        const el = document.getElementById(id);
        if (el) {
          el.innerHTML = data;
          // Fix nav links for GitHub Pages
          if (id === "navbar" && window.location.hostname.includes("github.io")) {
            el.querySelectorAll("a[href]").forEach(a => {
              const href = a.getAttribute("href");
              if (href.startsWith("/") && !href.startsWith("/FUTURE_FS_01")) {
                a.setAttribute("href", "/FUTURE_FS_01" + href);
              }
            });
          }
        }
      })
      .catch(err => console.error("Component error:", err));
  }

  const isSubfolder = window.location.pathname.includes('/sections/');
  const prefix = isSubfolder ? '../' : '';

  loadComponent("navbar", `${prefix}components/navbar.html`);
  loadComponent("footer", `${prefix}components/footer.html`);

});