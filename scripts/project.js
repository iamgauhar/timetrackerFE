document.querySelector(".new-client-btn").addEventListener("click", () => {
  document.querySelector(".data").style.display = "none";
  document.querySelector(".new-project").style.display = "block";
});
document.querySelector("#cancel").addEventListener("click", (e) => {
  e.preventDefault();
  //   document.querySelector(".new-project>form").reset();
  document.querySelector(".data").style.display = "block";
  document.querySelector(".new-project").style.display = "none";
});
document.querySelector("#cancel-edit").addEventListener("click", (e) => {
  e.preventDefault();
  //   document.querySelector(".new-project>form").reset();
  document.querySelector(".data").style.display = "block";
  document.querySelector(".edit-project").style.display = "none";
});

document.querySelector(".bxs-edit").addEventListener("click", () => {
  document.querySelector(".data").style.display = "none";
  document.querySelector(".edit-project").style.display = "block";
});
