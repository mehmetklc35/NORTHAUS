from django.urls import path
from .views import (
    home_view, CategoryListView, ProductListView, ProductDetailView,
    OrderListView, CartItemListView, RegisterView, LoginView, LogoutView
)
from rest_framework_simplejwt.views import TokenRefreshView


urlpatterns = [   
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token-refresh'),
    path('', home_view, name='home'),  # Ana sayfa için path
    path('categories/', CategoryListView.as_view(), name='category-list'),
    path('products/', ProductListView.as_view(), name='product-list'),
    path('products/<int:pk>/', ProductDetailView.as_view(), name='product-detail'),
    path('orders/', OrderListView.as_view(), name='order-list'),
    path('cart-items/', CartItemListView.as_view(), name='cart-item-list'),
]
