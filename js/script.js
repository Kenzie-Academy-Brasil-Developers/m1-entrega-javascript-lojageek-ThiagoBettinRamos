let lista = [
    {
        img : "./assets/img/actions/animewoman.jpg",
        nome : "Miss Fortune",
        preco : "R$145,00",
        tipo : "figure"
    },
    {
        img : "./assets/img/actions/dragonballpersonagem.jpg",
        nome : "Goku SSJ",
        preco : "R$234,00",
        tipo : "figure"
    },
    {
        img : "./assets/img/actions/starwarspersonagem.jpg",
        nome : "Baby Yoda",
        preco : "R$424,00",
        tipo : "figure"
    },
    {
        img : "./assets/img/painting/clock.jpg",
        nome : "Clock",
        preco : "R$120,00",
        tipo : "frame"
    },
    {
        img : "./assets/img/painting/gamepad.jpg",
        nome : "Gamepad",
        preco : "R$143,00",
        tipo : "frame"
    },
    {
        img : "./assets/img/painting/personagem.jpg",
        nome : "C-3PO",
        preco : "R$246,00",
        tipo : "frame"
    },
]
let figure = {
    img : "./assets/img/modelos/img.webp",
    nome : "Modelos",
    preco : "R$100,00",
    tipo : "figure"
}
let frame = {
    img : "./assets/img/modelos/img.webp",
    nome : "Modelos",
    preco : "R$100,00",
    tipo : "frame"
}
let lista2 = [figure , frame , figure , frame , figure , frame]
let listfigures = []

let listframes = []

function separateItens(lista){
    listfigures = []
    listframes = []
    for(i = 0; i < lista.length; i++){
        if(lista[i].tipo == "figure"){
            listfigures.push(lista[i])
        }
        if(lista[i].tipo == "frame"){
            listframes.push(lista[i])
        }     
    }
}
function addProdutos(lista){
    
    separateItens(lista)
    addFigures(listfigures)
    addFrames(listframes)
}
function addFigures(listFigures){
    for(i = 0; i < listfigures.length; i++){
        //criando tags
        let li = document.createElement("li")
        console.log(li)
        let dimg = document.createElement("div")
        console.log(dimg)
        let datr = document.createElement("div")
        console.log(datr)
        let img = document.createElement("img")
        console.log(img)
        let h = document.createElement("h3")
        console.log(h)
        let sp = document.createElement("span")
        console.log(sp)
        //atribuindo classes
        li.className = "produtos-itens"
        dimg.className = "imagens"
        datr.className = "atributos"
        //atribuindo conteudos
        img.src = `${listfigures[i].img}`
        h.innerText = `${listfigures[i].nome}`
        sp.innerText = `${listfigures[i].preco}`
        //atribuindo filhos
        let ul = document.getElementById("figuras")
        li.appendChild(dimg)
        li.appendChild(datr)
        dimg.appendChild(img)
        datr.appendChild(h)
        datr.appendChild(sp)
        ul.appendChild(li)  
    }

}
function addFrames(listframes){
    for(i = 0; i < listframes.length; i++){
        //criando tags
        let li = document.createElement("li")
        console.log(li)
        let dimg = document.createElement("div")
        console.log(dimg)
        let datr = document.createElement("div")
        console.log(datr)
        let img = document.createElement("img")
        console.log(img)
        let h = document.createElement("h3")
        console.log(h)
        let sp = document.createElement("span")
        console.log(sp)
        //atribuindo classes
        li.className = "produtos-itens"
        dimg.className = "imagens"
        datr.className = "atributos"
        //atribuindo conteudos
        img.src = `${listframes[i].img}`
        h.innerText = `${listframes[i].nome}`
        sp.innerText = `${listframes[i].preco}`
        //atribuindo filhos
        let ul = document.getElementById("pinturas")
        li.appendChild(dimg)
        li.appendChild(datr)
        dimg.appendChild(img)
        datr.appendChild(h)
        datr.appendChild(sp)
        ul.appendChild(li)  
    }

}
addProdutos(lista)
addProdutos(lista2)
//listas