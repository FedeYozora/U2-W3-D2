document.getElementById("saveButton").addEventListener("click", function () {
  let name = document.getElementById("nameInput").value;
  localStorage.setItem("name", name);
  if (name) {
    document.getElementById("previousValue").textContent =
      "Valore precedentemente salvato: " + name;
  }
});

document.getElementById("deleteButton").addEventListener("click", function () {
  localStorage.removeItem("name");
  document.getElementById("previousValue").textContent =
    "Nessun valore precedentemente salvato";
});

// Controlla eventuali nomi predentemente salvati e
// nel caso ci sono li mostra

let savedName = localStorage.getItem("name");
if (savedName) {
  document.getElementById("previousValue").textContent =
    "Valore precedentemente salvato: " + savedName;
}
