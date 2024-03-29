import Input from '../components/form/Input';
import styles from './NovoLivro.module.css';

function NovoLivro () {
    return(

        <section className={styles.novo_livro_container}>

            <h1>Casdastro de Livro</h1>

            <form>

                {/* <p>
                    <input type='text' placeholder='Nome do livro' />
                </p> */}
                <Input
                type='text'
                name='nome_livro'
                id='nome_livro'
                placeholder='Digite o Título do Livro'
                text='Digite o Título do Livro:'
                />

                {/* <p>
                    <input type='text' placeholder='Nome do autor' />
                </p> */}
                <Input
                type='text'
                name='nome_autor'
                id='nome_autor'
                placeholder='Digite o Nome do Autor'
                text='Digite o Nome do Autor:'
                />

                {/* <p>
                    <input type='text' placeholder='Descrição do livro' />
                </p> */}
                <Input
                type='text'
                name='descrição'
                id='descrição'
                placeholder='Digite uma descrição para o livro'
                text='Descrição:'
                />

                <p>
                    <input type='submit' placeholder='Cadastrar livro' />
                </p>

            </form>

        </section>
    )
}

export default NovoLivro;