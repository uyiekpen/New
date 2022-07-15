import React from "react";
import Landingpage2 from "pages/Landingpage2";
import Mentorssetting1 from "pages/Mentorssetting1";
import Desktop1 from "pages/Desktop1";
import Recruiterinterview from "pages/Recruiterinterview";
import Community from "pages/Community";
import Mentorstask from "pages/Mentorstask";
import Recruiterhome from "pages/Recruiterhome";
import Contact from "pages/Contact";
import Talenthomejobs from "pages/Talenthomejobs";
import SettingsWallet from "pages/SettingsWallet";
import Signuppage from "pages/Signuppage";
import Resume from "pages/Resume";
import Signinpage from "pages/Signinpage";
import Mentorshome from "pages/Mentorshome";
import Landingpage1 from "pages/Landingpage1";
import Landingpagehome from "pages/Landingpagehome";
import Landingpage from "pages/Landingpage";
import Desktop4 from "pages/Desktop4";
import Desktop3 from "pages/Desktop3";
import SettingsChangepassword from "pages/SettingsChangepassword";
import Test from "pages/Test";
import Mentors from "pages/Mentors";
import Frame34308 from "pages/Frame34308";
import Desktop2 from "pages/Desktop2";
import RecruiterSettings from "pages/RecruiterSettings";
import RecruiterSettingspasswordreset from "pages/RecruiterSettingspasswordreset";
import Settingsupdateaccount from "pages/Settingsupdateaccount";
import Mentorssetting from "pages/Mentorssetting";
import Desktop5 from "pages/Desktop5";
import Aboutus1 from "pages/Aboutus1";
import MentorsCommunityIndividuall from "pages/MentorsCommunityIndividuall";
import SettingsWalletbenefits from "pages/SettingsWalletbenefits";
import Interview from "pages/Interview";
import Aboutus from "pages/Aboutus";
import Talenthome from "pages/Talenthome";
import Signup from "pages/Signup";
import Landingpagehomeloading from "pages/Landingpagehomeloading";
import MentorsCommunitygeneral from "pages/MentorsCommunitygeneral";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/mentorscommunitygeneral"
          element={<MentorsCommunitygeneral />}
        />
        <Route
          path="/landingpagehomeloading"
          element={<Landingpagehomeloading />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/talenthome" element={<Talenthome />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/interview" element={<Interview />} />
        <Route
          path="/settingswalletbenefits"
          element={<SettingsWalletbenefits />}
        />
        <Route
          path="/mentorscommunityindividuall"
          element={<MentorsCommunityIndividuall />}
        />
        <Route path="/aboutus1" element={<Aboutus1 />} />
        <Route path="/desktop5" element={<Desktop5 />} />
        <Route path="/mentorssetting" element={<Mentorssetting />} />
        <Route
          path="/settingsupdateaccount"
          element={<Settingsupdateaccount />}
        />
        <Route
          path="/recruitersettingspasswordreset"
          element={<RecruiterSettingspasswordreset />}
        />
        <Route path="/recruitersettings" element={<RecruiterSettings />} />
        <Route path="/desktop2" element={<Desktop2 />} />
        <Route path="/frame34308" element={<Frame34308 />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/test" element={<Test />} />
        <Route
          path="/settingschangepassword"
          element={<SettingsChangepassword />}
        />
        <Route path="/desktop3" element={<Desktop3 />} />
        <Route path="/desktop4" element={<Desktop4 />} />
        <Route path="/landingpage" element={<Landingpage />} />
        <Route path="/landingpagehome" element={<Landingpagehome />} />
        <Route path="/landingpage1" element={<Landingpage1 />} />
        <Route path="/mentorshome" element={<Mentorshome />} />
        <Route path="/signinpage" element={<Signinpage />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/signuppage" element={<Signuppage />} />
        <Route path="/settingswallet" element={<SettingsWallet />} />
        <Route path="/talenthomejobs" element={<Talenthomejobs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/recruiterhome" element={<Recruiterhome />} />
        <Route path="/mentorstask" element={<Mentorstask />} />
        <Route path="/community" element={<Community />} />
        <Route path="/recruiterinterview" element={<Recruiterinterview />} />
        <Route path="/desktop1" element={<Desktop1 />} />
        <Route path="/mentorssetting1" element={<Mentorssetting1 />} />
        <Route path="/landingpage2" element={<Landingpage2 />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
