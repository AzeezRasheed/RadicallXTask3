import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rightRow: "",
  categoryBoolean: false,
  descriptionBoolean: false,
  locationBoolean: false,
  benefitBoolean: false,
  introVideosBoolean: false,
  mentorDetailsBoolean: false,
  recommendedRolesBoolean: false,
  webLinksBoolean: false,
};

const Reducer = createSlice({
  name: "reducers",
  initialState,
  reducers: {
    setRightRow: (state, action) => {
      state.rightRow = action.payload;
    },
    setCategoryBoolean: (state, action) => {
      state.categoryBoolean = action.payload;
    },
    setDescriptionBoolean: (state, action) => {
      state.descriptionBoolean = action.payload;
    },
    setLocationBoolean: (state, action) => {
      state.locationBoolean = action.payload;
    },
    setBenefitBoolean: (state, action) => {
      state.benefitBoolean = action.payload;
    },
    setIntroVideosBoolean: (state, action) => {
      state.introVideosBoolean = action.payload;
    },
    setMentorDetailsBoolean: (state, action) => {
      state.mentorDetailsBoolean = action.payload;
    },
    setRecommendedRolesBoolean: (state, action) => {
      state.recommendedRolesBoolean = action.payload;
    },
    setWebLinksBoolean: (state, action) => {
      state.webLinksBoolean = action.payload;
    },
  },
});

export default Reducer.reducer;
export const {
  setRightRow,
  setWebLinksBoolean,
  setCategoryBoolean,
  setRecommendedRolesBoolean,
  setMentorDetailsBoolean,
  setIntroVideosBoolean,
  setDescriptionBoolean,
  setBenefitBoolean,
  setLocationBoolean,
} = Reducer.actions;
