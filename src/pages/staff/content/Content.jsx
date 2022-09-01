import React from 'react'
import s from './Content.module.css'
// import axios from 'axios'
import Card from './card/Card'
import json from './../../../json/users.json'

const Content = ({ insert, openModal, }) => {

    const [user, setUser] = React.useState([])

    React.useEffect(() => {

        setUser(json.filter(el => el.name.toLowerCase().search(insert.toLowerCase()) !== -1))
        // (async () => {
        //     try {
        //         const r = await axios.get(`http://127.0.0.1:3030/?term=${insert}`)
        //         setUser(r.data)
        //     } catch (error) {
        //         console.log(`Ошибка: ${error}`);
        //     }
        // })()
    }, [insert])

    return (
        user.length
            ?
            <section className={s.container} >
                {user.map((el, idx) => {
                    return <Card key={idx}
                        name={el.name}
                        phone={el.phone}
                        email={el.email}
                        openModal={openModal}
                        el={el}
                    />
                })}
            </section>
            :
            <section className={s.container}>
                Совпадения не найдены
            </section>
    )
}
export default Content
