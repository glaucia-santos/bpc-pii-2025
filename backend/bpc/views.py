from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Beneficio
from .serializers import BeneficioSerializer

class BeneficioList(APIView):
    def get(self, request):
        beneficios = Beneficio.objects.all()
        serializer = BeneficioSerializer(beneficios, many=True)
        return Response(serializer.data)
