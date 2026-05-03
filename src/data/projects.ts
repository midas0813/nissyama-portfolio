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
];