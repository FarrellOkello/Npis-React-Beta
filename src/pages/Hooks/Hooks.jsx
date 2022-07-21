import axios from "axios";
import {
  createContext,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import Button from "./Button";
import Child from "./Child";
import "./hooks.css";
import Login from "./Login";
import User from "./User";

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1, showText: state.showText };
    case "toggleText":
      return { showText: !state.showText, count: state.count };
    default:
      return state;
  }
};

export const appContext = createContext(null);

export default function Hooks() {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: false });
  const [username, setUsername] = useState(null);
  const [Comment, setComment] = useState("The comment just!!");
  const [data, setData] = useState("");
  const clearInputRef = useRef(null);
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {}, []);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
        setComment(response.data[0].name);
      });
    inputRef.current.value = "Changed";
  }, []);

  const onClick = () => {
    clearInputRef.current.focus();
    clearInputRef.current.value = "";
  };

  const longestEmail = (elements) => {
    let longestEmail = "";
    for (let i = 0; i < elements.length; i++) {
      let currentEmail = elements[i].email;
      if (currentEmail > longestEmail) {
        longestEmail = currentEmail;
      }
    }
    return longestEmail;
  };

  const memoLongestEmail = useMemo(() => longestEmail(data), [data]);

  const commentReturned = useCallback(
    (name) => {
      return Comment + name;
    },
    [Comment]
  );

  return (
    <>
      <div className="hooks">
        <p>
          The <b>useEffect hook</b> will pick email from fake api
        </p>
        <div>Hello {data ? data[0].email : "John doe"}</div>
        <br />
        <br />

        <p>
          This <b>useReducer hook</b> how works like useState..... But Better
        </p>
        {state.count}
        <button
          onClick={() => {
            dispatch({ type: "Increment" });
            dispatch({ type: "toggleText" });
          }}
        >
          Click Me I count and toggle text
        </button>
        {state.showText && <p>Text will show here!!</p>}
        <br />
        <br />
        <p>
          This is the <b>useRef hook</b> used to manipulate the dom object
        </p>
        <input
          type="text"
          ref={clearInputRef}
          placeholder="learn useRef hook"
        />
        <button onClick={onClick}>Clear</button>
        <br />
        <br />
        <p>
          This is the <b>useLayoutEffect hook</b> use to paint the visuals first
        </p>
        <input
          type="text"
          value="Okello"
          ref={inputRef}
          style={{ width: 100, height: 20 }}
        />
        <br />
        <br />
        <p>
          This is the <b>useImparativeHandle hook</b> used to inherit a function
          from a child component
        </p>
        <button
          onClick={() => {
            buttonRef.current.alterToggle();
          }}
        >
          Button from Parent
        </button>
        <Button ref={buttonRef} />

        <br />
        <br />
        <br />
        <p>
          This is the <b>useContext hook</b> used with contextApi use to grab
          props from main componen
        </p>
        <appContext.Provider value={{ username, setUsername }}>
          <Login />
          <User />
        </appContext.Provider>
        <br />
        <br />
        <p>
          This is the <b>useMemo hook</b> used to optimize the application
          prevent re-rendering when doing heavy calculations
          <div>
            {memoLongestEmail
              ? memoLongestEmail
              : " the api is taking its time to load stuff"}
          </div>
        </p>
        <br />
        <br />
        <p>
          This is the <b>useCallback hook</b> used to optimize the application
          works like useMemo but its wrapps a function not just the value
          <div>
            <Child returnComment={commentReturned} />
          </div>
        </p>
      </div>
    </>
  );
}
