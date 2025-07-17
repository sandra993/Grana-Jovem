import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

interface Transacao {
  descricao: string;
  valor: number;
  tipo: 'entrada' | 'saida';
}

interface Props {
  transacoes: Transacao[];
}

const GraficoBarras = ({ transacoes }: Props) => {
  const entradas = transacoes
    .filter((t) => t.tipo === 'entrada')
    .reduce((acc, curr) => acc + curr.valor, 0);

  const saidas = transacoes
    .filter((t) => t.tipo === 'saida')
    .reduce((acc, curr) => acc + curr.valor, 0);

    const data = [
      { nome: "Resumo", entradas, saidas }
    ];
    

  return (
    <div style={{ width: "100%", height: 300, marginBottom: "3rem" }}>
      <h3 style={{ textAlign: 'center' }}>Resumo Gráfico</h3>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="nome" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="entradas" fill="#82ca9d" />
          <Bar dataKey="saidas" fill="#ff6961" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficoBarras;
