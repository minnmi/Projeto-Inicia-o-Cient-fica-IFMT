from flask import Flask, render_template, redirect, url_for, request
import pandas as pd
import other
import threading

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/file')
def file():
    return render_template('file.html', data=open("file.csv", "r").read())


@app.route('/function', methods=['GET','POST'])
def function():
    thread = threading.Thread(target=other.start, args=(request.args.get('param1'), request.args.get('param2')))
    thread.start()
    return redirect(url_for('index'))


if __name__ == '__main__':
    app.run(debug=True)
