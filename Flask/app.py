from flask import Flask
from flask import render_template, request, jsonify
import csv
import json
from sklearn.datasets import make_classification
import pickle
from nltk import sent_tokenize

#model stuff
clf = pickle.load(open('clf', 'rb'))


app = Flask(__name__)

@app.route('/')
def my_runs():
    return render_template("index.html")

@app.route('/api')
def predict():
    data = request.get_json(force=True)
    rawtext = data['text']
    sentences = sent_tokenize(rawtext)
    returned = []
    for sentence in sentences:
        prediction = clf.predict(sentence)
        if prediction == true:
            returned.append(prediction)
        else:
            pass
    return jsonify(returned)
if __name__ == "__main__":
    app.run(port = 5001)
