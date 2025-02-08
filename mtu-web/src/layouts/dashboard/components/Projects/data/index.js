// @mui material components
import Tooltip from "@mui/material/Tooltip";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftProgress from "components/SoftProgress";

import { fetchReminder, editReminderAction } from "store/actions/reminder";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

export default function data() {
  const [reminders, setReminders] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingId2, setEditingId2] = useState(null);
  const [editingId3, setEditingId3] = useState(null);
  const [editingId4, setEditingId4] = useState(null);
  const [newNote, setNewNote] = useState("");
  const [newExpiredDate, setNewExpiredDate] = useState("");
  const [newEmailTo, setNewEmailTo] = useState("");
  const [newDateReminder, setNewDateReminder] = useState("");
  // const [newValues, setNewValues] = useState({
  //   note: "",
  //   expiredDate: "",
  //   emailTo: "",
  //   dateReminder: "2 weeks",
  // });
  const dispatch = useDispatch()
  dayjs.extend(customParseFormat);

  useEffect(() => {
    dispatch(fetchReminder()).then((data) => {
      setReminders(data);
    });
  }, [dispatch]);

  const handleNoteClick = (reminder) => {
    setEditingId(reminder.id);
    setNewNote(reminder.note);
  };

  const handleNoteChange = (e) => {
    setNewNote(e.target.value);
  };

  const handleNoteBlur = (reminder) => {
    const updatedNote = { ...reminder, note: newNote };
    dispatch(editReminderAction(updatedNote, reminder.id));
    setReminders(reminders.map(i => i.id === reminder.id ? updatedNote : i));
    setEditingId(null);
  };

  const handleExpiredDateClick = (reminder) => {
    setEditingId2(reminder.id);
    setNewExpiredDate(reminder.expiredDate);
  };

  const handleExpiredDateChange = (e) => {
    setNewExpiredDate(e.target.value);
  };

  const handleExpiredDateBlur = (reminder) => {
    const updatedExpiredDate = { ...reminder, expiredDate: newExpiredDate };
    dispatch(editReminderAction(updatedExpiredDate, reminder.id));
    setReminders(reminders.map(i => i.id === reminder.id ? updatedExpiredDate : i));
    setEditingId2(null);
  };

  const handleEmailToClick = (reminder) => {
    setEditingId3(reminder.id);
    setNewEmailTo(reminder.emailTo);
  };

  const handleEmailToChange = (e) => {
    setNewEmailTo(e.target.value);
  };

  const handleEmailToBlur = (reminder) => {
    const updatedEmailTo = { ...reminder, emailTo: newEmailTo };
    dispatch(editReminderAction(updatedEmailTo, reminder.id));
    setReminders(reminders.map(i => i.id === reminder.id ? updatedEmailTo : i));
    setEditingId3(null);
  };

  const handleDateReminderClick = (reminder) => {
    setEditingId4(reminder.id);
    setNewDateReminder(reminder.dateReminder);
  };

  const handleDateReminderChange = (e) => {
    setNewDateReminder(e.target.value);
  };

  const handleDateReminderBlur = (reminder) => {
    const updatedDateReminder = { ...reminder, dateReminder: newDateReminder };
    dispatch(editReminderAction(updatedDateReminder, reminder.id));
    setReminders(reminders.map(i => i.id === reminder.id ? updatedDateReminder : i));
    setEditingId4(null);
  };

  const getColorForExpiredDate = (expiredDateStr) => {
    if (!expiredDateStr) return "secondary";
  
    const expiredDate = dayjs(expiredDateStr, 'DD/MM/YYYY');
    const now = dayjs();
    const daysUntilExpired = expiredDate.diff(now, 'day');
  
    if (daysUntilExpired <= 0) {
      return "error";
    } else if (daysUntilExpired <= 7) {
      return "warning";
    } else {
      return "secondary";
    }
  };

  const formatMoney = (value) => {
    if (value >= 1000000) {
      const result = value / 1000000;
      return result % 1 === 0 ? result.toFixed(0) + 'JT' : result.toFixed(2) + 'JT';
    } else if (value >= 100000) {
      return (value / 1000).toFixed(0) + 'rb';
    } else {
      return value.toString();
    }
  };

  const rows = reminders.map((reminder) => {
    const color = getColorForExpiredDate(reminder.expiredDate);
  
    return {
      name: (
        <SoftTypography variant="caption" color={color} fontWeight="medium">
          {reminder.name}
        </SoftTypography>
      ),
      type: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          {reminder.type}
        </SoftTypography>
      ),
      brand: (
        <SoftTypography variant="caption" color={color} fontWeight="medium">
          {reminder.brand}
        </SoftTypography>
      ),
      note: editingId === reminder.id ? (
        <input
          type="text"
          value={newNote}
          onChange={handleNoteChange}
          onBlur={() => handleNoteBlur(reminder)}
          autoFocus
          style={{ width: '100%', borderRadius: '5px', borderColor: '#D3D3D3' }}
        />
      ) : (
        <SoftTypography
          variant="caption"
          color={reminder.note ? "secondary" : "info"}
          fontWeight="medium"
          onClick={() => handleNoteClick(reminder)}
          style={{ cursor: 'pointer' }}
        >
          {reminder.note || "Click to add note"}
        </SoftTypography>
      ),
      "price": (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          {formatMoney(reminder.lessValue)}
        </SoftTypography>
      ),
      "purchase date": (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          {reminder.purchaseDate}
        </SoftTypography>
      ),
      "expired date": editingId2 === reminder.id ? (
        <input
          type="text"
          value={newExpiredDate}
          onChange={handleExpiredDateChange}
          onBlur={() => handleExpiredDateBlur(reminder)}
          autoFocus
          style={{ width: '100%', borderRadius: '5px', borderColor: '#D3D3D3' }}
        />
      ) : (
        <SoftTypography
          variant="caption"
          color={reminder.expiredDate ? "secondary" : "info"}
          fontWeight="medium"
          onClick={() => handleExpiredDateClick(reminder)}
          style={{ cursor: 'pointer' }}
        >
          {reminder.expiredDate || "Click to add expired date"}
        </SoftTypography>
      ),
      "email to": editingId3 === reminder.id ? (
        <input
          type="text"
          value={newEmailTo}
          onChange={handleEmailToChange}
          onBlur={() => handleEmailToBlur(reminder)}
          autoFocus
          style={{ width: '100%', borderRadius: '5px', borderColor: '#D3D3D3' }}
        />
      ) : (
        <SoftTypography
          variant="caption"
          color={reminder.emailTo ? "secondary" : "info"}
          fontWeight="medium"
          onClick={() => handleEmailToClick(reminder)}
          style={{ cursor: 'pointer' }}
        >
          {reminder.emailTo || "Click to add email to"}
        </SoftTypography>
      ),
      "date reminder": editingId4 === reminder.id ? (
        <select
          type="text"
          value={newDateReminder}
          onChange={handleDateReminderChange}
          onBlur={() => handleDateReminderBlur(reminder)}
          autoFocus
          style={{ width: '100%', borderRadius: '5px', borderColor: '#D3D3D3' }}
        >
          <option value="2 weeks">2 weeks</option>
          <option value="3 weeks">3 weeks</option>
          <option value="4 weeks">4 weeks</option>
          <option value="8 weeks">8 weeks</option>
        </select>
      ) : (
        <SoftTypography
          variant="caption"
          color={reminder.dateReminder ? "secondary" : "info"}
          fontWeight="medium"
          onClick={() => handleDateReminderClick(reminder)}
          style={{ cursor: 'pointer' }}
        >
          {reminder.dateReminder || "Click to add date reminder"}
        </SoftTypography>
      ),
    };
  });

  return {
    columns: [
      { name: "name", align: "center" },
      { name: "brand", align: "center" },
      { name: "type", align: "center" },
      { name: "note", align: "center" },
      { name: "price", align: "center" },
      { name: "purchase date", align: "center" },
      { name: "expired date", align: "center" },
      { name: "email to", align: "center" },
      { name: "date reminder", align: "center" },
    ],
    rows,
    reminders
  };
}
