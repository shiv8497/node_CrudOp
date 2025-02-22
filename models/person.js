
import mongoose from "mongoose";
import { type } from "os";


//! Person Schema
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },

  work: {
    type: String,
    enum: ["chef", "waiter", "manager"],
    required: true,
  },
  email:{
    type: String,
    required: true,
    unique: true   // does not contain same email
  },
  address:{
    type: String,
  },
  salary : {
    type: Number,
    required: true,
  }
});
// Create person model
//! Schema se model banate hai use model ka sue kar ke jitne be database
//* operation usse perform karte hai like create , update , delete , read
// Person name ka model bana diya ab usko export karenge server mein
export const Person = mongoose.model('person' , personSchema)