// Generated by LiveScript 1.3.1
(function(){
  $(document).ready(function(){
    var i$, ref$, len$, results$ = [];
    for (i$ = 0, len$ = (ref$ = $('.hlink')).length; i$ < len$; ++i$) {
      results$.push((fn$.call(this, ref$[i$])));
    }
    return results$;
    function fn$(x){
      var target, targetbase;
      target = $(x).attr('href');
      if (target.indexOf('#') !== 0) {
        return;
      }
      targetbase = target.slice(1);
      $(x).attr('href', '#');
      return $(x).click(function(evt){
        var targetloc;
        targetloc = $('a[name="' + targetbase + '"]').offset().top;
        if (targetbase === 'top') {
          targetloc = 40;
        }
        console.log(targetloc);
        $('html, body').animate({
          scrollTop: targetloc - 40
        });
        return evt.preventDefault();
      });
    }
  });
}).call(this);
