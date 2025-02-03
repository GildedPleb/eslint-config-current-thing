/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */

// @ts-nocheck
/* eslint-disable react/prop-types */
// PathMark: ./test/hello.jsx
import * as React from "react";

/**
 * @returns {React.ReactNode} - a React component
 */
function Nine() {
  return <div>{9}</div>;
}

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

  const eventHandler = React.useCallback((event) => {
    setShowMessage(event.target.checked);
  }, []);

  return (
    <>
      <label htmlFor="toggle">{title}</label>
      <Nine />
      <input
        checked={showMessage}
        id="toggle"
        onChange={eventHandler}
        type="checkbox"
      />
      {finalMessage}
    </>
  );
}

export default HiddenMessage;
// EOF
