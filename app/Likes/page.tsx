"use client";

import { useState } from "react";
import Link from "next/link";

export default function LikesPage() {
  const [likes, setLikes] = useState<number>(0);

  return (
    <div className="max-w-xl mx-auto py-8">
      {/* ປຸ່ມກົດກັບໄປໜ້າຫຼັກ */}
      <div className="mb-6">
        <Link
          href="/"
          className="bg-gray-600 hover:bg-gray-700 text-white font-medium px-4 py-2 rounded-lg shadow transition inline-flex items-center gap-2"
        >
          ← ກັບໄປໜ້າຫຼັກ
        </Link>
      </div>

      {/* ກອບ Card ຂອງ Like */}
      <div className="bg-white border border-gray-200 rounded-lg shadow p-6 text-center">
        <h1 className="text-2xl font-bold mb-2 text-blue-600">Like</h1>
     
        
        {/* ສະແດງຈຳນວນ Like */}
        <div className="text-5xl font-extrabold text-blue-500 mb-6">{likes} ❤️</div>
        
        {/* ກຸ່ມປຸ່ມ Like ແລະ Reset */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setLikes(likes + 1)}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold shadow transition"
          >
            Like 👍
          </button>

          <button
            onClick={() => setLikes(0)}
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-full font-semibold shadow transition"
          >
            Reset 🔄
          </button>
        </div>
      </div>
    </div>
  );
}