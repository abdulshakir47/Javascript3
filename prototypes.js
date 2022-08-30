var User = function(firstName,courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course Count is ${this.courseCount}`);
    }
}

User.prototype.getFirstName = function(){
    console.log(`Your FirstName is ${this.firstName}`);
}

var shakir = new User("shakir",2)
shakir.getFirstName()
var hasheer = new User("Hasheer",1)
//console.log(hasheer);
hasheer.getFirstName()
