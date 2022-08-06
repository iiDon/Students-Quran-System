import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// Components
import Header from "./components/SideBar";

// Pages
import Homepage from "./pages/Homepage";
import Students from "./pages/Students";
import Sendmessege from "./pages/Sendmessege";
import Attendees from "./pages/Attendees";
import Stickers from "./pages/Stickers";
import Points from "./pages/Points";
import Settings from "./pages/Settings";

// apollo client
const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="flex">
          <Header />
    
    
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/students" element={<Students />} />
            <Route path="/sendmessege" element={<Sendmessege />} />
            <Route path="/attendees" element={<Attendees />} />
            <Route path="/stickers" element={<Stickers />} />
            <Route path="/points" element={<Points />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
