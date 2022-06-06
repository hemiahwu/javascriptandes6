// 单例 设计模式
// 定义: 顾名思义，单例就是单一的意思，保证只有一个实例，并提供一个全局的访问点。
// 思路：新建对象时判断全局是否有该对象，如果有，就返回，没有就创建一个新对象返回。
// 应用: log日志 配置 加载动画 数据存储(vuex)

// const obj1 = new Object();
// const obj2 = new Object();
// console.log(obj1 === obj2);

const Loading = function () {
    let instance;

    const getInstance = function () {
        if (!instance) {
            // instance = new Object();
            instance = document.createElement("div");
        }
        return instance;
    }

    const startLoading = function () {
        if (!instance) {
            instance = getInstance();
            instance.className = "loading";
            document.body.appendChild(instance);
        }
        return instance;
    }

    const stopLoading = function () {
        if (instance) {
            document.body.removeChild(instance);
        }

        return instance;
    }

    return {
        // getInstance: getInstance,
        startLoading: startLoading,
        stopLoading: stopLoading,
    }
}



const button = document.getElementById("handleLoading");

button.addEventListener("click", () => {
    const loading = new Loading();
    loading.startLoading();
    button.style.display = "none";

    setTimeout(() => {
        loading.stopLoading();
        button.style.display = "block";

    }, 2000);
})


// const obj1 = loading.getInstance();
// const obj2 = loading.getInstance();
// console.log(obj1 === obj2);





