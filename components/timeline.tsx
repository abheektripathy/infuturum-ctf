import React from 'react';
import { useNavigate } from 'react-router-dom';

const Timeline: React.FC = () => {
    const navigate = useNavigate();

  const events = [
    {
      name: 'Event 1',
      image: 'event1.jpg',
      description: 'Description for event 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisi non est tempor, non molestie dui blandit.',
    },
    {
      name: 'Event 2',
      image: 'event2.jpg',
      description: 'Description for event 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisi non est tempor, non molestie dui blandit.',
    },
    {
      name: 'Event 3',
      image: 'event3.jpg',
      description: 'Description for event 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisi non est tempor, non molestie dui blandit.',
    },
    {
      name: 'Event 4',
      image: 'event4.jpg',
      description: 'Description for event 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisi non est tempor, non molestie dui blandit.',
    },
    {
      name: 'Event 5',
      image: 'event5.jpg',
      description: 'Description for event 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisi non est tempor, non molestie dui blandit.',
    },
  ];

  const handleClick = () => {
    navigate('/about');
  };

  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>Go to About Page</button>
      <div className="timeline mt-10">
        {events.map((event, index) => (
          <div key={index} className="timeline-item">
            <div className={`timeline-content ${index % 2 === 0 ? 'left' : 'right'}`}>
              <h3 className="text-xl font-bold">{event.name}</h3>
              <p className="text-sm">{event.description}</p>
            </div>
            <div className="timeline-image w-24 h-24">
              <img className="w-full h-full rounded-full" src={event.image} alt={event.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
