import { useCallback, useEffect, useState } from "react";

function Keycode() {
  const [userKey, setUserkey] = useState("");

  const handleKeyPress = useCallback(
    (event) => {
      const { key, keyCode } = event;
      console.log(key, keyCode);
      if (keyCode === 32 || (keyCode >= 65 && keyCode <= 90))
        console.log(`${userKey}${key}`);
      setUserkey(`${userKey}${key}`);
    },
    [userKey]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <>
      <div className="home">
        <h1>The shyet you are typing:</h1>
        <br />
        <blockquote>{userKey}</blockquote>
      </div>
    </>
  );
}
export default Keycode;
