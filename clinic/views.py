from rest_framework.viewsets import ModelViewSet
from clinic.models import Clinic, School, Student, Assessment, StudentNote
from clinic.serializers import ClinicSerializer, StudentSerializer, SchoolSerializer, AssessmentSerializer
from clinic.serializers import StudentNoteSerializer
from clinic_engine.pagination import AngularPaginator


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


class PaginatedSchoolViewSet(ModelViewSet):
    queryset = School.objects.all()
    serializer_class = SchoolSerializer
    pagination_class = AngularPaginator
    search_fields = ['name', 'address', 'contact_name', 'contact_email', 'contact_phone']
    ordering_fields = ['name', 'address', 'contact_name', 'contact_email', 'contact_phone']


class PaginatedStudentViewSet(ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    pagination_class = AngularPaginator
    search_fields = ['name']
    ordering_fields = ['name']


class StudentNotesViewSet(ModelViewSet):
    queryset = StudentNote.objects.all().order_by('note_date')
    serializer_class = StudentNoteSerializer
    pagination_class = AngularPaginator
    search_fields = ['note', 'note_date', 'note_taker']
    ordering_fields = ['note', 'note_date', 'note_taker']
    filter_fields = ['student']
