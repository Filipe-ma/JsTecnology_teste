from django.db import models

class Usuarios(models.Model):
    nome = models.CharField(max_length=20)
    email = models.EmailField(max_length=20, unique=True)
    phone = models.CharField(max_length=12, unique=True)

    def __str__(self):
        return self.nome
