console.log("个人博客项目启动成功");

const blogName = "yongyang的博客";
let articleCount = 3;
const isLearning = true;

console.log(blogName);
console.log(articleCount);
console.log(isLearning);

articleCount = articleCount + 1;

console.log("博客名称：" + blogName);
console.log("文章数量：" + articleCount);
console.log("正在学习：" + isLearning);

let studyDays = 4;
console.log(studyDays);
studyDays = studyDays + 1;
console.log(studyDays);
const currentTopic = "JavaScript基础";
console.log("当前学习内容："+ currentTopic);

const completedDays = 5;
const targetDays = 7;

console.log(completedDays >= targetDays)
console.log(completedDays < targetDays)

if (completedDays >= targetDays) {
    console.log("本周学习目标已完成");
} else {
    const remainingDays = targetDays - completedDays;

    console.log("本周学习目标还没有完成");
    console.log("距离目标还差：" + remainingDays + "天");
}

if (isLearning === true) {
  console.log("当前正在学习");
} else {
  console.log("当前没有学习");
}

const studyHours = 2;

if (studyHours >= 2) {
    console.log("今日学习达标");
} else {
    console.log("今日学习未达标");
}

//加分练习
if (articleCount >= 3) {
    console.log("博客已经有多篇文章");
} else {
    console.log("博客文章还比较少");
}

// 7月14日：函数练习
function showBlogStatus() {
    console.log("个人博客正在开发中");
}
showBlogStatus();

function showArticleCount(count) {
    console.log("当前文章数量：" + count);
}
showArticleCount(3);
showArticleCount(5);

function showStudyProgress(completed, target) {
    console.log("已经学习：" + completed + "天");
    console.log("目标天数：" + target + "天");
}
showStudyProgress(5, 7);

function calculateRemainingDays(target, completed) {
  return target - completed;
}

const remainingDaysResult = calculateRemainingDays(7, 5);
console.log("还需要学习：" + remainingDaysResult + "天");

function getStudyStatus(hours) {
    if (hours >= 2) {
        return "今日学习达标";
    } else {
        return "今日学习未达标";
    }
}
const statusOne = getStudyStatus(2);
const statusTwo = getStudyStatus(1);

console.log(statusOne);
console.log(statusTwo);

// 独立练习
function getArticleMessage(count) {
    if (count >=3) {
        return "博客已经有多篇文章";
    } else {
        return "博客文章还比较少";
    }
}

console.log(getArticleMessage(4));
console.log(getArticleMessage(1));

// 7月15日：对象和数组
const articleOne = {
    title: "我的第一篇博客",
    summary: "重启项目第一天",
    date: "2026-07-08",
    category: "项目记录",
    isPublished: true
};

console.log(articleOne.title);
console.log(articleOne.summary);
console.log(articleOne.date);
console.log(articleOne.isPublished);

console.log("文章标题：" + articleOne.title);
console.log("文章简介：" + articleOne.summary);
console.log("发布时间：" + articleOne.date);

const articleTwo = {
  title: "我为什么要做这个项目",
  summary: "我想通过这个项目跑通前端、后端、数据库和部署。",
  date: "2026-07-08",
  isPublished: true
};

console.log(articleTwo.title);

const articles = [articleOne, articleTwo];

console.log(articles);
console.log(articles[0]);
console.log(articles[1]);

console.log(articles[0].title);
console.log(articles[1].summary);

console.log(articles.length);
console.log("当前文章数量：" + articles.length);

function showArticleInfo(article) {
    console.log("标题：" + article.title);
    console.log("简介：" + article.summary);
    console.log("日期：" + article.date);
}

// showArticleInfo(articleOne);
// showArticleInfo(articleTwo);

// 独立练习
const articleThree = {
    title: "学习Flex布局",
    summary: "今天给博客添加导航栏，并学习使用Flex完成页面布局。",
    date: "2026-07-10",
    isPublished: true
};

articles.push(articleThree);

console.log(articleThree.title);
console.log(articleThree.date);
console.log(articles.length);

const articleMessage = getArticleMessage(articles.length);
console.log(articleMessage);

// 7月16日：循环练习
for (const article of articles) {
    console.log(article.title);
}

for (const article of articles) {
  console.log("文章标题：" + article.title);
  console.log("文章简介：" + article.summary);
  console.log("发布时间：" + article.date);
  console.log("----------------");
}

for (const article of articles) {
    showArticleInfo(article);
}

for (const article of articles) {
    if (article.isPublished === true) {
        console.log("已发布文章: " + article.title);
    } 
}

// 独立练习
let publishedCount = 0;
for (const article of articles) {
    if (article.isPublished) {
        publishedCount = publishedCount + 1;
    }
}
console.log("已发布文章数量：" + publishedCount);

// 加分练习
function showPublishedArticles(articleList) {
    for (const article of articleList) {
        if (article.isPublished) {
            console.log(article.title);
        }
    }
}
showPublishedArticles(articles);

// 7月17日：DOM基础
const blogTitleElement = document.querySelector("#blog-title");
console.log(blogTitleElement);
console.log(blogTitleElement.textContent);

const blogDescriptionElement =document.querySelector("#blog-description");
console.log(blogDescriptionElement.textContent);

blogDescriptionElement.textContent = "记录我的HTML、CSS和JavaScript学习过程。";

// 独立练习一：读取页脚文字
const footerTextElement = document.querySelector("footer p");
console.log(footerTextElement.textContent);

// 独立练习二：读取第一篇文章标题
const firstArticleLinkElement = document.querySelector(".post-title a");
console.log(firstArticleLinkElement);
console.log(firstArticleLinkElement.textContent);

// 7月18日：点击事件
const changeDescriptionButton = document.querySelector("#change-description-button");

function changeBlogDescription() {
    blogDescriptionElement.textContent = "欢迎来到我的个人博客!";
}

changeDescriptionButton.addEventListener("click",changeBlogDescription);

// 独立任务
const restoreDescriptionButton = document.querySelector("#restore-description-button");

function restoreBlogDescription() {
    blogDescriptionElement.textContent = "记录我的编程学习和成长。";
}

restoreDescriptionButton.addEventListener("click", restoreBlogDescription);

// 7月19日：使用classList显示和隐藏元素
const toggleAboutButton = document.querySelector("#toggle-about-button");
const aboutSection = document.querySelector("#about");

function toggleAboutSection() {
    aboutSection.classList.toggle("is-hidden");

    if (aboutSection.classList.contains("is-hidden")) {
        toggleAboutButton.textContent = "显示“关于我”";
    } else {
        toggleAboutButton.textContent = "隐藏“关于我”";
    }
}

toggleAboutButton.addEventListener("click", toggleAboutSection);

// 7月20日：使用对象数据渲染文章卡片
const firstArticleTitleElement = document.querySelector("#first-article-title");

const firstArticleSummaryElement = document.querySelector("#first-article-summary");

const firstArticleDateElement = document.querySelector("#first-article-date");

const firstArticleCategoryElement = document.querySelector("#first-article-category");

function renderArticleCard(article) {
    firstArticleTitleElement.textContent =
        article.title;

    firstArticleSummaryElement.textContent =
        article.summary;

    firstArticleDateElement.textContent =
        "发布时间：" + article.date;

    firstArticleCategoryElement.textContent =
        "分类：" + article.category;    
}

renderArticleCard(articleOne);

