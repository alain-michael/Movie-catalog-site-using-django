from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.contrib.auth.models import AbstractUser, User


# Create your models here.
class Movie(models.Model):
    """Model of a movie"""
    title = models.CharField(max_length=200)
    description = models.TextField(null=True, blank=True)
    images = models.TextField()
    # links
    created = models.DateField(auto_now_add=True)

    def title_to_url(self):
        return str(self.title).replace(" ", "-").lower()



class Viewer(models.Model):
    """Model of a movie"""
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    movieList = models.ManyToManyField(Movie, blank=True)


class Rating(models.Model):
    """Model of ratings of a movie by a specific user"""
    user = models.ForeignKey(Viewer, on_delete=models.CASCADE)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    rating = models.DecimalField(max_digits=2, decimal_places=1, validators=[MaxValueValidator(10, 'Choose a rating out of 10'), MinValueValidator(0, 'Choose a rating out of 10')])