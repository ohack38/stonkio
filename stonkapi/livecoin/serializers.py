from rest_framework import serializers

from .models import LiveCoin


class LiveCoinSerializer(serializers.ModelSerializer):
    
    def create(self, validated_data):
        return LiveCoin.objects.create_coin(**validated_data)

    
    class Meta:
        model = LiveCoin
        fields = '__all__'


    
