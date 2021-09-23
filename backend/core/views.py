from rest_framework.decorators import api_view
from .models import Subscription, CanceledSubscription
from rest_framework import viewsets
from .serializers import SubscriptionSerializer
from .permissions import IsAdminUserOrCreateOnly
from rest_framework.response import Response


class SubscriptionViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = SubscriptionSerializer
    queryset = Subscription.objects.all()
    permission_classes = [IsAdminUserOrCreateOnly]


@api_view(['GET'])
def cancel_subscription(request, email):
    CanceledSubscription.objects.create(
        email=email,
    )
    return Response({'message': f'Вы отменили подписку для почты {email}.'})
