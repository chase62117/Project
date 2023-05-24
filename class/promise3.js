// 0524
// 매크로 태스크 / 마이크로 태스크 실행 순서
// https://cat-antlion-144.notion.site/ddc88abeb6a64ef4b0d5305cae2b5327

setTimeout(() => alert("timeout")); // macro task

new Promise(resolve => {
	alert("executor"); // (2) Promise 생성시 바로 실행 
	resolve();
})
  .then(() => alert("promise"));

alert("code"); // (4)

// executor -> code -> promise -> timeout


// 매크로 태스크 -- (6) 실행
// (1) timeout 적재

// 마이크로 태스크 -- (5) 실행
// (3) promise(then) 적재

// 파일을 실행하면 코드를 한번 훑으며 매크로 / 마이크로 태스크를 구분해서 적재하거나 즉시 실행하고
// 마이크로 태스크 -> 매크로 태스크 순으로 실행함