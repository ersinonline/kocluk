document.addEventListener('DOMContentLoaded', () => {
    // Ana sayfa verilerini güncelle
    updateHomeStats();

    // Sayfa değişikliklerini işlemek için tüm menü bağlantılarına tıklama olayları ekle
    document.querySelectorAll('#menu ul li a').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            showPage(event.target.getAttribute('onclick').split("'")[1]);
        });
    });
});

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// Ana Sayfa
function updateHomeStats() {
    // Örnek veriler, burada gerçek veriler kullanılabilir
    document.getElementById('totalStudyHours').innerText = '5';
    document.getElementById('completedTopics').innerText = '3';
}

// Programlarım
function addWeek() {
    const weeklyPrograms = document.getElementById('weeklyPrograms');
    const weekTable = document.createElement('table');
    weekTable.classList.add('week-table');
    weekTable.innerHTML = `
        <thead>
            <tr>
                <th>Pazartesi</th>
                <th>Salı</th>
                <th>Çarşamba</th>
                <th>Perşembe</th>
                <th>Cuma</th>
                <th>Cumartesi</th>
                <th>Pazar</th>
            </tr>
        </thead>
        <tbody>
            ${createWeeklyRows()}
        </tbody>
    `;
    weeklyPrograms.appendChild(weekTable);
}

function createWeeklyRows() {
    let rows = '';
    for (let i = 0; i < 7; i++) {
        rows += `
            <tr>
                <td><input type="text" placeholder="Görev"><input type="checkbox"></td>
                <td><input type="text" placeholder="Görev"><input type="checkbox"></td>
                <td><input type="text" placeholder="Görev"><input type="checkbox"></td>
                <td><input type="text" placeholder="Görev"><input type="checkbox"></td>
                <td><input type="text" placeholder="Görev"><input type="checkbox"></td>
                <td><input type="text" placeholder="Görev"><input type="checkbox"></td>
                <td><input type="text" placeholder="Görev"><input type="checkbox"></td>
            </tr>
        `;
    }
    return rows;
}

// Konutube
function addVideo() {
    const videoUrl = document.getElementById('videoUrl').value;
    const videoList = document.getElementById('videoList');
    const listItem = document.createElement('li');
    listItem.innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
    videoList.appendChild(listItem);
    document.getElementById('videoUrl').value = '';
}

// Sorugram
function postQuestion() {
    const questionText = document.getElementById('question').value;
    const questions = document.getElementById('questions');
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.innerText = questionText;
    questions.appendChild(questionDiv);
    document.getElementById('question').value = '';
}

// Kaynakları Yönet
function addResource() {
    const resourceName = document.getElementById('resource').value;
    const subject = document.getElementById('subject').value;
    const resourceList = document.getElementById('resourceList');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${resourceName}</td>
        <td>${subject}</td>
        <td><input type="range" min="0" max="100" value="0" oninput="updateProgressValue(this)"><span class="progress-value">0%</span></td>
        <td><button type="button" onclick="deleteResource(this)">Sil</button></td>
    `;
    resourceList.appendChild(row);
    document.getElementById('resource').value = '';
    document.getElementById('subject').value = '';
}

function updateProgressValue(rangeInput) {
    rangeInput.nextElementSibling.innerText = `${rangeInput.value}%`;
}

function deleteResource(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}

// Görüşmeler
function addMeeting() {
    const meetingDate = document.getElementById('meetingDate').value;
    const meetingNote = document.getElementById('meetingNote').value;
    const meetingList = document.getElementById('meetingList');
    const meetingDiv = document.createElement('div');
    meetingDiv.classList.add('meeting');
    meetingDiv.innerHTML = `<h3>${meetingDate}</h3><p>${meetingNote}</p>`;
    meetingList.appendChild(meetingDiv);
    document.getElementById('meetingDate').value = '';
    document.getElementById('meetingNote').value = '';
}

// Denemeler
function addExam() {
    const examName = document.getElementById('examName').value;
    const correctAnswers = document.getElementById('correctAnswers').value;
    const wrongAnswers = document.getElementById('wrongAnswers').value;
    const totalQuestions = document.getElementById('totalQuestions').value;
    const examList = document.getElementById('examList');
    const net = correctAnswers - (wrongAnswers / 4);
    const score = (net / totalQuestions) * 100;
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${examName}</td>
        <td>${correctAnswers}</td>
        <td>${wrongAnswers}</td>
        <td>${net.toFixed(2)}</td>
        <td>${score.toFixed(2)}</td>
    `;
    examList.appendChild(row);
    document.getElementById('examName').value = '';
    document.getElementById('correctAnswers').value = '';
    document.getElementById('wrongAnswers').value = '';
    document.getElementById('totalQuestions').value = '';
}

// Profil
function updateProfile() {
    // Profil bilgilerini güncelleme kodları buraya eklenebilir
    alert('Profil güncellendi!');
}
