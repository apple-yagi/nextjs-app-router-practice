type Props = {
  title: string;
  ogImage: string;
};

export const Card = ({ title, ogImage }: Props) => {
  return (
    <article className="flex w-full max-w-xs flex-col items-center justify-center rounded-lg bg-white p-4 shadow-lg">
      <img width={288} height={140} src={ogImage} alt="" decoding="async" />
      <p className="mt-4 text-sm sm:text-base">{title}</p>
    </article>
  );
};
