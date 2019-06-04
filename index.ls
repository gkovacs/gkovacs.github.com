$(document).ready !->
  $('#hlink_top').css('background-color', '#770000')
  for let x in $('.hlink')
    target = $(x).attr('href')
    if target.indexOf('#') != 0
      return
    targetbase = target.slice(1)
    #$(x).attr('href', '#')
    $(x).click (evt) ->
      evt.preventDefault()
      evt.stopPropagation()
      targetloc = $('a[name="' + targetbase + '"]').offset().top
      if targetbase == 'top'
        targetloc = 40
      console.log targetloc
      $('html, body').animate({
        scrollTop: (targetloc - 40)
      })
  highlight_active_section = ->
    position = window.scrollY
    #console.log 'current position is'
    #console.log position
    current_section = 'top'
    for let x in $('.hlink')
      target = $(x).attr('href')
      targetbase = target.slice(1)
      targetloc = $('a[name="' + targetbase + '"]').offset().top
      #console.log "#{targetbase} is located at"
      #console.log targetloc
      if position + 150 > targetloc
        current_section := targetbase
        return
    for let x in $('.hlink')
      target = $(x).attr('href')
      targetbase = target.slice(1)
      is_hovered = $(x).is(":hover")
      if is_hovered
        $(x).css 'background-color', '#960018'
        return
      if current_section == targetbase
        $(x).css 'background-color', '#770000'
        return
      $(x).css 'background-color', '#303633'
  setInterval highlight_active_section, 50
  highlight_active_section()
