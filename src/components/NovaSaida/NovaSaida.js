export default function NovaSaida({PaginaInicialComponents, EntradaESaidaComponents}) {
    return (
        <PaginaInicialComponents>
            <EntradaESaidaComponents>
                <h1>Nova saída</h1>
                <form>
                    <input
                        required
                        type="number"
                        placeholder="Valor"
                    />
                    <input
                        required
                        type="text"
                        placeholder="Descrição"
                    />
                    <button>Salvar entrada</button>
                </form>
            </EntradaESaidaComponents>
        </PaginaInicialComponents>
    );
}