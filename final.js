var objeto = {
    sobre: {
        nome: "JULIANO",
        snome: "BORBA ALVES",
        address: "AV ANDARAÍ, 546. GRAVATAÍ - RS",
        email: "julianoalves07borba@gmail.com",
        fone: "(51)98952-1283",
        about: "Gosto das coisas simples que a vida tem me proporcionado, seja um find com a família, um happy com os amigos, uma jogatina e uma boa função no domingo assando uma carne! Ah, e quando paro e me sento para estudar, sempre em busca de algo novo! 😎",
        redes: ["https://www.linkedin.com/in/julianoborbaalves/", "https://github.com/jbalves07", "https://twitter.com/_julianoalvees", "https://www.facebook.com/juliano.borbaalves/"],
    },
    conhecimentos: ["html", "css", "javaScript", "ingles", "c++", "google sheets"],
    pessoais: ["Ter meu próprio canto, ir adquirindo alguns bens no decorrer da jornada, um dia quem sabe conhecer novos lugares, pessoas novas."],
    profissionais: [
        "Pretendo virar desenvolvedor júnior após o encerramento do programa, ter a chance de trabalhar em qualquer lugar do mundo, continuar trabalhando onde amo e ser reconhecido por onde passo, independente de qual carreira escolher.",
    ],
};

var sobre = document.getElementById("sobre");
var conhecimentos = document.getElementById("conhecimentos");
var objetivos = document.getElementById("objetivos");

function detalhes() {
    document.querySelector("#nome").innerHTML = objeto.sobre.nome + ` <span>${objeto.sobre.snome}</span>`;

    document.getElementById("dados").innerHTML = `${objeto.sobre.address} <span>${objeto.sobre.email} ${objeto.sobre.fone}</span>`;

    document.getElementById("about").innerHTML = objeto.sobre.about;

    let itemList;
    let x = document.getElementById("redesSociais");
    for (const link of objeto.sobre.redes) {
        itemList = document.createElement("a");
        itemList.setAttribute("href", link);
        itemList.setAttribute("target", "_blank");
        itemList.innerText = link;

        if (itemList.href.includes("linkedin")) {
            itemList.innerHTML = `<i class="fab fa-linkedin"></i>`;
        } else if (itemList.href.includes("github")) {
            itemList.innerHTML = `<i class="fab fa-github"></i>`;
        } else if (itemList.href.includes("twitter")) {
            itemList.innerHTML = `<i class="fab fa-twitter"></i>`;
        } else if (itemList.href.includes("facebook")) {
            itemList.innerHTML = `<i class="fab fa-facebook"></i>`;
        }
        x.appendChild(itemList);
    }

    for (const know of objeto.conhecimentos) {
        document.getElementById("listaConhecimentos").innerHTML += `<li>${know}</li>`;
    }

    for (const person of objeto.pessoais) {
        document.getElementById("listaPessoal").innerHTML += `<li>${person}</li>`;
    }

    for (const work of objeto.profissionais) {
        document.getElementById("listaProfi").innerHTML += `<li>${work}</li>`;
    }
}
detalhes();

function clicarSobre() {
    sobre.style.display = "block";
    conhecimentos.style.display = "none";
    objetivos.style.display = "none";
}
function clicarConhecimentos() {
    sobre.style.display = "none";
    conhecimentos.style.display = "block";
    objetivos.style.display = "none";
}
function clicarObjetivos() {
    sobre.style.display = "none";
    conhecimentos.style.display = "none";
    objetivos.style.display = "block";
}