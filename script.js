const input = document.querySelector('#cep')

input.addEventListener('keyup', ()=>{
    console.log(input.value)
})

async function fazerReq(){
    const req = await fetch('http://viacep.com.br/ws/78051904/json')
    const response = await req.json();
    console.log(response)
}