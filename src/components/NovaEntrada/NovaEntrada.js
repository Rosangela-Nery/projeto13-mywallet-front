export default function NovaEntrada({PaginaInicialComponents, EntradaESaidaComponents}) {
    return (
        <PaginaInicialComponents>
            <EntradaESaidaComponents>
                <h1>Nova entrada</h1>
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
