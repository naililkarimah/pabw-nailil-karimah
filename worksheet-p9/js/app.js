const profil = {
  nama: "Nailil Karimah",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"]
};

const jumlahProyek = 5;

let pilihanAktif = "semua";

console.log(`Halo, saya ${profil.nama}`);
console.log(`Saya adalah ${profil.peran}`);
console.log(`Keahlian saya: ${profil.keahlian.join(", ")}`);

function buatPerkenalan({ nama, peran }) {
  return `Halo, saya ${nama} — ${peran}.`;
}

const formatKeahlian = (daftar) => {
  return daftar.join(" · ");
};

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

export const daftarProyek = [
  {
    judul: "Coffe Saray",
    lokasi: "Yogyakarta",
    suasana: "Hangat dan santai",
    rating: 4.5,
    kategori: "cafe"
  },

  {
    judul: "Copenhagen",
    lokasi: "Yogyakarta",
    suasana: "Modern dan artsy",
    rating: 4.5,
    kategori: "cafe"
  },

  {
    judul: "28 Coffee",
    lokasi: "Taman Siswa",
    suasana: "Cozy dan sederhana",
    rating: 4.5,
    kategori: "santai"
  },

  {
    judul: "Arah Coffee",
    lokasi: "Yogyakarta",
    suasana: "Minimalis dan homey",
    rating: 4.4,
    kategori: "cafe"
  },

  {
    judul: "Seven Corner",
    lokasi: "Yogyakarta",
    suasana: "Santai dan casual",
    rating: 4.3,
    kategori: "santai"
  }
];