import Image from 'next/image';
import Link from 'next/link';

interface MediaProps {
  className?: string;
}

const Media: React.FC<MediaProps> = ({ className = '' }) => {
  const socialLinks = [
    {
      name: 'Github',
      href: 'https://github.com',
      icon: '/icons/github.svg',
      ariaLabel: 'Visit my GitHub profile'
    },
    {
      name: 'Dribbble',
      href: 'https://dribbble.com',
      icon: '/icons/dribbble.svg',
      ariaLabel: 'Visit my Dribbble profile'
    },
    {
      name: 'Figma',
      href: 'https://figma.com',
      icon: '/icons/figma.svg',
      ariaLabel: 'Visit my Figma profile'
    }
  ];

  return (
    <>
      {/* Desktop Media Section */}
      <div className={`hidden lg:flex flex-col items-center gap-[8px] w-[35px] bg-[#282C33] ${className}`}>
        {/* Vertical Line Separator */}
        <div className="w-[1px] h-[191px] bg-[#ABB2BF]" aria-hidden="true"></div>
        
        {/* Social Media Icons */}
        <div className="flex flex-col items-center gap-[8px]">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[32px] h-[32px] flex items-center justify-center hover:opacity-80 hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#C778DD] focus:ring-offset-2 focus:ring-offset-[#282C33] rounded-sm"
              aria-label={link.ariaLabel}
            >
              <Image
                src={link.icon}
                alt={`${link.name} icon`}
                width={32}
                height={32}
                className="w-auto h-auto max-w-[23px] max-h-[23px] filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-200"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Media Section */}
      <div className="lg:hidden flex justify-center items-center gap-[16px] mt-6 mb-4">
        {/* Horizontal Line Separator */}
        <div className="flex-1 h-[1px] bg-[#ABB2BF]" aria-hidden="true"></div>
        
        {/* Social Media Icons */}
        <div className="flex items-center gap-[12px] px-4">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[40px] h-[40px] flex items-center justify-center hover:opacity-80 hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#C778DD] focus:ring-offset-2 focus:ring-offset-[#282C33] rounded-sm"
              aria-label={link.ariaLabel}
            >
              <Image
                src={link.icon}
                alt={`${link.name} icon`}
                width={32}
                height={32}
                className="w-auto h-auto max-w-[24px] max-h-[24px] filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-200"
              />
            </Link>
          ))}
        </div>
        
        {/* Horizontal Line Separator */}
        <div className="flex-1 h-[1px] bg-[#ABB2BF]" aria-hidden="true"></div>
      </div>
    </>
  );
};

export default Media;