'use client'

const education = [
  {
    degree: 'Master of Science',
    field: 'Intelligent Systems and Robotics',
    institution: 'University of Essex',
    location: 'Colchester, United Kingdom',
    icon: '🤖',
    highlights: [
      'Dissertation on advanced robotics systems (Python, ROS)',
      'Specialization in machine learning, computer vision, and autonomous systems',
      'Research focus on intelligent robotic control and sensor fusion',
    ],
    tags: ['ROS', 'Python', 'TensorFlow', 'Computer Vision', 'Machine Learning'],
  },
  {
    degree: 'Bachelor of Science',
    field: 'Mechatronics Engineering',
    institution: 'Universidad Iberoamericana',
    location: 'Mexico City, Mexico',
    icon: '⚙️',
    highlights: [
      'Integrated study of mechanical, electrical, and software engineering systems',
      'Hands-on projects with PLCs (Siemens & Rockwell), CNC, and embedded systems',
      'CAD design with SolidWorks, CATIA, and PTC Creo',
    ],
    tags: ['Siemens TIA', 'PLC', 'SolidWorks', 'CATIA', 'Altium', 'MATLAB'],
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="section-label mb-3">Academic</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Education</h2>
        </div>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <div key={i} className="card rounded-xl p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-[#0f1420] border border-[#1e2d3d] flex items-center justify-center text-3xl">
                    {edu.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <p className="text-slate-500 text-sm font-mono">{edu.degree}</p>
                      <h3 className="text-white text-xl font-bold">{edu.field}</h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-4 text-sm">
                    <span className="text-blue-400 font-medium">{edu.institution}</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-slate-500">{edu.location}</span>
                  </div>

                  <ul className="space-y-1.5 mb-4">
                    {edu.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-slate-400">
                        <span className="text-blue-500 mt-1 flex-shrink-0">›</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {edu.tags.map((tag) => (
                      <span key={tag} className="tag text-xs px-2.5 py-1 rounded-md font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
