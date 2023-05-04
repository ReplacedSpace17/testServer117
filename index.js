const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');

// Configura la credencial de Firebase
const serviceAccount = require('./life-up-a1832-firebase-adminsdk-tamaq-2765f30a7c.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://life-up-a1832-default-rtdb.firebaseio.com'
});

const app = express();
app.use(bodyParser.json());

// Ruta de ejemplo que lee los datos de Firebase Realtime Database
app.get('/datos', (req, res) => {
  const ref = admin.database().ref('/User/23362/UltimaAsistencia');
  ref.once('value', (snapshot) => {
    const data = snapshot.val();
    res.send(data);
  });
});

app.listen(3000, () => {
  console.log('El servidor web está en funcionamiento en el puerto 3000.');
});
