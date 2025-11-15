import Image from "next/image";

interface AvatarProps {
  src?: string;
  alt: string;
  size?: "sm" | "md" | "lg" | "xl";
  fallback?: string;
  className?: string;
}

export function Avatar({
  src,
  alt,
  size = "md",
  fallback,
  className = "",
}: AvatarProps) {
  const sizeStyles = {
    sm: "w-8 h-8 text-xs",
    md: "w-12 h-12 text-sm",
    lg: "w-16 h-16 text-base",
    xl: "w-24 h-24 text-xl",
  };

  const getFallbackInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  if (!src) {
    return (
      <div
        className={`${sizeStyles[size]} rounded-full bg-golf-green text-white flex items-center justify-center font-semibold ${className}`}
      >
        {fallback || getFallbackInitials(alt)}
      </div>
    );
  }

  return (
    <div className={`${sizeStyles[size]} rounded-full overflow-hidden relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
