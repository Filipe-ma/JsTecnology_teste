# core/views.py

from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Usuarios
from .serializer import UsuariosSerializer
from rest_framework.permissions import AllowAny

class UsuariosView(APIView):
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Usuarios.objects.all()

    def get(self, request):
        queryset = self.get_queryset()
        serializer = UsuariosSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = UsuariosSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
