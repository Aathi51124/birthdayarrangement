from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static
import os
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('myapp.urls')),
    #re_path(r'^.*$', TemplateView.as_view(template_name='index.html')),
] + static(settings.STATIC_URL, document_root=os.path.join(settings.BASE_DIR, 'frontend', 'build', 'static'))
