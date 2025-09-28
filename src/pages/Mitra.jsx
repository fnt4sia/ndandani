import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Mitra = () => {
  const benefits = [
    {
      icon: "💼",
      title: "Increased Revenue",
      description: "Get more customers through our platform and boost your workshop's income by up to 40%"
    },
    {
      icon: "📱",
      title: "Digital Presence",
      description: "Enhance your online visibility and reach customers who are actively looking for automotive services"
    },
    {
      icon: "🔧",
      title: "Professional Tools",
      description: "Access our management dashboard to track bookings, payments, and customer feedback efficiently"
    },
    {
      icon: "⭐",
      title: "Quality Rating System",
      description: "Build your reputation through our transparent review system and showcase your expertise"
    },
    {
      icon: "📊",
      title: "Business Analytics",
      description: "Get detailed insights about your performance, customer trends, and revenue optimization"
    },
    {
      icon: "🤝",
      title: "Marketing Support",
      description: "Benefit from our marketing campaigns and promotional activities to attract more customers"
    }
  ];

  const handleWhatsAppContact = () => {
    const phoneNumber = "6281234567890"; // Replace with actual WhatsApp number
    const message = "Hi, I'm interested in becoming a Ndandani Mitra. Could you please provide more information about the partnership program?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailContact = () => {
    const email = "partnership@ndandani.com"; // Replace with actual email
    const subject = "Partnership Inquiry - Ndandani Mitra Program";
    const body = "Hello,\n\nI am interested in joining the Ndandani Mitra program. Please provide me with more details about the registration process and requirements.\n\nThank you.";
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main>
        {/* Benefits Section - Now First */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Partner with <span className="text-orange-500">Ndandani</span>?
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join Indonesia's leading automotive service platform and unlock exclusive benefits 
                that will transform your workshop business.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group">
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-orange-200 transition-all duration-300 h-full">
                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section - Improved Design */}
        <div className="py-20 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-8 text-center relative">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Become a <span className="text-orange-100">Ndandani Mitra</span>?
              </h2>
              <p className="text-xl text-orange-100 max-w-2xl mx-auto leading-relaxed">
                Join thousands of successful workshop partners who have transformed their business 
                with our platform. Start your journey today!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {/* WhatsApp Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">WhatsApp</h3>
                  <p className="text-orange-100 text-sm mb-4">Get instant response</p>
                  <button 
                    onClick={handleWhatsAppContact}
                    className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    Chat Now
                  </button>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <p className="text-orange-100 text-sm mb-4">Professional inquiry</p>
                  <button 
                    onClick={handleEmailContact}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    Send Email
                  </button>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 text-center">
              <p className="text-orange-100 text-sm">
                Our partnership specialists will get back to you within 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold text-orange-500 mb-2">30+</div>
                <div className="text-gray-600">Active Workshop Partners</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-orange-500 mb-2">1000+</div>
                <div className="text-gray-600">First Month Service Bookings Prediction</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-orange-500 mb-2">4.7★</div>
                <div className="text-gray-600">Average Partner Rating Prediction</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Mitra;