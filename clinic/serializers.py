from rest_framework import serializers
from clinic.models import Clinic, School, Student, Assessment, StudentNote


class ClinicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clinic
        fields = '__all__'


class SchoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = School
        fields = '__all__'


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'


class StudentNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentNote
        fields = '__all__'

    def create(self, validated_data):
        user = self.context['request'].user
        if user:
            validated_data['note_taker'] = f"{user.first_name} {user.last_name}"
        return super().create(validated_data)


class AssessmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assessment
        fields = '__all__'


class StudentSchoolSerializer(serializers.ModelSerializer):
    school = SchoolSerializer(read_only=True)

    class Meta:
        model = Student
        fields = '__all__'
