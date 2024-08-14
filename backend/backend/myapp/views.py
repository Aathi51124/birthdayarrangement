from rest_framework import viewsets
from .models import Planner, Booking, Review, Payment, Item, User
from .serializers import PlannerSerializer, BookingSerializer, ReviewSerializer, PaymentSerializer, ItemSerializer, UserSerializer

class PlannerViewSet(viewsets.ModelViewSet):
    queryset = Planner.objects.all()
    serializer_class = PlannerSerializer

class BookingViewSet(viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer

class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer

class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer



