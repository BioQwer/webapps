"use strict";!function(){function e(e,o){var t=e-.5+Math.random()*(o-e+1);return t=Math.round(t)}function o(e,o){return Math.random()-.5}var t,n,l=["picture1.jpg","picture2.jpg","picture3.jpg","picture4.jpg","win.jpg","win2.jpg"],r=["img-1","img-2","img-3","img-4","img-5","img-6"],i=1,a={WELCOME_MESSAGE:"Приглашаем Вас принять участие в игре от VATECH",GAME_MESSAGE:"Выберите снимок с наилучшим качеством изображения",WIN_MESSAGE:"Это снимок сделан при помощи EzSensor от VATECH!",ACTION_MESSAGE:"Пожалуйста, заполните форму и получите подарок",FAIL_MESSAGE:"Попробуйте еще раз…",CHANGE_LANGUAGE_BUTTON:"English",CLICK_FOR_AGAIN:" Нажми, чтобы попробовать еще раз"},c={WELCOME_MESSAGE:"Welcome To Vatech Game Zone",GAME_MESSAGE:"Select The Best Intra-Oral Image Out Of These Six",WIN_MESSAGE:"That's The VATECH EzSensor Image!",ACTION_MESSAGE:"Please Fill The Form And Collect Your Gift",FAIL_MESSAGE:"You have 1 more chance…",CHANGE_LANGUAGE_BUTTON:"Русский язык",CLICK_FOR_AGAIN:"Click to try again"},u=angular.module("app",["ngRoute","ng","ngAnimate","ngAudio","pascalprecht.translate"]);u.run(["$rootScope","$location","$templateCache",function(e,o,t){o.path("/"),e.appInitialized=!0}]),u.config(["$routeProvider","$translateProvider",function(e,o){o.translations("ru",a),o.translations("en",c),o.preferredLanguage("ru"),e.when("/game",{templateUrl:"templates/game.html",controller:"GameController"}).when("/win",{templateUrl:"templates/win.html",controller:"WinController"}).when("/",{templateUrl:"templates/welcome.html",controller:"WelcomeController"}).when("/fail",{templateUrl:"templates/fail.html",controller:"FailController"}).otherwise({redirectTo:"/"})}]),u.controller("FailController",["$scope","$window","ngAudio",function(e,o,t){e.redirect=function(){o.location.href="#/game"},console.log(e),n=t.play("audio/fail.mp3"),n.volume=i,e.$on("$destroy",function(){n.stop()})}]),u.controller("WinController",["$scope","ngAudio","$window",function(e,o,l){$("#winImage").attr("src",t),console.log(e),e.redirect=function(){l.location.href="#/game"},n=o.play("audio/win.mp3"),n.volume=i,e.$on("$destroy",function(){n.stop()})}]),u.controller("WelcomeController",["$scope","ngAudio",function(e,o){e.sound=o.play("audio/welcome.mp3"),e.sound.volume=i,n=e.sound,e.$on("$destroy",function(){n.stop()})}]),u.controller("GeneralController",["$translate",function(e){this.checkState=function(){i>0?this.changeTo="Mute":this.changeTo="Unmute"},this.checkState(),this.changeMute=function(){i>0?(i=0,n.volume=i):(i=1,n.volume=i),this.checkState()};var o=!0;this.changeLanguage=function(){o?(e.use("en"),o=!1):(e.use("ru"),o=!0)}}]),u.controller("GameController",["$scope","$window","ngAudio",function(a,c,u){n=u.play("audio/waiting.mp3"),n.volume=i;var s=$("#timerkeeper").width(),m=$("#countdown").countdown360({radius:s/2.5,seconds:10,label:["sec","secs"],strokeStyle:"#26d7ae",fontColor:"white",fillStyle:"black",fontWeight:100,onComplete:function(){c.location.href="#/fail",console.log("timer done"),setTimeout(function(){m.addSeconds(1e8)},500)}});l.sort(o);var g=e(1,3);r.forEach(function(e,o){var n="images/"+g+"/"+l[o],r=$("#"+e);r.attr("src",n),n.match(".*win.*")?(console.log("win  = "+n),r.click(function(){t=n,c.location.href="#/win",setTimeout(function(){m.addSeconds(1e8)},500)})):r.click(function(){c.location.href="#/fail",setTimeout(function(){m.addSeconds(1e8)},500)}),console.log(e),console.log(n)}),m.start(),console.log("timer start"),a.$on("$destroy",function(){n.stop()})}])}();