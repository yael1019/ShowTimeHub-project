from Flask import Flask, request, jsonify
from flask_migrate import Migrate 
from models import db
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

if __name__ == '__main__':
    app.run(port=3001, debug=True)