import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState<string[]>(['One Punch']);

    const onAddNewCategory = (value: string) => {

        if (categories.includes(value)) return
        
        setCategories([
            value,
            ...categories
        ])

    }


    return(
        <>
            <h1>GifExpertApp</h1>

            {/* Imput */}

            <AddCategory 
                 onAddNewCategory = { onAddNewCategory }   
                />

                {
                    categories.map( category => 
                        <GifGrid category = {category} key={category}/>
                    )
                }
        </>
    );

}

