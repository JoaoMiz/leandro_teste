// Dados em memória (simula um banco de dados)
let pessoas = [
    { id: 1, name: 'João Silva', cpf: '123.456.789-00', age: 30 },
    { id: 2, name: 'Maria Oliveira', cpf: '987.654.321-00', age: 25 },
];
// poode usar só fetchPessoas = () => {pessoas} tambem
export const fetchPessoas = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(pessoas), 1000); 
    });
};


