function handleDateOperations(d1, d2,dias) {
    let data1 = new Date(d1);
    let data2 = new Date(d2);

    // Verificar se datas são válidas
    if (isNaN(data1) || isNaN(data2)) {
        return "Datas inválidas";
    }

    let diferencaMs = data2 - data1;
    let diferencaDias = diferencaMs / (1000 * 60 * 60 * 24);

    //adiciona dias a Data 1
    data1.setDate(data1.getDate() + dias);
    let novaData = new Date(data1);
     
 
    //aqui pega uma data atual e conveter para o fuso horario de sp

    let dataA = new Date();
    let dataBr = dataA.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    

    //formata data para 00/00/0000

    let dataForma= dataA.toLocaleDateString('pt-BR');
    console.log(dataForma);
    

    return {
        daysBetween: diferencaDias, 
        newDate: novaData,        
        convertTimeZone: dataBr, 
        formattedDate: dataForma 
    };


}

console.log(handleDateOperations('2024-09-11', '2024-11-12',10)); 