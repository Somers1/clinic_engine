# Generated by Django 3.2.11 on 2022-01-30 06:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clinic', '0009_auto_20220130_0608'),
    ]

    operations = [
        migrations.AlterField(
            model_name='assessment',
            name='mc_masters_score',
            field=models.FloatField(blank=True, null=True),
        ),
    ]
