from rest_framework import serializers
from .models import SliderImage

# serializers 
class SliderImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = SliderImage
        fields =['id', 'image', 'caption']