from django.contrib import admin
from .models import *


# Register your models here.

class TasksAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'completed', 'created_by',]


admin.site.register(Tasks, TasksAdmin)
