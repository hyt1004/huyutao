'use client'

import { useState } from 'react'
import { Mail, Phone, GraduationCap, Calendar, Award, FileText, Code, Lightbulb, Briefcase, ChevronDown } from 'lucide-react'
import Image from 'next/image'

// 个人基本信息
const personalInfo = {
  name: '胡宇韬',
  email: 'huyutao1004@foxmail.com',
  birthDate: '1998.10',
  researchDirections: ['图像修复', '多模态大模型', 'Agent开发'],
  tagline: '算法工程师 · 专注于智能视觉与大模型技术',
}

// 教育背景
const education = [
  {
    period: '2021年9月 - 2024年6月',
    school: '浙江工业大学',
    degree: '硕士 · 电子信息-软件工程方向',
    supervisor: '指导教师：王万良',
    research: '研究方向：图像修复、计算机视觉',
  },
  {
    period: '2017年9月 - 2021年7月',
    school: '聊城大学',
    degree: '本科 · 计算机科学与技术',
    research: '',
  },
]

type PublicationImage = {
  src: string
  alt: string
  caption?: string
}

// 论文发表
const publications: Array<{
  year: string
  title: string
  type?: string
  conference?: string
  description: string
  links: unknown[]
  images?: PublicationImage[]
}> = [
  {
    year: '2024',
    title: 'RGB先验信息驱动的透明物体深度图像修复算法及其应用',
    type: '毕业论文',
    description: '本文针对抓取机器人处理透明物体的难题，提出双分支多阶段网络UDCGN，设计自适应损失函数提升修复精度；优化得到轻量化LiteUDCGN，降低参数量与计算复杂度；经TensorRT加速后部署于机械臂，搭建抓取平台，实验验证算法有效提升透明物体抓取成功率。',
    links: [],
    images: [
      {
        src: '/images/graduated-paper.png',
        alt: '硕士毕业论文封面',
        caption: '硕士毕业论文',
      },
    ],
  },
  {
    year: '2023',
    title: 'UDCGN: Uncertainty-Driven Cross-Guided Network for Depth Completion of Transparent Objects',
    conference: 'ICANN 2023',
    description: '提出多阶段双分支网络UDCGN用于透明物体深度修复，通过三阶段递进式修复架构，结合RGB分支与深度分支分别处理多模态输入；引入交叉引导融合模块（CGFB），基于动态卷积实现特征高效融合；设计自适应不确定性驱动损失函数（AUDL）。',
    links: [],
    images: [
      {
        src: '/images/UDCGN-1.png',
        alt: 'UDCGN 三阶段 RGB 与深度双分支网络结构',
        caption: 'UDCGN 整体网络结构（三阶段递进式修复）',
      },
      {
        src: '/images/UDCGN-2.png',
        alt: 'Dual U-Net 编码器解码器与残差 Conv Block 结构',
        caption: 'Dual U-Net 结构示意',
      },
    ],
  },
  {
    year: '2022',
    title: 'Context Dual-Branch Attention Network for Depth Completion of Transparent Object',
    conference: 'ICIRA 2022',
    description: '提出端到端双分支注意力网络DCTNet，用于透明物体深度修复。网络创新多尺度空间注意力模块（MSSA），通过深度卷积捕获多尺度特征并高效融合，实现单图推理0.02秒。',
    links: [],
    images: [
      {
        src: '/images/icira.png',
        alt: 'ICIRA 论文相关实验与可视化',
        caption: '透明物体深度修复与抓取实验示意',
      },
    ],
  },
]

// 专利与软件著作权
const patents = [
  {
    name: '一种基于多阶段神经网络的透明物体深度图像修复方法',
    type: '发明专利（已授权）',
    number: '申请号：202210546060.8',
    description: '通过读取图像并放缩、分割去噪、动态卷积提取特征，经三阶段网络递进式特征提取与修复，结合空间注意力模块融合各阶段结果，最终输出修复后深度图像。',
  },
  {
    name: '一种基于音频驱动的数字人视频生成方法和系统',
    type: '发明专利（已公开）',
    number: '申请号：202510770096.8',
    description: '通过对输入音频预处理并提取特征，对人脸图片预处理并提取外观特征，将两类特征映射为表情和动作参数并优化，结合人脸图片生成逐帧图像，组合后添加音频，生成完整数字人视频。',
  },
]

// 工作经历
const workExperience = [
  {
    period: '2024.07 - 2026.01',
    company: '上海七牛信息技术有限公司（七牛云）',
    position: '算法工程师',
    projects: [
      {
        name: '七牛灵矽 AI 智能硬件语音交互范式平台',
        period: '2025.06 – 2026.01',
        description: '针对便携智能设备语音交互场景知识孤岛、交互单一、工具匮乏的行业痛点，主导搭建了一套基于LLM Agent技术的智能语音交互平台。',
        contributions: [
          '负责大模型与便携智能设备的端侧适配开发，设计蓝牙/Wi-Fi双模式配网方案',
          '设计并搭建大模型RAG私有知识库模块，支持个性化知识录入、向量检索与上下文增强',
          '参与Agent MCP多能力协作平台工具库建设，实现任务编排、工具调用与执行闭环',
        ],
      },
      {
        name: '主流大模型本地化部署与跨算法融合应用',
        period: '2025.03 – 2025.05',
        description: '聚焦大模型在垂直行业的落地应用，完成DeepSeek等主流大模型本地化部署与优化，探索LLM+CV跨模态融合的技术路径。',
        contributions: [
          '负责DeepSeek等大模型的本地服务器部署与推理优化，基于Vllm/Ollama实现模型高效推理',
          '深度调研大模型核心落地场景，梳理WorkFlow自动化、MCP、企业知识库等方向的技术方案',
          '主导LLM+YOLO跨模态融合算法开发，构建多模态智能分析系统',
        ],
      },
      {
        name: '七牛云虚拟数字人大模型算法平台',
        period: '2024.07 - 2025.02',
        description: '研发融合大模型交互能力的企业级虚拟数字人核心算法平台，为客户提供低延迟、高自然度的数字人+大模型智能交互解决方案。',
        contributions: [
          '专项研究数字人嘴形同步算法并完成工程化部署，优化后嘴形与语音匹配度提升至90%+',
          '筛选并部署高精度背景抠图算法（抠图精度95%），完善数字人多模态呈现效果',
          '基于FastAPI构建模块化大模型+数字人算法框架，整合核心接口',
        ],
      },
      {
        name: '超分算法模型量化推理提速与工程化部署',
        period: '2023.03 – 2023.08',
        description: '针对AI算法在视频处理场景中推理速度慢、硬件资源占用高的痛点，使用TensorRT完成算法量化提速。',
        contributions: [
          '主导超分模型向TensorRT推理框架的转换与适配，单帧推理速度提升20%，GPU显存占用降低30%',
          '构建校准数据集完成INT8量化加速，推理速度较FP16再提升30%',
          '基于FastAPI构建RESTful接口，实现图片超分模型云端部署',
        ],
      },
    ],
  },
]

// 获奖情况
const awards = [
  { year: '2023, 2024', name: '浙江工业大学一等奖学金' },
  { year: '2022', name: '浙江工业大学二等奖学金' },
  { year: '2021', name: '第十一届蓝桥杯 C/C++ 大学B组 国家三等奖' },
]

/** 与 next.config.js 中 basePath 一致，供原生 img 使用 */
function publicationImageSrc(src: string) {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  return `${prefix}${src}`
}

function PublicationFigures({ images }: { images: PublicationImage[] }) {
  return (
    <div className="space-y-8">
      {images.map((img) => (
        <figure key={img.src} className="mx-auto w-full max-w-4xl">
          <div className="rounded-lg border border-gray-200 bg-gray-50/90 px-3 py-4 sm:px-4 sm:py-5">
            {/* 原生 img：避免与全局/Next 样式叠加导致宽高比错乱；居中且不强制拉满宽度 */}
            <img
              src={publicationImageSrc(img.src)}
              alt={img.alt}
              loading="lazy"
              decoding="async"
              className="mx-auto block h-auto max-h-[min(85vh,960px)] w-auto max-w-full object-contain"
            />
          </div>
          {img.caption && (
            <figcaption className="mt-3 text-center text-sm text-gray-500">{img.caption}</figcaption>
          )}
        </figure>
      ))}
    </div>
  )
}

export default function Home() {
  const [openPublications, setOpenPublications] = useState<Set<number>>(new Set())
  const [openWorkProjects, setOpenWorkProjects] = useState<Set<string>>(new Set())

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full border-4 border-white/20">
              <Image
                src="/images/photo.jpg"
                alt={personalInfo.name}
                fill
                sizes="160px"
                className="object-cover"
                priority
              />
            </div>

            <div className="min-w-0 flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-4">{personalInfo.name}</h1>
              <p className="text-xl text-gray-300 mb-4">{personalInfo.tagline}</p>
              
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                {personalInfo.researchDirections.map((dir, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-sm text-blue-200">
                    {dir}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start text-gray-300">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                  <Mail size={18} />
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">
        {/* 统计信息 */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-8">
          <div className="bg-white rounded-xl shadow-md p-6 text-center transform -translate-y-4">
            <div className="text-3xl font-bold text-blue-600">3</div>
            <div className="text-gray-600 text-sm">发表论文</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center transform -translate-y-4">
            <div className="text-3xl font-bold text-blue-600">2</div>
            <div className="text-gray-600 text-sm">专利授权</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center transform -translate-y-4">
            <div className="text-3xl font-bold text-blue-600">3</div>
            <div className="text-gray-600 text-sm">获奖荣誉</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center transform -translate-y-4">
            <div className="text-3xl font-bold text-blue-600">1.5+</div>
            <div className="text-gray-600 text-sm">年工作经验</div>
          </div>
        </section>

        {/* 教育背景 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <GraduationCap className="text-blue-600" />
            教育背景
          </h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-500">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                  <Calendar size={16} />
                  {edu.period}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{edu.school}</h3>
                <p className="text-gray-600 mt-1">{edu.degree}</p>
                {edu.supervisor && <p className="text-gray-500 text-sm mt-1">{edu.supervisor}</p>}
                {edu.research && <p className="text-gray-500 text-sm mt-1">{edu.research}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* 科研经历与论文成果 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <FileText className="text-blue-600" />
            科研经历与论文成果
          </h2>

          <div className="space-y-3">
            {publications.map((pub, index) => {
              const isOpen = openPublications.has(index)
              return (
                <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                  <button
                    type="button"
                    className="w-full flex items-start gap-3 px-6 py-4 text-left hover:bg-gray-50/80 transition-colors"
                    onClick={() =>
                      setOpenPublications((prev) => {
                        const next = new Set(prev)
                        next.has(index) ? next.delete(index) : next.add(index)
                        return next
                      })
                    }
                  >
                    <div className="flex-1 min-w-0 pr-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <Calendar size={14} />
                          {pub.year}
                        </span>
                        {pub.conference && (
                          <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs">
                            {pub.conference}
                          </span>
                        )}
                        {pub.type && (
                          <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs">
                            {pub.type}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 leading-snug">
                        {pub.title}
                      </h3>
                    </div>
                    <ChevronDown
                      size={20}
                      aria-hidden
                      className={`mt-0.5 shrink-0 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <div
                    className={`transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[8000px] opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="space-y-6 border-t border-gray-100 bg-gray-50/40 px-6 py-6">
                      <p className="max-w-prose text-gray-600 leading-relaxed">{pub.description}</p>
                      {pub.images && <PublicationFigures images={pub.images} />}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* 专利与软件著作权 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Lightbulb className="text-blue-600" />
            专利与软件著作权
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {patents.map((patent, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <span className="inline-block px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs mb-2">
                  {patent.type}
                </span>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{patent.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{patent.number}</p>
                <p className="text-gray-600 text-sm">{patent.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 工作经历 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Briefcase className="text-blue-600" />
            工作经历
          </h2>
          <div className="space-y-4">
            {workExperience.map((work, workIndex) => (
              <div key={workIndex} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                    <Calendar size={14} />
                    {work.period}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{work.company}</h3>
                  <p className="text-blue-600 text-sm mt-0.5">{work.position}</p>
                </div>
                <div className="divide-y divide-gray-100">
                  {work.projects.map((project) => {
                    const projectKey = `${workIndex}-${project.name}`
                    const isOpen = openWorkProjects.has(projectKey)
                    return (
                      <div key={projectKey}>
                        <button
                          className="w-full flex items-center gap-3 px-6 py-3 text-left hover:bg-gray-50/60 transition-colors"
                          onClick={() =>
                            setOpenWorkProjects((prev) => {
                              const next = new Set(prev)
                              next.has(projectKey) ? next.delete(projectKey) : next.add(projectKey)
                              return next
                            })
                          }
                        >
                          <ChevronDown
                            size={18}
                            className={`shrink-0 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs">
                                {project.period}
                              </span>
                              <span className="font-medium text-gray-800 leading-snug">
                                {project.name}
                              </span>
                            </div>
                          </div>
                        </button>
                        <div
                          className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                          <div className="px-6 pb-4 pt-1">
                            <p className="text-gray-600 text-sm mb-3 leading-relaxed">{project.description}</p>
                            <ul className="space-y-2">
                              {project.contributions.map((contrib, contribIndex) => (
                                <li key={contribIndex} className="flex items-start gap-2 text-gray-600 text-sm">
                                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0"></span>
                                  {contrib}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 获奖情况 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Award className="text-blue-600" />
            获奖情况
          </h2>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="space-y-4">
              {awards.map((award, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-20 text-sm text-gray-500">{award.year}</div>
                  <div className="flex-1 text-gray-800">{award.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 英语水平 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Code className="text-blue-600" />
            其他信息
          </h2>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <span className="text-gray-500">英语水平：</span>
                <span className="text-gray-800">CET-6 (588分)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-500">出生日期：</span>
                <span className="text-gray-800">{personalInfo.birthDate}</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4 mt-16">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
