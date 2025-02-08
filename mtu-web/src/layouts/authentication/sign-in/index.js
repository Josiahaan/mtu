import { useState } from "react";
import Swal from "sweetalert2";
import { doLogin } from "store/actions/user";
import { useDispatch } from "react-redux";
import { userLogin } from "store/actions/user";

// react-router-dom components
import { useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";

// Images
import curved6 from "assets/images/curved-images/curved14.jpg";
import bgimage from "assets/images/bgimage.jpeg";

function SignIn() {
  const [agreement, setAgremment] = useState(true);

  const handleSetAgremment = () => setAgremment(!agreement);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    const { value, name } = e.target;
    const newInput = {
      ...inputData,
    };
    newInput[name] = value;
    setInputData(newInput);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    if (!inputData.email || !inputData.password) {
      Swal.fire({
        icon: "error",
        iconColor: "#CD1818",
        title: "Error!",
        text: "Email dan password harus diisi!",
        color: "#080504",
        background: "#ebd7bb",
        confirmButtonColor: "#a35831",
      });
      return;
    }
  
    dispatch(doLogin(inputData))
      .then((response) => {
        Swal.fire({
          icon: "success",
          iconColor: "#57240f",
          title: "Login Success!",
          color: "#080504",
          background: "#ebd7bb",
          confirmButtonColor: "#a35831",
        });
        const { id, name, email, role } = response.data.payload;
        const access_token = response.data.access_token;
        const loginTime = new Date().getTime();
        localStorage.setItem("login", "true");
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("role", role);
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("login_time", loginTime);
        dispatch(userLogin());
        if (role === "Super Admin" || role === "Admin") {
          navigate("/dashboard");
        } else {
          navigate("/inventory");
        }
        window.location.reload();
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          iconColor: "#CD1818",
          title: "Error!",
          text: error.response.data.message,
          color: "#080504",
          background: "#ebd7bb",
          confirmButtonColor: "#a35831",
        });
      });
  };

  return (
    <BasicLayout
      title="Sorte Systegra"
      // description="Welcome to SSP Dashboard."
      image={curved6}
    >
      <Card>
        <SoftBox p={3} mb={1} textAlign="center">
          <SoftTypography variant="h5" fontWeight="medium">
            Login
          </SoftTypography>
        </SoftBox>
        {/* <SoftBox mb={2}>
          <Socials />
        </SoftBox>
        <Separator /> */}
        <SoftBox pt={2} pb={3} px={3}>
          <SoftBox component="form" role="form" onSubmit={loginHandler}>
            <SoftBox mb={2}>
              <SoftInput type="email" placeholder="Email" name="email" value={inputData.email} onChange={inputHandler}/>
            </SoftBox>
            {/* <SoftBox mb={2}>
              <SoftInput type="email" placeholder="Email" />
            </SoftBox> */}
            <SoftBox mb={2}>
              <SoftInput type="password" placeholder="Password" name="password" value={inputData.password} onChange={inputHandler}/>
            </SoftBox>
            {/* <SoftBox display="flex" alignItems="center">
              <Checkbox checked={agreement} onChange={handleSetAgremment} />
              <SoftTypography
                variant="button"
                fontWeight="regular"
                onClick={handleSetAgremment}
                sx={{ cursor: "poiner", userSelect: "none" }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </SoftTypography>
              <SoftTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                textGradient
              >
                Terms and Conditions
              </SoftTypography>
            </SoftBox> */}
            <SoftBox mt={4} mb={1}>
              <SoftButton type="submit" variant="gradient" color="dark" fullWidth>
                Login
              </SoftButton>
            </SoftBox>
            {/* <SoftBox mt={3} textAlign="center">
              <SoftTypography variant="button" color="text" fontWeight="regular">
                Already have an account?&nbsp;
                <SoftTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="dark"
                  fontWeight="bold"
                  textGradient
                >
                  Sign in
                </SoftTypography>
              </SoftTypography>
            </SoftBox> */}
          </SoftBox>
        </SoftBox>
      </Card>
    </BasicLayout>
  );
}

export default SignIn;