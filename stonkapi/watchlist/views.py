from django.shortcuts import render
from rest_framework import generics, status, permissions
from rest_framework.response import Response  

from .serializers import AddCoinSerializer
from .utils import Util
# Create your views here.
class AddCoinView(generics.CreateAPIView):

    serializer_class = AddCoinSerializer
    permissions = (permissions.IsAuthenticated,)

   
    def post(self,request):
        
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=self.request.user)

        return Response(serializer.data, status=status.HTTP_201_CREATED)




 # def perform_create(self, serializer):
    #     return serializer.save(user=self.request.user)
