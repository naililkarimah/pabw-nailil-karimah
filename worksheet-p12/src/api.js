
const ALAMAT = 'https://jsonplaceholder.typicode.com/posts';

export async function ambilNotisia() {
  try {
    await new Promise(resolve => setTimeout(resolve, 3000));
    const respons = await fetch(ALAMAT);

    console.log('Status:', respons.status);
    console.log('OK:', respons.ok);

    if (!respons.ok) {
      throw new Error('status ' + respons.status);
    }

    const data = await respons.json();
    return data;

  } catch (galat) {
    console.error('Gagal memuat:', galat.message);
    throw galat;
  }
}
