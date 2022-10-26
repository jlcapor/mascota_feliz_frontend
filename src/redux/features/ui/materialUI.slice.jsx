import { createReducer, createSlice, createSlice } from "@reduxjs/toolkit";

const initialState = {
  miniSidenav: false,
  transparentSidenav: false,
  whiteSidenav: false,
  sidenavColor: "info",
  transparentNavbar: true,
  fixedNavbar: true,
  openConfigurator: false,
  layout: "dashboard",
  darkMode: false,
};

export const materialUISlice = createSlice({
    name:"ui",
    initialState,
    reducers:{
        setMiniSidenav:(action, state)=>{
            return { ...state, miniSidenav: action.payload };
        },
        setTransparentSidenav:()=>{
            return { ...state, transparentSidenav: action.payload };
        },
        setWhiteSidenav:(action, state)=>{
            return { ...state, whiteSidenav: action.payload };
        },
        setSidenavColor:(action, state)=>{
            return { ...state, sidenavColor: action.payload };
        },
        setTransparentNavbar:(action, state)=>{
            return { ...state, transparentNavbar: action.payload };
        },
        setFixedNavbar:(action, state)=>{
            return { ...state, fixedNavbar: action.payload };
        },
        
        setLayout:(action, state)=>{
            return { ...state, layout: action.payload };
        },
        setDarkMode:()=>{
            return { ...state, darkMode: action.payload };
        }
    }
})

export const {
    setMiniSidenav,
    setTransparentSidenav,
    setWhiteSidenav,
    setSidenavColor,
    setTransparentNavbar,
    setFixedNavbar,
    setOpenConfigurator,
    setLayout,
    setDarkMode
} = materialUISlice.actions

export const uiSelector = (state) => state.ui;

/*const materialUISlice = createReducer(initialState, {
  [miniSidenav]: (state, action) => {
    return { ...state, miniSidenav: action.payload };
  },

  [transparentSidenav]:()=>{
    return { ...state, transparentSidenav: action.payload };
  }
});*/
