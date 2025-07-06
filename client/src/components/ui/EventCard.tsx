import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import ImagePlaceholder from './ImagePlaceholder';

export interface EventCardProps {
  title: string;
  date: string;
  time?: string;
  location: string;
  description: string;
  image: string;
  type?: string;
  status?: string;
  attendees?: string;
  isUpcoming?: boolean;
  onRegister?: () => void;
  onViewDetails?: () => void;
  className?: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  time,
  location,
  description,
  image,
  type,
  status,
  attendees,
  isUpcoming = false,
  onRegister,
  onViewDetails,
  className = ''
}) => {
  return (
    <motion.div
      className={`group bg-gradient-to-br ${
        isUpcoming 
          ? 'from-fresh-green/10 to-warm-light-blue/10 border border-fresh-green/20' 
          : 'from-warm-light-blue/10 to-transparent border-l-4 border-primary-blue'
      } rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 ${className}`}
      whileHover={{ scale: 1.02 }}
    >
      {isUpcoming ? (
        // Upcoming Event Layout
        <>
          <div className="text-center mb-4">
            <ImagePlaceholder 
              text={image} 
              width="100%" 
              height="180px" 
              className="rounded-lg shadow-md"
            />
          </div>
          
          <div className="flex items-center justify-between mb-3">
            {type && (
              <span className="bg-fresh-green/20 px-3 py-1 rounded-full text-fresh-green font-medium text-sm">
                {type}
              </span>
            )}
            {status && (
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                status === 'Registration Open' ? 'bg-green-100 text-green-700' :
                status === 'Limited Seats' ? 'bg-yellow-100 text-yellow-700' :
                status === 'By Invitation' ? 'bg-blue-100 text-blue-700' :
                'bg-gray-100 text-gray-700'
              }`}>
                {status}
              </span>
            )}
          </div>
          
          <h3 className="text-lg font-bold text-primary-blue mb-3 group-hover:text-fresh-green transition-colors">
            {title}
          </h3>
          
          <div className="space-y-2 mb-4 text-sm text-dark-gray">
            <div className="flex items-center gap-2">
              <span className="font-semibold">📅</span>
              <span>{date}</span>
            </div>
            {time && (
              <div className="flex items-center gap-2">
                <span className="font-semibold">⏰</span>
                <span>{time}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <span className="font-semibold">📍</span>
              <span>{location}</span>
            </div>
          </div>
          
          <p className="text-dark-gray text-sm leading-relaxed mb-4">
            {description}
          </p>
          
          <div className="flex gap-2">
            {onRegister && (
              <Button 
                className="flex-1 py-2 text-sm bg-fresh-green text-white hover:bg-green-700 transition-colors"
                onClick={onRegister}
              >
                Register Now
              </Button>
            )}
          </div>
        </>
      ) : (
        // Past Event Layout
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0">
            <ImagePlaceholder 
              text={image} 
              width="200px" 
              height="150px" 
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-primary-blue mb-3 group-hover:text-fresh-green transition-colors">
              {title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center gap-2 text-sm text-dark-gray">
                <span className="font-semibold">📅</span>
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-dark-gray">
                <span className="font-semibold">📍</span>
                <span>{location}</span>
              </div>
              {attendees && (
                <div className="flex items-center gap-2 text-sm text-dark-gray">
                  <span className="font-semibold">👥</span>
                  <span>{attendees} attendees</span>
                </div>
              )}
            </div>
            <p className="text-dark-gray leading-relaxed mb-4">
              {description}
            </p>
            {onViewDetails && (
              <Button 
                className="px-6 py-2 text-sm bg-primary-blue text-white hover:bg-blue-700 transition-colors"
                onClick={onViewDetails}
              >
                View Event Details
              </Button>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default EventCard; 