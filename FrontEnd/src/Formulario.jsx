



function Formulario({botao, eventoTeclado, cadastrar, obj, cancelar, remover, alterar}){
    return (
        <form action="" className="size-1/3 flex flex-col gap-2 p-8 rounded m-10 bg-white drop-shadow-2xl text-black">
            <input value={obj.nome} onChange= {eventoTeclado} type="text" name="nome" id="" placeholder="Nome" className="p-1.5 rounded border-b-2 border-b-blue-200 outline-0"/>
            <input onChange= {eventoTeclado} value={obj.marca} type="text" name="marca" id="" placeholder="Marca" className="mt-6 p-1.5 rounded border-b-2 border-b-blue-200 outline-0" />
            <div className="p-8 flex gap-2.5 w-full justify-center">
                {
                    botao
                    ?
                    <input onClick={cadastrar} type="button" value="Cadastrar" className=" bg-blue-400 w-35 rounded cursor-pointer p-1 text-white outline-0" />
                    :
                    <div className="mt-8 flex gap-2.5 w-full justify-center">
                        <input onClick={alterar} type="button" value="Alterar" className=" bg-amber-400 w-35 rounded cursor-pointer p-1  text-white outline-0"/>
                        <input onClick={remover} type="button" value="Remover" className=" bg-red-400 w-35 rounded cursor-pointer p-1  text-white outline-0"/>
                        <input onClick={cancelar} type="button" value="Cancelar" className=" bg-blue-600 w-35 rounded cursor-pointer p-1  text-white outline-0"/>
                    </div>
                }
            </div>
            
        </form>
    )
}

export default Formulario;