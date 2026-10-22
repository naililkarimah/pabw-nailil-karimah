<script setup>
import { onMounted, watch, computed } from 'vue'

import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

import { profil } from './data.js'
import { state, pilihKategori } from './state.js'
import { simpan, muat, aturUlang } from './simpanan.js'

const daftarProyek = computed(() => state.daftarProyek)
const kategoriAktif = computed(() => state.kategoriAktif)

onMounted(() => {
  const dataTersimpan = muat()
  if (dataTersimpan) {
    state.kategoriAktif = dataTersimpan.kategoriAktif
  }
})

watch(
  () => state.kategoriAktif,
  () => simpan(state)
)

function ubahKategori(kategori) {
  pilihKategori(kategori)
}

function pilihTempat(tempat) {
  console.log('Tempat dipilih:', tempat.judul)
}

const tempatDipilih = null

function resetState() {
  aturUlang()
  state.kategoriAktif = 'semua'
}
</script>

<template>
  <div class="halaman">
    <!-- Komponen identitas dengan props profil -->
    <KepalaProfil :profil="profil" />

    <main class="isi">
      <!-- Daftar tempat ngopi -->
      <section id="daftar-tempat">
        <h2>Daftar Tempat Ngopi</h2>

        <p>
          Berikut beberapa rekomendasi tempat ngopi yang nyaman
          untuk belajar, santai, dan bermain dengan teman.
        </p>

        <!-- Komponen tombol filter -->
        <TombolFilter
          :kategori-aktif="kategoriAktif"
          @ubah-kategori="ubahKategori"
        />

        <button
        id="tombol-atur-ulang"
        type="button"
        @click="resetState"
        >
        Atur Ulang
      </button>

        <!-- Komponen daftar kartu -->
        <DaftarProyek
          :tempat="daftarProyek"
          :kategori-aktif="kategoriAktif"
        />
      </section>

      <figure>
  <img
    src="/tempat-ngopi.jpg"
    alt="Suasana tempat ngopi"
    loading="lazy"
  />
  <figcaption>suasana tempat ngopi.</figcaption>
  </figure>

      <!-- Tips memilih tempat -->
      <section id="tips-memilih">
        <h2>Tips Memilih Tempat Ngopi</h2>

        <ul>
          <li>Pilih tempat sesuai kebutuhan dan aktivitasmu.</li>
          <li>Perhatikan suasana dan kenyamanan tempat.</li>
          <li>Periksa lokasi serta rating sebelum berkunjung.</li>
        </ul>
      </section>

      <!-- Komponen formulir kontak -->
      <FormKontak />
    </main>

    <footer class="footer">
      <p>
        &copy; 2026 Rekomendasi Tempat Ngopi di Yogyakarta
      </p>
    </footer>
  </div>
</template>
