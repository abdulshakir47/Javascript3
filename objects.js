
// Objects In javascript

var user = {
    firstName:"Abdul",
    lastName:"Shakir",
    role:"Admin",
    loginCount:30,
    googleSignedIn:true,
    courseList:[],
    buyCourse:function(courseName){
        this.courseList.push(courseName)
    },
    getCourseCount:function(){
        return `${this.courseList.length}`
    },
    getCourseName:function(){
        return `${this.courseList}`
    }
}



// console.table(user)
// console.log(user.firstName);
// console.log(user["role"]);
// user.loginCount = 35;
// console.log(user.loginCount);

// Methods and objects in js

console.log(user.getCourseCount());
user.buyCourse("React Js")
console.log(user.getCourseCount());
console.log(user.getCourseName());








