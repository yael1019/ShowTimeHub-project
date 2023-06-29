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
    videos = association_proxy('watched', 'video')

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
    watch = db.Column(db.Boolean, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    video_id = db.Column(db.Integer, db.ForeignKey('videos.id'), nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), onupdate=db.func.now())

    def __init__(self, watch, user_id, video_id):
        self.watch = watch
        self.user_id = user_id
        self.video_id = video_id

    def __repr__(self):
        return f'<Watch id={self.id} watch={self.watch} user_id={self.user_id} video_id={self.video_id}>'

    def to_dict(self):
        return {
            "id": self.id,
            "watch": self.watch,
            "user_id": self.user_id,
            "video_id": self.video_id
        }

class Video(db.Model):
    __tablename__ = 'videos'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    category = db.Column(db.String)
    year = db.Column(db.Integer)
    type = db.Column(db.String)
    rating = db.Column(db.Integer)
    description = db.Column(db.Text)
    image = db.Column(db.String)
    url = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), onupdate=db.func.now())

    watched = db.relationship('Watch', backref='video')
    users = association_proxy('watched', 'user')

    def __repr__(self):
        return f'<Video id={self.id} title={self.title}>'
    
    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "category": self.category,
            "year": self.year,
            "type": self.type,
            "rating": self.rating,
            "description": self.description,
            "image": self.image,
            "url": self.url
        }

# ipdb.set_trace()