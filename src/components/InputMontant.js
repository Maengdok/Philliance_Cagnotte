import { useHistory } from 'react-router-dom';
import { useContext, useState } from 'react';
import ContextGlobal from '../common/ContextGlobal';

function InputMontant(props) {
    const [amount, setAmount] = useState(' ');
    const history = useHistory();
    const context = useContext(ContextGlobal);

    const handleClick = () => {
        context.entrerMontant = amount;
        history.push(props.suivant);
    };

    return (
        <div className="user-input">
            <label>Veuillez entrer le montant :</label>
            <input type="number" value={amount} className="form-control text-center" onChange={e => setAmount(e.target.value)} />
            <button type="button" className="btn btn-light" onClick={handleClick}>Confirmer <i className="fas fa-arrow-right"></i></button>
        </div>
    );
}

export default InputMontant;