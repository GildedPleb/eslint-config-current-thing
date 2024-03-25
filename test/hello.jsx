/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable react/prop-types */
/* eslint-disable jsdoc/check-tag-names */
/* eslint-disable tsdoc/syntax */
// PathMark: ./test/hello.jsx
import * as React from "react";

/**
 *
 * @param root0 - Children
 */
function HiddenMessage({ /** @type { React.ReactNode } */ children }) {
  const [showMessage, setShowMessage] = React.useState(false);
  const title = "Show Message";
  const finalMessage = showMessage ? children : undefined;
  return (
    <>
      <label htmlFor="toggle">{title}</label>
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
