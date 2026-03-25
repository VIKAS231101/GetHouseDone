def generate_manual_explanation(structured_data):
    area = structured_data["area"]
    floors = structured_data["floors"]
    location = structured_data["location_type"]
    total_cost = structured_data["total_cost"]
    materials = structured_data["material_breakdown"]

    explanation = f"""
Construction Cost Estimation Report:

The total estimated construction cost for a {floors}-floor building 
with area {area} ({location} location category) is approximately ₹{total_cost:,.2f}.

Material Cost Distribution:
"""

    for material, cost in materials.items():
        explanation += f"\n- {material.capitalize()}: ₹{cost:,.2f}"

    explanation += """

Major Cost Drivers:
Steel and labor typically account for the highest portion of total expenses.
Location multiplier impacts final cost significantly.

Cost Optimization Suggestions:
- Consider bulk material purchasing.
- Optimize structural design to reduce steel usage.
- Evaluate alternative suppliers for cement and finishing materials.

Note:
Prices may vary depending on market fluctuations and regional conditions.
"""

    return explanation, 0  # 0 tokens since no API used