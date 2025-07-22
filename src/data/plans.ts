export interface Plan {
  id: number;
  name: string;
  price: number;
  description: string;
  type: 'weekly' | 'monthly';
}

export const plans: Plan[] = [
  {
    id: 1,
    name: "Single Meal",
    price: 25,
    description:
      "You can select the meals you want for each day prior to the start of the week. you cant change your selection after the start of the week.",
    type: 'weekly',
  },
  {
    id: 2,
    name: "Double Meal",
    price: 45,
    description:
      "you can select the meals you want for each day prior to the start of the week. you cant change your selection after the start of the week.",
    type: 'weekly',
  },
  {
    id: 3,
    name: "Full course",
    price: 100,
    description:
      "you can select the meals you want for each day prior to the start of the week. you cant change your selection after the start of the week.",
    type: 'monthly',
  },
];
