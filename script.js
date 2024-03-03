// 菜单的特效
const menuButton = document.getElementById("menu-button");
const Menu = document.getElementById("menu");
const aTag = document.getElementsByClassName("linktext");

let isMenuOpen = false;

menuButton.addEventListener("click", () => {
  if (isMenuOpen) {
    Menu.style.right = "-250px"; // 关闭菜单
    menuButton.classList.remove("menu-open");
  } else {
    Menu.style.right = "0"; // 打开菜单
    menuButton.classList.add("menu-open");
  }

  // 切换按钮样式
  menuButton.classList.toggle("cross");
  isMenuOpen = !isMenuOpen;
});

for (let i = 0; i < 4; i++) {
  aTag[i].addEventListener("click", function () {
    // 切换按钮样式
    menuButton.classList.toggle("cross");
    isMenuOpen = !isMenuOpen;
  });
}

// Menu.addEventListener("click", function () {
//   // 切换按钮样式
//   menuButton.classList.toggle("cross");
//   isMenuOpen = !isMenuOpen;
// });

// 小人吃豆豆的特效
const centerImage = document.querySelector(".center-image");

// 当页面加载后，延迟一段时间后显示图像
window.addEventListener("load", () => {
  setTimeout(() => {
    centerImage.style.opacity = "1"; // 设置透明度为 1，显示图像
  }, 500); // 延迟 800 毫秒（1秒）显示图像
});

document.getElementById("menu-button").addEventListener("click", function () {
  Menu.style.display = "block";
});

Menu.addEventListener("click", function () {
  Menu.style.display = "none";
  if (isMenuOpen) {
    menuButton.classList.toggle("cross");
    isMenuOpen = !isMenuOpen;
  }
});

function scrollToSection(title) {
  var targetElement = document.querySelector(
    'h1,h2 span:contains("' + title + '")'
  );
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });

    document.getElementById("menu").style.display = "none"; // Hide the menu after clicking
  }
}

// 获取span元素
var span = document.querySelector("#about span");

// 获取span文本内容
var text = span.textContent;

// 清空span内容
span.textContent = "";

// 初始化计数器
var i = 0;

// 使用setInterval定时器实现循环打字机效果
setInterval(function () {
  if (i < text.length) {
    span.textContent += text.charAt(i);
    i++;
  } else {
    // 文本添加完毕时重置计数器
    i = 0;
    span.textContent = "";
  }
}, 160); // 调整打字速度，这里是每100毫秒添加一个字符

// 获取所有具有fade-in类的元素
const fadeElements = document.querySelectorAll(".fade-in");

// 监听滚动事件
window.addEventListener("scroll", handleScroll);

// 初始时检查一次，以便在加载页面时也能应用效果
handleScroll();

// 处理滚动事件的函数
function handleScroll() {
  // 遍历所有fade-in元素
  fadeElements.forEach((element) => {
    // 获取元素的位置信息
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;

    // 如果元素的底部在视口内，或者元素的顶部在视口内，添加active类
    if (elementTop < window.innerHeight && elementBottom > 0) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}

// 获取两个包含h2元素的div
var cafeTitleDiv = document.querySelector(".overlay-text:nth-child(1)");
var mapDiv = document.querySelector(".overlay-text:nth-child(2)");

// 获取h2元素和文本内容
var cafeTitleH2 = cafeTitleDiv.querySelector("h2");
var mapH2 = mapDiv.querySelector("h2");

var cafeTitleText = cafeTitleH2.textContent;
var mapText = mapH2.textContent;

// 清空原有的文本内容
cafeTitleH2.textContent = "";
mapH2.textContent = "";

// 执行打字机效果的函数
function typeWriter(element, text) {
  var i = 0;
  setInterval(function () {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
    } else {
      // 文本添加完毕时重置计数器
      i = 0;
      element.textContent = text.charAt(i);
    }
  }, 100); // 调整打字速度，这里是每100毫秒添加一个字符
}

// 分别调用打字机效果的函数
typeWriter(cafeTitleH2, cafeTitleText);
typeWriter(mapH2, mapText);
