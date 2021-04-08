import { useHistory } from 'react-router-dom';
import SelectMontant from './SelectMontant';

function ChoisirMontant() {
    const history = useHistory();

    const handleClick = () => {
        history.push('/entrer-montant');
    };
    return (
        <div className="App">
            <div className="App-header">
                <i className="fas fa-gifts"></i>
                <h1 className="title">Combien souhaitez-vous offrir ?</h1>
                <SelectMontant suivant="/confirmation" champs="choixMontant" />
                <button type="button" className="btn btn-light" onClick={handleClick}>Choisir un autre montant ...</button>
            </div>
        </div>
    );
}

export default ChoisirMontant;