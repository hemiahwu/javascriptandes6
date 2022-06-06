const input = document.querySelector("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");

/** 防抖
 * 1.触发事件
 * 2.setTimeout
 * 3.clearTimeout
 * 闭包
 */

input.addEventListener("input", (e) => {
  defaultText.textContent = e.target.value;
  updateDebounceText(e.target.value);
  updateThrottleText(e.target.value);
});

// 防抖函数
function debounce(cb, delay = 1000) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

const updateDebounceText = debounce((text) => {
  debounceText.textContent = text;
});

// 节流函数
function throttle(cb, delay = 1000) {
  let shouldWait = false;
  let waitingArgs;
  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }
    cb(...args);
    shouldWait = true;

    setTimeout(() => {
      if (waitingArgs == null) {
        shouldWait = false;
      } else {
        cb(...waitingArgs);
        waitingArgs = null;
        shouldWait = false;
      }
    }, delay);
  };
}

const updateThrottleText = throttle((text) => {
  throttleText.textContent = text;
});
