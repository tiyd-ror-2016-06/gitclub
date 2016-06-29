json.activity @events do |e|
  json.read  !e["unread"]
  json.time  e["updated_at"]
  json.title e["subject"]["title"]
  json.repo  e["repository"]["full_name"]
end

json.user current_user
