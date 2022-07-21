import React, { forwardRef, useImperativeHandle, useState } from "react";

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));

  return (
    <>
      <div>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          Button from child
        </button>
        {toggle && <p>on toggle its shows this crap</p>}
      </div>
    </>
  );
});

export default Button;
