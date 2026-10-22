
<script setup>
import { ref } from 'vue'

const namaTempat = ref('')
const lokasi = ref('')
const rating = ref('')

function kirimRekomendasi() {
  namaTempat.value = ''
  lokasi.value = ''
  rating.value = ''
}
</script>

<template>
  <section id="tambah-rekomendasi">
    <h2>Tambah Rekomendasi</h2>

    <p>
      Bagikan tempat ngopi favorit kamu dengan mengisi
      form rekomendasi.
    </p>

    <form @submit.prevent="kirimRekomendasi">
      <div class="form-kolom">
        <label for="nama-tempat">Nama Tempat:</label>
        <input
          id="nama-tempat"
          v-model="namaTempat"
          name="nama-tempat"
          type="text"
          placeholder="Contoh: 28 Coffee"
          required
        />
      </div>

      <div class="form-kolom">
        <label for="lokasi">Lokasi:</label>
        <input
          id="lokasi"
          v-model="lokasi"
          name="lokasi"
          type="text"
          placeholder="Contoh: Taman Siswa"
          required
        />
      </div>

      <div class="form-kolom">
        <label for="rating">Rating:</label>
        <input
          id="rating"
          v-model="rating"
          name="rating"
          type="number"
          min="1"
          max="5"
          step="0.1"
          placeholder="Contoh: 4.5"
          required
        />
      </div>

      <button type="submit">Simpan Rekomendasi</button>
    </form>
  </section>
</template>
