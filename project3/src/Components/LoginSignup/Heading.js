/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable object-curly-spacing */

export function Heading({ heading }) {
  return (
    <div className="text-end">
      <h2 className="mb-4 mt-2 text-primary text-center"><strong>{heading}</strong></h2>
      <hr />
    </div>
  );
}
