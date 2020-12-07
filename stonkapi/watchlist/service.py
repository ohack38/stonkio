from .models import AddCoin

class ExternalApiService(object):
    model = AddCoin

    def create_object(self, **kwargs):
        # create model object
        self.model.objects.create(**kwargs)

    def call_external_api(self):
        # returns json response from API
