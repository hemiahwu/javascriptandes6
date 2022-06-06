const http = new EasyHttp;

// 请求数据
// http.get("http://jsonplaceholder.typicode.com/users")
//     .then((data) => {
//       console.log(data);
//     })
//     .catch(err => console.log(err))

// 传输数据
const data = {
  name:"Henry",
  username:"米斯特吴",
  email:"27732357@qq.com"
};

// post user
// http.post("http://jsonplaceholder.typicode.com/users",data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// update user
// http.put("http://jsonplaceholder.typicode.com/users/2",data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// delete user
http.delete('http://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(err => console.log(err));
