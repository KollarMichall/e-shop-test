import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { baseUrl } from '../constants/baseUrl'
import StripeCheckout from 'react-stripe-checkout'
import foto from '../imgs/foto.jpg'

const StripeCheckoutButton = ({ price }) => {
  const toast = useToast()
  const priceForStripe = price * 100
  const pk = process.env.REACT_APP_MY_STRIPE_PK

  const onToken = (token) => {
    axios({
      url: `${baseUrl}payment`,
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(res => (
        toast({
          title: 'Payment successful!',
          description: "Your payment is done!",
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
      )).catch(err => (
        toast({
          title: 'Payment failure!',
          description: { err },
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      ))
  }
  return (
    <StripeCheckout
      label='Pay Now'
      name='Ecommerce-shop Ltd.'
      billingAddress
      shippingAddress
      image={foto}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={pk}
    />
  )
}

export default StripeCheckoutButton