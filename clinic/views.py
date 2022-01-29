from rest_framework.viewsets import ModelViewSet
from clinic.models import Clinic, School, Student, Assessment
from clinic.serializers import ClinicSerializer, StudentSerializer, SchoolSerializer, AssessmentSerializer
from clinic_engine.pagination import AngularPaginator


class ClinicViewSet(ModelViewSet):
    queryset = Clinic.objects.all()
    serializer_class = ClinicSerializer


class SchoolViewSet(ModelViewSet):
    queryset = School.objects.all()
    serializer_class = SchoolSerializer
    pagination_class = AngularPaginator
    search_fields = ['name', 'address', 'contact_name', 'contact_email', 'contact_phone']
    ordering_fields = ['name', 'address', 'contact_name', 'contact_email', 'contact_phone']


class StudentViewSet(ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


class AssessmentViewSet(ModelViewSet):
    queryset = Assessment.objects.all()
    serializer_class = AssessmentSerializer



