from app import app, bcrypt
from models import db, User, Watch
from faker import Faker 

fake = Faker()

if __name__ == '__main__':
    with app.app_context():
        User.query.delete()
        Watch.query.delete()

        print('Start Seeding!')

        users = []
        for _ in range(40):
            first = fake.first_name()
            last = fake.last_name()
            email = fake.ascii_email()
            password = bcrypt.generate_password_hash('Password123').decode('utf-8')
            user = User(
                first, 
                last,
                email,
                password
            )
            users.append(user)
        db.session.add_all(users)
        db.session.commit()

        print('Done Seeding!')
        