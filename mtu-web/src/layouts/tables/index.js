// @mui material components
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
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
import styled from 'styled-components';
import { position } from "stylis";


function Tables() {
  const CustomTextarea = styled.textarea`
    width: 400px;
    height: 150px;
    border: 2px solid #C0C0C0;
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
  const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [menu, setMenu] = useState(null);
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

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

              <SoftButton
                color="info"
                size="medium"
                startIcon={<Icon sx={{ color: "black" }}>add_circle</Icon>}
                onClick={handleClickOpen}
              >
                add item
              </SoftButton>
              <Dialog
                open={open}
                maxWidth
                fullScreen={fullScreen}
                onClose={handleClose}
                PaperProps={{
                  component: "form",
                  onSubmit: (event) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const formJson = Object.fromEntries(formData.entries());
                    const email = formJson.email;
                    console.log(email);
                    handleClose();
                  },
                }}
              >
                <DialogTitle>Add Item</DialogTitle>
                <SoftBox component="form" role="form">
                  <SoftBox mb={2} ml={2} mr={2}>
                    <SoftBox mb={1} ml={0.5}>
                      <SoftTypography component="label" variant="caption" fontWeight="bold">
                        Item Name
                      </SoftTypography>
                    </SoftBox>
                    <SoftInput type="text" placeholder="Item Name" />
                  </SoftBox>
                  <SoftBox mb={2} ml={2} mr={2}>
                    <SoftBox mb={1} ml={0.5}>
                      <SoftTypography component="label" variant="caption" fontWeight="bold">
                        Production Year
                      </SoftTypography>
                    </SoftBox>
                    <SoftInput type="date" placeholder="Production Year" />
                  </SoftBox>
                  <SoftBox mb={2} ml={2} mr={2}>
                    <SoftBox mb={1} ml={0.5}>
                      <SoftTypography component="label" variant="caption" fontWeight="bold">
                        Image Item
                      </SoftTypography>
                    </SoftBox>
                    <SoftInput type="file" placeholder="image" />
                  </SoftBox>
                  <SoftBox mb={2} ml={2} mr={2}>
                    <SoftBox mb={1} ml={0.5}>
                      <SoftTypography component="label" variant="caption" fontWeight="bold">
                        Description
                      </SoftTypography>
                    </SoftBox>
                    {/* <SoftInput type="text" placeholder="Description" size="large"/> */}
                    {/* <textarea
                      style={{
                        width: "400px",
                        height: "150px",
                        border: "2px solid #C0C0C0",
                        outline: "none",
                        resize: "vertical",
                        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                        boxShadow: "none",
                        fontFamily: "Arial, sans-serif",
                      }}
                    ></textarea> */}
                    <CustomTextarea></CustomTextarea>
                  </SoftBox>
                  {/* <SoftBox mt={4} mb={1} ml={2} mr={2} justifyContent="">
          <SoftButton variant="gradient" color="info">
            sign in
          </SoftButton>
        </SoftBox> */}
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
              <Table columns={columns} rows={rows} />
            </SoftBox>
          </Card>
        </SoftBox>
        <Card>
          <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <SoftTypography variant="h6">Projects table</SoftTypography>
            <SoftButton
              color="info"
              size="medium"
              startIcon={<Icon sx={{ color: "black" }}>add_circle</Icon>}
              onClick={handleClickOpen2}
            >
              create project
            </SoftButton>
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
                    <SoftInput type="text" placeholder="progress"/>
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
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
