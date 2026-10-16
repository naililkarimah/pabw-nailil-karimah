import { ubahKategori, tambahProyek } from "./state.js";
import { tandaiTombolAktif } from "./dom.js";
import { aturUlang } from "./storage.js";

export function pasangEventFilter() {
  const barisFilter = document.querySelector("#filter");

  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;

    ubahKategori(tombol.dataset.kategori);
    tandaiTombolAktif(tombol);
  });
}

export function pasangEventForm() {
  const form = document.querySelector("#form-rekomendasi");
  const namaInput = document.querySelector("#nama-tempat");
  const lokasiInput = document.querySelector("#lokasi");
  const suasanaInput = document.querySelector("#suasana");
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

    tombolKirim.disabled = !(
      namaValid && lokasiValid && ratingValid
    );
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
      return;
    }

    if (!lokasiValid) {
      lokasiInput.focus();
      return;
    }

    if (!ratingValid) {
      ratingInput.focus();
      return;
    }

    tambahProyek({
      judul: namaInput.value.trim(),
      lokasi: lokasiInput.value.trim(),
      suasana: suasanaInput.value.trim() || "Rekomendasi pengguna",
      rating: rating,
      kategori: "cafe"
    });

    form.reset();
    periksaForm();
  });
}

export function pasangEventAturUlang() {
  const tombol = document.querySelector("#tombol-atur-ulang");

  tombol.addEventListener("click", () => {
    aturUlang();
    window.location.reload();
  });
}