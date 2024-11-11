import { Palette, Target, Lightbulb, Gem } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Palette className="w-8 h-8 text-primary-600" />,
      title: "Creative Excellence",
      description:
        "Pushing boundaries with innovative design solutions that captivate and inspire.",
    },
    {
      icon: <Target className="w-8 h-8 text-primary-600" />,
      title: "Client-Focused",
      description:
        "Your vision is our mission. We collaborate closely to exceed expectations.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary-600" />,
      title: "Innovative Thinking",
      description:
        "Crafting unique solutions that set new standards in digital design.",
    },
    {
      icon: <Gem className="w-8 h-8 text-primary-600" />,
      title: "Quality First",
      description:
        "Delivering excellence in every pixel, every interaction, every time.",
    },
  ];

  const achievements = [
    { number: "20+", label: "Projects Completed" },
    { number: "70+", label: "Happy Clients" },
    { number: "7", label: "Years Experience" },
    { number: "5", label: "Design Awards" },
  ];

  // const teamMembers = [
  //   {
  //     name: "Sarah Johnson",
  //     role: "Creative Director",
  //     image:
  //       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  //     bio: "With over 10 years of experience in digital design, Sarah leads our creative vision.",
  //   },
  //   {
  //     name: "Michael Chen",
  //     role: "Lead Designer",
  //     image:
  //       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  //     bio: "Specializing in user experience, Michael brings designs to life with exceptional detail.",
  //   },
  //   {
  //     name: "Emily Rodriguez",
  //     role: "Art Director",
  //     image:
  //       "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  //     bio: "Emily's artistic vision helps brands tell their unique stories through compelling visuals.",
  //   },
  // ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container mx-auto px-4 py-32">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-purple-500 to-primary-600 animate-float py-3">
            <span className="inline-block">Crafting Digital Excellence</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a passionate team of creators, innovators, and problem
            solvers dedicated to bringing your vision to life through
            exceptional design. Our commitment to excellence drives everything
            we do.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center glass-card p-8 rounded-2xl hover-card"
              style={{
                animation: `fadeIn 0.5s ease-out forwards ${index * 0.2}s`,
              }}>
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {achievement.number}
              </div>
              <div className="text-gray-600">{achievement.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover-card"
              style={{
                animation: `fadeIn 0.5s ease-out forwards ${index * 0.2}s`,
              }}>
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-primary-50 rounded-2xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Team Section
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient animate-float">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
            Talented individuals working together to create exceptional digital
            experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden hover-card group"
              style={{
                animation: `fadeIn 0.5s ease-out forwards ${index * 0.2}s`,
              }}>
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary-600 mb-3">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
