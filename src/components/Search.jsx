import { useState } from "react"

const Search = ({ setBooks, storeBooks }) => {
    const [search, setSearch] = useState("");

    const find = (e) => {
        let key = e.target.value

        setSearch(key.toLowerCase())

        setBooks(storeBooks)
        setBooks((prev) => {
            return prev.filter((e, i) => (storeBooks[i].name).toLowerCase().includes(search))
        })

        if(key==="")setBooks(storeBooks)
    }


    return (
        <div>
            <input type="text" placeholder="Find PDF" onChange={find} />
        </div>
    )
}

export default Search