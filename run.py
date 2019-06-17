from flask import Flask
from flask import render_template, request, jsonify

#from flask_restplusu import Api

import csv
import json
from sklearn.datasets import make_classification
import pickle
from nltk import sent_tokenize

from templates import app
#Load this config object for development mode
app.config.from_object('configurations.DevelopmentConfig')
app.run()

#model stuff
#clf = pickle.load(open('model', 'rb'))

testdata = {
    'theme': 'family',
    'quotes': ['Blah Blah Blah', 'Lorem ipsum']
}

app = Flask(__name__)
#api = Api(app)

@app.route('/')
def render():
    return render_template("templates/static/index.html")

@app.route('/api')
def analyze():
    data = request.get_json(force=True)
    print(data)
    return(testdata)


if __name__ == "__main__":
    app.run(port = 5001)
