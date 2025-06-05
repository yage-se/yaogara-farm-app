// Yaogara Farm App - Shared Form Handler

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyniucm_2kcLT3Tfhw2vw7jTySP-b9iwHGhBDuYuh-IfwyPk1dMLMktTzggjkI0VOl0HQ/exec";

document.addEventListener("DOMContentLoaded", () => {
  // ✅ Automatically set today's date & restrict future selection
  const today = new Date().toISOString().split("T")[0];
  document.querySelectorAll('input[type="date"]').forEach(input => {
    input.value = today;
    input.max = today;
  });

  // ✅ Handle form submission
  const form = document.querySelector("form");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formData
      });

      const result = await response.json();
      if (result.status === "success") {
        alert("Datos guardados correctamente!");
        form.reset();

        // Re-set today's date after reset
        document.querySelectorAll('input[type="date"]').forEach(input => {
          input.value = today;
          input.max = today;
        });

      } else {
        alert("Ocurrió un error al guardar.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("Error al guardar los datos.");
    }
  });
});