document.querySelector(".new-client-btn").addEventListener("click", () => {
  document.querySelector(".data").style.display = "none";
  document.querySelector(".add-client").style.display = "block";
});
document.querySelector("#cancel-btn").addEventListener("click", (e) => {
  e.preventDefault();
  //   document.querySelector(".new-project>form").reset();
  document.querySelector(".data").style.display = "block";
  document.querySelector(".add-client").style.display = "none";
});

document.querySelector("#edit-cancel-btn").addEventListener("click", (e) => {
  e.preventDefault();
  //   document.querySelector(".new-project>form").reset();
  document.querySelector(".data").style.display = "block";
  document.querySelector(".edit-client").style.display = "none";
});

document.querySelector(".bxs-edit").addEventListener("click", () => {
  document.querySelector(".data").style.display = "none";
  document.querySelector(".edit-client").style.display = "block";
});
