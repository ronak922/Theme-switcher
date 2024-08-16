document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.querySelector('.theme-switch__checkbox');
    const body = document.body;

    // Load saved theme from localStorage
    const isDarkMode = localStorage.getItem('theme') === 'dark';
    checkbox.checked = isDarkMode;
    body.classList.toggle('dark-mode', isDarkMode);
});

document.querySelector('.theme-switch__checkbox').addEventListener('change', () => {
    const isChecked = document.querySelector('.theme-switch__checkbox').checked;
    document.body.classList.toggle('dark-mode', isChecked);
    localStorage.setItem('theme', isChecked ? 'dark' : 'light');
});
