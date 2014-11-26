var MyCtrl = {
    toggle : function($scope){
        $scope.visible = true;
        $scope.toggle = function (){
            $scope.visible = !$scope.visible;
        };
    },
    value : function($scope) {
        $scope.value = "some value";
    },
    inc : function($scope) {
        $scope.value = 1;
        $scope.incVal = function(increment){
            $scope.value += increment;
        }
    },
    getInc : function($scope) {
        $scope.value = 1;
        $scope.getIncVal = function(){
            return $scope.value + 1;
        }
    },
    depend : function($scope) {
        $scope.name = '';
        $scope.$watch("name", function(newVal, oldVal){
            if ($scope.name.length > 0) {
                $scope.greeting = "Greetings " + $scope.name;
            }
        });
    }
}

var app = angular.module("adflowgic", []);
app.directive("show", function() {
    return {
        link: function(scope, element, attributes) {
            scope.$watch(attributes.show, function(value){
                element.css('display', value ? '' : 'none');
            });
        }
    };
});
app.controller("MyCtrl.parent", function($scope) {
    $scope.name = "Peter";
    $scope.user = {
        name: "Parker"
    };
});

app.controller("MyCtrl.child", function($scope) {
});
app.factory("UserService", function() {
    var users = ["Peter", "Daniel", "Nina"];
    return {
        all: function() {
            return users;
        },
        first: function() {
            return users[0];
        }
    };
});

app.controller("MyCtrl.service1", function($scope, UserService) {
    $scope.users = UserService.all();
});

app.controller("MyCtrl.service2", function($scope, UserService) {
    $scope.firstUser = UserService.first();
});

app.directive("myWidget", function() {
    var linkFunction = function(scope, element, attributes) {
        var paragraph = element.children()[0];
        $(paragraph).on("click", function() {
            $(this).css({ "background-color": "red" });
        });
    };
    return {
        restrict: "A",
        link: linkFunction
    };
});
app.directive("myWidget2", function(){
   return {
       restrict : "E",
       template : "<p>Hello</p>"
   }
});
app.directive("myWidget3", function() {
    return {
        restrict: "E",
        transclude: true,
        template: "<div ng-transclude><h3>Heading</h3></div>"
    };
});

app.directive("repeatNTimes", function() {
    return {
        restrict: "E",
        compile: function(tElement, attrs) {
            var content = tElement.children();
            for (var i=1; i<attrs.repeat; i++) {
                tElement.append(content.clone());
            }
            return function (scope, element, attrs) {
                $(element).on("click", "h1", function() {
                    $(this).css({ "background-color": "red" });
                });
            };
        }
    };
});

app.directive("basket", function() {

    return {

        restrict: "E",

        controller: function($scope, $element, $attrs) {

            $scope.content = [];

            this.addApple = function() {

                $scope.content.push("apple");

            };

            this.addOrange = function() {

                $scope.content.push("orange");

            };

        },

        link: function(scope, element) {

            element.bind("mouseenter", function() {

                console.log(scope.content);

            });

        }

    };

});

app.directive("apple", function() {

    return {

        require: "basket",

        link: function(scope, element, attrs, basketCtrl) {

            basketCtrl.addApple();

        }

    };

});

app.directive("orange", function() {

    return {

        require: "basket",

        link: function(scope, element, attrs, basketCtrl) {

            basketCtrl.addOrange();

        }

    };

});