import { site } from './site'

export type Project = {
  slug: string
  name: string
  tagline: string
  oneLiner: string
  metrics: [string, string][] // exactly three
  media?: { video?: string; poster: string } // paths under /public
  links: { code?: string | null; video?: string | null; report?: string | null; live?: string | null; page?: string }
  tech: string[]
}

export const projects: Project[] = [
  {
    slug: 'thesis',
    name: 'Imitation Learning + Deep RL for Robotic Manipulation',
    tagline: 'MSc Dissertation · University of Essex',
    oneLiner: 'A 7-DOF Franka arm unscrews a bolt with no gripper. The policy learns from demonstrations (imitation learning + DAgger) and is refined with deep RL in Isaac Lab, then deployed on the real robot.',
    metrics: [['Imitation', 'BC + DAgger'], ['RL training', '15M steps'], ['Deployment', 'Real Franka']],
    media: { video: '/robotics/franka-real.mp4', poster: '/robotics/real-robot.png' },
    links: { code: site.thesisRepo, video: null, report: null, page: '/thesis' },
    tech: ['Python', 'Imitation Learning', 'DAgger', 'Deep RL', 'Isaac Lab', 'MuJoCo / robosuite', 'PyTorch', 'ROS 2', 'OpenCV', 'YOLO', 'RealSense'],
  },
  {
    slug: 'hri',
    name: 'Human-Robot Interaction',
    tagline: 'Gesture-driven robot control',
    oneLiner: 'Recognises operator gestures and drives the robot to the commanded position with sub-5 mm error.',
    metrics: [['Gesture accuracy', '>95%'], ['Position error', '<5 mm'], ['Interface', 'Camera-based']],
    media: { video: '/robotics/hri.mp4', poster: '/robotics/hri.jpg' },
    links: { code: null, video: null, report: null },
    tech: ['Python', 'Computer Vision', 'ROS 2'],
  },
  {
    slug: 'autocount',
    name: 'AutoCount',
    tagline: 'CV + ML inventory system · Live in production',
    oneLiner: 'YOLOv8 item detection plus a gradient-boosting model that forecasts peak demand and triggers restocking alerts.',
    metrics: [['Detection', '94% mAP@0.5'], ['Forecast', 'GBM'], ['Dashboard', 'Next.js 14']],
    links: { code: 'https://github.com/carlovivanco/autocount', live: 'https://autocount-pearl.vercel.app' },
    tech: ['Python', 'YOLOv8', 'scikit-learn', 'OpenCV', 'TypeScript', 'Next.js', 'Vercel'],
  },
]
