document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('download-btn');
    const lockerModal = document.getElementById('locker-modal');
    const modalContent = document.getElementById('modal-content');
    const closeModal = document.getElementById('close-modal');

    // Fungsi untuk membuka Modal (Simulasi memicu Content Locker)
    downloadBtn.addEventListener('click', () => {
        // Tampilkan background modal
        lockerModal.classList.remove('hidden');
        lockerModal.classList.add('flex');
        
        // Animasi fade in ringan
        setTimeout(() => {
            lockerModal.classList.remove('opacity-0');
            modalContent.classList.remove('scale-95');
            modalContent.classList.add('scale-100');
        }, 10);
    });

    // Fungsi untuk menutup Modal
    closeModal.addEventListener('click', () => {
        lockerModal.classList.add('opacity-0');
        modalContent.classList.remove('scale-100');
        modalContent.classList.add('scale-95');
        
        setTimeout(() => {
            lockerModal.classList.add('hidden');
            lockerModal.classList.remove('flex');
        }, 300); // Sesuaikan dengan durasi transisi di CSS Tailwind
    });

    // Tutup modal jika user mengklik area luar kotak modal
    lockerModal.addEventListener('click', (e) => {
        if (e.target === lockerModal) {
            closeModal.click();
        }
    });
});