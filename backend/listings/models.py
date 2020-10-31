from django.db import models
from djmoney.models.fields import MoneyField


class Listing(models.Model):
    price = MoneyField(max_digits=10, decimal_places=0, default_currency="PLN")
    total_surface = models.DecimalField(max_digits=10, decimal_places=2)
    land_area = models.DecimalField(max_digits=10, decimal_places=2)
