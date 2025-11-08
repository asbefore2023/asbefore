import { Users, Award, DollarSign, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function AdvantagesSection() {
  const { t } = useLanguage();

  const advantages = [
    { icon: Users, key: 'advantages.1' },
    { icon: Award, key: 'advantages.2' },
    { icon: DollarSign, key: 'advantages.3' },
    { icon: Shield, key: 'advantages.4' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-8 rounded-2xl hover:shadow-xl transition-shadow"
              >
                <div className="bg-[#001f5b] text-white p-6 rounded-full mb-6">
                  <Icon size={40} />
                </div>
                <p className="text-lg text-gray-800 leading-relaxed">
                  {t(advantage.key)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
