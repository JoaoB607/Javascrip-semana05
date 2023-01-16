const prompt = require('prompt-sync')();
var array_clientes = [];

do {
  console.log("Sistema de Cadastro de Clientes");
  console.log("1 - Inserir Cliente");
  console.log("2 - Excluir Cliente");
  console.log("3 - Listar Clientes");
  console.log("0 - Sair");

  var opcao = prompt("Digite sua opção: ");

  if (opcao == 1) {
    console.log("\n\nInserindo Cliente...\n");
    let codigo = parseInt(prompt("Digite o código: "));
    let nome = prompt("Digite o nome: ");
    let email = prompt("Digite o e-mail: ");
    let celular = prompt("Digite o celular: ");
    let estado = prompt("Digite o estado: ");

    // Neste trecho estamos declarando um objeto
    const cliente = {
      codigo: codigo,
      nome: nome,
      email: email,
      celular: celular,
      estado: estado,
    }
    // Chamar a função inserir
    inserir_cliente(cliente)

  } else if (opcao == 2) {
    console.log("\n\nExcluindo Cliente...\n");
    let codigo = prompt("Digite o código do cliente: ");
    // Chamar a função excluir
    excluir_cliente(codigo)
  } else if (opcao == 3) {
    console.log("\n\nListando Clientes...\n");
    // Chamar a função listar
    listar_clientes()
  } else {
    console.log("\n\nSaindo do programa...\n");
  }

  prompt("\nEnter para continuar...");
  console.clear();
} while (opcao != 0)


function inserir_cliente(cliente) {
  // Implementar corpo da função
  array_clientes.push(cliente);
}

function excluir_cliente(codigo) {
  // Implementar corpo da função
  for (var i = 0; i < array_clientes.length; i++) {
    c = array_clientes[i]
    if (codigo == c.codigo) {
      array_clientes.splice(i, 1);
    }
  }
}

function listar_clientes() {
  // Implementar corpo da função
  for (var i = 0; i < array_clientes.length; i++) {
    c = array_clientes[i]
    console.log(c.codigo, ": " + c.nome + " - " + c.email + " - " + c.celular + " - " + c.estado);
  }

}


