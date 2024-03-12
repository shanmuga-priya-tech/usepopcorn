import { useEffect } from "react";

export function useKey(key, action) {
  //fn to  close the movie detail when esc key is pressed
  //useEffect is used becoz we manipulate the DOM which is outside of react component
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }

      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [key, action]
  );
}
