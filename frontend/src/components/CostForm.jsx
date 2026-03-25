import { useState } from "react";

function CostForm({ setResult }) {
  const [area, setArea] = useState("");
  const [unit, setUnit] = useState("sqft");
  const [floors, setFloors] = useState("");
  const [cityType, setCityType] = useState("metro");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/v1/estimates/create/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            area,
            unit,
            floors,
            location_type: cityType,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.error("API Error:", data);
        return;
      }

      setResult(data);
    } catch (error) {
      console.error("Network error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-4 items-center justify-center"
    >
      <input
        type="number"
        placeholder="Area"
        value={area}
        onChange={(e) => setArea(e.target.value)}
        className="px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 w-full md:w-40"
      />

      <select
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
        className="px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 w-full md:w-32"
      >
        <option value="sqft">Sq Ft</option>
        <option value="sqm">Sq Meter</option>
      </select>

      <input
        type="number"
        placeholder="Floors"
        value={floors}
        onChange={(e) => setFloors(e.target.value)}
        className="px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 w-full md:w-32"
      />

      <select
        value={cityType}
        onChange={(e) => setCityType(e.target.value)}
        className="px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 w-full md:w-32"
      >
        <option value="metro">Metro</option>
        <option value="tier2">Tier 2</option>
        <option value="rural">Rural</option>
      </select>

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition duration-300 w-full md:w-auto"
      >
        {loading ? "Calculating..." : "Estimate Cost"}
      </button>
    </form>
  );
}

export default CostForm;