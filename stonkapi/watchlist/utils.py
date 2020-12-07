import requests


class Util:
    @staticmethod   
    def coin_price(obj):
        coin = obj['coin']
        URL = 'https://api.coingecko.com/api/v3/simple/price'
        vs_currencies = 'usd'

        payload = {
            'ids': coin,
            'vs_currencies': 'usd',
            }

        r = requests.get(URL,params=payload)
        data = r.json()
        price = data[coin][vs_currencies]

        return price

    @staticmethod
    def coin_last_updated(obj):
        coin = obj['coin']
        URL = 'https://api.coingecko.com/api/v3/simple/price'
        vs_currencies = 'usd'

        payload = {
            'ids': coin,
            'vs_currencies': 'usd',
            'include_last_updated_at': 'true'
            }

        r = requests.get(URL,params=payload)
        data = r.json()
        last_updated = data[coin][last_updated]
        
        return last_updated