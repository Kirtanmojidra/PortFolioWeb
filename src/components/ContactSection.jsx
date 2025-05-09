import React from 'react';

const ContactSection = () => {

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-gradient-to-b from-black via-neutral-900 to-black text-white relative w-screen overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-amber-600 blur-[100px]"></div>
        <div className="absolute top-1/2 -right-32 w-80 h-80 rounded-full bg-amber-700 blur-[120px]"></div>
        <div className="absolute -bottom-40 left-1/3 w-72 h-72 rounded-full bg-amber-500 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-600">
            Get In Touch
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-400 to-amber-700 mx-auto mb-6 rounded-full"></div>
          <p className="text-base md:text-lg text-neutral-300 max-w-2xl mx-auto">
            Let's discuss how I can help bring your digital ideas to life. I'm always open to new opportunities and collaborations.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info Card - Takes 2 columns on large screens */}
          <div className="lg:col-span-2 bg-gradient-to-br from-neutral-900 to-black border border-amber-600/30 rounded-2xl p-6 md:p-8 shadow-lg shadow-amber-900/20 backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
              <span className="w-1.5 h-8 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full mr-4"></span>
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center group">
                <div className="bg-gradient-to-br from-amber-500 to-amber-700 p-3 rounded-lg mr-4 shadow-lg shadow-amber-900/20 group-hover:shadow-amber-600/30 transition-all duration-300 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-neutral-400 uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:kirtanmojidra01@gmail.com"
                    className="text-amber-400 hover:text-amber-300 transition-colors text-base md:text-lg break-all"
                  >
                    kirtanmojidra01@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center group">
                <div className="bg-gradient-to-br from-amber-500 to-amber-700 p-3 rounded-lg mr-4 shadow-lg shadow-amber-900/20 group-hover:shadow-amber-600/30 transition-all duration-300 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-neutral-400 uppercase tracking-wider mb-1">
                    Location
                  </p>
                  <p className="text-white text-base md:text-lg">
                    Ahmedabad, Gujarat, India
                  </p>
                </div>
              </div>

              {/* Phone - Added for completeness */}
              <div className="flex items-center group">
                <div className="bg-gradient-to-br from-amber-500 to-amber-700 p-3 rounded-lg mr-4 shadow-lg shadow-amber-900/20 group-hover:shadow-amber-600/30 transition-all duration-300 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-neutral-400 uppercase tracking-wider mb-1">
                    Phone
                  </p>
                  <p className="text-white text-base md:text-lg">
                    Available on request
                  </p>
                </div>
              </div>

              {/* Availability Badge */}
              <div className="mt-8 pt-6 border-t border-amber-900/30">
                <div className="flex items-center">
                  <div className="relative mr-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center shadow-lg shadow-amber-900/30">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-black rounded-full"></span>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-white">
                      Available for Work
                    </h4>
                    <p className="text-xs md:text-sm text-neutral-400">
                      Open to freelance projects and full-time opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Me Card - Takes 3 columns on large screens */}
          <div className="lg:col-span-3 bg-gradient-to-br from-neutral-900 to-black border border-amber-600/30 rounded-2xl p-6 md:p-8 shadow-lg shadow-amber-900/20 backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
              <span className="w-1.5 h-8 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full mr-4"></span>
              Reach Out
            </h3>
            
            <div className="space-y-8">
              {/* Email Contact Description */}
              <div className="bg-neutral-800/70 border border-neutral-700 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-amber-400 mb-3">Let's Connect</h4>
                <p className="text-neutral-300 mb-6">
                  I'm always interested in new projects, creative ideas, and opportunities to be part of your vision. Feel free to reach out if you'd like to collaborate or simply have a chat about your project needs.
                </p>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
                  <div className="flex items-center">
                    <div className="bg-amber-600/20 p-2 rounded-full mr-3">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 text-amber-500" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
                        />
                      </svg>
                    </div>
                    <span className="text-neutral-300 text-sm">Fast Response</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-amber-600/20 p-2 rounded-full mr-3">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 text-amber-500" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                        />
                      </svg>
                    </div>
                    <span className="text-neutral-300 text-sm">24-hour Response Time</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-amber-600/20 p-2 rounded-full mr-3">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 text-amber-500" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                    </div>
                    <span className="text-neutral-300 text-sm">Professional Service</span>
                  </div>
                </div>
              </div>
              
              {/* Email Contact Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <a 
                  href="mailto:kirtanmojidra01@gmail.com?subject=Project%20Inquiry" 
                  className="py-5 px-6 bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white text-center rounded-lg font-medium text-lg transition-all duration-300 shadow-lg shadow-amber-900/30 hover:shadow-amber-900/50 flex items-center justify-center"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 mr-3" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                    />
                  </svg>
                  Send Email
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;