/**
 * Created by Andy Feng on Wednesday 10/26/16.
 CSS DEMO!!!
 */



var eccy_app = angular.module('eccy_app', []);


// MainController ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: MainController
eccy_app.controller('mainController', function($scope, $document, $element, $window, $timeout, $location, $anchorScroll){
    console.log('hello this is the main controller');


    angular.element($window).on('scroll', function(){

        console.log(this.pageYOffset);
            // if (this.pageYOffset >= 25) {
            //     $scope.where = 'bottom';
            //     console.log('Scrolled below header.');
            // } else {
            //     $scope.where = 'top';
            //     console.log('Header is in view.');
            // }
    });














});




















// angular.element($window).on('scroll', function(){
//   console.log(this.pageYOffset);
// });



//     $timeout(function() {
//         $scope.copied = 0;
//     }, 2500);





// $scope.sub = function(){
//     MetricFactory.incSub(function(data) {
//         $scope.metrics = data;
//     });
//     $window.open('//subman.me');
// };







// angular.element($window).on('scroll', function(){
//         if (this.pageYOffset >= 25) {
//             $scope.where = 'bottom';
//             console.log('Scrolled below header.');
//         } else {
//             $scope.where = 'top';
//             console.log('Header is in view.');
//         }
// });





















    //
    //
    //
    // $scope.aniSkill = 0;
    // $scope.aniEdu = 0;
    // $scope.aniWordd = 0;
    //
    //
    // (function goToTop() {
    //     var top = 0;
    //     var duration = 500; //milliseconds
    //
    //     //Scroll to the exact position
    //     $document.scrollTop(top, duration).then(function() {
    //         // console && console.log('You just scrolled to the top!');
    //     });
    //
    //
    //     $scope.where = 'top';
    //     // console.log($scope.where);
    //
    //     $scope.init = 1;
    //     $timeout(function() {
    //         $scope.init = 0;
    //     }, 2500);
    //
    // })();
    // $scope.goToTop = function() {
    //     var top = 0;
    //     var duration = 500; //milliseconds
    //
    //     //Scroll to the exact position
    //     $document.scrollTop(top, duration).then(function() {
    //         // console && console.log('You just scrolled to the top!');
    //     });
    //
    //     $scope.where = 'top';
    //     // console.log($scope.where);
    //
    // };
    //
    //
    //
    // $scope.goToSomewhere = function(w) {
    //     var top;
    //     var duration = 500; //milliseconds
    //     if(w == 'top'){
    //
    //         top = 750;
    //         //Scroll to the exact position
    //         $document.scrollTop(top, duration).then(function() {
    //             // console && console.log('You just scrolled to the bottom!');
    //         });
    //
    //
    //         $scope.where = 'bottom';
    //     }
    //     if(w == 'bottom'){
    //
    //         top = 0;
    //         //Scroll to the exact position
    //         $document.scrollTop(top, duration).then(function() {
    //             // console && console.log('You just scrolled to the top!');
    //         });
    //
    //         $scope.where = 'top';
    //     }
    // };
    //
    //
    //
    //
    //
    //
    // $scope.sub = function(){
    //     MetricFactory.incSub(function(data) {
    //         $scope.metrics = data;
    //     });
    //     $window.open('//subman.me');
    // };
    // $scope.ham = function(){
    //     MetricFactory.incHam(function(data) {
    //         $scope.metrics = data;
    //     });
    //     $window.open('//hamster.gold');
    // };
    //
    // $scope.email = function(){
    //     MetricFactory.incEmail(function(data) {
    //         $scope.metrics = data;
    //     });
    //     $scope.copied = 1;
    //     $timeout(function() {
    //         $scope.copied = 0;
    //     }, 2500);
    // };
    //
    //
    //
    //
    //
    //
    //
    //
    //
    // // Vertical distance from the top of the page to the top of the edu-wrapper div
    // var eduDivTop = angular.element(document.querySelector('#edu')).prop('offsetTop');
    // var skillDivTop = angular.element(document.querySelector('#skill')).prop('offsetTop');
    // var worddDivTop = angular.element(document.querySelector('#wordd')).prop('offsetTop');
    //
    // // Initialize variable to hold animation trigger point
    // var eduTrigger;
    // var skillTrigger;
    // var worddTrigger;
    //
    // // Change scope variable on scroll -------------------------------------
    // $timeout(function() {
    //
    //     angular.element($window).on('scroll', function(){
    //         if (this.pageYOffset >= 25) {
    //             $scope.where = 'bottom';
    //             // console.log('Scrolled below header.');
    //         } else {
    //             $scope.where = 'top';
    //             // console.log('Header is in view.');
    //         }
    //
    //
    //
    //         // Animate wordd section ------------------------------------
    //         worddTrigger = worddDivTop - ($window.innerHeight / 2);
    //         if (this.pageYOffset >= worddTrigger) {
    //             if ($scope.aniWordd != 1){
    //                 $scope.aniWordd = 1;
    //             }
    //         } // ------------------------------ end Animate Wordd Section
    //
    //
    //
    //
    //
    //         // Animate skill section ------------------------------------
    //         skillTrigger = skillDivTop - ($window.innerHeight / 3);
    //         if (this.pageYOffset >= skillTrigger) {
    //             if ($scope.aniSkill != 1){
    //                 $scope.aniSkill = 1;
    //                 // console.log('skill');
    //             }
    //         } // ------------------------------ end Animate Skill Section
    //
    //
    //
    //
    //         // Animate edu section --------------------------------------
    //         eduTrigger = eduDivTop - ($window.innerHeight / 2);
    //         // Animate education section
    //         if (this.pageYOffset >= eduTrigger) {
    //             if ($scope.aniEdu != 1){
    //                 $scope.aniEdu = 1;
    //             }
    //         } // -------------------------------- end Animate Edu Section
    //
    //
    //
    //
    //
    //
    //         $scope.$apply();
    //     });
    //
    //
    // }, 500);
    // // ---------------------------------------------------------------------
    //
    //
    //
    //
    //
    // $scope.animateEdu = function(){
    //     $scope.aniEdu = 1;
    //     $timeout(function() {
    //         $scope.aniEdu = 0;
    //     }, 1000);
    //
    // };
    //
    //
    //
    //
    //
    //
    //
    //
    // $scope.linkedIn = function(){
    //     MetricFactory.incLI(function(data) {
    //         $scope.metrics = data;
    //     });
    //     $window.open('//linkedin.com/in/andy-feng-64563035');
    // };
    //
    // $scope.gitHub = function(){
    //     MetricFactory.incGH(function(data) {
    //         $scope.metrics = data;
    //     });
    //     $window.open('//github.com/peachteaboba');
    // };
    //
    // $scope.inst = function(){
    //     MetricFactory.incINST(function(data) {
    //         $scope.metrics = data;
    //     });
    //     $window.open('//www.instagram.com/peachteaboba/');
    // };
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    // // Retrieve site metrics --------------------------------------------
    // $scope.metrics = [];
    // MetricFactory.index(function (data) {
    //     $scope.metrics = data;
    //     if(data.length == 0){
    //         MetricFactory.indexInit(function (dataInit) {
    //             $scope.metrics = dataInit;
    //         });
    //
    //         MetricFactory.incPage(function(data) {
    //             $scope.metrics = data;
    //         });
    //     } else {
    //         MetricFactory.incPage(function(data) {
    //             $scope.metrics = data;
    //         });
    //
    //
    //     }
    //     console.log($scope.metrics);
    //
    //
    //
    //
    //
    //
    // });
    //
    //
    //
    //
    // // $scope.gotoBottom = function() {
    // //     // set the location.hash to the id of
    // //     // the element you wish to scroll to.
    // //     $location.hash('bottom');
    // //
    // //     // call $anchorScroll()
    // //     $anchorScroll();
    // // };
    //
    //
    //
    //
    //
    // // Initialize scope variables --------------------------------------------
    // $scope.showSum = 0;
    // $scope.copied = 0;
    // $scope.subHover = 0;
    // $scope.hamHover = 0;
    //
    //
    //
    //
    //
    //
    //
    //
    //
    // $scope.showSumToggle = function(){
    //
    //
    //     if($scope.showSum == 0){
    //         $scope.showSum = 1;
    //         MetricFactory.incShow(function(data) {
    //             $scope.metrics = data;
    //         });
    //
    //
    //     } else {
    //         $scope.showSum = 0;
    //     }
    //
    // };
    //
    //
    //
    // $scope.email = function(){
    //     MetricFactory.incEmail(function(data) {
    //         $scope.metrics = data;
    //     });
    //     $scope.copied = 1;
    //     $timeout(function() {
    //         $scope.copied = 0;
    //     }, 2500);
    //
    //
    // };
    //
    //
    //
    //
    //
    //
    // $scope.subHoverE = function(){
    //     $scope.subHover = 1;
    // };
    // $scope.subHoverL = function(){
    //     $scope.subHover = 0;
    // };
    // $scope.hamHoverE = function(){
    //     $scope.hamHover = 1;
    // };
    // $scope.hamHoverL = function(){
    //     $scope.hamHover = 0;
    // };
