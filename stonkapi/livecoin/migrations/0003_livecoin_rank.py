# Generated by Django 3.1.5 on 2021-01-11 11:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('livecoin', '0002_auto_20210108_1016'),
    ]

    operations = [
        migrations.AddField(
            model_name='livecoin',
            name='rank',
            field=models.CharField(default='1', max_length=255),
            preserve_default=False,
        ),
    ]
