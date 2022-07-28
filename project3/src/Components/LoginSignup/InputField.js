/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable object-curly-spacing */

import Form from 'react-bootstrap/Form';

// eslint-disable-next-line object-curly-newline
export function InputField({ focus, label, type, placeholder, value, onChangeFunction}) {
  return (
    <Form.Group className="mb-3">
      <Form.Label className="left-margin mb-3 mt-2"><strong>{ label }</strong></Form.Label>
      <Form.Control
        autoFocus={focus}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChangeFunction(e.target.value)}
      />
    </Form.Group>
  );
}
