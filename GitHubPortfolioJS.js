

var order1 = ['builderPage', 'playmatPage', 'userPage', 'errorsPage'];
var order2 = ['welcomePages', 'selectionPages', 'displayPage'];
var order3 = ['welcomePage', 'explorePage', 'preferencesPage', 'settingsPage', 'historyPage'];

function nextEvent(direction, projectNumber) {
    if (projectNumber == 1) {
        var order = order1;
        var hideElement = document.getElementsByClassName('show')[0];
    }
    else if (projectNumber == 2) {
        var order = order2;
        var hideElement = document.getElementsByClassName('show')[1];
    }
    else if (projectNumber == 3) {
        var order = order3;
        var hideElement = document.getElementsByClassName('show')[2];
    }
    var elementId = hideElement.getAttribute('id');
    hideElement.removeAttribute('class');
    hideElement.hidden = true;
    for (var i=0; i<order.length; i++) {
        if (order[i] == elementId) {
            if (direction == 'previous') {
                if (i == 0) {
                    var showElement = document.getElementById(order[order.length-1]);
                    showElement.setAttribute('class', 'show');
                    showElement.hidden = false;
                }
                else {
                    var showElement = document.getElementById(order[i-1]);
                    showElement.setAttribute('class', 'show');
                    showElement.hidden = false;
                }
            }
            else if (direction == 'next') {
                if (i == order.length-1) {
                    var showElement = document.getElementById(order[0]);
                    showElement.setAttribute('class', 'show');
                    showElement.hidden = false;
                }
                else {
                    var showElement = document.getElementById(order[i+1]);
                    showElement.setAttribute('class', 'show');
                    showElement.hidden = false;
                }
            }
        }
    }
}

