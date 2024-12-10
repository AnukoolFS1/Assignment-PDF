import Context from "../context/Context";

const Cards = ({ book }) => {
    const { setPdf, setViewpdf } = Context()

    const isEmbeddable = (url) => {
        if (book) {
            return !url.includes("edps.europa.eu") && !url.includes("renesas.com");
        } else {
            return false
        }
    };

    const viewPdf = (link) => {
        if (isEmbeddable(link)) {
            setPdf(link);
            setViewpdf(true)
        }
        else window.location = link
    }

    return (
        <div className="card" onClick={() => viewPdf(book.link)}>  
            <div>
                {
                    isEmbeddable(book.link) ? (
                        <iframe src={book ? book.link + "#toolbar=0" : ""} frameBorder="0" height={450} width={270} > </iframe>
                    ) : (
                        <>
                        <h2>Preview not availiable</h2>
                        <a href={book ? book.link : ""} target="_blank">
                            View Book
                        </a>
                        </>
                    )
                }
            </div>
            <article>
                <h2>{book.name || ""}</h2>
                <cite>{book.author || ""} </cite>-
                <em> {book.published || ""}</em>
            </article>
        </div>
    )
}

export default Cards