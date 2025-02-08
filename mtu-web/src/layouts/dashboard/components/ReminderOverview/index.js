import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReminder } from "store/actions/reminder";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import TimelineItem from "examples/Timeline/TimelineItem";

function ReminderOverview() {
  const dispatch = useDispatch();
  const reminders = useSelector((state) => state.reminder.reminder); // Asumsi: Data diambil dari Redux state
  const [sortedReminders, setSortedReminders] = useState([]);

  // Fungsi untuk memparsing string expiredDate dengan format dd/mm/yyyy
  const parseDate = (dateStr) => {
    const [day, month, year] = dateStr.split("/").map(Number);
    return new Date(year, month - 1, day);
  };

  useEffect(() => {
    // Memanggil API untuk mengambil data reminder
    dispatch(fetchReminder());
  }, [dispatch]);

  useEffect(() => {
    if (reminders && reminders.length > 0) {
      // Urutkan semua data reminder berdasarkan tanggal expired (dari yang terdekat)
      const sorted = reminders
        .sort((a, b) => parseDate(a.expiredDate) - parseDate(b.expiredDate)); // Urutkan dari yang paling dekat

      setSortedReminders(sorted);
    }
  }, [reminders]);

  return (
    <Card className="h-100">
      <SoftBox pt={3} px={3}>
        <SoftTypography variant="h6" fontWeight="medium">
          Reminder Overview
        </SoftTypography>
        <SoftBox mt={1} mb={2}>
          <SoftTypography variant="button" color="text" fontWeight="regular">
            <SoftTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
                arrow_upward
              </Icon>
            </SoftTypography>
            &nbsp;
            <SoftTypography variant="button" color="text" fontWeight="medium">
              {sortedReminders.length}
            </SoftTypography>{" "}
            total reminders
          </SoftTypography>
        </SoftBox>
      </SoftBox>
      <SoftBox p={2}>
        {sortedReminders.map((reminder, index) => (
          <TimelineItem
            key={index}
            color="success" // Kamu bisa menyesuaikan warna berdasarkan logika lain jika diperlukan
            icon="notifications"
            title={reminder.name} // Sesuaikan dengan properti yang ada di objek reminder
            dateTime={reminder.expiredDate} // Tampilkan expiredDate
          />
        ))}
      </SoftBox>
    </Card>
  );
}

export default ReminderOverview;
