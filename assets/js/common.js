// 옆으로 흐르는 텍스트
let $text = $('.move-text-box .move-text'); // 애니메이션 대상 지정
let $wrap = $('.move-text-box'); // 애니메이션 영역 선택

$text.clone().appendTo($wrap); //대상을 복사하여 무한히 보일수 있도록 함

TweenMax.to($wrap, 120, { // 40 : 애니메이션 기간 , 애니메이션을 40초 동안 실행
   x: -($text.width()), // text 2개의 너비 만큼 왼쪽 가로로 움직임
   ease: Linear.easeNone, //선형 이징 : 일정한 속도로 이동
   repeat: -1 // 무한히 반복 : -1 , 한번 실행 : 0
});
