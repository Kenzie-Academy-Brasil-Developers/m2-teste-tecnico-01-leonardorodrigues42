const ul = document.querySelector(".container")

function posicionaCard(){
    
    pessoas.forEach(pessoa => {
        const li = document.createElement("li")
        li.className = "card"

        const img = document.createElement("img")
        img.src = pessoa.urlImage

        const h2 = document.createElement("h2")
        h2.innerText = pessoa.nome

        const h3 = document.createElement("h3")
        h3.innerText = pessoa.idade

        const bio = document.createElement("p")
        bio.innerText = pessoa.bio

        li.append(img, h2,h3, bio)
        ul.append(li)
    })
}

posicionaCard()