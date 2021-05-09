from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import *
from .models import *


# Create your views here.
@api_view(['GET'])
def task_list(request):
    # tasks = Task.objects.filter(created_by=request.user)
    tasks = Task.objects.all()
    serializer = TaskSerializer(tasks, many=True)
    print('called')
    return Response(serializer.data)


@api_view(['POST'])
def create_task(request):
    serializer = TaskSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response({'message': 'Something went wrong!'})


@api_view(['POST'])
def update_task(request, task_id):
    task = Task.objects.get(id=task_id)
    print(request.data)
    if request.user == task.created_by:
        serializer = TaskSerializer(instance=task, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
    return Response({'message': 'Something went wrong'})


