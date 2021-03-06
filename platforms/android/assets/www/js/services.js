angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
    .factory('Bus', function ($http) {
        // Might use a resource here that returns a JSON array

        var teste = function(){
            return "teste";
        }

        return {
            all: function () {
                return $http.get('assets/bus.json');
            },
            get: function (busId) {
                var i = 0;
                var len = this.buses.length;
                var bus = null;

                for (; i < len; i++) {
                    if (this.buses[i].id == busId) {
                        bus = this.buses[i];
                        break;
                    }
                }

                return bus;
            }
        }
    });
