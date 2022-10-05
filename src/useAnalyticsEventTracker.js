import ReactGA from "react-ga";

const UseAnalyticsEventTracker = (category="visit") => {
  const eventTracker = (action = "reload", label = "user visits") => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}
export default UseAnalyticsEventTracker;

