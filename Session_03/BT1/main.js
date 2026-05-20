// Mảng sinh viên
let students = JSON.parse(localStorage.getItem("students")) || [];

// DOM
const studentList = document.getElementById("studentList");

const btnAdd = document.getElementById("btnAdd");
const btnClose = document.getElementById("btnClose");

const modal = document.getElementById("modal");

const studentForm = document.getElementById("studentForm");

const totalStudents = document.getElementById("totalStudents");
const avgScore = document.getElementById("avgScore");

const message = document.getElementById("message");


// Render dữ liệu
function renderStudents(){

    studentList.innerHTML = "";

    students.forEach((student, index) => {

        studentList.innerHTML += `
            <tr>

                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.dob}</td>
                <td>${student.className}</td>
                <td>${student.gpa}</td>
                <td>${student.email}</td>

                <td>
                    <button class="btn-edit" onclick="editStudent(${index})">
                        Sửa
                    </button>

                    <button class="btn-delete" onclick="deleteStudent(${index})">
                        Xóa
                    </button>
                </td>

            </tr>
        `;
    });

    updateStatistics();
}


// Cập nhật thống kê
function updateStatistics(){

    totalStudents.innerText = students.length;

    let total = 0;

    students.forEach(student => {
        total += Number(student.gpa);
    });

    let avg = students.length ? (total / students.length).toFixed(1) : 0;

    avgScore.innerText = avg;
}


// Mở modal
btnAdd.onclick = function(){

    modal.classList.remove("hidden");

    studentForm.reset();

    document.getElementById("editIndex").value = "";

    document.getElementById("formTitle").innerText = "Thêm Sinh Viên";
};


// Đóng modal
btnClose.onclick = function(){

    modal.classList.add("hidden");
};


// Submit form
studentForm.onsubmit = function(e){

    e.preventDefault();

    const student = {

        id: document.getElementById("studentId").value,
        name: document.getElementById("studentName").value,
        dob: document.getElementById("studentDob").value,
        className: document.getElementById("studentClass").value,
        gpa: document.getElementById("studentGpa").value,
        email: document.getElementById("studentEmail").value
    };

    const editIndex = document.getElementById("editIndex").value;

    // Thêm
    if(editIndex === ""){

        students.push(student);

        showMessage("Thêm sinh viên thành công");
    }

    // Sửa
    else{

        students[editIndex] = student;

        showMessage("Cập nhật sinh viên thành công");
    }

    localStorage.setItem("students", JSON.stringify(students));

    renderStudents();

    modal.classList.add("hidden");
};


// Sửa sinh viên
function editStudent(index){

    const student = students[index];

    modal.classList.remove("hidden");

    document.getElementById("formTitle").innerText = "Cập nhật Sinh Viên";

    document.getElementById("editIndex").value = index;

    document.getElementById("studentId").value = student.id;
    document.getElementById("studentName").value = student.name;
    document.getElementById("studentDob").value = student.dob;
    document.getElementById("studentClass").value = student.className;
    document.getElementById("studentGpa").value = student.gpa;
    document.getElementById("studentEmail").value = student.email;
}


// Xóa sinh viên
function deleteStudent(index){

    const confirmDelete = confirm("Bạn có chắc muốn xóa không?");

    if(confirmDelete){

        students.splice(index, 1);

        localStorage.setItem("students", JSON.stringify(students));

        renderStudents();

        showMessage("Xóa sinh viên thành công");
    }
}


// Hiển thị thông báo
function showMessage(text){

    message.innerText = text;

    setTimeout(() => {
        message.innerText = "";
    }, 3000);
}


// Khởi chạy
renderStudents();