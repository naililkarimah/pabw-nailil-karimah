<script setup>
import { computed } from 'vue'

const props = defineProps({
  tempat: {
    type: Array,
    required: true
  },
  kategoriAktif: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['pilih-tempat'])

const tempatTersaring = computed(() => {
  if (props.kategoriAktif === 'semua') {
    return props.tempat
  }

  return props.tempat.filter(
    item => item.kategori === props.kategoriAktif
  )
})
</script>


<template>
  <ul id="daftar" class="katalog">
    <li
      v-for="item in tempatTersaring"
      :key="item.id"
      class="kartu"
    >
      <article>
        <h3>{{ item.judul }}</h3>
        <p><strong>Lokasi:</strong> {{ item.lokasi }}</p>
        <p><strong>Suasana:</strong> {{ item.suasana }}</p>
        <p><strong>Rating:</strong> {{ item.rating }}</p>

        <button type="button" @click="emit('pilih-tempat', item)">
          Pilih
        </button>
      </article>
    </li>
  </ul>

  <p v-if="tempatTersaring.length === 0" id="pesan-kosong">
    Tidak ada tempat ngopi pada kategori itu.
  </p>
</template>

