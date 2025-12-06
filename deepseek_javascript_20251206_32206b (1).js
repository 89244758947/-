// Основные данные для квеста
const questData = {
    crossword: {
        grid: [
            [1, 0, 0, 2, 0, 0, 3, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [4, 0, 0, 0, 0, 0, 0, 0, 0, 5],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [6, 0, 0, 0, 0, 0, 0, 0, 0, 7],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [8, 0, 0, 0, 0, 0, 0, 0, 0, 9],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [10, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        questions: [
            { number: 1, question: "Родное село Есенина (8 букв)", answer: "КОНСТАНТИНОВО", direction: "horizontal", start: [0, 0] },
            { number: 2, question: "Первая жена поэта (5 букв)", answer: "РАЙХ", direction: "horizontal", start: [0, 3] },
            { number: 3, question: "Цвет, часто встречающийся в поэзии Есенина (6 букв)", answer: "СИНИЙ", direction: "horizontal", start: [0, 6] },
            { number: 4, question: "Любимое дерево поэта (6 букв)", answer: "БЕРЁЗА", direction: "vertical", start: [2, 0] },
            { number: 5, question: "Птица, символизирующая Русь в стихах (6 букв)", answer: "ЖУРАВЛЬ", direction: "horizontal", start: [2, 9] },
            { number: 6, question: "Город, где Есенин трагически погиб (9 букв)", answer: "ЛЕНИНГРАД", direction: "vertical", start: [4, 0] },
            { number: 7, question: "Поэтическое течение, к которому принадлежал Есенин (11 букв)", answer: "ИМАЖИНИЗМ", direction: "horizontal", start: [4, 9] },
            { number: 8, question: "Имя матери поэта (7 букв)", answer: "ТАТЬЯНА", direction: "vertical", start: [6, 0] },
            { number: 9, question: "Первый поэтический сборник (8 букв)", answer: "РАДУНИЦА", direction: "horizontal", start: [6, 9] },
            { number: 10, question: "Стихотворение «___ ты мой опавший» (4 буквы)", answer: "КЛЁН", direction: "horizontal", start: [9, 0] }
        ]
    },
    
    poems: [
        {
            lines: "Белая берёза\nПод моим окном\nПринакрылась снегом,\nТочно серебром.",
            options: [
                "А на ветках инея\nРаспустилась бахромой",
                "На пушистых ветках\nСнежною каймой",
                "И стоит берёза\nВ сонной тишине"
            ],
            correct: 1
        },
        {
            lines: "Отговорила роща золотая\nБерёзовым, весёлым языком,",
            options: [
                "И журавли, печально пролетая,\nУж не жалеют больше ни о ком.",
                "И журавли, печально пролетая,\nУж не жалеют больше ни о чем.",
                "И журавли, печально пролетая,\nУж не тоскуют больше ни о чем."
            ],
            correct: 0
        },
        {
            lines: "Выткался на озере алый свет зари.\nНа бору со звонами плачут глухари.",
            options: [
                "Плачет где-то иволга, схоронясь в дупло.\nТолько мне не плачется — на душе светло.",
                "Плачет где-то иволга, схоронясь в дупло.\nТолько мне не плачется — на душе тепло.",
                "Плачет где-то иволга, схоронясь в дупло.\nТолько мне не плачется — на душе светло."
            ],
            correct: 2
        },
        {
            lines: "Заметает пурга белый путь.\nХочет в мягких снегах потонуть.",
            options: [
                "Ветер прянул, застонал,\nКонь взметнулся, поскакал.",
                "Ветер стонет, серебряный,\nВетра стон, серебряный.",
                "Вскрикнул резкий ветер,\nКонь взметнулся, поскакал."
            ],
            correct: 0
        },
        {
            lines: "Не жалею, не зову, не плачу,\nВсё пройдёт, как с белых яблонь дым.",
            options: [
                "Увяданья золотом охваченный,\nЯ не буду больше молодым.",
                "Увяданья золотом охваченный,\nЯ не буду больше молодым.",
                "Увяданья золотом охваченный,\nЯ не буду больше молодым."
            ],
            correct: 1
        }
    ],
    
    quiz: [
        {
            question: "В каком году родился Сергей Есенин?",
            options: ["1895", "1900", "1898", "1905"],
            correct: 0
        },
        {
            question: "Как называлась первая опубликованная поэма Есенина?",
            options: ["«Радуница»", "«Русь»", "«Инония»", "«Пугачёв»"],
            correct: 1
        },
        {
            question: "С кем из известных танцовщиц был брак у Есенина?",
            options: ["Анна Павлова", "Матильда Кшесинская", "Айседора Дункан", "Галина Уланова"],
            correct: 2
        },
        {
            question: "Какой цвет волос был у Есенина?",
            options: ["Чёрный", "Рыжий", "Русый", "Шатен"],
            correct: 1
        },
        {
            question: "Какое прозвище было у Есенина в литературных кругах?",
            options: ["Поэт-бунтарь", "Поэт-хулиган", "Златокудрый поэт", "Последний поэт деревни"],
            correct: 3
        },
        {
            question: "В каком отеле трагически погиб поэт?",
            options: ["«Националь»", "«Метрополь»", "«Англетер»", "«Савой»"],
            correct: 2
        },
        {
            question: "Какой поэтический сборник вышел в 1921 году?",
            options: ["«Москва кабацкая»", "«Исповедь хулигана»", "«Персидские мотивы»", "«Сельский часослов»"],
            correct: 0
        },
        {
            question: "Кто иллюстрировал многие сборники Есенина?",
            options: ["Иван Билибин", "Виктор Васнецов", "Евгений Лансере", "Сергей Коровин"],
            correct: 3
        },
        {
            question: "Какой образ является центральным в поэме «Чёрный человек»?",
            options: ["Двойник", "Тень", "Смерть", "Совесть"],
            correct: 0
        },
        {
            question: "В каком журнале Есенин дебютировал в 1914 году?",
            options: ["«Нива»", "«Русская мысль»", "«Мирок»", "«Аполлон»"],
            correct: 2
        }
    ],
    
    facts: [
        "Есенин знал более 300 русских народных песен и часто исполнял их на встречах.",
        "Поэт коллекционировал трости — у него их было более 30 штук.",
        "Есенин был прекрасным наездником и очень любил лошадей.",
        "Поэт увлекался восточной философией и даже планировал путешествие в Индию.",
        "Есенин написал более 400 стихотворений, 10 поэм и 2 драматических произведения.",
        "Почерк поэта был настолько неразборчив, что издателям приходилось расшифровывать его стихи.",
        "Есенин был талантливым рисовальщиком — сохранилось несколько его карикатур на друзей.",
        "Поэт мечтал открыть книжный магазин для крестьян в своём родном селе.",
        "Есенин состоял в Союзе поэтов и активно помогал молодым литераторам.",
        "В 25 лет Есенин уже был всемирно известным поэтом, его стихи переводились на многие языки."
    ]
};

// Переменные состояния
let currentSection = 'welcome';
let scores = { crossword: 0, poem: 0, quiz: 0 };
let selectedPoemOptions = [];
let quizState = { current: 0, answers: [], timeLeft: 60, timer: null };
let crosswordAnswers = {};

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    createLeaves();
    initEventListeners();
    generateCrossword();
    generatePoemQuestions();
    updateShareLink();
    showSection('welcome');
});

// Создание падающих листьев
function createLeaves() {
    const container = document.getElementById('leaves-container');
    for (let i = 0; i < 20; i++) {
        const leaf = document.createElement('div');
        leaf.className = 'leaf';
        leaf.style.left = Math.random() * 100 + 'vw';
        leaf.style.animationDuration = (Math.random() * 10 + 10) + 's';
        leaf.style.animationDelay = Math.random() * 5 + 's';
        leaf.style.opacity = Math.random() * 0.5 + 0.3;
        leaf.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
        leaf.style.background = `linear-gradient(45deg, ${
            Math.random() > 0.5 ? '#e67e22' : '#d35400'
        }, ${
            Math.random() > 0.5 ? '#a04000' : '#ba4a00'
        })`;
        container.appendChild(leaf);
    }
}

// Обработчики событий
function initEventListeners() {
    // Навигация
    document.getElementById('start-btn').addEventListener('click', () => showSection('instructions'));
    document.getElementById('to-crossword').addEventListener('click', () => showSection('crossword'));
    document.getElementById('to-poem').addEventListener('click', () => {
        if (validateCrossword()) {
            showSection('poem');
        }
    });
    document.getElementById('to-quiz').addEventListener('click', () => {
        if (validatePoemQuestions()) {
            showSection('quiz');
            startQuiz();
        }
    });
    
    // Проверка заданий
    document.getElementById('check-crossword').addEventListener('click', validateCrossword);
    document.getElementById('check-poem').addEventListener('click', validatePoemQuestions);
    document.getElementById('finish-quiz').addEventListener('click', finishQuiz);
    
    // Рестарт и шаринг
    document.getElementById('restart-btn').addEventListener('click', restartQuest);
    document.getElementById('share-results').addEventListener('click', shareResults);
    document.getElementById('copy-btn').addEventListener('click', copyInviteLink);
    
    // Обработчик для следующих вопросов в квизе
    document.getElementById('next-question').addEventListener('click', nextQuizQuestion);
}

// Генерация кроссворда
function generateCrossword() {
    const grid = document.getElementById('crossword-grid');
    const questionsList = document.getElementById('questions-list');
    
    // Очистка
    grid.innerHTML = '';
    questionsList.innerHTML = '';
    
    // Создание сетки
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('div');
            cell.className = 'crossword-cell';
            
            if (questData.crossword.grid[i][j] !== 0) {
                const number = document.createElement('div');
                number.className = 'cell-number';
                number.textContent = questData.crossword.grid[i][j];
                cell.appendChild(number);
                
                const input = document.createElement('input');
                input.type = 'text';
                input.maxLength = 1;
                input.dataset.row = i;
                input.dataset.col = j;
                cell.appendChild(input);
                
                // Сохраняем правильный ответ для проверки
                const question = questData.crossword.questions.find(q => q.number === questData.crossword.grid[i][j]);
                if (question) {
                    crosswordAnswers[`${i}-${j}`] = question.answer[j - question.start[1]];
                }
            }
            
            grid.appendChild(cell);
        }
    }
    
    // Добавление вопросов
    questData.crossword.questions.forEach(q => {
        const div = document.createElement('div');
        div.className = 'question-item';
        div.innerHTML = `<span class="question-number">${q.number}.</span> ${q.question}`;
        questionsList.appendChild(div);
    });
}

// Генерация вопросов по стихам
function generatePoemQuestions() {
    const container = document.getElementById('poem-questions');
    container.innerHTML = '';
    selectedPoemOptions = [];
    
    questData.poems.forEach((poem, index) => {
        const div = document.createElement('div');
        div.className = 'poem-question';
        div.innerHTML = `
            <div class="poem-lines">${poem.lines}</div>
            <div class="options">
                ${poem.options.map((opt, optIndex) => `
                    <div class="option" data-question="${index}" data-option="${optIndex}">
                        ${opt}
                    </div>
                `).join('')}
            </div>
        `;
        container.appendChild(div);
        
        selectedPoemOptions[index] = null;
        
        // Обработчики выбора варианта
        div.querySelectorAll('.option').forEach(opt => {
            opt.addEventListener('click', function() {
                const questionIndex = parseInt(this.dataset.question);
                const optionIndex = parseInt(this.dataset.option);
                
                // Снимаем выделение со всех вариантов этого вопроса
                div.querySelectorAll('.option').forEach(o => {
                    o.classList.remove('selected');
                });
                
                // Выделяем выбранный
                this.classList.add('selected');
                selectedPoemOptions[questionIndex] = optionIndex;
            });
        });
    });
}

// Валидация кроссворда
function validateCrossword() {
    let correct = 0;
    const inputs = document.querySelectorAll('.crossword-cell input');
    
    inputs.forEach(input => {
        const row = parseInt(input.dataset.row);
        const col = parseInt(input.dataset.col);
        const key = `${row}-${col}`;
        const userAnswer = input.value.toUpperCase();
        const correctAnswer = crosswordAnswers[key];
        
        if (correctAnswer && userAnswer === correctAnswer) {
            input.style.backgroundColor = '#d4edda';
            input.style.color = '#155724';
            correct++;
        } else if (userAnswer !== '') {
            input.style.backgroundColor = '#f8d7da';
            input.style.color = '#721c24';
        } else {
            input.style.backgroundColor = 'white';
        }
    });
    
    scores.crossword = Math.floor(correct / Object.keys(crosswordAnswers).length * 10);
    document.getElementById('score1').textContent = scores.crossword;
    
    if (scores.crossword >= 5) {
        alert(`Поздравляем! Вы набрали ${scores.crossword} баллов в кроссворде!`);
        return true;
    } else {
        alert(`Попробуйте ещё раз! Вы набрали ${scores.crossword} баллов. Нужно минимум 5 для продолжения.`);
        return false;
    }
}

// Валидация вопросов по стихам
function validatePoemQuestions() {
    let correct = 0;
    
    questData.poems.forEach((poem, index) => {
        const options = document.querySelectorAll(`.option[data-question="${index}"]`);
        const selected = selectedPoemOptions[index];
        
        options.forEach((opt, optIndex) => {
            if (optIndex === poem.correct) {
                opt.classList.add('correct');
            }
            if (selected === optIndex && optIndex !== poem.correct) {
                opt.classList.add('incorrect');
            }
        });
        
        if (selected === poem.correct) {
            correct++;
        }
    });
    
    scores.poem = correct * 2; // 2 балла за каждый правильный ответ
    document.getElementById('score2').textContent = scores.poem;
    
    if (scores.poem >= 5) {
        alert(`Отлично! Вы набрали ${scores.poem} баллов за продолжение стихов!`);
        return true;
    } else {
        alert(`Можно лучше! Вы набрали ${scores.poem} баллов. Нужно минимум 5 для продолжения.`);
        return false;
    }
}

// Запуск квиза
function startQuiz() {
    quizState = {
        current: 0,
        answers: [],
        timeLeft: 60,
        timer: null
    };
    
    startTimer();
    showQuizQuestion();
}

// Таймер
function startTimer() {
    const timerElement = document.getElementById('timer');
    
    quizState.timer = setInterval(() => {
        quizState.timeLeft--;
        timerElement.textContent = quizState.timeLeft;
        
        if (quizState.timeLeft <= 10) {
            timerElement.style.color = '#dc3545';
            timerElement.style.animation = 'pulse 0.5s infinite';
        }
        
        if (quizState.timeLeft <= 0) {
            clearInterval(quizState.timer);
            finishQuiz();
        }
    }, 1000);
}

// Показать вопрос квиза
function showQuizQuestion() {
    if (quizState.current >= questData.quiz.length) {
        finishQuiz();
        return;
    }
    
    const question = questData.quiz[quizState.current];
    const container = document.getElementById('quiz-container');
    const nextBtn = document.getElementById('next-question');
    
    container.innerHTML = `
        <div id="question">${quizState.current + 1}. ${question.question}</div>
        <div id="options">
            ${question.options.map((opt, index) => `
                <div class="option quiz-option" data-answer="${index}">${opt}</div>
            `).join('')}
        </div>
    `;
    
    nextBtn.classList.add('hidden');
    
    // Обработчики для вариантов ответа
    document.querySelectorAll('.quiz-option').forEach(opt => {
        opt.addEventListener('click', function() {
            const answerIndex = parseInt(this.dataset.answer);
            quizState.answers[quizState.current] = answerIndex;
            
            // Показываем правильность
            document.querySelectorAll('.quiz-option').forEach(o => {
                o.classList.remove('selected');
                if (parseInt(o.dataset.answer) === question.correct) {
                    o.classList.add('correct');
                }
                if (parseInt(o.dataset.answer) === answerIndex && answerIndex !== question.correct) {
                    o.classList.add('incorrect');
                }
            });
            
            this.classList.add('selected');
            nextBtn.classList.remove('hidden');
        });
    });
}

// Следующий вопрос квиза
function nextQuizQuestion() {
    quizState.current++;
    showQuizQuestion();
}

// Завершение квиза
function finishQuiz() {
    clearInterval(quizState.timer);
    
    // Подсчет баллов
    let correct = 0;
    questData.quiz.forEach((q, index) => {
        if (quizState.answers[index] === q.correct) {
            correct++;
        }
    });
    
    scores.quiz = correct; // 1 балл за каждый правильный ответ
    document.getElementById('score3').textContent = scores.quiz;
    
    // Показ результатов
    showResults();
}

// Показать результаты
function showResults() {
    // Обновляем баллы
    document.getElementById('final-score1').textContent = scores.crossword;
    document.getElementById('final-score2').textContent = scores.poem;
    document.getElementById('final-score3').textContent = scores.quiz;
    
    const total = scores.crossword + scores.poem + scores.quiz;
    document.getElementById('total-score').textContent = total;
    
    // Генерация сертификата
    const certificate = document.getElementById('certificate-text');
    let title, message;
    
    if (total >= 25) {
        title = "Знаток творчества Есенина!";
        message = "Вы блестяще справились со всеми заданиями и показали глубокие знания поэзии Сергея Есенина.";
    } else if (total >= 15) {
        title = "Любитель поэзии";
        message = "Вы хорошо знакомы с творчеством Есенина и смогли ответить на большинство вопросов.";
    } else {
        title = "Начинающий читатель";
        message = "Вы сделали первые шаги в изучении творчества великого поэта. Продолжайте читать его стихи!";
    }
    
    certificate.innerHTML = `
        <h3>${title}</h3>
        <p>${message}</p>
        <p>Ваш результат: ${total} из 30 баллов</p>
        <p>${new Date().toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })}</p>
    `;
    
    // Добавление интересных фактов
    const factsList = document.getElementById('facts-list');
    factsList.innerHTML = '';
    
    // Выбираем 3 случайных факта
    const randomFacts = [...questData.facts]
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
    
    randomFacts.forEach(fact => {
        const div = document.createElement('div');
        div.className = 'fact-item';
        div.textContent = fact;
        factsList.appendChild(div);
    });
    
    showSection('results');
}

// Переключение разделов
function showSection(sectionId) {
    // Скрываем все разделы
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active-section');
        section.classList.add('hidden-section');
    });
    
    // Показываем нужный раздел
    document.getElementById(sectionId).classList.remove('hidden-section');
    document.getElementById(sectionId).classList.add('active-section');
    
    currentSection = sectionId;
    
    // Прокрутка вверх
    window.scrollTo(0, 0);
}

// Рестарт квеста
function restartQuest() {
    if (confirm('Начать квест заново? Все текущие результаты будут потеряны.')) {
        // Сброс состояния
        scores = { crossword: 0, poem: 0, quiz: 0 };
        selectedPoemOptions = [];
        crosswordAnswers = {};
        
        // Сброс отображения баллов
        document.getElementById('score1').textContent = '0';
        document.getElementById('score2').textContent = '0';
        document.getElementById('score3').textContent = '0';
        
        // Перегенерация заданий
        generateCrossword();
        generatePoemQuestions();
        
        // Возврат к началу
        showSection('welcome');
    }
}

// Обновление ссылки для приглашения
function updateShareLink() {
    const shareLink = document.getElementById('share-link');
    const currentUrl = window.location.href;
    shareLink.textContent = currentUrl;
}

// Копирование ссылки
function copyInviteLink() {
    const shareLink = document.getElementById('share-link');
    const textArea = document.createElement('textarea');
    textArea.value = shareLink.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    
    const btn = document.getElementById('copy-btn');
    const originalText = btn.textContent;
    btn.textContent = 'Ссылка скопирована!';
    btn.style.backgroundColor = '#28a745';
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.backgroundColor = '';
    }, 2000);
}

// Поделиться результатами
function shareResults() {
    const total = scores.crossword + scores.poem + scores.quiz;
    const text = `Я прошёл(а) квест по творчеству Есенина и набрал(а) ${total} из 30 баллов! Попробуйте и вы: ${window.location.href}`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Квест по творчеству Есенина',
            text: text,
            url: window.location.href
        });
    } else {
        // Альтернатива для десктопов
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Результаты скопированы в буфер обмена! Поделитесь с друзьями.');
    }
}

// Добавляем CSS для hidden класса
const style = document.createElement('style');
style.textContent = `
    .hidden {
        display: none !important;
    }
`;
document.head.appendChild(style);