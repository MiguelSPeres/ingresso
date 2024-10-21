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
        }
} // Fim da função comprar.

function comprarPista(qtd) { //Declaração da função comprarPista
        
        // let qtdPista = document.getElementById('qtd-pista'); (Anterior com erro)
        let qtdPista = parseInt(document.getElementById('qtd-pista').textContent); // Obtem o elemnto HTML de id chamado: qtd-pista
        
        // if (qtd > qtdPista.textContent) {  (Anteior)
        if (qtd > qtdPista) { //Se a quantidade de ingresso solicitada for maior que a quantidade disponível para a pista.
                
                alert('Infelizmente não dispomos desta quantidade de ingresso para a pista.'); // aviso de inviabilidade.
        
        }       else { // Se não... Subtraia a quantidade comprada do valor disponível.

                qtdPista = qtdPista - qtd; // subtrai a quantidade de ingressos da pista.
                // qtdPista.textContent = qtdPista; (Anteior)

                document.getElementById('qtd-pista').textContent = qtdPista; //Atualiza o valor subtraido na página.
                
                alert ('Compra realizada com sucesso!') //Menssagem de confirmação de compra.
        }
}