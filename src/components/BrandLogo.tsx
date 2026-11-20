import React from 'react';

interface BrandLogoProps {
  variant?: 'dark' | 'light' | 'white' | 'original';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
  iconOnly?: boolean;
}

/**
 * Exact vector wordmark of "AIR Q SOLUTIONS" traced pixel-for-pixel from the
 * provided corporate identity card typeface.
 */
export const AirQWordmark: React.FC<{
  className?: string;
  inline?: boolean;
  color?: string;
  ariaLabel?: string;
}> = ({
  className = '',
  inline = false,
  color = 'currentColor',
  ariaLabel = 'AIR Q SOLUTIONS',
}) => {
  const svgElement = (
    <svg
      viewBox="0 0 622 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={ariaLabel}
      className={
        inline
          ? `inline-block h-[0.88em] w-auto align-[-0.08em] shrink-0 ${className}`
          : `w-auto h-full block shrink-0 ${className}`
      }
    >
      <g fill={color}>
        {/* A */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 62 2 L 65 4 L 65 53 L 57 53 L 57 35 L 34 35 L 13 53 L 0 53 Z M 57 16 L 43 27 L 57 27 Z"
        />
        {/* I */}
        <path d="M 73 2 L 82 2 L 82 53 L 73 53 Z" />
        {/* R */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 90 2 L 128 2 L 130 5 L 130 9 L 111 28 L 134 52 L 121 52 L 103 34 L 99 34 L 99 52 L 90 52 Z M 99 10 L 99 23 L 104 23 L 118 10 Z"
        />
        {/* Q (chamfered frame + protruding diagonal tail) */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 201 2 L 221 2 L 221 41 L 203 53 L 174 53 L 174 25 Z M 203 11 L 183 28 L 183 44 L 201 44 L 212 35 L 212 11 Z"
        />
        <path d="M 201 34 L 225 46 L 220 54 L 197 41 Z" />
        {/* S */}
        <path d="M 292 0 L 297 5 L 277 22 L 297 43 L 297 53 L 265 53 L 265 44 L 286 44 L 266 24 L 266 20 Z" />
        {/* O */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 329 6 L 348 6 L 348 38 L 330 53 L 305 53 L 305 26 Z M 331 14 L 314 29 L 314 44 L 327 44 L 340 34 L 340 14 Z"
        />
        {/* L */}
        <path d="M 365 5 L 371 5 L 364 13 L 364 44 L 383 44 L 383 53 L 355 53 L 355 14 Z" />
        {/* U */}
        <path d="M 398 5 L 403 5 L 401 10 L 401 43 L 416 43 L 416 10 L 424 4 L 425 5 L 425 53 L 391 53 L 391 12 Z" />
        {/* T */}
        <path d="M 437 4 L 472 4 L 472 12 L 459 12 L 459 53 L 450 53 L 450 12 L 430 12 Z" />
        {/* I */}
        <path d="M 477 5 L 486 5 L 486 53 L 477 53 Z" />
        {/* O */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 517 5 L 536 5 L 536 38 L 518 53 L 493 53 L 493 26 Z M 519 14 L 502 29 L 502 44 L 515 44 L 528 34 L 528 14 Z"
        />
        {/* N */}
        <path d="M 543 5 L 545 5 L 573 32 L 573 5 L 578 5 L 581 8 L 581 52 L 573 52 L 573 42 L 551 20 L 551 52 L 543 52 Z" />
        {/* S */}
        <path d="M 615 2 L 620 6 L 600 23 L 620 43 L 620 53 L 588 53 L 596 44 L 609 44 L 590 25 L 590 21 Z" />
      </g>
    </svg>
  );

  if (inline) {
    return (
      <span className="inline-flex items-baseline align-baseline" aria-label={ariaLabel}>
        {svgElement}
      </span>
    );
  }

  return svgElement;
};

/**
 * High-definition vector rendition of the Air Q Solutions logo:
 * 1. Vortex swirl emblem with aerodynamic eye aperture, cobalt-navy upper wave, teal mid-curve & emerald green swoosh
 * 2. "AIR Q SOLUTIONS" in the exact angular corporate display typeface from the identity card
 * 3. "HVAC PROJECT MANAGEMENT GROUP" tagline in tracked sans-serif
 */
export const AirQFullLogoSVG: React.FC<{
  className?: string;
  variant?: 'dark' | 'light' | 'white' | 'original';
}> = ({ className = '', variant = 'dark' }) => {
  const uniqueId = React.useId().replace(/:/g, '');
  const isLightOrWhite = variant === 'light' || variant === 'white';
  const wordmarkColor = isLightOrWhite ? '#ffffff' : '#4a4d52';
  const taglineColor = isLightOrWhite ? '#c2e8ff' : '#0f172a';

  return (
    <svg
      viewBox="0 0 420 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-auto h-full ${className}`}
    >
      <defs>
        {/* Navy/Cobalt Blue Wave Gradient */}
        <linearGradient id={`blueGrad-${uniqueId}`} x1="40" y1="15" x2="110" y2="70" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#004399" />
          <stop offset="40%" stopColor="#022e85" />
          <stop offset="80%" stopColor="#001d68" />
          <stop offset="100%" stopColor="#00144d" />
        </linearGradient>

        {/* Teal Body Gradient */}
        <linearGradient id={`tealGrad-${uniqueId}`} x1="10" y1="30" x2="60" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#004f6c" />
          <stop offset="40%" stopColor="#006c88" />
          <stop offset="80%" stopColor="#00455a" />
          <stop offset="100%" stopColor="#003140" />
        </linearGradient>

        {/* Emerald Green Bottom Swoosh */}
        <linearGradient id={`greenGrad-${uniqueId}`} x1="15" y1="70" x2="110" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#004d47" />
          <stop offset="30%" stopColor="#007e69" />
          <stop offset="65%" stopColor="#00a880" />
          <stop offset="90%" stopColor="#00c39a" />
          <stop offset="100%" stopColor="#2ae0b3" />
        </linearGradient>

        {/* Top Highlight Curve */}
        <linearGradient id={`highlightGrad-${uniqueId}`} x1="20" y1="35" x2="70" y2="15" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#77d1ff" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* ================= 1. THE VORTEX SWIRL EMBLEM ================= */}
      <g transform="translate(10, 8) scale(0.92)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 12 48 
             C 14 30, 26 18, 44 12 
             C 68 5, 100 9, 118 30 
             C 130 44, 131 64, 122 84 
             C 114 78, 109 72, 100 75 
             C 110 61, 108 43, 93 30 
             C 79 17, 56 17, 41 29 
             C 30 37, 25 50, 25 63 
             C 25 79, 35 95, 51 102 
             C 72 112, 99 107, 125 83 
             C 113 105, 88 119, 62 116 
             C 35 113, 16 94, 11 67 
             C 10 60, 10 55, 12 48 Z"
          fill={`url(#tealGrad-${uniqueId})`}
        />
        <path
          d="M 62 11 
             C 86 11, 110 24, 120 47 
             C 126 64, 123 78, 118 86 
             C 113 78, 108 73, 99 76 
             C 108 61, 105 43, 91 31 
             C 81 22, 68 15, 54 14 
             C 57 12, 59 11, 62 11 Z"
          fill={`url(#blueGrad-${uniqueId})`}
        />
        <path
          d="M 112 56 
             C 118 60, 122 69, 115 88 
             C 111 81, 108 73, 98 75 
             C 106 69, 109 63, 112 56 Z"
          fill="#001a5e"
        />
        <path
          d="M 11 67 
             C 15 88, 31 107, 57 115 
             C 81 120, 107 107, 124 83 
             C 110 103, 85 114, 63 111 
             C 40 109, 23 93, 18 74 
             C 15 67, 14 59, 14 54 
             C 11 58, 10 62, 11 67 Z"
          fill={`url(#greenGrad-${uniqueId})`}
        />
        <path
          d="M 11 49 
             C 18 39, 33 30, 51 28 
             C 47 30, 38 33, 29 37 
             C 20 42, 14 47, 11 49 Z"
          fill="#ffffff"
          opacity="0.9"
        />
        <ellipse
          cx="28"
          cy="40"
          rx="5.5"
          ry="3.5"
          transform="rotate(-28 28 40)"
          fill="#ffffff"
        />
        <ellipse
          cx="28"
          cy="40"
          rx="3"
          ry="1.9"
          transform="rotate(-28 28 40)"
          fill="#003247"
        />
        <path
          d="M 26 32 
             C 38 23, 59 18, 80 19 
             C 63 20, 45 25, 31 34 
             C 28 33, 27 32, 26 32 Z"
          fill={`url(#highlightGrad-${uniqueId})`}
        />
      </g>

      {/* ================= 2. EXACT "AIR Q SOLUTIONS" WORDMARK ================= */}
      <g transform="translate(132, 42) scale(0.45)" fill={wordmarkColor}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 62 2 L 65 4 L 65 53 L 57 53 L 57 35 L 34 35 L 13 53 L 0 53 Z M 57 16 L 43 27 L 57 27 Z"
        />
        <path d="M 73 2 L 82 2 L 82 53 L 73 53 Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 90 2 L 128 2 L 130 5 L 130 9 L 111 28 L 134 52 L 121 52 L 103 34 L 99 34 L 99 52 L 90 52 Z M 99 10 L 99 23 L 104 23 L 118 10 Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 201 2 L 221 2 L 221 41 L 203 53 L 174 53 L 174 25 Z M 203 11 L 183 28 L 183 44 L 201 44 L 212 35 L 212 11 Z"
        />
        <path d="M 201 34 L 225 46 L 220 54 L 197 41 Z" />
        <path d="M 292 0 L 297 5 L 277 22 L 297 43 L 297 53 L 265 53 L 265 44 L 286 44 L 266 24 L 266 20 Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 329 6 L 348 6 L 348 38 L 330 53 L 305 53 L 305 26 Z M 331 14 L 314 29 L 314 44 L 327 44 L 340 34 L 340 14 Z"
        />
        <path d="M 365 5 L 371 5 L 364 13 L 364 44 L 383 44 L 383 53 L 355 53 L 355 14 Z" />
        <path d="M 398 5 L 403 5 L 401 10 L 401 43 L 416 43 L 416 10 L 424 4 L 425 5 L 425 53 L 391 53 L 391 12 Z" />
        <path d="M 437 4 L 472 4 L 472 12 L 459 12 L 459 53 L 450 53 L 450 12 L 430 12 Z" />
        <path d="M 477 5 L 486 5 L 486 53 L 477 53 Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 517 5 L 536 5 L 536 38 L 518 53 L 493 53 L 493 26 Z M 519 14 L 502 29 L 502 44 L 515 44 L 528 34 L 528 14 Z"
        />
        <path d="M 543 5 L 545 5 L 573 32 L 573 5 L 578 5 L 581 8 L 581 52 L 573 52 L 573 42 L 551 20 L 551 52 L 543 52 Z" />
        <path d="M 615 2 L 620 6 L 600 23 L 620 43 L 620 53 L 588 53 L 596 44 L 609 44 L 590 25 L 590 21 Z" />
      </g>

      {/* ================= 3. "HVAC PROJECT MANAGEMENT GROUP" ================= */}
      <g transform="translate(132, 86)">
        <text
          x="0"
          y="0"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
          fontSize="11.5"
          fontWeight="800"
          letterSpacing="0.06em"
          fill={taglineColor}
        >
          HVAC PROJECT MANAGEMENT GROUP
        </text>
      </g>
    </svg>
  );
};

export const AirQBrochureIcon: React.FC<{
  className?: string;
  sizeClass?: string;
}> = ({ className = '', sizeClass = 'w-10 h-10' }) => {
  const uniqueId = React.useId().replace(/:/g, '');

  return (
    <svg
      viewBox="0 0 140 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizeClass} shrink-0 drop-shadow-sm ${className}`}
    >
      <defs>
        {/* Navy/Cobalt Blue Wave Gradient */}
        <linearGradient id={`blueGradIcon-${uniqueId}`} x1="40" y1="15" x2="110" y2="70" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#004399" />
          <stop offset="40%" stopColor="#022e85" />
          <stop offset="80%" stopColor="#001d68" />
          <stop offset="100%" stopColor="#00144d" />
        </linearGradient>

        {/* Teal Body Gradient */}
        <linearGradient id={`tealGradIcon-${uniqueId}`} x1="10" y1="30" x2="60" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#004f6c" />
          <stop offset="40%" stopColor="#006c88" />
          <stop offset="80%" stopColor="#00455a" />
          <stop offset="100%" stopColor="#003140" />
        </linearGradient>

        {/* Emerald Green Bottom Swoosh */}
        <linearGradient id={`greenGradIcon-${uniqueId}`} x1="15" y1="70" x2="110" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#004d47" />
          <stop offset="30%" stopColor="#007e69" />
          <stop offset="65%" stopColor="#00a880" />
          <stop offset="90%" stopColor="#00c39a" />
          <stop offset="100%" stopColor="#2ae0b3" />
        </linearGradient>
      </defs>

      {/* The Exact Vortex Swirl */}
      <g transform="translate(6, 4)">
        {/* Main Ring */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 12 48 
             C 14 30, 26 18, 44 12 
             C 68 5, 100 9, 118 30 
             C 130 44, 131 64, 122 84 
             C 114 78, 109 72, 100 75 
             C 110 61, 108 43, 93 30 
             C 79 17, 56 17, 41 29 
             C 30 37, 25 50, 25 63 
             C 25 79, 35 95, 51 102 
             C 72 112, 99 107, 125 83 
             C 113 105, 88 119, 62 116 
             C 35 113, 16 94, 11 67 
             C 10 60, 10 55, 12 48 Z"
          fill={`url(#tealGradIcon-${uniqueId})`}
        />

        {/* Top-Right Blue Wave */}
        <path
          d="M 62 11 
             C 86 11, 110 24, 120 47 
             C 126 64, 123 78, 118 86 
             C 113 78, 108 73, 99 76 
             C 108 61, 105 43, 91 31 
             C 81 22, 68 15, 54 14 
             C 57 12, 59 11, 62 11 Z"
          fill={`url(#blueGradIcon-${uniqueId})`}
        />

        {/* Blue Notch */}
        <path
          d="M 112 56 
             C 118 60, 122 69, 115 88 
             C 111 81, 108 73, 98 75 
             C 106 69, 109 63, 112 56 Z"
          fill="#001a5e"
        />

        {/* Green Swoosh */}
        <path
          d="M 11 67 
             C 15 88, 31 107, 57 115 
             C 81 120, 107 107, 124 83 
             C 110 103, 85 114, 63 111 
             C 40 109, 23 93, 18 74 
             C 15 67, 14 59, 14 54 
             C 11 58, 10 62, 11 67 Z"
          fill={`url(#greenGradIcon-${uniqueId})`}
        />

        {/* White Teardrop Eye Aperture */}
        <ellipse
          cx="28"
          cy="40"
          rx="5.5"
          ry="3.5"
          transform="rotate(-28 28 40)"
          fill="#ffffff"
        />

        {/* Eye Pupil */}
        <ellipse
          cx="28"
          cy="40"
          rx="3"
          ry="1.9"
          transform="rotate(-28 28 40)"
          fill="#003247"
        />
      </g>
    </svg>
  );
};

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
  className = '',
  iconOnly = false,
}) => {
  // Height classes for SVG
  const wordmarkHeights = {
    sm: 'h-3.5 sm:h-4',
    md: 'h-4 sm:h-[18px]',
    lg: 'h-5 sm:h-6',
    xl: 'h-6 sm:h-7',
  };

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
    xl: 'w-14 h-14',
  };

  const isLightOrWhite = variant === 'light' || variant === 'white';
  const wordmarkColorClass = isLightOrWhite ? 'text-white' : 'text-[#4a4d52]';
  const subtitleText = isLightOrWhite ? 'text-[#c2e8ff]/90' : 'text-[#0f172a]';

  if (iconOnly) {
    return (
      <AirQBrochureIcon 
        sizeClass={iconSizes[size]} 
        className={className} 
      />
    );
  }

  return (
    <div className={`flex items-center select-none group ${className}`}>
      {/* Complete High-Resolution Exact Lockup */}
      <div className="flex items-center gap-2.5 sm:gap-3">
        {/* 1. Exact Vortex Swirl */}
        <AirQBrochureIcon 
          sizeClass={iconSizes[size]} 
          className="transition-transform duration-300 group-hover:scale-105"
        />

        {/* 2. Exact "AIR Q SOLUTIONS" Wordmark + Subtitle */}
        <div className="flex flex-col justify-center">
          <div className={`${wordmarkHeights[size]} ${wordmarkColorClass} flex items-center`}>
            <AirQWordmark />
          </div>

          {/* Bottom Tagline: HVAC PROJECT MANAGEMENT GROUP */}
          {showSubtitle && (
            <div className={`font-sans font-extrabold uppercase tracking-[0.09em] text-[7px] sm:text-[8px] md:text-[9px] mt-1 leading-none ${subtitleText}`}>
              HVAC PROJECT MANAGEMENT GROUP
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrandLogo;
