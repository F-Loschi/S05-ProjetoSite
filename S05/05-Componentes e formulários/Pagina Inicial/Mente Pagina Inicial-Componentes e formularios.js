function openMenu() {
    document.getElementById("menu_aba").style.width = "75%";
}

function closeMenu() {
    document.getElementById("menu_aba").style.width = "0";
}

function openProfile() {
    document.getElementById("profile_aba").style.width = "75%";
}

function closeProfile() {
    document.getElementById("profile_aba").style.width = "0";
}

function temaLim() {
    document.documentElement.style.setProperty('--cor-click', '#38184C');
    document.documentElement.style.setProperty('--cor-sombra', '#EFECED');
    document.documentElement.style.setProperty('--cor-text', 'black');
    document.documentElement.style.setProperty('--cor-back1', '#CEF09D');
    document.documentElement.style.setProperty('--cor-back2', 'green');
}

function temaDark() {
    document.documentElement.style.setProperty('--cor-click', '#939323');
    document.documentElement.style.setProperty('--cor-sombra', '#A7A7A7');
    document.documentElement.style.setProperty('--cor-text', 'black');
    document.documentElement.style.setProperty('--cor-back1', '#3A1C5D');
    document.documentElement.style.setProperty('--cor-back2', '#3A1C5D');
}

function temaInatel() {
    document.documentElement.style.setProperty('--cor-click', '#126ae2');
    document.documentElement.style.setProperty('--cor-sombra', '#EFECED');
    document.documentElement.style.setProperty('--cor-text', 'black');
    document.documentElement.style.setProperty('--cor-back1', '#edf2f4');
    document.documentElement.style.setProperty('--cor-back2', 'white');
}

// Funções para abrir e fechar pop-ups
function openNotificationPopup() {
    document.getElementById("notification-popup").style.display = "block";
}

function closeNotificationPopup() {
    document.getElementById("notification-popup").style.display = "none";
}

function openEmailPopup() {
    document.getElementById("email-popup").style.display = "block";
}

function closeEmailPopup() {
    document.getElementById("email-popup").style.display = "none";
}

function openAulasPopup() {
    document.getElementById("aulas-popup").style.display = "block";
}

function closeAulasPopup() {
    document.getElementById("aulas-popup").style.display = "none";
}
