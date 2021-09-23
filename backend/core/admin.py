from django.contrib import admin
from .models import CanceledSubscription, Subscription


@admin.register(Subscription)
class SubscriptionAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone')


@admin.register(CanceledSubscription)
class CanceledSubscriptionAdmin(admin.ModelAdmin):
    list_display = ('email',)
