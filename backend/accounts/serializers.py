from django.contrib.auth import authenticate
from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken

# serializer 
class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
    
    def validate(self, data):
        email = data.get('email', None)
        password = data.get('password', None)
        
        # Authenticate the user 
        user = authenticate(username=email, password=password)
        
        if user is None:
            raise serializers.ValidationError('Invalid email or password.')
        
        if not user.is_active:
            return serializers.ValidationError('User account is disabled.')
        
        return {
            'email': user.email,
            'tokens': user.tokens() # For JWT handling
        }
        