$(document).ready !->
  fix_link_target = (x, noprop) !->
    target = $(x).attr('href')
    if target.indexOf('#') != 0
      return
    targetbase = target.slice(1)
    #$(x).attr('href', '#')
    $(x).click (evt) ->
      if noprop != true
        evt.preventDefault()
        evt.stopPropagation()
      targetloc = $('a[name="' + targetbase + '"]').offset().top
      if targetbase == 'top'
        targetloc = 40
      console.log targetloc
      $('html, body').animate({
        scrollTop: (targetloc - 40)
      })
  for let x in $('.hlink')
    fix_link_target x, false
  for let x in $('.mhlink')
    fix_link_target x, true
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
    for let x in $('.mhlink')
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
    current_section_readable = {
      'top': 'Geza Kovacs',
      'research': 'Research',
      'opensource': 'Open-Source',
      'publications': 'Publications',
      'teaching': 'Teaching',
      'contact': 'Contact',
    }[current_section]
    if current_section_readable?
      $('#mobilenavtitle').text(current_section_readable)
  setInterval highlight_active_section, 50
  highlight_active_section()
