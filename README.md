
## Installation

Clone the repository
```
git clone https://github.com/ECSHackWeek/flask-altair-react-example
cd flask-altair-react-example
```

Install node/npm: https://nodejs.org/en/download/

Use npm to install frontend dependencies:
```
cd example/static
npm install
```

Install backend dependencies:
```
conda create -n example python=3.7
conda activate example
conda install flask
```

## Running example

In one terminal window start webpack:
```
npm run watch
```

In a second terminal window, start flask server:
```
conda activate example
cd example
python application.py
```
