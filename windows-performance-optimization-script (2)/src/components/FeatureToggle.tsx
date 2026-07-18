interface FeatureToggleProps {
  label: string
  description: string
  icon: string
  enabled: boolean
  onChange: () => void
  disabled?: boolean
  badge?: string
  highlight?: boolean
}

export default function FeatureToggle({
  label,
  description,
  icon,
  enabled,
  onChange,
  disabled = false,
  badge,
  highlight = false
}: FeatureToggleProps) {
  return (
    <div className={`group relative bg-gradient-to-br from-[#1a1a22]/50 to-[#14141a]/50 rounded-xl p-4 border transition-all duration-300 ${
      highlight 
        ? 'border-[#d4af37]/30 hover:border-[#d4af37]/50' 
        : 'border-gray-800/50 hover:border-gray-700/50'
    } ${disabled ? 'opacity-60' : 'hover:shadow-lg hover:shadow-black/20'}`}>
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-all duration-300 ${
          enabled 
            ? 'bg-gradient-to-br from-[#d4af37]/20 to-[#b8941f]/20 border border-[#d4af37]/30 shadow-lg shadow-[#d4af37]/10' 
            : 'bg-gray-800/30 border border-gray-700/50'
        }`}>
          {icon}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">
                  {label}
                </h3>
                {badge && (
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                    badge === 'Recommended' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : badge === 'Pro' || badge === 'Advanced'
                      ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                      : badge === 'AI Powered'
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      : badge === 'Gaming'
                      ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                      : 'bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/30'
                  }`}>
                    {badge}
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Toggle Switch */}
            <button
              onClick={onChange}
              disabled={disabled}
              className={`relative flex-shrink-0 w-14 h-7 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:ring-offset-2 focus:ring-offset-[#14141a] active:scale-95 ${
                disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:scale-105'
              } ${
                enabled
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#b8941f] shadow-lg shadow-[#d4af37]/30'
                  : 'bg-gray-700/50 hover:bg-gray-700/70'
              }`}
            >
              {/* Switch Handle */}
              <div className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
                enabled ? 'translate-x-7' : 'translate-x-0'
              }`}>
                {enabled ? (
                  <svg className="w-4 h-4 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>

              {/* Labels */}
              <div className="flex items-center justify-between px-2 h-full pointer-events-none">
                <span className={`text-[9px] font-bold transition-opacity duration-300 ${
                  enabled ? 'opacity-0' : 'opacity-100 text-gray-400'
                }`}>
                  OFF
                </span>
                <span className={`text-[9px] font-bold transition-opacity duration-300 ${
                  enabled ? 'opacity-100 text-black' : 'opacity-0'
                }`}>
                  ON
                </span>
              </div>
            </button>
          </div>

          {/* Active Indicator */}
          {enabled && (
            <div className="mt-2 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse shadow-sm shadow-[#d4af37]/50" />
              <span className="text-[10px] text-[#d4af37] font-semibold uppercase tracking-wider">
                Active
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/[0.02] group-hover:to-transparent transition-all duration-300 pointer-events-none" />
    </div>
  )
}
