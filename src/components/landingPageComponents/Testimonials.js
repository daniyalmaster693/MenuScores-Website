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
                    user: "u/Visual-Square-4416",
                    comment:
                      "Wow! This is something I've been looking for. It's rare to find a productivity app that extends hot corner functionality like this. Nice work!!",
                  },
                  {
                    user: "u/van_der_paul",
                    comment:
                      "This is a super useful app. Thank you so much. Definitely looking forward to your future updates. ",
                  },
                  {
                    user: "u/trey-a-12",
                    comment:
                      "Hey, let me just say this – SuperCorners is AWESOME. I've only just started using it, but things are looking great and this may very well become part of my `essential suite`. I've always wanted a solid supercharged version of the macOS Hot Corners, and that's exactly what this is.",
                  },
                  {
                    user: "u/Latter_Pen2421",
                    comment:
                      "I've always thought this was a good idea! Thanks so much for making. You will forever have a customer. I hope you keep developing.",
                  },
                  {
                    user: "u/dSantanaOf",
                    comment:
                      "I'm using it and it's very good, I'll be able to be more productive!",
                  },
                  {
                    user: "u/_waffles3",
                    comment:
                      "This looks like a really useful app. Thank you dev! ",
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
