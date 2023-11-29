const alunos = ['Debora', 'Gabriel', 'Gustavo']
const alunos2 = alunos.map(function(itemAtual) {
    itemAtual = {
        nome: itemAtual,
        nota: 10 
    }
    return itemAtual;
})

alunos2.push({
    nome: 'José',
    nota: 5, 
})

alunos2.push({
    nome: 'João',
    nota: 4, 
})

const alunosAprovados = alunos2.filter(function(itemAtual) {
    return itemAtual.nota >= 6
})

console.log(alunosAprovados)