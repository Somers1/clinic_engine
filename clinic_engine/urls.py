from django.contrib import admin
from django.conf import settings
from django.urls import path, include
from django.conf.urls.static import static
from django.views.generic import RedirectView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(('clinic.urls', 'clinic'), namespace='clinic')),
    path('api/', include(('core.urls', 'core'), namespace='core')),
    path('', RedirectView.as_view(url='/ui/')),
    path('ui/', include(('frontend.urls', 'frontend'), namespace='frontend'))
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
