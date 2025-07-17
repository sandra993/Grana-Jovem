import React, { useState } from 'react';
import './Formulario.css';

interface Props {
  onAdicionar: (transacao: {
    descricao: string;
    valor: number;
    tipo: 'entrada' | 'saida';
    data: string;
  }) => void;
}

const Formulario = ({ onAdicionar }: Props) => {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState(0);
  const [tipo, setTipo] = useState<'entrada' | 'saida'>('entrada');
  const [data, setData] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!descricao || !valor || !data) return;

    onAdicionar({ descricao, valor, tipo, data });

    setDescricao('');
    setValor(0);
    setTipo('entrada');
    setData('');
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Valor"
        value={valor}
        onChange={(e) => setValor(Number(e.target.value))}
        required
      />
      <select value={tipo} onChange={(e) => setTipo(e.target.value as any)}>
        <option value="entrada">Entrada</option>
        <option value="saida">Saída</option>
      </select>
      <input
        type="date"
        value={data}
        onChange={(e) => setData(e.target.value)}
        required
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default Formulario;
