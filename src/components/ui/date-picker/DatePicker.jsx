import { useState } from "react";
import "./style.scss";

const Calendar = ({ onDateChange }) => {
  const today = new Date();
  const currentDay = today.getDate();
  const [selectedDates, setSelectedDates] = useState(new Set().add(currentDay));
  const daysInMonth = 30; // Adjust as needed
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  
  // Get current date for comparison
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  // Handle date click
  const handleDateClick = (day) => {
    // Create a date object for the clicked day (assuming current month/year)
    const selectedDate = new Date(currentYear, currentMonth, day);
    
    // Only allow selection if date is today or in the future
    if (selectedDate >= today.setHours(0, 0, 0, 0)) {
      const newSelectedDates = new Set(selectedDates);
      if (newSelectedDates.has(day)) {
        newSelectedDates.delete(day);
      } else {
        newSelectedDates.add(day);
      }
      setSelectedDates(newSelectedDates);
      onDateChange(newSelectedDates); // Pass updated dates to parent
    }
  };

  return (
    <div className="calendar-container">
      <h1>Date Select</h1>
      <div className="calender">
        <div className="header">
          {daysOfWeek.map((day) => (
            <div key={day} className="header-day">
              {day}
            </div>
          ))}
        </div>
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
          const isPast = new Date(currentYear, currentMonth, day) < today.setHours(0, 0, 0, 0);
          return (
            <div
              key={day}
              className={`day ${selectedDates.has(day) ? 'selected' : ''} ${isPast ? 'disabled' : ''}`}
              onClick={() => !isPast && handleDateClick(day)}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;