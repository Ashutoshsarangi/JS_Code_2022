classes = ['P.k Jena', 'Ashu', 'B','c', 'D'];


let getStudent = (hasTeacherAssistance = false)=>{
    if(hasTeacherAssistance){
        [teacher, assistance, ...student] = classes;
    }else{
        [teacher, ...student]= classes;
    }

    return student;
}

console.log(getStudent(true));
console.log(getStudent());
