from django.urls import path
from . import views

urlpatterns = [
    path('', views.works, name='works'),
    path('crypappy', views.crypappy, name='crypappy'),
    path('smoothie', views.smoothie, name='smoothie'),
    path('landguru', views.landguru, name='landguru')
]