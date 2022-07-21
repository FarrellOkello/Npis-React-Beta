import { useQuery } from "@apollo/client";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { COMPANY_MASTERS_GRID } from "../Common/Constants/Queries/CompanyMasters";
import "./CompanyMasters.css";

export default function CompanyMaster() {
  const [companyMasters, setCompanyMasters] = useState([]);
  // const [RowDataLoading, setRowDataLoading] = useState(false);
  const clearButtonRef = useRef(null);

  const handleGetCompanyMasters = useQuery(COMPANY_MASTERS_GRID);

  const onClear = () => {
    clearButtonRef.current.focus();
    clearButtonRef.current.value = "";
  };

  const columns = [
    { field: "ID", headerName: "No", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img src={params.row.avatar} alt="" />
            {params.row.userName}
          </div>
        );
      },
    },
    {
      field: "CompanyCode",
      headerName: "Company Code",
      width: 150,
    },
    {
      field: "CompanyName",
      headerName: "Company Name",
      width: 120,
    },
    {
      field: "ContactPersonName",
      headerName: "CEO Name and Address",
      width: 160,
    },
    {
      field: "ContactNumber",
      headerName: "Phone Number and Email",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {" "}
            <button className="userListEdit">
              <Link
                target={"/user/" + params.row.id}
                to={"/user/" + params.row.id}
                className="link"
              >
                Edit
              </Link>
            </button>
            <DeleteOutline
              className="userListDelete"
              onClick={() => {
                console.log(params.row.id);
                handleDelete(params.row.id);
              }}
            />
          </>
        );
      },
    },
  ];

  const handleDelete = (id) => {
    setCompanyMasters(companyMasters.filter((item) => item.ID !== id));
  };

  useEffect(() => {
    const { loading, /* error,  */ data } = handleGetCompanyMasters;

    // if (error) toastr.error("Failed", error.message);

    if (!loading && data) {
      //   setRowDataLoading(true);
      const companyMasters = data.companyMasters.map((d) => {
        return {
          ...d,
        };
      });
      setCompanyMasters(companyMasters);
      //   setRowDataLoading(false);
    }
  }, [handleGetCompanyMasters]);

  return (
    <div className="companyMasters">
      <div className="companyMastersTitle">Company Masters</div>
      <span className="companyMasterSearch">
        <label>Company Name </label>
        <input type="text" ref={clearButtonRef} />
        <button>Search</button>
        <button onClick={onClear}>Clear</button>
      </span>
      {/* <div className="companyMasterGridData"> */}
      <DataGrid
        rows={companyMasters}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
      {/* </div> */}
    </div>
  );
}
