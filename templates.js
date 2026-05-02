/* ==================== الخطوط ==================== */
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;900&family=Tajawal:wght@300;400;500;700&family=Poppins:wght@600&display=swap');

/* ==================== Reset ==================== */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }
body {
  font-family: 'Tajawal', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: white;
  color: #061530;
  line-height: 1.6;
}
img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
button { cursor: pointer; font-family: inherit; border: none; background: none; }
ul, ol { list-style: none; }
input, select, textarea { font-family: inherit; }
h1, h2, h3, h4, h5, h6, .display, .font-display { font-family: 'Cairo', serif; }

/* ==================== المتغيرات ==================== */
:root {
  --navy-50:  #E8EEF5;
  --navy-100: #B8C9DD;
  --navy-200: #88A3C5;
  --navy-400: #3D6FA5;
  --navy-600: #1B5FAA;
  --navy-800: #0A1F3D;
  --navy-900: #061530;
  --ice: #1B5FAA;
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-200: #e5e7eb;
  --gray-500: #6b7280;
  --gray-600: #4b5563;
  --gray-700: #374151;
}

/* ==================== Scrollbar ==================== */
::-webkit-scrollbar { width: 10px; }
::-webkit-scrollbar-track { background: #f1f5f9; }
::-webkit-scrollbar-thumb { background: var(--ice); border-radius: 5px; }
::-webkit-scrollbar-thumb:hover { background: var(--navy-800); }

/* ==================== Layout ==================== */
.max-w-7xl { max-width: 1280px; margin-left: auto; margin-right: auto; }
.max-w-4xl { max-width: 896px; margin-left: auto; margin-right: auto; }
.max-w-3xl { max-width: 768px; margin-left: auto; margin-right: auto; }
.max-w-2xl { max-width: 672px; margin-left: auto; margin-right: auto; }
.mx-auto { margin-left: auto; margin-right: auto; }

/* Padding utilities */
.p-3{padding:.75rem}.p-4{padding:1rem}.p-5{padding:1.25rem}.p-6{padding:1.5rem}.p-7{padding:1.75rem}.p-8{padding:2rem}.p-10{padding:2.5rem}
.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-8{padding-left:2rem;padding-right:2rem}
.py-1\.5{padding-top:.375rem;padding-bottom:.375rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-2\.5{padding-top:.625rem;padding-bottom:.625rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.py-8{padding-top:2rem;padding-bottom:2rem}.py-12{padding-top:3rem;padding-bottom:3rem}.py-16{padding-top:4rem;padding-bottom:4rem}.py-20{padding-top:5rem;padding-bottom:5rem}.py-24{padding-top:6rem;padding-bottom:6rem}
.pt-3{padding-top:.75rem}.pt-6{padding-top:1.5rem}.pt-20{padding-top:5rem}.pt-32{padding-top:8rem}
.pb-3{padding-bottom:.75rem}.pb-8{padding-bottom:2rem}.pb-12{padding-bottom:3rem}.pb-20{padding-bottom:5rem}
.pl-4{padding-left:1rem}.pr-4{padding-right:1rem}

/* Margin utilities */
.m-0{margin:0}
.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.mb-5{margin-bottom:1.25rem}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.mb-10{margin-bottom:2.5rem}.mb-12{margin-bottom:3rem}.mb-16{margin-bottom:4rem}
.mt-1{margin-top:.25rem}.mt-3{margin-top:.75rem}.mt-4{margin-top:1rem}.mt-8{margin-top:2rem}.mt-12{margin-top:3rem}
.-mt-24{margin-top:-6rem}
.mr-2{margin-right:.5rem}.ml-2{margin-left:.5rem}

/* Display & Flex */
.hidden{display:none!important}
.block{display:block}.inline-block{display:inline-block}
.flex{display:flex}.inline-flex{display:inline-flex}
.grid{display:grid}
.items-center{align-items:center}.items-start{align-items:flex-start}.items-end{align-items:flex-end}
.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-end{justify-content:flex-end}
.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.flex-shrink-0{flex-shrink:0}.flex-1{flex:1 1 0%}
.gap-1{gap:.25rem}.gap-1\.5{gap:.375rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-5{gap:1.25rem}.gap-6{gap:1.5rem}.gap-8{gap:2rem}.gap-12{gap:3rem}.gap-16{gap:4rem}

/* Grid */
.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}
.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}
.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}

/* Position */
.relative{position:relative}.absolute{position:absolute}.fixed{position:fixed}.sticky{position:sticky}
.inset-0{top:0;right:0;bottom:0;left:0}.inset-x-0{left:0;right:0}
.top-0{top:0}.bottom-0{bottom:0}.right-0{right:0}.left-0{left:0}
.top-4{top:1rem}.right-4{right:1rem}.bottom-4{bottom:1rem}.bottom-6{bottom:1.5rem}.left-6{left:1.5rem}.right-6{right:1.5rem}.bottom-10{bottom:2.5rem}
.top-1\/2{top:50%}
.-translate-y-1\/2{transform:translateY(-50%)}
.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-40{z-index:40}.z-50{z-index:50}

/* Visibility */
.opacity-0{opacity:0}.opacity-10{opacity:.1}.opacity-50{opacity:.5}.opacity-70{opacity:.7}.opacity-85{opacity:.85}
.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}

/* Sizing */
.w-full{width:100%}.h-full{height:100%}
.w-px{width:1px}.h-px{height:1px}
.w-1{width:.25rem}.h-1{height:.25rem}
.w-1\.5{width:.375rem}.h-1\.5{height:.375rem}
.w-3{width:.75rem}.h-3{height:.75rem}
.w-4{width:1rem}.h-4{height:1rem}
.w-5{width:1.25rem}.h-5{height:1.25rem}
.w-6{width:1.5rem}.h-6{height:1.5rem}
.w-7{width:1.75rem}.h-7{height:1.75rem}
.w-8{width:2rem}.h-8{height:2rem}
.w-10{width:2.5rem}.h-10{height:2.5rem}
.w-12{width:3rem}.h-12{height:3rem}
.w-14{width:3.5rem}.h-14{height:3.5rem}
.w-16{width:4rem}.h-16{height:4rem}
.w-20{width:5rem}.h-20{height:5rem}
.h-20{height:5rem}.h-24{height:6rem}.h-48{height:12rem}.h-80{height:20rem}.h-96{height:24rem}
.h-\[450px\]{height:450px}.h-\[500px\]{height:500px}.h-\[600px\]{height:600px}
.w-\[500px\]{width:500px}.w-\[600px\]{width:600px}.w-\[720px\]{width:720px}
.w-2\/3{width:66.666%}.h-2\/3{height:66.666%}
.w-3\/4{width:75%}.h-3\/4{height:75%}
.w-72{width:18rem}.h-72{height:18rem}
.min-h-screen{min-height:100vh}

/* Backgrounds */
.bg-white{background-color:white}.bg-transparent{background-color:transparent}
.bg-gray-50{background-color:var(--gray-50)}.bg-gray-100{background-color:var(--gray-100)}
.bg-navy-50{background-color:var(--navy-50)}.bg-navy-100{background-color:var(--navy-100)}
.bg-navy-800{background-color:var(--navy-800)}.bg-navy-900{background-color:var(--navy-900)}
.bg-ice{background-color:var(--ice)}
.bg-green-500{background-color:#22c55e}.bg-green-600{background-color:#16a34a}.bg-green-50{background-color:#f0fdf4}
.bg-red-700{background-color:#b91c1c}
.bg-blue-600{background-color:#2563eb}.bg-blue-700{background-color:#1d4ed8}
.bg-yellow-500{background-color:#eab308}
.bg-white\/5{background-color:rgba(255,255,255,.05)}
.bg-white\/10{background-color:rgba(255,255,255,.1)}
.bg-white\/20{background-color:rgba(255,255,255,.2)}
.bg-white\/95{background-color:rgba(255,255,255,.95)}
.bg-navy-900\/40{background-color:rgba(6,21,48,.4)}
.bg-navy-50\/40{background-color:rgba(232,238,245,.4)}
.bg-navy-50\/50{background-color:rgba(232,238,245,.5)}
.bg-ice\/10{background-color:rgba(27,95,170,.1)}
.bg-ice\/20{background-color:rgba(27,95,170,.2)}
.bg-green-500\/10{background-color:rgba(34,197,94,.1)}

/* Gradients */
.bg-gradient-to-t{background-image:linear-gradient(to top,var(--tw-gradient-from,transparent),var(--tw-gradient-via,transparent),var(--tw-gradient-to,transparent))}
.bg-gradient-to-b{background-image:linear-gradient(to bottom,var(--tw-gradient-from,transparent),var(--tw-gradient-to,transparent))}
.bg-gradient-to-br{background-image:linear-gradient(to bottom left,var(--tw-gradient-from,transparent),var(--tw-gradient-to,transparent))}
.from-navy-50{--tw-gradient-from:var(--navy-50)}
.from-navy-800{--tw-gradient-from:var(--navy-800)}
.from-navy-900{--tw-gradient-from:var(--navy-900)}
.from-gray-50{--tw-gradient-from:var(--gray-50)}
.from-green-50{--tw-gradient-from:#f0fdf4}
.via-navy-900\/50{--tw-gradient-via:rgba(6,21,48,.5)}
.to-white{--tw-gradient-to:white}
.to-navy-800{--tw-gradient-to:var(--navy-800)}
.to-navy-900{--tw-gradient-to:var(--navy-900)}
.to-transparent{--tw-gradient-to:transparent}

/* Borders */
.border{border:1px solid var(--gray-200)}
.border-2{border:2px solid currentColor}
.border-4{border:4px solid currentColor}
.border-8{border:8px solid currentColor}
.border-b{border-bottom:1px solid var(--gray-100)}
.border-r-2{border-right:2px solid currentColor}
.border-r-4{border-right:4px solid currentColor}
.border-t{border-top:1px solid var(--gray-100)}
.border-double{border-style:double}
.border-white{border-color:white}
.border-gray-50{border-color:var(--gray-50)}
.border-gray-100{border-color:var(--gray-100)}
.border-gray-200{border-color:var(--gray-200)}
.border-navy-100{border-color:var(--navy-100)}
.border-ice{border-color:var(--ice)}
.border-white\/10{border-color:rgba(255,255,255,.1)}
.border-white\/20{border-color:rgba(255,255,255,.2)}
.border-white\/30{border-color:rgba(255,255,255,.3)}
.divide-x>*+*{border-left:1px solid var(--gray-100)}
.divide-y>*+*{border-top:1px solid var(--gray-100)}
.divide-gray-100>*+*{border-color:var(--gray-100)}
.rounded{border-radius:.25rem}
.rounded-lg{border-radius:.5rem}
.rounded-xl{border-radius:.75rem}
.rounded-2xl{border-radius:1rem}
.rounded-full{border-radius:9999px}

/* Typography */
.text-center{text-align:center}.text-right{text-align:right}
.font-bold{font-weight:700}.font-medium{font-weight:500}
.text-\[10px\]{font-size:10px}.text-\[8px\]{font-size:8px}
.text-xs{font-size:.75rem;line-height:1rem}
.text-sm{font-size:.875rem;line-height:1.25rem}
.text-base{font-size:1rem;line-height:1.5rem}
.text-lg{font-size:1.125rem;line-height:1.75rem}
.text-xl{font-size:1.25rem;line-height:1.75rem}
.text-2xl{font-size:1.5rem;line-height:2rem}
.text-3xl{font-size:1.875rem;line-height:2.25rem}
.text-4xl{font-size:2.25rem;line-height:2.5rem}
.text-5xl{font-size:3rem;line-height:1}
.text-6xl{font-size:3.75rem;line-height:1}
.text-7xl{font-size:4.5rem;line-height:1}
.leading-tight{line-height:1.25}.leading-relaxed{line-height:1.625}.leading-\[1\.1\]{line-height:1.1}
.tracking-widest{letter-spacing:.1em}
.tracking-\[0\.2em\]{letter-spacing:.2em}
.tracking-\[0\.3em\]{letter-spacing:.3em}
.tracking-\[0\.4em\]{letter-spacing:.4em}
.italic{font-style:italic}

/* Colors */
.text-white{color:white}
.text-gray-400{color:#9ca3af}
.text-gray-500{color:var(--gray-500)}
.text-gray-600{color:var(--gray-600)}
.text-gray-700{color:var(--gray-700)}
.text-navy-100{color:var(--navy-100)}
.text-navy-200{color:var(--navy-200)}
.text-navy-900{color:var(--navy-900)}
.text-ice{color:var(--ice)}
.text-green-600{color:#16a34a}
.text-red-700{color:#b91c1c}
.text-white\/60{color:rgba(255,255,255,.6)}
.text-white\/80{color:rgba(255,255,255,.8)}
.text-white\/85{color:rgba(255,255,255,.85)}
.text-white\/90{color:rgba(255,255,255,.9)}
.text-navy-100\/70{color:rgba(184,201,221,.7)}
.text-navy-100\/80{color:rgba(184,201,221,.8)}
.text-navy-100\/85{color:rgba(184,201,221,.85)}
.text-navy-100\/90{color:rgba(184,201,221,.9)}
.text-navy-100\/95{color:rgba(184,201,221,.95)}
.text-navy-200\/80{color:rgba(136,163,197,.8)}

/* Shadows & Effects */
.shadow-md{box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1)}
.shadow-lg{box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1)}
.shadow-xl{box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1)}
.shadow-2xl{box-shadow:0 25px 50px -12px rgba(0,0,0,.25)}
.cursor-pointer{cursor:pointer}
.glass{backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px)}

/* Transitions */
.transition-all{transition:all .3s cubic-bezier(.4,0,.2,1)}
.transition-colors{transition-property:color,background-color,border-color;transition-duration:.3s}
.transition-transform{transition:transform .3s}
.transition{transition:all .15s}
.duration-300{transition-duration:.3s}
.duration-700{transition-duration:.7s}

/* Hover states */
.hover\:bg-navy-50:hover{background-color:var(--navy-50)}
.hover\:bg-navy-800:hover{background-color:var(--navy-800)}
.hover\:bg-ice:hover{background-color:var(--ice)}
.hover\:bg-white:hover{background-color:white}
.hover\:bg-white\/10:hover{background-color:rgba(255,255,255,.1)}
.hover\:bg-white\/20:hover{background-color:rgba(255,255,255,.2)}
.hover\:bg-green-600:hover{background-color:#16a34a}
.hover\:bg-navy-50\/40:hover{background-color:rgba(232,238,245,.4)}
.hover\:text-white:hover{color:white}
.hover\:text-navy-100:hover{color:var(--navy-100)}
.hover\:text-navy-200:hover{color:var(--navy-200)}
.hover\:text-navy-900:hover{color:var(--navy-900)}
.hover\:text-ice:hover{color:var(--ice)}
.hover\:scale-110:hover{transform:scale(1.1)}
.hover\:gap-3:hover{gap:.75rem}
.hover\:shadow-lg:hover{box-shadow:0 10px 15px -3px rgba(0,0,0,.1)}
.hover\:shadow-xl:hover{box-shadow:0 20px 25px -5px rgba(0,0,0,.1)}
.hover\:shadow-2xl:hover{box-shadow:0 25px 50px -12px rgba(0,0,0,.25)}
.hover\:border-ice:hover{border-color:var(--ice)}
.hover\:border-ice\/30:hover{border-color:rgba(27,95,170,.3)}
.hover\:border-green-500:hover{border-color:#22c55e}
.hover\:-translate-x-1:hover{transform:translateX(-.25rem)}

/* Focus */
.focus\:border-ice:focus{border-color:var(--ice);outline:0}
.focus\:ring-2:focus{box-shadow:0 0 0 2px rgba(27,95,170,.2)}
.focus\:ring-ice\/20:focus{box-shadow:0 0 0 2px rgba(27,95,170,.2)}
.focus\:outline-none:focus{outline:none}

/* Group hover */
.group:hover .group-hover\:scale-110{transform:scale(1.1)}
.group:hover .group-hover\:bg-ice{background-color:var(--ice)}
.group:hover .group-hover\:bg-green-500{background-color:#22c55e}
.group:hover .group-hover\:text-white{color:white}
.group:hover .group-hover\:-translate-x-1{transform:translateX(-.25rem)}

/* Forms */
input,textarea,select{
  font-family:inherit;
  width:100%;
  font-size:.95rem;
  border:1px solid var(--gray-200);
  border-radius:.5rem;
  padding:.75rem 1rem;
  transition:all .2s;
  background:white;
  color:var(--navy-900);
}
input:focus,textarea:focus,select:focus{
  border-color:var(--ice);
  outline:none;
  box-shadow:0 0 0 2px rgba(27,95,170,.2);
}
.resize-none{resize:none}

/* SVG */
svg{fill:none;stroke:currentColor}
.fill-current{fill:currentColor}

/* ==================== شاشة الـ Loading ==================== */
#loader-screen{
  position:fixed;
  inset:0;
  z-index:9999;
  background:linear-gradient(135deg,#061530 0%,#0A1F3D 50%,#1B5FAA 100%);
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  gap:2rem;
  transition:opacity .5s ease,visibility .5s ease;
}
#loader-screen.hidden{opacity:0;visibility:hidden;pointer-events:none;display:flex!important}
.loader-snowflake{width:80px;height:80px;animation:snowflake-spin 3s linear infinite;opacity:.85}
@keyframes snowflake-spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}

.loader-wrapper{
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;
  height:80px;
  font-family:'Cairo',"Poppins",sans-serif;
  font-size:1.4em;
  font-weight:700;
  user-select:none;
  color:#fff;
  transform:scale(1.8);
  letter-spacing:.05em;
}
.loader{
  position:absolute;
  top:0;left:0;
  height:100%;width:100%;
  z-index:1;
  -webkit-mask:repeating-linear-gradient(90deg,transparent 0,transparent 6px,black 7px,black 8px);
          mask:repeating-linear-gradient(90deg,transparent 0,transparent 6px,black 7px,black 8px);
}
.loader::after{
  content:"";
  position:absolute;
  top:0;left:0;
  width:100%;height:100%;
  background-image:
    radial-gradient(circle at 50% 50%,#88A3C5 0%,transparent 50%),
    radial-gradient(circle at 45% 45%,#1B5FAA 0%,transparent 45%),
    radial-gradient(circle at 55% 55%,#B8C9DD 0%,transparent 45%),
    radial-gradient(circle at 45% 55%,#3D6FA5 0%,transparent 45%),
    radial-gradient(circle at 55% 45%,#E8EEF5 0%,transparent 45%);
  -webkit-mask:radial-gradient(circle at 50% 50%,transparent 0%,transparent 10%,black 25%);
          mask:radial-gradient(circle at 50% 50%,transparent 0%,transparent 10%,black 25%);
  animation:transform-animation .5s infinite alternate,opacity-animation 1s infinite;
  animation-timing-function:cubic-bezier(.6,.8,.5,1);
}
@keyframes transform-animation{0%{transform:translate(-55%)}100%{transform:translate(55%)}}
@keyframes opacity-animation{0%,100%{opacity:0}15%{opacity:1}65%{opacity:0}}
.loader-letter{display:inline-block;opacity:0;animation:loader-letter-anim 1s infinite linear;z-index:2}
.loader-letter:nth-child(1){animation-delay:.025s}
.loader-letter:nth-child(2){animation-delay:.05s}
.loader-letter:nth-child(3){animation-delay:.075s}
.loader-letter:nth-child(4){animation-delay:.10s}
.loader-letter:nth-child(5){animation-delay:.125s}
.loader-letter:nth-child(6){animation-delay:.15s}
.loader-letter:nth-child(7){animation-delay:.175s}
.loader-letter:nth-child(8){animation-delay:.20s}
.loader-letter:nth-child(9){animation-delay:.225s}
.loader-letter:nth-child(10){animation-delay:.25s}
@keyframes loader-letter-anim{
  0%{opacity:0}
  5%{opacity:1;text-shadow:0 0 4px #fff;transform:scale(1.1) translateY(-2px)}
  20%{opacity:.2}
  100%{opacity:0}
}

/* Animations */
@keyframes fadeInUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
.animate-fade-up{animation:fadeInUp .8s ease-out forwards}
.animate-fade-in{animation:fadeIn 1.2s ease-out forwards}
.delay-100{animation-delay:.1s;opacity:0}
.delay-200{animation-delay:.2s;opacity:0}
.delay-300{animation-delay:.3s;opacity:0}
.delay-400{animation-delay:.4s;opacity:0}
.delay-500{animation-delay:.5s;opacity:0}
.card-hover{transition:all .4s cubic-bezier(.4,0,.2,1)}
.card-hover:hover{transform:translateY(-8px)}
.snowflake-decoration{animation:snowflake-rotate 60s linear infinite}
@keyframes snowflake-rotate{from{transform:rotate(0)}to{transform:rotate(360deg)}}

.section-label{
  display:inline-flex;
  align-items:center;
  gap:12px;
  color:var(--ice);
  font-size:13px;
  letter-spacing:.3em;
  font-weight:500;
  margin-bottom:16px;
}
.section-label::before{content:'';width:40px;height:2px;background:var(--ice)}

.reveal{opacity:0;transform:translateY(40px);transition:all .8s ease-out}
.reveal.active{opacity:1;transform:translateY(0)}

/* Hero backgrounds */
.hero-bg{
  background:
    linear-gradient(135deg,rgba(6,21,48,.92) 0%,rgba(10,31,61,.85) 50%,rgba(27,95,170,.7) 100%),
    url('https://images.unsplash.com/photo-1631545806609-2dffd6db05dc?w=1920&q=80') center/cover;
}
.page-hero{
  background:
    linear-gradient(135deg,rgba(6,21,48,.95) 0%,rgba(10,31,61,.88) 100%),
    url('https://images.unsplash.com/photo-1631545806609-2dffd6db05dc?w=1920&q=80') center/cover;
  min-height:60vh;
}

/* Header */
.nav-link.active-page{color:var(--ice)!important;position:relative}
.nav-link.active-page::after{
  content:'';
  position:absolute;
  bottom:-2px;
  right:16px;left:16px;
  height:2px;
  background:var(--ice);
  border-radius:2px;
}

/* Mega Menu */
.mega-menu{
  position:absolute;
  top:100%;
  right:50%;
  transform:translateX(50%);
  margin-top:1px;
  width:720px;
  max-width:90vw;
  background:white;
  box-shadow:0 20px 60px rgba(6,21,48,.15);
  border-radius:12px;
  overflow:hidden;
  opacity:0;
  visibility:hidden;
  transition:opacity .25s ease,visibility .25s ease,margin-top .25s ease;
  z-index:100;
}
.has-mega:hover .mega-menu,
.has-mega:focus-within .mega-menu{opacity:1;visibility:visible;margin-top:0}
.mega-menu-grid{display:grid;grid-template-columns:220px 1fr}
.mega-menu-side{
  background:linear-gradient(135deg,var(--navy-800),var(--navy-900));
  color:white;
  padding:28px 24px;
  position:relative;
  overflow:hidden;
}
.mega-menu-side .mm-side-title{font-family:'Cairo',serif;font-weight:700;font-size:18px;margin-bottom:8px}
.mega-menu-side .mm-side-desc{font-size:12px;color:var(--navy-100);line-height:1.7;opacity:.85}
.mega-menu-side .mm-side-link{
  display:inline-flex;
  align-items:center;
  gap:6px;
  margin-top:18px;
  font-size:13px;
  color:white;
  font-weight:500;
  padding:8px 14px;
  background:rgba(255,255,255,.1);
  border-radius:6px;
  transition:background .2s;
}
.mega-menu-side .mm-side-link:hover{background:rgba(255,255,255,.2)}
.mega-menu-side::before{
  content:'';
  position:absolute;
  bottom:-40px;
  left:-40px;
  width:120px;
  height:120px;
  border:2px solid rgba(255,255,255,.05);
  border-radius:50%;
}
.mega-menu-list{padding:14px;display:grid;grid-template-columns:1fr 1fr;gap:4px}
.mega-menu-item{
  display:flex;
  align-items:flex-start;
  gap:10px;
  padding:12px 14px;
  border-radius:8px;
  transition:background .2s;
}
.mega-menu-item:hover{background:var(--navy-50)}
.mega-menu-item .mm-icon{
  width:36px;
  height:36px;
  border-radius:8px;
  background:var(--navy-50);
  display:flex;
  align-items:center;
  justify-content:center;
  flex-shrink:0;
  color:var(--ice);
}
.mega-menu-item:hover .mm-icon{background:var(--ice);color:white}
.mega-menu-item .mm-text{flex:1;min-width:0}
.mega-menu-item .mm-title{font-weight:600;color:var(--navy-900);font-size:13px;margin-bottom:2px}
.mega-menu-item .mm-desc{font-size:11px;color:#6b7280;line-height:1.5}

/* Simple Dropdown */
.dropdown-simple{
  position:absolute;
  top:100%;
  right:0;
  margin-top:1px;
  width:240px;
  background:white;
  box-shadow:0 20px 60px rgba(6,21,48,.15);
  border-radius:12px;
  overflow:hidden;
  opacity:0;
  visibility:hidden;
  transition:opacity .25s ease,visibility .25s ease,margin-top .25s ease;
  z-index:100;
}
.has-dropdown:hover .dropdown-simple,
.has-dropdown:focus-within .dropdown-simple{opacity:1;visibility:visible;margin-top:0}
.dropdown-simple a{
  display:block;
  padding:12px 18px;
  color:var(--navy-900);
  font-size:13px;
  border-bottom:1px solid #f3f4f6;
  transition:all .2s;
}
.dropdown-simple a:last-child{border-bottom:none}
.dropdown-simple a:hover{background:var(--navy-50);color:var(--ice);padding-right:24px}

/* Mobile Accordion */
.mobile-accordion{border-bottom:1px solid #f3f4f6}
.mobile-accordion-trigger{
  width:100%;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:14px 24px;
  font-weight:500;
  color:var(--navy-900);
  text-align:right;
  font-family:inherit;
  font-size:1rem;
}
.mobile-accordion-content{
  max-height:0;
  overflow:hidden;
  transition:max-height .3s ease;
  background:var(--navy-50);
}
.mobile-accordion.open .mobile-accordion-content{max-height:500px}
.mobile-accordion-content a{
  display:block;
  padding:10px 36px;
  font-size:13px;
  color:var(--navy-900);
  border-bottom:1px solid rgba(255,255,255,.5);
}
.mobile-accordion-content a:last-child{border-bottom:none}
.mobile-accordion .acc-icon{transition:transform .3s}
.mobile-accordion.open .acc-icon{transform:rotate(180deg)}

/* Logo SVG */
.logo-snowflake-svg{width:100%;height:100%}

/* Filter buttons */
.filter-btn{transition:all .2s}

/* Scroll margin */
.scroll-mt-32{scroll-margin-top:8rem}

/* Sticky positioning */
.sticky.top-\[88px\]{top:88px}

/* Iframes & embeds */
iframe{max-width:100%;border:0}

/* ==================== Responsive Breakpoints ==================== */

/* Small (sm) - 640px */
@media (min-width: 640px) {
  .sm\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}
  .sm\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}
  .sm\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}
}

/* Medium (md) - 768px */
@media (min-width: 768px) {
  .md\:flex{display:flex}
  .md\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}
  .md\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}
  .md\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}
  .md\:flex-row{flex-direction:row}
  .md\:text-5xl{font-size:3rem;line-height:1}
  .md\:text-6xl{font-size:3.75rem;line-height:1}
  .md\:text-xl{font-size:1.25rem;line-height:1.75rem}
}

/* Large (lg) - 1024px */
@media (min-width: 1024px) {
  .lg\:block{display:block}
  .lg\:flex{display:flex}
  .lg\:hidden{display:none!important}
  .lg\:inline-flex{display:inline-flex}
  .lg\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}
  .lg\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}
  .lg\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}
  .lg\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}
  .lg\:grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}
  .lg\:grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}
  .lg\:col-span-2{grid-column:span 2/span 2}
  .lg\:col-span-4{grid-column:span 4/span 4}
  .lg\:order-1{order:1}
  .lg\:order-2{order:2}
  .lg\:py-32{padding-top:8rem;padding-bottom:8rem}
  .lg\:p-10{padding:2.5rem}
  .lg\:text-4xl{font-size:2.25rem;line-height:2.5rem}
  .lg\:text-5xl{font-size:3rem;line-height:1}
  .lg\:text-6xl{font-size:3.75rem;line-height:1}
  .lg\:text-7xl{font-size:4.5rem;line-height:1}
  .lg\:divide-y-0>*+*{border-top-width:0}
}
