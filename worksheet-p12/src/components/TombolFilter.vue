<script setup>
defineProps({
  kategoriAktif: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['ubah-kategori'])
</script>

<template>
  <div id="filter">
    <button
      type="button"
      data-kategori="semua"
      :class="{ aktif: kategoriAktif === 'semua' }"
      @click="emit('ubah-kategori', 'semua')"
    >
      Semua
    </button>

    <button
      type="button"
      data-kategori="cafe"
      :class="{ aktif: kategoriAktif === 'cafe' }"
      @click="emit('ubah-kategori', 'cafe')"
    >
      Cafe
    </button>

    <button
      type="button"
      data-kategori="santai"
      :class="{ aktif: kategoriAktif === 'santai' }"
      @click="emit('ubah-kategori', 'santai')"
    >
      Santai
    </button>
  </div>
</template>
