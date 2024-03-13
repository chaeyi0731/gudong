from flask import jsonify


def get_data():
    data = {'name': 'John', 'age': 30, 'city': 'New York'}
    return jsonify(data)