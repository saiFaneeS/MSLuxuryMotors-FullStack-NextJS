import Posts from "@/components/admin/Posts";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.main}>
      <Posts />
    </div>
  );
};

export default Dashboard;
