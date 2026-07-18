import { useState, useEffect } from 'react'
import OptimizationPanel from './components/OptimizationPanel'
import StatusMonitor from './components/StatusMonitor'
import QuickActions from './components/QuickActions'
import { soundEffects } from './utils/sounds'

function App() {
  const [isActive, setIsActive] = useState(false)
  const [activeProfile, setActiveProfile] = useState<'gaming' | 'general' | 'custom'>('gaming')
  const [showProfileChange, setShowProfileChange] = useState(false)
  const [showActivationEffect, setShowActivationEffect] = useState(false)
  
  // Feature states
  const [features, setFeatures] = useState({
    mouseAcceleration: false,
    enhancedPrecision: true,
    aiDragSmoothing: false,
    inputLagReduction: true,
    dpiOptimization: false,
    hardwareAcceleration: true,
    responseOptimization: true,
    microMovementFilter: false,
    velocityPrediction: false,
    adaptiveSensitivity: false,
    pollRateBoost: true,
    freeFireMode: false,
    timerResolution: true,
    gpuScheduling: false,
    gameMode: true,
  })

  const [settings, setSettings] = useState({
    smoothingIntensity: 75,
    sensitivityMultiplier: 1.0,
    responseTime: 1,
    predictionStrength: 50,
  })

  useEffect(() => {
    // Apply profile presets
    if (activeProfile === 'gaming') {
      setFeatures(prev => ({
        ...prev,
        aiDragSmoothing: true,
        inputLagReduction: true,
        responseOptimization: true,
        pollRateBoost: true,
      }))
    } else if (activeProfile === 'general') {
      setFeatures(prev => ({
        ...prev,
        enhancedPrecision: true,
        hardwareAcceleration: true,
      }))
    }
  }, [activeProfile])

  const toggleFeature = (feature: keyof typeof features) => {
    if (isActive) return // Prevent changes when active
    soundEffects.playToggle()
    setFeatures(prev => ({ ...prev, [feature]: !prev[feature] }))
  }

  const updateSetting = (setting: keyof typeof settings, value: number) => {
    if (isActive) return
    // Play subtle click for slider
    if (value % 10 === 0) soundEffects.playClick()
    setSettings(prev => ({ ...prev, [setting]: value }))
  }

  const handleActivate = () => {
    const newState = !isActive
    
    // Start animation
    setShowActivationEffect(true)
    
    // Play sound
    if (newState) {
      soundEffects.playActivate()
      soundEffects.playSuccess()
    } else {
      soundEffects.playDeactivate()
    }
    
    // Animate state change
    setTimeout(() => {
      setIsActive(newState)
      
      // Show notification
      if (newState) {
        console.log('✅ Optimizations activated!')
        // In a real app, this would apply system changes
      } else {
        console.log('⏹ Optimizations deactivated - restored to default settings')
      }
      
      setTimeout(() => {
        setShowActivationEffect(false)
      }, 500)
    }, 300)
  }

  const applyProfile = (profile: 'gaming' | 'general' | 'custom') => {
    if (isActive) return
    
    // Play sound
    soundEffects.playClick()
    
    setActiveProfile(profile)
    
    // Show feedback
    setShowProfileChange(true)
    setTimeout(() => setShowProfileChange(false), 2000)
    
    // Apply profile-specific presets
    if (profile === 'gaming') {
      setFeatures({
        mouseAcceleration: true,
        enhancedPrecision: true,
        aiDragSmoothing: true,
        inputLagReduction: true,
        dpiOptimization: false,
        hardwareAcceleration: true,
        responseOptimization: true,
        microMovementFilter: true,
        velocityPrediction: false,
        adaptiveSensitivity: false,
        pollRateBoost: true,
        freeFireMode: false,
        timerResolution: true,
        gpuScheduling: true,
        gameMode: true,
      })
      setSettings({
        smoothingIntensity: 70,
        sensitivityMultiplier: 1.0,
        responseTime: 1,
        predictionStrength: 45,
      })
    } else if (profile === 'general') {
      setFeatures({
        mouseAcceleration: false,
        enhancedPrecision: true,
        aiDragSmoothing: false,
        inputLagReduction: false,
        dpiOptimization: false,
        hardwareAcceleration: true,
        responseOptimization: false,
        microMovementFilter: false,
        velocityPrediction: false,
        adaptiveSensitivity: false,
        pollRateBoost: false,
        freeFireMode: false,
        timerResolution: false,
        gpuScheduling: false,
        gameMode: false,
      })
      setSettings({
        smoothingIntensity: 50,
        sensitivityMultiplier: 1.0,
        responseTime: 5,
        predictionStrength: 30,
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0c] via-[#0f0f12] to-[#0a0a0c] text-gray-200 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #d4af37 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient orbs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-[#d4af37] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-[#d4af37] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      {/* Activation Effect Overlay */}
      {showActivationEffect && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <div className={`absolute inset-0 ${isActive ? 'bg-[#d4af37]' : 'bg-gray-800'} opacity-0 animate-flash`} />
        </div>
      )}

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-gray-800/50 bg-[#0a0a0c]/90 backdrop-blur-md">
          <div className="max-w-[1600px] mx-auto px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#b8941f] flex items-center justify-center shadow-lg shadow-[#d4af37]/20">
                  <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-[#d4af37] tracking-wider">
                    OPNONTI PRO
                  </h1>
                  <p className="text-sm text-gray-400 mt-0.5">
                    Advanced Input Optimization Suite
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                {/* Profile Selector */}
                <div className="relative flex gap-2 bg-[#14141a] rounded-lg p-1 border border-gray-800">
                  {(['gaming', 'general', 'custom'] as const).map((profile) => (
                    <button
                      key={profile}
                      onClick={() => applyProfile(profile)}
                      disabled={isActive}
                      className={`px-4 py-2 rounded text-sm font-semibold transition-all duration-200 ${
                        activeProfile === profile
                          ? 'bg-[#d4af37] text-black shadow-lg scale-105'
                          : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/50 disabled:opacity-50'
                      } disabled:cursor-not-allowed active:scale-95`}
                    >
                      {profile.charAt(0).toUpperCase() + profile.slice(1)}
                    </button>
                  ))}
                  {showProfileChange && (
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#d4af37] text-black px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap shadow-lg animate-slide-in">
                      Profile changed to {activeProfile.charAt(0).toUpperCase() + activeProfile.slice(1)}! ✓
                    </div>
                  )}
                </div>

                {/* Status Badge */}
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-xs text-gray-500 uppercase tracking-wider">System Status</div>
                    <div className={`text-sm font-bold ${isActive ? 'text-[#d4af37]' : 'text-gray-500'}`}>
                      {isActive ? 'OPTIMIZED' : 'STANDARD'}
                    </div>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-[#d4af37] animate-pulse shadow-lg shadow-[#d4af37]/50' : 'bg-gray-600'}`} />
                </div>

                {/* Master Toggle */}
                <button
                  onClick={handleActivate}
                  className={`px-8 py-3 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg active:scale-95 ${
                    isActive
                      ? 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-red-600/30 hover:shadow-red-600/50'
                      : 'bg-gradient-to-r from-[#d4af37] to-[#b8941f] hover:from-[#e5c158] hover:to-[#c9a530] text-black shadow-[#d4af37]/30 hover:shadow-[#d4af37]/50 hover:scale-105'
                  }`}
                >
                  {isActive ? '⏹ Deactivate' : '▶ Activate'}
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-[1600px] mx-auto px-8 py-8">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Left Column - Main Features */}
            <div className="xl:col-span-2 space-y-6">
              <OptimizationPanel
                features={features}
                settings={settings}
                isActive={isActive}
                toggleFeature={toggleFeature}
                updateSetting={updateSetting}
              />
            </div>

            {/* Right Column - Status & Quick Actions */}
            <div className="space-y-6">
              <StatusMonitor
                isActive={isActive}
                features={features}
                settings={settings}
              />
              <QuickActions
                isActive={isActive}
                activeProfile={activeProfile}
              />
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-800/50 bg-[#0a0a0c]/50 mt-12">
          <div className="max-w-[1600px] mx-auto px-8 py-6">
            <div className="flex items-center justify-between text-sm">
              <div className="text-gray-500">
                <span className="text-[#d4af37] font-semibold">Opnonti Pro</span> • Professional Input Optimization Engine v3.0
              </div>
              <div className="flex items-center gap-6 text-gray-500">
                <span>Latency: <span className="text-green-400 font-mono">~1ms</span></span>
                <span>Polling: <span className="text-[#d4af37] font-mono">1000Hz</span></span>
                <span>DPI: <span className="text-blue-400 font-mono">Auto</span></span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
