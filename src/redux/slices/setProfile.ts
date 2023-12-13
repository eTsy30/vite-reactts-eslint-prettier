import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IProfile {
  nickname: string;
  name: string;
  surname: string;
  phone: string;
  sex: 'man' | 'woman';
  advantages: string[];
  radio: number;
  checkbox: number[];
  about: string;
  email: string;
  status: boolean;
}

const initialState: IProfile = {
  nickname: '',
  name: '',
  surname: '',
  phone: '',
  sex: 'man',
  advantages: [],
  radio: 0,
  checkbox: [],
  about: '',
  email: '',
  status: false,
};

export const fakePost = createAsyncThunk(
  'post/fake',
  async (data: IProfile, { rejectWithValue }) => {
    try {
      const success = Math.random() < 0.5;
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve({ success, data });
        }, 2000);
      });

      return success;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const setProfileSlice = createSlice({
  name: 'setProfile',
  initialState,
  reducers: {
    setPhoneEmail: (
      state,
      action: PayloadAction<{
        phone: string;
        email: string;
      }>,
    ) => {
      state.email = action.payload.email;
      state.phone = action.payload.phone;
    },
    setStep1: (
      state,
      action: PayloadAction<{
        nickname: string;
        name: string;
        surname: string;
        sex: 'man' | 'woman';
      }>,
    ) => {
      state.nickname = action.payload.nickname;
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.sex = action.payload.sex;
    },
    setStep2: (
      state,
      action: PayloadAction<{ advantages: string[]; radio: number; checkbox: number[] }>,
    ) => {
      state.advantages = action.payload.advantages;
      state.radio = action.payload.radio;
      state.checkbox = action.payload.checkbox;
    },
    setStep3: (state, action: PayloadAction<{ about: string }>) => {
      state.about = action.payload.about;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fakePost.fulfilled, (state, action: PayloadAction<boolean>) => {
      state.status = action.payload;
    });
  },
});

export default setProfileSlice.reducer;
export const { setPhoneEmail, setStep1, setStep2, setStep3 } = setProfileSlice.actions;
