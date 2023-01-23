document.getElementById("menu-btn").addEventListener("click", () => {
  let sidebar = document.querySelector(".sidebar");
  document.querySelector("#cross").style.display = "block";
  sidebar.style.left = 0;
});
document.querySelector("#cross").addEventListener("click", () => {
  let sidebar = document.querySelector(".sidebar");
  sidebar.style.left = "-100%";
  document.querySelector("#cross").style.display = "none";
});
document.querySelector(".menu>a").addEventListener("click", () => {
  let sidebar = document.querySelector(".sidebar");
  sidebar.style.left = "-100%";
});
