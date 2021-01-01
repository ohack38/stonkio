from rest_framework import serializers

from .models import Coin



class AddCoinSerializer(serializers.ModelSerializer):
    #remember to validate user

    class Meta:
        model = Coin
        fields = ['coin', 'public', 'group_id']


    def create(self, validated_data):
        return Coin.objects.create_coin(**validated_data)



class GetFeedSerializer(serializers.ModelSerializer):

    class Meta:
        model = Coin
        fields = '__all__'


class GetWatchlistSerializer(serializers.ModelSerializer):

    class Meta:
        model = Coin
        fields = '__all__'



class GetPrivateWatchlistSerializer(serializers.ModelSerializer):

    class Meta:
        model = Coin
        fields = '__all__'
