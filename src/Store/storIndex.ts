import { configureStore } from "@reduxjs/toolkit"
import  { PersonSlice } from "./Slice/personSlice"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

export const storIndex =configureStore({
    reducer:{
        person:PersonSlice.reducer
    }
})


export const useAppDispatc:()=>typeof storIndex.dispatch =useDispatch;

export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof storIndex.getState>> = useSelector;