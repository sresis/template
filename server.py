from flask import (Flask, render_template, jsonify, redirect, request)
import json
import datetime
# instantiate Flask class
app = Flask(__name__, static_folder='build',
                      template_folder='build',
                      static_url_path = '/')

FILE = 'src/patients.json'


# catch all
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    """Catch all URL routes that don't match specific path."""

    return render_template('index.html')

@app.route('/')
def homepage():
    """Show homepage."""

    return render_template('index.html')

@app.route('/api/form', methods=['POST'])
def handle_form():
    """Handles the form."""
    user_input = request.get_json()
    name = user_input['name']
    if name == 'Steph':
        return jsonify({'name_status': 'steph'})
    elif name == '':
        return jsonify({'name_status': ''})

    else:
        return jsonify({'name_status': 'random'})

@app.route('/api/get-patients', methods=['POST'])
def get_patients():
    """Gets patients"""
    doctor_input = request.get_json()
    name = doctor_input['name']
    # get the data
    with open(FILE) as file:
        data = json.load(file)
    # check through file
    
    # make a dict of each patient and return it
    matching_patients = []
    for row in data:
        if row['Doctor'] == name:
            matching_patients.append(row)

    return jsonify(matching_patients)
    






if __name__ == '__main__':
    app.debug = True
    # DebugToolbarExtension(app)
    app.run(host='0.0.0.0')