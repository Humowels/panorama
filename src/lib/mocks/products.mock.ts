import { IProduct } from "@/lib/interfaces/product.interface";

export const productMock: IProduct[] = [
  {
    id: 1,
    imageUrl: "https://example.com/image1.jpg",
    images: [
      { id: "1", src: "https://example.com/image1-1.jpg" },
      { id: "2", src: "https://example.com/image1-2.jpg" },
    ],
    title: "Product 1",
    variants: [
      { id: 1, title: "Variant 1", price: "19.99" },
      { id: 2, title: "Variant 2", price: "29.99" },
    ],
    price: "19.99",
  },
  {
    id: 2,
    imageUrl: "https://example.com/image2.jpg",
    images: [
      { id: "1", src: "https://example.com/image2-1.jpg" },
      { id: "2", src: "https://example.com/image2-2.jpg" },
    ],
    title: "Product 2",
    variants: [
      { id: 1, title: "Variant 1", price: "29.99" },
      { id: 2, title: "Variant 2", price: "39.99" },
    ],
    price: "29.99",
  },
  {
    id: 3,
    imageUrl: "https://example.com/image3.jpg",
    images: [
      { id: "1", src: "https://example.com/image3-1.jpg" },
      { id: "2", src: "https://example.com/image3-2.jpg" },
    ],
    title: "Product 3",
    variants: [
      { id: 1, title: "Variant 1", price: "39.99" },
      { id: 2, title: "Variant 2", price: "49.99" },
    ],
    price: "39.99",
  },
  {
    id: 4,
    imageUrl: "https://example.com/image4.jpg",
    images: [
      { id: "1", src: "https://example.com/image4-1.jpg" },
      { id: "2", src: "https://example.com/image4-2.jpg" },
    ],
    title: "Product 4",
    variants: [
      { id: 1, title: "Variant 1", price: "49.99" },
      { id: 2, title: "Variant 2", price: "59.99" },
    ],
    price: "49.99",
  },
  {
    id: 5,
    imageUrl: "https://example.com/image5.jpg",
    images: [
      { id: "1", src: "https://example.com/image5-1.jpg" },
      { id: "2", src: "https://example.com/image5-2.jpg" },
    ],
    title: "Product 5",
    variants: [
      { id: 1, title: "Variant 1", price: "59.99" },
      { id: 2, title: "Variant 2", price: "69.99" },
    ],
    price: "59.99",
  },
  {
    id: 6,
    imageUrl: "https://example.com/image6.jpg",
    images: [
      { id: "1", src: "https://example.com/image6-1.jpg" },
      { id: "2", src: "https://example.com/image6-2.jpg" },
    ],
    title: "Product 6",
    variants: [
      { id: 1, title: "Variant 1", price: "69.99" },
      { id: 2, title: "Variant 2", price: "79.99" },
    ],
    price: "69.99",
  },
];
