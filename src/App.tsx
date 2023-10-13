import { useState, useEffect, ChangeEvent } from 'react'

import { getData } from './utils/data.utils'

import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

import './App.css'

export type Monster = {
    id: string;
    name: string;
    email: string;
}

const App = () => {
    const [monsters, setMonsters] = useState<Monster[]>([])
    const [searchField, setSearchField] = useState('')
    const [filteredMonsters, setFilsteredMonsters] = useState(monsters)

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then((response) => response.json())
        //     .then((users) => {
        //         setMonsters(users)
        //     })
        const fetchUsers = async () => {
            const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
            setMonsters(users);
        }
        fetchUsers();
    },[])

    useEffect(() => {
      const newfilteredMonsters = monsters.filter((monster) => {
        return monster.name.toLowerCase().includes(searchField)
    })

      setFilsteredMonsters(newfilteredMonsters)
    },[monsters, searchField])

    const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const search = event.target.value.toLowerCase()

        setSearchField(search)
    }

    return (
        <div className="App">
            <h1 className="app-title">Monsters Rolodex</h1>
            <SearchBox
                onChangeHandler={onSearchChange}
                placeholder="search monster"
                className="search-box"
            />
            <CardList monsters={filteredMonsters} />
        </div>
    )
}

export default App
