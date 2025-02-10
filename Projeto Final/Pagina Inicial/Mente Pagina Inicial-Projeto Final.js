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
    document.documentElement.style.setProperty('--cor-click', 'purple');
    document.documentElement.style.setProperty('--cor-sombra', '#EFECED');
    document.documentElement.style.setProperty('--cor-text', 'purple');
    document.documentElement.style.setProperty('--cor-back1', '#CEF09D');
    document.documentElement.style.setProperty('--cor-back2', 'dark green');
}

function temaDark() {
    document.documentElement.style.setProperty('--cor-click', 'white');
    document.documentElement.style.setProperty('--cor-sombra', '#1E1E1E');
    document.documentElement.style.setProperty('--cor-text', '#E0E0E0');
    document.documentElement.style.setProperty('--cor-back1', '#121212');
    document.documentElement.style.setProperty('--cor-back2', '#1F1B24');
}


function temaInatel() {
    document.documentElement.style.setProperty('--cor-click', '#126ae2');
    document.documentElement.style.setProperty('--cor-sombra', '#EFECED');
    document.documentElement.style.setProperty('--cor-text', '#126ae2');
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

function openFrequenciaPopup() {
    document.getElementById("frequencia-popup").style.display = "block";
}

function closeFrequenciaPopup() {
    document.getElementById("frequencia-popup").style.display = "none";
}
