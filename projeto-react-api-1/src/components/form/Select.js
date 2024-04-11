import styles from './Select.module.css';

function Select ({ text, name, options, handlerOnchange, value}){
    return(

        <div className={styles.form_control}>

            <label htmlFor={name}>{text}</label>

            <select name={name} id={name} onChange={handlerOnchange}>
                
            <option>Slecione uma categoria</option>

                {
                    options.map((option)=>(
                    // options é o props 
                        <option
                        value={option.id}
                        key={option.id} >

                        {option.name}

                        </option>
                    ))
                }

            </select>

        </div>
    );

}
export default Select;

