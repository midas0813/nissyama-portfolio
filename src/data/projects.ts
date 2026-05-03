export interface Project {
  id: string;
  title: string;
  titleJp: string;
  category: 'LP' | 'HP' | 'EC' | 'Medical' | 'AI' | 'Chatbot' | 'WordPress' | 'System' | 'SaaS' | 'Webflow' | 'Shopify';
  period: string;
  image: string;
  subImages?: string[];
  description: string;
  descriptionJp: string;
  tech: string[];
  features: string[];
  featuresJp: string[];
  results: string[];
  resultsJp: string[];
  challenge: string;
  challengeJp: string;
  solution: string;
  solutionJp: string;
  architecture?: string;
  architectureJp?: string;
  url?: string;
}

export const projects: Project[] = [
  {
    id: 'robot-payment-recruit-ai',
    title: 'AI Recruitment Optimization Platform',
    titleJp: '採用情報AI最適化プラットフォーム',
    category: 'AI',
    period: '2024',
    image: '/projects/robot-payment/fv.png',
    subImages: [
      '/projects/robot-payment/sub1.png',
      '/projects/robot-payment/sub2.png'
    ],

    description:
      'An AI-driven recruitment platform developed for Robot Payment to optimize how users discover hiring information. The system integrates search intent analysis, high-speed APIs, and structured content delivery to help users quickly access relevant job information across complex datasets. By combining AI processing with modern frontend architecture, the platform significantly enhances usability and information discoverability.',
    descriptionJp:
      '株式会社ROBOT PAYMENTの採用情報を最適化するために開発されたAIプラットフォーム。検索意図解析と高速API、構造化コンテンツ配信を組み合わせ、ユーザーが膨大な採用情報の中から必要な情報へ迅速にアクセスできる仕組みを実現しました。',

    tech: [
      'Python',
      'FastAPI',
      'Go',
      'React',
      'TypeScript',
      'PostgreSQL',
      'Redis',
      'Docker',
      'GCP'
    ],

    features: [
      'AI-powered search intent analysis for accurate job discovery',
      'Integration with search engine indexing for improved relevance ranking',
      'High-performance backend APIs built with Go for low latency responses',
      'Dynamic content prioritization based on user behavior and query context',
      'Scalable React frontend with optimized rendering and UX flow',
      'Search analytics and tracking system for continuous improvement'
    ],
    featuresJp: [
      'AIによる検索意図解析による高精度な求人検索',
      '検索エンジン連携による関連性の高い情報表示',
      'Goによる高速・低遅延API',
      'ユーザー行動に基づくコンテンツ優先表示',
      'ReactによるスケーラブルなUI設計',
      '検索分析とユーザー行動トラッキング機能'
    ],

    results: [
      'Reduced user search time by over 50%',
      'Improved information discovery efficiency by 2.5x',
      'Increased user engagement and session duration',
      'Significant reduction in bounce rate across recruitment pages'
    ],
    resultsJp: [
      '検索時間を50%以上削減',
      '情報到達効率を2.5倍に向上',
      'ユーザーエンゲージメント向上',
      '採用ページの直帰率を大幅改善'
    ],

    challenge:
      'Recruitment information was spread across multiple categories, making it difficult for users to quickly find relevant job postings or content. Users often had to navigate through several pages before reaching the desired information, leading to frustration and drop-offs. Additionally, traditional keyword-based search systems were unable to fully understand user intent, resulting in mismatched results and inefficient user journeys.',
    challengeJp:
      '採用情報が複数カテゴリに分散しており、ユーザーが目的の職種や情報に到達するまでに時間がかかる課題がありました。ユーザーは複数ページを遷移する必要があり、途中離脱の原因となっていました。また従来のキーワード検索では検索意図を十分に理解できず、関連性の低い結果が表示されることでUXの低下を招いていました。',

    solution:
      'Implemented an AI-based search intent analysis system using Python to better understand user queries and deliver highly relevant results. Combined this with a high-performance Go API layer, caching strategies, and optimized indexing to ensure fast and scalable search performance even under large-scale data conditions.',
    solutionJp:
      'PythonによるAI検索意図解析を導入し、ユーザーの検索内容を深く理解した上で最適な結果を表示する仕組みを構築しました。さらにGoによる高速APIとキャッシュ戦略、インデックス最適化を組み合わせることで、大規模データ環境でも高速かつ安定した検索体験を実現しました。',

    architecture:
      'Microservices architecture using Python for AI processing, Go for API layer, React frontend, PostgreSQL database, Redis caching, deployed on GCP infrastructure.',
    architectureJp:
      'PythonによるAI処理、GoのAPIレイヤー、Reactフロントエンド、PostgreSQL、Redisを組み合わせたマイクロサービス構成。GCP上で運用。',

    url: 'https://www.robotpayment.co.jp/',
  },
  {
    id: 'panasonic-denki-box',
    title: 'AI Digital Showroom Platform',
    titleJp: 'AIデジタルショウルーム「電気設備BOX」',
    category: 'AI',
    period: '2024',
    image: '/projects/panasonic-showroom/fv.png',
    subImages: [
      '/projects/panasonic-showroom/sub1.png',
      '/projects/panasonic-showroom/sub2.png'
    ],

    description:
      'An AI-powered digital showroom platform developed for Panasonic to enable users to explore electrical equipment products in an immersive and interactive environment. The system combines intelligent recommendations, dynamic content rendering, and modern frontend architecture to simulate a real-world showroom experience online. It enhances product understanding by allowing users to discover relevant products based on their interests and behavior.',
    descriptionJp:
      'パナソニックの電気設備製品をデジタル上で体験できるAI活用型ショウルーム「電気設備BOX」の開発プロジェクト。AIによるレコメンドと動的コンテンツ表示を組み合わせることで、ユーザーの興味に応じた製品体験を提供し、オンライン上でリアルなショウルーム体験を再現しました。',

    tech: [
      'Ruby',
      'Node.js',
      'TypeScript',
      'React',
      'Next.js',
      'PostgreSQL',
      'Redis',
      'Docker',
      'AWS'
    ],

    features: [
      'AI-based product recommendation engine tailored to user behavior',
      'Interactive UI for immersive product exploration',
      'Dynamic content rendering based on user preferences',
      'High-performance backend combining Ruby and Node.js services',
      'Scalable frontend built with TypeScript and modern frameworks',
      'User behavior tracking and analytics for continuous optimization'
    ],
    featuresJp: [
      'ユーザー行動に基づくAIレコメンド機能',
      'インタラクティブな製品体験UI',
      'ユーザー嗜好に応じた動的コンテンツ表示',
      'RubyとNode.jsを組み合わせた高性能バックエンド',
      'TypeScriptによるスケーラブルなフロントエンド',
      'ユーザー行動分析と最適化機能'
    ],

    results: [
      'Increased user engagement by over 60%',
      'Improved product understanding and discovery rate',
      'Extended average session duration significantly',
      'Enhanced online-to-offline conversion potential'
    ],
    resultsJp: [
      'ユーザー体験エンゲージメント60%以上向上',
      '製品理解度と発見率の向上',
      '平均滞在時間の大幅増加',
      'オンラインからオフラインへの導線強化'
    ],

    challenge:
      'Traditional product presentation pages were static and lacked the ability to convey real-world usage scenarios effectively. Users found it difficult to visualize how products would be used in practice, leading to low engagement and limited understanding. Additionally, there was a need to present a wide range of products in a way that felt intuitive and personalized.',
    challengeJp:
      '従来の製品紹介は静的なページが中心であり、実際の利用シーンをユーザーがイメージしづらいという課題がありました。その結果、製品理解が不十分でエンゲージメントが低下していました。また多様な製品を分かりやすく直感的に提示する必要がありました。',

    solution:
      'Introduced an AI-driven recommendation system that dynamically suggests products based on user interactions and preferences. Built an interactive frontend experience using modern frameworks to simulate a showroom-like environment, while optimizing backend performance with a hybrid Ruby and Node.js architecture.',
    solutionJp:
      'ユーザーの行動データをもとにAIレコメンド機能を導入し、興味に応じた製品を動的に提示する仕組みを構築しました。さらに最新フロントエンド技術によるインタラクティブなUIと、Ruby・Node.jsのハイブリッド構成により高速かつ柔軟なシステムを実現しました。',

    architecture:
      'Hybrid backend using Ruby and Node.js services, TypeScript-based frontend with React/Next.js, PostgreSQL database, Redis caching, deployed on AWS infrastructure.',
    architectureJp:
      'RubyとNode.jsのハイブリッドバックエンド、React/Next.jsによるTypeScriptフロントエンド、PostgreSQLとRedisを組み合わせた構成。AWS上で運用。',

    url: 'https://www2.panasonic.biz/',
  },
  {
    id: 'mobile-pasmo-android',
    title: 'Mobile PASMO Platform for Android',
    titleJp: 'モバイルPASMO（Android版）',
    category: 'System',
    period: '2024',
    image: '/projects/pasmo-android/fv.png',
    subImages: [
      '/projects/pasmo-android/sub1.png',
      '/projects/pasmo-android/sub2.png'
    ],

    description:
      'A mobile platform enabling IC card-based transportation and payment services on Android devices. This project includes the development of the official service website and the underlying mobile application infrastructure, delivering a seamless, secure, and highly optimized user experience tailored for daily commuting and digital payments.',
    descriptionJp:
      'Android端末で交通系ICカードサービスを利用できる「モバイルPASMO」の公式サービスサイトおよびアプリ基盤の開発プロジェクト。日常の交通利用と決済をシームレスに行える、安全かつ高性能なモバイル体験を実現しました。',

    tech: [
      'Flutter',
      'React Native',
      'Kotlin',
      'JavaScript',
      'Firebase',
      'AWS',
      'REST API',
      'Docker'
    ],

    features: [
      'Cross-platform mobile app development using Flutter and React Native',
      'Secure IC card transaction processing and authentication system',
      'Real-time balance and transaction updates',
      'Optimized UI/UX for mobile-first interaction',
      'Offline capability for transport usage scenarios',
      'Integration with transportation infrastructure systems'
    ],
    featuresJp: [
      'FlutterとReact Nativeによるクロスプラットフォーム開発',
      '安全なICカード決済処理と認証システム',
      'リアルタイム残高・履歴更新',
      'モバイル最適化されたUI/UX',
      'オフライン対応による安定利用',
      '交通インフラとの連携機能'
    ],

    results: [
      'Stable large-scale deployment with high reliability',
      'Improved transaction success rate across devices',
      'Reduced application crash rate significantly',
      'Enhanced user satisfaction with smoother UX'
    ],
    resultsJp: [
      '高い信頼性で安定稼働を実現',
      '取引成功率の向上',
      'クラッシュ率の大幅削減',
      'UX改善によるユーザー満足度向上'
    ],

    challenge:
      'As a transportation IC service, the system required extremely high reliability and stability under all conditions. It was necessary to ensure consistent performance across a wide range of Android devices while maintaining a smooth and intuitive user experience. Additionally, handling secure payment transactions in real-time added further technical complexity.',
    challengeJp:
      '交通系ICサービスとして非常に高い信頼性と安定性が求められる中、様々なAndroid端末で一貫した動作を実現する必要がありました。またリアルタイム決済処理においてセキュリティとパフォーマンスの両立が大きな課題となっていました。',

    solution:
      'Leveraged cross-platform frameworks such as Flutter and React Native to maintain consistency while optimizing performance through platform-specific tuning. Implemented robust testing, performance optimization, and secure API integrations to ensure stable operation and seamless user flows.',
    solutionJp:
      'FlutterおよびReact Nativeのクロスプラットフォーム技術を活用しつつ、各プラットフォームごとの最適化を実施しました。さらにパフォーマンスチューニングや徹底したテスト、セキュアなAPI設計により安定性と操作性を両立しました。',

    architecture:
      'Cross-platform mobile apps built with Flutter and React Native, integrated with secure REST APIs, cloud infrastructure on AWS, and real-time data handling using Firebase services.',
    architectureJp:
      'Flutter・React Nativeによるアプリ、REST API連携、AWSクラウド基盤、Firebaseによるリアルタイム処理で構成。',

    url: 'https://www.pasmo.co.jp/mp/and/',
  },
  {
    id: 'algo-trading-space',
    title: 'Algorithmic Trading Platform',
    titleJp: 'アルゴリズム取引プラットフォーム',
    category: 'AI',
    period: '2024',
    image: '/projects/algo-trading/fv.png',
    subImages: [
      '/projects/algo-trading/sub1.png',
      '/projects/algo-trading/sub2.png'
    ],

    description:
      'A verified algorithmic trading platform designed to provide users with reliable trading bots and automated trading systems. The platform collects, validates, and visualizes trading performance data from multiple sources, allowing users to compare strategies and make informed decisions. By combining AI-driven analytics with blockchain-based transparency, it ensures trust and accuracy in financial data.',
    descriptionJp:
      '検証済みのトレーディングボットや自動売買システムを提供するアルゴリズム取引プラットフォームの構築。複数のデータソースから取引データを収集・検証・可視化し、ユーザーが信頼性の高い情報をもとに投資判断できる環境を実現しました。',

    tech: [
      'Python',
      'Node.js',
      'Blockchain',
      'Web3',
      'PostgreSQL',
      'Redis',
      'Docker',
      'AWS'
    ],

    features: [
      'Automated data collection from multiple trading sources',
      'Blockchain-based data verification and tamper resistance',
      'Real-time performance tracking of trading algorithms',
      'Interactive dashboards for data visualization',
      'AI-powered analytics for strategy evaluation',
      'Secure and scalable cloud infrastructure'
    ],
    featuresJp: [
      '複数ソースからのデータ自動収集',
      'ブロックチェーンによるデータ検証と改ざん防止',
      'リアルタイム取引パフォーマンス表示',
      'インタラクティブなデータ可視化ダッシュボード',
      'AIによる戦略分析機能',
      '安全でスケーラブルなクラウド基盤'
    ],

    results: [
      'Improved trust in trading data through transparency',
      'Enabled users to compare multiple trading strategies easily',
      'Reduced data inconsistency across sources',
      'Increased user engagement with real-time analytics'
    ],
    resultsJp: [
      'データ透明性向上による信頼性強化',
      '複数戦略の比較を容易に実現',
      'データ不整合の削減',
      'リアルタイム分析によるユーザー利用率向上'
    ],

    challenge:
      'Ensuring the reliability of trading bots while aggregating real-time data from multiple external sources was a significant challenge. The system also needed to provide accurate and up-to-date performance metrics without delays. Additionally, preventing data manipulation and maintaining transparency required a robust and verifiable architecture.',
    challengeJp:
      '複数の外部データソースからリアルタイムで情報を取得しながら、トレーディングボットの信頼性を担保する必要がありました。またパフォーマンスデータを正確かつ遅延なく提供することも課題でした。さらにデータ改ざんを防ぎ透明性を確保する仕組みが求められました。',

    solution:
      'Implemented automated data pipelines to gather information from multiple sources and used blockchain technology to ensure data integrity and transparency. Built scalable backend services and real-time processing systems to deliver accurate analytics while maintaining high performance.',
    solutionJp:
      '複数ソースからのデータ取得を自動化するパイプラインを構築し、ブロックチェーン技術を活用してデータの信頼性と透明性を確保しました。またリアルタイム処理基盤とスケーラブルなバックエンドにより、高精度な分析と高速表示を実現しました。',

    architecture:
      'Python-based data pipelines, Node.js backend APIs, blockchain layer for data verification, PostgreSQL database, Redis caching, deployed on AWS.',
    architectureJp:
      'Pythonによるデータパイプライン、Node.js API、ブロックチェーン検証層、PostgreSQL・Redis構成、AWS上で運用。',

    url: 'https://algotradingspace.com/',
  },
  {
    id: 'ys-dental-clinic',
    title: 'Dental Clinic Website (Aesthetic & Orthodontics)',
    titleJp: 'Y’sデンタルクリニックサイト',
    category: 'Medical',
    period: '2024',
    image: '/projects/ys-dental/fv.png',
    subImages: [
      '/projects/ys-dental/sub1.png',
      '/projects/ys-dental/sub2.png'
    ],

    description:
      'A modern and high-performance website for a dental clinic offering aesthetic, orthodontic, and precision dental treatments. The platform is designed to provide clear and structured access to various medical services while maintaining speed, usability, and reliability. It improves patient experience by simplifying navigation and presenting relevant information efficiently.',
    descriptionJp:
      '審美・矯正・精密歯科など幅広い診療を提供する歯科クリニックの公式サイトを構築。情報を整理し直し、ユーザーが必要な診療内容へ迅速にアクセスできるよう設計された、高速かつ使いやすい医療サイトを実現しました。',

    tech: [
      'Next.js',
      'React',
      'Flask',
      'TypeScript',
      'CSS',
      'AWS',
      'Nginx',
      'REST API'
    ],

    features: [
      'Structured medical content by treatment category',
      'Fast page navigation using Next.js routing',
      'SEO-optimized medical content pages',
      'Responsive design for all devices',
      'Appointment and inquiry integration',
      'Secure and stable backend with Flask'
    ],
    featuresJp: [
      '診療内容ごとに整理された情報構造',
      'Next.jsによる高速ルーティング',
      'SEO最適化された医療コンテンツ',
      '全デバイス対応レスポンシブデザイン',
      '予約・問い合わせ導線の最適化',
      'Flaskによる安定したバックエンド'
    ],

    results: [
      'Improved patient navigation and accessibility',
      'Reduced bounce rate significantly',
      'Increased appointment inquiries',
      'Enhanced trust and credibility of the clinic'
    ],
    resultsJp: [
      'ユーザー導線の改善',
      '直帰率の低減',
      '予約問い合わせ数の増加',
      '信頼性向上'
    ],

    challenge:
      'The clinic offered a wide range of treatments, making it difficult for users to find the exact information they needed. Additionally, medical websites require high levels of clarity, trust, and usability to support patient decision-making.',
    challengeJp:
      '診療科目が多岐にわたり、ユーザーが必要な情報に到達しにくい課題がありました。また医療サイトとして信頼性と分かりやすさを両立する必要がありました。',

    solution:
      'Reorganized the information architecture based on patient intent and optimized routing using Next.js. Improved UI/UX design to guide users smoothly to relevant content while ensuring fast performance and clarity.',
    solutionJp:
      '診療目的別に情報を再構造化し、Next.jsのルーティング最適化により導線を改善しました。さらにUI/UXを改善し、ユーザーが直感的に必要な情報へ到達できる設計にしました。',

    architecture:
      'Next.js frontend, Flask backend API, AWS hosting, CDN optimization for fast content delivery.',
    architectureJp:
      'Next.jsフロントエンド、Flask API、AWSインフラ、CDNによる高速配信。',

    url: 'https://www.ys-dc.jp/',
  },
  {
    id: 'sato-dental-clinic',
    title: 'General Dental Clinic Website',
    titleJp: '佐藤歯科医院 コーポレートサイト',
    category: 'Medical',
    period: '2024',
    image: '/projects/sato-dental/fv.png',
    subImages: [
      '/projects/sato-dental/sub1.png',
      '/projects/sato-dental/sub2.png'
    ],

    description:
      'A comprehensive website for a general dental clinic providing multiple medical services including orthodontics, aesthetic treatments, and home care. Designed to deliver fast access to medical information while maintaining high usability and reliability, the platform ensures patients can easily understand services and make informed decisions.',
    descriptionJp:
      '岐阜県美濃加茂市にある総合歯科医院の公式サイトを構築。多様な診療内容を整理し、患者が必要な情報へスムーズにアクセスできるよう設計された、利便性と信頼性を兼ね備えた医療サイトです。',

    tech: [
      'Next.js',
      'React',
      'Flask',
      'TypeScript',
      'CSS',
      'AWS',
      'Nginx',
      'REST API'
    ],

    features: [
      'Categorized treatment information structure',
      'Fast and SEO-friendly Next.js implementation',
      'User-friendly navigation for patients',
      'Mobile-first responsive design',
      'Contact and appointment system integration',
      'Secure backend with Flask API'
    ],
    featuresJp: [
      '診療内容のカテゴリ別整理',
      'Next.jsによる高速・SEO対応',
      '患者向けの分かりやすいナビゲーション',
      'モバイルファーストデザイン',
      '予約・問い合わせ機能',
      'Flaskによる安全なバックエンド'
    ],

    results: [
      'Improved user experience and accessibility',
      'Higher engagement and longer session duration',
      'Increased inquiries and appointment bookings',
      'Better SEO performance for local search'
    ],
    resultsJp: [
      'UX改善による利便性向上',
      '滞在時間の増加',
      '問い合わせ・予約数増加',
      'ローカルSEO強化'
    ],

    challenge:
      'The clinic had a wide range of services, which made navigation complex for users. It was also necessary to ensure that patients could easily understand medical information while maintaining a professional and trustworthy design.',
    challengeJp:
      '多様な診療サービスによりサイト構造が複雑になりやすく、ユーザーが迷いやすい課題がありました。また医療情報を分かりやすく伝えつつ信頼性の高いデザインを維持する必要がありました。',

    solution:
      'Reorganized content based on treatment purposes and improved navigation with optimized routing. Designed a clean and structured UI to guide users efficiently while ensuring fast loading and stability.',
    solutionJp:
      '診療目的別に情報を再構築し、ルーティング最適化とUI改善により導線を整理しました。シンプルで分かりやすいデザインにより、ユーザーが迷わず情報にアクセスできるようにしました。',

    architecture:
      'Next.js frontend, Flask backend, AWS infrastructure, CDN for performance optimization.',
    architectureJp:
      'Next.jsフロントエンド、Flaskバックエンド、AWS構成、CDN最適化。',

    url: 'https://www.dentist-sato.com/',
  },
  {
    id: 'upt-cosmetics-brand',
    title: 'Cosmetics Brand EC & Website',
    titleJp: 'Upt コスメブランドECサイト',
    category: 'EC',
    period: '2024',
    image: '/projects/upt-cosmetics/fv.png',
    subImages: [
      '/projects/upt-cosmetics/sub1.png',
      '/projects/upt-cosmetics/sub2.png'
    ],

    description:
      'A brand-focused eCommerce website developed for a cosmetics line produced by a celebrity. The platform integrates storytelling-driven content with a seamless purchasing experience, allowing users to explore the brand philosophy while naturally transitioning into product discovery and checkout. The design emphasizes visual storytelling and emotional engagement rather than aggressive sales tactics.',
    descriptionJp:
      '安達祐実プロデュースのコスメブランド「Upt」の公式EC・ブランドサイトを構築。ブランドの世界観を重視したコンテンツ設計と購入導線を統合し、自然な形で商品理解から購入へつながる体験を実現しました。',

    tech: [
      'WordPress',
      'PHP',
      'JavaScript',
      'CSS',
      'Figma',
      'UI/UX Design',
      'LP Design'
    ],

    features: [
      'Brand storytelling-focused content structure',
      'Seamless integration of product pages and editorial content',
      'Custom WordPress theme tailored for brand identity',
      'Mobile-first responsive design',
      'Optimized purchase flow with minimal friction',
      'Visual-heavy layout with high-quality media presentation'
    ],
    featuresJp: [
      'ブランドストーリー重視のコンテンツ設計',
      '商品ページとエディトリアルコンテンツの統合',
      'ブランド専用カスタムWordPressテーマ',
      'モバイルファースト対応',
      'スムーズな購入導線設計',
      'ビジュアル重視のレイアウト'
    ],

    results: [
      'Improved brand engagement and session duration',
      'Increased conversion rate through UX optimization',
      'Higher product discovery rate',
      'Stronger brand perception among users'
    ],
    resultsJp: [
      'ブランド体験向上による滞在時間増加',
      'UX改善によるコンバージョン率向上',
      '商品閲覧率の向上',
      'ブランド認知・印象の強化'
    ],

    challenge:
      'The project required balancing strong brand appeal with a subtle and natural purchasing experience. Overly aggressive sales design could damage brand perception, while insufficient product visibility could reduce conversions. Additionally, maintaining visual consistency across all pages while supporting content flexibility was critical.',
    challengeJp:
      'ブランドの魅力を最大限に伝えつつ、過度な商業感を抑える必要がありました。強すぎる販売訴求はブランド価値を損なう一方、弱すぎるとコンバージョンに影響するというバランスの難しさがありました。また全ページで統一された世界観を保つことも課題でした。',

    solution:
      'Designed a visual-first UI with carefully structured white space and storytelling elements. Built a flexible WordPress system that allows content updates while preserving design consistency, ensuring a natural flow from brand experience to product purchase.',
    solutionJp:
      '余白を活かしたビジュアル中心のUI設計とストーリーデザインを採用し、自然な流れで商品理解から購入へ導く構成を実現しました。さらにWordPressの柔軟性を活かし、運用しやすくブランド表現を維持できる仕組みを構築しました。',

    architecture:
      'Custom WordPress theme, PHP backend, optimized frontend with JavaScript and CSS, hosted on scalable cloud infrastructure.',
    architectureJp:
      'WordPressカスタムテーマ、PHPバックエンド、JavaScript/CSSフロントエンド、クラウド環境で運用。',

    url: 'https://uptofficial.jp/',
  },
  {
    id: 'whatya-sales-chat-lp',
    title: 'Sales Chat Service Landing Page',
    titleJp: 'WhatYa セールスチャットLP',
    category: 'LP',
    period: '2024',
    image: '/projects/whatya-lp/fv.png',
    subImages: [
      '/projects/whatya-lp/sub1.png',
      '/projects/whatya-lp/sub2.png'
    ],

    description:
      'A high-conversion landing page for a hybrid sales chat service combining AI chatbots and human support. The page is designed to clearly communicate complex service features in a short time, guiding users through the value proposition and encouraging inquiries through structured storytelling and interactive UI elements.',
    descriptionJp:
      'AIチャットボットと有人対応を組み合わせたセールスチャットサービス「WhatYa」のLPを構築。複雑なサービス内容を短時間で理解できるよう設計し、問い合わせへ自然に誘導する構成を実現しました。',

    tech: [
      'HTML',
      'CSS',
      'JavaScript',
      'Tailwind CSS',
      'GSAP',
      'ScrollTrigger',
      'Figma',
      'LP Design'
    ],

    features: [
      'Story-driven landing page structure',
      'Scroll-based animations using GSAP',
      'Clear service explanation sections',
      'Optimized conversion flow design',
      'Responsive design for all devices',
      'Interactive UI to enhance engagement'
    ],
    featuresJp: [
      'ストーリーデザインによるLP構成',
      'GSAPによるスクロールアニメーション',
      '分かりやすいサービス説明セクション',
      'コンバージョン最適化設計',
      'レスポンシブ対応',
      'インタラクティブUI'
    ],

    results: [
      'Improved user understanding of complex service',
      'Higher conversion and inquiry rates',
      'Reduced bounce rate significantly',
      'Increased engagement through animations'
    ],
    resultsJp: [
      'サービス理解度の向上',
      '問い合わせ率の向上',
      '直帰率の改善',
      'アニメーションによるエンゲージメント向上'
    ],

    challenge:
      'The service included multiple components such as AI chat, human support, and consulting, making it difficult to communicate clearly within a short time. It was essential to guide users through the information hierarchy without overwhelming them.',
    challengeJp:
      'AIチャット・有人対応・コンサルティングなど複雑なサービス構造を短時間で理解させる必要がありました。また情報量が多いため、ユーザーに負担をかけずに伝える設計が求められました。',

    solution:
      'Structured the content into a step-by-step storytelling flow and used interactive animations to maintain engagement. Designed a clear conversion path that gradually builds user understanding and trust.',
    solutionJp:
      '情報を段階的に整理したストーリー構成とインタラクション設計を採用し、自然に理解を促進しました。ユーザーの理解度に合わせて導線を設計し、問い合わせへつながる流れを構築しました。',

    architecture:
      'Static LP built with HTML, CSS, and JavaScript, enhanced with GSAP animations, deployed on CDN for high performance.',
    architectureJp:
      'HTML/CSS/JavaScriptによるLP構築、GSAPアニメーション、CDN配信による高速表示。',

    url: 'https://service.solairo.co.jp/',
  },
  {
    id: 'yuskin-hana-lp',
    title: 'Cosmetics Brand Landing Page',
    titleJp: 'ユースキン ハナ ブランドLP',
    category: 'LP',
    period: '2024',
    image: '/projects/yuskin-hana/fv.png',
    subImages: [
      '/projects/yuskin-hana/sub1.png',
      '/projects/yuskin-hana/sub2.png'
    ],

    description:
      'A visually rich landing page designed to promote a premium hand cream brand by combining functional product messaging with emotional storytelling. The page leverages smooth animations and a narrative-driven layout to communicate both product benefits and sensory experience.',
    descriptionJp:
      '高保湿ハンドクリーム「ユースキン ハナ」のブランド訴求を目的としたLP制作。機能性と感性価値を両立させ、ビジュアルとストーリーで商品の魅力を伝える設計を実現しました。',

    tech: [
      'HTML',
      'CSS',
      'JavaScript',
      'GSAP',
      'ScrollTrigger',
      'CSS Animations',
      'Figma',
      'LP Design'
    ],

    features: [
      'Story-driven visual presentation',
      'Scroll-triggered animations for engagement',
      'Soft and emotional UI design',
      'Balanced presentation of product features and lifestyle value',
      'Mobile-first responsive layout',
      'Performance-optimized lightweight implementation'
    ],
    featuresJp: [
      'ストーリーベースのビジュアル設計',
      'スクロール連動アニメーション',
      '柔らかいUIデザイン',
      '機能価値と感性価値の両立',
      'モバイル対応',
      '軽量で高速な実装'
    ],

    results: [
      'Enhanced brand perception and emotional engagement',
      'Improved user retention and scroll depth',
      'Higher product interest and interaction rate',
      'Stronger visual branding impact'
    ],
    resultsJp: [
      'ブランド印象の向上',
      'スクロール率・滞在時間の向上',
      '商品関心度の向上',
      'ビジュアル訴求力の強化'
    ],

    challenge:
      'The project needed to communicate both functional benefits and emotional appeal simultaneously. Overemphasizing functionality could weaken the brand story, while focusing only on visuals could reduce product understanding.',
    challengeJp:
      '高保湿という機能性と香り・体験といった感性価値をバランスよく伝える必要がありました。どちらかに偏るとブランド訴求が弱くなる課題がありました。',

    solution:
      'Designed a narrative flow combining product benefits with emotional storytelling. Implemented smooth animations and visual transitions to naturally guide users through the experience.',
    solutionJp:
      '機能説明とストーリーを融合した構成を設計し、アニメーションによって自然な流れで情報を伝える体験を実現しました。視覚と感情に訴えるUIでブランド価値を最大化しました。',

    architecture:
      'Static landing page with optimized HTML/CSS/JS, GSAP animations, deployed via CDN for high-speed delivery.',
    architectureJp:
      'HTML/CSS/JS構成、GSAPアニメーション、CDN配信による高速表示。',

    url: 'https://yuskin.co.jp/hana/',
  },
  {
    id: 'hakujuji-corporate-site',
    title: 'Confectionery Brand Corporate Website',
    titleJp: '白十字 コーポレートサイト',
    category: 'HP',
    period: '2024',
    image: '/projects/hakujuji/fv.png',
    subImages: [
      '/projects/hakujuji/sub1.png',
      '/projects/hakujuji/sub2.png'
    ],

    description:
      'A corporate website for a traditional Japanese confectionery brand, designed to communicate craftsmanship, product quality, and brand philosophy. The site blends storytelling, product presentation, and company information to create a cohesive digital experience that reflects the brand’s heritage and dedication to quality.',
    descriptionJp:
      '洋菓子・和菓子を展開する老舗ブランド「白十字」のコーポレートサイトを構築。素材へのこだわりや職人の手仕事を伝えるストーリー設計と商品訴求を融合し、ブランドの価値をデジタル上で表現しました。',

    tech: [
      'WordPress',
      'PHP',
      'JavaScript',
      'CSS',
      'Figma',
      'UI/UX Design',
      'HP Design'
    ],

    features: [
      'Brand storytelling-focused content structure',
      'Product showcase with high-quality visuals',
      'Custom WordPress CMS for easy content updates',
      'Responsive design for mobile and desktop',
      'Company information and recruitment sections',
      'SEO-friendly content architecture'
    ],
    featuresJp: [
      'ブランドストーリー重視の構成',
      '高品質ビジュアルによる商品訴求',
      'WordPressによる更新しやすいCMS',
      'レスポンシブ対応',
      '会社情報・採用情報ページ',
      'SEO最適化構造'
    ],

    results: [
      'Enhanced brand perception and trust',
      'Improved product visibility and engagement',
      'Increased user session duration',
      'Streamlined content management workflow'
    ],
    resultsJp: [
      'ブランド信頼性の向上',
      '商品閲覧率の向上',
      '滞在時間の増加',
      '更新作業の効率化'
    ],

    challenge:
      'The brand needed to convey its craftsmanship and product quality in a digital format without losing its traditional identity. Additionally, balancing storytelling with product visibility and usability was essential.',
    challengeJp:
      '伝統的なブランド価値を損なわずに、職人のこだわりや商品品質をデジタルで表現する必要がありました。またストーリーと商品訴求のバランスを取ることが課題でした。',

    solution:
      'Designed a content structure that integrates storytelling with product presentation. Implemented a WordPress-based CMS to allow flexible updates while maintaining visual consistency and performance.',
    solutionJp:
      'ブランドストーリーと商品訴求を統合した構成を設計し、WordPressで柔軟な運用を実現しました。デザインの統一感とパフォーマンスを両立しました。',

    architecture:
      'WordPress CMS, PHP backend, optimized frontend with JavaScript and CSS, hosted on scalable infrastructure.',
    architectureJp:
      'WordPress CMS、PHPバックエンド、JS/CSSフロントエンド、クラウド環境で運用。',

    url: 'https://www.hakujuji-g.co.jp/',
  },
  {
    id: 'jmc-recruit-site',
    title: 'Corporate Recruitment Website',
    titleJp: 'JMC 採用サイト',
    category: 'HP',
    period: '2024',
    image: '/projects/jmc-recruit/fv.png',
    subImages: [
      '/projects/jmc-recruit/sub1.png',
      '/projects/jmc-recruit/sub2.png'
    ],

    description:
      'A recruitment website designed to communicate the company’s culture, mission, and career opportunities. The platform focuses on delivering clear information while inspiring candidates through storytelling and structured content tailored to different roles and career paths.',
    descriptionJp:
      '企業のビジョンや文化を伝えながら、求職者に分かりやすく情報提供を行う採用サイトを構築。職種ごとの情報整理とストーリー設計により、応募意欲を高める導線を実現しました。',

    tech: [
      'WordPress',
      'PHP',
      'JavaScript',
      'CSS',
      'Figma',
      'UI/UX Design',
      'HP Design'
    ],

    features: [
      'Structured job listings and role-based navigation',
      'Employee stories and company culture content',
      'CMS-driven content updates',
      'Responsive and mobile-first design',
      'Application flow optimization',
      'SEO-optimized recruitment pages'
    ],
    featuresJp: [
      '職種別の情報整理',
      '社員インタビュー・企業文化コンテンツ',
      'CMSによる更新機能',
      'モバイル対応',
      '応募導線最適化',
      'SEO対応'
    ],

    results: [
      'Increased job application rate',
      'Improved candidate engagement',
      'Better communication of company values',
      'Reduced bounce rate'
    ],
    resultsJp: [
      '応募数の増加',
      '求職者エンゲージメント向上',
      '企業理解の向上',
      '直帰率改善'
    ],

    challenge:
      'Recruitment sites must clearly communicate company culture and job roles while maintaining user engagement. It was necessary to present complex organizational information in a simple and appealing way.',
    challengeJp:
      '企業文化や仕事内容を分かりやすく伝えつつ、ユーザーの興味を引き続ける必要がありました。情報量が多くなりがちな点も課題でした。',

    solution:
      'Organized content into structured sections based on user intent and designed storytelling elements to engage candidates. Implemented a CMS for easy updates and continuous improvement.',
    solutionJp:
      'ユーザー視点で情報を整理し、ストーリーデザインを取り入れて理解しやすい構成にしました。WordPressを活用し継続的な改善が可能な環境を構築しました。',

    architecture:
      'WordPress CMS, PHP backend, responsive frontend with JavaScript and CSS, deployed on cloud hosting.',
    architectureJp:
      'WordPress CMS、PHPバックエンド、JS/CSSフロントエンド、クラウド環境。',

    url: 'https://recruit.jmc-ltd.co.jp/',
  },
  {
    id: 'waris-corporate-site',
    title: 'Consulting Company Corporate Website',
    titleJp: 'Waris コーポレートサイト',
    category: 'HP',
    period: '2024',
    image: '/projects/waris/fv.png',
    subImages: [
      '/projects/waris/sub1.png',
      '/projects/waris/sub2.png'
    ],

    description:
      'A corporate website for a consulting company focused on empowering individuals and businesses. The site communicates services, company values, and success stories while providing a clear path for both individual professionals and corporate clients to engage with the platform.',
    descriptionJp:
      '個人と企業の双方を支援するコンサルティング企業のコーポレートサイトを構築。サービス内容や企業理念を分かりやすく伝え、ユーザーが目的に応じて行動できる導線を設計しました。',

    tech: [
      'Webflow',
      'JavaScript',
      'CSS',
      'Figma',
      'UI/UX Design',
      'HP Design'
    ],

    features: [
      'Service-oriented content structure',
      'Dual audience targeting (individuals and companies)',
      'Webflow CMS for flexible content management',
      'Responsive and modern UI design',
      'Clear call-to-action sections',
      'Performance-optimized frontend'
    ],
    featuresJp: [
      'サービス別コンテンツ設計',
      '個人・法人双方への導線設計',
      'Webflow CMSによる管理',
      'モダンUIデザイン',
      'CTA設計',
      '高速表示最適化'
    ],

    results: [
      'Improved user engagement and navigation clarity',
      'Increased inquiries from both target audiences',
      'Enhanced brand positioning',
      'Higher conversion rates'
    ],
    resultsJp: [
      'ユーザー導線の改善',
      '問い合わせ増加',
      'ブランドポジショニング強化',
      'コンバージョン率向上'
    ],

    challenge:
      'The platform needed to address both individuals and corporate clients with different needs. It was important to present services clearly without confusing users or diluting the message.',
    challengeJp:
      '個人と法人という異なるターゲットに対して分かりやすく情報を提供する必要がありました。情報が混在するとユーザー体験を損なう課題がありました。',

    solution:
      'Designed a clear content hierarchy separating user journeys while maintaining a unified brand message. Used Webflow CMS to ensure flexibility and fast iteration.',
    solutionJp:
      'ユーザータイプごとに導線を分けた情報設計を行い、ブランドメッセージを統一しました。Webflow CMSを活用し柔軟な運用を実現しました。',

    architecture:
      'Webflow CMS, JavaScript enhancements, optimized frontend performance, deployed via CDN.',
    architectureJp:
      'Webflow CMS、JavaScript、CDN配信による高速構成。',

    url: 'https://waris.co.jp/',
  },
  {
    id: 'meiji-savas-brand-site',
    title: 'SAVAS Protein Brand Website | Meiji',
    titleJp: 'プロテインブランド「ザバス」｜株式会社 明治',
    category: 'HP',
    period: '2024',
    image: '/projects/meiji-savas/fv.png',
    subImages: [
      '/projects/meiji-savas/sub1.png',
      '/projects/meiji-savas/sub2.png',
    ],
    description: 'Brand website for Meiji’s leading protein brand “SAVAS”, designed to showcase product variations, athlete endorsements, and nutritional education content. Built to support both marketing campaigns and long-term brand engagement.',
    descriptionJp: '株式会社明治のプロテインブランド「ザバス」の公式ブランドサイト構築プロジェクト。商品ラインナップ、アスリートサポート情報、栄養コンテンツを統合し、ブランド訴求と継続的なユーザーエンゲージメントを実現するサイトを構築しました。',
    tech: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vue.js', 'Nuxt.js', 'WordPress', 'REST API', 'GSAP', 'AWS', 'Figma'],
    features: [
      'Dynamic product catalog with filtering and category segmentation',
      'Athlete showcase and sponsorship storytelling sections',
      'Nutritional education articles managed via CMS',
      'Campaign and promotional landing modules',
      'Interactive UI animations using GSAP',
      'SEO-optimized structured content architecture',
    ],
    featuresJp: [
      'カテゴリ別に整理された動的商品カタログ',
      'アスリート紹介およびスポンサーコンテンツ',
      'CMSによる栄養記事コンテンツ管理',
      'キャンペーン用ランディングモジュール',
      'GSAPによるインタラクティブアニメーション',
      'SEOを意識した構造化コンテンツ設計',
    ],
    results: [
      'Significant increase in organic traffic through SEO optimization',
      'Improved user engagement with longer session durations',
      'Higher conversion into product detail views',
      'Enhanced brand perception through storytelling UX',
    ],
    resultsJp: [
      'SEO最適化によりオーガニック流入が大幅増加',
      'セッション滞在時間の向上',
      '商品詳細ページ遷移率の向上',
      'ブランドストーリー強化による認知向上',
    ],
    challenge: 'The project required balancing large-scale product information with brand storytelling in a single unified experience. Additionally, performance optimization was critical due to heavy visual content and nationwide traffic volume.',
    challengeJp: '多数の商品情報とブランドストーリーを統合し、ユーザー体験を損なわない設計が求められました。また、大量のビジュアルコンテンツと高トラフィック環境に対応するパフォーマンス最適化も重要な課題でした。',
    solution: 'Implemented a headless WordPress CMS with Nuxt.js frontend for scalability and performance. Optimized assets, lazy loading, and animation handling to maintain speed while delivering rich visuals.',
    solutionJp: 'ヘッドレスWordPressとNuxt.jsを組み合わせた構成を採用し、スケーラビリティと高速表示を実現。画像最適化や遅延読み込みにより、リッチな表現とパフォーマンスを両立しました。',
    architecture: 'Headless CMS (WordPress) + Nuxt.js frontend deployed on AWS with CDN, REST API integration for dynamic content delivery.',
    architectureJp: 'WordPressをヘッドレスCMSとして利用し、Nuxt.jsフロントエンドとAWS CDN構成で高速配信。REST APIでコンテンツを動的取得。',
    url: 'https://www.meiji.co.jp/',
  },
  {
    id: 'kuma-hospital-recruit',
    title: 'Kuma Hospital Doctor Recruitment Site',
    titleJp: '医師採用トップ｜隈病院 医師採用サイト',
    category: 'Medical',
    period: '2024',
    image: '/projects/kuma-hospital/fv.png',
    subImages: [
      '/projects/kuma-hospital/sub1.png',
      '/projects/kuma-hospital/sub2.png',
    ],
    description: 'Medical recruitment website for Kuma Hospital, focusing on attracting specialized doctors through detailed career information, training programs, and institutional credibility.',
    descriptionJp: '隈病院の医師採用サイト構築プロジェクト。専門医の採用を目的とし、診療実績や教育体制、キャリア情報を分かりやすく伝える設計を実現しました。',
    tech: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Next.js', 'WordPress', 'REST API', 'Tailwind CSS', 'AWS', 'Figma'],
    features: [
      'Doctor recruitment information with structured career paths',
      'Detailed training and education program pages',
      'Interview and testimonial sections',
      'CMS-managed content updates for HR teams',
      'Responsive and accessibility-focused design',
      'SEO optimization for medical recruitment keywords',
    ],
    featuresJp: [
      'キャリアパスを整理した採用情報ページ',
      '教育・研修プログラム詳細ページ',
      '医師インタビュー・体験談掲載',
      'CMSによる採用コンテンツ管理',
      'アクセシビリティを考慮したレスポンシブ設計',
      '医療採用向けSEO最適化',
    ],
    results: [
      'Increase in qualified doctor applications',
      'Improved engagement with recruitment content',
      'Reduced bounce rate on recruitment pages',
      'Enhanced institutional trust perception',
    ],
    resultsJp: [
      '医師応募数の増加',
      '採用コンテンツの閲覧率向上',
      '直帰率の低下',
      '医療機関としての信頼性向上',
    ],
    challenge: 'The key challenge was presenting highly specialized medical information in an accessible way. Additionally, the site needed to maintain trustworthiness while guiding users toward application actions.',
    challengeJp: '専門性の高い医療情報を分かりやすく伝えることが課題でした。また、信頼性を保ちながら応募導線を設計する必要がありました。',
    solution: 'Structured content by career stages and simplified navigation flow. Combined CMS flexibility with a clean UI to ensure both usability and credibility.',
    solutionJp: 'キャリア段階ごとに情報を整理し、シンプルな導線設計を実施。CMSとUI設計を組み合わせ、使いやすさと信頼性を両立しました。',
    architecture: 'Next.js frontend with WordPress CMS backend, deployed on AWS with optimized SEO structure.',
    architectureJp: 'Next.jsフロントエンドとWordPress CMSを連携し、AWS環境でSEO最適化された構成を実現。',
    url: 'https://www.kuma-h.or.jp/',
  },
  {
    id: 'minatomirai-law-firm',
    title: 'Minatomirai General Law Office Website',
    titleJp: 'みなとみらい総合法律事務所 コーポレートサイト',
    category: 'HP',
    period: '2024',
    image: '/projects/mms-law/fv.png',
    subImages: [
      '/projects/mms-law/sub1.png',
      '/projects/mms-law/sub2.png',
    ],
    description: 'Corporate website for a Yokohama-based law firm specializing in inheritance, real estate, and corporate legal services. Designed to build trust and clearly communicate complex legal offerings to potential clients.',
    descriptionJp: '横浜市の法律事務所「みなとみらい総合法律事務所」のコーポレートサイト構築プロジェクト。遺言・相続・不動産・企業法務などの専門分野を分かりやすく伝え、信頼性の高い情報発信を実現しました。',
    tech: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Next.js', 'WordPress', 'REST API', 'Tailwind CSS', 'AWS', 'Figma'],
    features: [
      'Structured legal service pages for inheritance, real estate, and corporate law',
      'Consultation flow with clear call-to-action design',
      'Client-friendly explanations of complex legal topics',
      'CMS-based content management for articles and updates',
      'SEO optimization for local legal service keywords',
      'Secure contact and consultation inquiry forms',
    ],
    featuresJp: [
      '相続・不動産・企業法務のサービス詳細ページ',
      '相談導線を最適化したCTA設計',
      '専門的内容を分かりやすく解説するコンテンツ',
      'CMSによる記事・お知らせ管理',
      'ローカルSEOを意識した設計',
      'セキュアなお問い合わせフォーム',
    ],
    results: [
      'Increase in consultation inquiries from website',
      'Improved trust and credibility through structured content',
      'Higher search rankings for regional legal keywords',
      'Reduced bounce rate on service pages',
    ],
    resultsJp: [
      '問い合わせ件数の増加',
      '構造化コンテンツによる信頼性向上',
      '地域キーワードでの検索順位向上',
      'サービスページの直帰率改善',
    ],
    challenge: 'The project required translating complex legal services into simple, understandable content for general users. Additionally, building trust through design and content structure was essential in a highly competitive legal market.',
    challengeJp: '専門性の高い法律サービスを一般ユーザーにも理解しやすく伝える必要がありました。また、競争の激しい法律業界において、デザインと情報設計で信頼性を構築することが重要な課題でした。',
    solution: 'Implemented a clean, minimal UI with structured content hierarchy. Combined CMS flexibility with SEO-focused page design to improve both usability and discoverability.',
    solutionJp: 'シンプルで信頼感のあるUIと情報階層設計を採用。CMSとSEO設計を組み合わせ、使いやすさと検索性を両立しました。',
    architecture: 'Next.js frontend with WordPress CMS backend, deployed on AWS with CDN and SEO optimization.',
    architectureJp: 'Next.jsフロントエンドとWordPress CMSを連携し、AWS CDNで高速配信。SEO最適化された構成。',
    url: 'https://mmslaw.jp/',
  },
  {
    id: 'kore-ai-platform',
    title: 'Enterprise AI Platform Website | Kore.ai',
    titleJp: 'Kore.ai エンタープライズAIプラットフォームサイト',
    category: 'AI',
    period: '2024',
    image: '/projects/kore-ai/fv.png',
    subImages: [
      '/projects/kore-ai/sub1.png',
      '/projects/kore-ai/sub2.png',
    ],
    description: 'Enterprise AI platform website showcasing agentic AI applications, automation capabilities, and enterprise-grade solutions for business transformation.',
    descriptionJp: 'エンタープライズ向けAIプラットフォーム「Kore.ai」のサービスサイト構築プロジェクト。Agentic AIアプリケーションや業務自動化機能を分かりやすく訴求するサイトを開発しました。',
    tech: ['React', 'Next.js', 'TypeScript', 'Node.js', 'GraphQL', 'Tailwind CSS', 'Framer Motion', 'AWS', 'Vercel', 'Figma'],
    features: [
      'Interactive AI product showcase and use-case sections',
      'Enterprise solution pages with modular content blocks',
      'Dynamic animations explaining AI workflows',
      'Lead generation forms integrated with CRM',
      'Scalable component-based UI architecture',
      'SEO and performance optimization for global traffic',
    ],
    featuresJp: [
      'AIプロダクト紹介とユースケース表示',
      'モジュール化されたエンタープライズ向けコンテンツ',
      'AIワークフローを説明するアニメーション',
      'CRM連携リード獲得フォーム',
      'コンポーネントベースUI設計',
      'グローバル対応SEOとパフォーマンス最適化',
    ],
    results: [
      'Increase in enterprise lead generation',
      'Improved engagement on product pages',
      'Higher conversion rates from landing sections',
      'Enhanced brand positioning as AI leader',
    ],
    resultsJp: [
      'エンタープライズリード獲得増加',
      'プロダクトページの滞在時間向上',
      'LPからのコンバージョン率向上',
      'AIリーダーとしてのブランド強化',
    ],
    challenge: 'The main challenge was explaining complex AI technologies in a clear and engaging way. Additionally, the site needed to support global enterprise users with scalable performance and modular design.',
    challengeJp: '高度なAI技術を分かりやすく伝えることが課題でした。また、グローバル企業向けにスケーラブルな構成とパフォーマンスが求められました。',
    solution: 'Used modular UI components and animation-driven storytelling to simplify complex concepts. Implemented a scalable frontend architecture with optimized performance.',
    solutionJp: 'コンポーネント設計とアニメーションを活用し、複雑な概念を分かりやすく表現。スケーラブルなフロントエンド構成で高パフォーマンスを実現。',
    architecture: 'Next.js + Node.js architecture with GraphQL API, deployed on Vercel and AWS for global scalability.',
    architectureJp: 'Next.jsとNode.js、GraphQL API構成。VercelとAWSでグローバルスケールに対応。',
    url: 'https://www.kore.ai/',
  },
  {
    id: 'equals-soap-brand-site',
    title: 'Equals Soap Brand Website',
    titleJp: 'equals 洗顔石鹸 ブランドサイト',
    category: 'LP',
    period: '2024',
    image: '/projects/equals-soap/fv.png',
    subImages: [
      '/projects/equals-soap/sub1.png',
      '/projects/equals-soap/sub2.png',
    ],
    description: 'Brand-focused landing page for the skincare product “equals”, designed to communicate product philosophy, ingredients, and emotional value through visual storytelling.',
    descriptionJp: 'スキンケアブランド「equals（イコールズ）」のブランドLP制作プロジェクト。製品の特徴や世界観をビジュアル中心で伝え、ユーザーの共感を促進する設計を実現しました。',
    tech: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'GSAP', 'ScrollTrigger', 'WordPress', 'REST API', 'AWS', 'Figma'],
    features: [
      'Visual storytelling with scroll-based animations',
      'Product feature sections highlighting ingredients and benefits',
      'Brand philosophy and narrative-driven content',
      'Mobile-first responsive design',
      'CMS integration for content updates',
      'Performance optimization for smooth animations',
    ],
    featuresJp: [
      'スクロール連動のビジュアルストーリー演出',
      '成分や特徴を伝える商品紹介セクション',
      'ブランド哲学を表現するコンテンツ設計',
      'モバイルファーストのレスポンシブ対応',
      'CMSによるコンテンツ更新機能',
      'スムーズなアニメーションのための最適化',
    ],
    results: [
      'Improved brand engagement and storytelling impact',
      'Higher product page interaction rates',
      'Increased time spent on site',
      'Enhanced emotional connection with users',
    ],
    resultsJp: [
      'ブランド体験の向上',
      '商品コンテンツの閲覧率向上',
      '滞在時間の増加',
      'ユーザーとの感情的なつながり強化',
    ],
    challenge: 'The project required balancing functional product information with emotional storytelling. Additionally, maintaining performance while using animation-heavy visuals was a key challenge.',
    challengeJp: '機能的な商品説明と感情的なブランド表現を両立する必要がありました。また、アニメーションを多用しながらパフォーマンスを維持することも課題でした。',
    solution: 'Designed a scroll-driven storytelling experience using lightweight animations. Optimized assets and rendering to maintain smooth performance across devices.',
    solutionJp: '軽量なアニメーションを用いたスクロール型ストーリーデザインを採用。アセット最適化により快適な表示速度を実現しました。',
    architecture: 'Static frontend with CMS integration and optimized asset delivery via CDN.',
    architectureJp: '静的フロントエンドにCMSを統合し、CDNで高速配信する構成。',
    url: 'https://equals-soap.jp/',
  }
];