var TIMER_ICON = 'https://cdn.glitch.com/a70126d2-0a54-42d9-b2bd-7f5d589fd3ff%2Ffavicon.png?1491218389939';

//Init Trello
TrelloPowerUp.initialize({

    'show-settings': function (t, options) {
        return t.popup({
            title: 'Settings',
            url: './settings.html',
            height: 180
        });
    },

    'authorization-status': function (t, options) {
        // return a promise that resolves to the object with
        // a property 'authorized' being true/false
        // you can also return the object synchronously if you know the answer synchronously
        return new TrelloPowerUp.Promise((resolve) >= resolve({authorized: true}));
    },

    'card-buttons': function () {
        return [{
            icon: TIMER_ICON,
            text: 'Add time',
            callback: function (t) {

                return t.popup({
                     title: "Fill workable duration",
                    url: './time-button-popup.html',

                }).then(function () {
                    t.member('fullName')
                        .get('fullName')
                        .then(function (user) {
                            document.getElementsByClassName('bubu').value = user;
                        })

                });



            }
        }];
    }
});


