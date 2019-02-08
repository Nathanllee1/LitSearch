from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import make_classification
import numpy as np
import pandas as pd

import re

df = pd.read_csv('alldata.csv')

#select training vs test data
df['is_train'] = np.random.uniform(0, 1, len(df)) <= .80
train, test = df[df['is_train']==True], df[df['is_train']==False]

print('Number of quotes in the training data:', len(train))
print('Number of quotes in the test data:',len(test))

features = df.columns[:4]
features

y = pd.factorize(train['Boolean'])[0]

# Create a random forest Classifier. By convention, clf means 'Classifier'
clf = RandomForestClassifier(n_jobs=2, random_state=0)

# Train the Classifier to take the training features and learn how they relate
# to the training y (the species)
clf.fit(train['Cleaned'], y)
