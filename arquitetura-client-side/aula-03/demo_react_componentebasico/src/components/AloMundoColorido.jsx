export function AloMundoColorido({nome, cor}){
    const corTexto = cor || 'black'

    return (
        <h1 style={{color: corTexto}}> Alô, {nome}!</h1>
    );
}