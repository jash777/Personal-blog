
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

@app.route('/post3')
def post3():
    return render_template('post3.html')

@app.route('/post4')
def post4():
    return render_template('post4.html')

if __name__ == '__main__':
    app.run(debug=True, use_reloader=True,host='0.0.0.0')
