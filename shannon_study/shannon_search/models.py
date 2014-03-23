from django.db import models

class Dictionary(models.Model):
  key = models.CharField(max_length=30)
  name = models.CharField(max_length=30)

class SearchSample(models.Model):
  key = models.CharField(max_length=30)
  name = models.CharField(max_length=30)
