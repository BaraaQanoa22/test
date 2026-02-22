
// بيانات طلاب الأمن السيبراني
const cyberStudents = [
    {id: 1, name: "أحمد القرني", studentId: "SEC-2023001", skill: "expert", skillText: "خبير", specialization: "pentest", specializationText: "اختبار الاختراق", certs: ["CEH", "OSCP"], status: "active", threats: 24},
    {id: 2, name: "سارة الحربي", studentId: "SEC-2023002", skill: "advanced", skillText: "متقدم", specialization: "forensics", specializationText: "التحقيق الجنائي الرقمي", certs: ["CHFI", "GCFA"], status: "active", threats: 18},
    {id: 3, name: "خالد الشمري", studentId: "SEC-2023003", skill: "expert", skillText: "خبير", specialization: "network", specializationText: "أمن الشبكات", certs: ["CCNA Security", "CCNP Security"], status: "active", threats: 32},
    {id: 4, name: "نورة العتيبي", studentId: "SEC-2023004", skill: "intermediate", skillText: "متوسط", specialization: "appsec", specializationText: "أمن التطبيقات", certs: ["GWAPT"], status: "active", threats: 12},
    {id: 5, name: "محمد الغامدي", studentId: "SEC-2023005", skill: "advanced", skillText: "متقدم", specialization: "risk", specializationText: "إدارة المخاطر", certs: ["CISSP", "CRISC"], status: "active", threats: 21},
    {id: 6, name: "لينا الفهد", studentId: "SEC-2023006", skill: "beginner", skillText: "مبتدئ", specialization: "pentest", specializationText: "اختبار الاختراق", certs: ["eJPT"], status: "active", threats: 5},
    {id: 7, name: "فيصل القحطاني", studentId: "SEC-2023007", skill: "expert", skillText: "خبير", specialization: "forensics", specializationText: "التحقيق الجنائي الرقمي", certs: ["GCFE", "EnCE"], status: "inactive", threats: 28},
    {id: 8, name: "ريم الزهراني", studentId: "SEC-2023008", skill: "advanced", skillText: "متقدم", specialization: "appsec", specializationText: "أمن التطبيقات", certs: ["CSSLP"], status: "active", threats: 16},
    {id: 9, name: "ياسر الحارثي", studentId: "SEC-2023009", skill: "intermediate", skillText: "متوسط", specialization: "network", specializationText: "أمن الشبكات", certs: ["Security+"], status: "active", threats: 9},
    {id: 10, name: "أمل المطيري", studentId: "SEC-2023010", skill: "expert", skillText: "خبير", specialization: "risk", specializationText: "إدارة المخاطر", certs: ["CISM", "CISA"], status: "active", threats: 31},
    {id: 11, name: "طارق الهذلي", studentId: "SEC-2023011", skill: "advanced", skillText: "متقدم", specialization: "pentest", specializationText: "اختبار الاختراق", certs: ["GPEN", "GXPN"], status: "active", threats: 22},
    {id: 12, name: "هديل السبيعي", studentId: "SEC-2023012", skill: "beginner", skillText: "مبتدئ", specialization: "forensics", specializationText: "التحقيق الجنائي الرقمي", certs: [], status: "active", threats: 3},
    {id: 13, name: "بدر العوفي", studentId: "SEC-2023013", skill: "intermediate", skillText: "متوسط", specialization: "network", specializationText: "أمن الشبكات", certs: ["CCSA"], status: "active", threats: 11},
    {id: 14, name: "شهد الغامدي", studentId: "SEC-2023014", skill: "advanced", skillText: "متقدم", specialization: "appsec", specializationText: "أمن التطبيقات", certs: ["GWEB"], status: "active", threats: 17},
    {id: 15, name: "سعود المري", studentId: "SEC-2023015", skill: "expert", skillText: "خبير", specialization: "risk", specializationText: "إدارة المخاطر", certs: ["CIPM"], status: "active", threats: 29},
    {id: 16, name: "داليا القرشي", studentId: "SEC-2023016", skill: "intermediate", skillText: "متوسط", specialization: "pentest", specializationText: "اختبار الاختراق", certs: ["PNPT"], status: "active", threats: 8},
    {id: 17, name: "ماجد الحربي", studentId: "SEC-2023017", skill: "beginner", skillText: "مبتدئ", specialization: "forensics", specializationText: "التحقيق الجنائي الرقمي", certs: [], status: "inactive", threats: 2},
    {id: 18, name: "غادة العلي", studentId: "SEC-2023018", skill: "advanced", skillText: "متقدم", specialization: "network", specializationText: "أمن الشبكات", certs: ["JNCIA-SEC"], status: "active", threats: 19},
    {id: 19, name: "وليد الصاعدي", studentId: "SEC-2023019", skill: "expert", skillText: "خبير", specialization: "appsec", specializationText: "أمن التطبيقات", certs: ["GMOB"], status: "active", threats: 26},
    {id: 20, name: "عائشة الراشد", studentId: "SEC-2023020", skill: "advanced", skillText: "متقدم", specialization: "risk", specializationText: "إدارة المخاطر", certs: ["ISO 27001"], status: "active", threats: 23},
    {id: 21, name: "فهد السواط", studentId: "SEC-2023021", skill: "intermediate", skillText: "متوسط", specialization: "pentest", specializationText: "اختبار الاختراق", certs: ["CPTS"], status: "active", threats: 10},
    {id: 22, name: "مها الحسين", studentId: "SEC-2023022", skill: "beginner", skillText: "مبتدئ", specialization: "forensics", specializationText: "التحقيق الجنائي الرقمي", certs: [], status: "active", threats: 4},
    {id: 23, name: "هاني العتيبي", studentId: "SEC-2023023", skill: "advanced", skillText: "متقدم", specialization: "network", specializationText: "أمن الشبكات", certs: ["NSE4"], status: "inactive", threats: 15},
    {id: 24, name: "رنا النفيسة", studentId: "SEC-2023024", skill: "expert", skillText: "خبير", specialization: "appsec", specializationText: "أمن التطبيقات", certs: ["GCSA"], status: "active", threats: 27},
    {id: 25, name: "زياد الغامدي", studentId: "SEC-2023025", skill: "intermediate", skillText: "متوسط", specialization: "risk", specializationText: "إدارة المخاطر", certs: ["CIPP"], status: "active", threats: 13}
];

// عناصر DOM
const studentsTableBody = document.getElementById('studentsTableBody');
const searchInput = document.getElementById('searchInput');
const skillFilter = document.getElementById('skillFilter');
const specializationFilter = document.getElementById('specializationFilter');
const scanBtn = document.getElementById('scanBtn');
const addStudentBtn = document.getElementById('addStudentBtn');
const totalStudentsElement = document.getElementById('totalStudents');
const certCountElement = document.getElementById('certCount');
const avgSkillElement = document.getElementById('avgSkill');
const threatsNeutralizedElement = document.getElementById('threatsNeutralized');
const noResultsMessage = document.getElementById('noResultsMessage');
const paginationElement = document.getElementById('pagination');
const matrixAnimation = document.getElementById('matrixAnimation');

// إعدادات الترقيم
let currentPage = 1;
const rowsPerPage = 10;
let currentSortColumn = null;
let sortDirection = 'asc';

// عرض جميع الطلاب عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    createMatrixAnimation();
    displayStudentsTable(cyberStudents);
    updateStats(cyberStudents);
    setupPagination(cyberStudents);
    
    // إضافة مستمعي الأحداث
    searchInput.addEventListener('input', filterStudents);
    skillFilter.addEventListener('change', filterStudents);
    specializationFilter.addEventListener('change', filterStudents);
    scanBtn.addEventListener('click', runSecurityScan);
    addStudentBtn.addEventListener('click', addCyberSpecialist);
});

// دالة لإنشاء تأثير المصفوفة
function createMatrixAnimation() {
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const fontSize = 20;
    const columns = Math.floor(window.innerWidth / fontSize);
    
    for (let i = 0; i < columns; i++) {
        const code = document.createElement('div');
        code.className = 'matrix-code';
        code.style.left = `${i * fontSize}px`;
        code.style.animationDuration = `${Math.random() * 10 + 10}s`;
        code.style.animationDelay = `${Math.random() * 5}s`;
        matrixAnimation.appendChild(code);
        
        // تحديث النص بشكل دوري
        setInterval(() => {
            let text = '';
            for (let j = 0; j < 20; j++) {
                text += chars[Math.floor(Math.random() * chars.length)] + '<br>';
            }
            code.innerHTML = text;
        }, 100);
    }
}

// دالة لعرض جدول الطالب
function displayStudentsTable(studentsArray) {
    studentsTableBody.innerHTML = '';
    
    if (studentsArray.length === 0) {
        noResultsMessage.style.display = 'block';
        return;
    } else {
        noResultsMessage.style.display = 'none';
    }
    
    // حساب نطاق الصفوف للصفحة الحالية
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const pageStudents = studentsArray.slice(startIndex, endIndex);
    
    pageStudents.forEach((student, index) => {
        const row = document.createElement('tr');
        
        // تحديد فئة مستوى المهارة
        let skillClass = '';
        switch(student.skill) {
            case 'beginner': skillClass = 'skill-beginner'; break;
            case 'intermediate': skillClass = 'skill-intermediate'; break;
            case 'advanced': skillClass = 'skill-advanced'; break;
            case 'expert': skillClass = 'skill-expert'; break;
        }
        
        // تحديد حالة الطالب
        const statusClass = student.status === 'active' ? 'status-active' : 'status-inactive';
        const statusText = student.status === 'active' ? 'نشط' : 'غير نشط';
        
        // إنشاء شارات الشهادات
        let certsHTML = '';
        if (student.certs.length > 0) {
            student.certs.forEach(cert => {
                certsHTML += `<span class="cert-badge">${cert}</span> `;
            });
        } else {
            certsHTML = '<span style="color: #8b949e; font-size: 0.9rem;">لا توجد شهادات</span>';
        }
        
        row.innerHTML = `
            <td><span class="cyber-badge">${student.id}</span></td>
            <td>
                <div class="student-name">${student.name}</div>
                
            </td>
            <td>
                <div class="student-id">${student.studentId}</div>
            </td>
            <td>
                <span class="skill-level ${skillClass}">${student.skillText}</span>
            </td>
            <td>
                <span class="specialization">${student.specializationText}</span>
            </td>
            <td>
                ${certsHTML}
            </td>
            <td>
                <span class="status ${statusClass}">${statusText}</span>
            </td>
            <td>
                <div class="actions">
                    <button class="action-btn view" onclick="viewStudent(${student.id})" title="عرض التفاصيل">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="action-btn edit" onclick="editStudent(${student.id})" title="تعديل الملف">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn delete" onclick="deleteStudent(${student.id})" title="إزالة الطالب">
                        <i class="fas fa-user-slash"></i>
                    </button>
                </div>
            </td>
        `;
        
        studentsTableBody.appendChild(row);
    });
    
    // تحديث أزرار الترقيم
    setupPagination(studentsArray);
}

// دالة لإعداد الترقيم
function setupPagination(studentsArray) {
    paginationElement.innerHTML = '';
    
    const totalPages = Math.ceil(studentsArray.length / rowsPerPage);
    
    // زر الصفحة السابقة
    const prevButton = document.createElement('button');
    prevButton.className = `pagination-btn ${currentPage === 1 ? 'disabled' : ''}`;
    prevButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayStudentsTable(studentsArray);
        }
    });
    paginationElement.appendChild(prevButton);
    
    // أزرار الصفحات
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.className = `pagination-btn ${currentPage === i ? 'active' : ''}`;
        pageButton.textContent = i;
        pageButton.addEventListener('click', () => {
            currentPage = i;
            displayStudentsTable(studentsArray);
        });
        paginationElement.appendChild(pageButton);
    }
    
    // زر الصفحة التالية
    const nextButton = document.createElement('button');
    nextButton.className = `pagination-btn ${currentPage === totalPages ? 'disabled' : ''}`;
    nextButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayStudentsTable(studentsArray);
        }
    });
    paginationElement.appendChild(nextButton);
}

// دالة لتصفية الطلاب
function filterStudents() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedSkill = skillFilter.value;
    const selectedSpecialization = specializationFilter.value;
    
    const filteredStudents = cyberStudents.filter(student => {
        // البحث بالاسم أو المعرف الأمني
        const matchesSearch = student.name.toLowerCase().includes(searchTerm) || 
                             student.studentId.toLowerCase().includes(searchTerm);
        
        // التصفية حسب مستوى المهارة
        const matchesSkill = selectedSkill === 'all' || student.skill === selectedSkill;
        
        // التصفية حسب التخصص الدقيق
        const matchesSpecialization = selectedSpecialization === 'all' || student.specialization === selectedSpecialization;
        
        return matchesSearch && matchesSkill && matchesSpecialization;
    });
    
    currentPage = 1;
    displayStudentsTable(filteredStudents);
    updateStats(filteredStudents);
}

// دالة لترتيب الجدول
function sortTable(columnIndex) {
    // إذا كان نفس العمود، قم بعكس الاتجاه
    if (currentSortColumn === columnIndex) {
        sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        // إذا كان عمود جديد، اجعل الاتجاه تصاعديًا
        currentSortColumn = columnIndex;
        sortDirection = 'asc';
    }
    
    // تحديث الأيقونات في رؤوس الأعمدة
    const headers = document.querySelectorAll('th');
    headers.forEach((header, index) => {
        const icon = header.querySelector('i');
        if (index === columnIndex) {
            icon.className = sortDirection === 'asc' ? 'fas fa-sort-up' : 'fas fa-sort-down';
        } else {
            icon.className = 'fas fa-sort';
        }
    });
    
    // ترتيب الطلاب بناءً على العمود المحدد
    const sortedStudents = [...cyberStudents].sort((a, b) => {
        let valueA, valueB;
        
        switch(columnIndex) {
            case 0: // المعرف
                valueA = a.id;
                valueB = b.id;
                break;
            case 1: // اسم الطالب
                valueA = a.name;
                valueB = b.name;
                break;
            case 2: // المعرف الأمني
                valueA = a.studentId;
                valueB = b.studentId;
                break;
            case 3: // مستوى المهارة
                // تحويل المستوى إلى رقم للمقارنة
                const skillOrder = {beginner: 1, intermediate: 2, advanced: 3, expert: 4};
                valueA = skillOrder[a.skill];
                valueB = skillOrder[b.skill];
                break;
            case 4: // التخصص الدقيق
                valueA = a.specialization;
                valueB = b.specialization;
                break;
            case 5: // الشهادات
                valueA = a.certs.length;
                valueB = b.certs.length;
                break;
            case 6: // الحالة
                valueA = a.status;
                valueB = b.status;
                break;
            default:
                return 0;
        }
        
        if (valueA < valueB) {
            return sortDirection === 'asc' ? -1 : 1;
        }
        if (valueA > valueB) {
            return sortDirection === 'asc' ? 1 : -1;
        }
        return 0;
    });
    
    // إعادة تعيين التصفية الحالية
    filterStudents();
}

// دالة لتحديث الإحصائيات
function updateStats(studentsArray) {
    const totalStudents = studentsArray.length;
    
    // حساب عدد الشهادات
    let totalCerts = 0;
    studentsArray.forEach(student => {
        totalCerts += student.certs.length;
    });
    
    // حساب متوسط مستوى المهارة
    const skillOrder = {beginner: 1, intermediate: 2, advanced: 3, expert: 4};
    let totalSkill = 0;
    studentsArray.forEach(student => {
        totalSkill += skillOrder[student.skill];
    });
    const avgSkillNum = studentsArray.length > 0 ? totalSkill / studentsArray.length : 0;
    
    let avgSkillText = "";
    if (avgSkillNum >= 3.5) avgSkillText = "خبير";
    else if (avgSkillNum >= 2.5) avgSkillText = "متقدم";
    else if (avgSkillNum >= 1.5) avgSkillText = "متوسط";
    else avgSkillText = "مبتدئ";
    
    // حساب التهديدات المحايدة
    let totalThreats = 0;
    studentsArray.forEach(student => {
        totalThreats += student.threats;
    });
    
    totalStudentsElement.textContent = totalStudents;
    certCountElement.textContent = totalCerts;
    avgSkillElement.textContent = avgSkillText;
    threatsNeutralizedElement.textContent = totalThreats;
}

// دالة لعرض تفاصيل الطالب
function viewStudent(studentId) {
    const student = cyberStudents.find(s => s.id === studentId);
    if (student) {
        const certsText = student.certs.length > 0 ? student.certs.join(', ') : 'لا توجد شهادات';
        const skillDesc = getSkillDescription(student.skill);
        
        alert(`🛡️ تفاصيل طالب الأمن السيبراني:\n\n` +
              `الاسم: ${student.name}\n` +
              `المعرف الأمني: ${student.studentId}\n` +
              `مستوى المهارة: ${student.skillText} - ${skillDesc}\n` +
              `التخصص الدقيق: ${student.specializationText}\n` +
              `الشهادات: ${certsText}\n` +
              `التهديدات المحايدة: ${student.threats}\n` +
              `الحالة: ${student.status === 'active' ? 'نشط' : 'غير نشط'}`);
    }
}

// دالة للحصول على وصف مستوى المهارة
function getSkillDescription(skill) {
    const descriptions = {
        'beginner': 'معرفة أساسية بالمفاهيم الأمنية',
        'intermediate': 'قادر على تنفيذ مهام أمنية معتدلة التعقيد',
        'advanced': 'خبير تقني مع خبرة عملية واسعة',
        'expert': 'قائد في المجال الأمني مع خبرة متقدمة'
    };
    return descriptions[skill] || '';
}

// دالة لتعديل بيانات الطالب

function editStudent() {
    window.location.href = "editStudent.html";
}


// دالة لحذف الطالب
function deleteStudent(studentId) {
    const student = cyberStudents.find(s => s.id === studentId);
    if (student) {
        if (confirm(`⚠️ هل أنت متأكد من إزالة الطالب ${student.name} من النظام؟\n\n` +
                   `هذا الإجراء سيزيل جميع بيانات الطالب ولا يمكن التراجع عنه.`)) {
            alert(`✅ تم إزالة الطالب ${student.name} بنجاح`);
            // في التطبيق الحقيقي، سيتم إرسال طلب حذف إلى الخادم
        }
    }
}

// دالة لمسح الأمن
function runSecurityScan() {
    alert("🛡️ بدأ مسح الأمن الشامل...\n\n" +
          "جاري فحص:\n" +
          "✓ نقاط الضعف في النظام\n" +
          "✓ التهديدات الأمنية المحتملة\n" +
          "✓ تحديثات الأمان المطلوبة\n" +
          "✓ طلاب الأمن النشطين\n\n" +
          "سيتم إرسال التقرير إلى المسؤولين.");
    
    // محاكاة المسح مع تأثيرات بصرية
    const scanBtn = document.getElementById('scanBtn');
    const originalText = scanBtn.innerHTML;
    scanBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري المسح...';
    scanBtn.disabled = true;
    
    setTimeout(() => {
        scanBtn.innerHTML = originalText;
        scanBtn.disabled = false;
        alert("✅ اكتمل مسح الأمن!\n\n" +
              "النتائج:\n" +
              "- النظام آمن بنسبة 94%\n" +
              "- تم اكتشاف 3 تهديدات منخفضة الخطورة\n" +
              "- جميع الطلاب نشطين\n" +
              "- تم تحديث جميع أنظمة الحماية");
    }, 2000);
}

// دالة لإضافة طالب جديد
    
function addCyberSpecialist() {
    window.location.href = "addstudent.html";
}



   
