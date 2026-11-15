// 1. Lógica do Filtro Inteligente de Perfil (Lente do Recrutador)
const filterButtons = document.querySelectorAll('.filter-btn');
const filterableItems = document.querySelectorAll('[data-tags]');
const pitchBox = document.getElementById('dynamic-pitch');

const pitches = {
    all: "<strong>Perfil Multidisciplinar:</strong> Combino base sólida em Engenharia de Computação com experiência corporativa em QA (Compass UOL), docência técnica (IDEP / C.E.J.O.) e certificação em Hardware, Redes e Normas de Segurança (NR-10/NR-35).",
    dev: "<strong>Foco em Desenvolvimento & IA:</strong> Engenheiro de Computação com base em Python, Java, JavaScript, PHP e SQL, aplicando princípios de Clean Code, versionamento Git e visão crítica de QA para construir aplicações seguras e escaláveis. Iniciando Pós-Graduação em Full Stack e IA.",
    qa: "<strong>Foco em Qualidade de Software (QA):</strong> Experiência prática na Compass UOL com planejamento de testes, automação estruturada em JUnit, validação de APIs REST no Postman, Smoke Tests, gestão de bugs no Jira e rituais ágeis (Scrum/Kanban).",
    infra: "<strong>Foco em Infraestrutura, Redes & Campo:</strong> Formação em Engenharia de Computação, certificação em Hardware e Redes (Microlins), conhecimento em TCP/IP, Linux, CNH A/B e certificações normativas NR-10 (Básico e SEP) e NR-35 para atuação segura em campo.",
    edu: "<strong>Foco em Docência, Dados & Gestão:</strong> Professor/Instrutor no IDEP e proprietário do C.E.J.O., com forte didática, atendimento ao cliente, gestão administrativa e domínio avançado de Excel (Dashboards, Power Query e macros VBA)."
};

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const selected = btn.getAttribute('data-filter');
        pitchBox.innerHTML = pitches[selected];

        filterableItems.forEach(item => {
            const tags = item.getAttribute('data-tags').split(' ');
            if (selected === 'all') {
                item.classList.remove('highlighted', 'dimmed');
            } else if (tags.includes(selected)) {
                item.classList.add('highlighted');
                item.classList.remove('dimmed');
            } else {
                item.classList.add('dimmed');
                item.classList.remove('highlighted');
            }
        });
    });
});

// 2. Lógica do Terminal Interativo (CLI)
const terminalInput = document.getElementById('terminal-input');
const terminalOutput = document.getElementById('terminal-output');

const commands = {
    help: "Comandos disponíveis:<br>• <span class='cmd-text'>sobre</span> - Resumo profissional e formação<br>• <span class='cmd-text'>stack</span> - Linguagens, frameworks e ferramentas<br>• <span class='cmd-text'>qa</span> - Experiência com testes e qualidade<br>• <span class='cmd-text'>idep</span> - Atuação atual como instrutor<br>• <span class='cmd-text'>contato</span> - Telefone, e-mail e localização",
    sobre: "João Augusto Oliveira Lacerda, 24 anos. Engenheiro de Computação (UNINTER, 2026) residente em Rondônia, com CNH A/B e disponibilidade imediata.",
    stack: "Linguagens: Python, Java, JavaScript, C#, PHP, SQL.<br>Ferramentas: Git, Postman, Jira, JUnit, Linux, Excel Avançado/VBA.",
    qa: "Atuação na Compass UOL (2024): Testes funcionais e automatizados (JUnit), validação de APIs REST (Postman), Smoke Tests, regressão e gestão ágil no Jira.",
    idep: "Atualmente atuando como Professor/Instrutor de Informática Aplicada no IDEP (40h), ensinando hardware, segurança digital e ferramentas de escritório.",
    contato: "WhatsApp: (69) 99391-6168 | E-mail: lacerdajoao@proton.me | Local: Ji-Paraná / Porto Velho - RO."
};

function appendTerminal(html) {
    const div = document.createElement('div');
    div.className = 'terminal-line';
    div.innerHTML = html;
    terminalOutput.appendChild(div);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function runCmd(cmdRaw) {
    const cmd = cmdRaw.trim().toLowerCase();
    if (!cmd) return;

    appendTerminal(`<span class="prompt">recrutador@rh:~$</span> ${cmdRaw}`);

    if (cmd === 'clear') {
        terminalOutput.innerHTML = '';
        return;
    }

    if (commands[cmd]) {
        appendTerminal(commands[cmd]);
    } else {
        appendTerminal(`Comando '${cmd}' não encontrado. Digite <span class="cmd-text">help</span> para ver as opções.`);
    }
}

terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        runCmd(terminalInput.value);
        terminalInput.value = '';
    }
});

// 3. Modal de Detalhes dos Projetos
const projectDetails = {
    pneumonia: {
        cat: "Inteligência Artificial & Visão Computacional",
        title: "Diagnóstico de Pneumonia por Raio-X (Python)",
        body: "Projeto acadêmico e prático focado no processamento e classificação de radiografias torácicas utilizando Redes Neurais Convolucionais (CNNs). O modelo foi treinado para distinguir padrões visuais normais de quadros clínicos, demonstrando domínio em pré-processamento de imagens e aprendizado profundo.",
        highlights: "<strong>Destaques Técnicos:</strong> Tratamento de datasets de imagens, arquitetura de camadas convolucionais em Python e avaliação de métricas de precisão diagnóstica."
    },
    darkmaze: {
        cat: "Desenvolvimento Web Interativo & WebGL",
        title: "Dark Maze – Ambiente 3D no Navegador",
        body: "Desenvolvimento de um jogo de exploração e terror em 3D executado nativamente no navegador sem necessidade de plugins externos. Focado em otimização de renderização gráfica, controle de câmera em primeira pessoa e lógica de colisão.",
        highlights: "<strong>Destaques Técnicos:</strong> JavaScript puro integrado com Three.js, manipulação de luzes/sombras em WebGL e algoritmos de Raycasting."
    },
    ecommerce: {
        cat: "Desenvolvimento Web & Regras de Negócio",
        title: "Plataforma E-Commerce e Fluxo de Delivery",
        body: "Implementação completa de ecossistema web utilizando WordPress e WooCommerce, com personalização de regras de frete e checkout baseadas na localização do cliente, além de configuração de hospedagem e segurança.",
        highlights: "<strong>Destaques Técnicos:</strong> Customização em PHP/CSS, estruturação de banco de dados MySQL e otimização de conversão no checkout."
    },
    automacao: {
        cat: "Qualidade de Dados & Produtividade",
        title: "Sanitizador de Dados (Python) & Dashboards VBA",
        body: "Conjunto de soluções voltadas para integridade de dados e automação administrativa: scripts em Python para validação rigorosa de tipos primitivos e planilhas corporativas em Excel com macros VBA e Power Query.",
        highlights: "<strong>Destaques Técnicos:</strong> Aplicação de Clean Code, tratamento de exceções em inputs de usuário e automação de relatórios gerenciais."
    }
};

function openModal(key) {
    const data = projectDetails[key];
    document.getElementById('modal-category').textContent = data.cat;
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-body').textContent = data.body;
    document.getElementById('modal-highlights').innerHTML = data.highlights;
    document.getElementById('project-modal').classList.add('open');
}

function closeModal() {
    document.getElementById('project-modal').classList.remove('open');
}

function closeModalOnBg(e) {
    if (e.target.id === 'project-modal') closeModal();
}

// 4. Copiar E-mail com Notificação (Toast)
function copyEmail() {
    navigator.clipboard.writeText('lacerdajoao@proton.me');
    const toast = document.getElementById('copy-toast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}