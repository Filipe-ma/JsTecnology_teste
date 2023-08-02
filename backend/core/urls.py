# core/urls.py

from django.urls import path, include
from rest_framework import routers
from core import views
from .views import UsuarioListView, exportar_usuarios_para_excel

router = routers.DefaultRouter()
router.register(r'core', views.usuarioView, 'core')

urlpatterns = [
    path('api/v1/', include(router.urls), name='usuarios-list-create'),
    path('usuarios/', UsuarioListView.as_view(), name='usuario-list'),
    path('exportar/', exportar_usuarios_para_excel, name='exportar-excel'),
]
