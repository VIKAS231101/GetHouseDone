from django.urls import path
from .views import (
    EstimateCreateView,
    EstimateListView,
    EstimateDetailView,
)

urlpatterns = [
    path('create/', EstimateCreateView.as_view()),
    path('', EstimateListView.as_view()),
    path('<int:pk>/', EstimateDetailView.as_view()),
]
