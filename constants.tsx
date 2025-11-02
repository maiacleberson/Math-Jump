
import React from 'react';

// --- TYPE DEFINITION ---
export interface SlideData {
  id: number;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  speech?: string;
}

// --- ICONS (as components) ---
const BoredomIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
);

const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
);

const BrainIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
);

const UserIcon = ({ className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-16 w-16 ${className}`} viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
);

const MagnifyingGlassIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
const TrophyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" /></svg>;
const StarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>;
const UnityIcon = () => <svg className="w-16 h-16" viewBox="0 0 234 262.3"><path d="M117 0L0 67.5v134.9l117 67.5 117-67.5V67.5L117 0zm91.3 194.5l-91.3 52.7-91.3-52.7V75.6l33.8-19.5 57.5 33.2v39l-33.8 19.5v19.5l33.8 19.5 57.5-33.2v-39l-22.5-13V75.6l57.5-33.2v118.9z"></path></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>;
const CheckIcon = ({ checked = false }) => <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 mr-3 flex-shrink-0 ${checked ? 'text-green-400' : 'text-slate-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

// --- SLIDE-SPECIFIC CONTENT COMPONENTS ---

const Slide1Content = () => (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-lg space-y-2">
            <p>Seu nome</p>
            <p>{new Date().toLocaleDateString('pt-BR')}</p>
        </div>
        <div className="w-full max-w-sm p-4 bg-slate-900 rounded-lg border border-slate-700">
             <div className="aspect-video bg-blue-500 rounded flex items-center justify-center text-white font-bold text-center p-4">
                Mockup de Personagem pulando entre plataformas com números
             </div>
        </div>
    </div>
);

const Slide2Content = () => (
    <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-shrink-0">
            <BoredomIcon />
        </div>
        <ul className="list-disc list-inside space-y-4 text-lg md:text-xl">
            <li>Dificuldade em praticar operações básicas de forma divertida</li>
            <li>Falta de motivação em exercícios repetitivos</li>
            <li>Crianças desistem rápido de fichas e apps tradicionais</li>
        </ul>
    </div>
);

const Slide3Content = () => (
    <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead className="border-b-2 border-slate-600">
                    <tr>
                        <th className="p-3 text-lg font-semibold text-cyan-400">Faixa etária</th>
                        <th className="p-3 text-lg font-semibold text-cyan-400">Uso principal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-slate-700">
                        <td className="p-3">8–14 anos (Fundamental I e II)</td>
                        <td className="p-3">Escolas & casa</td>
                    </tr>
                    <tr>
                        <td className="p-3">Adultos</td>
                        <td className="p-3">Treino de cálculo mental rápido</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="flex justify-center items-center gap-4 text-slate-500">
            <UserIcon className="text-slate-600" />
            <UserIcon className="w-20 h-20 text-slate-500" />
            <UserIcon className="text-slate-400" />
            <div className="absolute bg-white text-black p-2 rounded-lg text-sm shadow-lg ml-40 mb-20 transform -rotate-6">4×7=?</div>
        </div>
    </div>
);

const Slide4Content = () => (
    <div className="flex flex-col md:flex-row items-center justify-around gap-8 text-center">
        <div className="flex items-center gap-4">
            <div className="text-2xl font-bold">Diversão</div>
            <HeartIcon />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-slate-500 transform rotate-90 md:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        <div className="flex items-center gap-4">
            <BrainIcon />
            <div className="text-2xl font-bold">Aprendizado</div>
        </div>
        <ul className="mt-8 md:mt-0 md:ml-12 list-none space-y-3 text-left text-lg">
           <li><span className="text-cyan-400 mr-2">+</span> Reforço de +, −, ×, ÷</li>
           <li><span className="text-cyan-400 mr-2">+</span> Cálculo mental rápido</li>
           <li><span className="text-cyan-400 mr-2">+</span> Progressão natural de dificuldade</li>
        </ul>
    </div>
);

const Slide5Content = () => {
    const stages = [
        { name: 'Mundo Simples', icon: '☀️' },
        { name: 'Floresta', icon: '🌳' },
        { name: 'Montanha', icon: '⛰️' },
        { name: 'Espaço', icon: '🚀' },
        { name: 'Dimensão Futurista', icon: '🤖' },
    ];
    return (
        <div className="relative w-full py-4">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-700 -translate-y-1/2"></div>
            <div className="relative flex justify-between">
                {stages.map((stage, index) => (
                    <div key={index} className="flex flex-col items-center z-10">
                        <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-2xl border-4 border-slate-800">{stage.icon}</div>
                        <div className="mt-2 text-center text-sm font-semibold">{stage.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Slide6Content = () => (
    <div className="grid md:grid-cols-2 gap-8">
        <ul className="list-disc list-inside space-y-4 text-lg md:text-xl">
            <li>Pule de plataforma em plataforma</li>
            <li>Escolha a resposta correta (tap na tela)</li>
            <li>Barra de tempo força decisões rápidas</li>
            <li>Colete moedas, power-ups e skins</li>
        </ul>
        <div className="flex items-center justify-center gap-2">
            <div className="w-24 h-32 bg-slate-700 rounded-lg flex flex-col items-center justify-center p-2 text-center text-xs">Personagem</div>
            <div className="text-2xl font-bold text-slate-500">→</div>
            <div className="w-24 h-32 bg-slate-700 rounded-lg flex flex-col items-center justify-center p-2 text-center text-xs">Cálculo<br/><span className="text-lg font-mono">5+3=?</span></div>
            <div className="text-2xl font-bold text-slate-500">→</div>
            <div className="w-24 h-32 bg-slate-700 rounded-lg flex flex-col items-center justify-center p-2 text-center text-xs">Pulo para<br/><span className="text-lg font-mono">8</span></div>
        </div>
    </div>
);

const Slide7Content = () => (
    <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
            <thead className="border-b-2 border-slate-600">
                <tr>
                    <th className="p-3 text-lg font-semibold text-cyan-400">Tipo</th>
                    <th className="p-3 text-lg font-semibold text-cyan-400">O que motiva</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b border-slate-700">
                    <td className="p-3 flex items-center gap-2"><MagnifyingGlassIcon /> Explorador</td>
                    <td className="p-3">Skins, cenários, colecionáveis</td>
                </tr>
                <tr className="border-b border-slate-700">
                    <td className="p-3 flex items-center gap-2"><TrophyIcon /> Competidor</td>
                    <td className="p-3">Ranking global/local</td>
                </tr>
                <tr>
                    <td className="p-3 flex items-center gap-2"><StarIcon /> Conquistador</td>
                    <td className="p-3">Missões diárias, 100% de acertos</td>
                </tr>
            </tbody>
        </table>
    </div>
);

const Slide8Content = () => (
     <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <ul className="list-disc list-inside space-y-4 text-lg md:text-xl">
            <li>Unity 2022 + C#</li>
            <li>60 FPS em dispositivos intermediários</li>
            <li>Android 10+ / iOS 14+</li>
            <li>Dificuldade adaptativa (IA simples)</li>
        </ul>
        <div className="flex items-center gap-8 text-slate-400">
            <UnityIcon />
            <PhoneIcon />
        </div>
    </div>
);

const Slide9Content = () => (
    <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
            <thead className="border-b-2 border-slate-600">
                <tr>
                    <th className="p-3 text-lg font-semibold text-cyan-400">Fase</th>
                    <th className="p-3 text-lg font-semibold text-cyan-400">Tempo</th>
                </tr>
            </thead>
            <tbody>
                {[
                    { fase: '1. Protótipo', tempo: '2 semanas' },
                    { fase: '2. Visual + UI', tempo: '3 semanas' },
                    { fase: '3. Testes', tempo: '2 semanas' },
                    { fase: '4. Beta', tempo: '1 semana' },
                ].map((item, idx, arr) => (
                    <tr key={item.fase} className={idx < arr.length -1 ? "border-b border-slate-700" : ""}>
                        <td className="p-3">{item.fase}</td>
                        <td className="p-3">{item.tempo}</td>
                    </tr>
                ))}
            </tbody>
             <tfoot className="border-t-2 border-slate-600">
                <tr>
                    <td className="p-3 font-bold">Total</td>
                    <td className="p-3 font-bold">8 semanas</td>
                </tr>
            </tfoot>
        </table>
    </div>
);


const Slide10Content = () => {
    const items = [
        { title: 'Adaptativo', text: 'Dificuldade que se adapta ao aluno' },
        { title: 'Engajador', text: 'Missões diárias → engajamento contínuo' },
        { title: 'Social', text: 'Integração escolar (ranking por turma/escola)' },
        { title: 'Acessível', text: 'Zero custo inicial (freemium)' },
    ];
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {items.map(item => (
                <div key={item.title} className="bg-slate-700/50 p-4 rounded-lg">
                    <h3 className="font-bold text-cyan-400">{item.title}</h3>
                    <p className="mt-2 text-sm">{item.text}</p>
                </div>
            ))}
        </div>
    );
};

const Slide11Content = () => {
    const items = [
        { text: 'Finalizar assets 2D (personagem + 5 cenários)', checked: false },
        { text: 'Testar com 30 alunos (escola parceira)', checked: false },
        { text: 'Publicar beta na Google Play / App Store', checked: false },
        { text: 'Coletar feedback → versão 1.0', checked: false },
    ];
    return (
        <div className="space-y-3">
            {items.map(item => (
                <div key={item.text} className="flex items-center text-lg">
                    <CheckIcon checked={item.checked} />
                    <span>{item.text}</span>
                </div>
            ))}
        </div>
    );
};

const Slide12Content = () => (
    <div className="text-center">
        <p className="text-xl mb-4">Teste o protótipo clicável (link na descrição) e me diga o que achou!</p>
        <div className="flex justify-center my-6">
            <div className="w-32 h-32 bg-white p-2 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect><rect x="14" y="14" width="4" height="4"></rect></svg>
            </div>
        </div>
        <p className="text-slate-400">seu-email@example.com / linkedin.com/in/seu-perfil</p>
    </div>
);


// --- SLIDES DATA ARRAY ---

export const SLIDES: SlideData[] = [
  { id: 1, title: 'Math Jump', subtitle: 'Aprendizado divertido de operações básicas', content: <Slide1Content /> },
  { id: 2, title: 'Por que criamos o Math Jump?', content: <Slide2Content />, speech: "Todo professor já ouviu: ‘Matemática é chata’. Nosso desafio foi transformar isso." },
  { id: 3, title: 'Para quem é o jogo?', content: <Slide3Content />, speech: 'Começamos pelas crianças, mas qualquer um que queira agilidade mental pode jogar.' },
  { id: 4, title: 'Objetivo do Jogo', subtitle: 'Missão: Unir diversão + aprendizado em um único pulo.', content: <Slide4Content />, speech: 'Cada acerto é um pulo mais alto – literal e metaforicamente.' },
  { id: 5, title: 'Jornada do Jogador', subtitle: 'A Aventura', content: <Slide5Content />, speech: 'Quanto mais o jogador aprende, mais longe ele viaja.' },
  { id: 6, title: 'Mecânicas Principais (Demo Rápida)', subtitle: 'Como funciona?', content: <Slide6Content />, speech: 'Reflexo + cérebro = pontuação máxima.' },
  { id: 7, title: 'Tipos de Jogador', subtitle: 'Todo mundo se diverte', content: <Slide7Content />, speech: 'Não importa o estilo: tem recompensa para cada um.' },
  { id: 8, title: 'Tecnologia & Performance', subtitle: 'Por trás dos pulos', content: <Slide8Content />, speech: 'Leve o suficiente para rodar no celular da escola, robusto para ranking online.' },
  { id: 9, title: 'Cronograma (Resumo)', subtitle: 'Quando teremos o jogo?', content: <Slide9Content />, speech: 'Em dois meses teremos uma versão jogável para testes em sala de aula.' },
  { id: 10, title: 'O que torna Math Jump único?', content: <Slide10Content />, speech: 'Não é só um jogo – é uma ferramenta pedagógica gamificada.' },
  { id: 11, title: 'Próximos Passos', subtitle: 'O que falta?', content: <Slide11Content />, speech: 'Preciso da sua ajuda para validar o conceito!' },
  { id: 12, title: 'Vamos pular juntos?', subtitle: 'Obrigado!', content: <Slide12Content /> },
];
