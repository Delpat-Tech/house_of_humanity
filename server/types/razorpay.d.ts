```typescript
declare module 'razorpay';

interface RazorpayOptions {
  key_id: string;
  key_secret: string;
}

interface RazorpayOrder {
  id: string;
  amount: number;
  currency: string;
  receipt: string;
}

interface Razorpay {
  orders: {
    create(options: { amount: number; currency: string; receipt: string }): Promise<RazorpayOrder>;
  };
}

declare class Razorpay {
  constructor(options: RazorpayOptions);
  orders: {
    create(options: { amount: number; currency: string; receipt: string }): Promise<RazorpayOrder>;
  };
}

export = Razorpay;
```