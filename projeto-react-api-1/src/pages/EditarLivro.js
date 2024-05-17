import styles from './EditarLivro.module.css';

import {useStatr, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import Select from '../components/form/Select';
import Input from '../components/form/Input';

function EditarLivro(params){

    const [categories, setCategories] = useState([]);
    

    /*RECUPERANDO O ID DA URL*/
    const{id} = useParams();
    console.log('ID:' + id);

    const[book, setBook] = useState({})
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


    /* RECUEPRANDO OS DADOS PARA EDIÇÃO*/
    useEffect(()=>{

        fetch(`http://localhost:5000/books/${id}`,{
            method: 'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {setBook(data); 
                console.log(data)})
            .catch((err) => {console.log(err)});
    },[]);
    return(

        <div className={styles.book_container}>
            <h1>EDIÇÃO DE LIVRO</h1>
            <form>

            <Input
                    type='text'
                    name='nome_livro'
                    id='nome_livro'
                    placeholder='Digite o Título do Livro'
                    text='Digite o Título do Livro:'
                    // handlerOnchange={handlerChangeBook}
                />

                <Input
                    type='text'
                    name='nome_autor'
                    id='nome_autor'
                    placeholder='Digite o Nome do Autor'
                    text='Digite o Nome do Autor:'
                    // handlerOnchange={handlerChangeBook}
                />

                <Input
                    type='text'
                    name='descrição'
                    id='descrição'
                    placeholder='Digite uma descrição para o livro'
                    text='Descrição:'
                    // handlerOnchange={handlerChangeBook}
                />

                <Select
                    name="categoria_id"
                    text="Selecione a categoria do livro"
                    options={categories}
                    // handlerOnchange={handlerChangeCategory}
                />

            </form>
        </div>

    )
}

export default EditarLivro