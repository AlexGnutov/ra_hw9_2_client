import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";

function PostItem(props) {
    const {created, content, id} = props;
    const navigate = useNavigate();

    const onPostClick = (e) => {
        console.log('try to go', id);
        navigate(`posts/${id}`);
    }

    return (
        <div className={'post-card'} onClick={onPostClick}>
            <div className={'post-card-date'}>{created}</div>
            <div className={'post-card-text'}>{content}</div>
            <div className={'post-card-id'}>{id}</div>
        </div>
    )
}

PostItem.propTypes = {
    created: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}

export default PostItem;
