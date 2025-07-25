
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('djoser.urls')),                    # Basic routes
    path('auth/', include('djoser.urls.jwt')),                # JWT routes
    path('',include("users.urls")),

]
