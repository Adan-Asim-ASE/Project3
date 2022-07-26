/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable object-curly-spacing */

import Button from 'react-bootstrap/Button';

export function SubmitButton({ title, validationFunction }) {
  return (
    <Button className="mt-4 mb-3" block size="md" type="submit" disabled={!validationFunction()}>
      {title}
    </Button>
  );
}
