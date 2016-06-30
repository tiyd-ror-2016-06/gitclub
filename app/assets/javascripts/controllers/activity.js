angular.
  module("gitclub").
  controller("activityController", activityController)

activityController.$inject = ["$http", "$filter"]

function activityController($http, $filter) {
  this.search = { q: "" }
  this.showRead = false

  this.events = []

  var that = this
  $http.get("/api/activity.json").success(function(data) {
    console.log("angular got", data)

    that.events = data.activity
  })

  this.markRead = function(e) {
    e.read = true

    // $http.post("/api/activity/" + e.id + "/read")
  }
}
