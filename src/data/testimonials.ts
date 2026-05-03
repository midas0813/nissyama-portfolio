export interface Testimonial {
  id: number;
  name: string;
  nameJp: string;
  role: string;
  roleJp: string;
  company: string;
  avatar: string;
  text: string;
  textJp: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Tanaka Akiko',
    nameJp: '田中 明子',
    role: 'CEO',
    roleJp: '代表取締役',
    company: 'TechVision株式会社',
    avatar: '/avatars/avatar-1.jpg',
    text: 'Nishiyama-san delivered our corporate website on time and exceeded our expectations. The design was clean, modern, and perfectly matched our brand identity. Our inquiry rate tripled within the first month.',
    textJp: '西山さんはコーポレートサイトを期日通りに納品し、期待を大きく上回る成果を出してくれました。デザインはクリーンでモダンで、ブランドイメージに完璧にマッチしていました。最初の1ヶ月で問い合わせ数が3倍になりました。',
    rating: 5,
  },
  {
    id: 2,
    name: 'Yamamoto Yuki',
    nameJp: '山本 由紀',
    role: 'Marketing Director',
    roleJp: 'マーケティング部長',
    company: 'BeautyLab Japan',
    avatar: '/avatars/avatar-2.jpg',
    text: 'The landing page Nishiyama-san built for our campaign achieved a 32% conversion rate — far beyond industry average. His understanding of Japanese consumer behavior and attention to detail is outstanding.',
    textJp: '西山さんが制作したキャンペーンLPはコンバージョン率32%を達成し、業界平均を大きく上回りました。日本の消費者行動への理解と細部へのこだわりは素晴らしいです。',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sato Haruka',
    nameJp: '佐藤 はるか',
    role: 'Founder',
    roleJp: '創業者',
    company: 'Sakura EC',
    avatar: '/avatars/avatar-3.jpg',
    text: 'Our Shopify store was completely transformed. The custom theme looks premium, loads fast, and the LINE Pay integration was seamless. Sales increased by 40% in the first quarter after launch.',
    textJp: 'Shopifyストアが完全に生まれ変わりました。カスタムテーマはプレミアム感があり、表示速度も速く、LINE Pay連携もスムーズでした。ローンチ後の第1四半期で売上が40%増加しました。',
    rating: 5,
  },
  {
    id: 4,
    name: 'Nakamura Emi',
    nameJp: '中村 恵美',
    role: 'Clinic Director',
    roleJp: 'クリニック院長',
    company: '中村皮膚科クリニック',
    avatar: '/avatars/avatar-4.jpg',
    text: 'The website Nishiyama-san created for our clinic is exactly what we needed. Patients frequently compliment how easy it is to book appointments online. The design conveys trust and professionalism perfectly.',
    textJp: '西山さんが制作したクリニックのウェブサイトは、まさに私たちが必要としていたものです。患者さんからオンライン予約のしやすさをよく褒めていただきます。信頼感とプロフェッショナルさが完璧に表現されています。',
    rating: 5,
  },
  {
    id: 5,
    name: 'Watanabe Ryo',
    nameJp: '渡辺 涼',
    role: 'CTO',
    roleJp: '最高技術責任者',
    company: 'DataFlow Inc.',
    avatar: '/avatars/avatar-5.jpg',
    text: 'The AI chatbot Nishiyama-san built reduced our support tickets by 65%. His knowledge of LangChain, RAG architecture, and Japanese NLP is impressive. Delivery was fast and the code quality is excellent.',
    textJp: '西山さんが構築したAIチャットボットにより、サポートチケットが65%削減されました。LangChain、RAGアーキテクチャ、日本語NLPの知識は素晴らしいです。納品も早く、コード品質も優秀です。',
    rating: 5,
  },
  {
    id: 6,
    name: 'Kobayashi Mana',
    nameJp: '小林 真奈',
    role: 'Brand Manager',
    roleJp: 'ブランドマネージャー',
    company: 'MANA Apparel',
    avatar: '/avatars/avatar-6.jpg',
    text: 'Working with Nishiyama-san on our Webflow EC site was a great experience. He understood our brand vision immediately and delivered a beautiful, editorial-style shopping experience. Highly recommended.',
    textJp: 'WebflowのECサイト制作で西山さんと仕事をして、とても良い経験でした。ブランドビジョンをすぐに理解してくれて、美しいエディトリアルスタイルのショッピング体験を実現してくれました。強くお勧めします。',
    rating: 5,
  },
];
