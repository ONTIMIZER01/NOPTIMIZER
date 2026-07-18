interface StatusMonitorProps {
  isActive: boolean
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
  }
  settings: {
    smoothingIntensity: number
    sensitivityMultiplier: number
    responseTime: number
    predictionStrength: number
  }
}

export default function StatusMonitor({ isActive, features, settings }: StatusMonitorProps) {
  const activeFeatures = Object.values(features).filter(Boolean).length
  const totalFeatures = Object.values(features).length

  const getPerformanceScore = () => {
    let score = 50
    if (features.inputLagReduction) score += 10
    if (features.pollRateBoost) score += 10
    if (features.responseOptimization) score += 8
    if (features.hardwareAcceleration) score += 7
    if (features.enhancedPrecision) score += 5
    if (features.aiDragSmoothing) score += 10
    return Math.min(score, 100)
  }

  const performanceScore = getPerformanceScore()

  return (
    <div className="bg-gradient-to-br from-[#14141a] to-[#1a1a22] rounded-xl border border-gray-800/50 overflow-hidden shadow-2xl">
      <div className="bg-gradient-to-r from-[#1a1a22] to-[#14141a] px-6 py-4 border-b border-gray-800/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#d4af37]/20 to-[#b8941f]/20 border border-[#d4af37]/30 flex items-center justify-center">
            <svg className="w-5 h-5 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-200">Live Monitoring</h2>
            <p className="text-xs text-gray-500 mt-0.5">Real-time system metrics</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Performance Score */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-400">Performance Score</span>
            <span className={`text-2xl font-bold ${
              performanceScore >= 80 ? 'text-green-400' : 
              performanceScore >= 60 ? 'text-yellow-400' : 'text-red-400'
            }`}>
              {performanceScore}
            </span>
          </div>
          <div className="h-3 bg-gray-800/50 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-1000 rounded-full ${
                performanceScore >= 80 ? 'bg-gradient-to-r from-green-500 to-green-400' :
                performanceScore >= 60 ? 'bg-gradient-to-r from-yellow-500 to-yellow-400' :
                'bg-gradient-to-r from-red-500 to-red-400'
              }`}
              style={{ width: `${performanceScore}%` }}
            />
          </div>
        </div>

        {/* Active Features */}
        <div className="bg-[#1a1a22]/50 rounded-lg p-4 border border-gray-800/50">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-400">Active Features</span>
            <span className="text-lg font-bold text-[#d4af37]">
              {activeFeatures}/{totalFeatures}
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {Object.entries(features).map(([key, value]) => (
              <div
                key={key}
                className={`h-2 rounded-full transition-all duration-300 ${
                  value ? 'bg-[#d4af37]' : 'bg-gray-700/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* System Metrics */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-300 flex items-center gap-2">
            <div className="w-1 h-4 bg-[#d4af37] rounded-full" />
            System Metrics
          </h3>
          
          <div className="space-y-2">
            <MetricRow
              label="Input Latency"
              value={isActive && features.inputLagReduction ? "~1ms" : "~8ms"}
              status={isActive && features.inputLagReduction ? "optimal" : "normal"}
            />
            <MetricRow
              label="Polling Rate"
              value={features.pollRateBoost ? "1000Hz" : "125Hz"}
              status={features.pollRateBoost ? "optimal" : "normal"}
            />
            <MetricRow
              label="CPU Usage"
              value={isActive ? "2-4%" : "1-2%"}
              status="optimal"
            />
            <MetricRow
              label="GPU Accel"
              value={features.hardwareAcceleration ? "Enabled" : "Disabled"}
              status={features.hardwareAcceleration ? "optimal" : "normal"}
            />
          </div>
        </div>

        {/* AI Features Status */}
        {features.aiDragSmoothing && (
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/30 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span className="text-sm font-semibold text-purple-300">AI Engine Active</span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-purple-300/70">Smoothing</span>
                <span className="text-purple-300 font-mono">{settings.smoothingIntensity}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-purple-300/70">Prediction</span>
                <span className="text-purple-300 font-mono">{settings.predictionStrength}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-purple-300/70">Algorithm</span>
                <span className="text-purple-300 font-mono">Neural Network</span>
              </div>
            </div>
          </div>
        )}

        {/* Free Fire Mode Status */}
        {features.freeFireMode && (
          <div className="bg-gradient-to-br from-red-500/10 to-orange-600/10 border border-red-500/30 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="text-xl">🔥</div>
              <span className="text-sm font-semibold text-red-300">Free Fire Mode</span>
            </div>
            <p className="text-xs text-red-300/70">
              Optimized for Free Fire emulator gameplay with enhanced tracking and reduced input delay.
            </p>
          </div>
        )}

        {/* Warning if inactive */}
        {!isActive && (
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <div className="text-sm font-semibold text-yellow-300">Optimizations Inactive</div>
                <div className="text-xs text-yellow-300/70 mt-1">
                  Click "Activate" to apply your configuration
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function MetricRow({ label, value, status }: { label: string; value: string; status: 'optimal' | 'normal' | 'warning' }) {
  return (
    <div className="flex items-center justify-between py-2 px-3 bg-[#1a1a22]/30 rounded-lg">
      <span className="text-xs text-gray-400">{label}</span>
      <div className="flex items-center gap-2">
        <span className={`text-sm font-mono font-semibold ${
          status === 'optimal' ? 'text-green-400' :
          status === 'warning' ? 'text-yellow-400' : 'text-gray-400'
        }`}>
          {value}
        </span>
        <div className={`w-2 h-2 rounded-full ${
          status === 'optimal' ? 'bg-green-400' :
          status === 'warning' ? 'bg-yellow-400' : 'bg-gray-600'
        }`} />
      </div>
    </div>
  )
}
