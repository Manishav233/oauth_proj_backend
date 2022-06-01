const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_ID = "1864906545-5o4jq9bv7igfsjr8otlr90ob089faf23.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    
  },
  function(accessToken, refreshToken, profile, done) {
  done(null,profile)
    
    // const user={
    // username:profile.displayName,
    // avatar:profile.photos[0],
    // };
    // user.model
    
    // user.save
     }
));
    
     // use this when we have db in mongodb
     
    // function(accessToken, refreshToken, profile, cb) {
    //     User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //       return cb(err, user);
    //     }); 
    
    
    //when usimg sessions we serialize and deserialize user
    passport.serializeUser((user,done)=>{
        done(null,user)
    });

    passport.deserializeUser((user,done)=>{
        done(null,user)
    });
    
    