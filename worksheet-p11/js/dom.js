const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");

export function buatKartu(proyek) {
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

export function saring(state) {
  return state.daftarProyek.filter(
    (proyek) =>
      state.kategoriAktif === "semua" ||
      proyek.kategori === state.kategoriAktif
  );
}

export function render(state) {
  wadah.textContent = "";

  const tampil = saring(state);

  if (tampil.length === 0) {
    kosong.hidden = false;
    return;
  }

  kosong.hidden = true;

  tampil.forEach((item) => {
    wadah.append(buatKartu(item));
  });
}

export function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}
