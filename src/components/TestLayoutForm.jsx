import React from "react";
import { FaPlus, FaFileImport, FaFileExport } from "react-icons/fa";

const TestLayoutForm = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-[1fr_2fr_200px]">
        {/* Kolom Pertama: Tombol */}
        <div className="flex justify-between space-x-2 md:col-span-2 lg:col-span-1">
          <button className="bg-black text-white px-4 py-3 rounded-lg flex items-center space-x-2">
            <FaPlus />
            <span>Tambah</span>
          </button>
          <div className="flex justify-end space-x-2">
            <button className="bg-gray-300 text-black px-4 py-3 rounded-lg flex items-center space-x-2">
              <FaFileImport />
              <span>Import</span>
            </button>
            <button className="bg-gray-300 text-black px-4 py-3 rounded-lg flex items-center space-x-2">
              <FaFileExport />
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* Kolom Kedua: Input Search */}
        <div className="flex items-center md:col-span-1 lg:col-span-1">
          <input type="text" placeholder="Search" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
        </div>

        {/* Kolom Ketiga: Dropdown Tahun */}
        <div className="flex items-center md:col-span-1 lg:col-span-auto">
          <select className="w-full px-4 py-3 border border-gray-300 rounded-lg">
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TestLayoutForm;
