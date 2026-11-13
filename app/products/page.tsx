"use client";

import Link from "next/link";

const products = [
  {
    id: 1,
    title: "Classic Cotton T-Shirt",
    subtitle: "Casual Wear",
    price: "$19.99",
    description: "Comfortable 100% cotton t-shirt suitable for everyday wear.",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=400&q=80",
  },
  {
    id: 2,
    title: "Denim Jacket",
    subtitle: "Outerwear",
    price: "$49.99",
    description: "Stylish vintage wash denim jacket with button closure.",
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&q=80",
  },
  {
    id: 3,
    title: "Oversized Hoodie",
    subtitle: "Streetwear",
    price: "$39.99",
    description: "Cozy fleece-lined oversized hoodie with front pocket.",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&q=80",
  },
  {
    id: 4,
    title: "Slim Fit Jeans",
    subtitle: "Denim",
    price: "$35.99",
    description: "Classic blue slim fit stretch jeans for flexible comfort.",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80",
  },
];

export default function ProductsPage() {
  return (
    <div className="max-w-6xl mx-auto py-8">
      {/* ປຸ່ມກົດກັບໄປໜ້າຫຼັກ */}
      <div className="mb-6">
        <Link
          href="/"
          className="bg-gray-600 hover:bg-gray-700 text-white font-medium px-4 py-2 rounded-lg shadow transition inline-flex items-center gap-2"
        >
          ← ກັບໄປໜ້າຫຼັກ
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-8 text-gray-900 border-b pb-4">
        All Products (Clothing Store)
      </h1>

      {/* Grid List ສິນຄ້າ */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition p-4 flex flex-col cursor-pointer block"
          >
            <div className="h-48 bg-gray-100 mb-4 rounded overflow-hidden flex items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="object-cover h-full w-full"
              />
            </div>

            <span className="text-blue-600 font-semibold text-lg hover:underline mb-1">
              {product.title}
            </span>

            <p className="text-gray-600 text-sm mb-2">{product.subtitle}</p>

            <p className="font-bold text-gray-900 mb-2">
              Price: <span className="text-blue-600">{product.price}</span>
            </p>

            <p className="text-gray-500 text-sm mt-auto">
              {product.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}