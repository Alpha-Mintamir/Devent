import { Link } from "react-router-dom";
import { ArrowRight, Code, MessageSquare, Shield, Users } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-[#17212b] text-white">
        <header className="sticky justify-center top-0 z-40 w-full border-b border-[#0e1621] bg-[#17212b]/95 backdrop-blur">
        <div className="px-7 flex h-16 justify-start space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex ml-6 gap-2 items-center text-xl font-bold">
            <Code className="h-6 w-6 text-primary" />
            <span>DevVent</span>
          </div>
          <div className="flex flex-1 right-0  justify-end space-x-4">
            <nav className="flex items-center space-x-2">
            <Button asChild variant="secondary">
           
            <Link
                to="https://github.com/Alpha-Mintamir/Devent"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm bg-[#24292e] hover:bg-[#2c3136] text-white px-3 py-1.5 rounded-md transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                Star on GitHub
              </Link>
              </Button>
              <Button asChild variant="default">
                <Link to="https://t.me/dev_vent" target="_blank" rel="noreferrer">
                  Join Telegram
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      </header> 
      <main className="flex-1 flex flex-col items-center justify-center">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#17212b] text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    <span className="text-primary">Vent</span> your code frustrations.
                    <br />
                    <span className="text-primary">Connect</span> with fellow developers.
                  </h1>
                  <p className="max-w-[600px] text-zinc-400 md:text-xl">
                    A safe space for developers to share bugs, frustrations, and questions - anonymously or not.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link to="https://t.me/dev_vent" target="_blank" rel="noreferrer">
                      Join Our Telegram <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[500px] w-[350px] overflow-hidden rounded-xl border border-[#0e1621] bg-[#17212b] shadow-xl">
                  <div className="flex flex-col h-full">
                    {/* Telegram header */}
                    <div className="bg-[#17212b] p-3 border-b border-[#0e1621] flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[#5288c1] flex items-center justify-center text-white font-bold mr-3">
                        D
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-white">DevVent</h3>
                        <p className="text-xs text-[#91a3b5]">Channel • 243 subscribers</p>
                      </div>
                      <div className="flex items-center space-x-3 text-[#91a3b5]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" />
                          <path d="M3 16.2V21m0-4.8H7.8" />
                          <path d="M21 7.8V3m0 4.8h-4.8" />
                          <path d="M7.8 3H3v4.8" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="1" />
                          <circle cx="19" cy="12" r="1" />
                          <circle cx="5" cy="12" r="1" />
                        </svg>
                      </div>
                    </div>

                    {/* Telegram messages */}
                    <div className="flex-1 overflow-y-auto p-0 bg-[#0e1621]">
                      {/* Date header */}
                      <div className="flex justify-center my-2">
                        <div className="bg-[#1c2a3a] text-[#91a3b5] text-xs px-3 py-1 rounded-lg">March 7, 2025</div>
                      </div>

                      

                      {/* Channel post from bot */}
                      <img
    className="w-full h-full object-cover"
    src="https://res.cloudinary.com/dfonae1gu/image/upload/v1741370484/image_d67gbn.png" // Replace with your image URL
    alt="Description of the image" // Add a meaningful alt text
  />


                      {/* Channel post from bot */}
                      <img
    className="w-full mt-3 h-full object-cover"
    src="https://res.cloudinary.com/dfonae1gu/image/upload/v1741370484/image_d67gbn.png" // Replace with your image URL
    alt="Description of the image" // Add a meaningful alt text
  />

                      {/* Channel post from bot */}
                      <img
    className="w-full h-full object-cover"
    src="https://res.cloudinary.com/dfonae1gu/image/upload/v1741370481/devent_cwywi2.png" // Replace with your image URL
    alt="Description of the image" // Add a meaningful alt text
  /> 
                      {/* Channel post from bot */}
           
                    </div>

                    {/* Telegram input */}
                    <div className="p-2 border-t border-[#0e1621] bg-[#17212b] flex items-center">
                      <button className="text-[#91a3b5] p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                          <circle cx="12" cy="13" r="3" />
                        </svg>
                      </button>
                      <div className="flex-1 mx-2 bg-[#242f3d] rounded-full px-4 py-2">
                        <input
                          type="text"
                          placeholder="Message"
                          className="bg-transparent border-none outline-none text-sm w-full text-white"
                          disabled
                        />
                      </div>
                      <button className="text-[#91a3b5] p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 19c0-4.2-2.8-7-7-7m14 0h-7m7 0c0-4.2-2.8-7-7-7m0 14c-4.2 0-7-2.8-7-7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#17212b]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why DevVent?</h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Because sometimes you just need to scream into the void about that impossible bug.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-[#0e1621] bg-[#17212b]/50 p-6 shadow-sm">
                <Shield className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Anonymous Venting</h3>
                <p className="text-center text-zinc-400">
                  Share your frustrations without revealing your identity. No judgment, just support.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-[#0e1621] bg-[#17212b]/50 p-6 shadow-sm">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Community Support</h3>
                <p className="text-center text-zinc-400">
                  Connect with developers who understand exactly what you're going through.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-[#0e1621] bg-[#17212b]/50 p-6 shadow-sm">
                <MessageSquare className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Learn & Grow</h3>
                <p className="text-center text-zinc-400">
                  Ask beginner questions without fear. We all start somewhere.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0e1621]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Simple, straightforward, and supportive.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="text-xl font-bold">Join the Telegram</h3>
                <p className="text-center text-zinc-400">
                  Click the link to join our Telegram channel. Use the bot and vent within takes seconds.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-bold">Share Your Vent</h3>
                <p className="text-center text-zinc-400">
                  Post anonymously or with your name. Share bugs, frustrations, or questions.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-bold">Connect & Grow</h3>
                <p className="text-center text-zinc-400">
                  Get support, advice, and maybe even solutions from fellow developers.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#17212b]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Vent?</h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join our community of developers who understand your pain.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <Button asChild size="lg" className="w-full">
                  <Link to="https://t.me/dev_vent" target="_blank" rel="noreferrer">
                    Join DevVent on Telegram
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full pl-14 border-t border-[#0e1621] py-6 md:py-0 bg-[#0e1621]">
        <div className="p-4 flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-zinc-400 md:text-left">
            © 2025 DevVent. Made with Vents.
          </p>
          <div className="text-right mr-10">
            <Link to="https://t.me/alphity" className="text-sm text-zinc-400 underline-offset-4 hover:underline">
              Join Team
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

