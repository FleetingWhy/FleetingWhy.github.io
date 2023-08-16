import { API_URL } from '../env.json';

const form = document.forms["FujitimmeC-for"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const btnDAlert = document.querySelector(".my-alert");

try {
  const response = await fetch(API_URL, {
    method: "POST",
    body: new FormData(form)
  });

  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  btnDAlert.classList.toggle("d-none");

  // Menampilkan pesan berhasil dikirim
  const successMsg = document.getElementById('success-msg');
  successMsg.classList.remove('hidden');

  form.reset();
  console.log("Success!", response);
} catch (error) {
  console.error("Error!", error.message);
}


form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Mengambil nilai dari environment variable API_URL
  const apiURL = API_URL;

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
