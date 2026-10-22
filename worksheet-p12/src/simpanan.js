
const KUNCI = "pabw-p11";
const VERSI = 2;

export function simpan(state) {
  const isi = {
    versi: VERSI,
    kategoriAktif: state.kategoriAktif
  };

  localStorage.setItem(KUNCI, JSON.stringify(isi));
}

export function muat() {
  try {
    const teks = localStorage.getItem(KUNCI);

    if (teks === null) {
      return null;
    }

    const isi = JSON.parse(teks);

    if (isi === null || isi.versi !== VERSI) {
      localStorage.removeItem(KUNCI);
      return null;
    }

    return isi;
  } catch {
    localStorage.removeItem(KUNCI);
    return null;
  }
}

export function aturUlang() {
  localStorage.removeItem(KUNCI);
}
