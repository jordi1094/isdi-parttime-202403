delete Array.prototype.filter

console.info('CASE filters words with length greater than 6')

function filter(array, callback){
    var filtered = []

    for(var i = 0; i < array.length; i++){
        var element = array [i]

        var matches = callback(element)

        if(matches){
        filtered[filtered.length] = element
        }
    }

    return filtered
}



var words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

var result = filter(words, function(word){ return word.length > 6});

console.debug(result);
// Expected output: Array ["exuberant", "destruction", "present"]

console.info( 'CASE filter products with price betwwen min and max')
var shop = [
    {
        brand: 'Apple',
        model: 'Macbook Pro M2',
        kind: 'computer',
        year: 2023,
        price: 2500
    },
    {
        brand: 'Apple',
        model:'Macboook Air',
        kind: 'computer',
        year: 2023,
        price:950
    },
    {
        brand:'Apple',
        model: 'iphone 15 Pro Max',
        kind:'smartphone',
        year: 2023,
        price: 1200
    },
    {
        brand: 'Asus',
        model: 'Aspire',
        kind: 'computer',
        year: 2024,
        price:600
    },
    {
        brand: 'Apple',
        model: 'Air pods',
        kind: 'headphones',
        year: 2024,
        price: 200
    },
    {
        brand: ' Dell',
        model: 'Cool Dellirius',
        kind: 'computer',
        year:2024,
        price:550
    }
]

var products = filter(shop, function(product){
    return product.price >= 500 && product.price <= 1000 && product.kind === 'computer'
})

console.debug(products)

