// JS Goes here - ES6 supported

// Say hello
// window.addEventListener("load", function () {
//   function sendData() {
//     var XHR = new XMLHttpRequest();

//     // Bind the FormData object and the form element
//     var FD = new FormData(form);

//     const email = FD.get('fields[email]');

//     // Define what happens on successful data submission
//     XHR.addEventListener("load", function(event) {
//       alert(event.target.responseText);
//     });

//     // curl -X POST https://api.mailerlite.com/api/v2/subscribers \
// // -d '{"email":"demo@mailerlite.com", "name": "John", "fields": {"company": "MailerLite"}}' \
// // -H "Content-Type: application/json" \
// // -H "X-MailerLite-ApiKey: e57bb28020aef734b4cb7f1f0ed71e51"

//     // Define what happens in case of error
//     XHR.addEventListener("error", function(event) {
//       alert('Oops! Something went wrong.');
//     });

//     // Set up our request
//     XHR.open("POST", 'https://api.mailerlite.com/api/v2/subscribers'); // form.action

//     XHR.setRequestHeader("Content-Type", "application/json");
//     XHR.setRequestHeader("X-MailerLite-ApiKey", "e57bb28020aef734b4cb7f1f0ed71e51");

//     // The data sent is what the user provided in the form
//     XHR.send(JSON.stringify({email: 'test@test.com' }));
//   }

//   // Access the form element...
//   var form = document.getElementById("form_subscribe");

//   // ...and take over its submit event.
//   form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     sendData();
//   });
// });