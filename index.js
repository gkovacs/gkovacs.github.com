// Generated by LiveScript 1.5.0
(function(){
  $(document).ready(function(){
    var i$, ref$, len$, highlight_active_section;
    $('#hlink_top').css('background-color', '#770000');
    for (i$ = 0, len$ = (ref$ = $('.hlink')).length; i$ < len$; ++i$) {
      (fn$.call(this, ref$[i$]));
    }
    highlight_active_section = function(){
      var position, current_section, i$, ref$, len$, results$ = [];
      position = window.scrollY;
      current_section = 'top';
      for (i$ = 0, len$ = (ref$ = $('.hlink')).length; i$ < len$; ++i$) {
        (fn$.call(this, ref$[i$]));
      }
      for (i$ = 0, len$ = (ref$ = $('.hlink')).length; i$ < len$; ++i$) {
        results$.push((fn1$.call(this, ref$[i$])));
      }
      return results$;
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
        return $(x).css('background-color', '#303633');
      }
    };
    setInterval(highlight_active_section, 50);
    highlight_active_section();
    function fn$(x){
      var target, targetbase;
      target = $(x).attr('href');
      if (target.indexOf('#') !== 0) {
        return;
      }
      targetbase = target.slice(1);
      $(x).click(function(evt){
        var targetloc;
        evt.preventDefault();
        evt.stopPropagation();
        targetloc = $('a[name="' + targetbase + '"]').offset().top;
        if (targetbase === 'top') {
          targetloc = 40;
        }
        console.log(targetloc);
        return $('html, body').animate({
          scrollTop: targetloc - 40
        });
      });
    }
  });
}).call(this);
