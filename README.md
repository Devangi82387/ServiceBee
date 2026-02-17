# 🐝 ServiceBee – Service Booking Platform

ServiceBee is a full-stack service marketplace platform built using the MERN Stack (MongoDB, Express.js, React.js, Node.js).

It allows customers to book services, providers to manage bookings, and admins to control categories — with real-time chat functionality using Socket.IO.

---

## 🚀 Features

- Role-Based Authentication (Admin, Provider, Customer)
- Location-Based Service Filtering
- Booking Management System
- Real-Time Chat (Customer ↔ Provider ↔ Admin)
- Category Management (Admin)
- Rating System
- Pagination & Search APIs
- Centralized Error Handling


---

## 🛠 Tech Stack

**Frontend:** React.js  
**Backend:** Node.js, Express.js  
**Database:** MongoDB (Mongoose)  
**Authentication:** JWT  
**Real-Time Communication:** Socket.IO  

---



# API Documentation – ServiceBee


## Admin APIs


Register Admin : **POST** `/admin/register`

Login Admin : **POST** `/admin/login`

## Customer APIs

Register : **POST** `/customers/register`  

Login : **POST** `/customers/login`  

Get Profile : **GET** `/customers/me`  
Authorization: Customer  

---

## Provider APIs

Register : **POST** `/providers/register`  

Login : **POST** `/providers/login`  

Get All Providers : **GET** `/providers`  

Search Providers : **GET** `/providers/search?location=Delhi&service=Plumbing&page=1&limit=10`  

Get Provider By ID : **GET** `/providers/:id`  

---

## Category APIs (Admin Only)

Create Category : **POST** `/categories`  
Authorization: Admin  

Update Category : **PUT** `/categories/:id`  
Authorization: Admin  

Delete Category : **DELETE** `/categories/:id`  
Authorization: Admin  

Get All Categories : **GET** `/categories`  

---

## Booking APIs

Create Booking : **POST** `/bookings`  
Authorization: Customer  

Get Customer Bookings : **GET** `/bookings/customer`  
Authorization: Customer  

Get Provider Bookings : **GET** `/bookings/provider`  
Authorization: Provider  

Update Booking Status : **PATCH** `/bookings/:id/status`  
Authorization: Provider  

Get All Bookings (Admin) : **GET** `/bookings/all`  

---

## Conversation APIs

Get or Create Conversation by Booking : **GET** `/conversations/:bookingId`  

Create Conversation : **POST** `/conversations`  

---

## Message APIs

Get Messages : **GET** `/messages/:conversationId`  

Send Message : **POST** `/messages`  

---

## Rating APIs

Create Rating : **POST** `/ratings`  
Authorization: Customer  

---

## 🔐 Authentication

Protected routes require JWT token in header:


Authorization: Bearer <token>


Roles supported:

- Admin  
- Customer  
- Provider