import React from 'react'
import Search from './search/Search';
import Content from './content/Content';
import Modal from './modal/Modal';

const Staff = () => {

    const [insert, setInsert] = React.useState('')
    const [modal, setModal] = React.useState(false)
    const [userInfo, setUserInfo] = React.useState({})

    const openModal = (e, el) => {
        setUserInfo(el)
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
    }

    return (
        modal
            ?
            <div className="wrap">
                <Search insert={insert} setInsert={setInsert} />
                <Content insert={insert} />
                <Modal closeModal={closeModal}
                    name={userInfo.name}
                    email={userInfo.email}
                    phone={userInfo.phone}
                    address={userInfo.address}
                    position_name={userInfo.position_name}
                    department={userInfo.department}
                    hire_date={userInfo.hire_date}
                />
            </div>
            :
            <div className="wrap">
                <Search insert={insert} setInsert={setInsert} />
                <Content insert={insert} openModal={openModal} />
            </div>
    );
}
export default Staff
