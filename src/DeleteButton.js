import React from "react";

export default props => {
  return (
    <span className="delete">
      <button
        className="delete-button"
        onClick={props.handleDelete}
        style={{ visibility: props.showDelete ? "visible" : "hidden" }}
      >
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M24 21h-17l-7-7.972 7-8.028h17v16zm-16.09-14l-5.252 6.023 5.247 5.977h14.095v-12h-14.09zm6.09 4.586l2.586-2.586 1.414 1.414-2.586 2.586 2.586 2.586-1.414 1.414-2.586-2.586-2.586 2.586-1.414-1.414 2.586-2.586-2.586-2.586 1.414-1.414 2.586 2.586z" />
        </svg>
      </button>
    </span>
  );
};
