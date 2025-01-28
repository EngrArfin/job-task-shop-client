import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../Home/Share/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// Add your publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);

const Payment = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <div className=" w-full max-w-5xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
        <SectionTitle
          heading="Payment"
          subHeading="Please complete your payment"
        />
        <div className="mt-6">
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
