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

  this.shouldShowEvent = function(e) {
    if (this.showRead) { return true }
    if (!e.read) { return true }
    return false
  }

  this.limit = 5

  this.filteredResults = function() {
    var results = $filter("filter")(this.events, this.search.q)

    return results.slice(0, this.limit)
  }
}
