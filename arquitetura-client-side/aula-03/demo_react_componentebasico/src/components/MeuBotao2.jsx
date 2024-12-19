export function MeuBotao2(){
    function handleClick(event){
        event.stopPropagation();
        alert(`Clicou ${event.currentTarget.id}`);
    };

    return (
        <button id="botaoClicavel2" onClick={handleClick}>Cliquei Aqui 2</button>
    );
}