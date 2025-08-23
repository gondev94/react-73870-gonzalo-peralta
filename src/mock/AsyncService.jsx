// recomendacion manejar los datos lo mas simple posible para manejar los hooks y aprenderlos
const productos = [
    {
        id:'01',
        name:'E.CR.ERW',
        description:'Espresso, Costa Rica - Entre Rios - Variedad: Marsellesa y Obatá (blend de Entre Ríos Sarchimores, cruce originario de Villa Sarchi e Híbrido de Timor)',
        price:12,
        stock:100,
        category:'nuevos',
        process:'washed',
        img:'https://i.postimg.cc/TPmzt8tJ/E-CR-ERW.webp', // placeholder, host de imagenes o img locales, lo ideal es hostear las img se recomienda en public
    },

    {
        id:'02',
        name:'E.RW.INZO',
        description:'Espresso, Ruanda - Inzovu -  Variedad: Bourbon Rojo ',
        price:14,
        stock:50,
        category:'mas vendidos',
        process:'natural',
        img:'https://i.postimg.cc/zB7PQqKK/E-RW-INZO.webp',
    },

    {
        id:'03',
        name:'D.CO.DCF',
        description:'Espresso "Descafeinado" - Colombia - Chambakú - Variedad: Castillo',
        price:13,
        stock:80,
        category:'ofertas',
        process:'washed',
        img: 'https://i.postimg.cc/P5DVjW1t/decaff.webp', // no se recomienda usar porque si no hay mas palitos de la selva y si bajan la imagen no existira más
    },
    {
        id:'04',
        name:'F.BU.GAH',
        description:'Filtro, Burundí - Gahahe - Variedad Red Bourbon',
        price:17,
        stock:40,
        category:'ofertas',
        process:'washed',
        img:'https://i.postimg.cc/J4GdTVnH/F-BU-GAH.webp', // no se recomienda usar img directa  si no hay mas y bajan la imagen no existira más
                // se usa el enlace directo en postimage
    },
]

//crear una promesa que retorne el array de productos

export const getProduct = () => {
    let error = false
    return new Promise ((resolve,reject )=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un error intente mas tarde')
            }else{
                resolve(productos)
            }
        },2000)
    })
}

// no se adentro del array para no quede larga la funcion y se utiiliza para otra función mas se declara por fuera
// si queremos simular un error  usamos reject y declamos un if

// esta logica se aplica en el contenedor itemlistcontainer


export const getOneProduct = (id) => {
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            //buscamos el producto con el id que se recibe del parámetro 
            let OneProduct = productos.find((prod)=> prod.id === id)
            // lo devolvemos 
            resolve(OneProduct)
        },2000)
    })
} 