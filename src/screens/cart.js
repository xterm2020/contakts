import React from 'react';
import { Description, Details } from '../style';
import { CartBody, Card } from './../style';
const Cart = (props) => {
    const { email, name, phone, id, getUserId } = props
    const handleShow = (event) => {
        event.preventDefault();
        getUserId(id)
    }
    return (
        <div>
            {id ? <Card primary>
                {id ? <CartBody primary>
                    {id ? <Description primary>
                        <br /> {name} <br /> {email} <br /> {phone} <br /> {id} <br />
                    </Description> :
                        <Description>
                            <br /> {name} <br /> {email} <br /> {phone} <br /> {id} <br />
                        </Description>}
                    {id ? <Details primary onClick={handleShow}>Показати всі пости</Details> :
                        <Details onClick={handleShow}>Показати всі пости</Details>}
                </CartBody> :
                    <CartBody>
                        {id ? <Description primary>
                            <br /> {name} <br /> {email} <br /> {phone} <br /> {id} <br />
                        </Description> :
                            <Description>
                                <br /> {name} <br /> {email} <br /> {phone} <br /> {id} <br />
                            </Description>}
                        {id ? <Details primary onClick={handleShow}>Показати всі пости</Details> :
                            <Details onClick={handleShow}>Показати всі пости</Details>}
                    </CartBody>
                }
            </Card> :
                <Card>
                    {id ? <CartBody>
                        {id ? <Description primary>
                            <br /> {name} <br /> {email} <br /> {phone} <br /> {id} <br />
                        </Description> :
                            <Description>
                                <br /> {name} <br /> {email} <br /> {phone} <br /> {id} <br />
                            </Description>}
                        {id ? <Details primary onClick={handleShow}>Показати всі пости</Details> :
                            <Details onClick={handleShow}>Показати всі пости</Details>}
                    </CartBody> :
                        <CartBody>
                            {id ? <Description primary>
                                <br /> {name} <br /> {email} <br /> {phone} <br /> {id} <br />
                            </Description> :
                                <Description>
                                    <br /> {name} <br /> {email} <br /> {phone} <br /> {id} <br />
                                </Description>}
                            {id ? <Details primary onClick={handleShow}>Показати всі пости</Details> :
                                <Details onClick={handleShow}>Показати всі пости</Details>}
                        </CartBody>
                    }
                </Card>
            }
        </div>
    )
}

export default Cart
