import {action, Action} from "easy-peasy";

export interface CustomPlanData {
  startDate: string;
  endDate: string;
}

export interface Meal {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  [key: string]: string | number; // Extend as needed
}

export interface MealTimeSlot {
  label: string; // e.g., Breakfast, Lunch
  time: string;  // e.g., "08:00"
}

export interface PlanState {
  selectedTab: string; // "Weekly" | "Monthly" | "Custom"
  selectedPlanIndex: number;
  customPlanData: CustomPlanData | null;
  startDate: string;
  endDate: string;
  deliveryDays: string[];
  meals: Meal[]; // For Step 3-4, expand as needed
  numberOfMeals: number; // number of meals in plan
  numberOfDays: number; // number of days in plan
  mealTimeSlots: MealTimeSlot[]; // NEW: array of meal time slots
  // Add more fields as needed for Step 4, 5
}

export interface PlanModel extends PlanState {
  setSelectedTab: Action<PlanModel, string>;
  setSelectedPlanIndex: Action<PlanModel, number>;
  setCustomPlanData: Action<PlanModel, CustomPlanData | null>;
  setStartDate: Action<PlanModel, string>;
  setEndDate: Action<PlanModel, string>;
  setDeliveryDays: Action<PlanModel, string[]>;
  setMeals: Action<PlanModel, Meal[]>;
  setNumberOfMeals: Action<PlanModel, number>;
  setNumberOfDays: Action<PlanModel, number>;
  setMealTimeSlots: Action<PlanModel, MealTimeSlot[]>; // NEW: setter for meal time slots
  resetPlan: Action<PlanModel>;
}

const plan: PlanModel = {
  selectedTab: "Weekly",
  selectedPlanIndex: 1,
  customPlanData: null,
  startDate: "",
  endDate: "",
  deliveryDays: [],
  meals: [],
  numberOfMeals: 0,
  numberOfDays: 0,
  mealTimeSlots: [], // NEW: initial value

  setSelectedTab: action((state, payload) => {
    state.selectedTab = payload;
  }),
  setSelectedPlanIndex: action((state, payload) => {
    state.selectedPlanIndex = payload;
  }),
  setCustomPlanData: action((state, payload) => {
    state.customPlanData = payload;
  }),
  setStartDate: action((state, payload) => {
    state.startDate = payload;
  }),
  setEndDate: action((state, payload) => {
    state.endDate = payload;
  }),
  setDeliveryDays: action((state, payload) => {
    state.deliveryDays = payload;
  }),
  setMeals: action((state, payload) => {
    state.meals = payload;
  }),
  setNumberOfMeals: action((state, payload) => {
    state.numberOfMeals = payload;
  }),
  setNumberOfDays: action((state, payload) => {
    state.numberOfDays = payload;
  }),
  setMealTimeSlots: action((state, payload) => {
    state.mealTimeSlots = payload;
  }),
  resetPlan: action((state) => {
    state.selectedTab = "Weekly";
    state.selectedPlanIndex = 1;
    state.customPlanData = null;
    state.startDate = "";
    state.endDate = "";
    state.deliveryDays = [];
    state.meals = [];
    state.numberOfMeals = 0;
    state.numberOfDays = 0;
    state.mealTimeSlots = [];
  })
};

export default plan;
