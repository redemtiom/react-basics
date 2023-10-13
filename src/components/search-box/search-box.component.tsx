import { ChangeEventHandler, ChangeEvent } from 'react';

import './search-box.styles.css'

type SearchBoxProps = {
    className: string;
    placeholder?: string;
    //* This is the correct way when no return value
    //onChangeHandler: ChangeEventHandler<HTMLInputElement>;
    //* This is the approach when you need control the return value
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => (
    <div>
        <input
            className={`search-box ${className}n`}
            type="search"
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
    </div>
)

export default SearchBox
