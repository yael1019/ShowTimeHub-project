from flask_sqlalchemy import SQLAlchemy 
from sqlalchemy.orm import validates 
from sqlalchemy.ext.associationproxy import association_proxy
import ipdb 

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False, unique=True)
    password = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), onupdate=db.func.now())

    watched = db.relationship('Watch', backref='user')

    def __init__(self, first_name, last_name, email, password):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.password = password

    def __repr__(self):
        return f'<User id={self.id} first_name={self.first_name} last_name={self.last_name} email={self.email} password={self.password}>'
    
    def to_dict(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "email": self.email,
            "password": self.password
        }

class Watch(db.Model):
    __tablename__ = 'watched'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), onupdate=db.func.now())

    def __init__(self, user_id):
        self.user_id = user_id

    def __repr__(self):
        return f'<Watch id={self.id} user_id={self.user_id}>'

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id
        }

# ipdb.set_trace()