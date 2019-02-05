themes = ['family', 'identity', 'love', 'women', 'power', 'language', 'religion',
'death', 'justice', 'class', 'storytelling', 'nature', 'racism',
'education', 'survival', 'freedom', 'memory', 'coming of age',
'morality', 'war', 'fate', 'gender roles', 'growing up', 'time',
'isolation', 'guilt', 'christianity', 'friendship', 'marriage',
'community', 'tradition', 'home', 'appearances', 'heroism',
'fate and free will', 'america', 'work', 'redemption', 'perspective',
'resistance', 'corruption', 'duality', 'secrecy', 'art']

jsonlist = []
for theme in themes:
    #object = "{theme: '" + theme + "\'}, "
    object = "<li><h3 class='" + theme + "'>" + theme + "</h3></li>"
    print(object)
    jsonlist.append(object)

print(jsonlist)
