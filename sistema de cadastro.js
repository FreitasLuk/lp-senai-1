var dataEvento = 30, idadeCliente = [15, 16, 17, 18, 19, 20], dataHoje = 22, cadastrados= [], limite = 0;
console.log('////Sistema de cadstro de eventos \n');

if(limite <= 100)
{
    if(dataEvento > dataHoje){
        for(cont=0; cont < idadeCliente.length; cont++)
        {
            if(idadeCliente[cont] >= 18)
            {
                cadastrados.push(idadeCliente[cont]);
                console.log('\n idade:', idadeCliente[cont]);
                console.log('Cadastro realizado com sucesso!');
            }
            else{
                console.log('\n idade:', idadeCliente[cont]);
                console.log('Cadastro nao pode ser realizado, idade insuficiente.');
            }

        }
        console.log('\n idades da lista de usuarios cadastrados: \n')
        for (cont=0; cont < cadastrados.length; cont++)
        {
            console.log(cadastrados[cont]);
        }

    }
    else{
    console.log('\n Data Invalida!');
    }
limite++;    
}
