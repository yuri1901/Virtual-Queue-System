import { Test } from "@/features/test";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  return (
    <>
      <div>current locale {locale}</div>
      <Test />
    </>
  );
}
