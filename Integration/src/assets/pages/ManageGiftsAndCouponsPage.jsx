import React, { useState } from 'react';
import '../css/ManageGiftsAndCouponsPage.css';
import AdminSidebar from './AdminSidebar';
// import '../pages/AdminSidebar';


const ManageGiftsAndCouponsPage = () => {
  const [giftsAndCouponsData, setGiftsAndCouponsData] = useState([
    { id: 1, name: 'Gift Card', type: 'Discount', expirationDate: '2022-03-15' },
    { id: 2, name: 'Coupon123', type: 'Cashback', expirationDate: '2022-04-20' },
    // Add more data as needed
  ]);

  const handleAddGiftOrCoupon = () => {
    const newGiftOrCoupon = {
      id: giftsAndCouponsData.length + 1,
      name: 'New Gift/Coupon',
      type: 'Discount',
      expirationDate: '2022-12-31',
    };

    setGiftsAndCouponsData((prevData) => [...prevData, newGiftOrCoupon]);

    // Display alert for adding a new gift/coupon
    alert('New Gift/Coupon added successfully!');
  };

  const handleEditGiftOrCoupon = (id) => {
    // Implement edit functionality
    console.log(`Edit gift/coupon with ID ${id}`);

    // Display alert for editing a gift/coupon
    alert(`Edit Gift/Coupon with ID ${id}`);
  };

  const handleDeleteGiftOrCoupon = (id) => {
    // Implement delete functionality
    const updatedData = giftsAndCouponsData.filter((item) => item.id !== id);
    setGiftsAndCouponsData(updatedData);

    // Display alert for deleting a gift/coupon
    alert('Gift/Coupon deleted successfully!');
  };

  return (
    <div className="admin-page-container">
      
<AdminSidebar/>
      <center>
        <h2>Manage Gifts and Coupons</h2>
      </center>
      <div className="admin-table-section">
        <button onClick={handleAddGiftOrCoupon}>Add New Gift/Coupon</button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Type</th>
              <th>Expiration Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {giftsAndCouponsData.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.type}</td>
                <td>{data.expirationDate}</td>
                <td>
                  <button onClick={() => handleEditGiftOrCoupon(data.id)}>Edit</button>
                  <button onClick={() => handleDeleteGiftOrCoupon(data.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default ManageGiftsAndCouponsPage;
