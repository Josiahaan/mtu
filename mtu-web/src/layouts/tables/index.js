// @mui material components
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";
import Select from "@mui/material/Select";
import TablePagination from "@mui/material/TablePagination";
import SoftPagination from "components/SoftPagination";

// Data
import inventoryTableData from "layouts/tables/data/inventoryTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import afterSalesTableData from "./data/afterSalesTableData";
import { Button } from "@mui/material";
import button from "assets/theme/components/button";
import Icon from "@mui/material/Icon";
import SoftButton from "components/SoftButton";
import FadeModal from "components/MtuModal";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Input from "@mui/material/Input";
import Modal from "@mui/material/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Stack from "@mui/material/Stack";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import SoftInput from "components/SoftInput";
import useMediaQuery from "@mui/material/useMediaQuery";
import styled from "styled-components";
import { position } from "stylis";
import { addItemAction } from "store/actions/item";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as XLSX from "xlsx";

function Tables() {
  const CustomTextarea = styled.textarea`
    width: 400px;
    height: 150px;
    border: 2px solid #c0c0c0;
    border-radius: 8px;
    outline: none;
    resize: vertical;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    font-family: Arial, sans-serif;

    &:focus {
      border-color: #87ceeb; /* Warna biru saat focus */
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
      outline: none; /* Hilangkan outline bawaan browser */
    }
  `;
  const theme = useTheme();
  const { columns, rows } = inventoryTableData();
  const { columns: prCols, rows: prRows } = projectsTableData;
  const { columns: asCols, rows: asRows } = afterSalesTableData();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchItemQuery, setSearchItemQuery] = useState("");
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [menu, setMenu] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const [page2, setPage2] = useState(0);
  const [rowsPerPage2, setRowsPerPage2] = useState(8);
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const role = localStorage.getItem("role");
  const adminAccess = role === "Super Admin" || role === "Admin";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [inputData, setInputData] = useState({
    name: "",
    purchaseDate: "",
    productionYear: "",
    unitCode: "",
    status: "",
    type: "",
    warrantyExpired: "",
    description: "",
    serialNumber: "",
    assignedFor: "",
  });

  const inputHandler = (e) => {
    const { value, name } = e.target;
    const newInput = {
      ...inputData,
    };
    newInput[name] = value;
    setInputData(newInput);
  };

  const addHandler = (e) => {
    e.preventDefault();
    dispatch(addItemAction(inputData))
      .then((_) => {
        Swal.fire({
          icon: "success",
          iconColor: "#57240f",
          title: "Add Item Success!",
          color: "#080504",
          background: "#ebd7bb",
          confirmButtonColor: "#a35831",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          iconColor: "#57240f",
          title: "Error!",
          text: error.response.data.message,
          color: "#080504",
          background: "#ebd7bb",
          confirmButtonColor: "#a35831",
        });
      });
    handleClose();
  };

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);
  const renderMenu = (
    <Menu
      id="simple-menu"
      anchorEl={menu}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(menu)}
      onClose={closeMenu}
    >
      <MenuItem onClick={closeMenu}>Action</MenuItem>
      <MenuItem onClick={closeMenu}>Another action</MenuItem>
      <MenuItem onClick={closeMenu}>Something else</MenuItem>
    </Menu>
  );

  // const [openModal, setOpenModal] = useState(true);

  const filteredRows = asRows.filter(
    (row) =>
      row["unit code"]?.props?.children?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row["serial number"]?.props?.children?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredInventoryRows = rows.filter(
    (row) =>
      row["item"]?.props?.children?.toLowerCase().includes(searchItemQuery.toLowerCase()) ||
      row["type"]?.props?.children?.toLowerCase().includes(searchItemQuery.toLowerCase()) ||
      row["unit code"]?.props?.children?.toLowerCase().includes(searchItemQuery.toLowerCase()) ||
      row["serial number"]?.props?.children?.toLowerCase().includes(searchItemQuery.toLowerCase())
  );

  const paginatedRows = filteredInventoryRows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const paginatedRows2 = filteredRows.slice(
    page2 * rowsPerPage2,
    page2 * rowsPerPage2 + rowsPerPage2
  );


  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handlePageChange2 = (newPage) => {
    setPage2(newPage);
  };

  // const handleRowsPerPageChange = (event) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      jsonData.forEach((item) => {
        const itemData = {
          name: item["Name"],
          purchaseDate: item["Purchase Date"],
          productionYear: item["Production Year"],
          unitCode: item["Unit Code"],
          status: item["Status"],
          type: item["Type"],
          warrantyExpired: item["Warranty Expired"],
          description: item["Description"],
          serialNumber: item["Serial Number"],
          assignedFor: item["Assigned For"],
        };

        dispatch(addItemAction(itemData))
          .then(() => {
            Swal.fire({
              icon: "success",
              iconColor: "#57240f",
              title: "Import Success!",
              color: "#080504",
              background: "#ebd7bb",
              confirmButtonColor: "#a35831",
            });
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              iconColor: "#57240f",
              title: "Error!",
              text: error.response ? error.response.data.message : "Import failed",
              color: "#080504",
              background: "#ebd7bb",
              confirmButtonColor: "#a35831",
            });
          });
      });
    };

    reader.readAsArrayBuffer(file);
  };

  const handleExportExcel = () => {
    const headers = [
      { Name: "", "Purchase Date": "", "Production Year": "", "Unit Code": "", "Status": "", "Type": "", "Warranty Expired": "", "Description": "", "Serial Number": "", "Assigned For": "" }
    ];
  
    const ws = XLSX.utils.json_to_sheet(headers);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Template");
  
    XLSX.writeFile(wb, "Template.xlsx");
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={3}
              sx={{ zIndex: "auto" }}
            >
              <SoftTypography variant="h6">Inventory Items</SoftTypography>
              {/* <Button
                variant="outlined"
                color="primary"
                startIcon={<Icon sx={{ color: "blue" }}>add_circle</Icon>}
                sx={{ color: "silver" }}
                >
                Add
                </Button> */}
              <SoftBox>
                <SoftInput
                  type="text"
                  placeholder="Search Item"
                  value={searchItemQuery}
                  onChange={(e) => setSearchItemQuery(e.target.value)}
                  icon={{ component: "search", direction: "right" }}
                  // fullWidth
                />
              </SoftBox>
              {adminAccess && (
                <>
                  <SoftButton
                    color="info"
                    size="medium"
                    startIcon={<Icon sx={{ color: "black" }}>file_download</Icon>}
                    onClick={handleExportExcel}
                  >
                    Export Template
                  </SoftButton>
                  <SoftButton
                    color="info"
                    size="medium"
                    startIcon={<Icon sx={{ color: "black" }}>file_upload</Icon>}
                    component="label"
                  >
                    Import Excel
                    <input type="file" accept=".xlsx, .xls" hidden onChange={handleFileUpload} />
                  </SoftButton>
                  <SoftButton
                    color="info"
                    size="medium"
                    startIcon={<Icon sx={{ color: "black" }}>add_circle</Icon>}
                    onClick={handleClickOpen}
                  >
                    add item
                  </SoftButton>
                </>
              )}
              <Dialog
                open={open}
                maxWidth="sm"
                fullWidth={true}
                fullScreen={fullScreen}
                onSubmit={addHandler}
                onClose={handleClose}
                PaperProps={{
                  component: "form",
                }}
              >
                <DialogTitle>Add Item</DialogTitle>
                <SoftBox component="form" role="form" p={1}>
                  <SoftBox mb={2} ml={2} mr={2}>
                    <SoftBox mb={1} ml={0.5}>
                      <SoftTypography component="label" variant="caption" fontWeight="bold">
                        Item Name
                      </SoftTypography>
                    </SoftBox>
                    <SoftInput
                      value={inputData.name}
                      onChange={inputHandler}
                      name="name"
                      type="text"
                      placeholder="Item Name"
                    />
                  </SoftBox>
                  <SoftBox mb={2} ml={2} mr={2}>
                    <SoftBox mb={1} ml={0.5}>
                      <SoftTypography component="label" variant="caption" fontWeight="bold">
                        Type
                      </SoftTypography>
                    </SoftBox>
                    <SoftInput
                      value={inputData.type}
                      onChange={inputHandler}
                      name="type"
                      type="text"
                      placeholder="Laptop / Spare Part / Unit"
                    />
                  </SoftBox>
                  <SoftBox mb={2} ml={2} mr={2}>
                    <SoftBox mb={1} ml={0.5}>
                      <SoftTypography component="label" variant="caption" fontWeight="bold">
                        Unit Code
                      </SoftTypography>
                    </SoftBox>
                    <SoftInput
                      value={inputData.unitCode}
                      onChange={inputHandler}
                      name="unitCode"
                      type="text"
                      placeholder="Unit Code"
                    />
                  </SoftBox>
                  <SoftBox mb={2} ml={2} mr={2}>
                    <SoftBox mb={1} ml={0.5}>
                      <SoftTypography component="label" variant="caption" fontWeight="bold">
                        Serial Number / SN
                      </SoftTypography>
                    </SoftBox>
                    <SoftInput
                      value={inputData.serialNumber}
                      onChange={inputHandler}
                      name="serialNumber"
                      type="text"
                      placeholder="Serial Number"
                    />
                  </SoftBox>
                  <SoftBox mb={2} ml={2} mr={2}>
                    <SoftBox mb={1} ml={0.5}>
                      <SoftTypography component="label" variant="caption" fontWeight="bold">
                        Status (option)
                      </SoftTypography>
                    </SoftBox>
                    <Select
                      value={inputData.status}
                      fullWidth
                      displayEmpty
                      inputProps={{ "aria-label": "Status" }}
                      name="status"
                      onChange={inputHandler}
                      placeholder="Select"
                    >
                      <MenuItem value="ready">Ready</MenuItem>
                      <MenuItem value="not ready">Not Ready</MenuItem>
                    </Select>
                  </SoftBox>
                  <SoftBox mb={2} ml={2} mr={2}>
                    <SoftBox mb={1} ml={0.5}>
                      <SoftTypography component="label" variant="caption" fontWeight="bold">
                        Purchase Date
                      </SoftTypography>
                    </SoftBox>
                    <SoftInput
                      value={inputData.purchaseDate}
                      onChange={inputHandler}
                      name="purchaseDate"
                      type="date"
                      placeholder="Purchase Date"
                    />
                  </SoftBox>
                  <SoftBox mb={2} ml={2} mr={2}>
                    <SoftBox mb={1} ml={0.5}>
                      <SoftTypography component="label" variant="caption" fontWeight="bold">
                        Production Year
                      </SoftTypography>
                    </SoftBox>
                    <SoftInput
                      value={inputData.productionYear}
                      onChange={inputHandler}
                      name="productionYear"
                      type="date"
                      placeholder="Production Year"
                    />
                  </SoftBox>
                  <SoftBox mb={2} ml={2} mr={2}>
                    <SoftBox mb={1} ml={0.5}>
                      <SoftTypography component="label" variant="caption" fontWeight="bold">
                        Warranty Expired
                      </SoftTypography>
                    </SoftBox>
                    <SoftInput
                      value={inputData.warrantyExpired}
                      onChange={inputHandler}
                      name="warrantyExpired"
                      type="text"
                      placeholder="Warranty Expired"
                    />
                  </SoftBox>
                  <SoftBox mb={2} ml={2} mr={2}>
                    <SoftBox mb={1} ml={0.5}>
                      <SoftTypography component="label" variant="caption" fontWeight="bold">
                        Description
                      </SoftTypography>
                    </SoftBox>
                    <SoftInput
                      value={inputData.description}
                      onChange={inputHandler}
                      name="description"
                      type="text"
                      placeholder="Description"
                    />
                  </SoftBox>
                  <SoftBox mb={2} ml={2} mr={2}>
                    <SoftBox mb={1} ml={0.5}>
                      <SoftTypography component="label" variant="caption" fontWeight="bold">
                        Assigned For
                      </SoftTypography>
                    </SoftBox>
                    <SoftInput
                      value={inputData.assignedFor}
                      onChange={inputHandler}
                      name="assignedFor"
                      type="text"
                      placeholder="Assigned For"
                    />
                  </SoftBox>
                </SoftBox>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button type="submit">Add</Button>
                </DialogActions>
              </Dialog>
              {/* <Modal open={open} onClose={() => setOpen(false)} sx={{ zIndex: 1300 }}>
                <ModalDialog>
                  <DialogTitle>Create new project</DialogTitle>
                  <DialogContent>Fill in the information of the project.</DialogContent>
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      setOpen(false);
                    }}
                  >
                    <Stack spacing={2}>
                      <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input autoFocus required />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Description</FormLabel>
                        <Input required />
                      </FormControl>
                      <Button type="submit">Submit</Button>
                    </Stack>
                  </form>
                </ModalDialog>
              </Modal> */}
            </SoftBox>
            <SoftBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              <Table columns={columns} rows={paginatedRows} />
            </SoftBox>
            <SoftBox display="flex" justifyContent="center" mt={2} mb={2}>
              <SoftPagination>
                {Array.from({ length: Math.ceil(filteredInventoryRows.length / rowsPerPage) }).map(
                  (_, index) => (
                    <SoftPagination
                      item
                      key={index}
                      active={index === page}
                      onClick={() => handlePageChange(index)}
                    >
                      {index + 1}
                    </SoftPagination>
                  )
                )}
              </SoftPagination>
            </SoftBox>
          </Card>
        </SoftBox>
        <Card>
          <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <SoftTypography variant="h6">Projects table</SoftTypography>
            {adminAccess && (
              <SoftButton
                color="info"
                size="medium"
                startIcon={<Icon sx={{ color: "black" }}>add_circle</Icon>}
                onClick={handleClickOpen2}
              >
                create project
              </SoftButton>
            )}
            <Dialog
              open={open2}
              maxWidth="sm"
              fullScreen={fullScreen}
              onClose={handleClose2}
              PaperProps={{
                component: "form",
                onSubmit: (event) => {
                  event.preventDefault();
                  const formData = new FormData(event.currentTarget);
                  const formJson = Object.fromEntries(formData.entries());
                  const email = formJson.email;
                  console.log(email);
                  handleClose2();
                },
              }}
            >
              <DialogTitle>Create Project</DialogTitle>
              <SoftBox component="form" role="form" pl={20} pr={20}>
                <SoftBox mb={2} ml={-12} mr={-12}>
                  <SoftBox mb={1} ml={0.5}>
                    <SoftTypography component="label" variant="caption" fontWeight="bold">
                      Project Name
                    </SoftTypography>
                  </SoftBox>
                  <SoftInput type="text" placeholder="Project Name" />
                </SoftBox>
                <SoftBox mb={2} ml={-12} mr={-12}>
                  <SoftBox mb={1} ml={0.5}>
                    <SoftTypography component="label" variant="caption" fontWeight="bold">
                      Budget
                    </SoftTypography>
                  </SoftBox>
                  <SoftInput type="text" placeholder="Budget" />
                </SoftBox>
                <SoftBox mb={2} ml={-12} mr={-12}>
                  <SoftBox mb={1} ml={0.5}>
                    <SoftTypography component="label" variant="caption" fontWeight="bold">
                      Status
                    </SoftTypography>
                  </SoftBox>
                  <SoftInput type="text" placeholder="new/working/cancel/done" />
                </SoftBox>
                <SoftBox mb={2} ml={-12} mr={-12}>
                  <SoftBox mb={1} ml={0.5}>
                    <SoftTypography component="label" variant="caption" fontWeight="bold">
                      Start Project
                    </SoftTypography>
                  </SoftBox>
                  <SoftInput type="date" placeholder="Start Project" />
                </SoftBox>
                <SoftBox mb={2} ml={-12}>
                  <SoftBox mb={1} ml={0.5}>
                    <SoftTypography component="label" variant="caption" fontWeight="bold">
                      Progress
                    </SoftTypography>
                  </SoftBox>
                  <SoftInput type="text" placeholder="progress" />
                </SoftBox>
              </SoftBox>
              <DialogActions>
                <Button onClick={handleClose2}>Cancel</Button>
                <Button type="submit">Create Project</Button>
              </DialogActions>
            </Dialog>
          </SoftBox>
          <SoftBox
            sx={{
              "& .MuiTableRow-root:not(:last-child)": {
                "& td": {
                  borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                    `${borderWidth[1]} solid ${borderColor}`,
                },
              },
            }}
          >
            <Table columns={prCols} rows={prRows} />
          </SoftBox>
        </Card>
      </SoftBox>
      <SoftBox mb={3}>
        <Card>
          <SoftBox
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p={3}
            sx={{ zIndex: "auto" }}
          >
            <SoftTypography variant="h6">After Sale</SoftTypography>
          </SoftBox>
          <SoftBox p={3}>
            <SoftInput
              type="text"
              placeholder="Search by Unit Code / Serial Number"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              icon={{ component: "search", direction: "left" }}
              // fullWidth
            />
          </SoftBox>
          <SoftBox
            sx={{
              "& .MuiTableRow-root:not(:last-child)": {
                "& td": {
                  borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                    `${borderWidth[1]} solid ${borderColor}`,
                },
              },
            }}
          >
            <Table columns={asCols} rows={paginatedRows2} />
          </SoftBox>
          <SoftBox display="flex" justifyContent="center" mt={2} mb={2}>
              <SoftPagination>
                {Array.from({ length: Math.ceil(filteredRows.length / rowsPerPage2) }).map(
                  (_, index) => (
                    <SoftPagination
                      item
                      key={index}
                      active={index === page2}
                      onClick={() => handlePageChange2(index)}
                    >
                      {index + 1}
                    </SoftPagination>
                  )
                )}
              </SoftPagination>
            </SoftBox>
        </Card>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
