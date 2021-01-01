from rest_framework import serializers

from .models import LiveCoin


class LiveCoinSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = LiveCoin
        fields = '__all__'

    def create(self):
        return LiveCoin.objects.create_coin()
'''
    def update(self, instance, validated_data):
        """
        Update and return an existing `Snippet` instance, given the validated data.
        """
        instance.current_price = validated_data.get('current_price', instance.current_price)
        instance.market_cap = validated_data.get('market_cap', instance.market_cap)
       
        instance.save()
        return instance
        '''