import { Shield, CheckCircle, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const DogWalkingProtectSection = () => {
  return (
    <section className="py-20 bg-dogwalking-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="w-10 h-10 text-dogwalking-blue" />
              <h2 className="text-4xl font-bold text-gray-900">
                DogWalkingProtect
              </h2>
            </div>
            
            <p className="text-2xl font-semibold text-gray-800 mb-6">
              Find peace of mind with every booking.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-dogwalking-green mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Screened pet sitters
                  </h3>
                  <p className="text-gray-600">
                    have already passed a third-party identity verification.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-dogwalking-green mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    The DogWalking Guarantee
                  </h3>
                  <p className="text-gray-600">
                    provides eligible bookings with coverage of up to $25,000 for veterinary care.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-6 h-6 text-dogwalking-green mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    24/7 support
                  </h3>
                  <p className="text-gray-600">
                    Access our team whenever you need us, including emergency vet assistance.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-6 h-6 text-dogwalking-green mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Premium insurance
                  </h3>
                  <p className="text-gray-600">
                    Every booking includes premium pet injury protection and property damage coverage.
                  </p>
                </div>
              </div>
            </div>

            <Button className="dogwalking-button-secondary">
              Learn More About DogWalkingProtect
            </Button>
          </div>

          {/* Right side - Image/Illustration */}
          <div className="relative">
            <div className="dogwalking-card p-8">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-dogwalking-blue/10 rounded-full flex items-center justify-center">
                  <Shield className="w-16 h-16 text-dogwalking-blue" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Peace of Mind Protection
                </h3>
                
                <p className="text-gray-600 mb-6">
                  Every DogWalking booking is backed by comprehensive protection, 
                  so you can focus on what matters most - your pet's happiness.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-gray-700">Veterinary Care Coverage</span>
                    <span className="font-semibold text-dogwalking-green">✓ Up to $25,000</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-gray-700">24/7 Emergency Support</span>
                    <span className="font-semibold text-dogwalking-green">✓ Always Available</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-gray-700">Identity Verification</span>
                    <span className="font-semibold text-dogwalking-green">✓ All Sitters</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DogWalkingProtectSection;