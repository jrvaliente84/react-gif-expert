import { useState } from "react";


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const onSubmiForm = (event) => {
        event.preventDefault();
        if( inputValue.trim().length < 1 ) return;

        // setCategories(categories => [inputValue , ...categories]);
        onNewCategory(inputValue)
        setInputValue('');
    };

    return (
        <>
            <form onSubmit={onSubmiForm}>
                <input
                    type="text"
                    placeholder="Buscar gifs"
                    value={inputValue}
                    onChange={(event) => onInputChange(event)}
                />
            </form>
        </>
    )
}
