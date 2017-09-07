//Initialisation de la carte, centrage sur l'Ecosse
var map = L.map('mapid').setView([57.0928481,-4.0620837], 7);
//Téléchargement du fond de carte chez OSM
var osm = new L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar'}).addTo(map);

//Affichage du tracé GPX grâce à leaflet-omnivore
omnivore.gpx('Trajets/mapstogpx20170907_210857.gpx').addTo(map);

//Code AngularJS

angular.module('Scotland', [])
  .controller('PhotosController', ['$scope',function($scope) {
    var diapo = this;
    //Initialement, la diapo est fermée
    diapo.isOpen = false;
    //Initialisation à 0 de l'indice de la photo lue
    diapo.selectedPic=0;
}]);
