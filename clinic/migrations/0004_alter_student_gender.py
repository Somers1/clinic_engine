# Generated by Django 3.2.11 on 2022-01-29 12:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clinic', '0003_auto_20220129_1211'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='gender',
            field=models.CharField(blank=True, choices=[('male', 'Male'), ('female', 'Female'), ('undefined', 'Undefined')], max_length=255, null=True),
        ),
    ]
