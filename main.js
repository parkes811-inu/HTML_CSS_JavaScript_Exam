const el = document.querySelector('h1')

console.log(el)

// 객체 데이터
const person = {
  key: 'value',
  name: 'eunSeo',
  age: 26,
  email: 'parkes811@naver.com'
}
console.log(person.name)

// 배열 데이터
// JS에서는 0부터 숫자를 센다 (Zero Based Numbering)
const arrayData=  [1,2,3,4]
console.log(arrayData[0])
console.log(arrayData[3])


// 숫자 변수
// 재할당이 불가능한 const변수
const number1 = 123
console.log(number1)

// 재할당이 가능한 let 변수
let number2 = 4
console.log(number2 + 1)

// 여러 명령을 하나로 묶는 함수 예제

// 함수를 사용하지 않을 경우
// const mesaage1 = 'Hello World!'
// console.log(mesaage1)

// const mesaage2 = 'Hello Eunseo!'
// console.log(mesaage2)

// const mesaage3 = 'Hello Baby!'
// console.log(mesaage3)

// 함수를 정의하여 반복되는 일을 처리 하는 경우
function hello(name) {
  // return을 이용해 특정 조건이 발생할 경우 함수를 종료 시킬 수 있다.
  if (name.length < 5) {
    return -999
  }
  const message = 'Hello ' + name + '!'
  console.log(message)
}
hello('ParkEunSeo')
hello('Eun Seo')
hello(12345)


// 버튼 제어를 위한 코드
// document는 html 내용을 의미한다.
// selector는 CSS 선택자를 의미한다.
const itemEle = document.querySelectorAll('c_item')
const btnEle = document.querySelector('.btn')
const colors = ['royalblue', 'orange', 'tomato']

// addEventListner('click')은
// 마우스 왼쪽 버튼을 눌렀다 떼는 것을 의미한다.
// function 함수의 이름이 없는 함수를 익명함수라고 한다.
btnEle.addEventListener('click', function () {
  // forEach : itemEle. 요소들의 각각 명령을 실행한다는 의미다

  // itemEL은 itemEle에서 받아온 index.html에 c_item (1,2,3)을 각 각 의미한다.
  itemEle.forEach(function (itemEL, index) {
    console.log(index, itemEL)
    // style은 CSS 스타일을 의미
    itemEL.style.backgroundColor = colors[index]
  })
  //btnEle.innerHTML='클릭했어요!' 
  // .innerHTML은 문자만 할당할 수 있는게 아니라 HTML 코드를 할당 할 수도 있다.
   btn.innerHTML = '<span>클릭했어요!</span>'

})
