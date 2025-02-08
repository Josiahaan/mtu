import React, { lazy, Suspense } from "react";
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import SpaceShip from "examples/Icons/SpaceShip";
import Cube from "examples/Icons/Cube";
import ProtectedRoute from "./middlewares/protectedRoute";
import Loading from "assets/theme/components/loading";

// Menggunakan React.lazy untuk komponen-komponen yang diimpor
const Dashboard = lazy(() => import("layouts/dashboard"));
const Tables = lazy(() => import("layouts/tables"));
const CompanyProfile = lazy(() => import("layouts/CompanyProfile"));
const Product = lazy(() => import("layouts/product"));
const SignIn = lazy(() => import("layouts/authentication/sign-in"));
const SignUp = lazy(() => import("layouts/authentication/sign-up"));
const AirTruck = lazy(() => import("components/CompanyProfile/Catalog/ACSL/AirTruck"));
const Fi4 = lazy(() => import("components/CompanyProfile/Catalog/ACSL/Fi4"));
const PF2 = lazy(() => import("components/CompanyProfile/Catalog/ACSL/Pf2-ae"))
const Disaster = lazy(() => import("components/CompanyProfile/Catalog/ACSL/Pf2-disaster"))
const Inspection = lazy(() => import("components/CompanyProfile/Catalog/ACSL/Pf2-inspection"))
const Soten = lazy(() => import("components/CompanyProfile/Catalog/ACSL/Soten"))
const UseCases = lazy(() => import("components/CompanyProfile/Catalog/ACSL/UseCases"))

const role = localStorage.getItem("role");
const adminAccess = role === "Super Admin" || role === "Admin";

const routes = [
  adminAccess && {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: (
      <Suspense fallback={<Loading />}>
        <ProtectedRoute component={Dashboard} />
      </Suspense>
    ),
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Inventory",
    key: "inventory",
    route: "/inventory",
    icon: <Office size="12px" />,
    component: (
      <Suspense fallback={<Loading />}>
        <ProtectedRoute component={Tables} />
      </Suspense>
    ),
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Company Profile",
    key: "company-profile",
    route: "/company-profile",
    icon: <Cube size="12px" />,
    component: (
      <Suspense fallback={<Loading />}>
        <CompanyProfile />
      </Suspense>
    ),
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Product",
    key: "product",
    route: "/product",
    icon: <Cube size="12px" />,
    component: (
      <Suspense fallback={<Loading />}>
        <Product />
      </Suspense>
    ),
    noCollapse: true,
  },
  { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: <SpaceShip size="12px" />,
    component: (
      <Suspense fallback={<Loading />}>
        <SignIn />
      </Suspense>
    ),
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Catalog",
    key: "catalog",
    route: "/catalog",
    icon: <Cube size="12px" />,
    component: (
      <Suspense fallback={<Loading />}>
        {/* <AirTruck /> */}
      </Suspense>
    ),
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Airtruck",
    key: "airtruck",
    route: "/acsl/airtruck",
    icon: <Cube size="12px" />,
    component: (
      <Suspense fallback={<Loading />}>
        <AirTruck />
      </Suspense>
    ),
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Airtruck",
    key: "airtruck",
    route: "/acsl/fi4",
    icon: <Cube size="12px" />,
    component: (
      <Suspense fallback={<Loading />}>
        <Fi4 />
      </Suspense>
    ),
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Airtruck",
    key: "airtruck",
    route: "/acsl/disaster",
    icon: <Cube size="12px" />,
    component: (
      <Suspense fallback={<Loading />}>
        <Disaster />
      </Suspense>
    ),
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Airtruck",
    key: "airtruck",
    route: "/acsl/inspection",
    icon: <Cube size="12px" />,
    component: (
      <Suspense fallback={<Loading />}>
        <Inspection />
      </Suspense>
    ),
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Airtruck",
    key: "airtruck",
    route: "/acsl/soten",
    icon: <Cube size="12px" />,
    component: (
      <Suspense fallback={<Loading />}>
        <Soten />
      </Suspense>
    ),
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Airtruck",
    key: "airtruck",
    route: "/acsl/usecases",
    icon: <Cube size="12px" />,
    component: (
      <Suspense fallback={<Loading />}>
        <UseCases />
      </Suspense>
    ),
    noCollapse: true,
  },
];

const validRoutes = routes.filter(route => route);
export default validRoutes;
