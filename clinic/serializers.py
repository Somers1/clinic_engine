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


class AssessmentPaginatedSerializer(serializers.ModelSerializer):
    student = StudentSerializer(read_only=True)
    beery = serializers.SerializerMethodField()
    bot = serializers.SerializerMethodField()

    class Meta:
        model = Assessment
        fields = [
            'student', 'beery', 'bot', 'year_grade', 'report_due', 'mc_masters_score',
            'self_reg_score', 'summary', 'completed_by'
        ]

    @staticmethod
    def get_beery(assessment):
        return f'{assessment.beery_score.title()} - {assessment.beery_percentile}{get_tag(assessment.beery_percentile)}'

    @staticmethod
    def get_bot(assessment):
        return f'{assessment.bot_score.title()} - {assessment.bot_percentile}{get_tag(assessment.bot_percentile)}'


def get_tag(score):
    score_string = str(score)
    last_number = score_string[-1]
    second_last_number = score_string[-2] if len(score_string) > 1 else None
    if last_number == '1' and not second_last_number == '1':
        return 'st'
    if last_number == '2' and second_last_number != '1':
        return 'nd'
    if last_number == '3' and second_last_number != '1':
        return 'rd'
    return 'th'