document.addEventListener('DOMContentLoaded', function() {
    const prevWeekBtn = document.querySelector('.prev-week');
    const nextWeekBtn = document.querySelector('.next-week');
    const weekTitle = document.querySelector('.timetable-controls h3');

    let currentDate = new Date();
    // Set to Monday of current week
    currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 1);

    function formatWeekRange(date) {
        const start = new Date(date);
        const end = new Date(date);
        end.setDate(end.getDate() + 4); // Show Monday to Friday

        const formatDate = (d) => {
            const options = { month: 'long', day: 'numeric' };
            return d.toLocaleDateString('en-US', options);
        };

        return `${formatDate(start)} - ${formatDate(end)}, ${start.getFullYear()}`;
    }

    function updateWeekDisplay() {
        weekTitle.textContent = formatWeekRange(currentDate);
    }

    prevWeekBtn.addEventListener('click', () => {
        currentDate.setDate(currentDate.getDate() - 7);
        updateWeekDisplay();
    });

    nextWeekBtn.addEventListener('click', () => {
        currentDate.setDate(currentDate.getDate() + 7);
        updateWeekDisplay();
    });

    // Initialize with current week
    updateWeekDisplay();
});