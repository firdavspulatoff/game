import {configureS, configureStore} from '@reduxjs/toolkit'
import searchSlice from '../slices/search'
import { searchSlice2 } from '../slices/search2'
import { searchSlice3 } from '../slices/search3'


export default configureStore({
    reducer:{
        search:searchSlice,
        search2:searchSlice2,
        search3:searchSlice3
    }
})