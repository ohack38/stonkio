# Generated by Django 3.1.4 on 2020-12-13 19:25

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('watchlist', '0002_auto_20201207_1818'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='AddCoin',
            new_name='Coin',
        ),
    ]
