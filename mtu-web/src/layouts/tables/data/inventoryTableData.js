/* eslint-disable react/prop-types */
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import item1 from "assets/images/w300.png";
import item2 from "assets/images/w301.png";
import item3 from "assets/images/w302.png";
import item4 from "assets/images/w303.png";
import item5 from "assets/images/macair1.png";
import item6 from "assets/images/macpro1.png";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

//fetch
import { useEffect, useState } from "react";
import { fetchItems, editItemAction } from "store/actions/item";
import { useDispatch } from 'react-redux';

function Inventory({ image, name, email }) {
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SoftBox>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {name}
        </SoftTypography>
        <SoftTypography variant="caption" color="secondary">
          {email}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

function Function({ job, org }) {
  return (
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </SoftTypography>
      <SoftTypography variant="caption" color="secondary">
        {org}
      </SoftTypography>
    </SoftBox>
  );
}

function InventoryTableData() {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [newDescription, setNewDescription] = useState("");
  const [editingId2, setEditingId2] = useState(null);
  const [newAssignedFor, setNewAssignedFor] = useState("");

  useEffect(() => {
    dispatch(fetchItems()).then(items => {
      setItems(items);
    });
  }, [dispatch]);

  const toggleStatus = (item) => {
    const newStatus = item.status === "ready" ? "not ready" : "ready";
    const updatedItem = { ...item, status: newStatus };

    dispatch(editItemAction(updatedItem, item.id));
    setItems(items.map(i => i.id === item.id ? updatedItem : i));
  };

  const handleDescriptionClick = (item) => {
    setEditingId(item.id);
    setNewDescription(item.description);
  };

  const handleDescriptionChange = (e) => {
    setNewDescription(e.target.value);
  };

  const handleDescriptionBlur = (item) => {
    const updatedItem = { ...item, description: newDescription };
    dispatch(editItemAction(updatedItem, item.id));
    setItems(items.map(i => i.id === item.id ? updatedItem : i));
    setEditingId(null);
  };

  const handleAssignedForClick = (item) => {
    setEditingId2(item.id);
    setNewAssignedFor(item.assignedFor);
  };

  const handleAssignedForChange = (e) => {
    setNewAssignedFor(e.target.value);
  };

  const handleAssignedForBlur = (item) => {
    const updatedItem = { ...item, assignedFor: newAssignedFor };
    dispatch(editItemAction(updatedItem, item.id));
    setItems(items.map(i => i.id === item.id ? updatedItem : i));
    setEditingId2(null);
  };

  const rows = items.map((item) => ({
    // items: <Inventory image={item.image} name={item.name} email={item.model} />,
    // description: <Function job={item.type} org={item.org} />,
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
        onClick={() => toggleStatus(item)}
        style={{ cursor: 'pointer' }}
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
    description: editingId === item.id ? (
      <input
        type="text"
        value={newDescription}
        onChange={handleDescriptionChange}
        onBlur={() => handleDescriptionBlur(item)}
        autoFocus
        placeholder="Click to give a note"
        style={{ width: '100%', borderRadius: '5px', borderColor: '#D3D3D3' }}
      />
    ) : (
      <SoftTypography
        variant="caption"
        color={item.description ? "secondary" : "info"}
        fontWeight="medium"
        onClick={() => handleDescriptionClick(item)}
        style={{ cursor: 'pointer' }}
      >
        {item.description || "Click to give a note"}
      </SoftTypography>
    ),
    'assigned for': editingId2 === item.id ? (
      <input
        type="text"
        value={newAssignedFor}
        onChange={handleAssignedForChange}
        onBlur={() => handleAssignedForBlur(item)}
        autoFocus
        placeholder="Click to assign"
        style={{ width: '100%', borderRadius: '5px', borderColor: '#D3D3D3' }}
      />
    ) : (
      <SoftTypography
        variant="caption"
        color={item.assignedFor ? "secondary" : "info"}
        fontWeight="medium"
        onClick={() => handleAssignedForClick(item)}
        style={{ cursor: 'pointer' }}
      >
        {item.assignedFor || "Click to assign"}
      </SoftTypography>
    ),
    // action: (
    //   <SoftTypography
    //     component="a"
    //     href="#"
    //     variant="caption"
    //     color="secondary"
    //     fontWeight="medium"
    //   >
    //     Edit
    //   </SoftTypography>
    // ),
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
      // { name: "action", align: "center" },
    ],
    rows,
  };
}

export default InventoryTableData;





