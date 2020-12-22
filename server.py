from flask import (Flask, render_template, jsonify, redirect, request)


# instantiate Flask class
app = Flask(__name__, static_folder='build',
                      template_folder='build',
                      static_url_path = '/')



# catch all
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    """Catch all URL routes that don't match specific path."""

    return render_template('index.html')

@app.route('/')
def homepage():
    """Show homepage."""

    return render_template('index.html')




if __name__ == '__main__':
    app.debug = True
    # DebugToolbarExtension(app)
    app.run(host='0.0.0.0')