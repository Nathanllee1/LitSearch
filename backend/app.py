from flask import Flask
from flask import render_template, request, jsonify

#from flask_restplusu import Api

import csv
import json
from sklearn.datasets import make_classification
import pickle
from nltk import sent_tokenize


#model stuff
#clf = pickle.load(open('model', 'rb'))

testdata = {
    'theme': 'family',
    'quotes': ['Blah Blah Blah', 'Lorem ipsum']
}
app = Flask(__name__)
#api = Api(app)

@app.route('/')
def predict():
    data = request.get_json(force=True)
    print(data)
    return testdata

if __name__ == "__main__":
    app.run(port = 5001)
