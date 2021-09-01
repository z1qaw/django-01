from django.db import models


class Account(models.Model):
    name = models.CharField('Name', max_length=255)
    phone = models.CharField('Phone', max_length=20)
    email = models.CharField('Email', max_length=150, blank=True, null=True)
    create_time = models.DateTimeField('Create time', auto_now_add=True)
