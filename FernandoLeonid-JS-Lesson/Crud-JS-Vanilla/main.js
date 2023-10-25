'use strict'
//MODAL
const openModal = () => document.getElementById('modal').classList.add('active')
//adicionando ao modal a classe 'active'
const closeModal = () => {
clearFields()
document.getElementById('modal').classList.remove('active')}
//removendo do modal a classe 'active'

const tempClient = { //JSON
    nome: 'casa',
    email: 'picapica@gmail',
    celular: '313513532',
    cidade: 'cu deminas'
}

//LOCAL-STORAGE
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
//leia o que está no localStorage, transforma em JSON e armazena na constante, caso vazio, array vazio
const setLocalStorage = (dbClient) => localStorage.setItem('db_client', JSON.stringify(dbClient))
//o localStorage só aceita dados em string, então é preciso passar o objeto JSON para string


//CRUD - CREATE READ UPDATE DELETE
//const readClient = () => getLocalStorage()//só existe por existir

const createClient = (client) => {//o client recebe os dados tabela
    const dbClient = getLocalStorage()//dbClient recebe os dados JSON do localStorage
    dbClient.push (client)//push == acrescenta mais um, soma mais um
    setLocalStorage(dbClient)//após somar mais um client, setLocalStorage envia novos dados ao localStorage
}

const updateClient = (index, client) => {
    const dbClient = getLocalStorage//a constante recebe os dados atuais do localStorage
    dbClient[index] = client//o index do dbClient esta recebendo um novo client
    setLocalStorage(dbClient)//mandando para o localStorage o novo dbClient
}

const deleteClient = (index) => {//delete recebe o index, indicativo de quem deletar
    const dbClient = getLocalStorage()//lendo a dbClient
    dbClient.splice(index, 1)//splice separa o array 1 po 1, exclui a partir do primeiro '1'
    setLocalStorage(dbClient)//mandando os novos dados para o localStorage
}

const isValidFields = () => {
    return document.getElementById('form').reportValidity()//validação pelo HTML
}


//INTERAÇÃO COM LAYOUT
const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')//buscando todos os campos do documento
    fields.forEach(field => field.value = "")//forEach pega todos os campos, transforma o valor em vazio
    document.getElementById('nome').dataset.index = 'new'//
    document.querySelector(".modal-header>h2").textContent  = 'Novo Cliente'
}

const saveClient = () => {
    if (isValidFields()) {//se os campos são validos
        const client = {
            nome: document.getElementById('nome').value,//valor diritado no campo do documento
            email: document.getElementById('email').value,//valor diritado no campo do documento
            celular: document.getElementById('celular').value,//valor diritado no campo do documento
            cidade: document.getElementById('cidade').value//valor diritado no campo do documento
        }
        const index = document.getElementById('nome').dataset.index
        if (index == 'new') {
            createClient(client)
            updateTable()
            closeModal()
        } else {
            updateClient(index, client)
            updateTable()
            closeModal()
        }
    }
}

const createRow = (client, index) => {//a função ta recebendo o client e index
    const newRow = document.createElement('tr')//criando um elemento 'tr'
    newRow.innerHTML = `
        <td>${client.nome}</td>
        <td>${client.email}</td>
        <td>${client.celular}</td>
        <td>${client.cidade}</td>
        <td>
            <button type="button" class="button green" id="edit-${index}">Editar</button>
            <button type="button" class="button red" id="delete-${index}" >Excluir</button>
        </td>
    `//usando o innerHTML para levar ao documento os elementos criados e receber os valores digitados nos clients
    document.querySelector('#tableClient>tbody').appendChild(newRow)//puxando id do elemento e adicionando filho
}////puxando id do elemento e adicionando filho, agora faz parte do nó do DOM, documento


const clearTable = () => {
    const rows = document.querySelectorAll('#tableClient>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))//pega cada linha, pega o pai e remove o filho
}//row == linha, parentNode == tbody, remove o filho == row

const updateTable = () => {
    const dbClient = getLocalStorage()//lendo o localStorage
    clearTable()//limpando as tabelas
    dbClient.forEach(createRow)//mandando para a função callback createRow
}

const fillFields = (client) => {
    document.getElementById('nome').value = client.nome
    document.getElementById('email').value = client.email
    document.getElementById('celular').value = client.celular
    document.getElementById('cidade').value = client.cidade
    document.getElementById('nome').dataset.index = client.index
}

const editClient = (index) => {
    const client = getLocalStorage()[index]
    client.index = index
    fillFields(client)
    document.querySelector(".modal-header>h2").textContent  = `Editando ${client.nome}`
    openModal()
}

const editDelete = (event) => {
    if (event.target.type == 'button') {//se event, alvo do click, tipo é igual a botton?

        const [action, index] = event.target.id.split('-')//array com duas posições, o split identifica pelo-

        if (action == 'edit') {
            editClient(index)
        } else {
            const client = getLocalStorage()[index]
            const response = confirm(`Deseja realmente excluir o cliente ${client.nome}`)
            if (response) {
                deleteClient(index)
                updateTable()
            }
        }
    }
}

updateTable()

// Eventos
document.getElementById('cadastrarCliente').addEventListener('click', openModal)

document.getElementById('modalClose').addEventListener('click', closeModal)

document.getElementById('salvar').addEventListener('click', saveClient)

document.querySelector('#tableClient>tbody').addEventListener('click', editDelete)

document.getElementById('cancelar').addEventListener('click', closeModal)