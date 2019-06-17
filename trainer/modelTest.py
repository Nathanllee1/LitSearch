from sklearn.datasets import make_classification
import pickle
import nltk
from nltk import sent_tokenize
from sklearn.feature_extraction.text import TfidfVectorizer

nltk.download('punkt')

clf = pickle.load(open('model', 'rb'))
vectorizer = pickle.load(open('vectorizer', 'rb'))

modelSize = 3736

def vectorize(rawData):
    vectorizer = pickle.load(open('vectorizer', 'rb'))
    #vectorizer = TfidfVectorizer(min_df=3736)
    vectorizedData = vectorizer.transform([rawData])
    print(type(vectorizedData))
    return vectorizedData

def predict(data):
    #data = request.get_json(force=True)
    rawtext = data['text']
    theme = data['theme']

    sentences = sent_tokenize(rawtext) #returns list
    vectorModel = vectorize(theme + rawtext)
    
    print(vectorModel)
    returned = []
    results = clf.predict(vectorModel)
    print(results)
    '''
    for sentence in sentences:

        prediction = clf.predict(sentence + ' ' + theme)
        if prediction == True:
            returned.append(prediction - theme)
        else:
            pass
    return jsonify(returned)
    '''
#fake json
data = open('testdata.txt', 'r').read()

data = {
    'theme': 'freedom',
    'text': data,
}

print(predict(data))
