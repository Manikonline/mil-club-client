import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";


const stripePromise=loadStripe(import.meta.env.VITE_Payment_GateWay_PK);

const Payment = () => {
    const location =useLocation();
    const data=location.state
    console.log('all data',data)
    
    return (
        <div>
            <h2 className="text-center text-3xl mb-10">Make Payment</h2>
            <Elements stripe={stripePromise}>
            <CheckoutForm alldata={data}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;                                                                                                                                                                                                                                                                                      