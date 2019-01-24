class People {
    constructor(personalData) {
      this.name = personalData.name;
      this.age = personalData.age;
      this.location = personalData.location;
      this.gender = personalData.gender;
    }
    speak() {
      console.log(`Hello, my name is ${this.name}, I am from ${this.location}`);
    }
  }
  
  class Instructors extends People {
    constructor(info) {
      super(info);
      this.specialty = info.specialty;
      this.favLanguage = info.favLanguage;
      this.catchPhrase = info.catchPhrase; 
    }
    demo(subject) {
      console.log(`Today we are learning about ` + subject);
    }
    grade(student, subject) {
      console.log(student + ' gets a perfect score on ' + subject);
    }
  }
  class Student extends People {
    constructor(studentData) {
      super(studentData);
      this.previousBackground = studentData.previousBackground;
      this.className = studentData.className;
      this.favSubject = studentData.favSubject;
    }
    listSubjects() {
      console.log(this.favSubject);
    }
    PRAssignment(subject) {
      console.log(this.name + ' has submitted a PR for ' + subject)
    }
    sprintChallenge(subject) {
      console.log(this.name + ' has begun sprint challenge on ' + subject);
    }
  }
  class ProjectManagers extends Instructors {
    constructor(PMinfo){
      super(PMinfo);
      this.gradClassName = PMinfo.gradClassName;
      this.favInstructor = PMinfo.favInstructor;
    }
    standup(channel) {
      console.log(this.name + ' announces to '+ channel + ' @channel standup time!');
    }
    debugsCode(student, subject) {
      console.log(this.name + ' debugs ' + student + 's code on ' + subject);
    }
  }
  //ProjectManagers
  
  const Rachel = new ProjectManagers ({
    name: 'Rachel',
    age: '22',
    location: 'Tampa Bay',
    gender: 'Female',
  });
  
  const Joe = new ProjectManagers ({
    name: 'Joe',
    age: '32',
    location: 'Boulder, Colorado',
    gender: 'Male',
  });
  
  
  
  
  // INSTRUCTORS
  
  const Ed = new Instructors ({
    name: 'Ed',
    age: '27',
    location: 'ImaginationLand',
    gender: 'Male',
    specialty: 'Redux',
    favLanguage: 'Javascript',
    catchPhrase: 'Gottem!!',
  });
  
  const Anne = new Instructors ({
    name: 'Anne',
    age: '47',
    location: 'New York',
    gender: 'Female',
    specialty: 'CSS',
    favLanguage: 'Javascript',
    catchPhrase: 'Catch Phrases are passe',
  });
  
  const Jerry = new Instructors ({
    name: 'Jerry',
    age: '32',
    location: 'Boston',
    gender: 'Male',
    specialty: 'Java',
    favLanguage: 'English',
    catchPhrase: 'Its High Noon',
  });
  
  //STUDENTS
  const Nesta = new Student ({
    name: 'Nesta',
    age: '22',
    location: 'Anchorage, Alaska',
    gender: 'Male',
    favSubject: ['HTML', 'CSS', 'Javascript']
  });
  
  const Kelly = new Student ({
    age: '24',
    location: 'Seoul, Korea',
    gender: 'Female',
  });
  
  const Neal = new Student ({
    name: 'Neal',
    age: '21',
    location: 'Granite Bay, California',
    gender: 'Male',
  });
  
  Nesta.speak();// hello, nesta from anchorage
  console.log('------------');
  Ed.grade('Nesta', 'JavasCript');//perfect score on JS
  console.log('------------');
  Ed.demo('HTML');//learning about html
  console.log('-----------');
  console.log(Ed.catchPhrase) //Gottem !!
  console.log('-------------');
  console.log(Kelly.age);//24
  console.log('------------');
  console.log(Neal.gender);//MALe
  console.log('-------------');
  console.log(Anne.specialty);//CSS
  console.log('-------------');
  Nesta.sprintChallenge('Javascript');//has begun challenge
  console.log('-------------');
  Nesta.listSubjects();//html,css, jscript
  console.log('-------------');
  Nesta.PRAssignment('CSS');
  console.log('-------------');
  Rachel.standup('General');
  console.log('-------------');
  Joe.debugsCode('Nesta', 'Javascript');
  
  
  
  
