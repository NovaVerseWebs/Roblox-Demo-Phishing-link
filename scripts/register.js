document.addEventListener("DOMContentLoaded", () => {
  // === 1. Populate Day Dropdown ===
  const daySelect = document.querySelector('select[name="day"]');
  for (let i = 1; i <= 31; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    daySelect.appendChild(option);
  }

  // === 2. Populate Year Dropdown (2025 to 1900) ===
  const yearSelect = document.querySelector('select[name="year"]');
  for (let y = 2025; y >= 100; y--) {
    const option = document.createElement("option");
    option.value = y;
    option.textContent = y;
    yearSelect.appendChild(option);
  }

  // === 3. Gender Button Toggle Styling ===
  const genderInputs = document.querySelectorAll('input[name="gender"]');
  const genderLabels = document.querySelectorAll('.gender-btn');

  genderInputs.forEach((input) => {
    input.addEventListener("change", () => {
      genderLabels.forEach(label => label.classList.remove("active"));
      document.querySelector(`label[for="${input.id}"]`).classList.add("active");
    });
  });

  const form = document.querySelector('.register-form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent actual form submission

  const formData = new FormData(form);

  const username = formData.get('username');
  const email = formData.get('email');
  const password = formData.get('password');
  const gender = formData.get('gender');
  const month = formData.get('month');
  const day = formData.get('day');
  const year = formData.get('year');

  console.log("Form Data:");
  console.log("Username:", username);
  console.log("Email:", email);
  console.log("Password:", password);
  console.log("Birthday:", `${month}-${day}-${year}`);
  console.log("Gender:", gender);
});
});
