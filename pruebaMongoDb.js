const mongoose = require('mongoose');

const Product = require('./models/product.model');

mongoose.connect('mongodb://127.0.0.1:27017/tienda_online');


(async () => {
    // Crear productos 
    // const product = await Product.create({
    //     name: 'sandwichera',
    //     description: 'para quemar pan y aplanarlo',
    //     price: 34.90,
    //     stock: 16,
    //     department: 'cocina',
    //     avaible: true
    // });


    // recuper documentos

    const products = await Product.find({
        department: "cocina",
        price: { $gt: 500 }  // menor es $lt
    });
    console.log(products);

    mongoose.disconnect();


})();
