import { Header } from '../../Components/Header/Header';
import { MainForm } from '../../Form/MainForm';
const example = [
  {
    title: 'Telegram',
    link: 'https://t.me/etsig',
  },
  {
    title: 'GitHub',
    link: 'https://github.com/eTsy30',
  },
  {
    title: 'Резюме',
    link: 'https://drive.google.com/file/d/1wNYg0LF0a55Zd--woejUB1Qg5HDmMyVj/view?pli=1',
  },
];
export const Main = () => {
  return (
    <div>
      <Header name="Evgen Tsyhankov" linksSocialMedia={example} />
      <MainForm />
    </div>
  );
};
