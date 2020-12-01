from rest_framework import serializers

from .models import AddCoin
from .utils import Util


class AddCoinSerializer(serializers.ModelSerializer):
    #remember to validate user
    price = serializers.SerializerMethodField()
    last_updated = serializers.SerializerMethodField()

    #serializerMethodField
    def get_price(self,obj):
        Util.get_price(obj.coin)
        return price

    def get_last_updated(self,obj):
        Util.get_last_updated(obj.coin)
        return last_updated


    class Meta:
        model = AddCoin
        fields = ['coin', 'price', 'vs_currencies', 'last_updated', 'public', 'group_id']


    