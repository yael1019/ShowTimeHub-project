from app import app, bcrypt
from models import db
from faker import Faker 

fake = Faker()

if __name__ == '__main__':
    with app.app_context():
        pass 