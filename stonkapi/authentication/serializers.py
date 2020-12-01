from rest_framework import serializers
from django.contrib import auth
from rest_framework.exceptions import AuthenticationFailed

from .models import User

class RegisterSerializer(serializers.ModelSerializer):

    password = serializers.CharField(max_length=68, min_length=6, write_only=True)
    
    class Meta:
        model = User
        fields = ['email', 'username', 'password']

    def validate(self,attrs):
        email = attrs.get('email', '')
        username = attrs.get('username','')
        password = attrs.get('password','')

        email_str = str(email).split('@')[0]

        #extra validation before user gets saved
        if not username.isalnum():
            raise serializers.ValidationError('The username should contain only alphanumerics')

        if username == password:
            raise serializers.ValidationError("Username and password can't match")
        if email_str == password:
            raise serializers.ValidationError("Email and password are too close")

        return attrs

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


class EmailVerificationSerializer(serializers.ModelSerializer):
    token = serializers.CharField(max_length=555)

    class Meta:
        model = User
        fields = ['token']


class LoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=255, min_length=3)
    password = serializers.CharField(max_length=68, min_length=6, write_only=True)
    username = serializers.CharField(read_only=True)
    tokens = serializers.CharField(read_only=True)

    class Meta:
        model = User
        fields = ['email', 'password', 'username', 'tokens']

    def validate(self,attrs):
        email = attrs.get('email', '')
        password = attrs.get('password', '')

        user = auth.authenticate(email=email, password=password)

        if not user:
            raise AuthenticationFailed('Invalid credentials, try again')
        if not user.is_active:
            raise AuthenticationFailed('Account disabled, contact admin')
        
        if not user.is_verified:
            raise AuthenticationFailed('Email not verified')

        

        return{
            'email': user.email,
            'username': user.username,
            'tokens': user.tokens
        }

        
        return super().validate(attrs)
