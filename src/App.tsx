import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import ResumoFinanceiro from './ResumoFinanceiro';
import Transacoes from './assets/Transacoes';
import Formulario from './assets/Formulario';
import GraficoPizza from './assets/GraficoPizza';
import GraficoBarras from './assets/GraficoBarras';

interface Transacao {
  descricao: string;
  valor: number;
  tipo: 'entrada' | 'saida';
}

const App = () => {
  // ✅ 1. Recupera do localStorage ao iniciar o app
  const [transacoes, setTransacoes] = useState<Transacao[]>(() => {
    const dadosSalvos = localStorage.getItem('transacoes');
    return dadosSalvos ? JSON.parse(dadosSalvos) : [];
  });

  // ✅ 2. Toda vez que as transações mudam, salva no localStorage
  useEffect(() => {
    localStorage.setItem('transacoes', JSON.stringify(transacoes));
  }, [transacoes]);

  // Adiciona uma nova transação
  const adicionarTransacao = (novaTransacao: Transacao) => {
    setTransacoes((prev) => [...prev, novaTransacao]);
  };

  // Remove uma transação por índice
  const excluirTransacao = (index: number) => {
    setTransacoes((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <Header />
      <ResumoFinanceiro transacoes={transacoes} />
      <Formulario onAdicionar={adicionarTransacao} />
      <Transacoes transacoes={transacoes} onExcluir={excluirTransacao} />
      <GraficoPizza transacoes={transacoes} />
      <GraficoBarras transacoes={transacoes} />
      <p style={{ textAlign: 'center', color: '#555' }}>
        Seu controle financeiro começa aqui!
      </p>
    </div>
  );
};

export default App;
