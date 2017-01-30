  var iframe_full = document.getElementById('iframe_full')
  var iframe_meal = document.getElementById('iframe_meal')
  var iframe_appointment = document.getElementById('iframe_appointment')

  var is_mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)

  var src_url_full = "https://www.google.com/calendar/embed?showTitle=0&mode=WEEK&showNav=1&showPrint=0&wkst=1&title=Geza%20-%20Orange%3DMeals%2C%20Red%3DHigh%20Priority%2C%20Teal%3DMed%20Priority%2C%20Purple%3DLow%20Priority.%20Ignore%20Full-Day%20Events.%20Make%20appointment%20at%20http%3A%2F%2Fgkovacs.com%2Fmeet&src=geza0kovacs%40gmail.com&color=%23691426&src=hqcqah533la58h15gsku2uhrc4%40group.calendar.google.com&color=%23BE6D00&src=moed0ihkgem3lbmflstqrs0afk%40group.calendar.google.com&color=%231B887A&src=5f5kiek12oo6hthfnim5ouie1o%40group.calendar.google.com&color=%2323164E&ctz=America%2FLos_Angeles&"

  var src_url_meal = "https://calendar.google.com/calendar/embed?showTitle=0&mode=WEEK&embed?showNav=1&showPrint=0&wkst=1&bgcolor=%23FFFFFF&src=t7trgt2buhpkb8tftsqnouq3kg%40group.calendar.google.com&color=%230F4B38&src=hqcqah533la58h15gsku2uhrc4%40group.calendar.google.com&color=%23BE6D00&ctz=America%2FLos_Angeles"

  var src_url_appointment = "https://calendly.com/geza/60min"

  if (is_mobile) {
    src_url_full = src_url_full.split('mode=WEEK').join('mode=AGENDA')
    src_url_meal = src_url_meal.split('mode=WEEK').join('mode=AGENDA')
    src_url_appointment = src_url_appointment.split('mode=WEEK').join('mode=AGENDA')
  }

  //set_page(getUrlParameters().page)

  function set_hash(hash) {
    window.location.hash = hash
  }

  function full_schedule() {
    document.getElementById('tab-1').checked = 'checked'
  }

  function meal_schedule() {
    document.getElementById('tab-2').checked = 'checked'
  }

  function make_appointment() {
    document.getElementById('tab-3').checked = 'checked'
  }

  var loc_hash = window.location.hash
  if (loc_hash && loc_hash[0] == '#') {
    loc_hash = loc_hash.substr(1)
  } else {
    window.location.hash = 'full'
  }
  if (loc_hash == 'meal') {
    document.getElementById('tab-2').checked = 'checked'
    iframe_meal.src = src_url_meal
    iframe_full.src = src_url_full
    iframe_appointment.src = src_url_appointment
  } else if (loc_hash == 'appointment') {
    document.getElementById('tab-3').checked = 'checked'
    iframe_full.src = src_url_full
    iframe_meal.src = src_url_meal
    iframe_appointment.src = src_url_appointment
  } else {
    document.getElementById('tab-1').checked = 'checked'
    iframe_appointment.src = src_url_appointment
    iframe_full.src = src_url_full
    iframe_meal.src = src_url_meal
  }

  function resized() {
    var iframe_full_position = iframe_full.getBoundingClientRect().top;
    iframe_full.height = (document.body.clientHeight - iframe_full_position) + 'px';
    iframe_full.style.height = (document.body.clientHeight - iframe_full_position) + 'px';

    var iframe_meal_position = iframe_meal.getBoundingClientRect().top;
    iframe_meal.height = (document.body.clientHeight - iframe_meal_position) + 'px';
    iframe_meal.style.height = (document.body.clientHeight - iframe_meal_position) + 'px';

    var iframe_appointment_position = iframe_appointment.getBoundingClientRect().top;
    iframe_appointment.height = (document.body.clientHeight - iframe_appointment_position) + 'px';
    iframe_appointment.style.height = (document.body.clientHeight - iframe_appointment_position) + 'px';
  }
  window.addEventListener('resize', resized, true);
  resized();