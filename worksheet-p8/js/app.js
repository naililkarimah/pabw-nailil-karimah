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