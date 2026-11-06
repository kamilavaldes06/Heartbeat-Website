import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb: string;
  categoryTag?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  breadcrumb,
  categoryTag,
}) => {
  const { t } = useLanguage();

  return (
    <div className="bg-[#FDF4F8] border-b border-[#F7D2E4]/60 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-4">
          <Link to="/" className="hover:text-[#126B72] transition-colors">
            {t('nav.home')}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#D90C72] font-semibold">{breadcrumb}</span>
        </nav>

        {/* Optional Eyebrow / Category Tag */}
        {categoryTag && (
          <p className="text-xs font-bold tracking-wider uppercase text-[#126B72] mb-2 font-heading">
            {categoryTag}
          </p>
        )}

        {/* Main Heading in Natural Title Case */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#126B72] tracking-tight font-heading max-w-4xl text-balance">
          {title}
        </h1>

        {/* Subtitle / Introductory Paragraph */}
        {subtitle && (
          <p className="mt-4 text-base sm:text-lg text-[#243A47]/80 max-w-3xl leading-relaxed font-body">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
