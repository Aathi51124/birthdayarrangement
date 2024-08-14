from django.contrib import admin
from .models import Planner, Booking, Review, Payment, Item, User, Admin

# Register your models here.
admin.site.register(Planner)
admin.site.register(Booking)
admin.site.register(Review)
admin.site.register(Payment)
admin.site.register(Item)
admin.site.register(User)
admin.site.register(Admin)
