// Click to copy phone functionality
const copyPhoneBtn = document.getElementById('copyPhoneBtn');
if (copyPhoneBtn) {
  copyPhoneBtn.addEventListener('click', function () {
    const phone = '+91 8840463324';
    navigator.clipboard.writeText(phone).then(function () {
      const icon = document.getElementById('copyPhoneIcon');
      if (icon) {
        icon.textContent = '✅';
        setTimeout(() => {
          icon.style.display = 'none';
        }, 1200);
      }
    });
  });
  // Make icon reappear on hover
  const contactInfo = copyPhoneBtn.closest('.contact-info');
  if (contactInfo) {
    contactInfo.addEventListener('mouseenter', function () {
      const icon = document.getElementById('copyPhoneIcon');
      if (icon) {
        icon.style.display = '';
        icon.textContent = '📋';
      }
    });
  }
}

// Click to copy email functionality
const copyEmailBtn = document.getElementById('copyEmailBtn');
if (copyEmailBtn) {
  copyEmailBtn.addEventListener('click', function () {
    const email = 'ayush.verma.careers@gmail.com';
    navigator.clipboard.writeText(email).then(function () {
      const icon = document.getElementById('copyEmailIcon');
      if (icon) {
        icon.textContent = '✅';
        setTimeout(() => {
          icon.style.display = 'none';
        }, 1200);
      }
    });
  });
  // Make icon reappear on hover
  const contactInfo = copyEmailBtn.closest('.contact-info');
  if (contactInfo) {
    contactInfo.addEventListener('mouseenter', function () {
      const icon = document.getElementById('copyEmailIcon');
      if (icon) {
        icon.style.display = '';
        icon.textContent = '📋';
      }
    });
  }
}
'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}