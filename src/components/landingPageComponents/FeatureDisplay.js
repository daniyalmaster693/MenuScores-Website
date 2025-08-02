const features = [
  {
    title: "Additional Zones",
    description:
      "Go beyond the default corners and trigger actions when moving your mouse the middle of any screen edge for even greater control.",
    imgSrc: "https://dropoverapp.com/assets/images/tile-power-users.jpg",
  },
  {
    title: "Launch Apps and Websites",
    description:
      "Open your favorite apps and websites instantly with a simple flick to a corner or zone. It’s never been easier to get your workspace up and running.",
    imgSrc: "https://dropoverapp.com/assets/images/tile-upload.jpg",
  },
  {
    title: "Run Shortcuts",
    description:
      "Unleash the power of Apple Shortcuts from any zone. Automate routines, control settings, and streamline tasks effortlessly.",
    imgSrc: "https://dropoverapp.com/assets/images/settings.jpg",
  },
  {
    title: "Access System Commands",
    description:
      "Trigger useful system commands such as Toggle Dark Mode, Keep Awake, or even create a new file with a quick flick to stay focused without digging through menus.",
    imgSrc: "https://dropoverapp.com/assets/images/tile-instant-actions.jpg",
  },
  {
    title: "Built in Tools",
    description:
      "Useful tools are right at your finger tips. Open a counter, a floating note window, a powerful natural language calculator, a color picker, text extractor and more instantly.",
    imgSrc: "https://dropoverapp.com/assets/images/tile-upload.jpg",
  },
];

const moreFeatures = [
  {
    title: "Open Files and Folders",
    description:
      "Quickly open specified files and folders or recent downloads.",
  },
  {
    title: "Developer Utilities",
    description:
      "Access handy developer info such as network speed tests and system info.",
  },
  {
    title: "Menubar Component",
    description:
      "Access corner/zone actions or favorited actions from the menubar.",
  },
  {
    title: "Ignore Applications",
    description:
      "Choose apps to ignore corner and zone actions while they’re active.",
  },
  {
    title: "Adjust Trigger Sensitivity",
    description:
      "Fine tune how close your mouse must be to a corners or zones to trigger an action.",
  },
  {
    title: "Window Management",
    description:
      "Access simple window controls to hide windows and other basic window controls.",
  },
  {
    title: "Media Controls",
    description: "Play/Pause Media, skip tracks or switch to previous tracks.",
  },
  {
    title: "Finder Actions",
    description:
      "Access useful and smart finder actions without taking yourself out of your workflow",
  },
  {
    title: "Capture your Screen",
    description: "Easily access useful screen capture tools in an instant.",
  },
  {
    title: "Visual Feedback",
    description:
      "View a subtle toast notifications when actions are triggered.",
  },
  {
    title: "Sound Feedback",
    description:
      "Optionally select a sound to be played when a corner/zone is activated.",
  },
  {
    title: "Frequent Updates",
    description: "New features and improvements are delivered regularly.",
  },
];

function FeatureDisplay() {
  return (
    <section className="bg-[#FFF] py-24 pb-16" id="features">
      <h2 className="tracking-tight font-bold text-center text-3xl lg:text-5xl lg:leading-[3.5rem]">
        More than just corners.
      </h2>
      <p className="text-center text-gray-700 font-medium text-lg lg:text-xl mt-2">
        Choose from 88 different actions, with more being added in every update.
      </p>

      <div className="max-w-sm sm:max-w-4xl xl:max-w-6xl mx-auto flex items-center flex-col gap-20 mt-20">
        {features.map((feature, i) => (
          <div
            key={feature.title}
            className={`grid grid-cols-1 xl:grid-cols-2 gap-12 items-center`}
          >
            <img
              src={feature.imgSrc}
              alt={feature.title}
              className={`w-[460px] h-[320px] rounded-[2rem] flex-shrink-0 ${
                i % 2 === 1 ? "order-1 xl:order-2" : ""
              }`}
            />
            <div
              className={`flex-1 max-w-2xl ${
                i % 2 === 1 ? "order-2 xl:order-1" : ""
              }`}
            >
              <h3 className="text-3xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-700 break-words whitespace-normal leading-relaxed text-med">
                {feature.description}
              </p>
            </div>
          </div>
        ))}

        <h2 className="tracking-tight font-bold mt-20 text-center text-3xl lg:text-5xl lg:leading-[3.5rem]">
          There's more
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {moreFeatures.map(({ title, description }) => (
            <div key={title} className="p-6 border rounded-lg shadow-sm">
              <h4 className="font-semibold text-lg mb-2">{title}</h4>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureDisplay;
