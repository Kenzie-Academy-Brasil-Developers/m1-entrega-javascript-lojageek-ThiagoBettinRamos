let objeto = {
    img : "./assets/img.webp",
    nome : "produto",
    preco : "R$125,00",
    tipo : "figure"
}
let objeto2 = {
    img : "./assets/img.webp",
    nome : "produto",
    preco : "R$125,00",
    tipo : "frame"
}
let lista = [objeto, objeto, objeto, objeto, objeto2, objeto2, objeto2, objeto2]
function separateItens(lista){
    for(i = 0; i < lista.length; i++){
        if(lista[i].tipo == "figure"){
            listfigures.push(lista[i])
        }
        if(lista[i].tipo == "frame"){
            listframes.push(lista[i])
        }     
    }
}
    let listfigures = []
    let listframes = []
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