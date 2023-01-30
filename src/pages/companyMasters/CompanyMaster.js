import "./CompanyMasters.css";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { COMPANY_MASTERS_GRID } from "../Common/Constants/Queries/CompanyMasters";
import { AgGridReact } from "ag-grid-react";
import { Chip, makeStyles } from "@material-ui/core";
import coatOfArms from "../../assets/img/Coat_of_arms.png";
import { toast } from "react-toastify";
import AddCompanyAddressDetailsModal from "./AddCompanyAddressDetailModal";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

function CompanyMaster() {
  const classes = useStyles();
  const [companyMasters, setCompanyMasters] = useState([]);
  const [ID, setID] = useState(0);

  const [show, setShow] = useState(false);
  const [action, setAction] = useState("");
  const [showDelete, setShowDelete] = useState(false);

  const handleGetCompanyMasters = useQuery(COMPANY_MASTERS_GRID);

  const handleEdit = (data) => {
    // setAction("Create Address");
    setShow(true);
    setID(data.ID);
  };

  const gridOptions = {
    defaultColDef: {
      resizable: true,
      sortable: true,
      filter: true,
    },
    columnDefs: [
      { field: "ID", headerName: "SI.No", width: 90 },
      {
        field: "CompanyCode",
        headerName: "Company Code",
        width: 150,
      },
      {
        headerName: "Company Name",
        width: 180,
        cellStyle: {
          textAlign: "center",
        },
        cellRendererFramework: ({ data }) => {
          return (
            <>
              <div className="companyLogo">
                <img
                  src={{ coatOfArms }}
                  alt=""
                  style={{ color: "#fff", padding: "2px" }}
                />
                {data.CompanyName}
              </div>
            </>
          );
        },
      },
      {
        field: "ContactPersonName",
        headerName: "CEO Name and Address",
        width: 250,
      },
      {
        field: "ContactNumber",
        headerName: "Phone Number and Email",
        width: 250,
      },
      {
        field: "action",
        headerName: "View Details",
        width: 150,
        cellRendererFramework: ({ data }) => {
          return (
            <div>
              <Chip
                size="small"
                color="primary"
                label="Co. Address"
                onClick={() => handleEdit(data)}
                className={classes.chip}
                variant="outlined"
              />
            </div>
          );
        },
      },
    ],
  };

  const onHide = () => {
    setShow(false);
  };

  const onHideDelete = () => {
    setShowDelete(false);
  };

  useEffect(() => {
    const { loading, error, data } = handleGetCompanyMasters;

    if (error) toast("Failed", error.message);

    if (!loading && data) {
      const companyMasters = data.companyMasters.map((d) => {
        return {
          ...d,
        };
      });
      setCompanyMasters(companyMasters);
    }
  }, [handleGetCompanyMasters]);

  return (
    <>
      <div className="companyMasters">
        <div className="companyMastersTitle">
          <h1 className="userTitle">Company Masters</h1>
          <a href={"/addcompanymasters"}>
            <button className="addUserButton">Create</button>
          </a>
        </div>
        <span className="companyMasterSearch"></span>
        <br />
        <div className="ag-theme-alpine" style={{ height: 400 }}>
          <AgGridReact
            rowData={companyMasters}
            gridOptions={gridOptions}
            pagination={true}
            suppressRowClickSelection={true}
          />
        </div>
      </div>
      <AddCompanyAddressDetailsModal
        action={action}
        show={show}
        onHide={onHide}
        showDelete={showDelete}
        onHideDelete={onHideDelete}
        ID={ID}
        // handleSubmit={handleSubmit}
        // handleDelete={handleDelete}
      />
    </>
  );
}
export default CompanyMaster;
