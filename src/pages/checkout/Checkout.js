import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import { Input, Stack, Select, Image, Link } from "@chakra-ui/react"
import {RiShoppingCart2Line} from "react-icons/all"
import './checkout.css'
import cod from "./COD.png"

import { saveAddressshipping,savepaymentmethod } from '../../actions/cartActions'
import { useDispatch, useSelector } from 'react-redux'

const Checkout = ({history}) => {
    const cart = useSelector((state) => state.cart)

    const { shippingAddress } = cart



    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [phnumber, setPhnumber] = useState(shippingAddress.phnumber)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)
    const [Payment, setPayment] = useState('Card')

    const dispatch = useDispatch()
    const [carddetails, setcarddetails] = useState(true)
    const handleorder = (e)=>{
        e.preventDefault()
         dispatch(saveAddressshipping({ address, city,phnumber, postalCode, country}))
         dispatch(savepaymentmethod(Payment))
         history.push('/placeorder')

    }
    return (
        <div>
            <Helmet>
                <title>Checkout</title>
            </Helmet>

            <div className="limit-check">
                
                <div className="info-check">
                    <form onSubmit = {handleorder}>
                    <div className="billing-check">
                        <h1>Billing Address</h1>
                        {/* <label for="name" className="this-label">Full Name</label><br />
                        <Input variant="flushed" placeholder="Your name" required id="name"/><br />
                        <label for="email" className="this-label" >Email</label><br />
                        <Input variant="flushed" placeholder="Your mail" required id="email"/><br /> */}
                         <label for="address" className="this-label">Mobile Number</label><br />
                        <Input variant="flushed" placeholder="Your Mobile Number.." required value ={phnumber} id="phnumber" onChange={(e) => setPhnumber(e.target.value)}/><br />
                        <label for="address" className="this-label">Address</label><br />
                        <Input variant="flushed" placeholder="Your Address" required value ={address} id="address" onChange={(e) => setAddress(e.target.value)}/><br />
                        <label className="this-label">State</label><br /> 
                        <Stack spacing={3}>
                            
                            <Select variant="flushed" onChange = {(e) => setCountry(e.target.value)} >
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Arunachal Pradesh ">Arunachal Pradesh </option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="Uttarakhand">Uttarakhand</option>
                                    <option value="West Bengal">West Bengal</option>
                                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                    <option value="Chandigarh">Chandigarh</option>
                                    <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                                    <option value="Daman and Diu">Daman and Diu</option>
                                    <option value="Lakshadweep">Lakshadweep</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Puducherry">Puducherry</option>
                            </Select>
                            
                        </Stack>
                        <div className="city-cp-check">
                            <div><label for="city" className="this-label">City</label>
                            <Input variant="flushed" required placeholder="Your City" onChange = {(e) => setCity(e.target.value)} id="city"/></div>
                            <div><label for="zip" className="this-label" >Zip</label>
                            <Input variant="flushed" required placeholder="Your Zip" id="zip" onChange = {(e) => setPostalCode(e.target.value)}/></div>
                        </div>
                    </div>

                    <div className="payment-check">
                        <h1>Payment Method</h1>
                       
                        <input onChange = {(e)=> {setcarddetails(false) ; setPayment('Cash on Delivery')}} type="radio" name="COD" id="COD"/><label for="paypal" className="this-label">Cash on Delivery</label>
                        <Image src={cod}alt="cod" width="120px" height="90px"/>
                        <div class="confirm">
                          <input type="submit" className="confirm-check" value="Checkout"/>
                        </div>
                    </div>
                    </form>
                    <div class="your-products">
                    {cart.cartItems.length === 0 ? <h1> <RiShoppingCart2Line size="29"/>Cart(0)</h1> : 
                    <>
                        <h1> <RiShoppingCart2Line size="29"/>Cart({cart.cartItems.length})</h1>
                        <div className="cart-summ">
                            {cart.cartItems.map((item,index)=>(
                            <p key = {index}>{item.qty} X <Link to={`/product/${item.product}`}>{item.name}</Link> <b>${item.qty * item.price}</b></p>

                            ))}
                        </div>
                    </>
                    }
                    </div>

                </div>
                
                
                
            </div>

        </div>
    )
}

export default Checkout
