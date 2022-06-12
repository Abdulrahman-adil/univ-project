// import "login.html";
// import "result.html";
// for login
let student = {
    myEmail : 'Hassan.Saad1316@std.bus.asu.edu.eg',
    myPassword : '012345678910',
    studyGroup : 'group-four',
    semester : 'semester-one',
    program : 'program-six'
}

let group = document.querySelector("#group");
let groupError = document.querySelector('.study-group-error');
let semester = document.querySelector("#class");
let semesterError = document.querySelector('.semester-error');
let program = document.querySelector("#program");
let programError = document.querySelector('.program-error');

// -------------------------------------------------------------------------------------
let user = document.querySelector("#email");
let emailError = document.querySelector(".email-error");
let password = document.querySelector("#password");
let passwordError = document.querySelector(".password-error");

user.addEventListener('change', function() {
    let u_times = document.querySelector('.u_times');
    let u_check = document.querySelector('.u_check');
    if (user.value.length == 0 || user.value == null || user.value != student.myEmail) {
        emailError.textContent = '* الإيميل الأكاديمي غير صحيح';
        user.style.border = '1px solid red';
        u_times.style.display = 'block';
        u_check.style.display = 'none';
    } else {
        emailError.textContent = '';
        user.style.border = '1px solid green';
        u_times.style.display = 'none';
        u_check.style.display = 'block';
    }
});


password.addEventListener('change', function() {
    let p_times = document.querySelector('.p_times');
    let p_check = document.querySelector('.p_check');
    if (password.value.length < 10 || password.value == null || password.value != student.myPassword) {
        passwordError.textContent = '* كلمة المرور غير صحيحة';
        password.style.border = '1px solid red';
        p_times.style.display = 'block';
        p_check.style.display = 'none';
    } else {
        passwordError.textContent = ''
        password.style.border = '1px solid green';
        p_times.style.display = 'none';
        p_check.style.display = 'block';
    }
});


let submitBtn = document.querySelector("form");

submitBtn.addEventListener('submit', function (e) {
    e.preventDefault()
          if (user.value  === student.myEmail
        && password.value === student.myPassword
        && group.value    === student.studyGroup
        && semester.value === student.semester
        && program.value  === student.program) {
        window.location.href = 'pages.html'
    }

    (group.value != 'group-four')
        ? groupError.textContent = '* عفوا . أنت غير مسجل بهذه الفرقة الدراسية'
        : groupError.textContent = '';

    (semester.value != 'semester-one')
        ? semesterError.textContent = '* عفوا . أنت غير مسجل بهذا الفصل الدراسي'
        : semesterError.textContent = '';

    (program.value != 'program-six')
        ? programError.textContent = '* عفوا . أنت غير مسجل بهذا البرنامج'
        : programError.textContent = '';
});

let sittingNumber = document.querySelector('#sitting-number'),
    resultBtn     = document.querySelector('#result'),
    showResult    = document.querySelector('.showResult'),
    resultError   = document.querySelector('.resultError');

let mySittingNumber = '83026'

resultBtn.addEventListener('click', function () {
    if (sittingNumber.value == mySittingNumber) {
        showResult.style.display = 'block'
        resultError.textContent = ''
    } else {
        resultError.textContent = 'رقم الجلوس غير صحيح . رجاء تأكد من رقم جلوسك'
    }
});