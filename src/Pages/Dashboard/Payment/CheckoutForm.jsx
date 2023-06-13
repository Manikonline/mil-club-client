import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import UseTitle from "../../../useTitle";


const CheckoutForm = ({alldata}) => {
  const{price,class_name,image,seats,email,_id}=alldata
   console.log('deeeeeeeeeeeeeeeee',price,class_name)
    const [clientSecret, setClientSecret]=useState('')
    const stripe = useStripe()
    const elements= useElements();
    const[cardError,setCardError]=useState('')
    const [processing, setProcessing]=useState(false)
    const[transactionId, setTransactionId]=useState('');
    const{user}=useContext(AuthContext)
    const navigate=useNavigate()


    useEffect(()=>{
        fetch('http://localhost:5000/create-payment-intent',{
          method:"POST",
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify({price})
        })
        .then(res=>res.json())
        .then(data=>{
          setClientSecret(data.clientSecret)
        })
    },[price])



    const handleSubmit= async(event)=>{
        event.preventDefault()

        if(!stripe || !elements){
            return
        }

        const card =elements.getElement(CardElement);
        if(card===null){
            return
        }
        const {error}=await stripe.createPaymentMethod({
            type:'card',
            card
        })
        if(error){
            console.log('error',error)
            setCardError(error.message)
        }
        else{
            setCardError('')
           
        }

        setProcessing(true)

        const {paymentIntent, error:confirmError}=await stripe.confirmCardPayment(
          clientSecret,
          {
            payment_method:{
              card:card,
              billing_details:{
                email:user?.email || 'unknown',
                name:user?.displayName || 'anonymous'
              }
            }
          }
        );
        if(confirmError){
          console.log(confirmError);
        }
        console.log(paymentIntent)
        setProcessing(false)
        if(paymentIntent.status === 'succeeded'){
          setTransactionId(paymentIntent.id)
          // save payment info to the server
          const{price,class_name,image,seats}=alldata
          const payment ={email:user?.email,transactionId:paymentIntent.id,price,quantity:'1',date: new Date(),status:'paid',class_name:class_name,image:image,available_seats:seats,classId:_id}
          fetch('http://localhost:5000/payments',{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(payment)
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data)
            if(data.insertedId){
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Display Confirm',
                showConfirmButton: false,
                timer: 1500
              })
            }
              navigate('/dashboard/paymentHistory')
          })

        }
    }

    UseTitle('Dashboard/CheckOutForm')
    return (
       <>
              <form className="w-96 m-8" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-outline btn-primary btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      {
        cardError && <p className="text-red-600">{cardError}</p>
      }
      {transactionId && <p className="text-green-500 ">Transaction complete with transactionId:{transactionId}</p>}
       </>
    );
};

export default CheckoutForm;