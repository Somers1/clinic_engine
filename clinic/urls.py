from rest_framework import routers
from django.urls import path, include
from clinic.views import *


router = routers.DefaultRouter(trailing_slash=True)
router.register(r'clinic', ClinicViewSet, basename='clinic')
router.register(r'school', SchoolViewSet, basename='school')
router.register(r'paginated-school', PaginatedSchoolViewSet, basename='paginated-school')
router.register(r'paginated-student', PaginatedStudentViewSet, basename='paginated-student')
router.register(r'student', StudentViewSet, basename='student')
router.register(r'student-note', StudentNoteViewSet, basename='student-note')
router.register(r'assessment', AssessmentViewSet, basename='assessment')
router.register(r'paginated-assessment', PaginatedAssessmentViewSet, basename='paginated-assessment')


urlpatterns = [
    path('clinic/', include((router.urls, 'clinic'), namespace='clinic_api'))
]
