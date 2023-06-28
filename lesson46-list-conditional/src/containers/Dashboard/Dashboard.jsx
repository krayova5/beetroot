
import "../../assets/styles/dashboard.scss";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="widget">
        <h2 className="widget-title">Users</h2>
        <div className="widget-content">
          <span className="count">1000</span>
          <span className="label">Total Users</span>
        </div>
      </div>
      <div className="widget">
        <h2 className="widget-title">Orders</h2>
        <div className="widget-content">
          <span className="count">500</span>
          <span className="label">Total Orders</span>
        </div>
      </div>
      <div className="widget">
        <h2 className="widget-title">Revenue</h2>
        <div className="widget-content">
          <span className="count">$10,000</span>
          <span className="label">Total Revenue</span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;