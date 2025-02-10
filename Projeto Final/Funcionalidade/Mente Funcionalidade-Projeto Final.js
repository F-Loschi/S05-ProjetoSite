// Controle de menus laterais
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

// Array com os links das imagens
const imagens = [
    "https://i.imgur.com/uItan4r.png",
    "https://i.imgur.com/NRBRRSU.png",
    "https://i.imgur.com/yndtlpl.png",
    "https://i.imgur.com/2t87fjd.png",
    "https://i.imgur.com/sanTHki.png",
    "https://i.imgur.com/QVOOupv.png",
    "https://i.imgur.com/SZnWGR1.png",
    null // Última "imagem" é o mapa
];

// Array com as descrições das imagens
const descricoes = [
    "Visão aérea do Inatel, visto pela entrada principal",
    "Prédio 1(I). Aqui você encontra:\n Primeiro andar: Salas de 2 a 14\n Segundo andar: Salas de 15 a 22, CTIC e outras salas",
    "Prédio 2(II). Aqui você encontra:\n Primeiro andar: CS&I Lab, labs de Telecom e labs de biomédica\n Segundo andar: Andar da XG Mobile",
    "Prédio 3(III). Aqui você encontra:\n Primeiro andar: Labs de elétrica, analógica e digital e almoxarifado\n Segundo andar: Coordenação de cursos e sala dos professores",
    "Prédio 4(IV). Aqui você encontra:\n Primeiro andar: Labs de física, lab de ideação, Robotbulls e Fablab\n Segundo andar: CDIC, CDG e e-health",
    "Prédio 5(V). Aqui você encontra:\n Primeiro andar: biblioteca, atlética, estágios e intercâmbio\n Segundo andar: CDIC, mesas e entrada para segundo andar da biblioteca\n Terceiro andar: CDIC, teatro do Inatel e área do prédio",
    "Prédio 6(VI). Aqui você encontra:\n Primeiro andar: Recepção\n Segundo andar: Salas de reunião\n Terceiro andar: Salas de aula\n Quarto andar em diante: Salas de reunião e CDIC",
    "Mapa da cidade\n Como atrações na cidade essa semana, temos:\n -Hacktown\n -Festival Cultural\n -Cirque du Soleil(Na Cidade do Urso)"
];

// Inicializa o índice atual
let indiceAtual = 0;

// Função para atualizar a exibição
function atualizarImagem() {
    const imagemElemento = document.getElementById("imagem-seta");
    const descricaoElemento = document.getElementById("descricao-imagem");
    const mapaElemento = document.getElementById("mapa");

    if (imagens[indiceAtual] === null) {
        // Exibe o mapa e esconde a imagem
        imagemElemento.style.display = "none";
        mapaElemento.style.display = "block";
        descricaoElemento.innerText = descricoes[indiceAtual];

        // Inicializa o mapa, se ainda não estiver configurado
        if (!mapaElemento.dataset.inicializado) {
            const mapa = L.map("mapa").setView([-22.256990, -45.696286], 16);
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: "© OpenStreetMap contributors",
            }).addTo(mapa);

            L.marker([-22.256990, -45.696286])
                .addTo(mapa)
                .bindPopup("Inatel - Instituto Nacional de Telecomunicações")
                .openPopup();
            
            L.marker([-22.221104, -45.726310])
                .addTo(mapa)
                .bindPopup("Cirque du Soleil")
                .openPopup();
            
            L.marker([-22.250719, -45.707789])
                .addTo(mapa)
                .bindPopup("Hacktwon(Na cidade inteira)")
                .openPopup();
            L.marker([-22.254507, -45.707436])
                .addTo(mapa)
                .bindPopup("Festival Cultural")
                .openPopup();

            mapaElemento.dataset.inicializado = "true";
        }
    } else {
        // Exibe a imagem e esconde o mapa
        imagemElemento.style.display = "block";
        mapaElemento.style.display = "none";
        imagemElemento.src = imagens[indiceAtual];
        descricaoElemento.innerText = descricoes[indiceAtual];
    }
}

// Funções para avançar e retroceder
function goForward() {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    atualizarImagem();
}

function goBack() {
    indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
    atualizarImagem();
}

// Inicializa a primeira exibição
atualizarImagem();

L.marker([-22.2569, -45.7039])
    .addTo(mapa)
    .bindPopup("Inatel - Instituto Nacional de Telecomunicações")
    .openPopup();
