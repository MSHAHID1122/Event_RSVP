from django.shortcuts import render
from django.http import JsonResponse


def hello_world(request):
    return JsonResponse({'message':'hello world from django'})