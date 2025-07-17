import './Transacoes.css';
import { motion, AnimatePresence } from 'framer-motion';

interface Transacao {
  descricao: string;
  valor: number;
  tipo: 'entrada' | 'saida';
}

interface Props {
  transacoes: Transacao[];
  onExcluir: (index: number) => void;
}

const Transacoes = ({ transacoes, onExcluir }: Props) => {
  return (
    <div className="transacoes">
      <h2>Transações</h2>
      <ul>
        <AnimatePresence>
          {transacoes.map((t, index) => (
            <motion.li
              key={t.descricao + index}
              className={t.tipo}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            >
              <span>{t.descricao}</span>
              <span>R$ {t.valor.toFixed(2)}</span>
              <button onClick={() => onExcluir(index)}>Excluir</button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default Transacoes;
