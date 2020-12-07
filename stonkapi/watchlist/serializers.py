from rest_framework import serializers

from .models import AddCoin



class AddCoinSerializer(serializers.ModelSerializer):
    #remember to validate user

    class Meta:
        model = AddCoin
        fields = ['coin', 'public', 'group_id']

    #def validate(self, attrs):

    def create(self, validated_data):
        return AddCoin.objects.create_coin(**validated_data)

    