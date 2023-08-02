from django.shortcuts import render
from rest_framework import viewsets
from .serializer import UsuarioSerializer
from .models import Usuario
from django.views.generic import ListView
from django.http import HttpResponse
from openpyxl import Workbook
from .models import Usuario

class usuarioView(viewsets.ModelViewSet):
    serializer_class = UsuarioSerializer
    queryset = Usuario.objects.all()

class UsuarioListView(ListView):
    model = Usuario
    template_name = 'excell.html'
    context_object_name = 'usuarios'

def exportar_usuarios_para_excel(request):
    usuarios = Usuario.objects.all()

    workbook = Workbook()
    planilha = workbook.active
    planilha['A1'] = 'ID'
    planilha['B1'] = 'Nome'
    planilha['C1'] = 'Email'
    planilha['D1'] = 'Telefone'
    planilha['E1'] = 'Língua'

    for idx, usuario in enumerate(usuarios, start=2):
        planilha[f'A{idx}'] = usuario.id
        planilha[f'B{idx}'] = usuario.nome
        planilha[f'C{idx}'] = usuario.email
        planilha[f'D{idx}'] = usuario.phone
        planilha[f'E{idx}'] = usuario.lingua

    caminho_arquivo = 'usuarios.xlsx'
    workbook.save(caminho_arquivo)

    with open(caminho_arquivo, 'rb') as file:
        response = HttpResponse(file.read(), content_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
        response['Content-Disposition'] = f"attachment; filename={caminho_arquivo}"
        return response