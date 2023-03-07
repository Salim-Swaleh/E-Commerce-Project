import { loadStripe } from "@stripe/stripe-js"; // Runs our stripe instance


export const stripePromise = loadStripe(
    'pk_test_51Mif4jC7pDfrgGQKNTPfU96s4hrtG8YDS6koUOnwxxfv94ks6d2agjnbP3mM2mkaPIxcik1AIxv6SBPibTOklCWt00yRXizxGf' 
    );