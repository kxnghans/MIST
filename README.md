# mistpro
Command line instructions
You can also upload existing files from your computer using the instructions below.


Git global setup
git config --global user.name "kobby hanson"
git config --global user.email "khanson@uccs.edu"

Create a new repository
git clone https://gitlab.com/eas-it/mist.git
cd mist
touch README.md
git add README.md
git commit -m "add README"

Push an existing folder
cd existing_folder
git init
git remote add origin https://gitlab.com/eas-it/mist.git
git add .
git commit -m "Initial commit"

Push an existing Git repository
cd existing_repo
git remote rename origin old-origin
git remote add origin https://gitlab.com/eas-it/mist.git


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
