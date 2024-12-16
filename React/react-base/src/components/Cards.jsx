import React from 'react';
import Card from './Card';

function Cards() {

    let products = [
        {
            "id": "001",
            "name": "Wireless Headphones",
            "description": "High-quality wireless headphones with noise cancellation and 20-hour battery life.",
            "price": 89.99
        },
        {
            "id": "002",
            "name": "Smartwatch",
            "description": "A sleek smartwatch with fitness tracking, heart rate monitor, and customizable watch faces.",
            "price": 199.99
        },
        {
            "id": "003",
            "name": "Portable Charger",
            "description": "Compact portable charger with 10,000mAh capacity, perfect for on-the-go charging.",
            "price": 29.99
        },
        {
            "id": "004",
            "name": "Bluetooth Speaker",
            "description": "Waterproof Bluetooth speaker with 360-degree sound and 12-hour battery life.",
            "price": 49.99
        },
        {
            "id": "005",
            "name": "Laptop Stand",
            "description": "Adjustable laptop stand for ergonomic use, made from durable aluminum.",
            "price": 39.99
        },
        {
            "id": "006",
            "name": "Gaming Mouse",
            "description": "Ergonomic gaming mouse with customizable RGB lighting and high precision sensor.",
            "price": 59.99
        },
        {
            "id": "007",
            "name": "4K Monitor",
            "description": "27-inch 4K UHD monitor with HDR support and ultra-thin bezels.",
            "price": 399.99
        },
        {
            "id": "008",
            "name": "Mechanical Keyboard",
            "description": "RGB mechanical keyboard with customizable keys and tactile feedback.",
            "price": 79.99
        }
    ]
  return (
    <>
    <div class="container text-center">
  <div class="row row-cols-4">
    {
        products.map((product) =>(<Card key={product.id} name={product.name} description={product.description} price={product.price}/>))


    }
  </div>
</div>

     
    </>
  );
}

export default Cards;