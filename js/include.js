window.addEventListener("load", () => {

  function loadComponent(id, path1, path2) {
    fetch(path1)
      .then(res => {
        if (!res.ok) return fetch(path2);
        return res;
      })
      .then(res => res.text())
      .then(data => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = data;
      })
      .catch(err => console.error("Component error:", err));
  }

  loadComponent("navbar", "components/navbar.html", "../components/navbar.html");
  loadComponent("footer", "components/footer.html", "../components/footer.html"); // ✅ Only here
  
});