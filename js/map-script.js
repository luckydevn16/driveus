"use strict";


function gMapHome () {
	if ($('.google-map-home').length) {
		$('.google-map-home').each(function () {
			// getting options from html 
			var Self = $(this);
			var mapName = Self.attr('id');
			var mapLat = Self.data('map-lat');
			var mapLng = Self.data('map-lng');
			var iconPath = Self.data('icon-path');
			var mapZoom = Self.data('map-zoom');
			var mapTitle = Self.data('map-title');


			var styles = [
						    {
						        "featureType": "administrative",
						        "elementType": "labels.text.fill",
						        "stylers": [
						            {
						                "color": "#E5E5E5"
						            }
						        ]
						    },
						    {
						        "featureType": "administrative.country",
						        "elementType": "geometry.stroke",
						        "stylers": [
						            {
						                "color": "#E5E5E5"
						            },
						            {
						                "weight": "1"
						            },
						            {
						                "saturation": "0"
						            },
						            {
						                "gamma": "1.00"
						            },
						            {
						                "lightness": "0"
						            }
						        ]
						    },
						    {
						        "featureType": "administrative.country",
						        "elementType": "labels",
						        "stylers": [
						            {
						                "visibility": "off"
						            },
						            {
						                "hue": "#ff0000"
						            }
						        ]
						    },
						    {
						        "featureType": "administrative.country",
						        "elementType": "labels.text",
						        "stylers": [
						            {
						                "visibility": "off"
						            }
						        ]
						    },
						    {
						        "featureType": "administrative.country",
						        "elementType": "labels.text.fill",
						        "stylers": [
						            {
						                "visibility": "off"
						            }
						        ]
						    },
						    {
						        "featureType": "administrative.country",
						        "elementType": "labels.text.stroke",
						        "stylers": [
						            {
						                "visibility": "off"
						            }
						        ]
						    },
						    {
						        "featureType": "administrative.province",
						        "elementType": "all",
						        "stylers": [
						            {
						                "visibility": "off"
						            }
						        ]
						    },
						    {
						        "featureType": "administrative.province",
						        "elementType": "labels",
						        "stylers": [
						            {
						                "visibility": "off"
						            }
						        ]
						    },
						    {
						        "featureType": "administrative.locality",
						        "elementType": "all",
						        "stylers": [
						            {
						                "visibility": "off"
						            }
						        ]
						    },
						    {
						        "featureType": "administrative.locality",
						        "elementType": "geometry",
						        "stylers": [
						            {
						                "visibility": "off"
						            }
						        ]
						    },
						    {
						        "featureType": "administrative.locality",
						        "elementType": "labels",
						        "stylers": [
						            {
						                "visibility": "off"
						            }
						        ]
						    },
						    {
						        "featureType": "administrative.neighborhood",
						        "elementType": "labels",
						        "stylers": [
						            {
						                "visibility": "off"
						            }
						        ]
						    },
						    {
						        "featureType": "administrative.land_parcel",
						        "elementType": "all",
						        "stylers": [
						            {
						                "visibility": "off"
						            }
						        ]
						    },
						    {
						        "featureType": "administrative.land_parcel",
						        "elementType": "geometry",
						        "stylers": [
						            {
						                "visibility": "off"
						            }
						        ]
						    },
						    {
						        "featureType": "administrative.land_parcel",
						        "elementType": "labels",
						        "stylers": [
						            {
						                "visibility": "off"
						            }
						        ]
						    },
						    {
						        "featureType": "landscape",
						        "elementType": "all",
						        "stylers": [
						            {
						                "color": "#ffffff"
						            },
						            {
						                "visibility": "on"
						            }
						        ]
						    },
						    {
						        "featureType": "landscape",
						        "elementType": "geometry.fill",
						        "stylers": [
						            {
						                "color": "#E5E5E5"
						            },
						            {
						                "gamma": "1.09"
						            },
						            {
						                "lightness": "23"
						            }
						        ]
						    },
						    {
						        "featureType": "landscape",
						        "elementType": "labels",
						        "stylers": [
						            {
						                "visibility": "off"
						            },
						            {
						                "color": "#fff"
						            }
						        ]
						    },
						    {
						        "featureType": "landscape.man_made",
						        "elementType": "geometry",
						        "stylers": [
						            {
						                "visibility": "off"
						            }
						        ]
						    },
						    {
						        "featureType": "landscape.man_made",
						        "elementType": "labels",
						        "stylers": [
						            {
						                "visibility": "off"
						            }
						        ]
						    },
						    {
						        "featureType": "landscape.man_made",
						        "elementType": "labels.text",
						        "stylers": [
						            {
						                "visibility": "off"
						            }
						        ]
						    },
						    {
						        "featureType": "landscape.natural",
						        "elementType": "all",
						        "stylers": [
						            {
						                "visibility": "simplified"
						            }
						        ]
						    },
						    {
						        "featureType": "landscape.natural",
						        "elementType": "labels",
						        "stylers": [
						            {
						                "visibility": "off"
						            }
						        ]
						    },
						    {
						        "featureType": "landscape.natural.terrain",
						        "elementType": "all",
						        "stylers": [
						            {
						                "visibility": "off"
						            }
						        ]
						    },
						    {
						        "featureType": "poi",
						        "elementType": "all",
						        "stylers": [
						            {
						                "visibility": "off"
						            }
						        ]
						    },
						    {
						        "featureType": "road",
						        "elementType": "all",
						        "stylers": [
						            {
						                "saturation": -100
						            },
						            {
						                "lightness": 45
						            },
						            {
						                "visibility": "off"
						            }
						        ]
						    },
						    {
						        "featureType": "road.highway",
						        "elementType": "all",
						        "stylers": [
						            {
						                "visibility": "off"
						            }
						        ]
						    },
						    {
						        "featureType": "road.arterial",
						        "elementType": "labels.icon",
						        "stylers": [
						            {
						                "visibility": "off"
						            }
						        ]
						    },
						    {
						        "featureType": "transit",
						        "elementType": "all",
						        "stylers": [
						            {
						                "visibility": "off"
						            }
						        ]
						    },
						    {
						        "featureType": "transit",
						        "elementType": "geometry",
						        "stylers": [
						            {
						                "visibility": "off"
						            }
						        ]
						    },
						    {
						        "featureType": "transit",
						        "elementType": "labels",
						        "stylers": [
						            {
						                "visibility": "off"
						            }
						        ]
						    },
						    {
						        "featureType": "transit.station",
						        "elementType": "all",
						        "stylers": [
						            {
						                "visibility": "off"
						            }
						        ]
						    },
						    {
						        "featureType": "transit.station.bus",
						        "elementType": "all",
						        "stylers": [
						            {
						                "visibility": "off"
						            }
						        ]
						    },
						    {
						        "featureType": "transit.station.rail",
						        "elementType": "all",
						        "stylers": [
						            {
						                "visibility": "off"
						            }
						        ]
						    },
						    {
						        "featureType": "water",
						        "elementType": "all",
						        "stylers": [
						            {
						                "color": "#ffffff"
						            },
						            {
						                "visibility": "on"
						            }
						        ]
						    },
						    {
						        "featureType": "water",
						        "elementType": "geometry.fill",
						        "stylers": [
						            {
						                "color": "#ffffff"
						            }
						        ]
						    },
						    {
						        "featureType": "water",
						        "elementType": "labels",
						        "stylers": [
						            {
						                "visibility": "off"
						            },
						            {
						                "color": "#000000"
						            },
						            {
						                "lightness": "44"
						            }
						        ]
						    }
						];


			// if zoom not defined the zoom value will be 15;
			if (!mapZoom) {
				var mapZoom = 15;
			};
			// init map
			var map;
			map = new GMaps({
			    div: '#'+mapName,
			    scrollwheel: false,
			    lat: mapLat,
			    lng: mapLng,
			    styles: styles,
			    zoom: mapZoom
			});
			// if icon path setted then show marker
			if(iconPath) {
				map.addMarker({
			    	icon: iconPath,
			    	lat: mapLat,
			      	lng: mapLng,
			      	title: 'Sub Office for Rental',
			      	infoWindow: {
						content: '<h3>Sub Office</h3> <p>Call us: +1 800 222 930 120</p>'
					}
				});
				map.addMarker({
			    	icon: iconPath,
			    	lat: 20.593684,
			      	lng: 20.593684,
			      	title: 'Sub Office for Rental',
			      	infoWindow: {
						content: '<h3>Sub Office</h3> <p>Call us: +1 800 222 930 120</p>'
					}
				});
				map.addMarker({
			    	icon: iconPath,
			    	lat: 25.593684,
			      	lng: 25.593684,
			      	title: 'Sub Office for Rental',
			      	infoWindow: {
						content: '<h3>Sub Office</h3> <p>Call us: +1 800 222 930 120</p>'
					}
				});
				map.addMarker({
			    	icon: iconPath,
			    	lat: 35.593684,
			      	lng: 35.593684,
			      	title: 'Sub Office for Rental',
			      	infoWindow: {
						content: '<h3>Sub Office</h3> <p>Call us: +1 800 222 930 120</p>'
					}
				});
				map.addMarker({
			    	icon: iconPath,
			    	lat: 32.593684,
			      	lng: 32.593684,
			      	title: 'Sub Office for Rental',
			      	infoWindow: {
						content: '<h3>Sub Office</h3> <p>Call us: +1 800 222 930 120</p>'
					}
				});
				map.addMarker({
			    	icon: iconPath,
			    	lat: 38.593684,
			      	lng: 38.593684,
			      	title: 'Sub Office for Rental',
			      	infoWindow: {
						content: '<h3>Sub Office</h3> <p>Call us: +1 800 222 930 120</p>'
					}
				});
				map.addMarker({
			    	icon: iconPath,
			    	lat: 46.593684,
			      	lng: 46.593684,
			      	title: 'Sub Office for Rental',
			      	infoWindow: {
						content: '<h3>Sub Office</h3> <p>Call us: +1 800 222 930 120</p>'
					}
				});
				map.addMarker({
			    	icon: iconPath,
			    	lat: 48.593684,
			      	lng: 48.593684,
			      	title: 'Sub Office for Rental',
			      	infoWindow: {
						content: '<h3>Sub Office</h3> <p>Call us: +1 800 222 930 120</p>'
					}
				});
				map.addMarker({
			    	icon: iconPath,
			    	lat: 23.810332,
			      	lng: 90.412518,
			      	title: 'Sub Office for Rental',
			      	infoWindow: {
						content: '<h3>Sub Office</h3> <p>Call us: +1 800 222 930 120</p>'
					}
				});
				map.addMarker({
			    	icon: iconPath,
			    	lat: 51.165691,
			      	lng: 10.451526,
			      	title: 'Sub Office for Rental',
			      	infoWindow: {
						content: '<h3>Sub Office</h3> <p>Call us: +1 800 222 930 120</p>'
					}
				});
				map.addMarker({
			    	icon: iconPath,
			    	lat: 40.712784,
			      	lng: -74.005941,
			      	title: 'Sub Office for Rental',
			      	infoWindow: {
						content: '<h3>Sub Office</h3> <p>Call us: +1 800 222 930 120</p>'
					}
				});
				map.addMarker({
			    	icon: iconPath,
			    	lat: 40.678178,
			      	lng: -73.944158,
			      	title: 'Sub Office for Rental',
			      	infoWindow: {
						content: '<h3>Sub Office</h3> <p>Call us: +1 800 222 930 120</p>'
					}
				});
				map.addMarker({
			    	icon: iconPath,
			    	lat: 44.588178,
			      	lng: -75.944158,
			      	title: 'Sub Office for Rental',
			      	infoWindow: {
						content: '<h3>Sub Office</h3> <p>Call us: +1 800 222 930 120</p>'
					}
				});
				map.addMarker({
			    	icon: iconPath,
			    	lat: 48.588178,
			      	lng: -80.944158,
			      	title: 'Sub Office for Rental',
			      	infoWindow: {
						content: '<h3>Sub Office</h3> <p>Call us: +1 800 222 930 120</p>'
					}
				});
				map.addMarker({
			    	icon: iconPath,
			    	lat: 55.588178,
			      	lng: -90.944158,
			      	title: 'Sub Office for Rental',
			      	infoWindow: {
						content: '<h3>Sub Office</h3> <p>Call us: +1 800 222 930 120</p>'
					}
				});
				map.addMarker({
			    	icon: iconPath,
			    	lat: 60.588178,
			      	lng: -80.944158,
			      	title: 'Sub Office for Rental',
			      	infoWindow: {
						content: '<h3>Sub Office</h3> <p>Call us: +1 800 222 930 120</p>'
					}
				});
				map.addMarker({
			    	icon: 'img/resources/map-pin-2.png',
			    	lat: 60.588178,
			      	lng: -80.944158,
			      	title: 'Main Head office',
			      	infoWindow: {
						content: '<h3>Head Office</h3> <span>New York, United Kingdom</span> <p>Call us: +1 800 222 930 120</p>'
					}
				});
				map.addMarker({
			    	icon: iconPath,
			    	lat: 64.688178,
			      	lng: -82.944158,
			      	title: 'Sub office for rental',
			      	infoWindow: {
						content: '<h3>Sub Office</h3> <p>Call us: +1 800 222 930 120</p>'
					}
				});

				map.addMarker({
			    	icon: iconPath,
			    	lat: 70.688178,
			      	lng: -92.944158,
			      	title: 'Sub office for rental',
			      	infoWindow: {
						content: '<h3>Sub Office</h3> <p>Call us: +1 800 222 930 120</p>'
					}
				});

				map.addMarker({
			    	icon: iconPath,
			    	lat: 75.688178,
			      	lng: -95.944158,
			      	title: 'Sub office for rental',
			      	infoWindow: {
						content: '<h3>Sub Office</h3> <p>Call us: +1 800 222 930 120</p>'
					}
				});
				map.addMarker({
			    	icon: iconPath,
			    	lat: 72.688178,
			      	lng: -93.944158,
			      	title: 'Sub office for rental',
			      	infoWindow: {
						content: '<h3>Sub Office</h3> <p>Call us: +1 800 222 930 120</p>'
					}
				});
				map.addMarker({
			    	icon: iconPath,
			    	lat: 72.6999,
			      	lng: -93.999998,
			      	title: 'Sub office for rental',
			      	infoWindow: {
						content: '<h3>Sub Office</h3> <p>Call us: +1 800 222 930 120</p>'
					}
				});
			}
		});  
	};
}


// Dom Ready Function
jQuery(document).on('ready', function () {
	(function ($) {
		// add your functions
		gMapHome();
	})(jQuery);
});