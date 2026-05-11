import React, { useState, useRef } from 'react';

const QUICK_COMMANDS = ['help', 'whoami', 'skills', 'contact', 'clear'];

/**
 * Terminal colors are hardcoded (not theme-aware) because a terminal
 * should always render as light-on-dark regardless of the site theme.
 */
const T = {
  cyan: 'text-[#00f5ff]',
  green: 'text-[#00ff41]',
  text: 'text-[#e2e8f0]',
  muted: 'text-[#64748b]',
  border: 'border-[#1e293b]',
  chrome: 'bg-[#161b22]',
  btnBorder: 'border-[#1e293b]',
  btnHover: 'hover:text-[#00f5ff] hover:border-[#00f5ff]',
} as const;

const TerminalWidget = () => {
  const [history, setHistory] = useState<{cmd: string, out: string}[]>([
    { cmd: 'whoami', out: '> Aashish Bande — Security Analyst | Ethical Hacker' },
    { cmd: 'ls certifications/', out: '> CAP  ISO27001  CNSP  JrPenTester  API-Pentest' }
  ]);
  const [input, setInput] = useState('');
  const endRef = useRef<HTMLDivElement>(null);

  const runCommand = (rawInput: string) => {
    if (!rawInput.trim()) return;
    
    const cmd = rawInput.trim().toLowerCase();
    let out = '> Command not found. Type "help" for available commands.';
    
    if (cmd === 'help') {
      out = '> Available commands: whoami, skills, clear, contact, sudo';
    } else if (cmd === 'whoami') {
      out = '> Aashish Bande — Security Analyst @ Pragma Edge Inc.';
    } else if (cmd === 'skills') {
      out = '> Pentesting, SAST, DAST, Linux, AWS, Python, OSINT';
    } else if (cmd === 'contact') {
      out = '> Medium: aashishtechsecurity.medium.com | LinkedIn: /in/aashishsec';
    } else if (cmd === 'sudo') {
      out = '> permission denied: user is not in the sudoers file. This incident will be reported.';
    } else if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    setHistory(prev => [...prev, { cmd: rawInput, out }]);
    setInput('');
    setTimeout(() => {
      endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    runCommand(input);
  };

  return (
    <section id="terminal-section" className="py-12 relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
      <div className="rounded-lg overflow-hidden border border-[#1e293b] bg-[#0a0a0a] shadow-[0_0_30px_rgba(0,245,255,0.1)]">
        {/* Window Chrome — always dark */}
        <div className={`${T.chrome} px-4 py-2 flex items-center gap-2 border-b border-[#333]`}>
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
          <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
          <div className={`flex-1 text-center text-[#888] text-xs font-mono truncate`}>AashishTechSecurity Terminal</div>
        </div>
        
        {/* Terminal Body — all colors hardcoded to dark palette */}
        <div
          className={`p-4 sm:p-6 font-mono text-xs sm:text-sm md:text-base ${T.green} space-y-3 sm:space-y-4 h-[250px] sm:h-[300px] overflow-y-auto`}
          onClick={() => document.getElementById('terminal-input')?.focus()}
        >
          {history.map((h, i) => (
            <div key={i} className="space-y-1">
              <div className={`flex gap-2 ${T.text}`}>
                {/* Shortened prompt on mobile */}
                <span className={`${T.cyan} whitespace-nowrap hidden sm:inline`}>root@AashishTechSecurity:~#</span>
                <span className={`${T.cyan} whitespace-nowrap sm:hidden`}>~#</span>
                <span className="break-all">{h.cmd}</span>
              </div>
              <div className={`${T.green} opacity-90 pl-4 whitespace-pre-line break-words`}>{h.out}</div>
            </div>
          ))}
          
          <form onSubmit={handleCommand} className={`flex gap-2 ${T.text} mt-4`}>
            <span className={`${T.cyan} whitespace-nowrap hidden sm:inline`}>root@AashishTechSecurity:~#</span>
            <span className={`${T.cyan} whitespace-nowrap sm:hidden`}>~#</span>
            <input 
              id="terminal-input"
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-transparent outline-none flex-1 text-[#e2e8f0] placeholder:text-[#555] min-w-0 caret-[#00f5ff]"
              autoComplete="off"
              spellCheck="false"
              placeholder="Type a command..."
            />
          </form>
          <div ref={endRef} />
        </div>

        {/* Quick command buttons — hardcoded dark colors */}
        <div className="border-t border-[#333] bg-[#0d1117] px-4 py-2.5 flex gap-2 overflow-x-auto hide-scrollbar">
          {QUICK_COMMANDS.map(cmd => (
            <button
              key={cmd}
              onClick={() => runCommand(cmd)}
              className={`px-3 py-1.5 min-h-[36px] text-xs font-mono rounded ${T.btnBorder} ${T.muted} ${T.btnHover} active:scale-95 transition-all whitespace-nowrap shrink-0`}
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TerminalWidget;
