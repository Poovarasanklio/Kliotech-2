let allStudents = [
    'A',
    'B-',
    1,
    4,
    5,
    2,'-C'
  ]
let j=0;
let studentsWhoPass = [];
 for(let i=0;i<allStudents.length;i++){
    if(allStudents[i]>=3||allStudents[i]==5){
        studentsWhoPass[j]=allStudents[i];
        j++;
    }
    else if(allStudents[i]=='A'||allStudents[i]=='-A'||allStudents[i]=='B'||allStudents[i]=='-B'||allStudents[i]=='C'||allStudents[i]=='-C')
    {studentsWhoPass[j]=allStudents[i];
        j++;}
    }
 for(let i=0;i<studentsWhoPass.length;i++){
    console.log(`studentsWhoPass [${i}]`+studentsWhoPass[i]);
}