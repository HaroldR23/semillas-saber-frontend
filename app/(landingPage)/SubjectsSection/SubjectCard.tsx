"use client";

import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

import { Category } from '@/app/models';

const CategoryCard = ({ category, index }: { category: Category; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
    >
      <div
        className={`rounded-2xl border-2 ${category.borderColor} bg-white transition-all duration-300 overflow-hidden ${
          isOpen ? 'shadow-xl' : 'shadow-sm hover:shadow-lg'
        }`}
      >
        {/* Card Header — clickable */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left p-5 sm:p-6 flex items-start gap-4 group"
        >
          {/* Icon */}
          <div
            className={`shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-linear-to-br ${category.gradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon size={26} className="text-white" strokeWidth={2} />
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <h3 className="text-[1.1rem] sm:text-[1.2rem] font-bold text-gray-900 leading-snug">
              {category.name}
            </h3>
            <p className="text-sm text-gray-500 mt-0.5">{category.tagline}</p>
          </div>

          {/* Chevron */}
          <div className="shrink-0 mt-1">
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={22} className="text-gray-400" />
            </motion.div>
          </div>
        </button>

        {/* Expandable subjects */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <div className="px-5 sm:px-6 pb-5 sm:pb-6">
            <div className={`${category.bgLight} rounded-xl p-4`}>
              <div className="flex flex-wrap gap-2.5">
                {category.subjects.map((sub) => {
                  const SubIcon = sub.icon;
                  return (
                    <span
                      key={sub.name}
                      className="inline-flex items-center gap-2 bg-white px-3.5 py-2 rounded-full shadow-sm text-sm font-medium text-gray-700 border border-gray-100"
                    >
                      <SubIcon size={16} className="text-gray-500 shrink-0" />
                      {sub.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CategoryCard;
