import { PieChart, Pie, Cell, Legend } from 'recharts';

const COLORS = ['#4CAF50', '#F44336']; // verde e vermelho

interface Transacao {
  descricao: string;
  valor: number;
  tipo: 'entrada' | 'saida';
}

interface Props {
  transacoes: Transacao[];
}

const GraficoPizza = ({ transacoes }: Props) => {
  const entradas = transacoes
    .filter((t) => t.tipo === 'entrada')
    .reduce((acc, curr) => acc + curr.valor, 0);

  const saidas = transacoes
    .filter((t) => t.tipo === 'saida')
    .reduce((acc, curr) => acc + curr.valor, 0);

  const data = [
    { name: 'Entradas', value: entradas },
    { name: 'Saídas', value: saidas },
  ];

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Gráfico de Entradas e Saídas</h3>
      <PieChart width={250} height={250}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={70}
          label
          dataKey="value"
        >
          {data.map((_entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </div>
  );
};

export default GraficoPizza;
