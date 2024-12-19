export function MeuBotao(){
    function handleClick(event){
        alert(`Clicou ${event.currentTarget.id}`);
    };

    return (
        <button id="botaoClicavel1" onClick={handleClick}>Cliquei Aqui 1</button>
    );
}