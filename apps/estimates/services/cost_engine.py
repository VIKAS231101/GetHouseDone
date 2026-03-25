def calculate_cost(area, unit, floors, location_type):
    """
    Function to estimate construction cost
    """
    # Convert sqm to sqft if needed
    if unit == "sqm":
        area = area * 10.7639

    base_price_per_sqft = 1800  # Example base rate in INR

    location_multiplier = {
        "metro": 1.2,
        "tier2": 1.0,
        "rural": 0.8
    }

    multiplier = location_multiplier.get(location_type, 1.0)

    construction_area = area * floors
    base_cost = construction_area * base_price_per_sqft * multiplier

    material_breakdown = {
        "cement": base_cost * 0.15,
        "steel": base_cost * 0.20,
        "bricks": base_cost * 0.10,
        "labor": base_cost * 0.25,
        "electrical": base_cost * 0.10,
        "plumbing": base_cost * 0.08,
        "miscellaneous": base_cost * 0.12,
    }

    total_cost = sum(material_breakdown.values())

    return base_cost, material_breakdown, total_cost
