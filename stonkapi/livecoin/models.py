from django.db import models

class LiveCoinManager(models.Manager):
    def create_coin(self):
        # refactor to try catch and move to other layer
        url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false'
        data = requests.get(url).json()       
        for item in data:
            coin_object = self.model(coin=data['id'], current_price=data['current_price'], market_cap=data['market_cap'], image=['image'])
            coin_object.save()

        


# Create your models here.
class LiveCoin(models.Model):
    coin = models.CharField(max_length=255)
    current_price = models.DecimalField(max_digits=9,decimal_places=2)
    market_cap = models.DecimalField(max_digits=11, decimal_places=2)
    image = models.URLField()

    objects = LiveCoinManager()