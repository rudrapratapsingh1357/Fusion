// FUSION Projects Data
//
// category must match one of the verified filter types or fall under 'Other' ('Embedded Systems', etc.)
// featured: false — supports future homepage filtering.
// image: null — placeholder for future verified photography.
// version and status are preserved in source data but excluded/cleaned in UI presentation.

import { Database, Activity, Radio, Cpu, Shield, Code2 } from 'lucide-react';

export const projectAccentColors = {
  cyan:   '#00FFFF',
  orange: '#D35400',
  purple: '#7C3AED',
  green:  '#22C55E',
};

export const allProjects = [
  {
    title:       'BloodLink Pro',
    description: 'A real-time, full-stack medical emergency SOS network mapping regional blood donations using Firebase and the Haversine formula for proximity matching.',
    tags:        ['Firebase', 'Node.js', 'Maps API', 'Geolocation'],
    Icon:        Database,
    accent:      projectAccentColors.cyan,
    category:    'Software',
    version:     'v2.1.4',
    status:      'Active',
    github:      '#',
    featured:    false,
    image:       null,
  },
  {
    title:       'Orange Pigeon AI',
    description: 'An AI-powered edge defense system designed to deter birds using live computer vision and real-time audio response deployed on Raspberry Pi 5.',
    tags:        ['Raspberry Pi 5', 'OpenCV', 'Python', 'Audio Tracking'],
    Icon:        Activity,
    accent:      projectAccentColors.orange,
    category:    'Embedded Systems',
    version:     'v1.3.0',
    status:      'Active',
    github:      '#',
    featured:    false,
    image:       null,
  },
  {
    title:       'AgroVON 2.0',
    description: 'A smart farming ecosystem featuring an Arduino-based IoT sensor network broadcasting soil, temperature, and humidity data to a React Native mobile app.',
    tags:        ['React Native', 'Arduino', 'MQTT', 'Sensor Networks'],
    Icon:        Radio,
    accent:      projectAccentColors.green,
    category:    'IoT',
    version:     'v2.0.1',
    status:      'Active',
    github:      '#',
    featured:    false,
    image:       null,
  },
  {
    title:       'EdgeVision CCTV',
    description: 'A low-latency surveillance system using tinyML inference on ESP32-CAM for on-device object detection without any cloud dependency.',
    tags:        ['ESP32-CAM', 'TensorFlow Lite', 'C++', 'RTOS'],
    Icon:        Cpu,
    accent:      projectAccentColors.purple,
    category:    'Embedded Systems',
    version:     'v1.0.0',
    status:      'In Development',
    github:      '#',
    featured:    false,
    image:       null,
  },
  {
    title:       'MeshNet Comms',
    description: 'Decentralized LoRa mesh network for off-grid communication, enabling peer-to-peer text and sensor data relay across long distances.',
    tags:        ['LoRa', 'ESP32', 'Mesh Protocol', 'RF'],
    Icon:        Shield,
    accent:      '#F59E0B',
    category:    'Embedded Systems',
    version:     'v0.9.2',
    status:      'In Development',
    github:      '#',
    featured:    false,
    image:       null,
  },
  {
    title:       'FUSION Dashboard',
    description: 'The internal club management portal — tracking projects, member contributions, session attendance, and resource allocation across all domains.',
    tags:        ['React', 'Firebase', 'Tailwind', 'Auth'],
    Icon:        Code2,
    accent:      projectAccentColors.cyan,
    category:    'Software',
    version:     'v1.2.0',
    status:      'Active',
    github:      '#',
    featured:    false,
    image:       null,
  },
];
