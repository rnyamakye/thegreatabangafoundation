# Paystack Setup Instructions

## Setting up Paystack for The Great Abanga Foundation Donate Page

### 1. Get Your Paystack Keys

1. Visit [Paystack Dashboard](https://dashboard.paystack.com/#/settings/developer)
2. Sign up or log in to your account
3. Navigate to Settings > API Keys & Webhooks
4. Copy your **Public Key** (starts with `pk_test_` for test mode or `pk_live_` for live mode)
5. Copy your **Secret Key** (starts with `sk_test_` for test mode or `sk_live_` for live mode)

### 2. Update Your Environment Variables

Open the `.env` file in your project root and replace the placeholder values:

```env
# Replace these with your actual Paystack keys
VITE_PAYSTACK_PUBLIC_KEY=pk_test_your_actual_public_key_here
PAYSTACK_SECRET_KEY=sk_test_your_actual_secret_key_here
```

**Important:**

- Only the `VITE_PAYSTACK_PUBLIC_KEY` is used in the frontend (note the `VITE_` prefix)
- The `PAYSTACK_SECRET_KEY` is for backend verification (not used in this frontend implementation)
- Never commit your actual keys to version control
- Use test keys for development and live keys for production

### 3. Features Implemented

✅ **Payment Processing**: Secure payment processing through Paystack
✅ **Toast Notifications**: Success and error notifications
✅ **Form Validation**: Ensures required fields are filled
✅ **Loading States**: Visual feedback during payment processing
✅ **Enhanced Button Effects**: Hover animations and ripple effects
✅ **Mobile Responsive**: Works on all devices
✅ **Ghana Cedis Support**: Configured for GHS currency

### 4. Testing

- Use test keys (starting with `pk_test_` and `sk_test_`)
- Test card numbers provided by Paystack:
  - **Success**: 4084084084084081
  - **Insufficient Funds**: 4084084084084081 (with amount > 300000)
  - **Invalid Card**: 4084084084084082

### 5. Going Live

1. Switch to live keys in your `.env` file
2. Ensure your Paystack account is fully verified
3. Test with small amounts first
4. Monitor transactions in your Paystack dashboard

### 6. Security Notes

- The public key is safe to expose in frontend code
- Never expose your secret key in frontend code
- The secret key should only be used for backend operations
- Consider implementing webhook verification for added security

### 7. Support

If you encounter any issues:

- Check the browser console for error messages
- Verify your Paystack keys are correct
- Ensure your Paystack account is active
- Contact Paystack support for payment-related issues
