from django.urls import path
from .views import RegisterView,VerifyEmail, LoginAPIView, LogoutAPIView
from rest_framework_simplejwt.views import (
    TokenRefreshView, TokenObtainPairView
)


urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginAPIView.as_view(), name='login'),
    path('logout/', LogoutAPIView.as_view(), name='logout'),
    path('verify-email/', VerifyEmail.as_view(), name='verify-email'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),

]