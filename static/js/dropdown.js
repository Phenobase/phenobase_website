// Dropdown menu functionality for mobile and accessibility
// Handles click-to-open for menu items with children

document.addEventListener('DOMContentLoaded', function () {
  // Select all menu items that have a dropdown
  var dropdownToggles = document.querySelectorAll('.menu-item-has-children > a');

  dropdownToggles.forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
      // Only activate on mobile or when explicitly clicked
      var parent = this.parentElement;
      var isOpen = parent.classList.contains('open');
      // Close all other open dropdowns
      document.querySelectorAll('.menu-item-has-children.open').forEach(function (item) {
        if (item !== parent) {
          item.classList.remove('open');
        }
      });
      // Toggle current dropdown
      parent.classList.toggle('open', !isOpen);
      // Prevent navigation if dropdown is being opened
      if (!isOpen) {
        e.preventDefault();
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', function (e) {
    var isMenuClick = e.target.closest('.menu-item-has-children');
    if (!isMenuClick) {
      document.querySelectorAll('.menu-item-has-children.open').forEach(function (item) {
        item.classList.remove('open');
      });
    }
  });

  // Optional: close dropdowns on ESC key for accessibility
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.menu-item-has-children.open').forEach(function (item) {
        item.classList.remove('open');
      });
    }
  });
});
