import json

with open('./src/sample/tags3.json','r') as f:
    j = f.read()
    d= json.loads(j)
    for tag in d:
        print(tag['tag'])