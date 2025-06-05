function login() {
  const selected = document.querySelector('input[name="role"]:checked');
  const pin = document.getElementById("pin").value;

  if (!selected) {
    alert("Por favor selecciona un rol.");
    return;
  }

  const role = selected.value;

  const validPins = {
    campo: "1111",
    admin: "4321"
  };

  if (pin === validPins[role]) {
    localStorage.setItem("userRole", role);
    window.location.href = "dashboard.html";
  } else {
    alert("PIN incorrecto");
  }
}