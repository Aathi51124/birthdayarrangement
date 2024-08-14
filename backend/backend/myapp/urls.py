from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PlannerViewSet, BookingViewSet, ReviewViewSet, PaymentViewSet, ItemViewSet, UserViewSet

router = DefaultRouter()
router.register(r'planners', PlannerViewSet)
router.register(r'bookings', BookingViewSet)
router.register(r'reviews', ReviewViewSet)
router.register(r'payments', PaymentViewSet)
router.register(r'items', ItemViewSet)
router.register(r'users', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
