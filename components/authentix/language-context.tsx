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
    
    // Image Detection Viewer - Analysis Card
    analysisOptions: "Analysis Options",
    deepFaceAnalysis: "Deep Face Analysis",
    artifactDetection: "Artifact Detection",
    
    // Image Detection Viewer - AI Insights
    aiInsightsFaceDetection: "AI Insights & Face Detection",
    visionProEngine: "Vision-Pro Engine",
    faceA: "Face A",
    faceB: "Face B",
    manipulated: "Manipulated",
    authentic: "Authentic",
    
    // Image Detection Viewer - Metrics
    resolution: "Resolution",
    artifacts: "Artifacts",
    detection: "Detection",
    faceSwap: "Face Swap",
    flagged: "Flagged",
    
    // News Feed
    breakingNews: "Breaking News",
    liveAnalysisFeed: "Live Analysis Feed",
    
    // Overall Score
    overallAuthenticityScore: "Overall Authenticity Score",
    faceSwapDetected: "Face Swap Detected",
    
    // Action Buttons
    initializeImageScan: "Initialize Image Scan",
    initializeVideoScan: "Initialize Video Scan",
    initializeAudioScan: "Initialize Audio Scan",
    initializeTextScan: "Initialize Text Scan",
    
    // Video Detection
    subjectTracking: "Subject Tracking",
    frameByFrameAnalysis: "Frame-by-Frame Analysis",
    audioVideoSync: "Audio-Video Sync",
    temporalAnomalies: "Temporal Anomalies",
    timeline: "Timeline",
    subjects: "Subjects",
    primarySubject: "Primary Subject",
    secondarySubject: "Secondary Subject",
    suspiciousFrames: "Suspicious Frames",
    analysisSummary: "Analysis Summary",
    
    // Audio Detection
    voiceCloneDetection: "Voice Clone Detection",
    spectralAnalysis: "Spectral Analysis",
    voiceprintMatch: "Voiceprint Match",
    backgroundAnomalies: "Background Anomalies",
    waveformAnalysis: "Waveform Analysis",
    frequencySpectrum: "Frequency Spectrum",
    voiceSignature: "Voice Signature",
    
    // Text Detection
    aiGeneratedContent: "AI-Generated Content",
    plagiarismCheck: "Plagiarism Check",
    semanticAnalysis: "Semantic Analysis",
    styleConsistency: "Style Consistency",
    perplexityScore: "Perplexity Score",
    burstinessScore: "Burstiness Score",
    humanLikelihood: "Human Likelihood",
    
    // Common Labels
    enabled: "Enabled",
    disabled: "Disabled",
    on: "On",
    off: "Off",
    yes: "Yes",
    no: "No",
    none: "None",
    all: "All",
    selected: "Selected",
    
    // Time
    now: "Now",
    today: "Today",
    yesterday: "Yesterday",
    lastWeek: "Last Week",
    lastMonth: "Last Month",
    
    // Classification Grid Modules
    analysisModules: "Analysis Modules",
    selected: "selected",
    faceSwapAnalysis: "Face Swap Analysis",
    faceSwapDesc: "Deep neural face replacement detection",
    lipSyncDetection: "Lip Sync Detection",
    lipSyncDesc: "Audio-visual sync anomaly scanner",
    voiceCloneCheck: "Voice Clone Check",
    voiceCloneDesc: "Synthetic voice pattern recognition",
    contextualArtifacts: "Contextual Artifacts",
    contextualArtifactsDesc: "Environmental inconsistency detector",
    biometricMarkers: "Biometric Markers",
    biometricMarkersDesc: "Micro-expression & gaze analysis",
    gazeTracking: "Gaze Tracking",
    gazeTrackingDesc: "Eye movement pattern verification",
    neuralSignature: "Neural Signature",
    neuralSignatureDesc: "GAN fingerprint extraction",
    threatAssessment: "Threat Assessment",
    threatAssessmentDesc: "Risk level classification engine",
    
    // Media Player
    mediaPreview: "Media Preview",
    noMediaLoaded: "No media loaded",
    anomaly: "Anomaly",
    normal: "Normal",
    subjectA: "Subject A",
    subjectB: "Subject B",
    
    // Audio Detection Viewer
    audioWaveformAnalysis: "Audio Waveform Analysis",
    aiVoiceClone: "AI Voice Clone",
    acousticFingerprint: "Acoustic Fingerprint & Metadata",
    poweredBy: "Powered by White Ocean Engine",
    bitrate: "Bitrate",
    frequency: "Frequency",
    synthesis: "Synthesis",
    voiceSynthesisDetected: "Voice Synthesis Detected",
    likely: "Likely",
    
    // Scan Parameters
    scanParameters: "Scan Parameters",
    scanFullFile: "Scan Full File",
    timeWindowSelection: "Time-Window Selection",
    subjectFocus: "Subject Focus",
    allSubjects: "All Subjects",
    detectionSensitivity: "Detection Sensitivity",
    authorizeDetailedScan: "Authorize Detailed Frame Analysis",
    lowSensitivity: "Low",
    mediumSensitivity: "Medium",
    highSensitivity: "High",
    
    // Text Analysis Console
    advancedParameters: "Advanced Parameters",
    llmSyntaxPattern: "LLM Syntax Pattern Recognition",
    ragHallucinationCheck: "RAG/Context Hallucination Check",
    dropDocumentHere: "Drop document here",
    realTimeLinguisticMetrics: "Real-Time Linguistic Metrics",
    perplexity: "Perplexity (Predictability)",
    perplexityDesc: "Low perplexity indicates highly predictable, AI-like patterns",
    burstiness: "Burstiness (Sentence Variance)",
    burstinessDesc: "Low variance suggests uniform, machine-generated structure",
    vocabularyRichness: "Vocabulary Richness",
    vocabularyRichnessDesc: "Higher diversity indicates more natural language usage",
    
    // Text Forensic Viewer
    documentAnalysis: "Document Analysis — Debate Transcript",
    totalWords: "Total words",
    analyzedSegments: "Analyzed segments",
    aiGenerated: "AI Generated",
    probability: "Probability",
    detectedModel: "Detected Model",
    humanWritten: "Human Written",
    status: "Status",
    aiInterventionDetected: "AI Intervention Detected",
    humanAuthorshipScore: "Human Authorship Score",
    
    // Text Scanner (Video Page)
    textSegmentScanner: "Text Segment Scanner",
    aiGeneratedMarkers: "AI-Generated Markers",
    segments: "Segments",
    model: "Model",
    initializeWordLevelScan: "Initialize Word-Level Text Scan",
    
    // Text Analysis Bento
    pasteTextHere: "Paste your text here, or upload a document...",
    dropFileHere: "Drop file here",
    uploadFileLower: "Upload File",
    characters: "characters",
    likelyHumanWritten: "Likely Human-Written",
    noMajorAIPatterns: "No major AI patterns detected.",
    human: "Human",
    yourAnalyzedText: "Your analyzed text will appear here...",
    
    // Settings Bento Cards
    accountDetails: "Account Details",
    yourWorkspaceProfile: "Your workspace profile",
    environmentName: "Environment Name",
    currentRole: "Current Role",
    admin: "Admin",
    easyLoginSecurity: "Easy Login & Security",
    quickAccessOptions: "Quick access options",
    biometricLogin: "Biometric Login",
    faceTouchId: "Face / Touch ID",
    manageDevices: "Manage Devices",
    aiScanSensitivity: "AI Scan Sensitivity",
    detectionThresholdLevel: "Detection threshold level",
    lowDesc: "Minimal false positives, lower detection rate",
    standardDesc: "Balanced accuracy and coverage",
    strictDesc: "Maximum detection, higher sensitivity",
    standard: "Standard",
    strict: "Strict",
    developerKeys: "Developer Keys",
    apiAccessIntegrations: "API access for integrations",
    newKey: "New Key",
    alertPreferences: "Alert Preferences",
    notificationSettings: "Notification settings",
    emailReports: "Email Reports",
    realtimeWarnings: "Real-time Warnings",
    saveAllChanges: "Save All Changes",
    
    // History Stats
    totalScans30Days: "Total Scans (30 Days)",
    aiInterventionsDetected: "AI Interventions Detected",
    averageAuthenticityScore: "Average Authenticity Score",
    
    // History List Status Labels
    aiSynthesized: "AI Synthesized",
    manipulationDetected: "Manipulation Detected",
    
    // API Keys Section
    generateNewKey: "Generate New Key",
    manageApiKeys: "Manage keys for integrating AuthentiX core models into your applications.",
    adjustSensitivity: "Adjust the baseline sensitivity for the multi-modal detection models.",
    configureWorkspace: "Configure your workspace environment settings.",
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
    
    // Image Detection Viewer - Analysis Card
    analysisOptions: "分析选项",
    deepFaceAnalysis: "深度人脸分析",
    artifactDetection: "伪影检测",
    
    // Image Detection Viewer - AI Insights
    aiInsightsFaceDetection: "AI 洞察与人脸检测",
    visionProEngine: "Vision-Pro 引擎",
    faceA: "人脸 A",
    faceB: "人脸 B",
    manipulated: "已被篡改",
    authentic: "真实",
    
    // Image Detection Viewer - Metrics
    resolution: "分辨率",
    artifacts: "伪影数量",
    detection: "检测类型",
    faceSwap: "AI 换脸",
    flagged: "已标记",
    
    // News Feed
    breakingNews: "最新动态",
    liveAnalysisFeed: "实时分析源",
    
    // Overall Score
    overallAuthenticityScore: "综合真实性评分",
    faceSwapDetected: "检测到面部替换",
    
    // Action Buttons
    initializeImageScan: "启动图像扫描",
    initializeVideoScan: "启动视频扫描",
    initializeAudioScan: "启动音频扫描",
    initializeTextScan: "启动文本扫描",
    
    // Video Detection
    subjectTracking: "主体追踪",
    frameByFrameAnalysis: "逐帧分析",
    audioVideoSync: "音视频同步",
    temporalAnomalies: "时间异常",
    timeline: "时间线",
    subjects: "主体",
    primarySubject: "主要主体",
    secondarySubject: "次要主体",
    suspiciousFrames: "可疑帧",
    analysisSummary: "分析摘要",
    
    // Audio Detection
    voiceCloneDetection: "声音克隆检测",
    spectralAnalysis: "频谱分析",
    voiceprintMatch: "声纹匹配",
    backgroundAnomalies: "背景异常",
    waveformAnalysis: "波形分析",
    frequencySpectrum: "频率频谱",
    voiceSignature: "声纹签名",
    
    // Text Detection
    aiGeneratedContent: "AI 生成内容",
    plagiarismCheck: "抄袭检测",
    semanticAnalysis: "语义分析",
    styleConsistency: "风格一致性",
    perplexityScore: "困惑度评分",
    burstinessScore: "突发性评分",
    humanLikelihood: "人类可能性",
    
    // Common Labels
    enabled: "已启用",
    disabled: "已禁用",
    on: "开",
    off: "关",
    yes: "是",
    no: "否",
    none: "无",
    all: "全部",
    selected: "已选择",
    
    // Time
    now: "现在",
    today: "今天",
    yesterday: "昨天",
    lastWeek: "上周",
    lastMonth: "上月",
    
    // Classification Grid Modules
    analysisModules: "分析模块",
    selected: "已选择",
    faceSwapAnalysis: "换脸分析",
    faceSwapDesc: "深度神经网络面部替换检测",
    lipSyncDetection: "唇形同步检测",
    lipSyncDesc: "音视频同步异常扫描器",
    voiceCloneCheck: "声音克隆检测",
    voiceCloneDesc: "合成语音模式识别",
    contextualArtifacts: "上下文伪影",
    contextualArtifactsDesc: "环境不一致性检测器",
    biometricMarkers: "生物识别标记",
    biometricMarkersDesc: "微表情与注视分析",
    gazeTracking: "注视追踪",
    gazeTrackingDesc: "眼动模式验证",
    neuralSignature: "神经特征",
    neuralSignatureDesc: "GAN 指纹提取",
    threatAssessment: "威胁评估",
    threatAssessmentDesc: "风险等级分类引擎",
    
    // Media Player
    mediaPreview: "媒体预览",
    noMediaLoaded: "未加载媒体",
    anomaly: "异常",
    normal: "正常",
    subjectA: "主体 A",
    subjectB: "主体 B",
    
    // Audio Detection Viewer
    audioWaveformAnalysis: "音频波形分析",
    aiVoiceClone: "AI 声音克隆",
    acousticFingerprint: "声纹指纹与元数据",
    poweredBy: "由 White Ocean 引擎提供支持",
    bitrate: "比特率",
    frequency: "频率",
    synthesis: "合成可能性",
    voiceSynthesisDetected: "检测到声音合成",
    likely: "可能性",
    
    // Scan Parameters
    scanParameters: "扫描参数",
    scanFullFile: "扫描完整文件",
    timeWindowSelection: "时间窗口选择",
    subjectFocus: "主体聚焦",
    allSubjects: "所有主体",
    detectionSensitivity: "检测灵敏度",
    authorizeDetailedScan: "授权详细帧分析",
    lowSensitivity: "低",
    mediumSensitivity: "中",
    highSensitivity: "高",
    
    // Text Analysis Console
    advancedParameters: "高级参数",
    llmSyntaxPattern: "LLM 语法模式识别",
    ragHallucinationCheck: "RAG/上下文幻觉检测",
    dropDocumentHere: "拖放文档至此",
    realTimeLinguisticMetrics: "实时语言学指标",
    perplexity: "困惑度（可预测性）",
    perplexityDesc: "低困惑度表示高度可预测的 AI 生成模式",
    burstiness: "突发性（句式变化）",
    burstinessDesc: "低变化性表明句式结构均匀，可能为机器生成",
    vocabularyRichness: "词汇丰富度",
    vocabularyRichnessDesc: "多样性越高表示语言使用越自然",
    
    // Text Forensic Viewer
    documentAnalysis: "文档分析 — 辩论记录",
    totalWords: "总词数",
    analyzedSegments: "已分析片段",
    aiGenerated: "AI 生成",
    probability: "概率",
    detectedModel: "检测到的模型",
    humanWritten: "人类撰写",
    status: "状态",
    aiInterventionDetected: "检测到 AI 干预",
    humanAuthorshipScore: "人类著作评分",
    
    // Text Scanner (Video Page)
    textSegmentScanner: "文本片段扫描器",
    aiGeneratedMarkers: "AI 生成标记",
    segments: "片段数",
    model: "模型",
    initializeWordLevelScan: "启动词级文本扫描",
    
    // Text Analysis Bento
    pasteTextHere: "在此粘贴文本，或上传文档...",
    dropFileHere: "拖放文件至此",
    uploadFileLower: "上传文件",
    characters: "字符",
    likelyHumanWritten: "可能为人类撰写",
    noMajorAIPatterns: "未检测到明显的 AI 生成模式。",
    human: "人类",
    yourAnalyzedText: "分析后的文本将显示在这里...",
    
    // Settings Bento Cards
    accountDetails: "账户详情",
    yourWorkspaceProfile: "您的工作区资料",
    environmentName: "环境名称",
    currentRole: "当前角色",
    admin: "管理员",
    easyLoginSecurity: "便捷登录与安全",
    quickAccessOptions: "快速访问选项",
    biometricLogin: "生物识别登录",
    faceTouchId: "面容 / 触控 ID",
    manageDevices: "管理设备",
    aiScanSensitivity: "AI 扫描灵敏度",
    detectionThresholdLevel: "检测阈值级别",
    lowDesc: "最小误报，较低检测率",
    standardDesc: "平衡的准确性和覆盖率",
    strictDesc: "最大检测，更高灵敏度",
    standard: "标准",
    strict: "严格",
    developerKeys: "开发者密钥",
    apiAccessIntegrations: "用于集成的 API 访问",
    newKey: "新建密钥",
    alertPreferences: "提醒偏好",
    notificationSettings: "通知设置",
    emailReports: "邮件报告",
    realtimeWarnings: "实时警告",
    saveAllChanges: "保存所有更改",
    
    // History Stats
    totalScans30Days: "总扫描次数（30 天）",
    aiInterventionsDetected: "检测到 AI 干预",
    averageAuthenticityScore: "平均真实性评分",
    
    // History List Status Labels
    aiSynthesized: "AI 合成",
    manipulationDetected: "检测到篡改",
    
    // API Keys Section
    generateNewKey: "生成新密钥",
    manageApiKeys: "管理用于将 AuthentiX 核心模型集成到您的应用程序中的密钥。",
    adjustSensitivity: "调整多模态检测模型的基线灵敏度。",
    configureWorkspace: "配置您的工作区环境设置。",
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
