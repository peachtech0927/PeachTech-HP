import ActivityContent from "./components/home/content/activity-content";
import FirstView from "./components/home/introduction/first-view";
import ActivityAchievement from "./components/home/achievement/activity-achievement";
import Sponsor from "./components/home/sponsor/sponsor";
import PeachTechIntroduction from "./components/home/introduction/peachtech-introduction";

// ISRを使用: 60秒ごとに再生成
export const revalidate = 60;

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
