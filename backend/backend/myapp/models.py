from django.db import models

class Planner(models.Model):
    name = models.CharField(max_length=100)
    image = models.CharField(max_length=100,null=True,blank=True)
    description = models.TextField()
    rating = models.DecimalField(max_digits=3, decimal_places=1, default=0.0) 

    def __str__(self):
        return self.name


class Booking(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    date = models.DateField()
    details = models.TextField()
    plannerId = models.ForeignKey(Planner,on_delete=models.CASCADE)  # Adjust the field type and max_length as needed

    def __str__(self):
        return self.name

class Review(models.Model):
    id = models.AutoField(primary_key=True)  # Use AutoField for auto-incrementing primary key
    reviewer = models.CharField(max_length=100)
    rating = models.DecimalField(max_digits=2, decimal_places=1)
    comment = models.TextField()
    planner = models.ForeignKey(Planner, on_delete=models.CASCADE, related_name='reviews')

    def __str__(self):
        return f"{self.reviewer} - {self.planner.name}"

class Payment(models.Model):
    id = models.AutoField(primary_key=True)  # Use AutoField for auto-incrementing primary key
    cardNumber = models.CharField(max_length=19)
    cardExpiry = models.CharField(max_length=5)
    cardCvc = models.CharField(max_length=3)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    success = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.id} - {self.amount} - {'Success' if self.success else 'Failed'}"

class Item(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()

    def __str__(self):
        return self.name

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    password = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.name

class Admin(models.Model):
    id = models.AutoField(primary_key=True)  # Use AutoField for auto-incrementing primary key
    name = models.CharField(max_length=100, blank=True)
    email = models.EmailField()
    password = models.CharField(max_length=255)

    def __str__(self):
        return self.email  # Changed from username to email
