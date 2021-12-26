import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {addStaffReducer,
    staffListReducer,
    deleteStaffReducer,
    staffProfileReducer,
    updateStaffReducer,
    staffCountReducer
} from "./reducers/staffReducer";

import {
    addMemberReducer,
    memberListReducer,
    deleteMemberReducer,
    memberProfileReducer,
    updateMemberReducer,
    memberCountReducer,
    printReceiptReducer,
    memberTrainingReducer,
    memberWeightReducer,
    memberCardioReducer,
    memberCardioWeightReducer,
    allMembersListReducer
} from "./reducers/memberReducer";

import {
    verifyRfidReducer
} from "./reducers/rfidReducer";


import {
    attendanceListReducer
} from "./reducers/attendanceReducer";

import {
    feeListReducer
} from "./reducers/feeReducer";


const initialState={

}

const reducer= combineReducers({
    addedStaff:addStaffReducer,
    staffList:staffListReducer,
    staffDelete:deleteStaffReducer,
    staffProfile:staffProfileReducer,
    updatedStaff:updateStaffReducer,
    staffCount:staffCountReducer,

    addedMember:addMemberReducer,
    memberList:memberListReducer,
    memberTraining:memberTrainingReducer,
    memberCardio:memberCardioReducer,
    memberWeight:memberWeightReducer,
    memberCardioWeight:memberCardioWeightReducer,
    memberDelete:deleteMemberReducer,
    memberProfile:memberProfileReducer,
    updatedMember:updateMemberReducer,
    memberCount:memberCountReducer,
    receipt:printReceiptReducer,
    allMembers:allMembersListReducer,

    verifyStatus:verifyRfidReducer,
    attendanceList:attendanceListReducer,

    feeList:feeListReducer

})


const middleware=[thunk]


const store= createStore(reducer,initialState,composeWithDevTools(
applyMiddleware(...middleware)
))

export default store;
