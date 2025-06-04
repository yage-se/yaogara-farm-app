const userRole = localStorage.getItem("userRole");

if (userRole === "admin") {
  document.getElementById("dashboard-link").classList.remove("hidden");
}