
import random


def classify(text):
    splittext = text.split()

    highlighted = []

    #replaced with classifier

    for sentences in splittext:
        test = random.randint(0, 5)
        if test == 0:
            highlighted.append(sentences)
    return highlighted
