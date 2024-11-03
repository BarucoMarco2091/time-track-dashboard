const data = [
    {
        "title": "Work",
        "timeframes": {
            "daily": {
                "current": 5,
                "previous": 7
            },
            "weekly": {
                "current": 32,
                "previous": 36
            },
            "monthly": {
                "current": 103,
                "previous": 128
            }
        }
    },
    {
        "title": "Play",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 2
            },
            "weekly": {
                "current": 10,
                "previous": 8
            },
            "monthly": {
                "current": 23,
                "previous": 29
            }
        }
    },
    {
        "title": "Study",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 7
            },
            "monthly": {
                "current": 13,
                "previous": 19
            }
        }
    },
    {
        "title": "Exercise",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 5
            },
            "monthly": {
                "current": 11,
                "previous": 18
            }
        }
    },
    {
        "title": "Social",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 3
            },
            "weekly": {
                "current": 5,
                "previous": 10
            },
            "monthly": {
                "current": 21,
                "previous": 23
            }
        }
    },
    {
        "title": "Self Care",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 2,
                "previous": 2
            },
            "monthly": {
                "current": 7,
                "previous": 11
            }
        }
    }
]

const weeklyButton = document.querySelector('.btn-weekly');
weeklyButton.addEventListener('click', function weekly() {
    const newGridContainer = document.getElementById('grid-container');
    newGridContainer.innerHTML = '';
    data.forEach((item) => {
        const newDiv = document.createElement('div');
        newDiv.className = 'new-grid';
        newDiv.innerHTML =
        `
       <p>${item.title}</p>
       <p>${item.timeframes.weekly.current}</p>
       <p>${item.timeframes.weekly.previous}</p>
       `
        newGridContainer.appendChild(newDiv);
    });
});

const monthlyButton = document.querySelector('.btn-monthly');
monthlyButton.addEventListener('click', function monthly() {
    const newGridContainer = document.getElementById('grid-container');
    newGridContainer.innerHTML = '';
    data.forEach((item) => {
        const newDiv = document.createElement('div');
        newDiv.className = 'new-grid';
        newDiv.innerHTML =
        `
        <p>${item.title}</p>
        <p>${item.timeframes.monthly.current}</p>
        <p>${item.timeframes.monthly.previous}</p>
        `
        newGridContainer.appendChild(newDiv);
    });
});

