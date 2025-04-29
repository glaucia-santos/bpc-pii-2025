from django.db import models

class Beneficio(models.Model):
    estado = models.CharField(max_length=2)
    cidade = models.CharField(max_length=100)
    quantidade = models.IntegerField()
    valor_total = models.DecimalField(max_digits=12, decimal_places=2)

    def __str__(self):
        return f"{self.cidade} - {self.estado}"
