document.addEventListener("DOMContentLoaded", () => {

  function loadSection(id, path) {
    fetch(path)
      .then(response => {
        if (!response.ok) throw new Error(`Failed to load ${path}`);
        return response.text();
      })
      .then(data => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = data;
      })
      .catch(error => console.error("Section load error:", error));
  }

  loadSection("hero", "sections/hero.html");
  loadSection("about", "sections/about.html");
  loadSection("projects", "sections/projects.html");
  loadSection("contact", "sections/contact.html");

});