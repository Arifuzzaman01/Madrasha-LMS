import React from 'react';
import { FaBell } from 'react-icons/fa';

const Notification = () => {
    return (
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors"><FaBell size={22}  /></button>
    );
};

export default Notification;