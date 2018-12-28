from django.shortcuts import render
from rest_framework import serializers
from litsearch.classifier import classify

from rest_framework import generics
from .serializers import ApiSerializer
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def index(request):
    if request.method == 'GET':
        return render(request, 'index.html', {})

@csrf_exempt
def api(request):
    # serializer_class = ApiSerializer
    if request.method == 'POST':
        returned = classify(request.POST['text']) # request.POST['theme']
        print(returned)
        return render(request, 'index.html', {'highlight': returned})
