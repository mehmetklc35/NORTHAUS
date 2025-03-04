from rest_framework import generics, viewsets, permissions
from django.http import JsonResponse
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from rest_framework import status

from .models import Category, Product, Order, CartItem, Review
from .serializers import (
    CategorySerializer, ProductSerializer, OrderSerializer,
    CartItemSerializer, ReviewSerializer, UserSerializer, RegisterSerializer, LoginSerializer
)

# Ana Sayfa View
def home_view(request):
    return JsonResponse({"message": "Northaus API Çalışıyor!"})

# Kategori View
class CategoryListView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

# Ürün View
class ProductListView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

# Sipariş View
class OrderListView(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

# Sepet View
class CartItemListView(generics.ListCreateAPIView):
    queryset = CartItem.objects.all()
    serializer_class = CartItemSerializer

# Kullanıcı Kayıt View
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]

# Kullanıcı Giriş View
class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'user': UserSerializer(user).data
            })
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Kullanıcı Çıkış View
class LogoutView(APIView):
    def post(self, request):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response({"message": "Çıkış yapıldı."}, status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response({"error": "Geçersiz token."}, status=status.HTTP_400_BAD_REQUEST)

class CartItemViewSet(viewsets.ModelViewSet):
    serializer_class = CartItemSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        """ Sadece giriş yapan kullanıcının sepetini getir """
        return CartItem.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        """ Yeni sepet öğesi eklerken kullanıcıyı otomatik olarak ayarla """
        serializer.save(user=self.request.user)

class OrderViewSet(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        """ Kullanıcının sadece kendi siparişlerini görmesini sağla """
        return Order.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        """ Yeni sipariş oluştururken kullanıcıyı otomatik olarak ayarla """
        serializer.save(user=self.request.user)
