from django.db import models
from django.contrib.auth import get_user_model


# Create your models here.
class Task(models.Model):
    title = models.CharField(max_length=100, )
    due_date = models.DateTimeField(null=True)
    completed = models.BooleanField(default=False)
    deleted = models.BooleanField(default=False)
    created_by = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
