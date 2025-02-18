// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    var calendar = new FullCalendar.Calendar(document.getElementById('calendar'), {
        initialView: 'dayGridMonth',
        events: '/backend/getAvailableDates.php', // Fetch available dates from the server
    });
    calendar.render();
});

function submitBooking() {
    const selectedService = document.getElementById('service-select').value;
    const selectedDate = document.querySelector('.fc-selected-day').textContent;

    // Send booking data to the server
    fetch('/backend/bookService.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            service: selectedService,
            date: selectedDate
        })
    }).then(response => response.json())
      .then(data => {
          if (data.success) {
              alert('Booking confirmed!');
          } else {
              alert('Failed to book the service.');
          }
      });
}
