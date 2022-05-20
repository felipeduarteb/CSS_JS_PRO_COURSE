const data = {
    aluno: {
        nome: 'Felipe',
        sobreNome: 'Duarte',
        idade: 29,
        faculdade: true,
        nomeCompleto: function () {
            return `${this.nome} ${this.sobreNome}`;
            // return this.nome + " " + this.sobreNome;
        }

    }
};


let data2 ={
    alunos: [
        {
            nome: 'Felipe',
            sobreNome: 'Duarte',
            idade: 29,
            faculdade: true,
        },

        {
            nome: 'Oscar',
            sobreNome: 'Pereira',
            idade: 29,
            faculdade: true,
        }
    ]
}

console.log(data.aluno.nomeCompleto());

console.log(data2.alunos[0].nome);

let frutas = ['maça', 'banana', 'pera'];

// console.log(frutas[2]);
// console.log(frutas[1]);
//remove ultimo elemento do array 
console.log(frutas.pop());
// console(frutas);
//adiciona um elemento ao final
frutas.push('maçã');
frutas.push('mortadela');
// console.log(frutas);


frutas.forEach (function (item){
    console.log(item);
});

data2.alunos.forEach(function (item) {
    console.log(item.nome);
})



const ola = document.getElementsByClassName('teste1 + teste2');

console.log(ola);
