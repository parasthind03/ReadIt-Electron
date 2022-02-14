/* eslint-disable prettier/prettier */

interface Props {
  screenshot: string;
  title: string;
}

export default function Item({ screenshot, title }: Props) {
  return (
    <div className="read-item">
      <img src={screenshot} alt="" />
      <h2>{title}</h2>
    </div>
  );
}
