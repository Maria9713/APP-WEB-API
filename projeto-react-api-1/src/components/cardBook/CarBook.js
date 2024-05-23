import styles from './CardBook.module.css';

import { Link } from 'react-router-dom';

function CardBook({id, livro, autor, category, handlerRemover}){

    const remove = (event)=>{
        event.preventDefault();
        handlerRemover(id)
    };


    return(
        <div className={styles.book_card}>

            <h4>{livro}</h4>

            <p>{autor}</p>

            <p className={styles.category_text}>
                <span></span>  {category}
            </p>

            <div className={styles.book_card_actions}>

                <Link to= {`/editarLivro/${id}`}>
                    EDITAR
                </Link>

                <button
                    onClick={remove}
                >
                    Excluir
                </button>

            </div>
    
        </div>
    )

}

export default CardBook;