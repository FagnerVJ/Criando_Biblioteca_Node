const chalk = require('chalk'); 
const fs = require('fs');

const trataErro = (erro) => {
    throw new Error(chalk.red(erro.erro, "Verique o caminho")) // está jogando um erro no sistema
}

// const pegarArquivo = (caminhoDoArquivo) => {
//     const encoding = 'utf-8'; 
//     fs.readFile(caminhoDoArquivo, encoding, (erro, data) => {
//         if(erro){
//             trataErro(erro);
//         }else{
//             return console.log(chalk.green(data));
//         }
        
//     })
// }

const pegarArquivo = (caminhoDoArquivo) => {
    const encoding = 'utf-8'; 
    fs.promises
    .readFile(caminhoDoArquivo, encoding)
    .then((data)  => {console.log(chalk.green(data))})
    .catch((erro) => {trataErro(erro)})
}

pegarArquivo('./arquivos/texto1.md');


//fs.readFile(file, [encoding],[callback])//CallBack
//primeiro file é uma 'string' o caminho do arquivo
//segundo encoding UTF-8
//terceiro callback é uma função ()=>{} que precisa ser chamada de volta


//npm install chalk, identifica pedaços de texto em um artigo
//https://www.npmjs.com/package/chalk
//module.exports = nome-do-quer-exportar;
//const nome-do-que-exportou = require('nome-do-quer-exportar');
//O módulo fs(File System) fornece operações de I/O (Input/Output ou E/S, Entrada/Saída) através de wrappers simples ao redor de funções POSIX. Para usar o módulo fs (File System) você deve usar o comando require (‘fs’), sendo que todos os métodos possuem versões assíncronas e síncronas.
//https://nodejs.org/api/fs.html
//https://nodejs.dev/learn/reading-files-with-nodejs