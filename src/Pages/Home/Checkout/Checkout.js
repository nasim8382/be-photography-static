import React from "react";
import { useForm } from 'react-hook-form';
import './Checkout.css';

const Checkout = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

  return (
        <div className="container">
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

                    <input className="checkout-input text-uppercase checkout-submit" type="submit" />
                </form>
            </div>
        </div>
  );
};

export default Checkout;
