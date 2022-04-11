import React, {useState, useRef} from 'react';

export default function Searchbar(props) {

    const [query, setQuery] = useState('');

    function handleChange(event) {
        setQuery(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit(query);
    }

    return (
        <div className='searchbar'>
            <form onSubmit={handleSubmit} className='center'>
                <div className='searchbar-input'>
                    <input
                        type='text'
                        placeholder='Search pictures'
                        value={query}
                        onChange={handleChange}
                    />
                </div>
                <button type='submit'>
                    Search
                </button>
            </form>
        </div>
    );
}