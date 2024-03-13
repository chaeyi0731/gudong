from flask import Flask
from api import get_data

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/api/data', methods=['GET'])
def get_data_route():
    return get_data()

if __name__ == '__main__':
    app.run(debug=True)
