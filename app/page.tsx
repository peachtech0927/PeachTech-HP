import ActivityContent from "./components/home/content/activity-content";
import FirstView from "./components/home/introduction/first-view";
import ActivityAchievement from "./components/home/achievement/activity-achievement";
import Sponsor from "./components/home/sponsor/sponsor";
import PeachTechIntroduction from "./components/home/introduction/peachtech-introduction";

// 動的レンダリングを強制
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const HomePage = () => {
  return (
    <>
      <FirstView />
      <PeachTechIntroduction />
      <ActivityContent />
      <ActivityAchievement />
      <Sponsor />
    </>
  );
};

export default HomePage;
