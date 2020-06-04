var $first_bg = $('#js-first'), //1枚目のスライドを登録
    $current_bg = $first_bg; //現在のスライドを1枚目にセット

setInterval(function(){
  //DOMを見て現在のスライドの次の要素があればそれを登録
  //現在のスライドが最後の要素の場合、1番目のスライドを登録
  var $next_bg = $current_bg.next()[0] ? $current_bg.next() : $first_bg;
　　　　
  //現在のスライドからis_activeを削除、次のスライドにis_activeを付与
  $current_bg.removeClass('is_active');
  $next_bg.addClass('is_active');

  //現在のスライドに今is_activeを付与したスライドをセット
  $curreng_bg = $next_bg;

}, 5000);//5秒ごとにスライドを変更