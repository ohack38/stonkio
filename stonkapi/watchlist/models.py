from django.db import models

import requests

from authentication.models import User
# Create your models here.

class CoinManager(models.Manager):
    def create_coin(self, coin, user, public, group_id):
        # refactor to try catch and move to other layer
        URL = 'https://api.coingecko.com/api/v3/simple/price'
        currencies = 'usd'
        payload = {
            'ids': coin,
            'vs_currencies': currencies,
            'include_last_updated_at': 'true'
            }

        r = requests.get(URL,params=payload)        
        coin_json = r.json()       
        coin_data = coin_json[coin]
        coin_object = self.model(user=user, coin=coin, price=coin_data[currencies], last_updated=coin_data['last_updated_at'],vs_currencies=currencies, public=public, group_id=group_id)
        coin_object.save()

        return coin_object


#Add coin
#If public=True, it will be visible on the feed
#if group_id=valid_group_id, it will be visible for specific groups members
class AddCoin(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    coin = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=9,decimal_places=2)
    last_updated = models.IntegerField()
    vs_currencies = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    public = models.BooleanField(default=False)
    group_id = models.IntegerField(null=True)
    
    objects = CoinManager()

   
