from .models import Account
from rest_framework import viewsets
from .serializers import AccountSerializer


class AccountViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = AccountSerializer
    queryset = Account.objects.all()