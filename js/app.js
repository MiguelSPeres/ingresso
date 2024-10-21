function comprar() { 
//Declaração da função comprar

        let tipo = document.getElementById('tipo-ingresso'); // Seleciona o elemento html.
        // let qtd = document.getElementById('qtd'); // (Original c/ erro.)

        let qtd = parseInt(document.getElementById('qtd').value); // Converte de string para número, o valor da tag selecionada.
        // Por padrão o JavaScript recupera os valores da página como strings.

        // if (tipo.value == 'Pista') {  // (Anteior com erro) é "pista" e não "Pista".
        if (tipo.value == 'pista') { // tipo.value, seleciona o valor do elemmento html e compara == com o valor Pista.
                
                // comprarPista (qtd.value);
                comprarPista(qtd); //Executa a função comprarPista, com o argumento qtd.
        
        } else if (tipo.value == 'superior') { // Se não, se, tipo do ingresso for igual a supeior.

                comprarSuperior(qtd); // Executa a função de compra de ingresso superior.

        } else { // Se não, o tipo do ingresso será igua a inferior.

                comprarInferior(qtd); // Executa a função de compra de ingresso inferior.

        }

} // Fim da função comprar.

function comprarPista(qtd) { //Declaração da função comprarPista
        
        // let qtdPista = document.getElementById('qtd-pista'); (Anterior com erro)
        let qtdPista = parseInt(document.getElementById('qtd-pista').textContent); // Obtem o elemnto HTML de id chamado: qtd-pista
        
        // if (qtd > qtdPista.textContent) {  (Anteior)
        if (qtd > qtdPista) { //Se a quantidade de ingresso solicitada for maior que a quantidade disponível para a pista.
                
                alert('Infelizmente não dispomos desta quantidade de ingressos para a pista.'); // aviso de inviabilidade.
        
        }       else { // Se não... Subtraia a quantidade comprada do valor disponível.

                qtdPista = qtdPista - qtd; // subtrai a quantidade de ingressos da pista.
                // qtdPista.textContent = qtdPista; (Anteior)

                document.getElementById('qtd-pista').textContent = qtdPista; //Atualiza o valor subtraido na página.
                
                alert ('Compra realizada com sucesso!') //Menssagem de confirmação de compra.
        }
}

function comprarSuperior(qtd) {
        
        let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
        if (qtd > qtdSuperior) {
                
                alert('Infelizmente não dispomos desta quantidade de ingressos para do tipo: Cadeira supeior.');
                } else {

                qtdSuperior = qtdSuperior - qtd; // subtrai a quantidade de ingressos do tipo: Cadeira supeior.
                // qtdPista.textContent = qtdPista; (Anteior)

                document.getElementById('qtd-superior').textContent = qtdSuperior; //Atualiza o valor subtraido na página.
                
                alert ('Compra realizada com sucesso!') //Menssagem de confirmação de compra.
        }
}

function comprarInferior(qtd) {
        
        let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
        if (qtd > qtdInferior) {
                
                alert('Infelizmente não dispomos desta quantidade de ingressos para do tipo: Cadeira inferior.');
                } else {
                        qtdInferior = qtdInferior - qtd;
                        document.getElementById('qtd-inferior').textContent = qtdInferior;
                        alert ('Compra realizada com sucesso!')
                }
}