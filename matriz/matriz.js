/*nao tinha muito conhecimento com matrizes , mas achei bastante conteudo que ensina a mecher com elas*/

function processMatrix(matrix) {
    let somaTotalLinhas = 0;

    // esse for e pra pecorrer todas as linhas da matriz e somar todas as linhas
    for (let i = 0; i < matrix.length; i++) {
        somaTotalLinhas += matrix[i].reduce((accumalator, value) => accumalator + value, 0);
    }

    // um array pra armazenar as somas das colunas
    let somaTotalColunas = Array(matrix[0].length).fill(0);

    // Percorre todas as linhas da matriz
    for (let i = 0; i < matrix.length; i++) {
        //para cada coluna soma valor de acordo com a liha
        for (let x = 0; x < matrix[i].length; x++) {
            somaTotalColunas[x] += matrix[i][x];
        }
    }
    

    let diagSecundaria = [];
    let diagPrincipal = [];

    if (matrix.length === matrix[0].length) {  // testando se  a matriz é quadrada para calcular diagonais
        //diagonal Principal

        for (let i = 0; i < matrix.length; i++) {
            diagPrincipal.push(matrix[i][i]) // quando i = 0,  matrix[0][0] = 1 , quando i = 1 matrix[1][1]
        }

        for (let i = 0; i < matrix.length; i++) {
            diagSecundaria.push(matrix[i][matrix.length - 1 - i]); //quando i = 0, a coluna e 3-1-0=2
        }
    }


    return {
        sumRows: somaTotalLinhas,
        sumColumns: somaTotalColunas,
        diagonalPrincipal: diagPrincipal,
        diagonalSecundaria: diagSecundaria
    }


}
let matriz = [[11, 27, 21],
              [14, 18, 12],
              [17, 16, 19]];

console.log(processMatrix(matriz))

// Teste com matriz não quadradatica
let matrizNQuadra = [
    [1,  2,  3],
    [4 , 5, 6]
];

console.log(processMatrix(matrizNQuadra))





/*  
  alguns teste que eu fiz durante as pesquisas
    let sun= matrix[0].reduce((accumalator, value) => accumalator + value , 0)
    let sun1= matrix[1].reduce((accumalator,value) => accumalator + value , 0)
    let sun2= matrix[2].reduce((accumalator,value) => accumalator + value , 0)

    let somaTotal = sun + sun1 +sun2
    return somaTotal

    let matriz = [ [1,2,3],
                   [4,5,6],
                   [7,8,9] ];
      console.log(processMatrix(matriz))



 let sun = teste.reduce(function(accmulator,value){
    return accmulator+value
 })           
     */



