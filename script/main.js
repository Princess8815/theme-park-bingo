const templateSelect = document.getElementById('template');
const continueButton = document.querySelector('.select-button');

templateSelect.addEventListener('change', function() {
  const selectedTemplate = this.value;
  localStorage.setItem('selectedTemplate', selectedTemplate);
  console.log(`Template ${selectedTemplate} saved to localStorage`);
});

// Ensure template is saved even if user doesn't change selection
continueButton.addEventListener('click', function() {
  const selectedTemplate = templateSelect.value;
  localStorage.setItem('selectedTemplate', selectedTemplate);
  console.log(`Template ${selectedTemplate} saved to localStorage on continue`);
});



  