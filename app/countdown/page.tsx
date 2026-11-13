"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CountdownPage() {
  const [count, setCount] = useState<number>(10);

  useEffect(() => {
    if (count <= 0) return;

    const timer = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [count]);

  return (
    <div className="max-w-xl mx-auto py-8">
  
      <div className="mb-6">
        <Link
          href="/"
          className="bg-gray-600 hover:bg-gray-700 text-white font-medium px-4 py-2 rounded-lg shadow transition inline-flex items-center gap-2"
        >
          ← ກັບໄປໜ້າຫຼັກ
        </Link>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow p-6 text-center">
        <h1 className="text-2xl font-bold mb-4 text-blue-600">ນັບຖອຍຫຼັງ (10 ຫາ 0)</h1>
        
        <div className="text-5xl font-mono font-bold text-indigo-600 my-6">
          {count > 0 ? `${count} ວິນາທີ` : "ໝົດເວລາແລ້ວ! ⏱️"}
        </div>

        <button
          onClick={() => setCount(10)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}