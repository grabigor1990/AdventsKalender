document.addEventListener('DOMContentLoaded', function () {
    const calendarContainer = document.getElementById('calendar');
    const numberOfDoors = 24;
    const doorNumbers = Array.from({length: numberOfDoors}, (_, index) => index + 1);
    // doorNumbers.sort(() => Math.random() - 0.5);

    for (let i = 0; i < numberOfDoors; i++) {
        let doorNumber = doorNumbers[i];

        const door = document.createElement('div');
        door.className = 'door';
        door.textContent = doorNumber;
        door.addEventListener('click', createDoorClickHandler(doorNumber));
        calendarContainer.appendChild(door);
    }

    function createDoorClickHandler(day) {
        return function () {
            openDoor(day);
        };
    }

    function openDoor(day) {
        if ( /* currentDate.getMonth() + 1 ) < 12 ||*/ day <= getCurrentDay()) {
            const door = calendarContainer.querySelector('.door:nth-child(' + day + ')');
            door.classList.add('opened');

            const message = getMessage(day);

            door.innerHTML = '<div class="message">' + message + '</div>';
        } else {
            alert('Dieses Türchen kann noch nicht geöffnet werden!');
        }
    }
    
    function getCurrentDay() {
        const currentDate = new Date();
        return currentDate.getDate();
    }

    function getMessage(day) {
        return messages[day - 1];
    }
});
