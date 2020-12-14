from django.urls import path
from .views import AddCoinView, GetFeedView, GetPrivateWatchlistView, GetWatchlistView


urlpatterns = [
    path('addcoin/', AddCoinView.as_view(), name='addcoin'),
    path('feed/', GetFeedView.as_view(), name='feed'),
    path('', GetPrivateWatchlistView.as_view(), name='private'),    
    path('<int:user_id>/', GetWatchlistView.as_view(), name='user'),

    

    
]