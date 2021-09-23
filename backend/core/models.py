from django.db import models


class Subscription(models.Model):
    name = models.CharField('Name', max_length=255)
    phone = models.CharField('Phone', max_length=20)
    email = models.CharField('Email', max_length=150, blank=True, null=True)
    create_time = models.DateTimeField('Create time', auto_now_add=True)

    def __str__(self):
        return f'{self.name} - {self.email} - {self.phone}'


class CanceledSubscription(models.Model):
    email = models.CharField('Email', max_length=150)
    create_time = models.DateTimeField('Create time', auto_now_add=True)

    def __str__(self):
        return self.email
