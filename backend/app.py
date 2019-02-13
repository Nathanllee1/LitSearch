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


app = Flask(__name__)
#api = Api(app)

@app.route('/')
def predict():
    data = request.get_json(force=True)
    rawtext = data['text']
    theme = data['theme']
    sentences = sent_tokenize(rawtext)
    returned = []
    for sentence in sentences:
        prediction = clf.predict(sentence + theme)
        if prediction == true:
            returned.append(prediction - theme)
        else:
            pass
    return jsonify(returned)

if __name__ == "__main__":
    app.run(port = 5001)
