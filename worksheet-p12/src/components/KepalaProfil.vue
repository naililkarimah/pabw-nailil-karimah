
<script setup>
const props = defineProps({
  profil: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <header>
    <div class="header-baris">
      <h1>Rekomendasi Tempat Ngopi di Yogyakarta</h1>

      <nav class="navbar" aria-label="Navigasi utama">
        <ul>
          <li><a href="#daftar-tempat">Daftar Tempat</a></li>
          <li><a href="#tips-memilih">Tips Memilih</a></li>
          <li><a href="#tambah-rekomendasi">Tambah Rekomendasi</a></li>
        </ul>
      </nav>

      <input
        type="checkbox"
        id="tema"
        class="pengalih-tema"
      />
      <label for="tema" class="tombol-tema">Tema</label>
    </div>

    <p>{{ props.profil.nama }} — {{ props.profil.peran }}</p>
  </header>
</template>
