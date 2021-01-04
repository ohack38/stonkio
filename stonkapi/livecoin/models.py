from django.db import models
import requests

class LiveCoinManager(models.Manager):
    def create_coin(self):
        # refactor to try catch and move to other layer
        url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false'
        data = requests.get(url).json()       
        for item in data:
            coin_object = self.model(coin_id=item['id'], symbol=item['symbol'], name=item['name'], current_price=item['current_price'], market_cap=item['market_cap'], total_volume=item['total_volume'],image=item['image'])
            coin_object.save()
        return coin_object

        

        


# Create your models here.
class LiveCoin(models.Model):
    coin_id = models.CharField(max_length=255)
    symbol = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    current_price = models.CharField(max_length=255)
    market_cap = models.CharField(max_length=255)
    total_volume = models.CharField(max_length=255)
    image = models.URLField()

    objects = LiveCoinManager()