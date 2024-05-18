import { ChangeEvent, FormEvent, useState } from 'react'

type AddCategoryTypes = {
    onAddNewCategory : (value: string) => void;
}


export const AddCategory = ({ onAddNewCategory } : AddCategoryTypes) => {

    const [inputValue, setInputValue] = useState('')

    const inputHandler = ( e : ChangeEvent<HTMLInputElement> ) => {

        setInputValue(e.target.value);
    }

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
       e.preventDefault();

       const newImputValue = inputValue.trim();

       if (newImputValue.length <= 1) return
    //    setCategories(categories => [...categories, inputValue])
        onAddNewCategory(newImputValue)
        setInputValue('')

    }

    return(
       <form onSubmit={submitHandler}>
         <input 
            type="text" 
            placeholder="Buscar Gifs"
            value={inputValue}
            onChange={inputHandler}
        />
       </form>
    )
}