import { useState } from 'react'
import store from './store'

const Provider = ({ children }) => {
    const [pdf, setPdf] = useState("");
    const [viewpdf, setViewpdf] = useState(false);

    return (
        <store.Provider value={{ pdf, setPdf, viewpdf, setViewpdf }}>
            {children}
        </store.Provider>
    )
}

export default Provider