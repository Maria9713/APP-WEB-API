import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

import Input from '../components/form/Input';
import styles from './NovoLivro.module.css';
import Select from '../components/form/Select';

function NovoLivro () {

    // OBEJETO DE NAVEGAÇÃO
    const navigate = useNavigate();

    // STATE DE DAODS DAS CATEGORIAS VINDAS DOS ARQUIVO db.json
    const [categories, setCategories] = useState([]);
    // STATE DE DADOS QUE VAI ARMAZENAR O OBJETO JSON DE LIVRO 
    const [book, setBook] = useState({})
    // RECUPERA OS DADOS DE CATEGORIA DO ARQUIVO bd.json 
    useEffect ( ()=>{
        fetch(
            'http://localhost:5000/categories',
            {
            method:'GET',
            headers:{
                'Content-Type' : 'application/json'
            }
            }).then(
                (resp)=>resp.json()
            ).then(
                (data)=>{
                    setCategories(data);
                    console.log(data);
                }
            ).catch(
                (error)=>{
                    console.log(error);
                }
            )
            
        }, [])

        // HANDLER DE CAPTURA DOS DADOS DE INPUT (NOME DO LIVRO, AUTOR, DESCRICAO)
        function handlerChangeBook(event){
            setBook({...book,[event.target.name] : event.target.value});
            console.log(book)
        }

         // HANDLER DE CAPTURA DOS DADOS DE SELECT (NOME DO LIVRO, AUTOR, DESCRICAO)
        function handlerChangeCategory(event){
            setBook({...book, category:{
                id: event.target.value,
                category: event.target.options[event.target.selectedIndex].text
            }});
            // console.log(book)
        }

        console.log(book)


        // INCERÇÃO DOS DADOS DE LIVRO 
        function createBook(book){

            fetch('http://localhost:5000/books', {

                method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(book)
            })
            .then(
                (resp)=>resp.json()
            )
            .then(
                (data)=>{
                    console.log(data)
                    navigate('/livros')
                }
            )
            .catch(
                (err)=>{console.log(err)}
            )
        }

        function submit(event){
            event.preventDefault();
            createBook(book);
        }

    return(

        <section className={styles.novo_livro_container}>

            <h1>Casdastro de Livro</h1>

            <form onSubmit={submit}>

                {/* <p>
                    <input type='text' placeholder='Nome do livro' />
                </p> */}

                <Input
                    type='text'
                    name='nome_livro'
                    id='nome_livro'
                    placeholder='Digite o Título do Livro'
                    text='Digite o Título do Livro:'
                    handlerOnchange={handlerChangeBook}
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
                    handlerOnchange={handlerChangeBook}
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
                    handlerOnchange={handlerChangeBook}
                />

                <Select
                    name="categoria_id"
                    text="Selecione a categoria do livro"
                    options={categories}
                    handlerOnchange={handlerChangeCategory}
                />

                <p>
                    <input type='submit' placeholder='Cadastrar livro' />
                </p>

            </form>

        </section>
    )
}

export default NovoLivro;