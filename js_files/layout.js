async function loadComponent(id, file) {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

window.addEventListener("DOMContentLoaded", () => {
  loadComponent("navbar", "navbar.html");
  loadComponent("footer", "footer.html");
});