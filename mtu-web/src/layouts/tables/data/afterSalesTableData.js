import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftBadge from "components/SoftBadge";
import { fetchItems } from "../../../store/actions/item";

function afterSalesTableData() {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);

  useEffect(() => {
    dispatch(fetchItems()).then(items => {
      const filteredItems = items.filter(item => item.assignedFor);
      setItems(filteredItems);
    });
  }, [dispatch]);

  const rows = items.map((item) => ({
    item: (
      <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        {item.name}
      </SoftTypography>
    ),
    type: (
      <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        {item.type}
      </SoftTypography>
    ),
    "unit code": (
      <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        {item.unitCode}
      </SoftTypography>
    ),
    "serial number": (
      <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        {item.serialNumber}
      </SoftTypography>
    ),
    status: (
      <SoftBadge
        variant="gradient"
        badgeContent={item.status}
        color={item.status === "ready" ? "success" : "secondary"}
        size="xs"
        container
      />
    ),
    "purchase date": (
      <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        {item.purchaseDate}
      </SoftTypography>
    ),
    "warranty expired": (
      <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        {item.warrantyExpired}
      </SoftTypography>
    ),
    "assigned for": (
      <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        {item.assignedFor}
      </SoftTypography>
    ),
    description: (
      <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        {item.description || "No description"}
      </SoftTypography>
    ),
  }));

  return {
    columns: [
      { name: "item", align: "center" },
      { name: "type", align: "center" },
      { name: "unit code", align: "center" },
      { name: "serial number", align: "center" },
      { name: "status", align: "center" },
      { name: "purchase date", align: "center" },
      { name: "warranty expired", align: "center" },
      { name: "assigned for", align: "center" },
      { name: "description", align: "center" },
    ],
    rows,
  };
}

export default afterSalesTableData;