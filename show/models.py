from django.db import models

# Create your models here.
from django.urls import reverse

nullable = {'blank': True,
            'null': True}


class Company(models.Model):
    name = models.TextField(verbose_name='Company name')
    code = models.CharField(max_length=5, verbose_name='Stock code of company')
    profitability = models.FloatField(verbose_name='Profitability')
    sustain_level = models.IntegerField(max_length=4, verbose_name='Sustainability level')

    class Meta:
        verbose_name = 'company'
        verbose_name_plural = 'companies'

    def __str__(self):
        return f'{self.name}'

    def get_absolute_url(self):
        return reverse('post', kwargs={'post_id': self.pk})  # TODO: make the company code, not id

