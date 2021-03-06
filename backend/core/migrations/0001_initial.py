# Generated by Django 3.2.7 on 2021-09-01 06:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Account',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='Name')),
                ('phone', models.CharField(max_length=20, verbose_name='Phone')),
                ('email', models.CharField(blank=True, max_length=150, null=True, verbose_name='Email')),
                ('create_time', models.DateTimeField(auto_now_add=True, verbose_name='Create time')),
            ],
        ),
    ]
