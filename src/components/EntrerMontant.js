import InputMontant from './InputMontant';

function EntrerMontant() {

    return (
        <div className="App">
            <div className="App-header">
                <i className="fas fa-gifts"></i>
                <h1 className="title">Êtes-vous généreux(se) ou radin(e) ?</h1>
                <InputMontant suivant="/confirmation" />
            </div>
        </div>
    );
}

export default EntrerMontant;