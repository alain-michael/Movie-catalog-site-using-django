# Generated by Django 5.0.1 on 2024-01-09 14:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_alter_viewer_movielist'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='viewer',
            name='movieList',
        ),
        migrations.AddField(
            model_name='viewer',
            name='movieList',
            field=models.ManyToManyField(blank=True, to='base.movie'),
        ),
    ]
