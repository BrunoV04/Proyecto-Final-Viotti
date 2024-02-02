const base = [
    {id:1, name:"Pure de Papas", price:1600, category:'almacen', detail:"Pure De Papa Receta Tradicional Mama Cocina 100 Gr.", amount:1, discount:"2x1", img:"https://diaio.vtexassets.com/arquivos/ids/281867-500-auto?v=638322660082730000&width=500&height=auto&aspect=true", detailMore:'Mamá Cocina es la aliada de la mujer actual que ofrece un mundo de soluciones prácticas a la hora de alimentar a la familia; dejando lugar al toque personal y casero. Mamá Cocina es calidad e innovación a través de una gran variedad.'},
    {id:2, name:"Vino Tinto Elementos", price:1849, category:'bebidas', detail:"Cabernet Sauvignon 750 ml.", amount:1, discount:"20%", img:"https://ardiaprod.vtexassets.com/arquivos/ids/264657-1200-auto?v=638322426878570000&width=1200&height=auto&aspect=true", detailMore:'Color: Rojo rubí con marcados destellos violáceos, vivaz. Sus tonalidades vivas indican un vino joven de gran intensidad, profundo, brillante.'}, 
    {id:3, name:"Fideos Lucchetti", price:421, category:'almacen', detail:"Fideos Penne Rigate Lucchetti 500 Grs.", amount:1, discount:"10%", img:"https://diaio.vtexassets.com/arquivos/ids/281315-500-auto?v=638322652614870000&width=500&height=auto&aspect=true", detailMore:'Los Fideos Penne Rigate Lucchetti son una elección deliciosa y versátil para tus comidas. Estos fideos secos están enriquecidos con una combinación especial de hierro, zinc y vitaminas esenciales, que incluyen B1, B2, B6, B9, A, D y B12. Esta mezcla única de nutrientes se conoce como Nutrivit, lo que garantiza que disfrutes de un sabor excepcional junto con un aporte nutricional completo.'},
    {id:4, name:"Cerveza Heineken", price:549, category:'bebidas', detail:"Cerveza Porron Heineken 330 Ml.", amount:1, discount:"35%", img:"https://diaio.vtexassets.com/arquivos/ids/282021-500-auto?v=638322662065100000&width=500&height=auto&aspect=true", detailMore:'Heineken es la marca de cerveza premium internacional más valiosa del mundo y está disponible en casi todos los países del planeta – no importa en qué parte del mundo tomes ese primer sorbo, sabé que va a tener la misma calidad que distingue a Heineken® desde hace casi 150 años.'},
    {id:5, name:"Gaseosa Coca-Cola", price:2175, category:'bebidas', detail:"Sabor Original 2,25 Lts.", amount:1, discount:"4x2", img:"https://ardiaprod.vtexassets.com/arquivos/ids/262640-1200-auto?v=638322394472270000&width=1200&height=auto&aspect=true", detailMore:'Nada supera el sabor de una Coca-Cola. Diseñado para acompañar cada momento, el sabor de la Coca-Cola es un clásico que perdura desde hace más de 130 años. Deliciosa y refrescante.'},
    {id:6, name:"Agua Saborizada Levité", price:660, category:'bebidas', detail:"Pera 2,25 Lts.", amount:1, discount:"33%", img:"https://ardiaprod.vtexassets.com/arquivos/ids/266213-1200-auto?v=638322447948300000&width=1200&height=auto&aspect=true", detailMore:'Agua mineral natural, jugo de pera, azúcar, jmaf, vitamina b9, vitamina b12, acreg ácido málico, aro, cons benzoato de sodio, cons sorbato de potasio, edu acesulfame k, edu sucralosa, edta, col caramelo iv, tartrazina.'},
    {id:7, name:"Arroz Largo Fino", price:840, category:'almacen', detail:"Molinos Ala 500 Gr.", amount:1, discount:"10%", img:"https://ardiaprod.vtexassets.com/arquivos/ids/282018-1200-auto?v=638322662015700000&width=1200&height=auto&aspect=true", detailMore:'Un arroz versátil que se adapta a todo tipo de comidas. Es ideal para platos fríos como ensaladas o salpicones, o para acompañar carnes y verduras.'},
    {id:8, name:"Aceite de Girasol", price:999, category:'almacen', detail:"Cañuelas 1,5 Lts.", amount:1, discount:"60%", img:"https://ardiaprod.vtexassets.com/arquivos/ids/264479-800-auto?v=638322424292200000&width=800&height=auto&aspect=true", detailMore:'Cañuelas es la marca icónica presente en el mercado desde hace tres décadas, que tradicionalmente acompaña la mesa de las familias argentinas. '}
]

export const setBase = () =>{
return new Promise((res, rej) => {
setTimeout(() => {
    res(base)
}, 1000)
})
}



export const getPorductoById = (productoId) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(base.find(pro => pro.id === parseInt(productoId)))
        }, 1000)
    })
}


export const getPorductoByCategory = (productoCategory) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(base.filter(pro => pro.category === productoCategory))
        }, 1000)
    })
}