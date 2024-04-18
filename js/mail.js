const firebaseConfig = {
    apiKey: "AIzaSyDQpBaTr7WnV03TxzVVVlY6wsHRt0CKSmE",
    authDomain: "test123-230b4.firebaseapp.com",
    databaseURL: "https://test123-230b4-default-rtdb.firebaseio.com",
    projectId: "test123-230b4",
    storageBucket: "test123-230b4.appspot.com",
    messagingSenderId: "823424755501",
    appId: "1:823424755501:web:24a2f8bf26f703a4bf55a4",
    measurementId: "G-LW5X61YLJ2"
  };
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var test123DB = firebase.database().ref("test123");
  
  document.getElementById("test123").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("test123").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newtest123 = test123DB.push();
  
    newtest123.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  