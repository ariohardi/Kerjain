/* @flow */

import React from "react";
import { DrawerNavigator } from "react-navigation";

import SideBar from "./components/sidebar";
import DrawerRecruiter from "./DrawerRecruiter";
import Login from "./components/login/";
import Register from "./components/register/";
import Home from "./components/home/";
import Education from "./components/register/education";
import EducationAdd from "./components/register/educationAdd";
import WorkExperience from "./components/register/workExperience";
import WorkExperienceAdd from "./components/register/workExperienceAdd";
import MyProfile from "./components/profile/";
import ChangePassword from "./components/profile/changePassword";
import EducationProfile from "./components/profile/education";
import PersonalInfo from "./components/profile/personalInfo";
import SelfPromotingVideo from "./components/profile/selfPromotingVideo";
import WorkExperienceProfile from "./components/profile/workExperience";
import JobDetail from "./components/jobDetail/";
import Notification from "./components/home/notification";
import JobSearch from "./components/home/jobSearch";
import ForgotPassword from "./components/forgotPassword/";

import History from "./components/myhistory/";
import Interview from "./components/interview/";
import InterviewStep1 from "./components/interview/step1";
import InterviewStep2 from "./components/interview/step2";


/* Page Recruiter */

import LoginRecruiter from "./components/recruiter/login/";
import HomeRecruiter from "./components/recruiter/home/";
import JobsPosting from "./components/recruiter/jobs/";
import JobsPostingAdd from "./components/recruiter/jobs/jobs_add";
import CompanyProfile from "./components/recruiter/profile/";
import CompanyDetail from "./components/recruiter/profile/companyDetail";
import CompanyVideo from "./components/recruiter/profile/companyVideo";
import LocationA from "./components/recruiter/profile/locationA";
import LocationB from "./components/recruiter/profile/locationB";
import Schedule from "./components/recruiter/schedule/index";
import ScheduleI from "./components/recruiter/schedule/indexI";
import ScheduleS from "./components/recruiter/schedule/indexS";
import Candidate from "./components/recruiter/candidate/";
import CandidateI from "./components/recruiter/candidate/indexI";
import CandidateS from "./components/recruiter/candidate/indexS";
import MenuBarRecruiter from "./components/recruiter/menubar/";
import Tes from "./components/recruiter/tes/";


const Drawer = DrawerNavigator(
  {
    SideBar: {screen: SideBar},

  },

);

export default Drawer;
