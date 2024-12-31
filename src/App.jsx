import Header from "./Header";

// function App() {
//     return <Header />;
// }
// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CoursePage from "./pages/CoursePage";

function App() {
    return (
        <Router basename="/gradetracker">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/course/:id" element={<CoursePage />} />
                <Header />
            </Routes>
        </Router>
    );
}

export default App;
