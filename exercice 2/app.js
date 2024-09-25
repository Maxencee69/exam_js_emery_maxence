class ThemeSwitcher {
    constructor() {
        this.body = document.body;
        this.lightThemeBtn = document.getElementById("lightThemeBtn");
        this.darkThemeBtn = document.getElementById("darkThemeBtn");
        this.addEventListeners();
    }
    addEventListeners() {
        this.lightThemeBtn.addEventListener('click', () => this.light());
        this.darkThemeBtn.addEventListener('click', () => this.dark());
    }
    light() {
        this.body.classList.remove('dark');
    }
    dark() {
        this.body.classList.add('dark');
        localStorage.setItem("dark", darkMode);
    //j'arrive pas à conserver le mode 
    }

    
}

const themeSwitcher = new ThemeSwitcher();


