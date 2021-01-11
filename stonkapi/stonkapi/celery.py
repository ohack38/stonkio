import os
from celery import Celery
from celery.schedules import crontab


os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'stonkapi.settings')

app = Celery('stonkapi')
app.config_from_object('django.conf:settings', namespace='CELERY')
app.autodiscover_tasks()

app.conf.beat_schedule = {
    'update-coin-every-2-minutes':{
        'task': 'livecoin.tasks.update_coin',
        'schedule': crontab(minute='*/2')
    }
}