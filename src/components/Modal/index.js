import ReactDOM from 'react-dom';
import {useEffect} from "react";
import {connect} from "react-redux";


import s from './Modal.module.css';
import {sendCommentThunk, setInfoThunk} from "../../redux/reducers/PhotoAndCommentsReducer";
import Preloader from "../Preloader";
import Comment from "../Comment";
import FormComments from "../FormComments";

const Modal = ({close, id, isFetching, info, setInfoThunk, isFetchingSendComment, sendCommentThunk}) => {

    useEffect(() => {
        setInfoThunk(id)
    }, [id, setInfoThunk])


    return (
        <div>
            {ReactDOM.createPortal(
                <div className={s.modal}>
                    <div className={s.wrap}>
                        <div className={s.close} onClick={() => close(false)}></div>
                        {isFetching
                            ? <Preloader/>
                            : <div className={s.content}>
                                <img className={s.img} src={info.url} alt={`Картинка ${id}`}/>
                                <div className={s.comment}>
                                    {info?.comments && info.comments.length === 0 &&
                                    <div className={s.nocomments}>Коментарии отсутсвуют</div>}
                                    {info?.comments && info.comments.length !== 0 && info.comments.map(el => <Comment
                                        unix={el.date} text={el.text} key={el.id}/>)}
                                </div>
                                <FormComments sendCommentThunk={sendCommentThunk}
                                              isFetchingSendComment={isFetchingSendComment} info={info}
                                              id={id}/>
                            </div>}
                    </div>
                </div>,
                document.getElementById('portal')
            )}
        </div>
    );
};

let mapStateToProps = (state) => (
    {
        isFetching: state.PhotoAndCommentsReducer.isFetching,
        info: state.PhotoAndCommentsReducer.info,
        isFetchingSendComment: state.PhotoAndCommentsReducer.isFetchingSendComment
    }
);

export default connect(mapStateToProps, {setInfoThunk, sendCommentThunk})(Modal);