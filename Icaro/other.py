import time
from datetime import datetime
from random import randint

def start(param1, param2):
    file = open('file.csv', 'w+')
    file.write('date,value\n')
    file.close()

    while True:
        file = open('file.csv', 'a')
        file.write(str(datetime.now().strftime('%Y-%m-%dT%H:%M:%S.%fZ')) + ',' + str(randint(1,100)) + '\n')
        file.close()

        time.sleep(0.5)
