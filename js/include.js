window.addEventListener("load", () => {

  function loadComponent(id, path) {
    fetch(path)
      .then(res => {
        if (!res.ok) throw new Error(`Failed to load ${path}`);
        return res.text();
      })
      .then(data => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = data;
      })
      .catch(err => console.error("Component error:", err));
  }

  // Detect if we're inside a subfolder
  const isSubfolder = window.location.pathname.includes('/sections/');
  const prefix = isSubfolder ? '../' : '';

  loadComponent("navbar", `${prefix}components/navbar.html`);
  loadComponent("footer", `${prefix}components/footer.html`);

});