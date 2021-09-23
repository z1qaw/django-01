from rest_framework.permissions import IsAdminUser, SAFE_METHODS

class IsAdminUserOrCreateOnly(IsAdminUser):
    ''' Only admin superuser can CRUD, another groups can only create'''
    def has_permission(self, request, view):
        is_admin = super().has_permission(request, view)
        return request.method == 'POST' or is_admin