## Instructions 
- Clone repository
```
$ git clone https://github.com/sresis/template.git
```

In the current project directory:
- For backend: Create a virtual environment and install requirements

```
$ virtualenv env
$ source env/bin/activate
$ pip3 install -r requirements.txt
```

- For frontend:
```
 $ npm install
```

You will need 2 terminal windows to run the app locally.
- Tab 1: Run the server in virtual environment
```
$ source env/bin/activate
$ python3 server.py
```
- Tab 2: Run the frontend
```
$ npm start
```

You can view the app on http://localhost:3000/ or http://localhost:5000/