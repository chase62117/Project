const express = require('express');
const app = express();
const port = 3000; // port number

app.use(express.static('public')); // public 폴더에 있는 파일들을 정적 파일로 제공하겠다

// app.get('/', (req, res) => {
//     // '/': 루트로 오면 (url) 블록 안을 실행해라
//   res.send('Hello World!');
// });

app.listen(port, () => {
    // port에서 듣고 있겠다
  console.log(`Example app listening on port ${port}`);
});