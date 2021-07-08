import { FaTimes } from "react-icons/fa";
import "./style.css";
export default function ViewViatura({viatura} ) {
  return (
    <div className="content">
      <span className="content-titulo"> { `${viatura.placa} (${viatura.componetes.length})` }</span>
      <button className="btn-content">
        <FaTimes size="12" />
      </button>
      <div>
        <div>
        {viatura.componetes.map( viatura => (
            <span className="content-iner">
            {viatura.nome}
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
