import MaxWidthWrapper from "../MaxWidthWrapper";

function TestimonialsSection() {
  return (
    <section className="bg-slate-50">
      <MaxWidthWrapper className="pt-24 pb-20 px-4">
        <div className="flex flex-col gap-10 items-center">
          <div className="col-span-1 px-2 lg:px-0">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center">
              <h2 className="tracking-tight font-bold text-center text-3xl lg:text-5xl lg:leading-[3.5rem]">
                What do the users say?
              </h2>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full px-4">
                {[
                  {
                    user: "u/Creative_Half4392",
                    comment:
                      "Well holy. Someone actually posting something useful here. Well done!!!",
                  },
                  {
                    user: "u/_harveyghost",
                    comment:
                      "Well this is rad as hell, I'll definitely check this out! Excellent work, OP!",
                  },
                  {
                    user: "u/hxriljohxn",
                    comment:
                      "Really loving the new update especially the notch integration! ",
                  },
                  {
                    user: "u/billchase2",
                    comment:
                      "Oooo love all of the college sports that have been added. Thanks! ",
                  },
                ].map((t, i) => (
                  <div
                    key={i}
                    className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between h-full min-h-56"
                  >
                    <p className="text-gray-800 mt-3 text-lg font-medium">
                      {t.comment}
                    </p>
                    <div className="flex justify-end items-center gap-2 mt-4">
                      <span className="text-gray-500 text-sm">{t.user}</span>
                      <img
                        src="/logos/reddit.png"
                        alt="Reddit logo"
                        className="w-5 h-5"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default TestimonialsSection;
