import React from 'react';

const products = [
    {
        name: "Iphone 14 Pro Max",
        price: 1200,
        id: 2,
        brand: "Apple",
        img: "https://www.apple.com/v/iphone-14-pro/a/images/overview/hero/hero_static__e9b1jz0smqq_large.jpg"
    },
    {
        name: "Samsung Galaxy S23 Ultra",
        price: 1200,
        id: 3,
        brand: "Samsung",
        img: "https://images.samsung.com/is/image/samsung/p6pim/levant/sm-s918ezkgmea/gallery/levant-galaxy-s23-ultra-s918-412380-sm-s918ezkgmea-530489827?$720_576_PNG$"
    },
    {
        name: "Dyson V15 Detect Slim",
        price: 1800,
        id: 4,
        brand: "Dyson",
        img: "https://www.dyson.com/content/dam/dyson/images/products/primary/360367-01.png"
    },
    {
        name: "Iphone 17 Pro Max",
        price: 1200,
        id: 5,
        brand: "Apple",
        img: "https://www.apple.com/v/iphone-14-pro/a/images/overview/hero/hero_static__e9b1jz0smqq_large.jpg"
    },
    {
        name: "Macbook M5 Pro",
        price: 1200,
        id: 6,
        brand: "Apple",
        img: "https://www.apple.com/v/macbook-pro-14-and-16/a/images/overview/hero/hero_static__e9b1jz0smqq_large.jpg"
    },
    {
        name: "Macbook M5 Air",
        price: 1200,
        id: 7,
        brand: "Apple",
        img: "https://www.apple.com/v/macbook-air/m/images/overview/hero/hero_static__e9b1jz0smqq_large.jpg"
    },
]

function Product() {
    const handleClick = (product) => {
        alert(`${product.name} | ${product.brand} | $${product.price}`)
    }

    return (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-6 p-8  mx-auto">
            {products.map(product => (
                <div
                    key={product.id}
                    className="bg-white rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.08)] overflow-hidden cursor-pointer transition-[transform,box-shadow] duration-200 ease-in-out hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)] active:-translate-y-0.5 active:shadow-[0_6px_16px_rgba(0,0,0,0.12)] "
                    onClick={() => handleClick(product)}
                >
                    <div className="w-full  bg-[#f5f5f7] flex items-center justify-center overflow-hidden">
                        <img src={product.img} alt={product.name} />
                    </div>
                    <div className="p-4">
                        <span className="text-xs font-semibold text-[#6e6e73] uppercase tracking-[0.08em]">{product.brand}</span>
                        <h2 className="text-base font-bold text-[#1d1d1f] mt-1.5 mb-2.5 leading-snug">{product.name}</h2>
                        <p className="text-lg font-bold text-[#0071e3] m-0">${product.price}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Product