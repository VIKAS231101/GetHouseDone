from django.db import models


class Estimate(models.Model):
    UNIT_CHOICES = [
        ('sqft', 'Square Feet'),
        ('sqm', 'Square Meter'),
    ]

    LOCATION_CHOICES = [
        ('metro', 'Metro City'),
        ('tier2', 'Tier 2 City'),
        ('rural', 'Rural Area'),
    ]

    area = models.FloatField()
    unit = models.CharField(max_length=10, choices=UNIT_CHOICES)
    floors = models.IntegerField()
    location_type = models.CharField(max_length=20, choices=LOCATION_CHOICES)

    base_cost = models.FloatField()
    material_breakdown = models.JSONField()
    total_cost = models.FloatField()

    gpt_explanation = models.TextField(blank=True, null=True)
    token_used = models.IntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Estimate #{self.id} - {self.total_cost}"
