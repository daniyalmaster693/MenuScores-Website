const features = [
  {
    title: "Notch Integration",
    description:
      "Pin games to your Macbooks notch for easy viewing and score updates just like on iOS.",
    imgSrc: "https://dropoverapp.com/assets/images/tile-power-users.jpg",
  },
  {
    title: "Menubar Pinning",
    description:
      "Pin games in your menubar to receive real time score updates while staying focused.",
    imgSrc: "https://dropoverapp.com/assets/images/tile-upload.jpg",
  },
  {
    title: "Track Multiple Sports",
    description:
      "Effortlessly keep tabs on different games across different leagues without getting distracted.",
    imgSrc: "https://dropoverapp.com/assets/images/settings.jpg",
  },
  {
    title: "Game Info",
    description:
      "Built in support for live leaderboards for F1 Races and PGA/LPGA Golf tournaments.",
    imgSrc: "https://dropoverapp.com/assets/images/tile-instant-actions.jpg",
  },
  {
    title: "Smart Notifications",
    description:
      "Optionally choose to receive notifications the moment a game starts or ends.",
    imgSrc: "https://dropoverapp.com/assets/images/tile-upload.jpg",
  },
  {
    title: "Customizable",
    description:
      "Choose from 32 different leagues, and select the ones you want to see.",
    imgSrc: "https://dropoverapp.com/assets/images/tile-upload.jpg",
  },
];

function FeatureDisplay() {
  return (
    <section className="bg-[#FFF] py-24 pb-16" id="features">
      <h2 className="tracking-tight font-bold text-center text-3xl lg:text-5xl lg:leading-[3.5rem]">
        Sports scores, reimagined for the Mac.
      </h2>
      <p className="text-center text-gray-700 font-medium text-lg lg:text-xl mt-2">
        View scores in real time right from your Notch or Menubar
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
      </div>
    </section>
  );
}

export default FeatureDisplay;
