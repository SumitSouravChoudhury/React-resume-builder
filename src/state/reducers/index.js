import { combineReducers } from "redux";
import skillsReducer from "./skillsReducer";
import aboutReducer from "./aboutReducer";
import profileReducer from "./profileReducer";
import experienceReducer from "./experienceReducer";
import projectReducer from "./projectReducer";
import educationReducer from "./educationReducer";
import fileReducer from "./fileReducer";

const reducers = combineReducers({
    skills: skillsReducer,
    file: fileReducer,
    about: aboutReducer,
    profile: profileReducer,
    experienceList: experienceReducer,
    projectList: projectReducer,
    educationList: educationReducer,
});

export default reducers