import {useNavigate, useParams} from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import {useRef} from "react";
import {v4} from "uuid";

function EditPage(props) {
    const {id} = useParams();
    const [{data}] = useFetchData(process.env.REACT_APP_HOST_URL + 'posts',null);
    const navigate = useNavigate();
    const textareaRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        const url = process.env.REACT_APP_HOST_URL + 'posts';
        const updateData = JSON.stringify({
            id: Number(id),
            content: textareaRef.current?.value
        });
        console.log({updateData});
        try {
            fetch(url, {
                method: 'POST',
                body: updateData,
                headers: {'Content-Type' : 'application/json'}
            }).then(() => navigate("/"));
        } catch (e) {
            console.log(e.message);
        }
    }

    const exitClickHandler = () => {
        navigate("/");
    }

    return (
        <div>
            <form className={'edit-form'} onSubmit={submitHandler}>
                {data.filter(obj => obj.id === Number(id)).map(data =>
                    <div key={v4()}>
                        <div>{id}</div>
                        <textarea defaultValue={data.content} ref={textareaRef}/>
                    </div>
                )}
                <button type={'submit'}>Save</button>
                <button type={'button'} onClick={exitClickHandler}>Exit</button>
            </form>
        </div>
    )
}

export default EditPage;