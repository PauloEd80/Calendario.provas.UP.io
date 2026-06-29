// DATASET - Base de dados estruturada das avaliações acadêmicas:
const cronogramaData = [
    {
        "disciplina": "Desenvolvimento de Software",
        "curso": "Engenharia de Software",
        "turma": "2N1, 3N1",
        "professor": "Paulo Eduardo Bueno",
        "a2": "17/06/2026",
        "af": "01/07/2026"
    },
    {
        "disciplina": "Prototipagem de Sistemas Computacionais",
        "curso": "ADS",
        "turma": "1N1",
        "professor": "Paulo Eduardo Bueno",
        "a2": "18/06/2026",
        "af": "02/07/2026"
    },
    {
        "disciplina": "Modelos de Processos de Software",
        "curso": "Engenharia de Software",
        "turma": "4N1, 5N1",
        "professor": "A definir",
        "a2": "19/06/2026",
        "af": "26/06/2026"
    },
    {
        "disciplina": "Desenvolvimento de Software",
        "curso": "ADS",
        "turma": "2N1, 3N1",
        "professor": "Maria Eduarda",
        "a2": "16/06/2026",
        "af": "29/06/2026"
    },
    {
        "disciplina": "Desenvolvimento de Software",
        "curso": "Engenharia de Software",
        "turma": "3N2",
        "professor": "Juliana Costa Silva",
        "a2": "15/06/2026",
        "af": "29/06/2026"
    },
    {
        "disciplina": "Prototipagem de Sistemas Computacionais",
        "curso": "Engenharia de Software",
        "turma": "1N1",
        "professor": "Paulo Eduardo Bueno",
        "a2": "15/06/2026",
        "af": "29/06/2026"
    },
    {
        "disciplina": "Desenvolvimento Web Avançado",
        "curso": "Engenharia de Software",
        "turma": "4N1, 5N1",
        "professor": "Juliana Costa Silva",
        "a2": "16/06/2026",
        "af": "30/06/2026"
    },
    {
        "disciplina": "Engenharia de Prompt e Aplicações em IA",
        "curso": "Engenharia de Software",
        "turma": "1N1",
        "professor": "Helton de Azevedo",
        "a2": "16/06/2026",
        "af": "30/06/2026"
    },
    {
        "disciplina": "Interface e Jornada do Usuário",
        "curso": "ADS",
        "turma": "1N1",
        "professor": "Thiago Arahn Detoni",
        "a2": "17/06/2026",
        "af": "01/07/2026"
    },
    {
        "disciplina": "Interface e Jornada do Usuário",
        "curso": "Engenharia de Software",
        "turma": "1N1",
        "professor": "Thiago Arahn Detoni",
        "a2": "17/06/2026",
        "af": "01/07/2026"
    },
    {
        "disciplina": "Gestão de Projetos de Software",
        "curso": "Engenharia de Software",
        "turma": "4N1, 5N1",
        "professor": "Thiago Arahn Detoni",
        "a2": "18/06/2026",
        "af": "02/07/2026"
    },
    {
        "disciplina": "Desenvolvimento de Sistemas",
        "curso": "ADS",
        "turma": "2N1, 3N1",
        "professor": "Juliana Costa Silva",
        "a2": "26/06/2026",
        "af": "03/07/2026"
    },
    {
        "disciplina": "Design de Software",
        "curso": "Engenharia de Software",
        "turma": "2N1, 3N1",
        "professor": "Everson",
        "a2": "a confirmar",
        "af": "a confirmar"
    },
    {
        "disciplina": "Design de Software",
        "curso": "Engenharia de Software",
        "turma": "3N2",
        "professor": "Everson",
        "a2": "a confirmar",
        "af": "a confirmar"
    },
    {
        "disciplina": "Programação de Computadores",
        "curso": "Engenharia de Software",
        "turma": "1N1",
        "professor": "Joao Victor Ramos",
        "a2": "23/06/2026",
        "af": "30/06/2026"
    },
    {
        "disciplina": "Programação de Computadores",
        "curso": "ADS",
        "turma": "1N1",
        "professor": "Joao Victor Ramos",
        "a2": "23/06/2026",
        "af": "30/06/2026"
    },
    {
        "disciplina": "Tópicos Especiais de Sistemas",
        "curso": "ADS",
        "turma": "2N1, 3N1",
        "professor": "Alex Junior Nunes da Silva",
        "a2": "24/04/2026",
        "af": "01/07/2026"
    },
    {
        "disciplina": "Viabilidade de Projetos",
        "curso": "Engenharia de Software",
        "turma": "4N1, 5N1",
        "professor": "Joao Victor Ramos",
        "a2": "17/06/2026",
        "af": "01/07/2026"
    },
    {
        "disciplina": "Engenharia de Prompt e Aplicações em IA",
        "curso": "ADS",
        "turma": "1N1",
        "professor": "Alex Junior Nunes da Silva",
        "a2": "19/06/2026",
        "af": "03/07/2026"
    }
];

// State Variables
let currentYear = 2026;
let currentMonth = 5; // Junho (0-indexed: 5 = Junho, 6 = Julho)
let activeView = 'calendar';

const weekdays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

// Initialize State lifecycle
document.addEventListener('DOMContentLoaded', () => {
    currentYear = 2026;
    currentMonth = 5; 
    
    setupEventListeners();
    renderAll();
});

function setupEventListeners() {
    document.getElementById('search-input').addEventListener('input', renderAll);
    document.getElementById('curso-filter').addEventListener('change', renderAll);
    document.getElementById('tipo-filter').addEventListener('change', renderAll);
}

function switchView(view) {
    activeView = view;
    document.getElementById('btn-view-calendar').classList.toggle('active', view === 'calendar');
    document.getElementById('btn-view-table').classList.toggle('active', view === 'table');
    
    document.getElementById('section-calendar').style.display = view === 'calendar' ? 'block' : 'none';
    document.getElementById('section-table').style.display = view === 'table' ? 'block' : 'none';
    renderAll();
}

function changeMonth(dir) {
    currentMonth += dir;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    } else if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar();
}

function getFilteredData() {
    const searchText = document.getElementById('search-input').value.toLowerCase();
    const cursoFilter = document.getElementById('curso-filter').value;

    return cronogramaData.filter(item => {
        const matchesSearch = item.disciplina.toLowerCase().includes(searchText) || 
                              item.professor.toLowerCase().includes(searchText);
        const matchesCurso = cursoFilter === 'all' || item.curso === cursoFilter;
        return matchesSearch && matchesCurso;
    });
}

function calculateMetrics() {
    const filtered = getFilteredData();
    const tipoFilter = document.getElementById('tipo-filter').value;
    
    let uniqueDisciplines = new Set(filtered.map(i => i.disciplina + '|' + i.curso + '|' + i.turma)).size;
    let countA2 = 0;
    let countAF = 0;
    let countPending = 0;

    filtered.forEach(item => {
        const hasA2 = item.a2 && !item.a2.toLowerCase().includes('confirmar');
        const hasAF = item.af && !item.af.toLowerCase().includes('confirmar');
        const isPending = !hasA2 && !hasAF;

        if (isPending) {
            countPending++;
        } else {
            if (hasA2 && (tipoFilter === 'all' || tipoFilter === 'A2')) countA2++;
            if (hasAF && (tipoFilter === 'all' || tipoFilter === 'AF')) countAF++;
        }
    });

    document.getElementById('metric-total').textContent = uniqueDisciplines;
    document.getElementById('metric-a2').textContent = countA2;
    document.getElementById('metric-af').textContent = countAF;
    document.getElementById('metric-pending').textContent = countPending;
}

function renderAll() {
    calculateMetrics();
    if (activeView === 'calendar') {
        renderCalendar();
    } else {
        renderTable();
    }
    renderUnscheduled();
}

function renderCalendar() {
    const gridBody = document.getElementById('calendar-grid-body');
    gridBody.innerHTML = '';
    
    document.getElementById('calendar-month-title').textContent = `${monthNames[currentMonth]} ${currentYear}`;
    
    weekdays.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'weekday-header';
        dayHeader.textContent = day;
        gridBody.appendChild(dayHeader);
    });

    const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
    const daysInCurrentMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

    const filteredData = getFilteredData();
    const tipoFilter = document.getElementById('tipo-filter').value;

    // Fill previous month trailing days
    for (let i = firstDayIndex - 1; i >= 0; i--) {
        const prevDayNum = daysInPrevMonth - i;
        const dayCell = document.createElement('div');
        dayCell.className = 'calendar-day other-month';
        dayCell.innerHTML = `<span class="day-number">${prevDayNum}</span>`;
        gridBody.appendChild(dayCell);
    }

    // Render active month days
    for (let day = 1; day <= daysInCurrentMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.className = 'calendar-day';
        
        const today = new Date();
        if (today.getDate() === day && today.getMonth() === currentMonth && today.getFullYear() === currentYear) {
            dayCell.classList.add('today');
        }

        dayCell.innerHTML = `<span class="day-number">${day}</span>`;
        const currentDayStr = `${day.toString().padStart(2, '0')}/${(currentMonth + 1).toString().padStart(2, '0')}/${currentYear}`;

        filteredData.forEach(item => {
            // Check & Render A2 Events
            if (item.a2 === currentDayStr && (tipoFilter === 'all' || tipoFilter === 'A2')) {
                const pill = document.createElement('div');
                pill.className = 'event-pill a2';
                pill.textContent = `A2: ${item.disciplina}`;
                pill.title = `Clique para ver detalhes: ${item.disciplina}`;
                pill.onclick = () => showEventDetails(item, 'A2', currentDayStr);
                dayCell.appendChild(pill);
            }
            // Check & Render AF Events
            if (item.af === currentDayStr && (tipoFilter === 'all' || tipoFilter === 'AF')) {
                const pill = document.createElement('div');
                pill.className = 'event-pill af';
                pill.textContent = `AF: ${item.disciplina}`;
                pill.title = `Clique para ver detalhes: ${item.disciplina}`;
                pill.onclick = () => showEventDetails(item, 'AF', currentDayStr);
                dayCell.appendChild(pill);
            }
        });

        gridBody.appendChild(dayCell);
    }

    // Fill next month leading days to align grid layout matrix (6 rows = 42 blocks)
    const totalCellsUsed = firstDayIndex + daysInCurrentMonth;
    const nextMonthCellsNeeded = 42 - totalCellsUsed;
    for (let i = 1; i <= nextMonthCellsNeeded; i++) {
        const dayCell = document.createElement('div');
        dayCell.className = 'calendar-day other-month';
        dayCell.innerHTML = `<span class="day-number">${i}</span>`;
        gridBody.appendChild(dayCell);
    }
}

function renderTable() {
    const tableBody = document.getElementById('table-rows-body');
    tableBody.innerHTML = '';
    
    const filteredData = getFilteredData();
    const tipoFilter = document.getElementById('tipo-filter').value;

    filteredData.forEach(item => {
        const hasA2 = !item.a2.toLowerCase().includes('confirmar');
        const hasAF = !item.af.toLowerCase().includes('confirmar');

        // Skip rows based on evaluation type filter
        if (tipoFilter === 'A2' && !hasA2) return;
        if (tipoFilter === 'AF' && !hasAF) return;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${item.disciplina}</strong></td>
            <td><span class="badge ${item.curso === 'ADS' ? 'ads' : 'es'}">${item.curso}</span></td>
            <td>${item.turma}</td>
            <td>${item.professor}</td>
            <td><span class="table-date-badge ${hasA2 ? 'a2' : ''}">${item.a2}</span></td>
            <td><span class="table-date-badge ${hasAF ? 'af' : ''}">${item.af}</span></td>
        `;
        tableBody.appendChild(tr);
    });
}

function renderUnscheduled() {
    const unscheduledBody = document.getElementById('unscheduled-list-body');
    const section = document.getElementById('section-unscheduled');
    unscheduledBody.innerHTML = '';

    const filteredData = getFilteredData();
    const pendingItems = filteredData.filter(item => 
        item.a2.toLowerCase().includes('confirmar') || item.af.toLowerCase().includes('confirmar')
    );

    if (pendingItems.length === 0) {
        section.style.display = 'none';
        return;
    }

    section.style.display = 'block';
    pendingItems.forEach(item => {
        const li = document.createElement('li');
        li.className = 'unscheduled-item';
        li.innerHTML = `<strong>${item.disciplina}</strong> (${item.curso} - ${item.turma})<br><small>Prof. ${item.professor}</small>`;
        unscheduledBody.appendChild(li);
    });
}

function showEventDetails(item, tipo, dataStr) {
    document.getElementById('modal-title').textContent = item.disciplina;
    document.getElementById('modal-curso').textContent = item.curso;
    document.getElementById('modal-turma').textContent = item.turma;
    document.getElementById('modal-professor').textContent = item.professor;
    document.getElementById('modal-tipo').textContent = tipo === 'A2' ? 'Avaliação Regimental A2' : 'Avaliação Final (AF)';
    document.getElementById('modal-data').textContent = dataStr;
    
    document.getElementById('details-modal').style.display = 'flex';
}

function closeModal(event) {
    // Closes modal if user triggers close button or clicks backdrop container
    document.getElementById('details-modal').style.display = 'none';
}
