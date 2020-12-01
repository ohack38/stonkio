from django.urls import path
from .views import AddCoinView


urlpatterns = [
    path('addcoin/', AddCoinView.as_view(), name='addcoin'),
    
]