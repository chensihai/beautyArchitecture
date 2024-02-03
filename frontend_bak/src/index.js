import React from 'react';
import ReactDOM from 'react-dom';
import FormUI from './FormUI';


var formJson = {
  "name": "formName",
  "title": "Registration form",
  "description": "simple JFG example.",
  "method": "post",
  "action": "http://leomoon.com",
  "properties": {
      "firstName": {
          "type": "input",
          "title": "First name",
          "name": "firstName",
          "value": "test",
          "required": true,
          "onChange": "console.log(this.value)"
      },
      "lastName": {
          "type": "input",
          "title": "Last name",
          "name": "lastName",
          "disabled": true
      },
      "age": {
          "type": "number",
          "title": "Age",
          "name": "age"
      },
      "bio": {
          "type": "input",
          "title": "Bio",
          "name": "bio",
          "placeholder": "Biography"
      },
      "password": {
          "type": "password",
          "title": "Password",
          "name": "password",
          "min": 3
      },
      "language": {
          "type": "select",
          "title": "Language",
          "name": "lang",
          "options": {
              "en": "English",
              "fa": "Farsi",
              "de": "German"
          }
      },
      "submit": {
          "type": "submit",
          "title": "Save Form",
          "name": "submit"
      }
  }
}

ReactDOM.render(
  <React.StrictMode>
    <FormUI formData={formJson} />
  </React.StrictMode>,
  document.getElementById('root')
);
