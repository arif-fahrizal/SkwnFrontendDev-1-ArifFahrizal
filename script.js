$(document).ready(function () {
  let currentIndex = 0;
  const carouselContainer = $('.carousel-container');
  
  const dataFurniture = () => {
    $.get('https://66dc7a6747d749b72acbace6.mockapi.io/furniture', (data) => {

      // Tambahkan setiap item dari API ke dalam carousel
      data.forEach(post => {
        $('.carousel-container').append(
          `<figure class="product-card">
            <img src="${post.image}" alt="Product">
            <figcaption class="product-details">
              <span>$${post.harga}</span>
              <h1>${post.name}</h1>
            </figcaption>
          </figure>`
        )
      });

      // Setelah elemen ditambahkan, jalankan fungsi untuk mengaktifkan carousel
      activateCarousel(data.length);
    });
  };

  // Fungsi untuk mengaktifkan carousel
  function activateCarousel(totalItems) {
    const items = $('.product-card');

    // Fungsi untuk menampilkan item yang aktif
    function showItem(index) {
      items.removeClass('active'); // Hapus kelas 'active' dari semua item
      items.eq(index).addClass('active'); // Tambah kelas 'active' ke item yang difokuskan

      // Geser carousel agar item aktif berada di tengah
      const offset = window.screen.width <= 375 ? -index * 200 : -index * (300 + 36); // Lebar item (300px) + gap (36px)// Geser carousel
      // Cek apakah sudah mendekati 3 gambar terakhir
      currentIndex <= totalItems - 4
        ? carouselContainer.css('transform', `translateX(${offset + 20}px)`)
        : carouselContainer.css('transform', `translateX(${-((totalItems - 4) * (300 + 36))}px)`)
    }
    
    console.log(window.screen.width)
    // Tampilkan item pertama (index 0) saat pertama kali halaman dimuat
    showItem(currentIndex);

    function updateButtons() {
      if (currentIndex === 0) {
        $('.prev').prop('disabled', true); // Disable tombol Prev di awal
      } else {
        $('.prev').prop('disabled', false); // Aktifkan tombol Prev jika bukan di awal
      }
  
      if (currentIndex === totalItems - 1) {
        $('.next').prop('disabled', true); // Disable tombol Next di akhir
      } else {
        $('.next').prop('disabled', false); // Aktifkan tombol Next jika bukan di akhir
      }
    }
  
    // Event handler untuk tombol 'Next'
    $('.next').click(function () {
      if (currentIndex < totalItems - 1) { // Cek apakah masih ada item setelahnya
        currentIndex++; // Pergi ke item berikutnya
        showItem(currentIndex);
      }
    });
  
    // Event handler untuk tombol 'Prev'
    $('.prev').click(function () {
      if (currentIndex > 0) { // Cek apakah masih ada item sebelumnya
        currentIndex--; // Pergi ke item sebelumnya
        showItem(currentIndex);
      }
    });

  }

  // Panggil fungsi untuk mengambil data dari API dan mengaktifkan carousel
  dataFurniture();
});
