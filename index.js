/*Exercício 4 

const escolhido = prompt("Escolha um Pokémon").toLowerCase()
switch (escolhido) {
    case 
}

*/
const podeEstudar = (formadoEM, idade, estudando) => {
    if (formadoEM === "true" && idade >= 18 && estudando !== "true") {
        return "Pode estudar";
     } else {
        return "Não pode estudar";
     }
    };
     
    const escolaridade = prompt("True or false se é formado no EM");
    const idade = prompt("Qual sua idade?");
    const estudandoAtualmente = prompt("Você já faz faculdade? true or false");

    const retorno = podeEstudar(
        escolaridade.toLowerCase(), Number(idade), estudandoAtualmente.toLowerCase()
    );
    console.log(retorno);