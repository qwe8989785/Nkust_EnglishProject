from django.db import models

# Create your models here.

# sentence proccess
# db


class Sentence(models.Model):
    id = models.IntegerField(primary_key=True)
    sent_level = models.CharField(max_length=2, blank=True, null=True)
    content = models.TextField()
    sources = models.CharField(max_length=25, blank=True, null=True)
    dates = models.DateField(blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'sentence'

    # method
    def next_id(self):
        return self.content
