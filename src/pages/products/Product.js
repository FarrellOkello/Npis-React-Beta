import "./products.css";
// import { DataGrid } from "@material-ui/data-grid";
// import { DeleteOutline } from "@material-ui/icons";
// import { productRows } from "../../dummydata";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import AgGridTable from "../../components/Table/AgGridTable";
// import { Card } from "react-bootstrap";
// import { /* CardHeader, */ makeStyles } from "@material-ui/core";
// import TableCardHeader from "../../components/Table/TableCardHeader";
// import { CardBody } from "../../components/Table/Card";
import { AgGridReact /* , AgGridColumn */ } from "ag-grid-react";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     justifyContent: "center",
//     flexWrap: "wrap",
//   },
//   chip: {
//     margin: theme.spacing(1),
//   },
// }));

export default function Product() {
  // const classes = useStyles();
  // const [data, setData] = useState(productRows);

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  // const columns = [
  //   { field: "id", headerName: "ID", width: 90 },
  //   {
  //     field: "name",
  //     headerName: "name",
  //     width: 200,
  //     renderCell: (params) => {
  //       return (
  //         <div className="productListUser">
  //           <img src={params.row.img} alt="" />
  //           {params.row.name}
  //         </div>
  //       );
  //     },
  //   },
  //   {
  //     field: "stock",
  //     headerName: "Stock",
  //     width: 150,
  //     editable: true,
  //   },
  //   {
  //     field: "status",
  //     headerName: "Status",
  //     width: 120,
  //   },
  //   {
  //     field: "price",
  //     headerName: "Price",
  //     width: 160,
  //   },
  //   {
  //     field: "action",
  //     headerName: "Action",
  //     width: 150,
  //     renderCell: (params) => {
  //       return (
  //         <>
  //           {" "}
  //           <button className="productListEdit">
  //             <Link
  //               target={"/products/" + params.row.id}
  //               to={"/products/" + params.row.id}
  //               className="link"
  //             >
  //               Edit
  //             </Link>
  //           </button>
  //           <DeleteOutline
  //             className="productListDelete"
  //             onClick={() => {
  //               handleDelete(params.row.id);
  //             }}
  //           />
  //         </>
  //       );
  //     },
  //   },
  // ];

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

  return (
    <div className="products">
      <div className="ag-theme-alpine" style={{ height: 400 }}>
        <AgGridReact
          rowData={rowData}
          gridOptions={gridOptions}
          pagination={true}
          // suppressRowClickSelection={true}
          // getRowStyle={(params) => {
          //   if (params.node.rowPinned === "bottom") {
          //     return { background: "#ffcc33", fontWeight: "bold" };
          //   } else {
          //     if (params.node.rowIndex % 2 === 0) {
          //       return { background: "#f2f2f2" };
          //     }
          //   }
          // }}
          // onCellValueChanged={onCellValueChanged}
          // onFirstDataRendered={(params) => {
          //   const colIds = params.columnApi
          //     .getAllDisplayedColumns()
          //     .map((col) => col.getColId());
          //   params.columnApi.autoSizeColumns(colIds);
          // }}
        >
          {/* <AgGridColumn
            headerName="AssetName"
            field="Asset_Name"
            // valueParser={AgGridNumberParser}
            // valueFormatter={cgcurrencyFormatter}
          />
          <AgGridColumn
            headerName="Created Date"
            field="Created_Date"
            // valueParser={AgGridNumberParser}
            // valueFormatter={cgcurrencyFormatter}
          /> */}
        </AgGridReact>
        {/* <AgGridTable rowData={rowData} gridOptions={gridOptions} /> */}
      </div>

      {/* <Card>
        <CardHeader title="Asset Type">
          <TableCardHeader HTittle="" HButtonText="Asset Type" />
        </CardHeader>
        <CardBody>
          <div className="ag-theme-material" style={{ height: 400 }}>
            <AgGridTable
              rowData={rowData}
              gridOptions={gridOptions}
              animateRows={true}
              rowSelection="multiple"
            />
          </div>
        </CardBody>
      </Card> */}

      {/* <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      /> */}
    </div>
  );
}
