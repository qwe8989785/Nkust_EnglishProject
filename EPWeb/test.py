import os
filePath = ''
allFileList = os.listdir(filePath)
for file in allFileList:
    with open(file,'w+') as f:
        old = f.readline()
        new = old.replace('0','2',1)
        f.write(new)
        