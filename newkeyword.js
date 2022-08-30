var user = function(firstName,courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course Count is ${this.courseCount}`);
    }
}

var shakir = new user("shakir",2)
console.log(shakir);

var hasheer = new user("Hasheer",1)
console.log(hasheer);