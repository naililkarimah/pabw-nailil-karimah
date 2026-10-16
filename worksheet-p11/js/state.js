import { daftarProyek } from "./data.js";
import { render } from "./dom.js";
import { simpan, muat } from "./storage.js";

const tersimpan = muat();

export const state = {
  daftarProyek: [...daftarProyek],
  kategoriAktif:
    tersimpan?.kategoriAktif ?? "semua"
};

export function ubahKategori(kategori) {
  state.kategoriAktif = kategori;
  simpan(state);
  render(state);
}

export function tambahProyek(proyek) {
  state.daftarProyek.push(proyek);
  simpan(state);
  render(state);
}

