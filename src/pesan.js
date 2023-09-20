const form = document.forms["FujitimmeC-for"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const btnDAlert = document.querySelector(".my-alert");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Mengambil nilai dari environment variable API_URL
  const apiURL = process.env.API_URL;

  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");

  try {
    const response = await fetch(apiURL, {
      method: "POST",
      body: new FormData(form)
    });

    btnLoading.classList.toggle("d-none");
    btnKirim.classList.toggle("d-none");
    btnDAlert.classList.toggle("d-none");

    form.reset();
    console.log("Success!", response);
  } catch (error) {
    console.error("Error!", error.message);
  }
});