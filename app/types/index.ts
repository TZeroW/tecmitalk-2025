export type Career = {
  id: string;
  name: string;
};

export type Campus = {
  id: string;
  name: string;
};

export type Student = {
  id: string;
  name: string;
  matricula: string;
  semester: number;
  career: string;
  campus: string;
  createdAt: Date;
};


export interface Order {
  id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  payment_method: string;
  total_amount: number;
  payment_status: string;
  created_at: string;
  paid: boolean;
}

export interface OrderItem {
  id: number;
  ticket_id: number;
  quantity: number;
  unit_price: number;
  created_at: string;
  order_id: string;
  subtotal: number;
  tickets: {
    name: string;
    description: string;
  }
}

