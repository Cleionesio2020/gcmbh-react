import { FaTimes } from "react-icons/fa";
import "./style.css";
export default function ViewViatura({controleViatura} ) {
  return (
    <div className="content">
      <span className="content-titulo"> { `${controleViatura.viatura.placa} (${controleViatura.componentes.length})` }</span>
      <button className="btn-content">
        <FaTimes size="12" />
      </button>
      <div>
        <div>
        {controleViatura.componentes.map( componente => (
            <span className="content-iner">
            {componente.nomeFuncional}
            <button className="btn-delete">
              <FaTimes size="12" />
            </button>
          </span>

))}

          
        </div>
      </div>
    </div>
  );
}
