angular.
  module("gitclub").
  controller("homeController", homeController)

function homeController() {
  this.thing = "World"

  this.shouldShow = true

  this.toggle = function() {
    this.shouldShow = !this.shouldShow
  }
}
