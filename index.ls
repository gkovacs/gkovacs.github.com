$(document).ready ->
  for let x in $('.hlink')
    target = $(x).attr('href')
    if target.indexOf('#') != 0
      return
    targetbase = target.slice(1)
    $(x).attr('href', '#')
    $(x).click (evt) ->
      targetloc = $('a[name="' + targetbase + '"]').offset().top
      console.log targetloc
      $('html, body').animate({
        scrollTop: (targetloc - 40)
      })
      evt.preventDefault()