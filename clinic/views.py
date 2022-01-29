from rest_framework.viewsets import ModelViewSet
from models import Clinic, School, Student, Assessment
from serializers import ClinicSerializer, StudentSerializer, SchoolSerializer, AssessmentSerializer


class ClinicViewSet(ModelViewSet):
    queryset = Clinic.objects.all()
    serializer_class = ClinicSerializer


class SchoolViewSet(ModelViewSet):
    queryset = School.objects.all()
    serializer_class = SchoolSerializer


class StudentViewSet(ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


class AssessmentViewSet(ModelViewSet):
    queryset = Assessment.objects.all()
    serializer_class = AssessmentSerializer



