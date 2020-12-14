from django.shortcuts import render
from rest_framework import generics, status, permissions
from rest_framework.response import Response  

from .serializers import AddCoinSerializer, GetFeedSerializer, GetPrivateWatchlistSerializer, GetWatchlistSerializer
from .models import Coin


# Create your views here.
class AddCoinView(generics.CreateAPIView):

    serializer_class = AddCoinSerializer
    permissions = (permissions.IsAuthenticated,)

   
    def post(self,request):
        
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=self.request.user)

        return Response(serializer.data, status=status.HTTP_201_CREATED)



class GetFeedView(generics.ListAPIView):
    serializer_class = GetFeedSerializer
    queryset = Coin.objects.all()

    def get_queryset(self):
        return self.queryset.filter(public=True)
    #Response


class GetWatchlistView(generics.ListAPIView):
    serializer_class = GetWatchlistSerializer
    permissions = (permissions.IsAuthenticated,)

    def get_queryset(self):
        return Coin.objects.filter(user=self.request.user)
    
    #specific user


class GetPrivateWatchlistView(generics.ListAPIView):
    serializer_class = GetPrivateWatchlistSerializer
    permissions = (permissions.IsAuthenticated,)

    def get_queryset(self):
        return Coin.objects.filter(user=self.request.user)

    #permissions+=isOwner??
    #filter by user
    #user==self.request.user??