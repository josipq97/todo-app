from django.contrib import admin
from .models import *


# Register your models here.

class TaskAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'created_by', 'created_at', 'completed', 'deleted', ]


admin.site.register(Task, TaskAdmin)
