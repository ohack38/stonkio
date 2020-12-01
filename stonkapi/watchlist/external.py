import requests

# create api calls
# return current price
# based on given id


def get_coin(id):
    URL = 'https://api.coingecko.com/api/v3/simple/price'
    payload = {
        'ids': id,
        'vs_currencies': 'usd',
        'include_last_updated_at': 'true'
        }

    r = requests.get(URL,params=payload)
    data = r.json()
    
    return data