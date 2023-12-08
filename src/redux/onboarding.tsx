import { createSlice } from '@reduxjs/toolkit'


export const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState: false,
  reducers: {
    setOnboarding: (state, action) => {
      return state = action.payload;
    },
  },
})

export const { setOnboarding } = onboardingSlice.actions
export const selectOnboarding = (state: any) => state.onboarding
export const onboardingReducer = onboardingSlice.reducer