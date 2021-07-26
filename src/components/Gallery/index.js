import {useEffect, useState} from "react";
import {connect} from "react-redux";

import s from './Gallery.module.css'
import {setListofPhotos} from "../../redux/reducers/ListOfPhotoReducer";
import Preloader from "../Preloader";
import Modal from "../Modal";

const Gallery = ({setListofPhotos, isFetching, listOfPhoto}) => {

        const [isModal, setIsModal] = useState(false);
        const [id, setId] = useState(null);

        useEffect(() => {
            setListofPhotos()
        }, [setListofPhotos])

        const clickInPhoto = (id) => {
            setId(id)
            setIsModal(true)
        }

        return (
            <div className={s.Gallery}>
                {
                    isFetching
                        ? <Preloader/>
                        : listOfPhoto.map(ph =>
                            <img onClick={() => clickInPhoto(ph.id)} key={ph.id} src={ph.url} alt={ph.id}/>
                        )
                }
                {isModal && <Modal id={id} close={setIsModal}/>}
            </div>
        );
    }
;

let mapStateToProps = (state) => (
    {
        isFetching: state.ListOfPhotoReducer.isFetching,
        listOfPhoto: state.ListOfPhotoReducer.listOfPhoto,
    }
);

export default connect(mapStateToProps,
    {
        setListofPhotos
    }
)(Gallery);