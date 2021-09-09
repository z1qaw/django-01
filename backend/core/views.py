from .models import Account
from rest_framework import viewsets
from .serializers import AccountSerializer
from res

class AccountViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = AccountSerializer
    queryset = Account.objects.all()
    permissions_classes = [IsAdminn]