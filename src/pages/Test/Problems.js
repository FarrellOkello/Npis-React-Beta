import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import AgGridTable from "../../components/Table/AgGridTable";

export default function Problems() {
  // const [userText, setUserText] = useState("");
  const [messageObj, setMessage] = useState({ message: "" });
  const [data, setData] = useState([]);

  const rowData = [
    {
      Asset_Type_ID: 1,
      Created_Date: "Today",
      Asset_Name: "One",
    },
    {
      Asset_Type_ID: 2,
      Created_Date: "tommorrow",
      Asset_Name: "two",
    },
  ];

  const gridOptions = {
    defaultColDef: {
      resizable: false,
      sortable: true,
      filter: true,
    },
    columnDefs: [
      {
        headerName: "Asset_Type_ID",
        field: "Asset_Type_ID",
        resizable: true,
        hide: true,
      },
      { headerName: "Asset Name", field: "Asset_Name" },
      { headerName: "Added On", field: "Created_Date" },
    ],
  };

  const fetchData = useCallback(async () => {
    const result = await axios("http://example.com/api/v1/search?query=react");
    // console.log(result);
    setData(result.data);
  }, []);

  // const handleUserKeyPress = (event) => {
  //   const { key, keyCode } = event;

  //   if (keyCode === 32 || (keyCode >= 65 && keyCode <= 90)) {
  //     setUserText(`${userText}${key} ${keyCode}`);
  //   }
  // };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  // useEffect(() => {
  //   window.addEventListener("keydown", handleUserKeyPress);
  // }, []);

  return (
    <>
      <div>
        <input
          type="text"
          value={messageObj.message}
          placeholder="kabina ko"
          onChange={(e) => {
            const newMessageObj = { message: e.target.value };
            setMessage(newMessageObj);
            // setMessage({ message: e.target.value });
          }}
        />
        <ul>
          {/* {data.hits.map((a) => {
            <li key={a.objectID}>
              <a href={a.url}>{a.title}</a>
            </li>;
          })} */}
        </ul>

        <div className="ag-theme-alpine" style={{ height: 400 }}>
          <h1>Long string</h1>
          <AgGridTable rowData={rowData} gridOptions={gridOptions} />
          <h1>Down under</h1>
        </div>
      </div>
    </>
  );
}
