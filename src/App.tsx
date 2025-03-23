import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/home/Home"
import { Contact } from "./pages/contact/Contact"
import { Faqs } from "./pages/faqs/Faqs"
import { TermsOfService } from "./pages/termsOfService/TermsOfService"
import { RefundPolicy } from "./pages/refundPolicy/RefundPolicy"
import { PrivacyPolicy } from "./pages/privacyPolicy/PrivacyPolicy"
import { DisclaimerPolicy } from "./pages/disclaimerPolicy/DisclaimerPolicy"
import { IntellectualPropertyPolicy } from "./pages/intellectualPropertyPolicy/IntellectualPropertyPolicy"
import { JurisdictionPolicy } from "./pages/jurisdictionPolicy/JurisdictionPolicy"
import { LimitationOfLiabilityPolicy } from "./pages/limitationOfLiabilityPolicy/LimitationOfLiabilityPolicy"
import { IndemnificationPolicy } from "./pages/indemnificationPolicy/IndemnificationsPolicy"
import { NotFound } from "./pages/404/NotFound"



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/contact" element={<Contact />} />
        <Route path="/pages/frequently-asked-question" element={<Faqs />} />
        <Route path="/pages/terms-of-service" element={<TermsOfService />} />
        <Route path="/pages/refund-policy" element={<RefundPolicy />} />
        <Route path="/pages/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/pages/disclaimer-policy" element={<DisclaimerPolicy />} />
        <Route path="/pages/intellectual-property-policy" element={<IntellectualPropertyPolicy />} />
        <Route path="/pages/jurisdiction-policy" element={<JurisdictionPolicy />} />
        <Route path="/pages/limitation-of-liability-policy" element={<LimitationOfLiabilityPolicy />} />
        <Route path="/pages/indemnification-policy" element={<IndemnificationPolicy />} />


        <Route path="*" element={<NotFound />} />
      </Routes>

    </Router>
  )
}

export default App
