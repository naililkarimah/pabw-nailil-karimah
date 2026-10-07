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

const daftarTempat = [
  {
    nama: "Coffe Saray",
    lokasi: "Yogyakarta",
    suasana: "Hangat dan santai",
    rating: 4.5
  },
  {
    nama: "Copenhagen",
    lokasi: "Yogyakarta",
    suasana: "Modern dan artsy",
    rating: 4.5
  },
  {
    nama: "28 Coffee",
    lokasi: "Taman Siswa",
    suasana: "Cozy dan sederhana",
    rating: 4.5
  },
  {
    nama: "Arah Coffee",
    lokasi: "Yogyakarta",
    suasana: "Minimalis dan homey",
    rating: 4.4
  },
  {
    nama: "Seven Corner",
    lokasi: "Yogyakarta",
    suasana: "Santai dan casual",
    rating: 4.3
  }
];

console.table(daftarTempat);

const namaTempat = daftarTempat.map(
  (tempat) => tempat.nama
);

console.log(namaTempat);

const tempatRatingTinggi = daftarTempat.filter(
  (tempat) => tempat.rating >= 4.5
);

console.table(tempatRatingTinggi);

const tempatDicari = daftarTempat.find(
  (tempat) => tempat.nama === "Arah Coffee"
);

console.log(tempatDicari);

const totalRating = daftarTempat.reduce(
  (total, tempat) => total + tempat.rating,
  0
);

console.log(totalRating);

console.log("Debugging dimulai");

console.table(daftarTempat);