document.getElementById('toggleTheme').addEventListener('click', function () {
    var professionalSection = document.getElementById('professionalPortfolio');
    var showcaseSection = document.getElementById('startupShowcase');
    var body = document.body;

    // Toggle visibility of sections
    if (professionalSection.style.display === 'none') {
        professionalSection.style.display = 'block';
        showcaseSection.style.display = 'none';
        this.textContent = 'Switch to Startup Showcase';
        body.classList.remove('dark-theme'); // Use light theme for academic
    } else {
        professionalSection.style.display = 'none';
        showcaseSection.style.display = 'block';
        this.textContent = 'Switch to Academic/Professional';
        body.classList.add('dark-theme'); // Use dark theme for startup showcase
    }
});
