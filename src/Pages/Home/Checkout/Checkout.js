import React from "react";
import { useForm } from 'react-hook-form';
import './Checkout.css';
import corner from '../../../images/icon/corner-icon-7.jpg';
import corner1 from '../../../images/icon/corner-icon-8.jpg';

const Checkout = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

  return (
        <div className="container">

            <div className='d-flex align-items-center justify-content-center services-title'>
                <img className='corner-icon corner-icon-one' src={corner} alt="" />
                <img className='corner-icon corner-icon-two' src={corner1} alt="" />
                <h1 className='text-uppercase my-5 pt-1'>your <span className='title-span'>information</span></h1>
                <img className='corner-icon corner-icon-three'  src={corner} alt="" />
                <img className='corner-icon corner-icon-four' src={corner1} alt="" />
            </div>

            <div className="checkout-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="checkout-input"
                    type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />

                    <input className="checkout-input"
                    type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />

                    <input className="checkout-input"
                    type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />

                    <input className="checkout-input"
                    type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />

                    <select {...register("Title", { required: true })} className="gender-selection">
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Miss">Miss</option>
                        <option value="Dr">Dr</option>
                    </select>

                    <input className="checkout-input text-uppercase checkout-submit" type="submit"/>
                </form>
            </div>
        </div>
  );
};

export default Checkout;
