/* eslint-disable prettier/prettier */

type Props = {
  screenshot: string;
  title: string;
  url: string;
};

export default function Item({ screenshot, title, url }: Props) {
  const handleDoubleClick = () => {
    console.log(url);
    window.open(url);

    // readerWin
  };

  return (
    <div
      className="read-item"
      onDoubleClick={() => {
        handleDoubleClick();
      }}
    >
      <img src={screenshot} alt="" />
      <h2>{title}</h2>
    </div>
  );
}
