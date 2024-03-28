function toggleMenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
function openCvModal() {
    // Show the Bootstrap modal
    const cvModal = new bootstrap.Modal(document.getElementById('cvModal'));
    cvModal.show();
}

// Select the Download CV button
const downloadCvBtn = document.getElementById('downloadCvBtn');

// Add click event listener to the button and call the function
downloadCvBtn.addEventListener('click', openCvModal);