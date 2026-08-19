let students = [

    {
        id: 1,
        name: "Nguyen Van A",
        age: 20,
        class: "JS01",
        score: 8.5
    },

    {
        id: 2,
        name: "Tran Thi B",
        age: 21,
        class: "JS01",
        score: 9.2
    },

    {
        id: 3,
        name: "Le Van C",
        age: 20,
        class: "JS02",
        score: 7.8
    },

    {
        id: 4,
        name: "Pham Thi D",
        age: 22,
        class: "JS02",
        score: 9.5
    }

];

let highestStudent = students[0];

for (let i = 1; i < students.length; i++) {

    if (students[i].score > highestStudent.score) {

        highestStudent = students[i];

    }

}

console.log("Học sinh có điểm cao nhất:");

console.log("ID:", highestStudent.id);
console.log("Tên:", highestStudent.name);
console.log("Tuổi:", highestStudent.age);
console.log("Lớp:", highestStudent.class);
console.log("Điểm:", highestStudent.score);
