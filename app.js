let navbar = document.querySelector('.navbar');
let navLink1 = document.querySelector('#nav-link1')
let navLink2 = document.querySelector('#nav-link2')
let navLink3 = document.querySelector('#nav-link3')
let navLink4 = document.querySelector('#nav-link4')
window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = 'white';
        navbar.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
        navLink1.style.color = 'black'
        navLink2.style.color = '#ECEDEE'
        navLink2.backgroundColor = '#6E9DF8'
        navLink3.style.color = 'black'
        navLink4.style.color = 'black'
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.boxShadow = "none";
        navLink1.style.color = '#ECEDEE'
        navLink2.style.color = '#ECEDEE'
        navLink2.backgroundColor = '#6E9DF8'
        navLink3.style.color = '#ECEDEE'
        navLink4.style.color = '#ECEDEE'
    }
});

// window.addEventListener('scroll', function() {
//     var a = document.querySelector('a');
//     if (window.pageYOffset > 0) {
//         a.style.color = 'white';
//     } else {
//         a.style.color = 'black';
//     }
// });


// Dashboard
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                'August', 'September', 'October', 'November', 'December'];
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const minYear = new Date(0).getFullYear();
const maxYear = new Date(2099, 0, 1).getFullYear();

const prevMonthButton = document.getElementById("calendar__left__arrow");
const nextMonthButton = document.getElementById("calendar__right__arrow");
const currentMonthSelected = document.getElementById("calendar__months");
const monthsSelect = document.getElementById("calendar__months");
const yearsSelect = document.getElementById("calendar__years");
const currentMonthDisplay = document.getElementById("calendar__months");
const calendarDays = document.getElementById("calendar__bottom");

const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

months.forEach((month, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.appendChild(document.createTextNode(month));
    monthsSelect.appendChild(option);
});

function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
    return [];
    }
    
    const result = [];
    for (let i = startNum; i <= endNum; i++) {
    result.push(i);
    }
    return result;
};

const years = rangeOfNumbers(minYear, maxYear);

years.forEach((year) => {
    const option = document.createElement('option');
    option.value = parseInt(year);
    option.appendChild(document.createTextNode(parseInt(year)));
    yearsSelect.appendChild(option);
});

function updateCalendar() {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    
    calendarDays.innerHTML = "";
    
    for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
    const date = new Date(currentYear, currentMonth, day);
    const dayElement = document.createElement("li");
    dayElement.classList.add("calendar__day");
    
    if (date.toDateString() === today.toDateString()) {
        dayElement.classList.add("calendar__today");
    }

    if (['Sat', 'Sun'].includes(date.toDateString().slice(0, 3))) {
        dayElement.classList.add('calendar__week__day');
    }
    
    dayElement.textContent = day;
    calendarDays.appendChild(dayElement);
}
}

monthsSelect.addEventListener("change", () => {
    currentMonth = parseInt(monthsSelect.value);
    updateCalendar();
});


yearsSelect.addEventListener("change", () => {
    currentMonth = yearsSelect.value;
    updateCalendar();
});

prevMonthButton.addEventListener("click", () => {
    if (currentMonth === 0) {
    currentMonth = 11;
    currentYear--;
    } else {
    currentMonth--;
    }
    updateCalendar();
});

nextMonthButton.addEventListener("click", () => {
    if (currentMonth === 11) {
    currentMonth = 0;
    currentYear++;
    } else {
    currentMonth++;
    }
    updateCalendar();
});

updateCalendar();


function updateSelectedMonth() {
    let selectedIndex = currentMonthDisplay.value;

    prevMonthButton.addEventListener('click', () => {
    selectedIndex = (selectedIndex - 1 + months.length) % months.length;
    updateSelectedMonth();
});

    nextMonthButton.addEventListener('click', () => {
    selectedIndex = (selectedIndex + 1) % months.length;
    updateSelectedMonth();
});

    currentMonth.valueOf = months[selectedIndex];
}

updateSelectedMonth();  