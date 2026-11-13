"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

const productsData: Record<string, { title: string; price: string; description: string; image: string }> = {
  "1": {
    title: "Classic Cotton T-Shirt",
    price: "$19.99",
    description: "Comfortable 100% cotton t-shirt suitable for everyday wear.",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&q=80",
  },
  "2": {
    title: "Denim Jacket",
    price: "$49.99",
    description: "Stylish vintage wash denim jacket with button closure.",
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&q=80",
  },
  "3": {
    title: "Oversized Hoodie",
    price: "$39.99",
    description: "Cozy fleece-lined oversized hoodie with front pocket.",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&q=80",
  },
  "4": {
    title: "Slim Fit Jeans",
    price: "$35.99",
    description: "Classic blue slim fit stretch jeans for flexible comfort.",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80",
  },
};

export default function ProductDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const product = productsData[id] || {
    title: `Clothing Item ${id}`,
    price: "$25.99",
    description: `This is the description for clothing item ${id}.`,
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&q=80",
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="mb-6">
        <Link
          href="/products"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg shadow transition inline-flex items-center gap-2"
        >
          ← Back
        </Link>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6">
        <div className="h-72 bg-gray-100 rounded-lg overflow-hidden mb-6 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="object-cover h-full w-full"
          />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-1">
          {product.title}
        </h1>

        <p className="text-gray-400 text-sm mb-4">ID: {id}</p>

        <p className="text-lg font-semibold mb-4">
          Price: <span className="text-blue-600">{product.price}</span>
        </p>

        <p className="text-gray-600 mb-8 border-b pb-6">
          {product.description}
        </p>

        <button
          onClick={() => alert(`ສັ່ງຊື້ເສື້ອຜ້າ ID: ${id} ສຳເລັດ!`)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow transition"
        >
          Add to Cart / Buy Now
        </button>
      </div>
    </div>
  );
}