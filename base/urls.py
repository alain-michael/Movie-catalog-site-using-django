from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('forms/', views.form, name="form"),
    path('movie/<str:pk>', views.moviePage, name="movie")
]