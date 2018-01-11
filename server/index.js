require('dotenv').config();

const express = require('express')
    , bodyParser = require('body-parser')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , massive = require('massive')
    
const { SERVER_PORT, SESSION_SECRET, AUTH_DOMAIN, AUTH_CLIENT_ID, AUTH_CLIENT_SECRET, AUTH_CALLBACK, CONNECTION_STRING } = process.env

const app = express();
app.use(bodyParser.json());
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true 
}));
app.use(passport.initialize());
app.use(passport.session());

massive(CONNECTION_STRING).then( (db) => {
    app.set('db', db);
})

passport.use(new Auth0Strategy({
    domain: AUTH_DOMAIN,
    clientID: AUTH_CLIENT_ID,
    clientSecret: AUTH_CLIENT_SECRET,
    callbackURL: AUTH_CALLBACK,
    scope: 'openid profile'
}, function(accessToken, refreshToken, extraParams, profile, done) {
    // console.log(profile);
    // done(null, profile);

    let { displayName, user_id, picture } = profile;
    const db = app.get('db');

    db.find_user([user_id]).then(function(users) {
        if (!users[0]) {
            db.create_user([
                displayName,
                'placeholder@placeholder.com',
                picture,
                user_id
            ]).then(users => {
                return done(null,user[0].id)
            })
        } else {
                return done(null,users[0].id)
        }
    })
}))

passport.serializeUser((id, done) => {
    done(null, id)
})
passport.deserializeUser((id, done) => {
    app.get('db').find_session_user([id]).then( (user) => {
        return done(null, user[0]);  
    })
})

app.get('/auth', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/private',
    failureRedirect: 'http://localhost:3000/'
}))

app.get('/auth/me', (req,res) => {
    if (!req.user) {
        res.status(404).send('User not found.');
    } else {
        res.status(200).send(req.user);
    }
})


app.get('/auth/logout', function(req, res) {
    req.logOut();
    res.redirect('http://localhost:3000/')
})

app.listen(SERVER_PORT, _ => {
    console.log(`Where can a man go to find where he is ${SERVER_PORT}`)
});