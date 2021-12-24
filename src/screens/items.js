import React, { useState } from 'react';
import { Itemtitle, Itembody } from '../style';

export const Item = ({ title, body }) => {
    const [show, setShow] = useState(false)
    console.log(Itemtitle)
    const handleShow = () => {
        setShow(true)
    }
    return (
        <div>
            <Itemtitle onCllck={handleShow}>{title}</Itemtitle>
            {show ? <Itembody>{body}</Itembody> : null}
        </div>
    )
}