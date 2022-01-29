from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Clinic(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='clinic')
    address = models.CharField(max_length=255, blank=True, null=True)
    clinic_name = models.CharField(max_length=255, blank=True, null=True)


class School(models.Model):
    PRE_SCHOOL = 'pre school'
    PRIMARY_SCHOOL = 'primary school'
    HIGH_SCHOOL = 'high school'
    school_types = [
        (PRE_SCHOOL, PRE_SCHOOL.title()), (PRIMARY_SCHOOL, PRIMARY_SCHOOL.title()), (HIGH_SCHOOL, HIGH_SCHOOL.title())
    ]
    name = models.CharField(max_length=255)
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True, related_name='school')
    clinic = models.ForeignKey(Clinic, on_delete=models.CASCADE, null=True, blank=True, related_name='schools')
    contact_email = models.EmailField(blank=True, null=True)
    contact_phone = models.CharField(max_length=255, blank=True, null=True)
    contact_name = models.CharField(max_length=255, blank=True, null=True)
    address = models.CharField(max_length=255, blank=True, null=True)
    school_type = models.CharField(max_length=255, choices=school_types, blank=True, null=True)

    class Meta:
        ordering = ('name',)


class Student(models.Model):
    MALE = 'male'
    FEMALE = 'female'
    UNDEFINED = 'undefined'
    genders = [
        (MALE, MALE.title()), (FEMALE, FEMALE.title()), (UNDEFINED, UNDEFINED.title())
    ]
    school = models.ForeignKey(School, on_delete=models.CASCADE, related_name='students')
    grade = models.CharField(max_length=255, null=True, blank=True)
    name = models.CharField(max_length=255)
    date_of_birth = models.DateField(null=True, blank=True)
    school_type = models.CharField(max_length=255, choices=genders)
    diagnosis = models.CharField(max_length=255, null=True, blank=True)
    clinician_name = models.CharField(max_length=255, null=True, blank=True)
    notes = models.TextField(null=True, blank=True)


class Assessment(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='assessments')
    bot_score = models.CharField(max_length=255, null=True, blank=True)
    notes = models.TextField(null=True, blank=True)


