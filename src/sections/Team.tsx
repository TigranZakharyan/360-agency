import ScrollReveal from '@/components/ScrollReveal';
import React from 'react';

// Placeholder image URLs for the circular portraits.
const TEAM_MEMBER_1 = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?fit=crop&w=180&h=180&q=80"; 
const TEAM_MEMBER_3 = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=180&h=180&q=80";

/**
 * Team Component: Renders a visually distinct layout for 'Our Team' and 'About Us' sections.
 */
const Team = () => {
    
    // Helper component for the circular images (pink border effect)
    const CircularImage = ({ src, alt, sizeClasses, positionClasses }) => (
        <div 
            className={`
                ${positionClasses} 
                ${sizeClasses} 
                rounded-full 
                bg-pink-200 
                p-2 
                shadow-xl 
                overflow-hidden 
                transition-all duration-500 hover:scale-[1.03]
            `}
        >
            <img 
                src={src} 
                alt={alt} 
                className="w-full h-full object-cover rounded-full" 
            />
        </div>
    );

    // Helper component for the text content blocks (unchanged)
    const TeamContent = ({ title, text, showFreepik, alignment }) => {
        const titleColor = "text-rose-500";
        const textAlign = alignment === 'right' ? 'text-right' : 'text-left';
        
        return (
            <div className={`
                space-y-4 
                ${alignment === 'right' ? 'lg:ml-auto flex justify-end flex-col items-end ' : 'lg:mr-auto'} 
                ${textAlign} 
                z-10
                px-4 
            `}>
                <h2 className={`text-4xl font-bold ${titleColor} mb-2`}>{title}</h2>
                <p className="text-gray-600 leading-relaxed max-w-lg">
                    {text}
                </p>
                {showFreepik && (
                    <p className="text-sm text-gray-400 italic pt-2">
                        Images from Freepik (Concept Mockup)
                    </p>
                )}
                <button
                    className={`
                        mt-4 
                        px-8 py-3 
                        border-2 border-rose-500 
                        text-rose-500 
                        font-semibold 
                        rounded-full
                        transition duration-300 
                        hover:bg-rose-500 hover:text-white 
                        shadow-md hover:shadow-lg
                        cursor-pointer
                    `}
                >
                    LEARN MORE
                </button>
            </div>
        );
    };

    const dummyText = "Donec et odio pellentesque quam volutpat commodo sed egestas. Nisl condimentum id venenatis a. Proin nibh nisl condimentum id. Dictumst vestibulum rhoncus est pellentesque elit. Condimentum vitae sapien pellentesque habitant morbi.";
    
    return (
        <section className="min-h-screen flex items-center bg-white overflow-hidden py-12" id="team">
            
            <div className="relative container mx-auto">
                
                {/* --- SVG CONNECTOR LINE (Desktop Only) --- */}
                <svg 
                    // Set z-index to 0 to place it behind the content/images
                    className="hidden lg:block absolute inset-0 w-full h-full z-0 pointer-events-none" 
                    viewBox="0 0 1000 1000"
                    preserveAspectRatio="none"
                >
                    <path
                        // NEW PATH DEFINITION for better center alignment
                        // Start point: M 150 160 (Approx center of TL image)
                        // End point: 850 840 (Approx center of BR image)
                        // Control points are adjusted for a slightly deeper curve
                        d="M 150 160 C 350 0, 650 1000, 850 840"
                        fill="none"
                        stroke="rgb(244, 63, 94)" // rose-500
                        strokeWidth="3"
                        strokeDasharray="8 8" 
                        strokeLinecap="round" // Optional: makes the dashed ends round
                    />
                </svg>


                {/* --- 1. Top Left Image --- */}
                <CircularImage
                    src={TEAM_MEMBER_1}
                    alt="Team Member 1"
                    sizeClasses="w-[180px] h-[180px] lg:w-[280px] lg:h-[280px]"
                    // Absolute position: center is at Left 0 + (280/2) = 140, Top 10 + (280/2) = 150
                    positionClasses="hidden lg:block absolute lg:top-10 lg:left-0 circular-img z-10"
                />
                
                {/* --- Our Team Section (Top Right) --- */}
                <ScrollReveal className="lg:pt-0 lg:pl-[400px] team-content" direction='left'>
                    <TeamContent
                        title="Our Team"
                        text={dummyText}
                        alignment="right"
                        showFreepik={false}
                    />
                </ScrollReveal>
                
                {/* Mobile version of the first image */}
                <div className="block lg:hidden">
                    <CircularImage
                        src={TEAM_MEMBER_1}
                        alt="Team Member 1"
                        sizeClasses="w-[180px] h-[180px]"
                        positionClasses="relative my-8 mx-auto"
                    />
                </div>

                {/* --- About Us Section (Bottom Left) --- */}
                <ScrollReveal className="mt-20 lg:mt-40 lg:pr-[400px] team-content" direction='right'>
                    <TeamContent
                        title="About Us"
                        text={dummyText}
                        alignment="left"
                        showFreepik={true}
                    />
                </ScrollReveal>

                {/* --- 3. Bottom Right Image --- */}
                <CircularImage
                    src={TEAM_MEMBER_3}
                    alt="Team Member 3"
                    sizeClasses="w-[180px] h-[180px] lg:w-[280px] lg:h-[280px]"
                    // Absolute position: center is at Right 0 + (280/2) = 140, Bottom 10 + (280/2) = 150
                    positionClasses="hidden lg:block absolute lg:bottom-10 lg:right-0 circular-img z-10"
                />
                
                 {/* Mobile version of the third image */}
                <div className="block lg:hidden">
                    <CircularImage
                        src={TEAM_MEMBER_3}
                        alt="Team Member 3"
                        sizeClasses="w-[180px] h-[180px]"
                        positionClasses="relative my-8 mx-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default Team;