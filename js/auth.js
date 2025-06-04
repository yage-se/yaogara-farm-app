function login() {
  const role = document.getElementById("role").value;
  const pin = document.getElementById("pin").value;

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