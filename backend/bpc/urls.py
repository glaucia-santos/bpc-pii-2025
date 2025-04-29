from django.urls import path
from .views import BeneficioList

urlpatterns = [
    path('beneficios/', BeneficioList.as_view()),
]
