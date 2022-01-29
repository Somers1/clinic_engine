# Generated by Django 3.2.11 on 2022-01-29 13:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clinic', '0004_alter_student_gender'),
    ]

    operations = [
        migrations.CreateModel(
            name='StudentNotes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('note', models.TextField(blank=True, null=True)),
                ('note_date', models.DateTimeField(auto_now=True)),
                ('note_taker', models.CharField(blank=True, max_length=255, null=True)),
            ],
        ),
        migrations.AlterModelOptions(
            name='student',
            options={'ordering': ('name',)},
        ),
    ]
