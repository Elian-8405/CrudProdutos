
function Tabela({prods, selecionarProduto}){
        
    return(
           
       <table className="w-3/4 text-center m-9 bg-white drop-shadow-md ">
            <thead className="p-6 border-b-2 border-b-black bg-blue-300" >
                <tr className="rounded-t-2xl">
                    <th className="mt-5 p-6 rounded-tl-2xl">#</th>
                    <th >Nome</th>
                    <th>Marca</th>
                    <th className="rounded-tr-2xl">Selecionar</th>
                    
                </tr>
                
               
            </thead>
            <tbody >
                {
                    prods.map((obj, index)=>(
                        <tr key={index}>
                            <td  className="p-6">{index +1} </td>
                            <td >{obj.nome}</td>
                            <td >{obj.marca}</td>
                            <td ><button onClick={() => {selecionarProduto(index)}} className="h-10 w-30 bg-blue-400 rounded cursor-pointer text-white">Selecionar</button></td>
                        </tr>
                        
                        
                    ))
                    
                }
                
            </tbody>
       </table>
    )
}



export default Tabela;