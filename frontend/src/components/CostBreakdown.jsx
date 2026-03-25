function CostBreakdown({ result }) {
  if (!result) return null;

  const materialBreakdown = result.material_breakdown || {};
  const explanation = result.gpt_explanation || "No explanation available.";

  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-4">
        Total Cost: ₹{result.total_cost || 0}
      </h2>

      <h3 className="text-xl font-semibold mb-2">Material Breakdown:</h3>
      <ul className="mb-6">
        {Object.entries(materialBreakdown).length > 0 ? (
          Object.entries(materialBreakdown).map(([key, value]) => (
            <li key={key}>
              {key}: ₹{value}
            </li>
          ))
        ) : (
          <li>No material breakdown available.</li>
        )}
      </ul>

      <h3 className="text-xl font-semibold mb-2">AI Explanation:</h3>
      <p>{explanation}</p>
    </div>
  );
}

export default CostBreakdown;