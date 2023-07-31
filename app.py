# app.py
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/post1')
def post1():
    return render_template('post1.html')

@app.route('/post2')
def post2():
    return render_template('post2.html')

if __name__ == '__main__':
    app.run(debug=True)
