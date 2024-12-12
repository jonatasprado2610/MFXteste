/*  
Não Consegui fazer usando XMLHttpRequest 

*/
const ReadLine = require('prompt-sync')();
const https = require('https'); // 
function convertNumberToWords(n1) {

    
    const soapRequest = `<?xml version="1.0" encoding="UTF-8"?>
    <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
            <NumberToWords xmlns="http://www.dataaccess.com/webservicesserver/">
                <ubiNum>${n1}</ubiNum>
            </NumberToWords>
        </soap:Body>
    </soap:Envelope>`;

    // Configuração do HTTPS
    const options = {
        hostname: 'www.dataaccess.com',
        port: 443, 
        path: '/webservicesserver/NumberConversion.wso', // Endpoint 
        method: 'POST',
        headers: {
            'Content-Type': 'text/xml; charset=utf-8', // Tipo de conteúdo
            'Content-Length': Buffer.byteLength(soapRequest) // Tamanho do corpo
        }
    };
    

    const req = https.request(options, (res) => { 
        let data = '';

        //  dados da resposta
        res.on('data', (chunk) => {
            data += chunk;
        });

        // Aqui exibe o resultado
        res.on('end', () => {
            console.log('Resposta do servidor:');
            console.log(data); // Exibe o XML com a resposta
        });
    });

    req.on('error', (error) => {
        console.error('Erro na requisição:', error); // Exibe erros 
    });

    req.write(soapRequest); // Envia a requisição SOAP
    req.end(); 
}

function Main(){
    console.log("### Conveter numero para formato de texto ### ");

   console.log("Insira um numero Inteiro")
    
    let num = Number(ReadLine());

   
    if (isNaN(num)) { 
        console.log("Insira um número válido");
    } else if (!Number.isInteger(num)) {
        console.log("O número precisa ser inteiro");
    } else {
        convertNumberToWords(num); 
    }

   
}


Main();
