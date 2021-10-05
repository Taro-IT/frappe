import {ProtectedRoute} from "../HOC/ProtectedRoute";

const DashboardPage = () => {
  return (
    <div>
      Dashboard Page
    </div>
  )
}

export default ProtectedRoute(DashboardPage);
