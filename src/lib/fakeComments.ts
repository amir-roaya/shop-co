type FakeComment = {
  id: number;
  name: string;
  description: string;
  rate: number;
};

export const fakeComments: FakeComment[] = [
  {
    id: 1,
    name: "Sarah M.",
    description:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    rate: 4.4,
  },

  {
    id: 2,
    name: "Michael T.",
    description:
      "Fast shipping and excellent customer service. The quality of the jacket is even better than I expected. I'll definitely order again.",
    rate: 5,
  },

  {
    id: 3,
    name: "Emily R.",
    description:
      "The fabric feels premium and the sizing was exactly as described. Great value for the price and beautifully packaged.",
    rate: 4,
  },

  {
    id: 4,
    name: "David L.",
    description:
      "I've purchased from many online stores, but this was one of the best experiences. Smooth checkout and high-quality products.",
    rate: 5,
  },

  {
    id: 5,
    name: "Olivia K.",
    description:
      "I was a little unsure before ordering, but everything arrived in perfect condition. Comfortable, stylish, and worth every penny.",
    rate: 4.6,
  },
];
