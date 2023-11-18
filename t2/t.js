fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
.then(productos => {
     const cp = document.getElementById("consumir")

    productos.forEach(pro=>{
            const ep = ppro(pro)
            cp.appendChild(ep)
  })
    })
    .catch(error => console.error("error",error))

function ppro(pro) {
    const ep = document.createElement("sss")
    ep.classList.add('producto')

  const ima = document.createElement("img")
ima.src = pro.image
    
    const des = document.createElement("si")
    des.textContent = pro.description

    const pr = document.createElement("si")
    pr.textContent = `precio: ${pro.price}`
ep.appendChild(des)
ep.appendChild(ima)
 ep.appendChild(pr)
    return ep
}
