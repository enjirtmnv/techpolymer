ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.761325, 37.552642],
            zoom: 17.2
        }, {
            searchControlProvider: 'yandex#search'
        }),


        myPlacemark = new ymaps.Placemark([55.761325, 37.552642], {
            balloonContentBody: '<img src="images/text-img-logo.jpg" height="50" width="238">',
            hintContent: 'Техполимер'
        }, {
            // Опции.
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'images/marker-eco.svg',
            iconImageSize: [50, 50],
            iconImageOffset: [-25, -25],
            iconContentOffset: [-25, -25]
        });

    myMap.geoObjects
        .add(myPlacemark);
});