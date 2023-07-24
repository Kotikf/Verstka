from django.shortcuts import render

def crypappy(request):
    return render(request, 'my_projects/crypappy.html')


def works(request):
    return render(request, 'main/works.html')


def smoothie(request):
    return render(request, 'my_projects/smoothie.html')


def landguru(request):
    return render(request, 'my_projects/landguru.html')