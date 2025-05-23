// Generated by LiveScript 1.6.0
(function(){
  $(document).ready(function(){
    var fix_link_target, i$, ref$, len$, highlight_active_section;
    fix_link_target = function(x, noprop){
      var target, targetbase;
      target = $(x).attr('href');
      if (target.indexOf('#') !== 0) {
        return;
      }
      targetbase = target.slice(1);
      $(x).click(function(evt){
        var targetloc;
        if (noprop !== true) {
          evt.preventDefault();
          evt.stopPropagation();
        }
        targetloc = $('a[name="' + targetbase + '"]').offset().top;
        if (targetbase === 'top') {
          targetloc = 40;
        }
        console.log(targetloc);
        return $('html, body').animate({
          scrollTop: targetloc - 40
        });
      });
    };
    for (i$ = 0, len$ = (ref$ = $('.hlink')).length; i$ < len$; ++i$) {
      (fn$.call(this, ref$[i$]));
    }
    for (i$ = 0, len$ = (ref$ = $('.mhlink')).length; i$ < len$; ++i$) {
      (fn1$.call(this, ref$[i$]));
    }
    highlight_active_section = function(){
      var position, current_section, i$, ref$, len$, current_section_readable;
      position = window.scrollY;
      current_section = 'top';
      for (i$ = 0, len$ = (ref$ = $('.hlink')).length; i$ < len$; ++i$) {
        (fn$.call(this, ref$[i$]));
      }
      for (i$ = 0, len$ = (ref$ = $('.hlink')).length; i$ < len$; ++i$) {
        (fn1$.call(this, ref$[i$]));
      }
      for (i$ = 0, len$ = (ref$ = $('.mhlink')).length; i$ < len$; ++i$) {
        (fn2$.call(this, ref$[i$]));
      }
      current_section_readable = {
        'top': 'Geza Kovacs',
        'research': 'Research',
        'opensource': 'Open-Source',
        'publications': 'Publications',
        'teaching': 'Teaching',
        'contact': 'Contact'
      }[current_section];
      if (current_section_readable != null) {
        return $('#mobilenavtitle').text(current_section_readable);
      }
      function fn$(x){
        var target, targetbase, targetloc;
        target = $(x).attr('href');
        targetbase = target.slice(1);
        targetloc = $('a[name="' + targetbase + '"]').offset().top;
        if (position + 150 > targetloc) {
          current_section = targetbase;
          return;
        }
      }
      function fn1$(x){
        var target, targetbase, is_hovered;
        target = $(x).attr('href');
        targetbase = target.slice(1);
        is_hovered = $(x).is(":hover");
        if (is_hovered) {
          $(x).css('background-color', '#960018');
          return;
        }
        if (current_section === targetbase) {
          $(x).css('background-color', '#770000');
          return;
        }
        $(x).css('background-color', '#303633');
      }
      function fn2$(x){
        var target, targetbase, is_hovered;
        target = $(x).attr('href');
        targetbase = target.slice(1);
        is_hovered = $(x).is(":hover");
        if (is_hovered) {
          $(x).css('background-color', '#960018');
          return;
        }
        if (current_section === targetbase) {
          $(x).css('background-color', '#770000');
          return;
        }
        $(x).css('background-color', '#303633');
      }
    };
    setInterval(highlight_active_section, 50);
    highlight_active_section();
    function fn$(x){
      fix_link_target(x, false);
    }
    function fn1$(x){
      fix_link_target(x, true);
    }
  });
}).call(this);
