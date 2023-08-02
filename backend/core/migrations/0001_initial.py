# Generated by Django 4.2.4 on 2023-08-01 21:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Usuarios',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=20)),
                ('email', models.EmailField(max_length=20, unique=True)),
                ('phone', models.CharField(max_length=12, unique=True)),
            ],
        ),
    ]
