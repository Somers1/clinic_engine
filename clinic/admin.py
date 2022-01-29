from django.contrib import admin
from clinic.models import Clinic, School, Student, Assessment

# Register your models here.
admin.site.register(Clinic)
admin.site.register(School)
admin.site.register(Student)
admin.site.register(Assessment)