import { useState, useEffect } from 'react'
import FeatureToggle from './FeatureToggle'

interface OptimizationPanelProps {
  features: {
    mouseAcceleration: boolean
    enhancedPrecision: boolean
    aiDragSmoothing: boolean
    inputLagReduction: boolean
    dpiOptimization: boolean
    hardwareAcceleration: boolean
    responseOptimization: boolean
    microMovementFilter: boolean
    velocityPrediction: boolean
    adaptiveSensitivity: boolean
    pollRateBoost: boolean
    freeFireMode: boolean
    timerResolution: boolean
    gpuScheduling: boolean
    gameMode: boolean
  }
  settings: {
    smoothingIntensity: number
    sensitivityMultiplier: number
    responseTime: number
    predictionStrength: number
  }
  isActive: boolean
  toggleFeature: (feature: keyof OptimizationPanelProps['features']) => void
  updateSetting: (setting: keyof OptimizationPanelProps['settings'], value: number) => void
}

export default function OptimizationPanel({
  features,
  settings,
  isActive,
  toggleFeature,
  updateSetting
}: OptimizationPanelProps) {
  const [lastToggled, setLastToggled] = useState<string | null>(null)

  const handleToggle = (feature: keyof typeof features, label: string) => {
    if (isActive) return
    toggleFeature(feature)
    setLastToggled(label)
    setTimeout(() => setLastToggled(null), 2000)
  }

  useEffect(() => {
    // Clear notification when system is activated
    if (isActive) setLastToggled(null)
  }, [isActive])

  return (
    <div className="space-y-6 relative">
      {/* Feature Toggle Notification */}
      {lastToggled && !isActive && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-black px-6 py-3 rounded-lg shadow-2xl font-semibold animate-slide-in flex items-center gap-3">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          {lastToggled} toggled!
        </div>
      )}

      {/* Mouse Optimization Section */}
      <div className="bg-gradient-to-br from-[#14141a] to-[#1a1a22] rounded-xl border border-gray-800/50 overflow-hidden shadow-2xl">
        <div className="bg-gradient-to-r from-[#1a1a22] to-[#14141a] px-6 py-4 border-b border-gray-800/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-200">Mouse & Pointer Optimization</h2>
              <p className="text-xs text-gray-500 mt-0.5">Advanced cursor control and precision tuning</p>
            </div>
          </div>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <FeatureToggle
            label="Disable Mouse Acceleration"
            description="Remove Windows pointer acceleration for 1:1 input mapping"
            icon="🎯"
            enabled={features.mouseAcceleration}
            onChange={() => handleToggle('mouseAcceleration', 'Mouse Acceleration')}
            disabled={isActive}
            badge="Recommended"
          />
          <FeatureToggle
            label="Enhanced Pointer Precision"
            description="Optimize DPI scaling and sub-pixel accuracy"
            icon="🔍"
            enabled={features.enhancedPrecision}
            onChange={() => toggleFeature('enhancedPrecision')}
            disabled={isActive}
          />
          <FeatureToggle
            label="DPI Auto-Optimization"
            description="Automatically calibrate DPI settings for your hardware"
            icon="⚙️"
            enabled={features.dpiOptimization}
            onChange={() => toggleFeature('dpiOptimization')}
            disabled={isActive}
          />
          <FeatureToggle
            label="Adaptive Sensitivity"
            description="Dynamic sensitivity adjustment based on movement speed"
            icon="📊"
            enabled={features.adaptiveSensitivity}
            onChange={() => toggleFeature('adaptiveSensitivity')}
            disabled={isActive}
            badge="Pro"
          />
        </div>
      </div>

      {/* Gaming Optimization Section */}
      <div className="bg-gradient-to-br from-[#14141a] to-[#1a1a22] rounded-xl border border-gray-800/50 overflow-hidden shadow-2xl">
        <div className="bg-gradient-to-r from-[#1a1a22] to-[#14141a] px-6 py-4 border-b border-gray-800/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500/20 to-red-600/20 border border-red-500/30 flex items-center justify-center">
              <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-200">Gaming Performance</h2>
              <p className="text-xs text-gray-500 mt-0.5">Free Fire & competitive gaming optimizations</p>
            </div>
          </div>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FeatureToggle
            label="AI Drag Smoothing"
            description="Intelligent aim smoothing using predictive algorithms (Raw Accel style)"
            icon="🤖"
            enabled={features.aiDragSmoothing}
            onChange={() => handleToggle('aiDragSmoothing', 'AI Drag Smoothing')}
            disabled={isActive}
            badge="AI Powered"
            highlight
          />
          <FeatureToggle
            label="Free Fire Mode"
            description="Optimized settings specifically for Free Fire mobile emulator"
            icon="🔥"
            enabled={features.freeFireMode}
            onChange={() => handleToggle('freeFireMode', 'Free Fire Mode')}
            disabled={isActive}
            badge="Gaming"
            highlight
          />
            <FeatureToggle
              label="Micro-Movement Filter"
              description="Eliminate hand shake and micro-jitter during aiming"
              icon="🎮"
              enabled={features.microMovementFilter}
              onChange={() => toggleFeature('microMovementFilter')}
              disabled={isActive}
            />
            <FeatureToggle
              label="Velocity Prediction"
              description="Predict target movement for smoother tracking"
              icon="🚀"
              enabled={features.velocityPrediction}
              onChange={() => toggleFeature('velocityPrediction')}
              disabled={isActive}
              badge="Advanced"
            />
          </div>

          {/* AI Drag Smoothing Settings */}
          {features.aiDragSmoothing && (
            <div className="mt-6 pt-6 border-t border-gray-800/50 space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-200">AI Drag Configuration</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-gray-300">Smoothing Intensity</label>
                    <span className="text-sm font-mono text-[#d4af37] bg-[#d4af37]/10 px-2 py-1 rounded font-bold">
                      {settings.smoothingIntensity}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={settings.smoothingIntensity}
                    onChange={(e) => updateSetting('smoothingIntensity', Number(e.target.value))}
                    disabled={isActive}
                    className="w-full h-2 bg-gray-700/50 rounded-lg appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed
                      [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 
                      [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r 
                      [&::-webkit-slider-thumb]:from-[#d4af37] [&::-webkit-slider-thumb]:to-[#b8941f]
                      [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-[#d4af37]/30
                      [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full 
                      [&::-moz-range-thumb]:bg-[#d4af37] [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-600 mt-1">
                    <span>Raw</span>
                    <span>Ultra Smooth</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-gray-300">Prediction Strength</label>
                    <span className="text-sm font-mono text-[#d4af37] bg-[#d4af37]/10 px-2 py-1 rounded font-bold">
                      {settings.predictionStrength}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={settings.predictionStrength}
                    onChange={(e) => updateSetting('predictionStrength', Number(e.target.value))}
                    disabled={isActive}
                    className="w-full h-2 bg-gray-700/50 rounded-lg appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed
                      [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 
                      [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r 
                      [&::-webkit-slider-thumb]:from-[#d4af37] [&::-webkit-slider-thumb]:to-[#b8941f]
                      [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-[#d4af37]/30
                      [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full 
                      [&::-moz-range-thumb]:bg-[#d4af37] [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-600 mt-1">
                    <span>Conservative</span>
                    <span>Aggressive</span>
                  </div>
                </div>
              </div>

              <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-4 mt-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-sm">
                    <div className="text-purple-300 font-semibold">AI Drag Algorithm</div>
                    <div className="text-purple-300/70 mt-1">
                      Uses machine learning to analyze your mouse movements and apply intelligent smoothing. 
                      Higher smoothing = more stable aim, lower = more responsive. Prediction helps with tracking moving targets.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* System Optimization Section */}
      <div className="bg-gradient-to-br from-[#14141a] to-[#1a1a22] rounded-xl border border-gray-800/50 overflow-hidden shadow-2xl">
        <div className="bg-gradient-to-r from-[#1a1a22] to-[#14141a] px-6 py-4 border-b border-gray-800/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 flex items-center justify-center">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-200">System Performance</h2>
              <p className="text-xs text-gray-500 mt-0.5">Low-level input and hardware optimization</p>
            </div>
          </div>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <FeatureToggle
            label="Input Lag Reduction"
            description="Minimize system input latency and buffering delays"
            icon="⚡"
            enabled={features.inputLagReduction}
            onChange={() => toggleFeature('inputLagReduction')}
            disabled={isActive}
            badge="Recommended"
          />
          <FeatureToggle
            label="Hardware Acceleration"
            description="Enable GPU-accelerated cursor rendering"
            icon="💻"
            enabled={features.hardwareAcceleration}
            onChange={() => toggleFeature('hardwareAcceleration')}
            disabled={isActive}
          />
          <FeatureToggle
            label="Response Optimization"
            description="Optimize USB polling rate and response time"
            icon="🔄"
            enabled={features.responseOptimization}
            onChange={() => toggleFeature('responseOptimization')}
            disabled={isActive}
          />
          <FeatureToggle
            label="Polling Rate Boost"
            description="Force maximum USB polling rate (1000Hz)"
            icon="📡"
            enabled={features.pollRateBoost}
            onChange={() => handleToggle('pollRateBoost', 'Polling Rate Boost')}
            disabled={isActive}
            badge="Performance"
          />
          <FeatureToggle
            label="Timer Resolution (1ms)"
            description="Set system timer to 0.5ms for ultra-low latency"
            icon="⏱️"
            enabled={features.timerResolution}
            onChange={() => handleToggle('timerResolution', 'Timer Resolution')}
            disabled={isActive}
            badge="Recommended"
          />
          <FeatureToggle
            label="Windows Game Mode"
            description="Enable Windows Game Mode for better gaming performance"
            icon="🎮"
            enabled={features.gameMode}
            onChange={() => handleToggle('gameMode', 'Game Mode')}
            disabled={isActive}
          />
          <FeatureToggle
            label="GPU Hardware Scheduling"
            description="Enable GPU hardware-accelerated scheduling (Windows 10+)"
            icon="🖥️"
            enabled={features.gpuScheduling}
            onChange={() => handleToggle('gpuScheduling', 'GPU Scheduling')}
            disabled={isActive}
            badge="Advanced"
          />
        </div>
      </div>
    </div>
  )
}
