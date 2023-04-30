import { useEffect } from "react";

export default function useWatchTimeout(watch, ms, callback) {
  useEffect(() => {
    let timeOut;

    if (watch) {
      timeOut = setTimeout(callback, ms);
    }

    return () => {
      timeOut && clearInterval(timeOut);
    };
  }, [watch]);
}
