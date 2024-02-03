import React from 'react';

const FormUI = ({ formData }) => {
  const createInputField = (key, details) => {
    switch (details.type) {
      case 'input':
      case 'number':
      case 'password':
        return (
          <input
            type={details.type}
            name={details.name}
            defaultValue={details.value}
            required={details.required}
            disabled={details.disabled}
            placeholder={details.placeholder}
            onChange={(event) => {
              // Handle the change event
              if (details.onChange) {
                // eslint-disable-next-line no-eval
                eval(details.onChange);
              }
            }}
            minLength={details.min}
          />
        );
      case 'select':
        return (
          <select name={details.name}>
            {Object.entries(details.options).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        );
      case 'submit':
        return <button type="submit">{details.title}</button>;
      default:
        return null;
    }
  };

  return (
    <form name={formData.name} title={formData.title} method={formData.method} action={formData.action}>
      <h1>{formData.title}</h1>
      <p>{formData.description}</p>
      {Object.entries(formData.properties).map(([key, details]) => (
        <div key={key}>
          <label htmlFor={details.name}>{details.title}</label>
          {createInputField(key, details)}
        </div>
      ))}
    </form>
  );
};

export default FormUI;
