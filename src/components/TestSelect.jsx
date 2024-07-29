import React, { useState, useMemo, useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const fetchProvinces = async () => {
  const { data } = await axios.get("http://apikab.jcamp.pt/public/api/v1/reference/provinces");
  return data;
};

const fetchRegencies = async (provinceId) => {
  const { data } = await axios.get(`http://apikab.jcamp.pt/public/api/v1/reference/regencies_of/${provinceId}`);
  return data;
};

const fetchDistricts = async (regencyId) => {
  const { data } = await axios.get(`http://apikab.jcamp.pt/public/api/v1/reference/districts_of/${regencyId}`);
  return data;
};

const fetchVillages = async (districtId) => {
  const { data } = await axios.get(`http://apikab.jcamp.pt/public/api/v1/reference/villages_of/${districtId}`);
  return data;
};

const TestSelectComponent = () => {
  const [selectedProvince, setSelectedProvince] = useState({ id: "", name: "" });
  const [selectedRegency, setSelectedRegency] = useState({ id: "", name: "" });
  const [selectedDistrict, setSelectedDistrict] = useState({ id: "", name: "" });
  const [selectedVillage, setSelectedVillage] = useState({ id: "", name: "" });

  const { data: provinces, isLoading: loadingProvinces } = useQuery("provinces", fetchProvinces);

  const {
    data: regencies,
    isLoading: loadingRegencies,
    refetch: refetchRegencies,
  } = useQuery(["regencies", selectedProvince.id], () => fetchRegencies(selectedProvince.id), { enabled: !!selectedProvince.id });

  const {
    data: districts,
    isLoading: loadingDistricts,
    refetch: refetchDistricts,
  } = useQuery(["districts", selectedRegency.id], () => fetchDistricts(selectedRegency.id), { enabled: !!selectedRegency.id });

  const {
    data: villages,
    isLoading: loadingVillages,
    refetch: refetchVillages,
  } = useQuery(["villages", selectedDistrict.id], () => fetchVillages(selectedDistrict.id), { enabled: !!selectedDistrict.id });

  useEffect(() => {
    // Load saved filters from localStorage
    const savedProvince = JSON.parse(localStorage.getItem("selectedProvince"));
    const savedRegency = JSON.parse(localStorage.getItem("selectedRegency"));
    const savedDistrict = JSON.parse(localStorage.getItem("selectedDistrict"));
    const savedVillage = JSON.parse(localStorage.getItem("selectedVillage"));


    if (savedProvince?.id) setSelectedProvince(savedProvince);
    if (savedRegency?.id) setSelectedRegency(savedRegency);
    if (savedDistrict?.id) setSelectedDistrict(savedDistrict);
    if (savedVillage?.id) setSelectedVillage(savedVillage);
  }, []);


  useEffect(() => {
    // Save filters to localStorage
    localStorage.setItem("selectedProvince", JSON.stringify(selectedProvince));
    localStorage.setItem("selectedRegency", JSON.stringify(selectedRegency));
    localStorage.setItem("selectedDistrict", JSON.stringify(selectedDistrict));
    localStorage.setItem("selectedVillage", JSON.stringify(selectedVillage));
  }, [selectedProvince, selectedRegency, selectedDistrict, selectedVillage]);

  const handleProvinceChange = (e) => {
    const selectedOption = provinces?.find((province) => Number(province.id) === Number(e.target.value));
    setSelectedProvince(selectedOption || { id: "", name: "" });
    setSelectedRegency({ id: "", name: "" });
    setSelectedDistrict({ id: "", name: "" });
    setSelectedVillage({ id: "", name: "" });

    // Trigger refetch for regencies, districts, and villages
    refetchRegencies();
    refetchDistricts();
    refetchVillages();
  };

  const handleRegencyChange = (e) => {
    const selectedOption = regencies.find((regency) => Number(regency.id) === Number(e.target.value));
    setSelectedRegency(selectedOption || { id: "", name: "" });
    setSelectedDistrict({ id: "", name: "" });
    setSelectedVillage({ id: "", name: "" });

    // Trigger refetch for districts and villages
    refetchDistricts();
    refetchVillages();
  };

  const handleDistrictChange = (e) => {
    const selectedOption = districts.find((district) => Number(district.id) === Number(e.target.value));
    setSelectedDistrict(selectedOption || { id: "", name: "" });
    setSelectedVillage({ id: "", name: "" });

    // Trigger refetch for villages
    refetchVillages();
  };

  const handleVillageChange = (e) => {
    const selectedOption = villages.find((village) => Number(village.id) === Number(e.target.value));
    setSelectedVillage(selectedOption || { id: "", name: "" });
  };

  const cards = useMemo(() => {
    const newCards = [];

    if (selectedProvince.name) {
      newCards.push({
        title: selectedProvince.name,
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui minima incidunt aspernatur ex aliquid facere nobis itaque adipisci quo libero mollitia quaerat rerum, labore, quisquam doloremque modi ducimus rem alias.",
        updatedAt: "5",
      });
    }

    if (selectedRegency.name) {
      newCards.push({
        title: selectedRegency.name,
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui minima incidunt aspernatur ex aliquid facere nobis itaque adipisci quo libero mollitia quaerat rerum, labore, quisquam doloremque modi ducimus rem alias.",
        updatedAt: "5",
      });
    }

    if (selectedDistrict.name) {
      newCards.push({
        title: selectedDistrict.name,
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui minima incidunt aspernatur ex aliquid facere nobis itaque adipisci quo libero mollitia quaerat rerum, labore, quisquam doloremque modi ducimus rem alias.",
        updatedAt: "5",
      });
    }

    if (selectedVillage.name) {
      newCards.push({
        title: selectedVillage.name,
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui minima incidunt aspernatur ex aliquid facere nobis itaque adipisci quo libero mollitia quaerat rerum, labore, quisquam doloremque modi ducimus rem alias.",
        updatedAt: "5",
      });
    }

    return newCards;
  }, [selectedProvince, selectedRegency, selectedDistrict, selectedVillage]);

  return (
    <div className="flex flex-col md:flex-row gap-10">
      <div className="w-full md:w-1/4 flex-shrink-0">
        <div className="bg-gray-100 p-6 space-y-4 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Filter</h2>
          <div>
            <label htmlFor="province" className="block text-sm font-medium text-gray-700">
              Provinsi
            </label>
            <select id="province" className="mt-1 block w-full p-2 border border-gray-300 rounded-lg" value={selectedProvince.id} onChange={handleProvinceChange}>
              <option value="">Pilih Provinsi</option>
              {!loadingProvinces ? (
                provinces?.map((province) => (
                  <option key={province.id} value={province.id}>
                    {province.name}
                  </option>
                ))
              ) : (
                <option>Loading...</option>
              )}
            </select>
          </div>

          <div>
            <label htmlFor="regency" className="block text-sm font-medium text-gray-700">
              Kab/Kota
            </label>
            <select
              id="regency"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
              value={selectedRegency.id}
              onChange={handleRegencyChange}
              disabled={!selectedProvince.id}
            >
              <option value="">Pilih Kab/Kota</option>
              {!loadingRegencies ? (
                regencies?.map((regency) => (
                  <option key={regency.id} value={regency.id}>
                    {regency.name}
                  </option>
                ))
              ) : (
                <option>Loading...</option>
              )}
            </select>
          </div>

          <div>
            <label htmlFor="district" className="block text-sm font-medium text-gray-700">
              Kecamatan
            </label>
            <select
              id="district"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
              value={selectedDistrict.id}
              onChange={handleDistrictChange}
              disabled={!selectedRegency.id}
            >
              <option value="">Pilih Kecamatan</option>
              {!loadingDistricts ? (
                districts?.map((district) => (
                  <option key={district.id} value={district.id}>
                    {district.name}
                  </option>
                ))
              ) : (
                <option>Loading...</option>
              )}
            </select>
          </div>

          <div>
            <label htmlFor="village" className="block text-sm font-medium text-gray-700">
              Desa
            </label>
            <select
              id="village"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
              value={selectedVillage.id}
              onChange={handleVillageChange}
              disabled={!selectedDistrict.id}
            >
              <option value="">Pilih Desa</option>
              {!loadingVillages ? (
                villages?.map((village) => (
                  <option key={village.id} value={village.id}>
                    {village.name}
                  </option>
                ))
              ) : (
                <option>Loading...</option>
              )}
            </select>
          </div>
        </div>
      </div>

      <div className="w-full md:w-3/4 overflow-auto flex-grow">
        <div className="grid grid-cols-1 gap-4">
          {cards?.map((card, index) => (
            <div key={index} className="bg-white p-4 border border-gray-300 rounded-lg">
              <h3 className="text-md font-medium mb-2">{card.title}</h3>
              <p className="text-gray-700 my-2">{card.content}</p>
              <p className="text-sm text-gray-500">Last updated {card.updatedAt} mins ago</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TestSelect = () => (
  <QueryClientProvider client={queryClient}>
    <div className="p-4">
      <TestSelectComponent />
    </div>
  </QueryClientProvider>
);

export default TestSelect;
