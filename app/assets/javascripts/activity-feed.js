var refreshFeed = function(list) {
  $.ajax("/api/activity.json", {
    success: function(data) {
      console.log(data)

      var length = Math.min(10, data.activity.length)

      list.empty()
      
      for (var i=0; i < length; i ++) {
        var x = data.activity[i]

        var newItem = $("<li>")
        newItem.text( x.repo + ": " + x.title + " (" + x.time + ")")

        list.append(newItem)
      }
    },
    error: function() {
      alert("No no no!")
    }
  })
}

$(document).on("page:change", function() {
  var feedList = $("#activity-feed")

  refreshFeed(feedList)

  setInterval(function() {
    refreshFeed(feedList)
  }, 1000)
})
