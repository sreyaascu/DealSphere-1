'use strict';

// 🚀 Existing Modal Variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// 🚀 Existing Modal Close Function
const modalCloseFunc = function () {
  if (modal) modal.classList.add('closed');
}

// 🚀 Existing Modal Event Listeners
if (modalCloseOverlay) modalCloseOverlay.addEventListener('click', modalCloseFunc);
if (modalCloseBtn) modalCloseBtn.addEventListener('click', modalCloseFunc);


// 🚀 NEW: Upload Modal Variables
const uploadModal = document.querySelector('[data-upload-modal]');
const uploadModalCloseBtn = document.querySelector('[data-upload-modal-close]');
const uploadModalOverlay = document.querySelector('[data-upload-modal-overlay]');
const uploadBtn = document.querySelector('[data-upload-btn]'); // Button that opens the modal
const uploadForm = document.querySelector("#uploadForm"); // Upload form
const submitBtn = document.querySelector("#submitBtn"); // Submit button

// 🚀 NEW: Open Upload Modal
const openUploadModal = function () {
  if (uploadModal) {
    uploadModal.classList.remove('closed');
    uploadModal.style.display = "flex"; // Ensure it's visible
    setTimeout(() => uploadModal.style.opacity = "1", 50); // Smooth fade-in
  }
};

// 🚀 NEW: Close Upload Modal
const closeUploadModal = function () {
  if (uploadModal) {
    uploadModal.style.opacity = "0"; // Smooth fade-out
    setTimeout(() => {
      uploadModal.classList.add('closed');
      uploadModal.style.display = "none";
    }, 300);
  }
};

// 🚀 NEW: Event Listeners for Upload Modal
if (uploadBtn) uploadBtn.addEventListener('click', openUploadModal);
if (uploadModalCloseBtn) uploadModalCloseBtn.addEventListener('click', closeUploadModal);
if (uploadModalOverlay) uploadModalOverlay.addEventListener('click', closeUploadModal);


// 🚀 NEW: Handle Form Submission
if (uploadForm) {
  uploadForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    // Get form values
    const productName = document.querySelector("#productName").value;
    const productPrice = document.querySelector("#productPrice").value;
    const productCategory = document.querySelector("#productCategory").value;

    // 🚀 Debugging: Log Values
    console.log("Product Name:", productName);
    console.log("Price:", productPrice);
    console.log("Category:", productCategory);

    // 🚀 Check if values are filled before submitting
    if (!productName || !productPrice || !productCategory) {
      alert("Please fill in all fields!");
      return;
    }

    // 🚀 Simulated Success Message (Replace with actual backend logic)
    alert("Product uploaded successfully!");

    // 🚀 Close Modal After Submission
    closeUploadModal();

    // 🚀 Reset the Form
    uploadForm.reset();
  });
}


// 🚀 Existing Notification Toast Variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// 🚀 Existing Notification Toast Event Listener
if (toastCloseBtn) {
  toastCloseBtn.addEventListener('click', function () {
    if (notificationToast) notificationToast.classList.add('closed');
  });
}


// 🚀 Existing Mobile Menu Variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // 🚀 Existing Mobile Menu Close Function
  const mobileMenuCloseFunc = function () {
    if (mobileMenu[i]) mobileMenu[i].classList.remove('active');
    if (overlay) overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    if (mobileMenu[i]) mobileMenu[i].classList.add('active');
    if (overlay) overlay.classList.add('active');
  });

  if (mobileMenuCloseBtn[i]) mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  if (overlay) overlay.addEventListener('click', mobileMenuCloseFunc);
}


// 🚀 Existing Accordion Variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {
        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');
      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });
}


// 🚀 Existing Fix for Unwanted Dimming Effect on Page Load
document.addEventListener("DOMContentLoaded", function () {
  if (overlay) {
    overlay.classList.remove('active');
    overlay.style.display = "none"; // Hide it properly
  }
  document.body.style.opacity = "1";
  document.body.style.filter = "none";

  console.log("🚀 JavaScript Loaded Successfully!"); // Debugging
});
