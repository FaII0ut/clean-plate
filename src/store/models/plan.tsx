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

export interface PlanState {
  selectedTab: string; // "Weekly" | "Monthly" | "Custom"
  selectedPlanIndex: number;
  customPlanData: CustomPlanData | null;
  startDate: string;
  endDate: string;
  deliveryDays: string[];
  meals: Meal[]; // For Step 3-4, expand as needed
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
  resetPlan: action((state) => {
    state.selectedTab = "Weekly";
    state.selectedPlanIndex = 1;
    state.customPlanData = null;
    state.startDate = "";
    state.endDate = "";
    state.deliveryDays = [];
    state.meals = [];
  })
};

export default plan;
