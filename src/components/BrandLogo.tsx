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
 * High-definition vector lockup of the Air Q Solutions wordmark + tagline
 * without any circular emblem.
 */
export const AirQFullLogoSVG: React.FC<{
  className?: string;
  variant?: 'dark' | 'light' | 'white' | 'original';
}> = ({ className = '', variant = 'dark' }) => {
  const isLightOrWhite = variant === 'light' || variant === 'white';
  const wordmarkColor = isLightOrWhite ? '#ffffff' : '#4a4d52';
  const taglineColor = isLightOrWhite ? '#c2e8ff' : '#0f172a';

  return (
    <svg
      viewBox="0 0 290 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-auto h-full ${className}`}
    >
      {/* ================= 1. EXACT "AIR Q SOLUTIONS" WORDMARK ================= */}
      <g transform="translate(4, 10) scale(0.45)" fill={wordmarkColor}>
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

      {/* ================= 2. "HVAC PROJECT MANAGEMENT GROUP" ================= */}
      <g transform="translate(4, 54)">
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

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
  className = '',
}) => {
  // Height classes for SVG
  const wordmarkHeights = {
    sm: 'h-3.5 sm:h-4',
    md: 'h-4 sm:h-[18px]',
    lg: 'h-5 sm:h-6',
    xl: 'h-6 sm:h-7',
  };

  const isLightOrWhite = variant === 'light' || variant === 'white';
  const wordmarkColorClass = isLightOrWhite ? 'text-white' : 'text-[#4a4d52]';
  const subtitleText = isLightOrWhite ? 'text-[#c2e8ff]/90' : 'text-[#0f172a]';

  return (
    <div className={`flex items-center select-none group ${className}`}>
      {/* Exact "AIR Q SOLUTIONS" Wordmark + Subtitle */}
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
  );
};

export default BrandLogo;
