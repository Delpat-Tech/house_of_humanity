# 🧾 Donation API — Postman Testable Routes

This document describes how to test the Donation API endpoints using Postman. It includes the request structure, sample payloads, and expected responses.

---

## 🔗 Base URL

```
http://localhost:<PORT>/api/donation
```

Replace `<PORT>` with your server port (e.g., 3000).

---

## 🛒 POST `/create-order`

Create a new Razorpay order to initiate a donation.

### 🔐 Headers

| Key          | Value              |
|--------------|--------------------|
| Content-Type | application/json   |

---

### 📥 Request Body

```json
{
  "amount": 500,
  "purpose": "Women Empowerment",
  "donorName": "Jhon",
  "donorEmail": "jhon@example.com",
  "donorPhone": "9876543210"
}
```

#### ✅ Required Fields:

| Field        | Type     | Description                          |
|--------------|----------|--------------------------------------|
| amount       | number   | Amount in INR (must be > 0)          |
| purpose      | string   | One of the predefined purposes below |
| donorName    | string   | Donor's full name                    |
| donorEmail   | string   | Valid email address                  |
| donorPhone   | string   | Phone number (with/without country code) |

---

### 🧭 Allowed Values for `purpose`

```
Child Health and Upliftment
Women Empowerment Fund
Sustainable Livelihood
Hygiene Awareness
Community Outreach Campaigns
Women Health
Women Empowerment
Healthcare Fund
Sitaare Sponsor
Sitaare Nutrition
Sitaare Full Care
Sitaare One-Time Meal
Sitaare Meal for Two
Sitaare Celebration
General Donation
```

---

### ✅ Success Response (200 OK)

```json
{
  "success": true,
  "data": {
    "orderId": "order_L8pWcfFfEEC6Wd",
    "amount": 50000,
    "currency": "INR",
    "keyId": "rzp_test_XXXXXXX",
    "donorName": "Jyoti Singh",
    "donorEmail": "jyoti@example.com",
    "donorPhone": "9876543210",
    "purpose": "Women Empowerment"
  }
}
```

---

### ❌ Error Responses

```json
{
  "success": false,
  "error": "Phone , Name and Email are required"
}
```

```json
{
  "success": false,
  "error": "Invalid donation purpose"
}
```

```json
{
  "success": false,
  "error": "Failed to create payment order",
  "details": "Error message from server"
}
```

---

## 📬 POST `/webhook`

Handle Razorpay webhook events such as `payment.captured` or `payment.failed`.

> ℹ️ Webhooks must be configured in the Razorpay Dashboard with a valid secret.

### 🔐 Headers

| Key                  | Value                 |
|----------------------|-----------------------|
| Content-Type         | application/json      |
| X-Razorpay-Signature | [Generated Signature] |

---

### 📨 Sample Payloads

#### ✅ `payment.captured`

```json
{
  "event": "payment.captured",
  "payload": {
    "payment": {
      "entity": {
        "id": "pay_L8pWhErsOTEXaX",
        "order_id": "order_L8pWcfFfEEC6Wd",
        "amount": 50000
      }
    }
  }
}
```

#### ❌ `payment.failed`

```json
{
  "event": "payment.failed",
  "payload": {
    "payment": {
      "entity": {
        "id": "pay_L8pXYZFailed1",
        "order_id": "order_L8pFailExample",
        "amount": 30000,
        "error_description": "Insufficient funds"
      }
    }
  }
}
```

---

### 📤 Internal Actions

- **payment.captured**
  - Sends a thank-you email to the donor
  - Notifies the NGO
- **payment.failed**
  - Sends a payment failure email to the donor (if email is valid)

---

### ✅ Success Response

```json
{
  "status": "webhook call success"
}
```

---

### ❌ Error Response

```json
{
  "status": "error",
  "message": "Webhook processing failed"
}
```

---

## 🧪 Postman Testing Tips

- Use environment variables for base URL and Razorpay Key.
- Set up Razorpay webhooks pointing to your local server (e.g. via [ngrok](https://ngrok.com/)).
- Manually trigger webhooks using Razorpay’s webhook test or Postman mock server.
- Set proper `X-Razorpay-Signature` if testing real Razorpay events.

---

## 🧰 Useful Tools

- [Razorpay Dashboard](https://dashboard.razorpay.com)
- [Postman](https://www.postman.com/)
- [ngrok](https://ngrok.com/) (for exposing local servers)

---