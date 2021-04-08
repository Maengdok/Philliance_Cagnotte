import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import ContextGlobal from '../common/ContextGlobal';

function SelectMontant(props) {
    const history = useHistory();
    const context = useContext(ContextGlobal);

    const handleClick = (tip) => () => {
        context[props.champs] = tip;
        history.push(props.suivant);
    };

    return (
        <div className="tips">
        <button type="button" className="btn btn-light mx-2" onClick={handleClick(2)}><i className="fas fa-check-circle"></i> 2 €</button>
        <button type="button" className="btn btn-light mx-2" onClick={handleClick(5)}><i className="fas fa-check-circle"></i> 5 €</button>
        <button type="button" className="btn btn-light mx-2" onClick={handleClick(10)}><i className="fas fa-check-circle"></i> 10 €</button>
        <button type="button" className="btn btn-light mx-2" onClick={handleClick(20)}><i className="fas fa-check-circle"></i> 20 €</button>
    </div>
    );
}

export default SelectMontant;