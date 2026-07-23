

// 7月15日：对象和数组
const articleOne = {
    title: "我的第一篇博客",
    summary: "重启项目第一天",
    date: "2026-07-08",
    category: "项目记录",
    isPublished: true,
    url: "article.html"
};

const articleTwo = {
    title: "我的HTML学习记录",
    summary: "记录HTML常用标签和页面结构。",
    date: "2026-07-10",
    category: "前端学习",
    isPublished: true,
    url: "article2.html"
};

const articles = [articleOne, articleTwo];

function showArticleInfo(article) {
    console.log("标题：" + article.title);
    console.log("简介：" + article.summary);
    console.log("日期：" + article.date);
}

// 独立练习
const articleThree = {
    title: "我的JavaScript学习记录",
    summary: "记录JavaScript和DOM基础知识。",
    date: "2026-07-17",
    category: "前端学习",
    isPublished: false
};

articles.push(articleThree);



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

// 7月23日：根据数组动态生成文章卡片
const articleFour = {
    title: "测试内容",
    summary: "单纯做测试",
    date: "2026-07-23",
    category: "测试",
    isPublished: false
};

const postListElement = document.querySelector("#post-list");

console.log(postListElement);

articles.push(articleFour);

function createArticleCard(article) {
    const articleElement =
        document.createElement("article");

    articleElement.classList.add("post-card");

    const titleElement =
        document.createElement("h3");

    titleElement.classList.add("post-title");

    if (article.url) {
        const linkElement = 
            document.createElement("a");
        
        linkElement.textContent = article.title;
        linkElement.href = article.url;
        
        titleElement.appendChild(linkElement);
    } else {
        titleElement.textContent = article.title;
    }

    const summaryElement =
        document.createElement("p");

    summaryElement.classList.add("post-summary");
    summaryElement.textContent = article.summary;

    const dateElement =
        document.createElement("span");

    dateElement.classList.add("post-date");
    dateElement.textContent =
        "发布时间：" + article.date;

    const categoryElement =
        document.createElement("p");
    
    categoryElement.classList.add("post-category");
    categoryElement.textContent =
        "分类：" + article.category;

    const statusElement =
        document.createElement("p");

    if (article.isPublished) {
        statusElement.textContent = "状态：已发布";
        statusElement.classList.add("status-published");
    } else {
        statusElement.textContent = "状态：草稿";
        statusElement.classList.add("status-draft");
    }

    articleElement.appendChild(titleElement);
    articleElement.appendChild(summaryElement);
    articleElement.appendChild(dateElement);
    articleElement.appendChild(categoryElement);
    articleElement.appendChild(statusElement);

    console.log("正在创建卡片：" + article.title);

    return articleElement;
}

function renderArticleList(articleList) {
    postListElement.textContent = "";

    for (const article of articleList) {
        const articleCardElement =
            createArticleCard(article);

        postListElement.appendChild(
            articleCardElement
        );
    }
}

renderArticleList(articles);

const firstArticleTitleElement =
    document.querySelector(".post-title");

console.log(firstArticleTitleElement);
console.log(firstArticleTitleElement.textContent);

// 加练
const articleContElement = document.querySelector("#article-count");

function renderArticleCount(articleList) {
    const countElement = document.createElement("p");
    countElement.textContent = "共" + articleList.length + "篇文章";
    articleContElement.appendChild(countElement);
}
renderArticleCount(articles);

// 7.24
const showAllButton =
    document.querySelector("#show-all-button");

const showPublishedButton =
    document.querySelector("#show-published-button");

const showDraftButton =
    document.querySelector("#show-draft-button");

function getPublishedArticles(articleList) {
    const publishedArticles = [];

    for (const article of articleList) {
        if (article.isPublished) {
            publishedArticles.push(article);
        }
    }

    return publishedArticles;
}

function getDraftArticles(articleList) {
    const draftArticles = [];

    for (const article of articleList) {
        if (!article.isPublished) {
            draftArticles.push(article);
        }
    }

    return draftArticles;
}

function showAllArticles() {
    renderArticleList(articles);
    renderArticleCount(articles);
}

function showPublishedArticles() {
    const publishedArticles =
        getPublishedArticles(articles);

    renderArticleList(publishedArticles);
    renderArticleCount(publishedArticles);
}

function showDraftArticles() {
    const draftArticles = 
        getDraftArticles(articles);
    
    renderArticleList(draftArticles);
    renderArticleCount(draftArticles);    
}

showAllButton.addEventListener(
    "click",
    showAllArticles
);

showPublishedButton.addEventListener(
    "click",
    showPublishedArticles
);

showDraftButton.addEventListener(
    "click",
    showDraftArticles
);