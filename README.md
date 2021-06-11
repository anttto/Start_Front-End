# Breaking Front-End

프론트앤드 뿌수기 프로젝트

#### 2021-05-24

- Vanilla Js 부터 제대로 해야겠다고 생각 (제이쿼리 의존도 없애기)
- To-Do List 만들기 시작 (Vanilla Js만을 이용)

#### 2021-06-04

- Vanilla Js Study (노마드코더 총30개 영상)
- To-Do List 완성(약 2주 소요) [Link](https://anttto.github.io/Breaking-Front-End/project-VanillaJS/)
- 습득 기술 및 경험

  > 1.  조금이나마 Vanilla Js 친밀감 상승
  > 2.  LocalStorage 기술의 이해와 활용 (너무 신기하고 멋졌다. 쿨)
  > 3.  JSON (JavaScript Object Notation)에 관한 이해. `JSON.stringify()` & `JSON.parse()`
  > 4.  geolocation API를 활용한 위치와 날씨 활용 (최고)
  > 5.  조금 더 플러스 된 개발 의지와 흥미

#### 2021-06-11

- Ajax Study (생활코딩 총16개 영상)
- 간단한 리스트 페이지 실습 [Link](https://anttto.github.io/Breaking-Front-End/project-Ajax/)
- 습득 기술 및 경험

  > 1. 아파치 웹서버를 설치 후 실습 진행
  > 2. Single Page Application 구현의 기초가 되는 비동기식 통신 기술 (Asynchronous Javascript And XML)
  > 3. Fetch API 를 이용한 Ajax 사용. (XMLHttpRequest API부터 JQuery를 거쳐, 현재는 JS ES6(ES2015) 표준으로 등장한 fetch API를 대부분 이용)


  > 4. Fetch 기본 구조 - 출처 : [@ksh4820](https://velog.io/@ksh4820/Ajax-fetch)

  ```
  fetch(resource, init)
    .then( callback )
    .catch( callback )

  ----------------------

  fetch(url, init)
    .then(res => {
        if(res.status === 200){
            return res.json()
        }else{
            console.error(`HTTP error! status: ${res.status}`)
        }
    })
    .then(jsonData => {
        console.log(jsonData)
    })
    .catch(err => {
        console.log(err)
    })
  ```

  - Fetch API는 비동기처리 객체 Promise 기반으로 작동 (Promise 개념 정리 [캡틴판교](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/))

  > 5. 실제 이용 코드

  ```
  fetch(url).then(function(res){
    res.text().then(function(text){
      document.querySelector('article').innerHTML = text;
    });
  });
  ```
