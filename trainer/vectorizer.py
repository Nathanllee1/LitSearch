from sklearn.feature_extraction.text import TfidfVectorizer
import pandas

import pickle
vectorizer = TfidfVectorizer(
    stop_words="english",
    ngram_range=(1, 1),
    max_df=1.0,
    min_df=0.001

)

df3 = pandas.read_csv('cleaneddata.csv')
X = vectorizer.fit_transform(df3["Quotes"])
pickle.dump(X, open( "vectorizer", 'wb'))
