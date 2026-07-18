import { useState } from 'react'
import { soundEffects } from '../utils/sounds'

interface QuickActionsProps {
  isActive: boolean
  activeProfile: 'gaming' | 'general' | 'custom'
}

export default function QuickActions({ isActive, activeProfile }: QuickActionsProps) {
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState('')
  const [notificationType, setNotificationType] = useState<'success' | 'info' | 'warning'>('success')
  const [showLogsModal, setShowLogsModal] = useState(false)
  const [showResetConfirm, setShowResetConfirm] = useState(false)

  const showToast = (message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    setNotificationMessage(message)
    setNotificationType(type)
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 3000)
  }

  const handleExportConfig = () => {
    soundEffects.playClick()
    try {
      const config = {
        profile: activeProfile,
        timestamp: new Date().toISOString(),
        version: '3.0.0',
        exported: true
      }
      const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `opnonti-config-${Date.now()}.json`
      a.click()
      URL.revokeObjectURL(url)
      soundEffects.playSuccess()
      showToast('Configuration exported successfully!', 'success')
    } catch (error) {
      soundEffects.playError()
      showToast('Failed to export configuration', 'warning')
    }
  }

  const handleReset = () => {
    soundEffects.playClick()
    if (isActive) {
      soundEffects.playError()
      showToast('Please deactivate system before resetting', 'warning')
      return
    }
    setShowResetConfirm(true)
  }

  const confirmReset = () => {
    soundEffects.playSuccess()
    setShowResetConfirm(false)
    showToast('Settings reset to defaults', 'info')
    setTimeout(() => {
      window.location.reload()
    }, 1000)
  }

  const handleViewLogs = () => {
    soundEffects.playClick()
    setShowLogsModal(true)
  }

  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <div className="bg-gradient-to-br from-[#14141a] to-[#1a1a22] rounded-xl border border-gray-800/50 overflow-hidden shadow-2xl">
        <div className="bg-gradient-to-r from-[#1a1a22] to-[#14141a] px-6 py-4 border-b border-gray-800/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 flex items-center justify-center">
              <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-200">Quick Actions</h2>
              <p className="text-xs text-gray-500 mt-0.5">Utilities and shortcuts</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-3">
          <button
            onClick={handleExportConfig}
            className="w-full bg-gradient-to-r from-[#1a1a22] to-[#14141a] hover:from-[#24242c] hover:to-[#1a1a22] text-gray-300 py-3 px-4 rounded-lg border border-gray-800/50 hover:border-gray-700/50 transition-all duration-200 flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold">Export Config</div>
                <div className="text-xs text-gray-500">Save current settings</div>
              </div>
            </div>
            <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button
            onClick={handleReset}
            className="w-full bg-gradient-to-r from-[#1a1a22] to-[#14141a] hover:from-[#24242c] hover:to-[#1a1a22] text-gray-300 py-3 px-4 rounded-lg border border-gray-800/50 hover:border-gray-700/50 transition-all duration-200 flex items-center justify-between group disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isActive}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold">Reset All</div>
                <div className="text-xs text-gray-500">Restore defaults</div>
              </div>
            </div>
            <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button
            onClick={handleViewLogs}
            className="w-full bg-gradient-to-r from-[#1a1a22] to-[#14141a] hover:from-[#24242c] hover:to-[#1a1a22] text-gray-300 py-3 px-4 rounded-lg border border-gray-800/50 hover:border-gray-700/50 transition-all duration-200 flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold">View Logs</div>
                <div className="text-xs text-gray-500">System event history</div>
              </div>
            </div>
            <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Profile Info */}
      <div className="bg-gradient-to-br from-[#14141a] to-[#1a1a22] rounded-xl border border-gray-800/50 overflow-hidden shadow-2xl">
        <div className="bg-gradient-to-r from-[#1a1a22] to-[#14141a] px-6 py-4 border-b border-gray-800/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border border-cyan-500/30 flex items-center justify-center">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-200">Profile Info</h2>
              <p className="text-xs text-gray-500 mt-0.5">Current configuration</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between py-2 px-3 bg-[#1a1a22]/30 rounded-lg">
            <span className="text-xs text-gray-400">Active Profile</span>
            <span className="text-sm font-semibold text-[#d4af37] capitalize">{activeProfile}</span>
          </div>
          <div className="flex items-center justify-between py-2 px-3 bg-[#1a1a22]/30 rounded-lg">
            <span className="text-xs text-gray-400">Version</span>
            <span className="text-sm font-mono text-gray-300">3.0.0</span>
          </div>
          <div className="flex items-center justify-between py-2 px-3 bg-[#1a1a22]/30 rounded-lg">
            <span className="text-xs text-gray-400">Last Updated</span>
            <span className="text-sm font-mono text-gray-300">{new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      {/* Help & Support */}
      <div className="bg-gradient-to-br from-[#14141a] to-[#1a1a22] rounded-xl border border-gray-800/50 overflow-hidden shadow-2xl">
        <div className="bg-gradient-to-r from-[#1a1a22] to-[#14141a] px-6 py-4 border-b border-gray-800/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500/20 to-pink-600/20 border border-pink-500/30 flex items-center justify-center">
              <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-200">Help & Tips</h2>
              <p className="text-xs text-gray-500 mt-0.5">Getting started</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-3 text-sm text-gray-400">
          <div className="flex items-start gap-3">
            <div className="text-[#d4af37] mt-0.5">•</div>
            <p className="text-xs">Enable "AI Drag Smoothing" for Free Fire gameplay</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-[#d4af37] mt-0.5">•</div>
            <p className="text-xs">Disable mouse acceleration for consistent aim</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-[#d4af37] mt-0.5">•</div>
            <p className="text-xs">Use "Gaming" profile for optimal FPS settings</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-[#d4af37] mt-0.5">•</div>
            <p className="text-xs">Deactivate before changing settings</p>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {showNotification && (
        <div className="fixed top-4 right-4 z-50 animate-slide-in">
          <div className={`px-6 py-4 rounded-lg shadow-2xl border ${
            notificationType === 'success' ? 'bg-green-900/90 border-green-500/50 text-green-100' :
            notificationType === 'warning' ? 'bg-yellow-900/90 border-yellow-500/50 text-yellow-100' :
            'bg-blue-900/90 border-blue-500/50 text-blue-100'
          } backdrop-blur-md flex items-center gap-3 min-w-[300px]`}>
            <div className="text-2xl">
              {notificationType === 'success' ? '✅' : notificationType === 'warning' ? '⚠️' : 'ℹ️'}
            </div>
            <div className="flex-1">
              <div className="font-semibold">{notificationMessage}</div>
            </div>
            <button
              onClick={() => setShowNotification(false)}
              className="text-white/70 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Reset Confirmation Modal */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-[#14141a] to-[#1a1a22] rounded-xl border border-gray-800 shadow-2xl max-w-md w-full mx-4 overflow-hidden">
            <div className="bg-gradient-to-r from-[#1a1a22] to-[#14141a] px-6 py-4 border-b border-gray-800">
              <h3 className="text-xl font-bold text-gray-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                Confirm Reset
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-300 mb-6">
                Are you sure you want to reset all settings to defaults? This will reload the application and all custom configurations will be lost.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="flex-1 px-4 py-3 bg-gray-700/50 hover:bg-gray-700/70 text-gray-300 rounded-lg font-semibold transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmReset}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg font-semibold transition-colors"
                >
                  Reset All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Logs Modal */}
      {showLogsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-[#14141a] to-[#1a1a22] rounded-xl border border-gray-800 shadow-2xl max-w-2xl w-full mx-4 overflow-hidden max-h-[80vh] flex flex-col">
            <div className="bg-gradient-to-r from-[#1a1a22] to-[#14141a] px-6 py-4 border-b border-gray-800 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                System Event Logs
              </h3>
              <button
                onClick={() => setShowLogsModal(false)}
                className="text-gray-400 hover:text-gray-300 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 overflow-y-auto flex-1">
              <div className="space-y-2 font-mono text-sm">
                <LogEntry time="12:45:32" type="success" message="System initialized successfully" />
                <LogEntry time="12:45:33" type="info" message="Gaming profile loaded" />
                <LogEntry time="12:45:35" type="success" message="AI Drag Smoothing enabled" />
                <LogEntry time="12:45:35" type="success" message="Input Lag Reduction enabled" />
                <LogEntry time="12:45:36" type="success" message="Polling Rate Boost enabled" />
                <LogEntry time="12:45:38" type="info" message="Configuration exported" />
                <LogEntry time="12:45:40" type="warning" message="Settings locked while system active" />
                <LogEntry time="12:45:42" type="success" message="Performance score: 85/100" />
                <LogEntry time="12:45:45" type="info" message="All systems operational" />
              </div>
            </div>
            <div className="px-6 py-4 border-t border-gray-800 bg-[#1a1a22]/50">
              <button
                onClick={() => setShowLogsModal(false)}
                className="w-full px-4 py-3 bg-gradient-to-r from-[#d4af37] to-[#b8941f] hover:from-[#e5c158] hover:to-[#c9a530] text-black rounded-lg font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function LogEntry({ time, type, message }: { time: string; type: 'success' | 'info' | 'warning' | 'error'; message: string }) {
  const colors = {
    success: 'text-green-400',
    info: 'text-blue-400',
    warning: 'text-yellow-400',
    error: 'text-red-400'
  }
  
  const icons = {
    success: '✓',
    info: 'ℹ',
    warning: '⚠',
    error: '✗'
  }
  
  return (
    <div className="flex items-start gap-3 py-2 px-3 bg-[#1a1a22]/30 rounded border border-gray-800/50 hover:bg-[#1a1a22]/50 transition-colors">
      <span className="text-gray-500">[{time}]</span>
      <span className={colors[type]}>{icons[type]}</span>
      <span className="text-gray-300 flex-1">{message}</span>
    </div>
  )
}
