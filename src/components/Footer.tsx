import logo from "../assets/image copy 9.png";

function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white px-12 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          <div>
            <img src={logo} alt="Uteach" className="w-28" />
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-semibold">Product</h3>
            <a href="" className="text-slate-300">
              Pricing
            </a>
            <a href="" className="text-slate-300">
              Overview
            </a>
            <a href="" className="text-slate-300">
              Browse
            </a>
            <a href="" className="text-slate-300">
              Accessibility
            </a>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-semibold">Solutions</h3>
            <a href="" className="text-slate-300">
              Brainstorming
            </a>
            <a href="" className="text-slate-300">
              Ideation
            </a>
            <a href="" className="text-slate-300">
              Wireframing
            </a>
            <a href="" className="text-slate-300">
              Research
            </a>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-semibold">Resources</h3>
            <a href="" className="text-slate-300">
              Help Center
            </a>
            <a href="" className="text-slate-300">
              Blog
            </a>
            <a href="" className="text-slate-300">
              Tutorials
            </a>
            <a href="" className="text-slate-300">
              FAQs
            </a>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-semibold">Support</h3>
            <a href="" className="text-slate-300">
              Contact Us
            </a>
            <a href="" className="text-slate-300">
              Developers
            </a>
            <a href="" className="text-slate-300">
              Documentation
            </a>
            <a href="" className="text-slate-300">
              Integrations
            </a>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-semibold">Company</h3>
            <a href="" className="text-slate-300">
              About
            </a>
            <a href="" className="text-slate-300">
              Press
            </a>
            <a href="" className="text-slate-300">
              Events
            </a>
            <a href="" className="text-slate-300">
              Request Demo →
            </a>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-14 pt-8 flex flex-wrap justify-between gap-6 text-slate-300 text-sm">
          <p>uteach @ 2023. All rights reserved.</p>

          <div className="flex flex-wrap gap-8">
            <a href="">Terms</a>
            <a href="">Privacy</a>
            <a href="">Contact</a>
            <span>EN</span>
            <span>EUR</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
