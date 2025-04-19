import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavicService {
  getFeatures() {
    return [
      {
        title: 'Unmatched Accuracy',
        description: 'Delivers positioning precision better than 10 meters, optimized for India’s diverse terrains.',
        icon: '📍'
      },
      {
        title: 'Regional Dominance',
        description: 'Covers India and extends 1500 km beyond, ensuring seamless navigation.',
        icon: '🌍'
      },
      {
        title: 'Advanced Dual-Band',
        description: 'L5 and S bands minimize errors, offering reliability in urban and rural areas.',
        icon: '📡'
      },
      {
        title: 'Precision Timing',
        description: 'Critical for banking, telecom, and disaster response with sub-microsecond accuracy.',
        icon: '⏱️'
      }
    ];
  }

  getAboutInfo() {
    return {
      title: 'NavIC: India’s Stellar Navigator',
      content: 'Developed by ISRO, NavIC (Navigation with Indian Constellation) is India’s answer to global navigation systems. With 7 satellites in geosynchronous and geostationary orbits, it provides robust positioning and timing services, supporting industries from agriculture to defense, fostering self-reliance.'
    };
  }

  getTestimonials() {
    return [
      {
        quote: 'NavIC has streamlined our supply chain with pinpoint accuracy.',
        author: 'Neha Gupta, Logistics CEO'
      },
      {
        quote: 'A monumental leap for India’s space technology.',
        author: 'Dr. Sanjay Rao, ISRO Scientist'
      },
      {
        quote: 'NavIC’s timing precision powers our fintech solutions.',
        author: 'Rohit Mehra, CTO'
      }
    ];
  }

  getApplications() {
    return [
      {
        title: 'Smart Transportation',
        description: 'Enhances fleet tracking, traffic management, and autonomous vehicles.',
        image: 'assets/Smart_transportation.jpg'
        
      },
      {
        title: 'Precision Agriculture',
        description: 'Enables accurate land mapping and automated farming.',
        image: 'assets/Precision_Agriculture.jpg'
      },
      {
        title: 'Disaster Response',
        description: 'Powers rapid, location-based rescue operations.',
        image: 'assets/Diaster_response.jpg'
      },
      {
        title: 'Defense',
        description: 'Secures strategic navigation for military applications.',
        image: 'assets/defense.jpg'
      },
    ];
  }

  getMilestones() {
    return [
      { year: '2013', event: 'First NavIC satellite (IRNSS-1A) launched.' },
      { year: '2016', event: 'NavIC constellation completed with 7 satellites.' },
      { year: '2018', event: 'NavIC declared fully operational.' }
    ];
  }

  getTechnologyInfo() {
    return [
      {
        title: 'Satellite Constellation',
        description: 'Seven satellites in geosynchronous and geostationary orbits ensure continuous coverage.',
        icon: '🛰️'
      },
      {
        title: 'Dual-Frequency Signals',
        description: 'L5 (1176.45 MHz) and S (2492.028 MHz) bands enhance accuracy and reliability.',
        icon: '📶'
      },
      {
        title: 'Ground Segment',
        description: 'A network of control centers and ranging stations for precise orbit determination.',
        icon: '🌐'
      }
    ];
  }

  getNews() {
    return [
      {
        title: 'NavIC Integration in Smartphones',
        date: 'March 2025',
        excerpt: 'Leading manufacturers announce NavIC support in new devices.',
        image: 'assets/smartphone.jpg'
      },
      {
        title: 'NavIC Aids Disaster Response',
        date: 'January 2025',
        excerpt: 'NavIC’s precision helps coordinate relief efforts in recent floods.',
        image: 'assets/news_2.jpg'
      },
      {
        title: 'ISRO Plans NavIC Expansion',
        date: 'November 2024',
        excerpt: 'New satellites to enhance coverage and accuracy by 2027.',
        image: 'assets/news_3.jpg'
      }
    ];
  }
}