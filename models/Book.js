const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const allowedCountries = ["SPAIN", "ITALY", "USA", "GERMANY", "JAPAN", "FRANCE", "COLOMBIA", "VENEZUELA"];

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: [3, "Debe ingresar al menos 3 letras para el titulo"],
      maxLength: 40,
      trim: true,
    },
    author: {
      type: {
        name: {
          type: String,
          required: true,
          minLength: [3, "Debe ingresar al menos 3 letras para el nombre"],
          maxLength: 20,
          trim: true,
        },
        country: {
          type: String,
          required: false,
          enum: allowedCountries,
          uppercase: true,
          trim: true,
        },
        profileImage: {
          type: String,
          required: false,
        }
      },
      required: true,
    },
    pages: {
      type: Number,
      required: false,
      min: [1, "Debe ingresar un valor entre 1 y 1000"],
      max: 1000,
    },
    publisher: {
      type: {
        name: {
          type: String,
          required: true,
          minLength: [3, "Debe ingresar al menos 3 letras para el nombre"],
          maxLength: 20,
          trim: true,
        },
        country: {
          type: String,
          required: false,
          enum: allowedCountries,
          uppercase: true,
          trim: true,
        }
      },
      required: false,
    }
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);
module.exports = { Book };
