from django.shortcuts import render
from rest_framework import generics, status, permissions
from rest_framework.response import Response  

import requests

from .models import LiveCoin
from .serializers import LiveCoinSerializer

'''
For now this view will update all cryptos to the db. 
I guess this will be run with celery
A websocket connection will be added  between the db and some other view or something donno yet..
'''
'''
consider same architecture as watchlist!!
'''
class LiveCoinView(generics.ListCreateAPIView):
    serializer_class = LiveCoinSerializer
    queryset = LiveCoin.objects.all().order_by('rank')

    def post(self,request):
        
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    


    
    