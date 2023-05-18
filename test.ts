function gambambo(me: string, you: string){
  //? 가위는 주먹한테 지고 보자기한테 이긴다.
  //? 바위는 보자기한테 지고 가위한테 이긴다.
  //? 보자기는 가위한테 지고 주먹한테 이긴다.
  //! 위에 정한 규칙은 불변 == 전제 => 설계이다.

  let a = "가위", b = "바위", c = "보"; //a = 가위, b = 바위, c = 보자기

  if((me === a || me === b || me === c) && (you === a || you === b || you === c) ){
    if((me === a && you === b) || (me === b && you === c) || (me === c && you === a)){
      return `me: ${me}, you: ${you}, me: loose`;
    }
    else if((me === a && you === c) || (me === b && you === a) || (me === c && you === b)){
      return `me: ${me}, you: ${you}, me: win`;;
    }
    else{
      return "비겼습니다"
    }
  }
  else{
    return "숫자 1,2,3만 입력 가능합니다"
  }

}

let a = 1, b = 2, c = 3;
let rules = ["가위", "바위", "보"];

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}


let cnt = getRandomInt(0, rules.length);
let cnt2 = getRandomInt(0, rules.length);

console.log(gambambo(rules[cnt], rules[cnt2]))
