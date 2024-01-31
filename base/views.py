from django.shortcuts import render
from django.http import HttpResponse
from .models import Viewer, Movie
from .form import MovieForm
import json

movies = Movie.objects.all()
unique = [x.description for x in movies if x.description not in ["hi", "new"]]
genres = []
for item in unique:
    genre = item.replace("'", '"')
    genres.append(json.loads(genre))
x = set([x for y in genres for x in y])
context = {"movies": movies[2:22], "genres": x}
m = Viewer.objects.get(id=2)


# Create your views here.
def home(request):
    return render(request, 'index.html', context)


def form(request):
    form = MovieForm()
    context = {'form': form}
    print(request.POST)
    return render(request, 'formtemplate.html', context)

def moviePage(request, pk):
    movie = None
    for i in movies:
        print(i.title, i.id)
        if pk == str(i.title).replace(" ", "-").lower():
            movie = i
    context = {"movie": movie}
    return render(request, 'moviePage.html', context)
