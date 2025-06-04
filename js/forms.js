document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#huevos-form");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbxAHiSDMFFOMBRfpVRYI5ruPKbqeJOq_EudZPv81N1JH7BTWyXsAbQ48XLgi0Au56J1jQ/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ module: "huevos", ...data }),
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