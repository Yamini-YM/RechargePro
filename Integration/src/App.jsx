import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


//import Home from "./pages/Home";
//import About from "./pages/About";
//import Navbar from "./components/Navbar";
import LoginPage from "./assets/pages/LoginPage";
import RegistrationPage from "./assets/pages/RegistrationPage";
import AdminRegistrationPage from "./assets/pages/AdminRegistrationPage";
import UserTypeSelection from "./assets/pages/UserTypeSelection";
import HomePage from "./assets/pages/HomePage";
// import NavigationBar from "./components/NavigationBar";
import AdminHomePage from "./assets/pages/AdminHomePage";
import UserRechargePage from "./assets/pages/UserRechargePage";
import UserTransactionPage from "./assets/pages/UserTransactionPage";
import UserProfilePage from "./assets/pages/UserProfilePage";
import ManageUsersPage from "./assets/pages/ManageUsersPage";
import RechargePlansPage from "./assets/pages/RechargePlansPage";
import UserSidebar from "./assets/pages/UserSidebar";
import TransactionHistoryPage from "./assets/pages/TransactionHistoryPage";
// import Bar from "./assets/pages/Bar";
// import NotificationPopup from "./assets/pages/NotificationPopup";
import AdminAddPlansPage from "./assets/pages/AdminAddPlansPage";
// import AdminPostPaidAddPlansPage from "./assets/pages/AdminPostPaidAddPlansPage";
import AdminViewPlansPage from "./assets/pages/AdminViewPlansPage";
import AdminAddAddonPlanPage from "./assets/pages/AdminAddAddonPlanPage";
import AdminViewAddonPlansPage from "./assets/pages/AdminViewAddonPlansPage";
import AdminViewRechargeHistoryPage from "./assets/pages/AdminViewRechargeHistoryPage";
import UserAddonPlansPage from "./assets/pages/UserAddonPlansPage";
import UserSettingsPage from "./assets/pages/UserSettingsPage";
import SupportPage from "./assets/pages/SupportPage";
import SubmitTicketPage from "./assets/pages/SubmitTicketPage";
import FAQPage from "./assets/pages/FAQPage";
import FeedbackPage from "./assets/pages/FeedbackPage";
import ReportsPage from "./assets/pages/ReportsPage";
import SystemLogsPage from "./assets/pages/SystemLogsPage";
import ManageGiftsAndCouponsPage from "./assets/pages/ManageGiftsAndCouponsPage";
import AdminSettingsPage from "./assets/pages/AdminSettingsPage";
import AboutUs from "./assets/pages/AboutUs";
import Logout from "./assets/pages/Logout";
import UserDebitCardPage from "./assets/pages/UserDebitCardPage";
import UserUpiPage from "./assets/pages/UserUpiPage";
import AdminLogout from "./assets/pages/AdminLogout";
import AdminLogoPage from "./assets/pages/AdminLogoPage";
import AdminSocialMediaPage from "./assets/pages/AdminSocialMediaPage";
// import LogoutPage from "./assets/pages/LogoutPage";



function App() {
  

  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/UserTypeSelection" element={<UserTypeSelection/>}/>
        <Route path="/RegistrationPage" element={<RegistrationPage/>}/>
        <Route path="/AdminRegistrationPage" element={<AdminRegistrationPage/>}/>
        <Route path="/HomePage" element={<HomePage/>}/>
        <Route path="/AdminHomePage" element={<AdminHomePage/>}/>
        
        <Route path="/UserRechargePage" element={<UserRechargePage/>}/>
        <Route path="/UserTransactionPage" element={<UserTransactionPage/>}/>
        <Route path="/UserProfilePage" element={<UserProfilePage/>}/>
        <Route path="/ManageUsersPage" element={<ManageUsersPage/>}/>
        <Route path="/RechargePlansPage" element={<RechargePlansPage/>}/>
        <Route path="/UserSidebar" element={<UserSidebar/>}/>
        <Route path="/TransactionHistoryPage" element={<TransactionHistoryPage/>}/>
        
        {/* <Route path="/NotificationPopup" element={<NotificationPopup/>}/> */}
        <Route path="/AdminAddPlansPage" element={<AdminAddPlansPage/>}/>
        <Route path="/AdminViewPlansPage" element={<AdminViewPlansPage/>}/>
        <Route path="/AdminAddAddonPlanPage" element={<AdminAddAddonPlanPage/>}/>
        <Route path="/AdminViewAddonPlansPage" element={<AdminViewAddonPlansPage/>}/>
        <Route path="/AdminViewRechargeHistoryPage" element={<AdminViewRechargeHistoryPage/>}/>
        <Route path="/UserAddonPlansPage" element={<UserAddonPlansPage/>}/>
        <Route path="/UserSettingsPage" element={<UserSettingsPage/>}/>
        <Route path="/SupportPage" element={<SupportPage/>}/>
        <Route path="/SubmitTicketPage" element={<SubmitTicketPage/>}/>
        <Route path="/FAQPage" element={<FAQPage/>}/>
        <Route path="/FeedbackPage" element={<FeedbackPage/>}/>
        <Route path="/ReportsPage" element={<ReportsPage/>}/>
        <Route path="/SystemLogsPage" element={<SystemLogsPage/>}/>
        <Route path="/ManageGiftsAndCouponsPage" element={<ManageGiftsAndCouponsPage/>}/>
        <Route path="/AdminSettingsPage" element={<AdminSettingsPage/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/Logout" element={<Logout/>}/>
        <Route path="/UserDebitCardPage" element={<UserDebitCardPage/>}/>
        <Route path="/UserUpiPage" element={<UserUpiPage/>}/>
        <Route path="/AdminLogout" element={<AdminLogout/>}/>
        <Route path="/AdminLogoPage" element={<AdminLogoPage/>}/>
        <Route path="/AdminSocialMediaPage" element={<AdminSocialMediaPage/>}/>
        {/* <Route path="/LogoutPage" element={<LogoutPage/>}/> */}
       
       
      </Routes>
    </Router>
    
  )
}

export default App