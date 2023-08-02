# core/urls.py

from django.urls import path
from .views import UsuariosView

urlpatterns = [
    path('api/', UsuariosView.as_view(), name='usuarios-list-create'),
]
