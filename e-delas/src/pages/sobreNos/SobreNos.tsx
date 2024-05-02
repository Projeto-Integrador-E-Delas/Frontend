import React from 'react';
import img from "../../assets/empowerment.jpeg"

function SobreNos() {
    return (
        <>
        
        <div className='text-justify m-5 text-lg'>
            <p>E-Delas!” tem como intuito reunir em uma só plataforma mulheres autônomas que queiram promover e 
            vender seus empreendimentos, proporcionando-às maior visibilidade no mercado, possibilitando que 
            elas alcancem novas oportunidades e recomecem suas vidas de maneira independente.</p>
        </div>
        
        <div className='flex justify-center m-5'>
            <img src={img} alt="imagem de mulheres subindo a escada de mãos dadas" className='w-2/3 rounded-3xl '/>
        </div>
        </>
)}
export default SobreNos;
