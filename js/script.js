const input = document.querySelector('#cep')
const btnBuscar = document.querySelector('#buscar')
const resultadoContainer = document.querySelector('.response')
const btnNovaBusca = document.querySelector('#novabusca')

const pegarCep = () =>{
    const cep = input.value;
    return +cep 
}

const iniciarRequisicao = async (e) =>{
    e.preventDefault();
    const req = await fetch(`http://viacep.com.br/ws/${pegarCep()}/json`)
    const responseJSON = await req.json();
    function preencherResultado(){
        const bairro = document.querySelector('#bairro-text')
        const localidade = document.querySelector('#localidade-text')
        const logradouro = document.querySelector('#logradouro-text')
        const uf = document.querySelector('#uf-text')
        const ddd = document.querySelector('#ddd-text')
        bairro.innerText = responseJSON.bairro;
        localidade.innerText = responseJSON.localidade;
        logradouro.innerText = responseJSON.logradouro;
        uf.innerText = responseJSON.uf;
        ddd.innerText = responseJSON.ddd;
    }
    preencherResultado();
}

function mostrarResultados(){
    resultadoContainer.classList.add('active')
}
const novaBusca = (e)=> {
    e.preventDefault();
    resultadoContainer.classList.remove('active')
    input.value = ''
    input.focus()
}

input.addEventListener('keyup', pegarCep)
btnBuscar.addEventListener('click', iniciarRequisicao)
btnBuscar.addEventListener('click', mostrarResultados)
btnNovaBusca.addEventListener('click', novaBusca)





