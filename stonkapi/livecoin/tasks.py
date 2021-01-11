from celery import shared_task
from .models import LiveCoin

'''from celery.decorators import periodic_task
from celery.schedules import crontab'''
import requests 


@shared_task
def update_coin():
    url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    data = requests.get(url).json()

    for item in data:
        coin, _ = LiveCoin.objects.get_or_create(name=item['name'])
        coin.coin_id = item['id']
        coin.symbol = item['symbol']
        coin.current_price = item['current_price']
        coin.market_cap = item['market_cap']
        coin.total_volume = item['total_volume']
        coin.image = item['image']
        coin.rank = item['market_cap_rank']
        coin.save()


'''@periodic_task(crontab(minute='*/2'))
def update_coin():
    get_coin_data().delay()'''