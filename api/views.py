from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.serializers import Serializer
from .serializers import *
from .models import *


# Create your views here.
@api_view(['GET'])
def task_list(request):
    tasks = Tasks.objects.all()
    serializer = TasksSerializer(tasks, many=True)
    print('called')
    return Response(serializer.data)


@api_view(['POST'])
def create_task(request):
    serializer = TasksSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response({'message': serializer.error_messages})


@api_view(['PUT'])
def update_task(request, task_id):
    task = Tasks.objects.get(id=task_id)
    serializer = TasksSerializer(instance=task, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response({'message': serializer.error_messages})


@api_view(['DELETE'])
def delete_task(request, task_id):
    task = Tasks.objects.get(id=task_id)
    serializer = TasksSerializer(task)
    task.delete()
    return Response(serializer.data)

# Todo:
#   # user -> provjera kod list, create, update, delete
#   deleted tasks
#   created_at
#   due_date
