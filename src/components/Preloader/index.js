import s from './Preloader.module.css';

const Preloader = () => {
    return (
        <div className = {s.wrapper}>
            <div className = {s.lds_ellipsis}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Preloader;