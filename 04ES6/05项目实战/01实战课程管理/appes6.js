class Course {
  constructor(title, link, isbn) {
    this.title = title;
    this.link = link;
    this.isbn = isbn;
  }
}

class UI {
  addCourseToList(course) {
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
  }

  showAlert(message, className) {
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
    }, 1000);
  }

  deleteCourse(target, ui) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
      ui.showAlert("删除成功", "success");
    }
  }

  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("link").value = "";
    document.getElementById("isbn").value = "";
  }
}

class Store {
  static getCourses() {
    let courses;
    if (localStorage.getItem("courses") === null) {
      courses = [];
    } else {
      courses = JSON.parse(localStorage.getItem("courses"));
    }

    return courses;
  }

  static displayCourses() {
    const courses = Store.getCourses();

    courses.forEach(function (course) {
      const ui = new UI();

      // 添加
      ui.addCourseToList(course);
    });
  }

  static addCourse(course) {
    const courses = Store.getCourses();

    courses.push(course);

    localStorage.setItem("courses", JSON.stringify(courses));
  }

  static removeCourse(isbn) {
    const courses = Store.getCourses();

    courses.forEach(function (course, index) {
      if (course.isbn === isbn) {
        courses.splice(index, 1);
      }
    });

    localStorage.setItem("courses", JSON.stringify(courses));
  }
}

// DOM加载事件
document.addEventListener("DOMContentLoaded", Store.displayCourses);

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

    // 加入缓存
    Store.addCourse(course);

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

  // console.log(e.target.parentElement.previousElementSibling.textContent);
  // 删除缓存
  Store.removeCourse(e.target.parentElement.previousElementSibling.textContent);
});
