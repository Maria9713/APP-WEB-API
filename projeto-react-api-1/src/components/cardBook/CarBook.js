import styles from './CardBook.module.css';

function CardBook({id, livro, autor, category, handlerRemover}){

    const remove = (event)=>{
        event.preventDefault();
        handlerRemover(id)
    }

    return(
        <div className={styles.book_card}>
            <h4>{livro}</h4>
            <p>{autor}</p>
            <p className={styles.category_text}>
                <span></span>  {category}
            </p>
            <div className={styles.book_card_actions}>
                <button
                onClick={remove}>
                    Excluir
                </button>
            </div>
    
        </div>
    )

}

export default CardBook;