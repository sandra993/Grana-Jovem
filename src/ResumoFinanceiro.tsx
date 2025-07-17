import './ResumoFinanceiro.css';

interface Props {
  transacoes: {
    valor: number;
    tipo: 'entrada' | 'saida';
  }[];
}

const ResumoFinanceiro = ({ transacoes }: Props) => {
  const entradas = transacoes
    .filter((t) => t.tipo === 'entrada')
    .reduce((acc, curr) => acc + curr.valor, 0);

  const saidas = transacoes
    .filter((t) => t.tipo === 'saida')
    .reduce((acc, curr) => acc + curr.valor, 0);

  const saldo = entradas - saidas;

  return (
    <div className="resumo">
      <h2>Resumo</h2>
      <p>Entradas: R${entradas.toFixed(2)}</p>
      <p>Saídas: R${saidas.toFixed(2)}</p>
      <p>Saldo: R${saldo.toFixed(2)}</p>
    </div>
  );
};

export default ResumoFinanceiro;
