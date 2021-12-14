// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/notes-db-app', { useUnifiedTopology : true, useNewUrlParser : true ,  }).then(() => {
//     console.log("Connection successfull");
//  }).catch((e) => console.log("No connection"))

import { connect } from 'mongoose';

import './config'
import { MONGODB_URI } from './config';


(async () => {
  try {
    const db = await connect(MONGODB_URI);
    console.log("DB connected to", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();

// mongoose.connect('mongodb://localhost/notes-db-app',{
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useFindAndModify: false
// })

// const connection = mongoose.connection;
// try{
//     connection.once('open', () => {
//         console.log("MongoDB database connection established successfully");
//     })
//     } catch(e) {
//     console.log(e);
//     }

// .then(db=> console.log('DB is connected'))
// .catch(err=> console.log(err))
