import FormBar from "../components/contact/form-bar";
import FAQArea from "../components/contact/FAQ-area";

const page = () => {
  return (
    <>
      <FormBar
        title="参加方法"
        subtitle="参加フォーム"
        src="https://docs.google.com/forms/d/1qJVfTkd4eXDsWTbTtEoLYEi2wKTWJZWEWNvDblmEW18/edit"
        description="参加フォームを回答後、メールアドレス宛にdiscordの招待リンクを送信します"
      />
      <FormBar
        title="お問い合わせ"
        subtitle="お問い合わせフォーム"
        src="https://docs.google.com/forms/d/1eeUx8_JXY0yJ-tTBfQ97lH6pilRpcKUMIG51_12wbeo/edit"
        description="気になることや、企業様からのお問い合わせはこちらです"
      />
      <FAQArea />
    </>
  );
};

export default page;
