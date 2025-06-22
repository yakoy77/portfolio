from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/contact", methods=["POST"])
def contact():
    data = request.get_json()
    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    # Bu yerda ma'lumotlarni saqlash yoki email orqali yuborish mumkin
    print(f"Ism: {name}, Email: {email}, Xabar: {message}")
    
    return jsonify({"message": "Xabar qabul qilindi!"}), 200

if __name__ == "__main__":
    app.run(debug=True, port=5000)
