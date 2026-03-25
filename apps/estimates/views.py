from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.response import Response
from rest_framework import status

from .models import Estimate
from .serializers import EstimateSerializer
from .services.cost_engine import calculate_cost
from .services.manual_explanation import generate_manual_explanation
# from .services.gpt_service import generate_cost_explanation

class EstimateCreateView(APIView):
    def post(self, request):
        area = request.data.get("area")
        unit = request.data.get("unit")
        floors = request.data.get("floors")
        location_type = request.data.get("location_type")

        base_cost, material_breakdown, total_cost = calculate_cost(
            float(area), unit, int(floors), location_type
        )
        structured_data = {
            "area": area,
            "floors": floors,
            "location_type": location_type,
            "base_cost": base_cost,
            "material_breakdown": material_breakdown,
            "total_cost": total_cost,
        }

        #Call GPT
        # explanation, tokens_used = generate_cost_explanation(structured_data)
        explanation, tokens_used = generate_manual_explanation(structured_data)

        estimate = Estimate.objects.create(
            area=area,
            unit=unit,
            floors=floors,
            location_type=location_type,
            base_cost=base_cost,
            material_breakdown=material_breakdown,
            total_cost=total_cost,
            gpt_explanation=explanation,
            token_used=tokens_used
        )

        serializer = EstimateSerializer(estimate)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class EstimateListView(ListAPIView):
    queryset = Estimate.objects.all().order_by("-created_at")
    serializer_class = EstimateSerializer


class EstimateDetailView(RetrieveAPIView):
    queryset = Estimate.objects.all()
    serializer_class = EstimateSerializer
