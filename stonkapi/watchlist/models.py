from django.db import models

from authentication.models import User
# Create your models here.

#Add coin
#If public=True, it will be visible on the feed
#if group_id=valid_group_id, it will be visible for specific groups members
class AddCoin(models.Model):
    user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    coin = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    vs_currencies = models.CharField(max_length=255, default='usd')
    last_updated = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    public = models.BooleanField(default=False, db_index=True)
    group_id = models.IntegerField(db_index=True, null=True)

    # def __str__(self):
    #     return self.username
        


