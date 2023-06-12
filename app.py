from flask import Flask, request, jsonify, render_template
from .models import db, Orders 
 
 
 
app = Flask(__name__, static_url_path='/static') 
app.config["SECRET_KEY"] = "dyddhd7373djdjcnnbv0f" 
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///testing.sql" 
app.config["STRICT_SLASHES"] = False
app.config["DEBUG"] = True
db.init_app(app)
 
@app.route("/", methods=["GET"])
def index():
    return render_template("index.html")
@app.route("/add_new_order", methods=["GET", "POST"]) 
def new_order(): 
    data = request.get_json() 
    if request.method == "POST": 
        location_id = data.get("location_id") 
        date = data.get("date") 
        plan = data.get("plan") 
        quantity = data.get("quantity") 
 
        new_order = Orders(location_id=location_id, date=date, plan=plan, quantity=quantity) 
        db.session.add(new_order) 
        db.session.commit() 
         
        # Return a response indicating the success of adding the order 
        return jsonify({"message": "Order placed successfully!"})
    
if __name__ == "__main__":
    app.run()