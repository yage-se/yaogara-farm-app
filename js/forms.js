document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#huevos-form");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("module", "huevos");

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyniucm_2kcLT3Tfhw2vw7jTySP-b9iwHGhBDuYuh-IfwyPk1dMLMktTzggjkI0VOl0HQ/exec", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      alert("Datos guardados correctamente!");
      form.reset();
    } catch (err) {
      console.error(err);
      alert("Error al guardar los datos.");
    }
  });
});