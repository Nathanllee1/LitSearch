from rest_framework import serializers


class ApiSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('highlighted')