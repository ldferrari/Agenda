import React from 'react';
import { Redirect } from 'react-router-dom';

export default function AgendaIDPage() {
  const token = localStorage.getItem('token') || null;
  if (!token || token === "undefined") return <Redirect to="/login" />;
  return (
    <div>
      AgendaIDPage
    </div>
  );
}
