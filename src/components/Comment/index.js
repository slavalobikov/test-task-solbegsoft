import Moment from "react-moment";

import s from './Comment.module.css'

const Comment = ({text, unix}) => {

    return (
        <div className={s.comment}>
            <div className={s.time}><Moment format="DD.MM.YYYY" date={unix} /></div>
            <div className={s.text}>{text}</div>

        </div>
    );
};

export default Comment;