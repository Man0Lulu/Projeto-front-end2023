import styles from './Botao.module.css'
function Botao(){
return(
    <div>
       <h1>botão abaixo! :)</h1> 
       <br/>
       <button className={styles.meubotao}>Clique Aqui</button>  
    </div>
)
}
export default Botao