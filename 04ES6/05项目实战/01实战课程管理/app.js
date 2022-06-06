// 课程构造函数
function Course(title, link, isbn) {
  this.title = title;
  this.link = link;
  this.isbn = isbn;
}

// UI 构造函数
function UI() {}

// 添加课程
UI.prototype.addCourseToList = function (course) {
  const list = document.getElementById("course-list");
  // 创建tr标签
  const row = document.createElement("tr");
  // 插入表格
  row.innerHTML = `
      <td>${course.title}</td>
      <td><a href="${course.link}">查看</a></td>
      <td>${course.isbn}</td>
      <td><a href="#" class="delete">X<a></td>
    `;

  list.appendChild(row);
};

// 弹窗提醒
UI.prototype.showAlert = function (message, className) {
  console.log("test");
  // 创建div
  const div = document.createElement("div");
  // 添加类
  div.className = `alert ${className}`;
  // 添加文本
  div.appendChild(document.createTextNode(message));
  // 获取父级元素
  const container = document.querySelector(".container");
  // 获取表单
  const form = document.querySelector("#course-form");
  // 插入dom
  container.insertBefore(div, form);

  // 清除
  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);
};

// 删除
UI.prototype.deleteCourse = function (target, ui) {
  if (target.className === "delete") {
    target.parentElement.parentElement.remove();
    ui.showAlert("删除成功", "success");
  }
};

// 清除
UI.prototype.clearFields = function () {
  document.getElementById("title").value = "";
  document.getElementById("link").value = "";
  document.getElementById("isbn").value = "";
};

// 添加事件
document.getElementById("course-form").addEventListener("submit", function (e) {
  // 获取表单值
  const title = document.getElementById("title").value,
    link = document.getElementById("link").value,
    isbn = document.getElementById("isbn").value;

  // 初始化
  const course = new Course(title, link, isbn);

  // 初始化
  const ui = new UI();

  // 校验
  if (title == "" || link == "" || isbn == "") {
    // 弹窗提醒
    ui.showAlert("请填写必填项", "error");
  } else {
    // 添加课程
    ui.addCourseToList(course);

    // 弹窗提醒
    ui.showAlert("添加成功", "success");

    // 清除
    ui.clearFields();
  }

  e.preventDefault();
});

// 删除事件
document.getElementById("course-list").addEventListener("click", function (e) {
  // 初始化 UI
  const ui = new UI();

  // 删除
  ui.deleteCourse(e.target, ui);
});
