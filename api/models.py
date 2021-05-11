from django.db import models
from django.contrib.auth import get_user_model


# Create your models here.
class Tasks(models.Model):
    title = models.CharField(max_length=100,)
    completed = models.BooleanField(default=False)
    created_by = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, null=True)

    class Meta:
        verbose_name = 'Tasks'
        verbose_name_plural = verbose_name
