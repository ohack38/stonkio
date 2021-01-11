from django.urls import path
from .views import LiveCoinView


urlpatterns = [
    path('', LiveCoinView.as_view(), name='livefeed'),
    
]