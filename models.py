from flask_sqlalchemy import SQLAlchemy 
from datetime import datetime 
 
db = SQLAlchemy() 
 
class Orders(db.Model): 
    tablename = 'orders' 
 
    order_id = db.Column(db.Integer, primary_key=True, autoincrement=True, unique=True) 
    quantity = db.Column(db.Integer) 
    date = db.Column(db.Date) 
    location_id  = db.Column(db.String) 
    order_status = db.Column(db.String, default="Pending") 
    plan  = db.Column(db.String) 
    created_at = db.Column(db.DateTime, default=datetime.utcnow)