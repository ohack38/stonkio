import requests


class Util:
    @staticmethod   
    def get_price(coin):
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
    def get_last_updated(coin):
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