var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
  apiKey: "AIzaSyAclp5mJAST2cL0g2mLQtr6H76kNVNHaw8",
  authDomain: "fir-login-341ae.firebaseapp.com",
  projectId: "fir-login-341ae",
  storageBucket: "fir-login-341ae.appspot.com",
  messagingSenderId: "167532981027",
  appId: "1:167532981027:web:bf5e2cc15c057451b07a96",
  measurementId: "G-00DDME9Q4J"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}

