import { useEffect } from "react";

function useIsOnline() {
  useEffect(() => {
    window.addEventListener("offline", () => alert("You are offline :("));
    window.addEventListener("online", () => alert("You are online :)"));
  });
}

export default useIsOnline;
