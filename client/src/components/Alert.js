import React, { useRef } from 'react';

function Alert({ status, name }) {
  const success = status === 'success';

  const alertDiv = useRef(null);
  if (success || status === "failure")
    setTimeout(() => {
      alertDiv.current.style.display = 'none'
    }, 5000);

  return (
    <div
      ref={alertDiv}
      className="alert"
      style={{
        background: success ? 'rgb(0, 240, 0)' : 'red',
        display: status !== 'sending' && status !== 'idle'
          ? "flex"
          : "none"
      }}
    >
      <p>
        {
          success
            ? 'Your message has been delivered'
            : "Oops, something went wrong. Try checking your connection"

        }
      </p>
    </div>
  )
}

export default Alert;