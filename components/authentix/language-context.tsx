"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

type Language = "en" | "zh"

// Comprehensive translation dictionary covering 100% of UI strings
const translations = {
  en: {
    // Navigation
    home: "Home",
    imageFakeDetect: "Image Fake Detect",
    videoFakeDetect: "Video Fake Detect",
    audioFakeDetect: "Audio Fake Detect",
    textFakeDetect: "Text Fake Detect",
    detectionHistory: "Detection History",
    protocolSettings: "Protocol Settings",
    
    // Protocol Status
    protocolStatus: "Protocol Status",
    activeSecure: "Active & Secure",
    
    // Account
    personalAccount: "Personal Account",
    
    // Header Actions
    aiAssistant: "AI 助手",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    protocolDocs: "Protocol Docs",
    
    // Page Titles
    videoForgeryAnalysis: "Video Forgery Analysis",
    imageForgeryAnalysis: "Image Forgery Analysis",
    audioForgeryAnalysis: "Audio Forgery Analysis",
    textForgeryAnalysis: "Text Forgery Analysis",
    homeDashboard: "Home Dashboard",
    
    // Home Dashboard
    welcomeBack: "Welcome back. Let's verify your digital media.",
    systemStatus: "System Status",
    recentScans: "Recent Scans",
    quickActions: "Quick Actions",
    startNewScan: "Start New Scan",
    viewHistory: "View History",
    
    // Upload Components
    dragDropOrClick: "Drag & drop or click to upload",
    supportedFormats: "Supported formats",
    maxFileSize: "Max file size",
    uploadFile: "Upload File",
    removeFile: "Remove File",
    analyzing: "Analyzing...",
    
    // Image Upload
    imageScan: "Image Scan",
    uploadImageForAnalysis: "Upload an image for AI-powered forgery detection",
    selectImage: "Select Image",
    analyzeImage: "Analyze Image",
    
    // Video Upload
    videoScan: "Video Scan",
    uploadVideoForAnalysis: "Upload a video for deepfake and manipulation detection",
    selectVideo: "Select Video",
    analyzeVideo: "Analyze Video",
    
    // Audio Upload
    audioScan: "Audio Scan",
    uploadAudioForAnalysis: "Upload audio for voice clone and synthesis detection",
    selectAudio: "Select Audio",
    analyzeAudio: "Analyze Audio",
    
    // Text Analysis
    textScan: "Text Scan",
    pasteOrTypeText: "Paste or type text for AI-generated content detection",
    enterTextHere: "Enter text here...",
    analyzeText: "Analyze Text",
    characterCount: "Character Count",
    wordCount: "Word Count",
    
    // Analysis Results
    analysisResults: "Analysis Results",
    authenticityScore: "Authenticity Score",
    confidence: "Confidence",
    detectionModules: "Detection Modules",
    riskLevel: "Risk Level",
    low: "Low",
    medium: "Medium",
    high: "High",
    critical: "Critical",
    
    // Detection Modules
    faceSwapDetection: "Face Swap Detection",
    lipSyncAnalysis: "Lip Sync Analysis",
    temporalConsistency: "Temporal Consistency",
    compressionArtifacts: "Compression Artifacts",
    metadataAnalysis: "Metadata Analysis",
    noisePatternAnalysis: "Noise Pattern Analysis",
    
    // AI Assistant
    howCanIHelp: "How can I help you?",
    askMeAnything: "Ask me anything about content verification...",
    thinking: "Thinking...",
    
    // History
    scanHistory: "Scan History",
    allScans: "All Scans",
    images: "Images",
    videos: "Videos",
    audio: "Audio",
    text: "Text",
    searchHistory: "Search history...",
    noResultsFound: "No results found",
    
    // Settings
    settings: "Settings",
    apiAuthentication: "API Authentication",
    systemThresholds: "System Thresholds",
    workspaceConfiguration: "Workspace Configuration",
    strictMode: "Strict Mode (Zero Tolerance)",
    ragSensitivity: "RAG Context Hallucination Sensitivity",
    workspaceName: "Workspace Name",
    saveChanges: "Save Changes",
    
    // Profile
    editProfile: "Edit Profile",
    filesAuthenticated: "Files Authenticated",
    currentPlan: "Current Plan",
    active: "Active",
    activeModulesBadges: "Active Modules & Badges",
    appLanguage: "App Language",
    highContrastMode: "High-Contrast Mode",
    
    // Common Actions
    cancel: "Cancel",
    confirm: "Confirm",
    save: "Save",
    delete: "Delete",
    edit: "Edit",
    view: "View",
    download: "Download",
    share: "Share",
    copy: "Copy",
    copied: "Copied!",
    
    // Status Messages
    loading: "Loading...",
    processing: "Processing...",
    complete: "Complete",
    error: "Error",
    success: "Success",
    
    // Subscription
    subscription: "Subscription",
    upgradePlan: "Upgrade Plan",
    currentUsage: "Current Usage",
    
    // Footer
    allRightsReserved: "All rights reserved",
    
    // Misc
    viewAll: "View All",
    learnMore: "Learn More",
    getStarted: "Get Started",
    tryNow: "Try Now",
  },
  zh: {
    // Navigation
    home: "首页",
    imageFakeDetect: "图像伪造检测",
    videoFakeDetect: "视频伪造检测",
    audioFakeDetect: "音频伪造检测",
    textFakeDetect: "文本伪造检测",
    detectionHistory: "检测历史",
    protocolSettings: "协议设置",
    
    // Protocol Status
    protocolStatus: "协议状态",
    activeSecure: "激活且安全",
    
    // Account
    personalAccount: "个人账户",
    
    // Header Actions
    aiAssistant: "AI 助手",
    privacyPolicy: "隐私政策",
    termsOfService: "服务条款",
    protocolDocs: "协议文档",
    
    // Page Titles
    videoForgeryAnalysis: "视频伪造分析",
    imageForgeryAnalysis: "图像伪造分析",
    audioForgeryAnalysis: "音频伪造分析",
    textForgeryAnalysis: "文本伪造分析",
    homeDashboard: "主控制台",
    
    // Home Dashboard
    welcomeBack: "欢迎回来。让我们验证您的数字媒体。",
    systemStatus: "系统状态",
    recentScans: "近期扫描",
    quickActions: "快捷操作",
    startNewScan: "开始新扫描",
    viewHistory: "查看历史",
    
    // Upload Components
    dragDropOrClick: "拖拽或点击上传",
    supportedFormats: "支持格式",
    maxFileSize: "最大文件大小",
    uploadFile: "上传文件",
    removeFile: "移除文件",
    analyzing: "分析中...",
    
    // Image Upload
    imageScan: "图像扫描",
    uploadImageForAnalysis: "上传图像进行 AI 驱动的伪造检测",
    selectImage: "选择图像",
    analyzeImage: "分析图像",
    
    // Video Upload
    videoScan: "视频扫描",
    uploadVideoForAnalysis: "上传视频进行深度伪造和篡改检测",
    selectVideo: "选择视频",
    analyzeVideo: "分析视频",
    
    // Audio Upload
    audioScan: "音频扫描",
    uploadAudioForAnalysis: "上传音频进行声音克隆和合成检测",
    selectAudio: "选择音频",
    analyzeAudio: "分析音频",
    
    // Text Analysis
    textScan: "文本扫描",
    pasteOrTypeText: "粘贴或输入文本进行 AI 生成内容检测",
    enterTextHere: "在此输入文本...",
    analyzeText: "分析文本",
    characterCount: "字符数",
    wordCount: "词数",
    
    // Analysis Results
    analysisResults: "分析结果",
    authenticityScore: "真实性评分",
    confidence: "置信度",
    detectionModules: "检测模块",
    riskLevel: "风险等级",
    low: "低",
    medium: "中",
    high: "高",
    critical: "严重",
    
    // Detection Modules
    faceSwapDetection: "换脸检测",
    lipSyncAnalysis: "唇形同步分析",
    temporalConsistency: "时间一致性",
    compressionArtifacts: "压缩伪影",
    metadataAnalysis: "元数据分析",
    noisePatternAnalysis: "噪声模式分析",
    
    // AI Assistant
    howCanIHelp: "我能帮您什么？",
    askMeAnything: "问我任何关于内容验证的问题...",
    thinking: "思考中...",
    
    // History
    scanHistory: "扫描历史",
    allScans: "全部扫描",
    images: "图像",
    videos: "视频",
    audio: "音频",
    text: "文本",
    searchHistory: "搜索历史...",
    noResultsFound: "未找到结果",
    
    // Settings
    settings: "设置",
    apiAuthentication: "API 认证",
    systemThresholds: "系统阈值",
    workspaceConfiguration: "工作区配置",
    strictMode: "严格模式（零容忍）",
    ragSensitivity: "RAG 上下文幻觉敏感度",
    workspaceName: "工作区名称",
    saveChanges: "保存更改",
    
    // Profile
    editProfile: "编辑资料",
    filesAuthenticated: "已验证文件",
    currentPlan: "当前计划",
    active: "激活",
    activeModulesBadges: "活动模块和徽章",
    appLanguage: "应用语言",
    highContrastMode: "高对比度模式",
    
    // Common Actions
    cancel: "取消",
    confirm: "确认",
    save: "保存",
    delete: "删除",
    edit: "编辑",
    view: "查看",
    download: "下载",
    share: "分享",
    copy: "复制",
    copied: "已复制！",
    
    // Status Messages
    loading: "加载中...",
    processing: "处理中...",
    complete: "完成",
    error: "错误",
    success: "成功",
    
    // Subscription
    subscription: "订阅",
    upgradePlan: "升级计划",
    currentUsage: "当前用量",
    
    // Footer
    allRightsReserved: "版权所有",
    
    // Misc
    viewAll: "查看全部",
    learnMore: "了解更多",
    getStarted: "开始使用",
    tryNow: "立即尝试",
  },
} as const

type Translations = typeof translations.en

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  toggleLang: () => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en")

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang)
  }, [])

  const toggleLang = useCallback(() => {
    setLangState((prev) => (prev === "en" ? "zh" : "en"))
  }, [])

  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
