document.getElementById('button1').addEventListener('click',getText);
document.getElementById('button2').addEventListener('click',getJson);
document.getElementById('button3').addEventListener('click',getExternal);

// 获取本地纯文本数据
function getText(){
  fetch("test.txt")
      .then((res) => res.text())
      .then(data => {
        console.log(data);
        document.getElementById('output').innerHTML = data;
      })
      .catch(err => console.log(err));
}

// 获取本地json数据
function getJson(){
  fetch("posts.json")
      .then((res) => res.json())
      .then(data => {
        console.log(data);

        let output = '';
        data.forEach((post) => {
          output += `<li>${post.title}</li>`;
        })
        document.getElementById('output').innerHTML = output;
      })
      .catch(err => console.log(err));
}

// 请求网络api
function getExternal(){
  // https://api.github.com/users
  fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then(data => {
        console.log(data);

        let output = '';
        data.forEach((user) => {
          output += `<li>${user.login}</li>`;
        })
        document.getElementById('output').innerHTML = output;
      })
      .catch(err => console.log(err));
}
