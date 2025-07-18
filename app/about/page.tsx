import SubHeader from "../components/about/sub-header";
import AboutBarArea from "../components/about/about-bar-area";
import AboutMessageArea from "../components/about/about-message-area";
import { missionData, visionData, valueData } from "../const/about-page-data";

const page = () => {
  return (
    <>
      <SubHeader
        title={"「桜梅桃李」の精神"}
        description={
          "PeachTechは桜梅桃李の精神を持ち、一人一人の個性を最大限に引き出します。メンバー全員で学び、成長し合うことを大切にし、切磋琢磨を忘れないようなカタチを常に追い求めています。最初は初心者だったメンバーが経験を積み、やがて後輩に与える立場となる循環を通じてお互いに高め合います。技術だけでなく、人間としても成長できるコミュニティを目指します。"
        }
      />
      <AboutBarArea title={"Misson"} aboutPageData={missionData} />
      <AboutBarArea title={"Vision"} aboutPageData={visionData} />
      <AboutBarArea title={"Values"} aboutPageData={valueData} />
      <AboutMessageArea
        title={"代表からのメッセージ"}
        comment={
          "プログラミングを始めたのは、大学1年生の12月頃でした。正直何度も挫折しかけましたが、技術を使って人に感謝される、喜ばれることがモチベーションでした。そしてそれを個人ではなくもっと周りを巻き込んで大きいことをしたいと考え、このPeachTechの組織づくりに全力を注いできました。PeachTechはただ個人が技術的に優れるではなく、仲間と共に何かを成し遂げる、そしてそこに喜びや成長を見出す、そんな団体です。初心者大歓迎で楽しく活動しておりますので、興味がある方は是非お待ちしております！"
        }
      />
    </>
  );
};

export default page;
