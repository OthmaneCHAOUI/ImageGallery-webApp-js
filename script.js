const images = Array.from(document.querySelectorAll('.gallery img'));
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.nav.prev');
const nextBtn = document.querySelector('.nav.next');
let currentIndex = 0;

function openModal(index) {
    currentIndex = index;
    modalImg.src = images[currentIndex].src;
    modal.classList.add('open');
    modalImg.alt = images[currentIndex].alt;
}

function closeModal() {
    modal.classList.remove('open');
}

function showImage(index) {
    if (index < 0) index = images.length - 1;
    if (index >= images.length) index = 0;
    currentIndex = index;
    modalImg.src = images[currentIndex].src;
    modalImg.alt = images[currentIndex].alt;
}

images.forEach((img, idx) => {
    img.addEventListener('click', () => openModal(idx));
});

closeBtn.addEventListener('click', closeModal);

prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
nextBtn.addEventListener('click', () => showImage(currentIndex + 1));

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
    if (e.key === 'ArrowRight') showImage(currentIndex + 1);
    if (e.key === 'Escape') closeModal();
});

// Close modal when clicking outside image
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});