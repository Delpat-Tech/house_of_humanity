import React from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import Button from './Button';
import ImagePlaceholder from './ImagePlaceholder';

export interface MediaCardProps {
  title: string;
  publication?: string;
  platform?: string;
  date: string;
  excerpt?: string;
  type?: string;
  views?: string;
  image: string;
  isDigital?: boolean;
  onReadMore?: () => void;
  onViewContent?: () => void;
  className?: string;
}

const MediaCard: React.FC<MediaCardProps> = ({
  title,
  publication,
  platform,
  date,
  excerpt,
  type,
  views,
  image,
  isDigital = false,
  onReadMore,
  onViewContent,
  className = ''
}) => {
  return (
    <motion.div
      className={`group bg-gradient-to-br ${
        isDigital 
          ? 'from-fresh-green/10 to-warm-light-blue/10' 
          : 'from-warm-light-blue/10 to-primary-blue/5'
      } rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 ${className}`}
      whileHover={{ scale: 1.02 }}
    >
      {isDigital ? (
        // Digital Media Layout
        <div className="text-center">
          <ImagePlaceholder 
            text={image} 
            width="100%" 
            height="150px" 
            className="rounded-lg shadow-md mb-4"
          />
          <h3 className="text-lg font-bold text-primary-blue mb-2 group-hover:text-fresh-green transition-colors">
            {title}
          </h3>
          <div className="flex items-center justify-center gap-2 text-sm text-dark-gray mb-3">
            <span className="font-semibold">{platform}</span>
            <span>•</span>
            <span>{date}</span>
          </div>
          <div className="flex items-center justify-between text-sm mb-4">
            {type && (
              <span className="bg-warm-light-blue/20 px-3 py-1 rounded-full text-primary-blue font-medium">
                {type}
              </span>
            )}
            {views && (
              <span className="text-dark-gray flex items-center gap-1">
                <Eye size={14} />
                {views} views
              </span>
            )}
          </div>
          {onViewContent && (
            <Button 
              className="w-full py-2 text-sm bg-fresh-green text-white hover:bg-green-700 transition-colors"
              onClick={onViewContent}
            >
              View Content
            </Button>
          )}
        </div>
      ) : (
        // Print Media Layout
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <ImagePlaceholder 
              text={image} 
              width="120px" 
              height="100px" 
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-primary-blue mb-2 group-hover:text-fresh-green transition-colors">
              {title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-dark-gray mb-3">
              <span className="font-semibold">{publication}</span>
              <span>•</span>
              <span>{date}</span>
            </div>
            {excerpt && (
              <p className="text-dark-gray text-sm leading-relaxed mb-4">
                {excerpt}
              </p>
            )}
            {onReadMore && (
              <Button 
                className="px-4 py-2 text-sm bg-primary-blue text-white hover:bg-blue-700 transition-colors"
                onClick={onReadMore}
              >
                Read Full Article
              </Button>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default MediaCard; 