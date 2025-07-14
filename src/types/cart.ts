// Cart type definition for cart model usage

export interface Cart {
  id: string;
  items: Array<{
    productId: string;
    name: string;
    price: number;
    quantity: number;
    img?: string;
  }>;
  total: number;
  // Add more fields as needed
}
