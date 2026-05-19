"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Award, Building2, Globe, MapPin, Smile, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="small"
        sizing="mediumLargeSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Rooms",
          id: "#rooms",
        },
        {
          name: "Amenities",
          id: "#features",
        },
        {
          name: "Reviews",
          id: "#testimonials",
        },
        {
          name: "Booking",
          id: "#contact",
        },
      ]}
      brandName="Luxury Stay"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "gradient-bars",
      }}
      title="Book Your Perfect Stay Today"
      description="Discover elegant rooms, exceptional service, and unbeatable rates. Browse real guest reviews and secure your reservation instantly."
      buttons={[
        {
          text: "Check Availability Now",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/3d-rendering-modern-luxury-hotel-office-reception-meeting-lounge_105762-2045.jpg"
      mediaAnimation="blur-reveal"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-smiling-businessman-with-luggage-checking-his-boarding-pass_107420-95776.jpg",
          alt: "Portrait of smiling businessman with luggage",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-man-with-arm-crossed-standing-near-railing-looking-camera_23-2148203054.jpg",
          alt: "Smiling man with arm crossed",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-smiling-airline-check-attendant-counter_107420-95799.jpg",
          alt: "Portrait of smiling airline check-in attendant",
        },
        {
          src: "http://img.b2bpic.net/free-photo/elegant-old-man-airport-with-suitcase_1157-33367.jpg",
          alt: "Elegant old man with a suitcase",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-businessman-standing-airport_107420-85035.jpg",
          alt: "Smiling businessman at airport",
        },
      ]}
      avatarText="Trusted by 10k+ global travelers"
      marqueeItems={[
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/panoramic-sauna-view-organic-wooden-columns-resort-style-wellness_169016-68883.jpg",
          alt: "Panoramic sauna view",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/view-luxurious-hotel-interior-space_23-2150683469.jpg",
          alt: "Luxurious hotel interior",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/hotel-lobby_23-2149397559.jpg",
          alt: "Hotel lobby",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/3d-rendering-modern-steel-elevator-lift-lobby-business-hotel-with-luxury-design_105762-2042.jpg",
          alt: "Elevator lobby",
        },
        {
          type: "text",
          text: "Five-Star Experience",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Why Choose Luxury Stay"
      metrics={[
        {
          icon: Building2,
          label: "Rooms Available",
          value: "150+",
        },
        {
          icon: Star,
          label: "Guest Rating",
          value: "4.9/5",
        },
        {
          icon: Smile,
          label: "Happy Guests",
          value: "10k+",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSix
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Free High-Speed Wi-Fi",
          description: "Stay connected effortlessly throughout your stay with our ultra-fast, secure fiber-optic internet connection.",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-tv_105762-2296.jpg",
          imageAlt: "Wi-Fi icon",
        },
        {
          title: "24/7 Room Service",
          description: "Gourmet dining options available at your doorstep any hour, day or night, freshly prepared by our chefs.",
          imageSrc: "http://img.b2bpic.net/free-photo/indoor-design-luxury-resort_23-2150497281.jpg",
          imageAlt: "Room service icon",
        },
        {
          title: "Fitness & Wellness",
          description: "Rejuvenate your body and mind in our state-of-the-art fitness center, fully equipped for your workout routine.",
          imageSrc: "http://img.b2bpic.net/free-photo/business-assistant-reads-papers_482257-75408.jpg",
          imageAlt: "Gym icon",
        },
      ]}
      title="World-Class Amenities"
      description="Experience unparalleled comfort with our curated selection of premium guest amenities designed for every type of traveler."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="one-large-left-three-stacked-right"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Deluxe King Suite",
          price: "$149/night",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-tv_105762-2109.jpg",
          imageAlt: "Luxury King Suite",
        },
        {
          id: "p2",
          name: "Urban View Double",
          price: "$129/night",
          imageSrc: "http://img.b2bpic.net/free-photo/cozy-lively-home-interior-design_23-2151118953.jpg",
          imageAlt: "Urban View Room",
        },
        {
          id: "p3",
          name: "Executive Business Room",
          price: "$169/night",
          imageSrc: "http://img.b2bpic.net/free-photo/asian-middle-aged-tourist-waits-hotel-sitting-area-holding-smartphone-while-helpful-concierge-serves-her-hot-beverages-guest-patiently-waiting-lobby-with-phone-luggage_482257-67959.jpg",
          imageAlt: "Executive Room",
        },
        {
          id: "p4",
          name: "Premium Family Suite",
          price: "$199/night",
          imageSrc: "http://img.b2bpic.net/free-photo/white-pillow-bed_74190-4628.jpg",
          imageAlt: "Family Suite",
        },
        {
          id: "p5",
          name: "Standard Modern Room",
          price: "$99/night",
          imageSrc: "http://img.b2bpic.net/free-photo/view-bedroom-with-futuristic-decor-style_23-2151152362.jpg",
          imageAlt: "Standard Room",
        },
        {
          id: "p6",
          name: "Grand Panorama Suite",
          price: "$299/night",
          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-kitchen-interior-design_23-2151821267.jpg",
          imageAlt: "Grand Panorama Suite",
        },
      ]}
      title="Our Luxurious Accommodations"
      description="Choose from a diverse range of thoughtfully designed rooms and suites for your comfort."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardOne
      animationType="scale-rotate"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "basic",
          badge: "Essential",
          price: "$99",
          subtitle: "For short visits",
          features: [
            "Free Wifi",
            "City View",
            "Complimentary Water",
          ],
        },
        {
          id: "standard",
          badge: "Popular",
          price: "$149",
          subtitle: "Perfect for comfort",
          features: [
            "Breakfast Included",
            "City View",
            "Fitness Access",
            "Parking",
          ],
        },
        {
          id: "premium",
          badge: "Luxury",
          price: "$249",
          subtitle: "Total experience",
          features: [
            "VIP Lounge",
            "Spa Included",
            "Free Airport Transfer",
            "Priority Checkin",
          ],
        },
      ]}
      title="Transparent Booking Plans"
      description="Choose the rate plan that best suits your travel itinerary and budget needs."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          icon: MapPin,
          title: "Destinations",
          value: "45+",
        },
        {
          id: "m2",
          icon: Globe,
          title: "Global Users",
          value: "1.2M+",
        },
        {
          id: "m3",
          icon: Award,
          title: "Quality Awards",
          value: "150+",
        },
      ]}
      title="Our Impact & Reach"
      description="Trusted by thousands of guests worldwide for their travel needs."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Sarah Miller",
          role: "Travel Blogger",
          testimonial: "An incredible experience. The rooms are spotless and the staff is exceptionally helpful.",
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-standing-with-luggage-waiting-area-airport_107420-95857.jpg",
        },
        {
          id: "t2",
          name: "James Henderson",
          role: "Business Executive",
          testimonial: "Perfect for my business trip. Fast Wi-Fi and quiet, comfortable workspace.",
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-formal-wear-professional-corporate-concept_53876-71166.jpg",
        },
        {
          id: "t3",
          name: "Linda Gomez",
          role: "Leisure Traveler",
          testimonial: "Beautiful location and stunning interior. I felt truly pampered throughout my visit.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-white-scarf-smiling-broadly-showing-teeth_141793-55062.jpg",
        },
        {
          id: "t4",
          name: "Robert Smith",
          role: "Family Planner",
          testimonial: "The premium suite was spacious and perfect for our family holiday. Highly recommend.",
          imageSrc: "http://img.b2bpic.net/free-photo/business-woman-smiling-with-top-hat-thumbs-up_1187-1549.jpg",
        },
        {
          id: "t5",
          name: "Emily Carter",
          role: "Digital Nomad",
          testimonial: "Everything I needed was right there. Excellent amenities and very reliable service.",
          imageSrc: "http://img.b2bpic.net/free-photo/successful-young-man-stylish-hat-relaxing-alone-cozy-cafeteria-lunch-break-looking-with-happy-expression_273609-1935.jpg",
        },
      ]}
      title="Verified Guest Reviews"
      description="Don't just take our word for it—listen to what our guests have to say."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Booking"
      title="Check Availability Now"
      description="Secure your dates at the best possible price by booking directly through our platform."
      inputPlaceholder="Enter your preferred check-in date"
      buttonText="Check Availability"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "About Us",
              href: "#",
            },
            {
              label: "Careers",
              href: "#",
            },
            {
              label: "Contact",
              href: "#",
            },
          ],
        },
        {
          items: [
            {
              label: "Rooms",
              href: "#",
            },
            {
              label: "Dining",
              href: "#",
            },
            {
              label: "Wellness",
              href: "#",
            },
          ],
        },
        {
          items: [
            {
              label: "Policy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
            {
              label: "Privacy",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Luxury Stay"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
