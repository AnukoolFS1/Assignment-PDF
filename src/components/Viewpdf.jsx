import { useEffect } from "react"
import Context from "../context/Context";

const ViewPdf = () => {
    const { viewpdf, setViewpdf, pdf } = Context()

    function close(){
        setViewpdf(false)
    }
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setViewpdf(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);
    return (
        <div style={{ display: viewpdf && pdf ? "block" : "none" }} className="viewpdf">
            <span className="cross" onClick={close}>X</span>
            <iframe src={pdf} frameBorder="0" height={1000} width={1200}></iframe>
        </div>
    )
}

export default ViewPdf