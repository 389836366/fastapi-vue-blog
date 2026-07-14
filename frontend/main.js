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
}

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
    console.log("今日学习达标")
} else {
    console.log("今日学习未达标")
}

//加分练习
if (articleCount >= 3) {
    console.log("博客已经有多篇文章");
} else {
    console.log("博客文章还比较小");
}