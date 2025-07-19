// recomendacion manejar los datos lo mas simple posible para manejar los hooks y aprenderlos
const productos = [
    {
        id:'01',
        name:'CAFÉ 01',
        description:'LOREM',
        price:34,
        stock:100,
        category:'nuevos',
        img:'', // placeholder, host de imagenes o img locales, lo ideal es hostear las img se recomienda en public
    },

    {
        id:'02',
        name:'CAFÉ 02',
        description:'LOREM',
        price:25,
        stock:50,
        category:'más vendidos',
        img:'', // placeholder, host de imagenes o img locales, lo ideal es hostear las img se recomienda en public
    },

    {
        id:'03',
        name:'CAFÉ 03',
        description:'LOREM',
        price:15,
        stock:80,
        category:'ofertas',
        img:'', // no se recomienda usar porque si no hay mas palitos de la selva y si bajan la imagen no existira más
    },
    {
        id:'04',
        name:'CAFÉ 04',
        description:'LOREM',
        price:20,
        stock:40,
        category:'ofertas',
        img:'', // no se recomienda usar img directa  si no hay mas y bajan la imagen no existira más
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
