
    // بيانات المستخدمين المخزنة مؤقتاً (مع الصلاحيات)
let users = JSON.parse(localStorage.getItem('cybereye_users')) || [
    {
        email: "student@cybereye.com",
        password: "Student@123",
        firstName: "طالب",
        lastName: "تجريبي",
        role: "student",
        createdAt: new Date().toISOString()
    },
    {
        email: "instructor@cybereye.com",
        password: "Instructor@123",
        firstName: "مدرب",
        lastName: "متخصص",
        role: "instructor",
        instructorCode: "TEACH123",
        specialization: "الأمن السيبراني",
        createdAt: new Date().toISOString()
    },
    {
        email: "admin@cybereye.com",
        password: "Admin@123",
        firstName: "مشرف",
        lastName: "النظام",
        role: "admin",
        adminKey: "ADMIN2024",
        createdAt: new Date().toISOString()
    }
];

// متغيرات DOM
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const forgotForm = document.getElementById('forgotForm');
const authBox = document.getElementById('authBox');
const tabBtns = document.querySelectorAll('.tab-btn');
const togglePasswordBtns = document.querySelectorAll('.toggle-password');
const forgotPasswordLink = document.getElementById('forgotPassword');
const backToLoginBtn = document.getElementById('backToLogin');
const modal = document.getElementById('successModal');
const modalTitle = document.getElementById('modalTitle');
const modalMessage = document.getElementById('modalMessage');
const modalButton = document.getElementById('modalButton');

// العناصر الجديدة
const userTypeSelector = document.getElementById('userTypeSelector');
const extraFields = document.getElementById('extraFields');
const userTypeCards = document.querySelectorAll('.user-type-card');
const userTypeRadios = document.querySelectorAll('input[name="userType"]');

// تهيئة الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // تذكر البريد الإلكتروني إذا كان محفوظاً
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
        document.getElementById('loginEmail').value = rememberedEmail;
        document.getElementById('rememberMe').checked = true;
    }
    
    // إضافة حدث على اختيار نوع المستخدم
    userTypeRadios.forEach(radio => {
        radio.addEventListener('change', handleUserTypeChange);
    });
    
    // إضافة تأثير التحديد على البطاقات
    userTypeCards.forEach(card => {
        card.addEventListener('click', function() {
            userTypeCards.forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
});

// التعامل مع تغيير نوع المستخدم
function handleUserTypeChange(e) {
    const selectedType = e.target.value;
    
    // إخفاء جميع الحقول الإضافية
    document.querySelectorAll('.extra-fields > div').forEach(field => {
        field.style.display = 'none';
    });
    
    // إظهار الحقول المناسبة
    if (selectedType === 'instructor') {
        document.querySelector('.instructor-fields').style.display = 'block';
        extraFields.style.display = 'block';
    } else if (selectedType === 'admin') {
        document.querySelector('.admin-fields').style.display = 'block';
        extraFields.style.display = 'block';
    } else {
        extraFields.style.display = 'none';
    }
    
    // تحديث نص الزر
    const loginBtn = document.querySelector('.login-btn i');
    if (selectedType === 'student') {
        loginBtn.className = 'fas fa-user-graduate';
    } else if (selectedType === 'instructor') {
        loginBtn.className = 'fas fa-chalkboard-teacher';
    } else {
        loginBtn.className = 'fas fa-user-shield';
    }
}

// تبديل بين تسجيل الدخول والتسجيل
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        
        // إزالة النشاط من جميع الأزرار
        tabBtns.forEach(b => b.classList.remove('active'));
        // إضافة النشاط للزر المحدد
        btn.classList.add('active');
        
        // إخفاء جميع النماذج
        document.querySelectorAll('.auth-form').forEach(form => {
            form.style.display = 'none';
        });
        
        // إظهار النموذج المحدد
        document.getElementById(`${tab}Form`).style.display = 'block';
        
        // إظهار أو إخفاء اختيار نوع المستخدم
        if (tab === 'login') {
            userTypeSelector.style.display = 'block';
        } else {
            userTypeSelector.style.display = 'none';
            extraFields.style.display = 'none';
        }
    });
});

// تبديل عرض كلمة المرور
togglePasswordBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const input = this.parentElement.querySelector('input');
        const icon = this.querySelector('i');
        
        if (input.type === 'password') {
            input.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            input.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    });
});

// التحقق من قوة كلمة المرور (للتسجيل)
const passwordInput = document.getElementById('signupPassword');
const strengthBar = document.getElementById('passwordStrength');
const strengthText = document.getElementById('strengthText');

if (passwordInput) {
    passwordInput.addEventListener('input', function() {
        const password = this.value;
        let strength = 0;
        
        if (password.length >= 8) strength += 25;
        if (/[A-Z]/.test(password)) strength += 25;
        if (/[0-9]/.test(password)) strength += 25;
        if (/[^A-Za-z0-9]/.test(password)) strength += 25;
        
        strengthBar.style.width = `${strength}%`;
        
        if (strength <= 25) {
            strengthBar.style.backgroundColor = '#ff4757';
            strengthText.textContent = 'ضعيفة';
        } else if (strength <= 50) {
            strengthBar.style.backgroundColor = '#ffa502';
            strengthText.textContent = 'متوسطة';
        } else if (strength <= 75) {
            strengthBar.style.backgroundColor = '#2ed573';
            strengthText.textContent = 'قوية';
        } else {
            strengthBar.style.backgroundColor = '#3742fa';
            strengthText.textContent = 'قوية جداً';
        }
    });
}

// التحقق من توفر البريد الإلكتروني (للتسجيل)
const emailInput = document.getElementById('signupEmail');
const emailCheck = document.getElementById('emailCheck');

if (emailInput) {
    emailInput.addEventListener('blur', function() {
        const email = this.value;
        const existingUser = users.find(user => user.email === email);
        
        if (existingUser) {
            emailCheck.style.display = 'block';
            emailCheck.innerHTML = '<i class="fas fa-times-circle"></i> البريد الإلكتروني مستخدم بالفعل';
            emailCheck.style.color = '#ff4757';
        } else if (email.includes('@')) {
            emailCheck.style.display = 'block';
            emailCheck.innerHTML = '<i class="fas fa-check-circle"></i> البريد الإلكتروني متاح';
            emailCheck.style.color = '#2ed573';
        } else {
            emailCheck.style.display = 'none';
        }
    });
}

// استعادة كلمة المرور
forgotPasswordLink.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('.auth-form').forEach(form => {
        form.style.display = 'none';
    });
    forgotForm.style.display = 'block';
    userTypeSelector.style.display = 'none';
    extraFields.style.display = 'none';
    
    tabBtns.forEach(btn => btn.classList.remove('active'));
});

// العودة لتسجيل الدخول
backToLoginBtn.addEventListener('click', function() {
    forgotForm.style.display = 'none';
    loginForm.style.display = 'block';
    userTypeSelector.style.display = 'block';
    tabBtns[0].classList.add('active');
});

// تسجيل الدخول
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    const userType = document.querySelector('input[name="userType"]:checked').value;
    
    // التحقق من الحساب
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
        showModal('فشل تسجيل الدخول', 'البريد الإلكتروني أو كلمة المرور غير صحيحة', 'error');
        modalButton.onclick = function() {
            modal.style.display = 'none';
        };
        return;
    }
    
    // التحقق من نوع المستخدم
    if (user.role !== userType) {
        showModal('نوع حساب خاطئ', `هذا الحساب ليس ${getRoleArabic(userType)}`, 'error');
        modalButton.onclick = function() {
            modal.style.display = 'none';
        };
        return;
    }
    
    // تحقق إضافي للمدربين
    if (userType === 'instructor') {
        const instructorCode = document.getElementById('instructorCode').value;
        if (!instructorCode || instructorCode !== user.instructorCode) {
            showModal('كود خاطئ', 'كود المدرب غير صحيح', 'error');
            return;
        }
    }
    
    // تحقق إضافي للمشرفين
    if (userType === 'admin') {
        const adminKey = document.getElementById('adminKey').value;
        if (!adminKey || adminKey !== user.adminKey) {
            showModal('مفتاح خاطئ', 'المفتاح السري غير صحيح', 'error');
            return;
        }
    }
    
    // حفظ بيانات الجلسة
    const sessionData = {
        ...user,
        loginTime: new Date().toISOString(),
        sessionId: 'session_' + Date.now()
    };
    
    localStorage.setItem('currentUser', JSON.stringify(sessionData));
    
    if (rememberMe) {
        localStorage.setItem('rememberedEmail', email);
    } else {
        localStorage.removeItem('rememberedEmail');
    }
    
    // عرض رسالة النجاح
    const welcomeMessage = getWelcomeMessage(userType, user.firstName);
    showModal('تسجيل الدخول ناجح', welcomeMessage);
    
    // التوجيه إلى الصفحة المناسبة
    modalButton.onclick = function() {
        redirectToDashboard(userType);
    };
});

// إنشاء حساب جديد (للتسجيل كطالب فقط)
signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const terms = document.getElementById('terms').checked;
    
    // التحقق من كلمة المرور
    if (password !== confirmPassword) {
        showModal('خطأ في التأكيد', 'كلمات المرور غير متطابقة', 'error');
        return;
    }
    
    if (!terms) {
        showModal('خطأ في التسجيل', 'يجب الموافقة على الشروط والأحكام', 'error');
        return;
    }
    
    // التحقق من توفر البريد الإلكتروني
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        showModal('البريد مستخدم', 'هذا البريد الإلكتروني مسجل بالفعل', 'error');
        return;
    }
    
    // إنشاء حساب جديد (طالب فقط)
    const newUser = {
        email,
        password,
        firstName,
        lastName,
        role: 'student', // التسجيل يكون فقط كطالب
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('cybereye_users', JSON.stringify(users));
    
    // حفظ بيانات الجلسة
    localStorage.setItem('currentUser', JSON.stringify({
        ...newUser,
        loginTime: new Date().toISOString()
    }));
    
    // عرض رسالة النجاح
    showModal('حساب جديد', 'تم إنشاء حسابك بنجاح! مرحباً بك في CyberEye');
    
    // التوجيه إلى لوحة الطالب
    modalButton.onclick = function() {
        window.location.href = '../html/student-dashboard.html';
    };
});

// استعادة كلمة المرور
forgotForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('forgotEmail').value;
    const user = users.find(u => u.email === email);
    
    if (user) {
        showModal('تم الإرسال', 'تم إرسال رابط إعادة التعيين إلى بريدك الإلكتروني');
        modalButton.onclick = function() {
            modal.style.display = 'none';
            backToLoginBtn.click();
        };
    } else {
        showModal('غير موجود', 'لا يوجد حساب مرتبط بهذا البريد الإلكتروني', 'error');
        modalButton.onclick = function() {
            modal.style.display = 'none';
        };
    }
});

// الدخول بحساب Google
document.querySelector('.social-btn.google').addEventListener('click', function() {
    showModal('قريباً', 'ميزة الدخول بحساب Google قريباً', 'info');
});

// الدخول بحساب Microsoft
document.querySelector('.social-btn.microsoft').addEventListener('click', function() {
    showModal('قريباً', 'ميزة الدخول بحساب Microsoft قريباً', 'info');
});

// دالة عرض المودال
function showModal(title, message, type = 'success') {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    
    const modalIcon = document.querySelector('.modal-icon i');
    if (type === 'error') {
        modalIcon.className = 'fas fa-times-circle';
        modalIcon.style.color = '#ff4757';
    } else if (type === 'info') {
        modalIcon.className = 'fas fa-info-circle';
        modalIcon.style.color = '#3742fa';
    } else {
        modalIcon.className = 'fas fa-check-circle';
        modalIcon.style.color = '#2ed573';
    }
    
    modal.style.display = 'flex';
}

// إغلاق المودال عند النقر خارجها
window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// دالة الحصول على اسم الصلاحية بالعربي
function getRoleArabic(role) {
    const roles = {
        'student': 'طالب',
        'instructor': 'مدرب',
        'admin': 'مشرف'
    };
    return roles[role] || role;
}

// دالة رسالة الترحيب
function getWelcomeMessage(role, name) {
    const messages = {
        'student': `مرحباً ${name}! سيتم تحويلك إلى لوحة الطالب`,
        'instructor': `أهلاً بك ${name}! سيتم تحويلك إلى لوحة المدربين`,
        'admin': `مرحباً ${name}! سيتم تحويلك إلى لوحة الإدارة`
    };
    return messages[role] || 'مرحباً بك!';
}

// دالة التوجيه للصفحة المناسبة
function redirectToDashboard(role) {
    const dashboards = {
        'student': '../html/student.html',
        'instructor': '../html/instructor.html',
        'admin': '../html/admin.html'
    };
    
    const page = dashboards[role] || '../html/index.html';
    window.location.href = page;
}

// تحويل الزر للصفحة الرئيسية
document.getElementById('signHome').onclick = function(e) {
    e.preventDefault();
    window.location.href = '../html/index.html';
};

