/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable react/prop-types */
// PathMark: ./test/hello.jsx
import * as React from "react";

const Nine = () => <div>{9}</div>;
/**
 *
 * @param {object} props - props
 * @param {React.ReactNode} props.children - children
 * @returns {React.ReactNode} - the result
 */
function HiddenMessage({ children }) {
  const [showMessage, setShowMessage] = React.useState(false);
  const title = "Show Message";
  const finalMessage = showMessage ? children : undefined;
  return (
    <>
      <label htmlFor="toggle">{title}</label>
      <Nine />
      <input
        checked={showMessage}
        id="toggle"
        onChange={(event) => {
          setShowMessage(event.target.checked);
        }}
        type="checkbox"
      />
      {finalMessage}
    </>
  );
}

export default HiddenMessage;
// EOF
