import './Alerta.css';

interface AlertaProps {
  mensagem: string;
  tipo: 'sucesso' | 'erro';
}

const Alerta = ({ mensagem, tipo }: AlertaProps) => {
  return (
    <div className={`alerta ${tipo}`}>
      {mensagem}
    </div>
  );
};

export default Alerta;
