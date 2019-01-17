from django.shortcuts import render
from rest_framework import serializers
from litsearch.classifier import classify

from rest_framework import generics
from .serializers import ApiSerializer
from django.views.decorators.csrf import csrf_exempt
themes = ['family', 'identity', 'love', 'women', 'power', 'language', 'religion',
       'death', 'justice', 'class', 'storytelling', 'nature', 'racism',
       'education', 'survival', 'memory', 'freedom', 'coming of age',
       'morality', 'war', 'fate', 'gender roles', 'growing up', 'time',
       'isolation', 'guilt', 'christianity', 'friendship', 'marriage',
       'community', 'tradition', 'home', 'heroism', 'appearances',
       'fate and free will', 'america', 'work', 'redemption', 'perspective',
       'resistance', 'duality', 'corruption', 'secrecy', 'art']

@csrf_exempt
def index(request):
    if request.method == 'GET':
        return render(request, 'index.html', {}, {'themelist': 'themes'})

@csrf_exempt
def api(request):
    # serializer_class = ApiSerializer
    if request.method == 'POST':
        returned = classify(request.POST['text']) #, request.POST['theme']

        return render(request, 'index.html', {'highlight': returned})
