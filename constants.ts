
import { ResumeContent } from './types';

export const CONTENT: Record<'en' | 'zh', ResumeContent> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      education: "Education",
      contact: "Contact"
    },
    hero: {
      role: "Operations Manager & CX Strategist",
      name: "Yuefeng Liu",
      tagline: "Bridging the gap between data-driven operations and exceptional customer experience.",
      cta: "View Experience"
    },
    about: {
      title: "About Me",
      description: "As a graduate of Johns Hopkins University with an M.A. in Public Management and a double major from Syracuse University, I am a strategist dedicated to bridging the gap between rigorous quantitative analysis and high-stakes business execution.\n\nI specialize in transforming massive datasets into actionable growth engines through CRM architecture, advanced visualization, and strategic market intelligence, delivering measurable value in complex operational environments.",
      skillsTitle: "Core Expertise",
      competencies: [
        {
          title: "CRM Architecture",
          description: "Architected and deployed centralized CRM systems to digitize sales pipelines, improving retrieval efficiency by 200%."
        },
        {
          title: "Data Visualization",
          description: "Expert in Power BI, Power Query, and DAX. Processing 500M+ data points into interactive strategic dashboards."
        },
        {
          title: "B2B Sales Strategy",
          description: "Proven ability to manage 200+ key accounts with a 90% retention rate, driving sustainable revenue growth."
        },
        {
          title: "Statistical Modeling",
          description: "Proficient in R and @Risk for Monte Carlo simulations and risk analysis to support evidence-based decisions."
        },
        {
          title: "Digital Operations",
          description: "Experienced in brand revitalization and cross-channel digital marketing to drive traffic and conversion."
        },
        {
          title: "Strategic Research",
          description: "Evaluating market trends and ESG impact through quantitative analysis and comprehensive policy research."
        }
      ]
    },
    experience: {
      title: "Experience",
      items: [
        {
          company: "Firstpick International LLC",
          role: "Customer Services Manager",
          location: "Fairfax, VA (Hybrid)",
          period: "July 2025 - Present",
          description: [
            "Cultivated a sales pipeline of 200+ prospective automotive detailing shops in the DMV region.",
            "Designed integrated marketing campaigns contributing to 50% Q-o-Q revenue growth for the INTEGO product line.",
            "Architected and deployed a centralized CRM system, improving data retrieval efficiency by 200%.",
            "Maintained strong client relationships achieving a 90% client retention rate."
          ],
          skills: ["CRM Strategy", "B2B Sales", "Brand Revitalization", "Digital Infrastructure", "CX Management"]
        },
        {
          company: "Haleon",
          role: "RTM Data Analysis Intern",
          location: "Shanghai, China",
          period: "June 2024 - August 2024",
          description: [
            "Utilized R Studio and Power BI to cleanse and analyze over 500 million data points, driving informed strategic decision-making.",
            "Designed internal database with interactive dashboard using advanced DAX to track customer trends across units.",
            "Collaborated to produce detailed weekly business performance reports highlighting key metrics and market data trends.",
            "Led an online Power BI training session that enhanced the department's data analysis capabilities."
          ],
          skills: ["Power BI", "DAX", "R Studio", "Market Trend Analysis"]
        },
        {
          company: "China Social Enterprise and Impact Investing Forum (CSEIF)",
          role: "Project Intern",
          location: "Remote",
          period: "November 2021 - March 2022",
          description: [
            "Collected and analyzed global ESG and impact investing policies related to China twice a week.",
            "Developed integrated weekly policies and designed official documentation including invitation letters.",
            "Researched ESG policies of over 20 social enterprises in the US, UK, and European regions.",
            "Informed investment portfolios on how global policy trends affect social enterprise development."
          ],
          skills: ["ESG Research", "Impact Investing", "Global Policy Analysis", "Strategic Documentation"]
        }
      ]
    },
    education: {
      title: "Education",
      items: [
        {
          school: "Johns Hopkins University",
          college: "Krieger School of Arts and Sciences",
          degree: "M.A. in Public Management",
          period: "Aug 2023 - May 2025",
          gpa: "3.8/4.0",
          logo: "https://brand.jhu.edu/wp-content/uploads/2024/07/logos-black-on-whitejpg-1024x683.jpg",
          courseLabel: "Core Courses",
          courses: [
            "Risk Management Analytics",
            "Programming and Data Management",
            "Database Management Systems",
            "Financial Management & Analysis",
            "Fundamentals of Quantitative Methods",
            "Economics for Public Decision-Making",
            "Public Policy Evaluation & Process",
            "Capstone for Public Management"
          ],
          projectLabel: "Graduate Research Highlights",
          academicProjects: [
            { 
              title: "Risk & Quantitative Policy Framework", 
              desc: "Engineered robust risk assessment models for public sector initiatives, utilizing Bayesian statistics and Monte Carlo simulations.", 
              pdfUrl: "#" 
            },
            { 
              title: "Database Architecture for Policy", 
              desc: "Designed and implemented SQL-based database management systems to optimize high-volume public record retrieval and analysis.", 
              pdfUrl: "#" 
            }
          ]
        },
        {
          school: "Syracuse University",
          college: "Maxwell School of Citizenship and Public Affairs",
          degree: "B.A. in Policy Studies & International Relations",
          period: "Aug 2019 - May 2023",
          gpa: "3.50/4.00 (Cum Laude)",
          logo: "https://logos-world.net/wp-content/uploads/2023/08/Syracuse-University-Seal-Logo.png",
          courseLabel: "Core Courses",
          courses: [
            "Applied Data Science",
            "Methods of Public Policy Analysis",
            "Quantitative Methods for Social Sciences",
            "Smart Cities and Urban Policy",
            "Policy Implementation",
            "International Political Economy",
            "Economic Development of Africa",
            "Essentials of Accounting"
          ],
          projectLabel: "Undergraduate Research",
          academicProjects: [
            { 
              title: "Syracuse Map Digitization Study", 
              desc: "Collaborated with Ground Department to scan and categorize 15,000+ records. Directly informed maintenance efficiency.",
              pdfUrl: "https://drive.google.com/file/d/1y7NtlEZMDlT6hPeAjw2uGqswVt6Yew3X/view?usp=sharing"
            },
            { 
              title: "Sino-Ethnic Policy Comparison", 
              desc: "Authored a comparative thesis on XUAR and TAR governance and demographic migration trends.",
              pdfUrl: "https://drive.google.com/file/d/115Q-3Uf18Wb6iiHF80HA7KZSxevibmPn/view?usp=sharing"
            }
          ]
        }
      ]
    },
    skills: {
      title: "Skills",
      categories: [
        {
          name: "Global Communication",
          items: ["Mandarin", "Cantonese", "English", "Spanish", "Russian"]
        }
      ]
    },
    contact: {
      title: "Contact",
      subtitle: "Let's Connect.",
      description: "Open to opportunities in data analysis, policy research, and strategic consulting.",
      email: "Yuefeng.louie.liu@gmail.com",
      phone: "315-450-6392",
      location: "Washington, DC",
      linkedin: "linkedin.com/in/Yuefeng-Liu",
      labels: {
        email: "Email",
        phone: "Phone",
        location: "Location"
      }
    }
  },
  zh: {
    nav: {
      home: "首页",
      about: "关于",
      experience: "工作经历",
      education: "教育背景",
      contact: "联系方式"
    },
    hero: {
      role: "运营经理 & 客户体验专家",
      name: "柳 越峰",
      tagline: "连接数据驱动运营与卓越客户体验的桥梁。",
      cta: "查看工作经历"
    },
    about: {
      title: "关于我",
      description: "作为约翰霍普金斯大学公共管理硕士及雪城大学双学士，我是一位致力于桥接严谨定量研究与动态业务执行的战略专家。\n\n我擅长通过 CRM 架构、高级可视化和战略市场情报，将海量数据转化为驱动增长的行动引擎，在复杂的运营环境中创造可衡量的商业价值。",
      skillsTitle: "核心专业领域",
      competencies: [
        {
          title: "CRM 架构实施",
          description: "构建并部署中心化 CRM 系统，实现销售管线数字化，将数据检索效率提升 200%。"
        },
        {
          title: "高级数据可视化",
          description: "擅长 Power BI, Power Query 与 DAX。处理 5 亿级数据并转化为直观的战略决策仪表板。"
        },
        {
          title: "B2B 销售与管理",
          description: "具备开发 200+ 核心客户并保持 90% 留存率的实战经验，驱动可持续营收增长。"
        },
        {
          title: "统计建模与分析",
          description: "熟练运用 R 和 @Risk 进行蒙特卡洛模拟与风险分析，为循证决策提供硬核支持。"
        },
        {
          title: "数字化运营",
          description: "主导品牌振兴与跨渠道数字营销，精准驱动流量获取与转化率提升。"
        },
        {
          title: "战略市场研究",
          description: "具备深度数据挖掘与定量政策分析能力，精准评估市场趋势、ESG 影响与战略可行性。"
        }
      ]
    },
    experience: {
      title: "职业经历",
      items: [
        {
          company: "Firstpick International LLC",
          role: "客户服务经理",
          location: "美国弗吉尼亚州费尔法克斯 (混合办公)",
          period: "2025年7月 - 至今",
          description: [
            "在 DMV 地区开发了 200 多家潜在汽车美容店的销售管线。",
            "设计并执行整合营销活动，促使产品线实现 50% 的季度环比营收增长。",
            "构建并部署了中心化 CRM 系统，将数据检索效率提升了 200%。",
            "维护核心大客户关系，实现 90% 的客户留存率。"
          ],
          skills: ["CRM 战略", "B2B 销售", "品牌重塑", "CX 管理"]
        },
        {
          company: "赫力昂 (Haleon)",
          role: "RTM 数据分析实习生",
          location: "中国上海",
          period: "2024年6月 - 2024年8月",
          description: [
            "使用 R Studio 和 Power BI 清洗并分析了超过 5 亿条数据。",
            "使用高级 DAX 开发了内部交互式仪表板，跟踪各业务部门客户趋势。",
            "协助产出周度业务表现报告，突出核心指标与市场动向。",
            "主导了 Power BI 线上培训，提升了部门整体的数据分析能力。"
          ],
          skills: ["Power BI", "DAX", "R Studio", "数据分析"]
        },
        {
          company: "中国社会企业与影响力投资论坛 (CSEIF)",
          role: "项目实习生",
          location: "远程",
          period: "2021年11月 - 2022年3月",
          description: [
            "每周两次搜集并分析全球及中国关于 ESG 和影响力投资的政策信息。",
            "起草并设计了包括官方邀请函在内的多项双语文件，整合绿色经济政策。",
            "调研了美、英、欧等地区超过 20 家社会企业，分析政策对行业的影响。",
            "为社会企业发展和个人投资组合提供全球政策趋势分析支持。"
          ],
          skills: ["ESG 研究", "影响力投资", "政策分析", "战略文案"]
        }
      ]
    },
    education: {
      title: "教育背景",
      items: [
        {
          school: "约翰霍普金斯大学 (JHU)",
          college: "克里格文理学院 (AAP)",
          degree: "公共管理硕士",
          period: "2023年8月 - 2025年5月",
          gpa: "3.8/4.0",
          logo: "https://brand.jhu.edu/wp-content/uploads/2024/07/logos-black-on-whitejpg-1024x683.jpg",
          courseLabel: "核心课程",
          courses: [
            "风险管理分析",
            "编程与数据管理",
            "数据库管理系统",
            "财务管理与分析",
            "定量研究方法基础",
            "公共决策经济学",
            "公共政策评估与流程",
            "公共管理顶点研究"
          ],
          projectLabel: "研究生核心研究项目",
          academicProjects: [
            { 
              title: "定量政策风险评估框架", 
              desc: "为公共部门项目构建了稳健的风险评估模型，熟练运用贝叶斯统计与蒙特卡洛模拟进行政策预判。", 
              pdfUrl: "#" 
            },
            { 
              title: "政策决策支持数据库架构", 
              desc: "设计并实施了基于 SQL 的数据库管理系统，优化了大规模公共档案的检索速度与分析深度。", 
              pdfUrl: "#" 
            }
          ]
        },
        {
          school: "雪城大学",
          college: "马克斯维尔公民与公共事务学院",
          degree: "政策研究文学学士 & 国际关系文学学士",
          period: "2019年8月 - 2023年5月",
          gpa: "3.50/4.00 (优秀毕业生)",
          logo: "https://logos-world.net/wp-content/uploads/2023/08/Syracuse-University-Seal-Logo.png",
          courseLabel: "核心课程",
          courses: [
            "应用数据科学",
            "公共政策分析方法",
            "社会科学定量研究",
            "智慧城市与城市政策",
            "政策执行研究",
            "国际政治经济学",
            "非洲经济发展",
            "会计学基础"
          ],
          projectLabel: "本科科研成果",
          academicProjects: [
            { 
              title: "雪城市数字化地图分类研究", 
              desc: "将 15,000 多份档案数字化，显著提升公园维护效率。",
              pdfUrl: "https://drive.google.com/file/d/1y7NtlEZMDlT6hPeAjw2uGqswVt6Yew3X/view?usp=sharing"
            },
            {
              title: "跨国界民族主义研究",
              desc: "撰写了关于治理、人口迁移趋势与资源价值分析的对比论文。",
              pdfUrl: "https://drive.google.com/file/d/115Q-3Uf18Wb6iiHF80HA7KZSxevibmPn/view?usp=sharing"
            }
          ]
        }
      ]
    },
    skills: {
      title: "核心技能",
      categories: [
        {
          name: "全球沟通能力",
          items: ["普通话", "粤语", "英语", "西班牙语", "俄语"]
        }
      ]
    },
    contact: {
      title: "联系方式",
      subtitle: "欢迎联系。",
      description: "欢迎在数据分析、政策研究和战略咨询方面进行合作。",
      email: "Yuefeng.louie.liu@gmail.com",
      phone: "315-450-6392",
      location: "美国 华盛顿特区",
      linkedin: "linkedin.com/in/Yuefeng-Liu",
      labels: {
        email: "电子邮箱",
        phone: "联系电话",
        location: "所在地"
      }
    }
  }
};
