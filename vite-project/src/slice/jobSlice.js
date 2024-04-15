
/*import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchJob = createAsyncThunk(
  'job/fetchJob',
  async () => {
    const response = await fetch("https://jobsearch.api.jobtechdev.se/search?q=javascript&limit=100");
    if (!response.ok) {
      throw new Error('fetch error');
    }
    const data = await response.json();
    return data.hits;
  }
);

const initialState = {
  job: [],
  filteredJob: [],
  filter: {
    keyword: '',
    category: ["frontend", "backend", "fullstack"]
  },
  loading: false,
  error: null
};

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    setKeywordFilter: (state, action) => {
      state.filter.keyword = action.payload;
    },
    setCategoryFilter: (state, action) => {
      state.filter.category = action.payload;
    },
    resetFilter(state) {
      state.filter.keyword = '';
      state.filter.category = '';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJob.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJob.fulfilled, (state, action) => {
        state.loading = false;
        state.job = action.payload;
        state.filteredJob = action.payload;
      })
      .addCase(fetchJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { setKeywordFilter, setCategoryFilter, resetFilter } = jobSlice.actions;


export const selectLoading = state => state.job.loading;
export const selectError = state => state.job.error;

export default jobSlice.reducer;*/

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchJob = createAsyncThunk(
  'job/fetchJob',
  async () => {
    //const response = await fetch("https://jobsearch.api.jobtechdev.se/search?q=javascript&limit=100");
    const response = await fetch("https://jobsearch.api.jobtechdev.se/search?limit=100");
    if (!response.ok) {
      throw new Error('fetch error');
    }
    const data = await response.json();
    return data.hits;
  }
);

const initialState = {
  job: [],
  filteredJob: [],
  filter: {
    keyword: '',
    category: ''
  },
  loading: false,
  error: null
};

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    setKeywordFilter: (state, action) => {
      state.filter.keyword = action.payload;
    },
    setCategoryFilter: (state, action) => {
      state.filter.category = action.payload;
    }
    }, 
   
  extraReducers: (builder) => {
    builder
      .addCase(fetchJob.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJob.fulfilled, (state, action) => {
        state.loading = false;
        state.job = action.payload;
        state.filteredJob = action.payload;
      })
      .addCase(fetchJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { setKeywordFilter, setCategoryFilter } = jobSlice.actions;

export const selectLoading = state => state.job.loading;
export const selectError = state => state.job.error;

export default jobSlice.reducer;