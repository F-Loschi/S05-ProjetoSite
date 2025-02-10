function openMenu() {
    document.getElementById("menu_aba").style.width = "75%";
}

function closeMenu() {
    document.getElementById("menu_aba").style.width = "0";
}

function temaLim() {
    document.documentElement.style.setProperty('--cor-click', '#38184C');
    document.documentElement.style.setProperty('--cor-sombra', '#EFECED');
    document.documentElement.style.setProperty('--cor-text', 'black');
    document.documentElement.style.setProperty('--cor-back1', '#CEF09D');
    document.documentElement.style.setProperty('--cor-back2', '#green');
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
    document.documentElement.style.setProperty('--cor-sombra', '#EFECED;');
    document.documentElement.style.setProperty('--cor-text', 'black');
    document.documentElement.style.setProperty('--cor-back1', '#edf2f4');
    document.documentElement.style.setProperty('--cor-back2', 'white');
}

function openProfile() {
    document.getElementById("profile_aba").style.width = "75%";
}

function closeProfile() {
    document.getElementById("profile_aba").style.width = "0";
}