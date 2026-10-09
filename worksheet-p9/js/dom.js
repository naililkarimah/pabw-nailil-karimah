import { daftarProyek } from "./app.js";

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";

  const judul = document.createElement("h3");
  judul.textContent = proyek.judul;

  const lokasi = document.createElement("p");
  lokasi.textContent = `Lokasi: ${proyek.lokasi}`;

  const suasana = document.createElement("p");
  suasana.textContent = `Suasana: ${proyek.suasana}`;

  const rating = document.createElement("p");
  rating.textContent = `Rating: ${proyek.rating}`;

  li.append(judul, lokasi, suasana, rating);

  return li;
}

function render(daftar) {
  wadah.textContent = "";

  if (daftar.length === 0) {
    kosong.hidden = false;
    return;
  }

  kosong.hidden = true;

  daftar.forEach((proyek) => {
    wadah.append(buatKartu(proyek));
  });
}

render(daftarProyek);

const barisFilter = document.querySelector("#filter");

function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

tandaiTombolAktif(
  document.querySelector('#filter button[data-kategori="semua"]')
);

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return;

  const kategori = tombol.dataset.kategori;
  tandaiTombolAktif(tombol);

  const terpilih = daftarProyek.filter(
    (proyek) =>
      kategori === "semua" || proyek.kategori === kategori
  );

  render(terpilih);
});

const form = document.querySelector("#form-rekomendasi");
const namaInput = document.querySelector("#nama-tempat");
const lokasiInput = document.querySelector("#lokasi");
const ratingInput = document.querySelector("#rating");
const tombolKirim = document.querySelector("#tombol-kirim");

const galatNama = document.querySelector("#galat-nama");
const galatLokasi = document.querySelector("#galat-lokasi");
const galatRating = document.querySelector("#galat-rating");

function periksaForm() {
  const namaValid = namaInput.value.trim() !== "";
  const lokasiValid = lokasiInput.value.trim() !== "";
  const rating = Number(ratingInput.value);

  const ratingValid =
    ratingInput.value.trim() !== "" &&
    Number.isFinite(rating) &&
    rating >= 1 &&
    rating <= 5;

  tombolKirim.disabled = !(namaValid && lokasiValid && ratingValid);
}

namaInput.addEventListener("input", periksaForm);
lokasiInput.addEventListener("input", periksaForm);
ratingInput.addEventListener("input", periksaForm);

periksaForm();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const namaValid = namaInput.value.trim() !== "";
  const lokasiValid = lokasiInput.value.trim() !== "";
  const rating = Number(ratingInput.value);

  const ratingValid =
    ratingInput.value.trim() !== "" &&
    Number.isFinite(rating) &&
    rating >= 1 &&
    rating <= 5;

  galatNama.hidden = namaValid;
  galatLokasi.hidden = lokasiValid;
  galatRating.hidden = ratingValid;

  if (!namaValid) {
    namaInput.focus();
  } else if (!lokasiValid) {
    lokasiInput.focus();
  } else if (!ratingValid) {
    ratingInput.focus();
  }
});
