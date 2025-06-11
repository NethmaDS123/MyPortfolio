"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col md:flex-col justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500"></p>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-gray-600">
          <p>Designed and built by Nethma De Silva</p>
        </div>
      </div>
    </footer>
  );
}
