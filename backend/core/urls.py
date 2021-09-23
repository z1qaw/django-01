from rest_framework import routers
from .views import SubscriptionViewSet, cancel_subscription
from django.urls import path


router = routers.SimpleRouter()
router.register(r'subscriptions', SubscriptionViewSet)

urlpatterns = [
    path('cancel-subscription/<str:email>/', cancel_subscription)
    # path('cancel-subscription?email=<str:email>/', cancel_subscription)
]

urlpatterns += router.urls
