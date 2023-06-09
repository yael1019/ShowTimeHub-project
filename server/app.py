from flask import Flask, request, jsonify
from flask_migrate import Migrate 
from models import db, User, Watch, Video
import os 
from flask_bcrypt import Bcrypt 
from dotenv import load_dotenv

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///development.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']= False
# ! WHAT DOES LINE 10 DO?
app.json.compact = False

migrate = Migrate(app, db)
db.init_app(app)

bcrypt = Bcrypt(app)
app.secret_key = os.getenv('SECRET_KEY')

#! HOME ROUTE
@app.get('/')
def home():
    return jsonify('Hello World')

#! USER ROUTES
@app.get('/users')
def get_users():
    users = User.query.all()
    return jsonify([user.to_dict() for user in users]), 200

@app.get('/users/<int:id>')
def get_user(id):
    user = User.query.get(id)
    return jsonify(user.to_dict()), 200

@app.post('/users')
def create_user():
    data = request.json
    password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    user = User(
        data['first_name'],
        data['last_name'],
        data['email'],
        password
    )
    db.session.add(user)
    db.session.commit()
    session['user_id'] = user.id
    return jsonify(user.to_dict()), 201

@app.delete('/users/<int:id>')
def delete_user(id):
    user = User.query.get(id)
    name = f'{user.first_name} {user.last_name}'
    db.session.delete(user)
    db.session.commit()
    return jsonify(f'{name}\'s account was deleted'), 200

#! LOGIN ROUTE
@app.post('/login')
def login():
    data = request.json
    user = User.query.where(User.email == data['email']).first()
    if user and bcrypt.check_password_hash(user.password, data['password']):
        session['user_id'] = user.id
        return jsonify(user.to_dict()), 201

#! CHECKING SESSION ROUTE
@app.get('/check_session')
def check_session():
    user_id = session['user_id']
    user = User.query.get(user_id)
    if not user:
        return {'Error': 'Not logged in'}, 401
    return jsonify(user.to_dict()), 200

#! WATCH ROUTES
@app.get('/watch')
def get_watched():
    watched = Watch.query.all()
    return jsonify([watch.to_dict() for watch in watched]), 200

#! VIDEO ROUTES
@app.get('/videos')
def get_videos():
    videos = Video.query.all()
    return jsonify([video.to_dict() for video in videos]), 200

@app.get('/videos/<int:id>')
def get_video(id):
    video = Video.query.get(id)
    return jsonify(video.to_dict()), 200

@app.get('/videos/user/<int:id>')
def get_user_videos(id):
    # print('working')
    user = User.query.get(id)
    # watch = user.watched
    videos = user.videos
    # print(watch)
    # print(videos)
    return jsonify([video.to_dict() for video in videos]), 200


if __name__ == '__main__':
    app.run(port=3001, debug=True)