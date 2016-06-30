angular.
  module("gitclub").
  controller("votesController", votesController)

votesController.$inject = ["$interval"]

function votesController($interval) {
  this.count = 0

  var that = this
  $interval(function() {
    that.count += 1
  }, 1000)

  this.delta = function(n) {
    this.count += n
  }

  this.pastResets = [
    { from:  7, at: new Date() },
    { from: -2, at: new Date() }
  ]

  this.reset = function() {
    var reset = { from: this.count, at: new Date() }

    this.pastResets.unshift(reset)
    this.count = 0
  }

  this.interesting = function(reset) {
      return reset.from != 0
  }

  this.resetResets = function() {
    this.pastResets = []
  }

  this.remove = function(reset) {
    console.log(reset)
  }
}
