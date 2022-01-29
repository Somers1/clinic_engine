from rest_framework import routers
from django.urls import path, include
from clinic.views import ClinicViewSet, SchoolViewSet, StudentViewSet, AssessmentViewSet


router = routers.DefaultRouter(trailing_slash=True)
router.register(r'clinic', ClinicViewSet, basename='clinic')
router.register(r'school', SchoolViewSet, basename='school')
router.register(r'student', StudentViewSet, basename='student')
router.register(r'assessment', AssessmentViewSet, basename='assessment')


urlpatterns = [
    path('clinic/', include((router.urls, 'clinic'), namespace='clinic_api'))
]
