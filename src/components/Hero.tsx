import { ProgressiveButton } from '@/components/ui/ProgressiveButton';
import SectionTitle from '@/components/ui/SectionTitle';
import Image from 'next/image';
import { FaPaw } from "react-icons/fa";
import { PiBoneFill } from "react-icons/pi";
import { cn } from '@/lib/utils';


interface HeroProps {
    tagline?: string;
    title?: string;
    description?: string;
    primaryButtonText?: string;
    primaryButtonHref?: string;
    secondaryButtonText?: string;
    secondaryButtonHref?: string;
    backgroundColor?: string;
    popColor?: string;
}

export default function HeroComponent({
    tagline,
    title = '',
    description,
    primaryButtonText = 'Get Started',
    primaryButtonHref = '#',
    secondaryButtonText = 'Learn More',
    secondaryButtonHref = '#',
    backgroundColor = '#ffffff',
    popColor,
}: HeroProps) {
    return (
        <section
            className="relative w-full min-h-[80vh] flex items-center bg-white pb-10"
            style={{ backgroundColor }}
            role="region"
            aria-label="Mosaic hero section"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-center pt-12">
                    {/* Left Column - Content */}
                    <div className="flex flex-col space-y-8 order-2 lg:order-1">
                        <SectionTitle
                            tagline={tagline}
                            title={title}
                            description={description}
                            taglineClassName="tracking-widest text-xs lg:text-sm"
                            titleClassName="text-2xl lg:text-4xl"
                            descriptionClassName="text-base lg:text-lg"
                            alignLeft
                            popColor={popColor}
                        />

                        <div className="flex flex-row justify-center lg:justify-start gap-4 mt-4">
                            <ProgressiveButton
                                href={primaryButtonHref}
                                variant="default"
                                size="lg"
                                className={cn("rounded-md w-fit text-white", 
                                    typeof popColor === 'string' && popColor.startsWith('#') 
                                        ? '' 
                                        : `bg-${popColor}`
                                )}
                                style={typeof popColor === 'string' && popColor.startsWith('#') 
                                    ? { backgroundColor: popColor } 
                                    : undefined}
                                hoverEffect="reveal-icon"
                                icon={<FaPaw />}
                            >
                                {primaryButtonText}
                            </ProgressiveButton>

                            <ProgressiveButton
                                href={secondaryButtonHref}
                                variant="outline"
                                size="lg"
                                className="rounded-md w-fit"
                                hoverEffect="reveal-icon"
                                icon={<PiBoneFill />}
                                iconColor="#ffffff"
                            >
                                {secondaryButtonText}
                            </ProgressiveButton>
                        </div>
                    </div>

                    {/* Right Column - Mosaic Grid */}
                    <div className="relative w-full grid grid-cols-[1.2fr,1fr] gap-6 max-w-[400px] lg:max-w-none mx-auto order-1 lg:order-2">
                        {/* Vertical Image */}
                        <div className="relative w-full h-full rounded-2xl overflow-hidden flex items-stretch">
                            <div className="relative w-full flex items-center" style={{ aspectRatio: '0.85/1' }}>
                                <Image
                                    src="/images/stock/vert-dog.png"
                                    alt="Team member portrait"
                                    width={400}
                                    height={800}
                                    className="object-contain w-full h-full object-right"
                                    priority
                                    quality={100}
                                />
                            </div>
                        </div>

                        {/* Square Images Column */}
                        <div className="flex flex-col gap-6">
                            <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                                <Image
                                    src="/images/stock/square-dog1.png"
                                    alt="Team member portrait"
                                    fill
                                    className="object-cover object-top"
                                    priority
                                />
                            </div>
                            <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                                <Image
                                    src="/images/stock/square-dog2.png"
                                    alt="Team member portrait"
                                    fill
                                    className="object-cover object-top"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 