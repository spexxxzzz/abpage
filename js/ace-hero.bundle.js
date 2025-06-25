/*! For license information please see ace-hero.bundle.js.LICENSE.txt */
(() => {
    "use strict";
    var e = {
            21: (e, t, n) => {
                n.d(t, { A: () => s });
                var r = n(601),
                    a = n.n(r),
                    o = n(314),
                    i = n.n(o)()(a());
                i.push([
                    e.id,
                    "*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}/*\n! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font-family by default.\n2. Use the user's configured `mono` font-feature-settings by default.\n3. Use the user's configured `mono` font-variation-settings by default.\n4. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-feature-settings: normal; /* 2 */\n  font-variation-settings: normal; /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  letter-spacing: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\ninput:where([type='button']),\ninput:where([type='reset']),\ninput:where([type='submit']) {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden]:where(:not([hidden=\"until-found\"])) {\n  display: none;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\n.pointer-events-none {\n  pointer-events: none;\n}\n.visible {\n  visibility: visible;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.inset-0 {\n  inset: 0px;\n}\n.bottom-0 {\n  bottom: 0px;\n}\n.bottom-0\\.5 {\n  bottom: 0.125rem;\n}\n.bottom-8 {\n  bottom: var(--space-8, 2rem);\n}\n.left-1\\/2 {\n  left: 50%;\n}\n.left-\\[100px\\] {\n  left: 100px;\n}\n.left-\\[150px\\] {\n  left: 150px;\n}\n.left-\\[50px\\] {\n  left: 50px;\n}\n.right-0 {\n  right: 0px;\n}\n.right-8 {\n  right: var(--space-8, 2rem);\n}\n.top-0 {\n  top: 0px;\n}\n.top-1\\/2 {\n  top: 50%;\n}\n.top-\\[50px\\] {\n  top: 50px;\n}\n.top-\\[60px\\] {\n  top: 60px;\n}\n.top-\\[90px\\] {\n  top: 90px;\n}\n.z-10 {\n  z-index: 10;\n}\n.z-30 {\n  z-index: 30;\n}\n.z-40 {\n  z-index: 40;\n}\n.z-50 {\n  z-index: 50;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.mb-1 {\n  margin-bottom: var(--space-1, 0.25rem);\n}\n.mb-3 {\n  margin-bottom: var(--space-3, 0.75rem);\n}\n.mb-4 {\n  margin-bottom: var(--space-4, 1rem);\n}\n.mb-6 {\n  margin-bottom: var(--space-6, 1.5rem);\n}\n.ml-2 {\n  margin-left: var(--space-2, 0.5rem);\n}\n.ml-auto {\n  margin-left: auto;\n}\n.mt-1 {\n  margin-top: var(--space-1, 0.25rem);\n}\n.mt-12 {\n  margin-top: var(--space-12, 3rem);\n}\n.block {\n  display: block;\n}\n.inline-block {\n  display: inline-block;\n}\n.inline {\n  display: inline;\n}\n.flex {\n  display: flex;\n}\n.grid {\n  display: grid;\n}\n.hidden {\n  display: none;\n}\n.aspect-square {\n  aspect-ratio: 1 / 1;\n}\n.h-1 {\n  height: var(--space-1, 0.25rem);\n}\n.h-1\\.5 {\n  height: 0.375rem;\n}\n.h-10 {\n  height: 2.5rem;\n}\n.h-12 {\n  height: var(--space-12, 3rem);\n}\n.h-2 {\n  height: var(--space-2, 0.5rem);\n}\n.h-20 {\n  height: var(--space-20, 5rem);\n}\n.h-3 {\n  height: var(--space-3, 0.75rem);\n}\n.h-4 {\n  height: var(--space-4, 1rem);\n}\n.h-5 {\n  height: 1.25rem;\n}\n.h-7 {\n  height: 1.75rem;\n}\n.h-8 {\n  height: var(--space-8, 2rem);\n}\n.h-\\[50vh\\] {\n  height: 50vh;\n}\n.h-\\[calc\\(100\\%-28px\\)\\] {\n  height: calc(100% - 28px);\n}\n.h-\\[calc\\(100\\%-30px\\)\\] {\n  height: calc(100% - 30px);\n}\n.h-full {\n  height: 100%;\n}\n.min-h-\\[40px\\] {\n  min-height: 40px;\n}\n.w-1 {\n  width: var(--space-1, 0.25rem);\n}\n.w-1\\.5 {\n  width: 0.375rem;\n}\n.w-1\\/3 {\n  width: 33.333333%;\n}\n.w-10 {\n  width: 2.5rem;\n}\n.w-12 {\n  width: var(--space-12, 3rem);\n}\n.w-16 {\n  width: var(--space-16, 4rem);\n}\n.w-24 {\n  width: var(--space-24, 6rem);\n}\n.w-3 {\n  width: var(--space-3, 0.75rem);\n}\n.w-3\\/5 {\n  width: 60%;\n}\n.w-32 {\n  width: 8rem;\n}\n.w-4 {\n  width: var(--space-4, 1rem);\n}\n.w-40 {\n  width: 10rem;\n}\n.w-5 {\n  width: 1.25rem;\n}\n.w-6 {\n  width: var(--space-6, 1.5rem);\n}\n.w-8 {\n  width: var(--space-8, 2rem);\n}\n.w-\\[40\\%\\] {\n  width: 40%;\n}\n.w-\\[50\\%\\] {\n  width: 50%;\n}\n.w-\\[60\\%\\] {\n  width: 60%;\n}\n.w-\\[65\\%\\] {\n  width: 65%;\n}\n.w-\\[70\\%\\] {\n  width: 70%;\n}\n.w-\\[75\\%\\] {\n  width: 75%;\n}\n.w-\\[80\\%\\] {\n  width: 80%;\n}\n.w-\\[85\\%\\] {\n  width: 85%;\n}\n.w-\\[88\\%\\] {\n  width: 88%;\n}\n.w-\\[89\\%\\] {\n  width: 89%;\n}\n.w-\\[90\\%\\] {\n  width: 90%;\n}\n.w-\\[91\\%\\] {\n  width: 91%;\n}\n.w-\\[92\\%\\] {\n  width: 92%;\n}\n.w-\\[93\\%\\] {\n  width: 93%;\n}\n.w-\\[94\\%\\] {\n  width: 94%;\n}\n.w-\\[95\\%\\] {\n  width: 95%;\n}\n.w-\\[96\\%\\] {\n  width: 96%;\n}\n.w-\\[97\\%\\] {\n  width: 97%;\n}\n.w-\\[98\\%\\] {\n  width: 98%;\n}\n.w-full {\n  width: 100%;\n}\n.max-w-3xl {\n  max-width: 48rem;\n}\n.max-w-5xl {\n  max-width: 64rem;\n}\n.max-w-\\[80\\%\\] {\n  max-width: 80%;\n}\n.max-w-screen-2xl {\n  max-width: 1536px;\n}\n.max-w-xl {\n  max-width: 36rem;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.-translate-x-1\\/2 {\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-translate-x-2 {\n  --tw-translate-x: calc(var(--space-2, 0.5rem) * -1);\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-translate-x-2\\.5 {\n  --tw-translate-x: -0.625rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-translate-y-1\\/2 {\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-translate-y-2 {\n  --tw-translate-y: calc(var(--space-2, 0.5rem) * -1);\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-translate-y-2\\.5 {\n  --tw-translate-y: -0.625rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n@keyframes pulse {\n\n  50% {\n    opacity: .5;\n  }\n}\n.animate-pulse {\n  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n}\n.resize {\n  resize: both;\n}\n.grid-cols-5 {\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n}\n.grid-cols-7 {\n  grid-template-columns: repeat(7, minmax(0, 1fr));\n}\n.grid-cols-8 {\n  grid-template-columns: repeat(8, minmax(0, 1fr));\n}\n.grid-rows-6 {\n  grid-template-rows: repeat(6, minmax(0, 1fr));\n}\n.flex-col {\n  flex-direction: column;\n}\n.items-center {\n  align-items: center;\n}\n.justify-center {\n  justify-content: center;\n}\n.gap-1 {\n  gap: var(--space-1, 0.25rem);\n}\n.gap-2 {\n  gap: var(--space-2, 0.5rem);\n}\n.space-x-1\\.5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.375rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.375rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-y-1\\.5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.375rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.375rem * var(--tw-space-y-reverse));\n}\n.space-y-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(var(--space-2, 0.5rem) * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(var(--space-2, 0.5rem) * var(--tw-space-y-reverse));\n}\n.space-y-3 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(var(--space-3, 0.75rem) * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(var(--space-3, 0.75rem) * var(--tw-space-y-reverse));\n}\n.space-y-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(var(--space-4, 1rem) * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(var(--space-4, 1rem) * var(--tw-space-y-reverse));\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.overflow-visible {\n  overflow: visible;\n}\n.overflow-y-auto {\n  overflow-y: auto;\n}\n.rounded {\n  border-radius: 0.25rem;\n}\n.rounded-full {\n  border-radius: var(--radius-full, 9999px);\n}\n.rounded-lg {\n  border-radius: var(--radius-lg, 0.5rem);\n}\n.rounded-md {\n  border-radius: var(--radius-md, 0.25rem);\n}\n.rounded-sm {\n  border-radius: var(--radius-sm, 0.125rem);\n}\n.rounded-b-lg {\n  border-bottom-right-radius: var(--radius-lg, 0.5rem);\n  border-bottom-left-radius: var(--radius-lg, 0.5rem);\n}\n.rounded-t-lg {\n  border-top-left-radius: var(--radius-lg, 0.5rem);\n  border-top-right-radius: var(--radius-lg, 0.5rem);\n}\n.rounded-tr-lg {\n  border-top-right-radius: var(--radius-lg, 0.5rem);\n}\n.border {\n  border-width: 1px;\n}\n.border-2 {\n  border-width: 2px;\n}\n.border-\\[0\\.5px\\] {\n  border-width: 0.5px;\n}\n.border-b {\n  border-bottom-width: 1px;\n}\n.border-r {\n  border-right-width: 1px;\n}\n.border-t {\n  border-top-width: 1px;\n}\n.border-dashed {\n  border-style: dashed;\n}\n.border-gray-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity, 1));\n}\n.border-gray-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity, 1));\n}\n.border-gray-400\\/70 {\n  border-color: rgb(156 163 175 / 0.7);\n}\n.border-gray-500\\/80 {\n  border-color: rgb(107 114 128 / 0.8);\n}\n.border-zinc-500\\/60 {\n  border-color: rgb(113 113 122 / 0.6);\n}\n.border-zinc-700 {\n  --tw-border-opacity: 1;\n  border-color: rgb(63 63 70 / var(--tw-border-opacity, 1));\n}\n.bg-gray-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1));\n}\n.bg-gray-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1));\n}\n.bg-gray-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(209 213 219 / var(--tw-bg-opacity, 1));\n}\n.bg-gray-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(156 163 175 / var(--tw-bg-opacity, 1));\n}\n.bg-gray-400\\/10 {\n  background-color: rgb(156 163 175 / 0.1);\n}\n.bg-gray-400\\/40 {\n  background-color: rgb(156 163 175 / 0.4);\n}\n.bg-gray-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 250 251 / var(--tw-bg-opacity, 1));\n}\n.bg-gray-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(107 114 128 / var(--tw-bg-opacity, 1));\n}\n.bg-gray-500\\/40 {\n  background-color: rgb(107 114 128 / 0.4);\n}\n.bg-transparent {\n  background-color: transparent;\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.bg-zinc-400\\/70 {\n  background-color: rgb(161 161 170 / 0.7);\n}\n.bg-zinc-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(24 24 27 / var(--tw-bg-opacity, 1));\n}\n.bg-gradient-to-b {\n  background-image: linear-gradient(to bottom, var(--tw-gradient-stops));\n}\n.from-gray-100 {\n  --tw-gradient-from: #f3f4f6 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(243 244 246 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n.to-gray-200 {\n  --tw-gradient-to: #e5e7eb var(--tw-gradient-to-position);\n}\n.object-cover {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.p-1 {\n  padding: var(--space-1, 0.25rem);\n}\n.p-2 {\n  padding: var(--space-2, 0.5rem);\n}\n.p-3 {\n  padding: var(--space-3, 0.75rem);\n}\n.p-4 {\n  padding: var(--space-4, 1rem);\n}\n.px-3 {\n  padding-left: var(--space-3, 0.75rem);\n  padding-right: var(--space-3, 0.75rem);\n}\n.px-4 {\n  padding-left: var(--space-4, 1rem);\n  padding-right: var(--space-4, 1rem);\n}\n.py-2 {\n  padding-top: var(--space-2, 0.5rem);\n  padding-bottom: var(--space-2, 0.5rem);\n}\n.py-4 {\n  padding-top: var(--space-4, 1rem);\n  padding-bottom: var(--space-4, 1rem);\n}\n.py-8 {\n  padding-top: var(--space-8, 2rem);\n  padding-bottom: var(--space-8, 2rem);\n}\n.pr-4 {\n  padding-right: var(--space-4, 1rem);\n}\n.text-center {\n  text-align: center;\n}\n.text-5xl {\n  font-size: 3rem;\n  line-height: var(--line-height-tight, 1.25);\n}\n.text-\\[10px\\] {\n  font-size: 10px;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: var(--line-height-tight, 1.25);\n}\n.font-medium {\n  font-weight: 500;\n}\n.leading-normal {\n  line-height: 1.5;\n}\n.leading-tight {\n  line-height: 1.25;\n}\n.tracking-tight {\n  letter-spacing: -0.025em;\n}\n.text-gray-500 {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity, 1));\n}\n.text-gray-600 {\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity, 1));\n}\n.text-gray-700 {\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity, 1));\n}\n.text-gray-800 {\n  --tw-text-opacity: 1;\n  color: rgb(31 41 55 / var(--tw-text-opacity, 1));\n}\n.text-gray-900 {\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity, 1));\n}\n.text-zinc-100\\/95 {\n  color: rgb(244 244 245 / 0.95);\n}\n.text-zinc-300 {\n  --tw-text-opacity: 1;\n  color: rgb(212 212 216 / var(--tw-text-opacity, 1));\n}\n.underline {\n  text-decoration-line: underline;\n}\n.placeholder-gray-500::-moz-placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-placeholder-opacity, 1));\n}\n.placeholder-gray-500::placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-placeholder-opacity, 1));\n}\n.opacity-0 {\n  opacity: 0;\n}\n.opacity-100 {\n  opacity: 1;\n}\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.blur {\n  --tw-blur: blur(8px);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.drop-shadow {\n  --tw-drop-shadow: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.grayscale {\n  --tw-grayscale: grayscale(100%);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.backdrop-filter {\n  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n.transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-colors {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-opacity {\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.duration-150 {\n  transition-duration: 150ms;\n}\n.duration-200 {\n  transition-duration: 200ms;\n}\n.duration-500 {\n  transition-duration: 500ms;\n}\n.duration-700 {\n  transition-duration: 700ms;\n}\n.ease-in-out {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.text-shadow {\n  text-shadow: rgba(0, 0, 0, 0.2) -1px -1px 2px;\n}\n\n/* Additional custom styles for the AceHero component */\n.appearing-text {\n  position: relative;\n}\n\n.char-glow {\n  text-shadow: 0 0 8px var(--glow-color, rgba(255, 255, 255, 0.7));\n}\n/* Premium metallic reflection effect */\n.metallic-text {\n  background: linear-gradient(\n    90deg,\n    rgb(255, 255, 255) 0%,\n    rgb(240, 240, 240) 25%,\n    rgb(172, 187, 205) 30%,\n    rgb(240, 240, 240) 40%, \n    rgb(255, 255, 255) 50%,\n    rgb(240, 240, 240) 60%,\n    rgb(220, 225, 230) 70%,\n    rgb(240, 240, 240) 80%,\n    rgb(255, 255, 255) 100%\n  );\n  background-size: 300% auto;\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  animation: light-reflection 6s ease-in-out infinite;\n  text-shadow: 0 0 1px rgba(0, 0, 0, 0.1);\n}\n\n@keyframes light-reflection {\n  0% {\n    background-position: 0% center;\n  }\n  50% {\n    background-position: 100% center;\n  }\n  100% {\n    background-position: 0% center;\n  }\n}\n\n/* Animation related styles */\n@keyframes wobble-0 {\n  0% {\n    transform: translate(0, 0) rotate(0deg);\n  }\n  25% {\n    transform: translate(-8px, 8px) rotate(-1deg);\n  }\n  50% {\n    transform: translate(0, -8px) rotate(1deg);\n  }\n  75% {\n    transform: translate(8px, -8px) rotate(-0.5deg);\n  }\n  100% {\n    transform: translate(0, 0) rotate(0deg);\n  }\n}\n\n@keyframes wobble-1 {\n  0% {\n    transform: translate(0, 0) scale(1);\n  }\n  25% {\n    transform: translate(-12px, 4px) scale(0.98);\n  }\n  50% {\n    transform: translate(0, -4px) scale(1.02);\n  }\n  75% {\n    transform: translate(12px, -4px) scale(0.99);\n  }\n  100% {\n    transform: translate(0, 0) scale(1);\n  }\n}\n\n@keyframes wobble-2 {\n  0% {\n    transform: translate(0, 0);\n  }\n  20% {\n    transform: translate(-10px, 2px);\n  }\n  40% {\n    transform: translate(5px, 8px);\n  }\n  60% {\n    transform: translate(-7px, -10px);\n  }\n  80% {\n    transform: translate(8px, -2px);\n  }\n  100% {\n    transform: translate(0, 0);\n  }\n}\n\n@keyframes wobble-3 {\n  0% {\n    transform: translate(0, 0) rotate(0deg);\n  }\n  30% {\n    transform: translate(-5px, 9px) rotate(1.5deg);\n  }\n  60% {\n    transform: translate(7px, -3px) rotate(-1deg);\n  }\n  100% {\n    transform: translate(0, 0) rotate(0deg);\n  }\n}\n\n@keyframes wobble-4 {\n  0% {\n    transform: translate(0, 0);\n  }\n  33% {\n    transform: translate(-12px, -6px);\n  }\n  66% {\n    transform: translate(9px, 8px);\n  }\n  100% {\n    transform: translate(0, 0);\n  }\n}\n\n@keyframes wobble-5 {\n  0% {\n    transform: translate(0, 0) scale(1) rotate(0deg);\n  }\n  25% {\n    transform: translate(-5px, 6px) scale(0.97) rotate(-0.5deg);\n  }\n  50% {\n    transform: translate(7px, -9px) scale(1.02) rotate(1deg);\n  }\n  75% {\n    transform: translate(-8px, -3px) scale(0.99) rotate(-0.7deg);\n  }\n  100% {\n    transform: translate(0, 0) scale(1) rotate(0deg);\n  }\n}\n\n.hover\\:border-gray-400:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(156 163 175 / var(--tw-border-opacity, 1));\n}\n\n.hover\\:bg-gray-50:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 250 251 / var(--tw-bg-opacity, 1));\n}\n\n.hover\\:bg-gray-500:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(107 114 128 / var(--tw-bg-opacity, 1));\n}\n\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n.focus\\:ring-2:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n\n.focus\\:ring-blue-500:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity, 1));\n}\n\n@media (min-width: 640px) {\n\n  .sm\\:mb-2 {\n    margin-bottom: var(--space-2, 0.5rem);\n  }\n\n  .sm\\:mb-8 {\n    margin-bottom: var(--space-8, 2rem);\n  }\n\n  .sm\\:mt-0 {\n    margin-top: 0px;\n  }\n\n  .sm\\:block {\n    display: block;\n  }\n\n  .sm\\:px-6 {\n    padding-left: var(--space-6, 1.5rem);\n    padding-right: var(--space-6, 1.5rem);\n  }\n\n  .sm\\:text-3xl {\n    font-size: 1.875rem;\n    line-height: var(--line-height-tight, 1.25);\n  }\n\n  .sm\\:text-7xl {\n    font-size: 4.5rem;\n    line-height: 1;\n  }\n}\n\n@media (min-width: 768px) {\n\n  .md\\:h-\\[100vh\\] {\n    height: 100vh;\n  }\n\n  .md\\:max-w-2xl {\n    max-width: 42rem;\n  }\n\n  .md\\:py-10 {\n    padding-top: 2.5rem;\n    padding-bottom: 2.5rem;\n  }\n\n  .md\\:text-3xl {\n    font-size: 1.875rem;\n    line-height: var(--line-height-tight, 1.25);\n  }\n\n  .md\\:text-8xl {\n    font-size: 6rem;\n    line-height: 1;\n  }\n}\n\n@media (min-width: 1024px) {\n\n  .lg\\:px-8 {\n    padding-left: var(--space-8, 2rem);\n    padding-right: var(--space-8, 2rem);\n  }\n\n  .lg\\:text-3xl {\n    font-size: 1.875rem;\n    line-height: var(--line-height-tight, 1.25);\n  }\n\n  .lg\\:text-8xl {\n    font-size: 6rem;\n    line-height: 1;\n  }\n} ",
                    "",
                ]);
                const s = i;
            },
            56: (e, t, n) => {
                e.exports = function (e) {
                    var t = n.nc;
                    t && e.setAttribute("nonce", t);
                };
            },
            72: (e) => {
                var t = [];
                function n(e) {
                    for (var n = -1, r = 0; r < t.length; r++)
                        if (t[r].identifier === e) {
                            n = r;
                            break;
                        }
                    return n;
                }
                function r(e, r) {
                    for (var o = {}, i = [], s = 0; s < e.length; s++) {
                        var l = e[s],
                            u = r.base ? l[0] + r.base : l[0],
                            c = o[u] || 0,
                            d = "".concat(u, " ").concat(c);
                        o[u] = c + 1;
                        var f = n(d),
                            h = { css: l[1], media: l[2], sourceMap: l[3], supports: l[4], layer: l[5] };
                        if (-1 !== f) t[f].references++, t[f].updater(h);
                        else {
                            var p = a(h, r);
                            (r.byIndex = s), t.splice(s, 0, { identifier: d, updater: p, references: 1 });
                        }
                        i.push(d);
                    }
                    return i;
                }
                function a(e, t) {
                    var n = t.domAPI(t);
                    return (
                        n.update(e),
                        function (t) {
                            if (t) {
                                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer) return;
                                n.update((e = t));
                            } else n.remove();
                        }
                    );
                }
                e.exports = function (e, a) {
                    var o = r((e = e || []), (a = a || {}));
                    return function (e) {
                        e = e || [];
                        for (var i = 0; i < o.length; i++) {
                            var s = n(o[i]);
                            t[s].references--;
                        }
                        for (var l = r(e, a), u = 0; u < o.length; u++) {
                            var c = n(o[u]);
                            0 === t[c].references && (t[c].updater(), t.splice(c, 1));
                        }
                        o = l;
                    };
                };
            },
            113: (e) => {
                e.exports = function (e, t) {
                    if (t.styleSheet) t.styleSheet.cssText = e;
                    else {
                        for (; t.firstChild; ) t.removeChild(t.firstChild);
                        t.appendChild(document.createTextNode(e));
                    }
                };
            },
            159: (e) => {
                e.exports = function (e) {
                    var t = document.createElement("style");
                    return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
                };
            },
            221: (e, t, n) => {
                var r = n(540);
                function a(e) {
                    var t = "https://react.dev/errors/" + e;
                    if (1 < arguments.length) {
                        t += "?args[]=" + encodeURIComponent(arguments[1]);
                        for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                    }
                    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
                }
                function o() {}
                var i = {
                        d: {
                            f: o,
                            r: function () {
                                throw Error(a(522));
                            },
                            D: o,
                            C: o,
                            L: o,
                            m: o,
                            X: o,
                            S: o,
                            M: o,
                        },
                        p: 0,
                        findDOMNode: null,
                    },
                    s = Symbol.for("react.portal"),
                    l = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
                function u(e, t) {
                    return "font" === e ? "" : "string" == typeof t ? ("use-credentials" === t ? t : "") : void 0;
                }
                (t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
                    (t.createPortal = function (e, t) {
                        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                        if (!t || (1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType)) throw Error(a(299));
                        return (function (e, t, n) {
                            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                            return { $$typeof: s, key: null == r ? null : "" + r, children: e, containerInfo: t, implementation: n };
                        })(e, t, null, n);
                    }),
                    (t.flushSync = function (e) {
                        var t = l.T,
                            n = i.p;
                        try {
                            if (((l.T = null), (i.p = 2), e)) return e();
                        } finally {
                            (l.T = t), (i.p = n), i.d.f();
                        }
                    }),
                    (t.preconnect = function (e, t) {
                        "string" == typeof e && ((t = t ? ("string" == typeof (t = t.crossOrigin) ? ("use-credentials" === t ? t : "") : void 0) : null), i.d.C(e, t));
                    }),
                    (t.prefetchDNS = function (e) {
                        "string" == typeof e && i.d.D(e);
                    }),
                    (t.preinit = function (e, t) {
                        if ("string" == typeof e && t && "string" == typeof t.as) {
                            var n = t.as,
                                r = u(n, t.crossOrigin),
                                a = "string" == typeof t.integrity ? t.integrity : void 0,
                                o = "string" == typeof t.fetchPriority ? t.fetchPriority : void 0;
                            "style" === n
                                ? i.d.S(e, "string" == typeof t.precedence ? t.precedence : void 0, { crossOrigin: r, integrity: a, fetchPriority: o })
                                : "script" === n && i.d.X(e, { crossOrigin: r, integrity: a, fetchPriority: o, nonce: "string" == typeof t.nonce ? t.nonce : void 0 });
                        }
                    }),
                    (t.preinitModule = function (e, t) {
                        if ("string" == typeof e)
                            if ("object" == typeof t && null !== t) {
                                if (null == t.as || "script" === t.as) {
                                    var n = u(t.as, t.crossOrigin);
                                    i.d.M(e, { crossOrigin: n, integrity: "string" == typeof t.integrity ? t.integrity : void 0, nonce: "string" == typeof t.nonce ? t.nonce : void 0 });
                                }
                            } else null == t && i.d.M(e);
                    }),
                    (t.preload = function (e, t) {
                        if ("string" == typeof e && "object" == typeof t && null !== t && "string" == typeof t.as) {
                            var n = t.as,
                                r = u(n, t.crossOrigin);
                            i.d.L(e, n, {
                                crossOrigin: r,
                                integrity: "string" == typeof t.integrity ? t.integrity : void 0,
                                nonce: "string" == typeof t.nonce ? t.nonce : void 0,
                                type: "string" == typeof t.type ? t.type : void 0,
                                fetchPriority: "string" == typeof t.fetchPriority ? t.fetchPriority : void 0,
                                referrerPolicy: "string" == typeof t.referrerPolicy ? t.referrerPolicy : void 0,
                                imageSrcSet: "string" == typeof t.imageSrcSet ? t.imageSrcSet : void 0,
                                imageSizes: "string" == typeof t.imageSizes ? t.imageSizes : void 0,
                                media: "string" == typeof t.media ? t.media : void 0,
                            });
                        }
                    }),
                    (t.preloadModule = function (e, t) {
                        if ("string" == typeof e)
                            if (t) {
                                var n = u(t.as, t.crossOrigin);
                                i.d.m(e, { as: "string" == typeof t.as && "script" !== t.as ? t.as : void 0, crossOrigin: n, integrity: "string" == typeof t.integrity ? t.integrity : void 0 });
                            } else i.d.m(e);
                    }),
                    (t.requestFormReset = function (e) {
                        i.d.r(e);
                    }),
                    (t.unstable_batchedUpdates = function (e, t) {
                        return e(t);
                    }),
                    (t.useFormState = function (e, t, n) {
                        return l.H.useFormState(e, t, n);
                    }),
                    (t.useFormStatus = function () {
                        return l.H.useHostTransitionStatus();
                    }),
                    (t.version = "19.1.0");
            },
            247: (e, t, n) => {
                var r = n(982),
                    a = n(540),
                    o = n(961);
                function i(e) {
                    var t = "https://react.dev/errors/" + e;
                    if (1 < arguments.length) {
                        t += "?args[]=" + encodeURIComponent(arguments[1]);
                        for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                    }
                    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
                }
                function s(e) {
                    var t = e,
                        n = e;
                    if (e.alternate) for (; t.return; ) t = t.return;
                    else {
                        e = t;
                        do {
                            !!(4098 & (t = e).flags) && (n = t.return), (e = t.return);
                        } while (e);
                    }
                    return 3 === t.tag ? n : null;
                }
                function l(e) {
                    if (13 === e.tag) {
                        var t = e.memoizedState;
                        if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)) return t.dehydrated;
                    }
                    return null;
                }
                function u(e) {
                    if (s(e) !== e) throw Error(i(188));
                }
                function c(e) {
                    var t = e.tag;
                    if (5 === t || 26 === t || 27 === t || 6 === t) return e;
                    for (e = e.child; null !== e; ) {
                        if (null !== (t = c(e))) return t;
                        e = e.sibling;
                    }
                    return null;
                }
                var d = Object.assign,
                    f = Symbol.for("react.element"),
                    h = Symbol.for("react.transitional.element"),
                    p = Symbol.for("react.portal"),
                    m = Symbol.for("react.fragment"),
                    y = Symbol.for("react.strict_mode"),
                    g = Symbol.for("react.profiler"),
                    v = Symbol.for("react.provider"),
                    b = Symbol.for("react.consumer"),
                    w = Symbol.for("react.context"),
                    x = Symbol.for("react.forward_ref"),
                    k = Symbol.for("react.suspense"),
                    S = Symbol.for("react.suspense_list"),
                    E = Symbol.for("react.memo"),
                    P = Symbol.for("react.lazy");
                Symbol.for("react.scope");
                var T = Symbol.for("react.activity");
                Symbol.for("react.legacy_hidden"), Symbol.for("react.tracing_marker");
                var C = Symbol.for("react.memo_cache_sentinel");
                Symbol.for("react.view_transition");
                var A = Symbol.iterator;
                function L(e) {
                    return null === e || "object" != typeof e ? null : "function" == typeof (e = (A && e[A]) || e["@@iterator"]) ? e : null;
                }
                var j = Symbol.for("react.client.reference");
                function N(e) {
                    if (null == e) return null;
                    if ("function" == typeof e) return e.$$typeof === j ? null : e.displayName || e.name || null;
                    if ("string" == typeof e) return e;
                    switch (e) {
                        case m:
                            return "Fragment";
                        case g:
                            return "Profiler";
                        case y:
                            return "StrictMode";
                        case k:
                            return "Suspense";
                        case S:
                            return "SuspenseList";
                        case T:
                            return "Activity";
                    }
                    if ("object" == typeof e)
                        switch (e.$$typeof) {
                            case p:
                                return "Portal";
                            case w:
                                return (e.displayName || "Context") + ".Provider";
                            case b:
                                return (e._context.displayName || "Context") + ".Consumer";
                            case x:
                                var t = e.render;
                                return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                            case E:
                                return null !== (t = e.displayName || null) ? t : N(e.type) || "Memo";
                            case P:
                                (t = e._payload), (e = e._init);
                                try {
                                    return N(e(t));
                                } catch (e) {}
                        }
                    return null;
                }
                var O = Array.isArray,
                    M = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
                    z = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
                    R = { pending: !1, data: null, method: null, action: null },
                    _ = [],
                    D = -1;
                function F(e) {
                    return { current: e };
                }
                function I(e) {
                    0 > D || ((e.current = _[D]), (_[D] = null), D--);
                }
                function V(e, t) {
                    D++, (_[D] = e.current), (e.current = t);
                }
                var B = F(null),
                    U = F(null),
                    $ = F(null),
                    H = F(null);
                function W(e, t) {
                    switch ((V($, t), V(U, e), V(B, null), t.nodeType)) {
                        case 9:
                        case 11:
                            e = (e = t.documentElement) && (e = e.namespaceURI) ? rd(e) : 0;
                            break;
                        default:
                            if (((e = t.tagName), (t = t.namespaceURI))) e = ad((t = rd(t)), e);
                            else
                                switch (e) {
                                    case "svg":
                                        e = 1;
                                        break;
                                    case "math":
                                        e = 2;
                                        break;
                                    default:
                                        e = 0;
                                }
                    }
                    I(B), V(B, e);
                }
                function Y() {
                    I(B), I(U), I($);
                }
                function q(e) {
                    null !== e.memoizedState && V(H, e);
                    var t = B.current,
                        n = ad(t, e.type);
                    t !== n && (V(U, e), V(B, n));
                }
                function G(e) {
                    U.current === e && (I(B), I(U)), H.current === e && (I(H), (qd._currentValue = R));
                }
                var X = Object.prototype.hasOwnProperty,
                    K = r.unstable_scheduleCallback,
                    Q = r.unstable_cancelCallback,
                    Z = r.unstable_shouldYield,
                    J = r.unstable_requestPaint,
                    ee = r.unstable_now,
                    te = r.unstable_getCurrentPriorityLevel,
                    ne = r.unstable_ImmediatePriority,
                    re = r.unstable_UserBlockingPriority,
                    ae = r.unstable_NormalPriority,
                    oe = r.unstable_LowPriority,
                    ie = r.unstable_IdlePriority,
                    se = r.log,
                    le = r.unstable_setDisableYieldValue,
                    ue = null,
                    ce = null;
                function de(e) {
                    if (("function" == typeof se && le(e), ce && "function" == typeof ce.setStrictMode))
                        try {
                            ce.setStrictMode(ue, e);
                        } catch (e) {}
                }
                var fe = Math.clz32
                        ? Math.clz32
                        : function (e) {
                              return 0 == (e >>>= 0) ? 32 : (31 - ((he(e) / pe) | 0)) | 0;
                          },
                    he = Math.log,
                    pe = Math.LN2,
                    me = 256,
                    ye = 4194304;
                function ge(e) {
                    var t = 42 & e;
                    if (0 !== t) return t;
                    switch (e & -e) {
                        case 1:
                            return 1;
                        case 2:
                            return 2;
                        case 4:
                            return 4;
                        case 8:
                            return 8;
                        case 16:
                            return 16;
                        case 32:
                            return 32;
                        case 64:
                            return 64;
                        case 128:
                            return 128;
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                            return 4194048 & e;
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                            return 62914560 & e;
                        case 67108864:
                            return 67108864;
                        case 134217728:
                            return 134217728;
                        case 268435456:
                            return 268435456;
                        case 536870912:
                            return 536870912;
                        case 1073741824:
                            return 0;
                        default:
                            return e;
                    }
                }
                function ve(e, t, n) {
                    var r = e.pendingLanes;
                    if (0 === r) return 0;
                    var a = 0,
                        o = e.suspendedLanes,
                        i = e.pingedLanes;
                    e = e.warmLanes;
                    var s = 134217727 & r;
                    return (
                        0 !== s ? (0 != (r = s & ~o) ? (a = ge(r)) : 0 != (i &= s) ? (a = ge(i)) : n || (0 != (n = s & ~e) && (a = ge(n)))) : 0 != (s = r & ~o) ? (a = ge(s)) : 0 !== i ? (a = ge(i)) : n || (0 != (n = r & ~e) && (a = ge(n))),
                        0 === a ? 0 : 0 === t || t === a || t & o || !((o = a & -a) >= (n = t & -t) || (32 === o && 4194048 & n)) ? a : t
                    );
                }
                function be(e, t) {
                    return !(e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t);
                }
                function we(e, t) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 4:
                        case 8:
                        case 64:
                            return t + 250;
                        case 16:
                        case 32:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                            return t + 5e3;
                        default:
                            return -1;
                    }
                }
                function xe() {
                    var e = me;
                    return !(4194048 & (me <<= 1)) && (me = 256), e;
                }
                function ke() {
                    var e = ye;
                    return !(62914560 & (ye <<= 1)) && (ye = 4194304), e;
                }
                function Se(e) {
                    for (var t = [], n = 0; 31 > n; n++) t.push(e);
                    return t;
                }
                function Ee(e, t) {
                    (e.pendingLanes |= t), 268435456 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
                }
                function Pe(e, t, n) {
                    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
                    var r = 31 - fe(t);
                    (e.entangledLanes |= t), (e.entanglements[r] = 1073741824 | e.entanglements[r] | (4194090 & n));
                }
                function Te(e, t) {
                    var n = (e.entangledLanes |= t);
                    for (e = e.entanglements; n; ) {
                        var r = 31 - fe(n),
                            a = 1 << r;
                        (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
                    }
                }
                function Ce(e) {
                    switch (e) {
                        case 2:
                            e = 1;
                            break;
                        case 8:
                            e = 4;
                            break;
                        case 32:
                            e = 16;
                            break;
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                            e = 128;
                            break;
                        case 268435456:
                            e = 134217728;
                            break;
                        default:
                            e = 0;
                    }
                    return e;
                }
                function Ae(e) {
                    return 2 < (e &= -e) ? (8 < e ? (134217727 & e ? 32 : 268435456) : 8) : 2;
                }
                function Le() {
                    var e = z.p;
                    return 0 !== e ? e : void 0 === (e = window.event) ? 32 : sf(e.type);
                }
                var je = Math.random().toString(36).slice(2),
                    Ne = "__reactFiber$" + je,
                    Oe = "__reactProps$" + je,
                    Me = "__reactContainer$" + je,
                    ze = "__reactEvents$" + je,
                    Re = "__reactListeners$" + je,
                    _e = "__reactHandles$" + je,
                    De = "__reactResources$" + je,
                    Fe = "__reactMarker$" + je;
                function Ie(e) {
                    delete e[Ne], delete e[Oe], delete e[ze], delete e[Re], delete e[_e];
                }
                function Ve(e) {
                    var t = e[Ne];
                    if (t) return t;
                    for (var n = e.parentNode; n; ) {
                        if ((t = n[Me] || n[Ne])) {
                            if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                                for (e = vd(e); null !== e; ) {
                                    if ((n = e[Ne])) return n;
                                    e = vd(e);
                                }
                            return t;
                        }
                        n = (e = n).parentNode;
                    }
                    return null;
                }
                function Be(e) {
                    if ((e = e[Ne] || e[Me])) {
                        var t = e.tag;
                        if (5 === t || 6 === t || 13 === t || 26 === t || 27 === t || 3 === t) return e;
                    }
                    return null;
                }
                function Ue(e) {
                    var t = e.tag;
                    if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
                    throw Error(i(33));
                }
                function $e(e) {
                    var t = e[De];
                    return t || (t = e[De] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t;
                }
                function He(e) {
                    e[Fe] = !0;
                }
                var We = new Set(),
                    Ye = {};
                function qe(e, t) {
                    Ge(e, t), Ge(e + "Capture", t);
                }
                function Ge(e, t) {
                    for (Ye[e] = t, e = 0; e < t.length; e++) We.add(t[e]);
                }
                var Xe,
                    Ke,
                    Qe = RegExp(
                        "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
                    ),
                    Ze = {},
                    Je = {};
                function et(e, t, n) {
                    if (((a = t), X.call(Je, a) || (!X.call(Ze, a) && (Qe.test(a) ? (Je[a] = !0) : ((Ze[a] = !0), 0)))))
                        if (null === n) e.removeAttribute(t);
                        else {
                            switch (typeof n) {
                                case "undefined":
                                case "function":
                                case "symbol":
                                    return void e.removeAttribute(t);
                                case "boolean":
                                    var r = t.toLowerCase().slice(0, 5);
                                    if ("data-" !== r && "aria-" !== r) return void e.removeAttribute(t);
                            }
                            e.setAttribute(t, "" + n);
                        }
                    var a;
                }
                function tt(e, t, n) {
                    if (null === n) e.removeAttribute(t);
                    else {
                        switch (typeof n) {
                            case "undefined":
                            case "function":
                            case "symbol":
                            case "boolean":
                                return void e.removeAttribute(t);
                        }
                        e.setAttribute(t, "" + n);
                    }
                }
                function nt(e, t, n, r) {
                    if (null === r) e.removeAttribute(n);
                    else {
                        switch (typeof r) {
                            case "undefined":
                            case "function":
                            case "symbol":
                            case "boolean":
                                return void e.removeAttribute(n);
                        }
                        e.setAttributeNS(t, n, "" + r);
                    }
                }
                function rt(e) {
                    if (void 0 === Xe)
                        try {
                            throw Error();
                        } catch (e) {
                            var t = e.stack.trim().match(/\n( *(at )?)/);
                            (Xe = (t && t[1]) || ""), (Ke = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "");
                        }
                    return "\n" + Xe + e + Ke;
                }
                var at = !1;
                function ot(e, t) {
                    if (!e || at) return "";
                    at = !0;
                    var n = Error.prepareStackTrace;
                    Error.prepareStackTrace = void 0;
                    try {
                        var r = {
                            DetermineComponentFrameRoot: function () {
                                try {
                                    if (t) {
                                        var n = function () {
                                            throw Error();
                                        };
                                        if (
                                            (Object.defineProperty(n.prototype, "props", {
                                                set: function () {
                                                    throw Error();
                                                },
                                            }),
                                            "object" == typeof Reflect && Reflect.construct)
                                        ) {
                                            try {
                                                Reflect.construct(n, []);
                                            } catch (e) {
                                                var r = e;
                                            }
                                            Reflect.construct(e, [], n);
                                        } else {
                                            try {
                                                n.call();
                                            } catch (e) {
                                                r = e;
                                            }
                                            e.call(n.prototype);
                                        }
                                    } else {
                                        try {
                                            throw Error();
                                        } catch (e) {
                                            r = e;
                                        }
                                        (n = e()) && "function" == typeof n.catch && n.catch(function () {});
                                    }
                                } catch (e) {
                                    if (e && r && "string" == typeof e.stack) return [e.stack, r.stack];
                                }
                                return [null, null];
                            },
                        };
                        r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
                        var a = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
                        a && a.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
                        var o = r.DetermineComponentFrameRoot(),
                            i = o[0],
                            s = o[1];
                        if (i && s) {
                            var l = i.split("\n"),
                                u = s.split("\n");
                            for (a = r = 0; r < l.length && !l[r].includes("DetermineComponentFrameRoot"); ) r++;
                            for (; a < u.length && !u[a].includes("DetermineComponentFrameRoot"); ) a++;
                            if (r === l.length || a === u.length) for (r = l.length - 1, a = u.length - 1; 1 <= r && 0 <= a && l[r] !== u[a]; ) a--;
                            for (; 1 <= r && 0 <= a; r--, a--)
                                if (l[r] !== u[a]) {
                                    if (1 !== r || 1 !== a)
                                        do {
                                            if ((r--, 0 > --a || l[r] !== u[a])) {
                                                var c = "\n" + l[r].replace(" at new ", " at ");
                                                return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c;
                                            }
                                        } while (1 <= r && 0 <= a);
                                    break;
                                }
                        }
                    } finally {
                        (at = !1), (Error.prepareStackTrace = n);
                    }
                    return (n = e ? e.displayName || e.name : "") ? rt(n) : "";
                }
                function it(e) {
                    switch (e.tag) {
                        case 26:
                        case 27:
                        case 5:
                            return rt(e.type);
                        case 16:
                            return rt("Lazy");
                        case 13:
                            return rt("Suspense");
                        case 19:
                            return rt("SuspenseList");
                        case 0:
                        case 15:
                            return ot(e.type, !1);
                        case 11:
                            return ot(e.type.render, !1);
                        case 1:
                            return ot(e.type, !0);
                        case 31:
                            return rt("Activity");
                        default:
                            return "";
                    }
                }
                function st(e) {
                    try {
                        var t = "";
                        do {
                            (t += it(e)), (e = e.return);
                        } while (e);
                        return t;
                    } catch (e) {
                        return "\nError generating stack: " + e.message + "\n" + e.stack;
                    }
                }
                function lt(e) {
                    switch (typeof e) {
                        case "bigint":
                        case "boolean":
                        case "number":
                        case "string":
                        case "undefined":
                        case "object":
                            return e;
                        default:
                            return "";
                    }
                }
                function ut(e) {
                    var t = e.type;
                    return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t);
                }
                function ct(e) {
                    e._valueTracker ||
                        (e._valueTracker = (function (e) {
                            var t = ut(e) ? "checked" : "value",
                                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                                r = "" + e[t];
                            if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
                                var a = n.get,
                                    o = n.set;
                                return (
                                    Object.defineProperty(e, t, {
                                        configurable: !0,
                                        get: function () {
                                            return a.call(this);
                                        },
                                        set: function (e) {
                                            (r = "" + e), o.call(this, e);
                                        },
                                    }),
                                    Object.defineProperty(e, t, { enumerable: n.enumerable }),
                                    {
                                        getValue: function () {
                                            return r;
                                        },
                                        setValue: function (e) {
                                            r = "" + e;
                                        },
                                        stopTracking: function () {
                                            (e._valueTracker = null), delete e[t];
                                        },
                                    }
                                );
                            }
                        })(e));
                }
                function dt(e) {
                    if (!e) return !1;
                    var t = e._valueTracker;
                    if (!t) return !0;
                    var n = t.getValue(),
                        r = "";
                    return e && (r = ut(e) ? (e.checked ? "true" : "false") : e.value), (e = r) !== n && (t.setValue(e), !0);
                }
                function ft(e) {
                    if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
                    try {
                        return e.activeElement || e.body;
                    } catch (t) {
                        return e.body;
                    }
                }
                var ht = /[\n"\\]/g;
                function pt(e) {
                    return e.replace(ht, function (e) {
                        return "\\" + e.charCodeAt(0).toString(16) + " ";
                    });
                }
                function mt(e, t, n, r, a, o, i, s) {
                    (e.name = ""),
                        null != i && "function" != typeof i && "symbol" != typeof i && "boolean" != typeof i ? (e.type = i) : e.removeAttribute("type"),
                        null != t
                            ? "number" === i
                                ? ((0 === t && "" === e.value) || e.value != t) && (e.value = "" + lt(t))
                                : e.value !== "" + lt(t) && (e.value = "" + lt(t))
                            : ("submit" !== i && "reset" !== i) || e.removeAttribute("value"),
                        null != t ? gt(e, i, lt(t)) : null != n ? gt(e, i, lt(n)) : null != r && e.removeAttribute("value"),
                        null == a && null != o && (e.defaultChecked = !!o),
                        null != a && (e.checked = a && "function" != typeof a && "symbol" != typeof a),
                        null != s && "function" != typeof s && "symbol" != typeof s && "boolean" != typeof s ? (e.name = "" + lt(s)) : e.removeAttribute("name");
                }
                function yt(e, t, n, r, a, o, i, s) {
                    if ((null != o && "function" != typeof o && "symbol" != typeof o && "boolean" != typeof o && (e.type = o), null != t || null != n)) {
                        if (("submit" === o || "reset" === o) && null == t) return;
                        (n = null != n ? "" + lt(n) : ""), (t = null != t ? "" + lt(t) : n), s || t === e.value || (e.value = t), (e.defaultValue = t);
                    }
                    (r = "function" != typeof (r = null != r ? r : a) && "symbol" != typeof r && !!r),
                        (e.checked = s ? e.checked : !!r),
                        (e.defaultChecked = !!r),
                        null != i && "function" != typeof i && "symbol" != typeof i && "boolean" != typeof i && (e.name = i);
                }
                function gt(e, t, n) {
                    ("number" === t && ft(e.ownerDocument) === e) || e.defaultValue === "" + n || (e.defaultValue = "" + n);
                }
                function vt(e, t, n, r) {
                    if (((e = e.options), t)) {
                        t = {};
                        for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
                        for (n = 0; n < e.length; n++) (a = t.hasOwnProperty("$" + e[n].value)), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0);
                    } else {
                        for (n = "" + lt(n), t = null, a = 0; a < e.length; a++) {
                            if (e[a].value === n) return (e[a].selected = !0), void (r && (e[a].defaultSelected = !0));
                            null !== t || e[a].disabled || (t = e[a]);
                        }
                        null !== t && (t.selected = !0);
                    }
                }
                function bt(e, t, n) {
                    null == t || ((t = "" + lt(t)) !== e.value && (e.value = t), null != n) ? (e.defaultValue = null != n ? "" + lt(n) : "") : e.defaultValue !== t && (e.defaultValue = t);
                }
                function wt(e, t, n, r) {
                    if (null == t) {
                        if (null != r) {
                            if (null != n) throw Error(i(92));
                            if (O(r)) {
                                if (1 < r.length) throw Error(i(93));
                                r = r[0];
                            }
                            n = r;
                        }
                        null == n && (n = ""), (t = n);
                    }
                    (n = lt(t)), (e.defaultValue = n), (r = e.textContent) === n && "" !== r && null !== r && (e.value = r);
                }
                function xt(e, t) {
                    if (t) {
                        var n = e.firstChild;
                        if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
                    }
                    e.textContent = t;
                }
                var kt = new Set(
                    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
                        " "
                    )
                );
                function St(e, t, n) {
                    var r = 0 === t.indexOf("--");
                    null == n || "boolean" == typeof n || "" === n
                        ? r
                            ? e.setProperty(t, "")
                            : "float" === t
                            ? (e.cssFloat = "")
                            : (e[t] = "")
                        : r
                        ? e.setProperty(t, n)
                        : "number" != typeof n || 0 === n || kt.has(t)
                        ? "float" === t
                            ? (e.cssFloat = n)
                            : (e[t] = ("" + n).trim())
                        : (e[t] = n + "px");
                }
                function Et(e, t, n) {
                    if (null != t && "object" != typeof t) throw Error(i(62));
                    if (((e = e.style), null != n)) {
                        for (var r in n) !n.hasOwnProperty(r) || (null != t && t.hasOwnProperty(r)) || (0 === r.indexOf("--") ? e.setProperty(r, "") : "float" === r ? (e.cssFloat = "") : (e[r] = ""));
                        for (var a in t) (r = t[a]), t.hasOwnProperty(a) && n[a] !== r && St(e, a, r);
                    } else for (var o in t) t.hasOwnProperty(o) && St(e, o, t[o]);
                }
                function Pt(e) {
                    if (-1 === e.indexOf("-")) return !1;
                    switch (e) {
                        case "annotation-xml":
                        case "color-profile":
                        case "font-face":
                        case "font-face-src":
                        case "font-face-uri":
                        case "font-face-format":
                        case "font-face-name":
                        case "missing-glyph":
                            return !1;
                        default:
                            return !0;
                    }
                }
                var Tt = new Map([
                        ["acceptCharset", "accept-charset"],
                        ["htmlFor", "for"],
                        ["httpEquiv", "http-equiv"],
                        ["crossOrigin", "crossorigin"],
                        ["accentHeight", "accent-height"],
                        ["alignmentBaseline", "alignment-baseline"],
                        ["arabicForm", "arabic-form"],
                        ["baselineShift", "baseline-shift"],
                        ["capHeight", "cap-height"],
                        ["clipPath", "clip-path"],
                        ["clipRule", "clip-rule"],
                        ["colorInterpolation", "color-interpolation"],
                        ["colorInterpolationFilters", "color-interpolation-filters"],
                        ["colorProfile", "color-profile"],
                        ["colorRendering", "color-rendering"],
                        ["dominantBaseline", "dominant-baseline"],
                        ["enableBackground", "enable-background"],
                        ["fillOpacity", "fill-opacity"],
                        ["fillRule", "fill-rule"],
                        ["floodColor", "flood-color"],
                        ["floodOpacity", "flood-opacity"],
                        ["fontFamily", "font-family"],
                        ["fontSize", "font-size"],
                        ["fontSizeAdjust", "font-size-adjust"],
                        ["fontStretch", "font-stretch"],
                        ["fontStyle", "font-style"],
                        ["fontVariant", "font-variant"],
                        ["fontWeight", "font-weight"],
                        ["glyphName", "glyph-name"],
                        ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
                        ["glyphOrientationVertical", "glyph-orientation-vertical"],
                        ["horizAdvX", "horiz-adv-x"],
                        ["horizOriginX", "horiz-origin-x"],
                        ["imageRendering", "image-rendering"],
                        ["letterSpacing", "letter-spacing"],
                        ["lightingColor", "lighting-color"],
                        ["markerEnd", "marker-end"],
                        ["markerMid", "marker-mid"],
                        ["markerStart", "marker-start"],
                        ["overlinePosition", "overline-position"],
                        ["overlineThickness", "overline-thickness"],
                        ["paintOrder", "paint-order"],
                        ["panose-1", "panose-1"],
                        ["pointerEvents", "pointer-events"],
                        ["renderingIntent", "rendering-intent"],
                        ["shapeRendering", "shape-rendering"],
                        ["stopColor", "stop-color"],
                        ["stopOpacity", "stop-opacity"],
                        ["strikethroughPosition", "strikethrough-position"],
                        ["strikethroughThickness", "strikethrough-thickness"],
                        ["strokeDasharray", "stroke-dasharray"],
                        ["strokeDashoffset", "stroke-dashoffset"],
                        ["strokeLinecap", "stroke-linecap"],
                        ["strokeLinejoin", "stroke-linejoin"],
                        ["strokeMiterlimit", "stroke-miterlimit"],
                        ["strokeOpacity", "stroke-opacity"],
                        ["strokeWidth", "stroke-width"],
                        ["textAnchor", "text-anchor"],
                        ["textDecoration", "text-decoration"],
                        ["textRendering", "text-rendering"],
                        ["transformOrigin", "transform-origin"],
                        ["underlinePosition", "underline-position"],
                        ["underlineThickness", "underline-thickness"],
                        ["unicodeBidi", "unicode-bidi"],
                        ["unicodeRange", "unicode-range"],
                        ["unitsPerEm", "units-per-em"],
                        ["vAlphabetic", "v-alphabetic"],
                        ["vHanging", "v-hanging"],
                        ["vIdeographic", "v-ideographic"],
                        ["vMathematical", "v-mathematical"],
                        ["vectorEffect", "vector-effect"],
                        ["vertAdvY", "vert-adv-y"],
                        ["vertOriginX", "vert-origin-x"],
                        ["vertOriginY", "vert-origin-y"],
                        ["wordSpacing", "word-spacing"],
                        ["writingMode", "writing-mode"],
                        ["xmlnsXlink", "xmlns:xlink"],
                        ["xHeight", "x-height"],
                    ]),
                    Ct = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
                function At(e) {
                    return Ct.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
                }
                var Lt = null;
                function jt(e) {
                    return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e;
                }
                var Nt = null,
                    Ot = null;
                function Mt(e) {
                    var t = Be(e);
                    if (t && (e = t.stateNode)) {
                        var n = e[Oe] || null;
                        e: switch (((e = t.stateNode), t.type)) {
                            case "input":
                                if ((mt(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), (t = n.name), "radio" === n.type && null != t)) {
                                    for (n = e; n.parentNode; ) n = n.parentNode;
                                    for (n = n.querySelectorAll('input[name="' + pt("" + t) + '"][type="radio"]'), t = 0; t < n.length; t++) {
                                        var r = n[t];
                                        if (r !== e && r.form === e.form) {
                                            var a = r[Oe] || null;
                                            if (!a) throw Error(i(90));
                                            mt(r, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
                                        }
                                    }
                                    for (t = 0; t < n.length; t++) (r = n[t]).form === e.form && dt(r);
                                }
                                break e;
                            case "textarea":
                                bt(e, n.value, n.defaultValue);
                                break e;
                            case "select":
                                null != (t = n.value) && vt(e, !!n.multiple, t, !1);
                        }
                    }
                }
                var zt = !1;
                function Rt(e, t, n) {
                    if (zt) return e(t, n);
                    zt = !0;
                    try {
                        return e(t);
                    } finally {
                        if (((zt = !1), (null !== Nt || null !== Ot) && (Vu(), Nt && ((t = Nt), (e = Ot), (Ot = Nt = null), Mt(t), e)))) for (t = 0; t < e.length; t++) Mt(e[t]);
                    }
                }
                function _t(e, t) {
                    var n = e.stateNode;
                    if (null === n) return null;
                    var r = n[Oe] || null;
                    if (null === r) return null;
                    n = r[t];
                    e: switch (t) {
                        case "onClick":
                        case "onClickCapture":
                        case "onDoubleClick":
                        case "onDoubleClickCapture":
                        case "onMouseDown":
                        case "onMouseDownCapture":
                        case "onMouseMove":
                        case "onMouseMoveCapture":
                        case "onMouseUp":
                        case "onMouseUpCapture":
                        case "onMouseEnter":
                            (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), (e = !r);
                            break e;
                        default:
                            e = !1;
                    }
                    if (e) return null;
                    if (n && "function" != typeof n) throw Error(i(231, t, typeof n));
                    return n;
                }
                var Dt = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
                    Ft = !1;
                if (Dt)
                    try {
                        var It = {};
                        Object.defineProperty(It, "passive", {
                            get: function () {
                                Ft = !0;
                            },
                        }),
                            window.addEventListener("test", It, It),
                            window.removeEventListener("test", It, It);
                    } catch (e) {
                        Ft = !1;
                    }
                var Vt = null,
                    Bt = null,
                    Ut = null;
                function $t() {
                    if (Ut) return Ut;
                    var e,
                        t,
                        n = Bt,
                        r = n.length,
                        a = "value" in Vt ? Vt.value : Vt.textContent,
                        o = a.length;
                    for (e = 0; e < r && n[e] === a[e]; e++);
                    var i = r - e;
                    for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
                    return (Ut = a.slice(e, 1 < t ? 1 - t : void 0));
                }
                function Ht(e) {
                    var t = e.keyCode;
                    return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t), 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0;
                }
                function Wt() {
                    return !0;
                }
                function Yt() {
                    return !1;
                }
                function qt(e) {
                    function t(t, n, r, a, o) {
                        for (var i in ((this._reactName = t), (this._targetInst = r), (this.type = n), (this.nativeEvent = a), (this.target = o), (this.currentTarget = null), e))
                            e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
                        return (this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? Wt : Yt), (this.isPropagationStopped = Yt), this;
                    }
                    return (
                        d(t.prototype, {
                            preventDefault: function () {
                                this.defaultPrevented = !0;
                                var e = this.nativeEvent;
                                e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), (this.isDefaultPrevented = Wt));
                            },
                            stopPropagation: function () {
                                var e = this.nativeEvent;
                                e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), (this.isPropagationStopped = Wt));
                            },
                            persist: function () {},
                            isPersistent: Wt,
                        }),
                        t
                    );
                }
                var Gt,
                    Xt,
                    Kt,
                    Qt = {
                        eventPhase: 0,
                        bubbles: 0,
                        cancelable: 0,
                        timeStamp: function (e) {
                            return e.timeStamp || Date.now();
                        },
                        defaultPrevented: 0,
                        isTrusted: 0,
                    },
                    Zt = qt(Qt),
                    Jt = d({}, Qt, { view: 0, detail: 0 }),
                    en = qt(Jt),
                    tn = d({}, Jt, {
                        screenX: 0,
                        screenY: 0,
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        getModifierState: hn,
                        button: 0,
                        buttons: 0,
                        relatedTarget: function (e) {
                            return void 0 === e.relatedTarget ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
                        },
                        movementX: function (e) {
                            return "movementX" in e ? e.movementX : (e !== Kt && (Kt && "mousemove" === e.type ? ((Gt = e.screenX - Kt.screenX), (Xt = e.screenY - Kt.screenY)) : (Xt = Gt = 0), (Kt = e)), Gt);
                        },
                        movementY: function (e) {
                            return "movementY" in e ? e.movementY : Xt;
                        },
                    }),
                    nn = qt(tn),
                    rn = qt(d({}, tn, { dataTransfer: 0 })),
                    an = qt(d({}, Jt, { relatedTarget: 0 })),
                    on = qt(d({}, Qt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
                    sn = qt(
                        d({}, Qt, {
                            clipboardData: function (e) {
                                return "clipboardData" in e ? e.clipboardData : window.clipboardData;
                            },
                        })
                    ),
                    ln = qt(d({}, Qt, { data: 0 })),
                    un = {
                        Esc: "Escape",
                        Spacebar: " ",
                        Left: "ArrowLeft",
                        Up: "ArrowUp",
                        Right: "ArrowRight",
                        Down: "ArrowDown",
                        Del: "Delete",
                        Win: "OS",
                        Menu: "ContextMenu",
                        Apps: "ContextMenu",
                        Scroll: "ScrollLock",
                        MozPrintableKey: "Unidentified",
                    },
                    cn = {
                        8: "Backspace",
                        9: "Tab",
                        12: "Clear",
                        13: "Enter",
                        16: "Shift",
                        17: "Control",
                        18: "Alt",
                        19: "Pause",
                        20: "CapsLock",
                        27: "Escape",
                        32: " ",
                        33: "PageUp",
                        34: "PageDown",
                        35: "End",
                        36: "Home",
                        37: "ArrowLeft",
                        38: "ArrowUp",
                        39: "ArrowRight",
                        40: "ArrowDown",
                        45: "Insert",
                        46: "Delete",
                        112: "F1",
                        113: "F2",
                        114: "F3",
                        115: "F4",
                        116: "F5",
                        117: "F6",
                        118: "F7",
                        119: "F8",
                        120: "F9",
                        121: "F10",
                        122: "F11",
                        123: "F12",
                        144: "NumLock",
                        145: "ScrollLock",
                        224: "Meta",
                    },
                    dn = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
                function fn(e) {
                    var t = this.nativeEvent;
                    return t.getModifierState ? t.getModifierState(e) : !!(e = dn[e]) && !!t[e];
                }
                function hn() {
                    return fn;
                }
                var pn = qt(
                        d({}, Jt, {
                            key: function (e) {
                                if (e.key) {
                                    var t = un[e.key] || e.key;
                                    if ("Unidentified" !== t) return t;
                                }
                                return "keypress" === e.type ? (13 === (e = Ht(e)) ? "Enter" : String.fromCharCode(e)) : "keydown" === e.type || "keyup" === e.type ? cn[e.keyCode] || "Unidentified" : "";
                            },
                            code: 0,
                            location: 0,
                            ctrlKey: 0,
                            shiftKey: 0,
                            altKey: 0,
                            metaKey: 0,
                            repeat: 0,
                            locale: 0,
                            getModifierState: hn,
                            charCode: function (e) {
                                return "keypress" === e.type ? Ht(e) : 0;
                            },
                            keyCode: function (e) {
                                return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
                            },
                            which: function (e) {
                                return "keypress" === e.type ? Ht(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
                            },
                        })
                    ),
                    mn = qt(d({}, tn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 })),
                    yn = qt(d({}, Jt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: hn })),
                    gn = qt(d({}, Qt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
                    vn = qt(
                        d({}, tn, {
                            deltaX: function (e) {
                                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
                            },
                            deltaY: function (e) {
                                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
                            },
                            deltaZ: 0,
                            deltaMode: 0,
                        })
                    ),
                    bn = qt(d({}, Qt, { newState: 0, oldState: 0 })),
                    wn = [9, 13, 27, 32],
                    xn = Dt && "CompositionEvent" in window,
                    kn = null;
                Dt && "documentMode" in document && (kn = document.documentMode);
                var Sn = Dt && "TextEvent" in window && !kn,
                    En = Dt && (!xn || (kn && 8 < kn && 11 >= kn)),
                    Pn = String.fromCharCode(32),
                    Tn = !1;
                function Cn(e, t) {
                    switch (e) {
                        case "keyup":
                            return -1 !== wn.indexOf(t.keyCode);
                        case "keydown":
                            return 229 !== t.keyCode;
                        case "keypress":
                        case "mousedown":
                        case "focusout":
                            return !0;
                        default:
                            return !1;
                    }
                }
                function An(e) {
                    return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
                }
                var Ln = !1,
                    jn = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
                function Nn(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return "input" === t ? !!jn[e.type] : "textarea" === t;
                }
                function On(e, t, n, r) {
                    Nt ? (Ot ? Ot.push(r) : (Ot = [r])) : (Nt = r), 0 < (t = $c(t, "onChange")).length && ((n = new Zt("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
                }
                var Mn = null,
                    zn = null;
                function Rn(e) {
                    Rc(e, 0);
                }
                function _n(e) {
                    if (dt(Ue(e))) return e;
                }
                function Dn(e, t) {
                    if ("change" === e) return t;
                }
                var Fn = !1;
                if (Dt) {
                    var In;
                    if (Dt) {
                        var Vn = "oninput" in document;
                        if (!Vn) {
                            var Bn = document.createElement("div");
                            Bn.setAttribute("oninput", "return;"), (Vn = "function" == typeof Bn.oninput);
                        }
                        In = Vn;
                    } else In = !1;
                    Fn = In && (!document.documentMode || 9 < document.documentMode);
                }
                function Un() {
                    Mn && (Mn.detachEvent("onpropertychange", $n), (zn = Mn = null));
                }
                function $n(e) {
                    if ("value" === e.propertyName && _n(zn)) {
                        var t = [];
                        On(t, zn, e, jt(e)), Rt(Rn, t);
                    }
                }
                function Hn(e, t, n) {
                    "focusin" === e ? (Un(), (zn = n), (Mn = t).attachEvent("onpropertychange", $n)) : "focusout" === e && Un();
                }
                function Wn(e) {
                    if ("selectionchange" === e || "keyup" === e || "keydown" === e) return _n(zn);
                }
                function Yn(e, t) {
                    if ("click" === e) return _n(t);
                }
                function qn(e, t) {
                    if ("input" === e || "change" === e) return _n(t);
                }
                var Gn =
                    "function" == typeof Object.is
                        ? Object.is
                        : function (e, t) {
                              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
                          };
                function Xn(e, t) {
                    if (Gn(e, t)) return !0;
                    if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
                    var n = Object.keys(e),
                        r = Object.keys(t);
                    if (n.length !== r.length) return !1;
                    for (r = 0; r < n.length; r++) {
                        var a = n[r];
                        if (!X.call(t, a) || !Gn(e[a], t[a])) return !1;
                    }
                    return !0;
                }
                function Kn(e) {
                    for (; e && e.firstChild; ) e = e.firstChild;
                    return e;
                }
                function Qn(e, t) {
                    var n,
                        r = Kn(e);
                    for (e = 0; r; ) {
                        if (3 === r.nodeType) {
                            if (((n = e + r.textContent.length), e <= t && n >= t)) return { node: r, offset: t - e };
                            e = n;
                        }
                        e: {
                            for (; r; ) {
                                if (r.nextSibling) {
                                    r = r.nextSibling;
                                    break e;
                                }
                                r = r.parentNode;
                            }
                            r = void 0;
                        }
                        r = Kn(r);
                    }
                }
                function Zn(e, t) {
                    return !(!e || !t) && (e === t || ((!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? Zn(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))));
                }
                function Jn(e) {
                    for (var t = ft((e = null != e && null != e.ownerDocument && null != e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window).document); t instanceof e.HTMLIFrameElement; ) {
                        try {
                            var n = "string" == typeof t.contentWindow.location.href;
                        } catch (e) {
                            n = !1;
                        }
                        if (!n) break;
                        t = ft((e = t.contentWindow).document);
                    }
                    return t;
                }
                function er(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return t && (("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type)) || "textarea" === t || "true" === e.contentEditable);
                }
                var tr = Dt && "documentMode" in document && 11 >= document.documentMode,
                    nr = null,
                    rr = null,
                    ar = null,
                    or = !1;
                function ir(e, t, n) {
                    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                    or ||
                        null == nr ||
                        nr !== ft(r) ||
                        ((r =
                            "selectionStart" in (r = nr) && er(r)
                                ? { start: r.selectionStart, end: r.selectionEnd }
                                : { anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()).anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }),
                        (ar && Xn(ar, r)) || ((ar = r), 0 < (r = $c(rr, "onSelect")).length && ((t = new Zt("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = nr))));
                }
                function sr(e, t) {
                    var n = {};
                    return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
                }
                var lr = {
                        animationend: sr("Animation", "AnimationEnd"),
                        animationiteration: sr("Animation", "AnimationIteration"),
                        animationstart: sr("Animation", "AnimationStart"),
                        transitionrun: sr("Transition", "TransitionRun"),
                        transitionstart: sr("Transition", "TransitionStart"),
                        transitioncancel: sr("Transition", "TransitionCancel"),
                        transitionend: sr("Transition", "TransitionEnd"),
                    },
                    ur = {},
                    cr = {};
                function dr(e) {
                    if (ur[e]) return ur[e];
                    if (!lr[e]) return e;
                    var t,
                        n = lr[e];
                    for (t in n) if (n.hasOwnProperty(t) && t in cr) return (ur[e] = n[t]);
                    return e;
                }
                Dt &&
                    ((cr = document.createElement("div").style),
                    "AnimationEvent" in window || (delete lr.animationend.animation, delete lr.animationiteration.animation, delete lr.animationstart.animation),
                    "TransitionEvent" in window || delete lr.transitionend.transition);
                var fr = dr("animationend"),
                    hr = dr("animationiteration"),
                    pr = dr("animationstart"),
                    mr = dr("transitionrun"),
                    yr = dr("transitionstart"),
                    gr = dr("transitioncancel"),
                    vr = dr("transitionend"),
                    br = new Map(),
                    wr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
                        " "
                    );
                function xr(e, t) {
                    br.set(e, t), qe(t, [e]);
                }
                wr.push("scrollEnd");
                var kr = new WeakMap();
                function Sr(e, t) {
                    if ("object" == typeof e && null !== e) {
                        var n = kr.get(e);
                        return void 0 !== n ? n : ((t = { value: e, source: t, stack: st(t) }), kr.set(e, t), t);
                    }
                    return { value: e, source: t, stack: st(t) };
                }
                var Er = [],
                    Pr = 0,
                    Tr = 0;
                function Cr() {
                    for (var e = Pr, t = (Tr = Pr = 0); t < e; ) {
                        var n = Er[t];
                        Er[t++] = null;
                        var r = Er[t];
                        Er[t++] = null;
                        var a = Er[t];
                        Er[t++] = null;
                        var o = Er[t];
                        if (((Er[t++] = null), null !== r && null !== a)) {
                            var i = r.pending;
                            null === i ? (a.next = a) : ((a.next = i.next), (i.next = a)), (r.pending = a);
                        }
                        0 !== o && Nr(n, a, o);
                    }
                }
                function Ar(e, t, n, r) {
                    (Er[Pr++] = e), (Er[Pr++] = t), (Er[Pr++] = n), (Er[Pr++] = r), (Tr |= r), (e.lanes |= r), null !== (e = e.alternate) && (e.lanes |= r);
                }
                function Lr(e, t, n, r) {
                    return Ar(e, t, n, r), Or(e);
                }
                function jr(e, t) {
                    return Ar(e, null, null, t), Or(e);
                }
                function Nr(e, t, n) {
                    e.lanes |= n;
                    var r = e.alternate;
                    null !== r && (r.lanes |= n);
                    for (var a = !1, o = e.return; null !== o; ) (o.childLanes |= n), null !== (r = o.alternate) && (r.childLanes |= n), 22 === o.tag && (null === (e = o.stateNode) || 1 & e._visibility || (a = !0)), (e = o), (o = o.return);
                    return 3 === e.tag ? ((o = e.stateNode), a && null !== t && ((a = 31 - fe(n)), null === (r = (e = o.hiddenUpdates)[a]) ? (e[a] = [t]) : r.push(t), (t.lane = 536870912 | n)), o) : null;
                }
                function Or(e) {
                    if (50 < Nu) throw ((Nu = 0), (Ou = null), Error(i(185)));
                    for (var t = e.return; null !== t; ) t = (e = t).return;
                    return 3 === e.tag ? e.stateNode : null;
                }
                var Mr = {};
                function zr(e, t, n, r) {
                    (this.tag = e),
                        (this.key = n),
                        (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
                        (this.index = 0),
                        (this.refCleanup = this.ref = null),
                        (this.pendingProps = t),
                        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
                        (this.mode = r),
                        (this.subtreeFlags = this.flags = 0),
                        (this.deletions = null),
                        (this.childLanes = this.lanes = 0),
                        (this.alternate = null);
                }
                function Rr(e, t, n, r) {
                    return new zr(e, t, n, r);
                }
                function _r(e) {
                    return !(!(e = e.prototype) || !e.isReactComponent);
                }
                function Dr(e, t) {
                    var n = e.alternate;
                    return (
                        null === n
                            ? (((n = Rr(e.tag, t, e.key, e.mode)).elementType = e.elementType), (n.type = e.type), (n.stateNode = e.stateNode), (n.alternate = e), (e.alternate = n))
                            : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
                        (n.flags = 65011712 & e.flags),
                        (n.childLanes = e.childLanes),
                        (n.lanes = e.lanes),
                        (n.child = e.child),
                        (n.memoizedProps = e.memoizedProps),
                        (n.memoizedState = e.memoizedState),
                        (n.updateQueue = e.updateQueue),
                        (t = e.dependencies),
                        (n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
                        (n.sibling = e.sibling),
                        (n.index = e.index),
                        (n.ref = e.ref),
                        (n.refCleanup = e.refCleanup),
                        n
                    );
                }
                function Fr(e, t) {
                    e.flags &= 65011714;
                    var n = e.alternate;
                    return (
                        null === n
                            ? ((e.childLanes = 0), (e.lanes = t), (e.child = null), (e.subtreeFlags = 0), (e.memoizedProps = null), (e.memoizedState = null), (e.updateQueue = null), (e.dependencies = null), (e.stateNode = null))
                            : ((e.childLanes = n.childLanes),
                              (e.lanes = n.lanes),
                              (e.child = n.child),
                              (e.subtreeFlags = 0),
                              (e.deletions = null),
                              (e.memoizedProps = n.memoizedProps),
                              (e.memoizedState = n.memoizedState),
                              (e.updateQueue = n.updateQueue),
                              (e.type = n.type),
                              (t = n.dependencies),
                              (e.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext })),
                        e
                    );
                }
                function Ir(e, t, n, r, a, o) {
                    var s = 0;
                    if (((r = e), "function" == typeof e)) _r(e) && (s = 1);
                    else if ("string" == typeof e)
                        s = (function (e, t, n) {
                            if (1 === n || null != t.itemProp) return !1;
                            switch (e) {
                                case "meta":
                                case "title":
                                    return !0;
                                case "style":
                                    if ("string" != typeof t.precedence || "string" != typeof t.href || "" === t.href) break;
                                    return !0;
                                case "link":
                                    if ("string" != typeof t.rel || "string" != typeof t.href || "" === t.href || t.onLoad || t.onError) break;
                                    return "stylesheet" !== t.rel || ((e = t.disabled), "string" == typeof t.precedence && null == e);
                                case "script":
                                    if (t.async && "function" != typeof t.async && "symbol" != typeof t.async && !t.onLoad && !t.onError && t.src && "string" == typeof t.src) return !0;
                            }
                            return !1;
                        })(e, n, B.current)
                            ? 26
                            : "html" === e || "head" === e || "body" === e
                            ? 27
                            : 5;
                    else
                        e: switch (e) {
                            case T:
                                return ((e = Rr(31, n, t, a)).elementType = T), (e.lanes = o), e;
                            case m:
                                return Vr(n.children, a, o, t);
                            case y:
                                (s = 8), (a |= 24);
                                break;
                            case g:
                                return ((e = Rr(12, n, t, 2 | a)).elementType = g), (e.lanes = o), e;
                            case k:
                                return ((e = Rr(13, n, t, a)).elementType = k), (e.lanes = o), e;
                            case S:
                                return ((e = Rr(19, n, t, a)).elementType = S), (e.lanes = o), e;
                            default:
                                if ("object" == typeof e && null !== e)
                                    switch (e.$$typeof) {
                                        case v:
                                        case w:
                                            s = 10;
                                            break e;
                                        case b:
                                            s = 9;
                                            break e;
                                        case x:
                                            s = 11;
                                            break e;
                                        case E:
                                            s = 14;
                                            break e;
                                        case P:
                                            (s = 16), (r = null);
                                            break e;
                                    }
                                (s = 29), (n = Error(i(130, null === e ? "null" : typeof e, ""))), (r = null);
                        }
                    return ((t = Rr(s, n, t, a)).elementType = e), (t.type = r), (t.lanes = o), t;
                }
                function Vr(e, t, n, r) {
                    return ((e = Rr(7, e, r, t)).lanes = n), e;
                }
                function Br(e, t, n) {
                    return ((e = Rr(6, e, null, t)).lanes = n), e;
                }
                function Ur(e, t, n) {
                    return ((t = Rr(4, null !== e.children ? e.children : [], e.key, t)).lanes = n), (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }), t;
                }
                var $r = [],
                    Hr = 0,
                    Wr = null,
                    Yr = 0,
                    qr = [],
                    Gr = 0,
                    Xr = null,
                    Kr = 1,
                    Qr = "";
                function Zr(e, t) {
                    ($r[Hr++] = Yr), ($r[Hr++] = Wr), (Wr = e), (Yr = t);
                }
                function Jr(e, t, n) {
                    (qr[Gr++] = Kr), (qr[Gr++] = Qr), (qr[Gr++] = Xr), (Xr = e);
                    var r = Kr;
                    e = Qr;
                    var a = 32 - fe(r) - 1;
                    (r &= ~(1 << a)), (n += 1);
                    var o = 32 - fe(t) + a;
                    if (30 < o) {
                        var i = a - (a % 5);
                        (o = (r & ((1 << i) - 1)).toString(32)), (r >>= i), (a -= i), (Kr = (1 << (32 - fe(t) + a)) | (n << a) | r), (Qr = o + e);
                    } else (Kr = (1 << o) | (n << a) | r), (Qr = e);
                }
                function ea(e) {
                    null !== e.return && (Zr(e, 1), Jr(e, 1, 0));
                }
                function ta(e) {
                    for (; e === Wr; ) (Wr = $r[--Hr]), ($r[Hr] = null), (Yr = $r[--Hr]), ($r[Hr] = null);
                    for (; e === Xr; ) (Xr = qr[--Gr]), (qr[Gr] = null), (Qr = qr[--Gr]), (qr[Gr] = null), (Kr = qr[--Gr]), (qr[Gr] = null);
                }
                var na = null,
                    ra = null,
                    aa = !1,
                    oa = null,
                    ia = !1,
                    sa = Error(i(519));
                function la(e) {
                    throw (pa(Sr(Error(i(418, "")), e)), sa);
                }
                function ua(e) {
                    var t = e.stateNode,
                        n = e.type,
                        r = e.memoizedProps;
                    switch (((t[Ne] = e), (t[Oe] = r), n)) {
                        case "dialog":
                            _c("cancel", t), _c("close", t);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            _c("load", t);
                            break;
                        case "video":
                        case "audio":
                            for (n = 0; n < Mc.length; n++) _c(Mc[n], t);
                            break;
                        case "source":
                            _c("error", t);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            _c("error", t), _c("load", t);
                            break;
                        case "details":
                            _c("toggle", t);
                            break;
                        case "input":
                            _c("invalid", t), yt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0), ct(t);
                            break;
                        case "select":
                            _c("invalid", t);
                            break;
                        case "textarea":
                            _c("invalid", t), wt(t, r.value, r.defaultValue, r.children), ct(t);
                    }
                    ("string" != typeof (n = r.children) && "number" != typeof n && "bigint" != typeof n) || t.textContent === "" + n || !0 === r.suppressHydrationWarning || Xc(t.textContent, n)
                        ? (null != r.popover && (_c("beforetoggle", t), _c("toggle", t)), null != r.onScroll && _c("scroll", t), null != r.onScrollEnd && _c("scrollend", t), null != r.onClick && (t.onclick = Kc), (t = !0))
                        : (t = !1),
                        t || la(e);
                }
                function ca(e) {
                    for (na = e.return; na; )
                        switch (na.tag) {
                            case 5:
                            case 13:
                                return void (ia = !1);
                            case 27:
                            case 3:
                                return void (ia = !0);
                            default:
                                na = na.return;
                        }
                }
                function da(e) {
                    if (e !== na) return !1;
                    if (!aa) return ca(e), (aa = !0), !1;
                    var t,
                        n = e.tag;
                    if (((t = 3 !== n && 27 !== n) && ((t = 5 === n) && (t = !("form" !== (t = e.type) && "button" !== t) || od(e.type, e.memoizedProps)), (t = !t)), t && ra && la(e), ca(e), 13 === n)) {
                        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(i(317));
                        e: {
                            for (e = e.nextSibling, n = 0; e; ) {
                                if (8 === e.nodeType)
                                    if ("/$" === (t = e.data)) {
                                        if (0 === n) {
                                            ra = yd(e.nextSibling);
                                            break e;
                                        }
                                        n--;
                                    } else ("$" !== t && "$!" !== t && "$?" !== t) || n++;
                                e = e.nextSibling;
                            }
                            ra = null;
                        }
                    } else 27 === n ? ((n = ra), fd(e.type) ? ((e = gd), (gd = null), (ra = e)) : (ra = n)) : (ra = na ? yd(e.stateNode.nextSibling) : null);
                    return !0;
                }
                function fa() {
                    (ra = na = null), (aa = !1);
                }
                function ha() {
                    var e = oa;
                    return null !== e && (null === vu ? (vu = e) : vu.push.apply(vu, e), (oa = null)), e;
                }
                function pa(e) {
                    null === oa ? (oa = [e]) : oa.push(e);
                }
                var ma = F(null),
                    ya = null,
                    ga = null;
                function va(e, t, n) {
                    V(ma, t._currentValue), (t._currentValue = n);
                }
                function ba(e) {
                    (e._currentValue = ma.current), I(ma);
                }
                function wa(e, t, n) {
                    for (; null !== e; ) {
                        var r = e.alternate;
                        if (((e.childLanes & t) !== t ? ((e.childLanes |= t), null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)) break;
                        e = e.return;
                    }
                }
                function xa(e, t, n, r) {
                    var a = e.child;
                    for (null !== a && (a.return = e); null !== a; ) {
                        var o = a.dependencies;
                        if (null !== o) {
                            var s = a.child;
                            o = o.firstContext;
                            e: for (; null !== o; ) {
                                var l = o;
                                o = a;
                                for (var u = 0; u < t.length; u++)
                                    if (l.context === t[u]) {
                                        (o.lanes |= n), null !== (l = o.alternate) && (l.lanes |= n), wa(o.return, n, e), r || (s = null);
                                        break e;
                                    }
                                o = l.next;
                            }
                        } else if (18 === a.tag) {
                            if (null === (s = a.return)) throw Error(i(341));
                            (s.lanes |= n), null !== (o = s.alternate) && (o.lanes |= n), wa(s, n, e), (s = null);
                        } else s = a.child;
                        if (null !== s) s.return = a;
                        else
                            for (s = a; null !== s; ) {
                                if (s === e) {
                                    s = null;
                                    break;
                                }
                                if (null !== (a = s.sibling)) {
                                    (a.return = s.return), (s = a);
                                    break;
                                }
                                s = s.return;
                            }
                        a = s;
                    }
                }
                function ka(e, t, n, r) {
                    e = null;
                    for (var a = t, o = !1; null !== a; ) {
                        if (!o)
                            if (524288 & a.flags) o = !0;
                            else if (262144 & a.flags) break;
                        if (10 === a.tag) {
                            var s = a.alternate;
                            if (null === s) throw Error(i(387));
                            if (null !== (s = s.memoizedProps)) {
                                var l = a.type;
                                Gn(a.pendingProps.value, s.value) || (null !== e ? e.push(l) : (e = [l]));
                            }
                        } else if (a === H.current) {
                            if (null === (s = a.alternate)) throw Error(i(387));
                            s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (null !== e ? e.push(qd) : (e = [qd]));
                        }
                        a = a.return;
                    }
                    null !== e && xa(t, e, n, r), (t.flags |= 262144);
                }
                function Sa(e) {
                    for (e = e.firstContext; null !== e; ) {
                        if (!Gn(e.context._currentValue, e.memoizedValue)) return !0;
                        e = e.next;
                    }
                    return !1;
                }
                function Ea(e) {
                    (ya = e), (ga = null), null !== (e = e.dependencies) && (e.firstContext = null);
                }
                function Pa(e) {
                    return Ca(ya, e);
                }
                function Ta(e, t) {
                    return null === ya && Ea(e), Ca(e, t);
                }
                function Ca(e, t) {
                    var n = t._currentValue;
                    if (((t = { context: t, memoizedValue: n, next: null }), null === ga)) {
                        if (null === e) throw Error(i(308));
                        (ga = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288);
                    } else ga = ga.next = t;
                    return n;
                }
                var Aa =
                        "undefined" != typeof AbortController
                            ? AbortController
                            : function () {
                                  var e = [],
                                      t = (this.signal = {
                                          aborted: !1,
                                          addEventListener: function (t, n) {
                                              e.push(n);
                                          },
                                      });
                                  this.abort = function () {
                                      (t.aborted = !0),
                                          e.forEach(function (e) {
                                              return e();
                                          });
                                  };
                              },
                    La = r.unstable_scheduleCallback,
                    ja = r.unstable_NormalPriority,
                    Na = { $$typeof: w, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
                function Oa() {
                    return { controller: new Aa(), data: new Map(), refCount: 0 };
                }
                function Ma(e) {
                    e.refCount--,
                        0 === e.refCount &&
                            La(ja, function () {
                                e.controller.abort();
                            });
                }
                var za = null,
                    Ra = 0,
                    _a = 0,
                    Da = null;
                function Fa() {
                    if (0 == --Ra && null !== za) {
                        null !== Da && (Da.status = "fulfilled");
                        var e = za;
                        (za = null), (_a = 0), (Da = null);
                        for (var t = 0; t < e.length; t++) (0, e[t])();
                    }
                }
                var Ia = M.S;
                M.S = function (e, t) {
                    "object" == typeof t &&
                        null !== t &&
                        "function" == typeof t.then &&
                        (function (e, t) {
                            if (null === za) {
                                var n = (za = []);
                                (Ra = 0),
                                    (_a = Ac()),
                                    (Da = {
                                        status: "pending",
                                        value: void 0,
                                        then: function (e) {
                                            n.push(e);
                                        },
                                    });
                            }
                            Ra++, t.then(Fa, Fa);
                        })(0, t),
                        null !== Ia && Ia(e, t);
                };
                var Va = F(null);
                function Ba() {
                    var e = Va.current;
                    return null !== e ? e : nu.pooledCache;
                }
                function Ua(e, t) {
                    V(Va, null === t ? Va.current : t.pool);
                }
                function $a() {
                    var e = Ba();
                    return null === e ? null : { parent: Na._currentValue, pool: e };
                }
                var Ha = Error(i(460)),
                    Wa = Error(i(474)),
                    Ya = Error(i(542)),
                    qa = { then: function () {} };
                function Ga(e) {
                    return "fulfilled" === (e = e.status) || "rejected" === e;
                }
                function Xa() {}
                function Ka(e, t, n) {
                    switch ((void 0 === (n = e[n]) ? e.push(t) : n !== t && (t.then(Xa, Xa), (t = n)), t.status)) {
                        case "fulfilled":
                            return t.value;
                        case "rejected":
                            throw (Ja((e = t.reason)), e);
                        default:
                            if ("string" == typeof t.status) t.then(Xa, Xa);
                            else {
                                if (null !== (e = nu) && 100 < e.shellSuspendCounter) throw Error(i(482));
                                ((e = t).status = "pending"),
                                    e.then(
                                        function (e) {
                                            if ("pending" === t.status) {
                                                var n = t;
                                                (n.status = "fulfilled"), (n.value = e);
                                            }
                                        },
                                        function (e) {
                                            if ("pending" === t.status) {
                                                var n = t;
                                                (n.status = "rejected"), (n.reason = e);
                                            }
                                        }
                                    );
                            }
                            switch (t.status) {
                                case "fulfilled":
                                    return t.value;
                                case "rejected":
                                    throw (Ja((e = t.reason)), e);
                            }
                            throw ((Qa = t), Ha);
                    }
                }
                var Qa = null;
                function Za() {
                    if (null === Qa) throw Error(i(459));
                    var e = Qa;
                    return (Qa = null), e;
                }
                function Ja(e) {
                    if (e === Ha || e === Ya) throw Error(i(483));
                }
                var eo = !1;
                function to(e) {
                    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
                }
                function no(e, t) {
                    (e = e.updateQueue), t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, callbacks: null });
                }
                function ro(e) {
                    return { lane: e, tag: 0, payload: null, callback: null, next: null };
                }
                function ao(e, t, n) {
                    var r = e.updateQueue;
                    if (null === r) return null;
                    if (((r = r.shared), 2 & tu)) {
                        var a = r.pending;
                        return null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)), (r.pending = t), (t = Or(e)), Nr(e, null, n), t;
                    }
                    return Ar(e, r, t, n), Or(e);
                }
                function oo(e, t, n) {
                    if (null !== (t = t.updateQueue) && ((t = t.shared), 4194048 & n)) {
                        var r = t.lanes;
                        (n |= r &= e.pendingLanes), (t.lanes = n), Te(e, n);
                    }
                }
                function io(e, t) {
                    var n = e.updateQueue,
                        r = e.alternate;
                    if (null !== r && n === (r = r.updateQueue)) {
                        var a = null,
                            o = null;
                        if (null !== (n = n.firstBaseUpdate)) {
                            do {
                                var i = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
                                null === o ? (a = o = i) : (o = o.next = i), (n = n.next);
                            } while (null !== n);
                            null === o ? (a = o = t) : (o = o.next = t);
                        } else a = o = t;
                        return (n = { baseState: r.baseState, firstBaseUpdate: a, lastBaseUpdate: o, shared: r.shared, callbacks: r.callbacks }), void (e.updateQueue = n);
                    }
                    null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
                }
                var so = !1;
                function lo() {
                    if (so && null !== Da) throw Da;
                }
                function uo(e, t, n, r) {
                    so = !1;
                    var a = e.updateQueue;
                    eo = !1;
                    var o = a.firstBaseUpdate,
                        i = a.lastBaseUpdate,
                        s = a.shared.pending;
                    if (null !== s) {
                        a.shared.pending = null;
                        var l = s,
                            u = l.next;
                        (l.next = null), null === i ? (o = u) : (i.next = u), (i = l);
                        var c = e.alternate;
                        null !== c && (s = (c = c.updateQueue).lastBaseUpdate) !== i && (null === s ? (c.firstBaseUpdate = u) : (s.next = u), (c.lastBaseUpdate = l));
                    }
                    if (null !== o) {
                        var f = a.baseState;
                        for (i = 0, c = u = l = null, s = o; ; ) {
                            var h = -536870913 & s.lane,
                                p = h !== s.lane;
                            if (p ? (au & h) === h : (r & h) === h) {
                                0 !== h && h === _a && (so = !0), null !== c && (c = c.next = { lane: 0, tag: s.tag, payload: s.payload, callback: null, next: null });
                                e: {
                                    var m = e,
                                        y = s;
                                    h = t;
                                    var g = n;
                                    switch (y.tag) {
                                        case 1:
                                            if ("function" == typeof (m = y.payload)) {
                                                f = m.call(g, f, h);
                                                break e;
                                            }
                                            f = m;
                                            break e;
                                        case 3:
                                            m.flags = (-65537 & m.flags) | 128;
                                        case 0:
                                            if (null == (h = "function" == typeof (m = y.payload) ? m.call(g, f, h) : m)) break e;
                                            f = d({}, f, h);
                                            break e;
                                        case 2:
                                            eo = !0;
                                    }
                                }
                                null !== (h = s.callback) && ((e.flags |= 64), p && (e.flags |= 8192), null === (p = a.callbacks) ? (a.callbacks = [h]) : p.push(h));
                            } else (p = { lane: h, tag: s.tag, payload: s.payload, callback: s.callback, next: null }), null === c ? ((u = c = p), (l = f)) : (c = c.next = p), (i |= h);
                            if (null === (s = s.next)) {
                                if (null === (s = a.shared.pending)) break;
                                (s = (p = s).next), (p.next = null), (a.lastBaseUpdate = p), (a.shared.pending = null);
                            }
                        }
                        null === c && (l = f), (a.baseState = l), (a.firstBaseUpdate = u), (a.lastBaseUpdate = c), null === o && (a.shared.lanes = 0), (fu |= i), (e.lanes = i), (e.memoizedState = f);
                    }
                }
                function co(e, t) {
                    if ("function" != typeof e) throw Error(i(191, e));
                    e.call(t);
                }
                function fo(e, t) {
                    var n = e.callbacks;
                    if (null !== n) for (e.callbacks = null, e = 0; e < n.length; e++) co(n[e], t);
                }
                var ho = F(null),
                    po = F(0);
                function mo(e, t) {
                    V(po, (e = cu)), V(ho, t), (cu = e | t.baseLanes);
                }
                function yo() {
                    V(po, cu), V(ho, ho.current);
                }
                function go() {
                    (cu = po.current), I(ho), I(po);
                }
                var vo = 0,
                    bo = null,
                    wo = null,
                    xo = null,
                    ko = !1,
                    So = !1,
                    Eo = !1,
                    Po = 0,
                    To = 0,
                    Co = null,
                    Ao = 0;
                function Lo() {
                    throw Error(i(321));
                }
                function jo(e, t) {
                    if (null === t) return !1;
                    for (var n = 0; n < t.length && n < e.length; n++) if (!Gn(e[n], t[n])) return !1;
                    return !0;
                }
                function No(e, t, n, r, a, o) {
                    return (
                        (vo = o), (bo = t), (t.memoizedState = null), (t.updateQueue = null), (t.lanes = 0), (M.H = null === e || null === e.memoizedState ? Wi : Yi), (Eo = !1), (o = n(r, a)), (Eo = !1), So && (o = Mo(t, n, r, a)), Oo(e), o
                    );
                }
                function Oo(e) {
                    M.H = Hi;
                    var t = null !== wo && null !== wo.next;
                    if (((vo = 0), (xo = wo = bo = null), (ko = !1), (To = 0), (Co = null), t)) throw Error(i(300));
                    null === e || Ts || (null !== (e = e.dependencies) && Sa(e) && (Ts = !0));
                }
                function Mo(e, t, n, r) {
                    bo = e;
                    var a = 0;
                    do {
                        if ((So && (Co = null), (To = 0), (So = !1), 25 <= a)) throw Error(i(301));
                        if (((a += 1), (xo = wo = null), null != e.updateQueue)) {
                            var o = e.updateQueue;
                            (o.lastEffect = null), (o.events = null), (o.stores = null), null != o.memoCache && (o.memoCache.index = 0);
                        }
                        (M.H = qi), (o = t(n, r));
                    } while (So);
                    return o;
                }
                function zo() {
                    var e = M.H,
                        t = e.useState()[0];
                    return (t = "function" == typeof t.then ? Vo(t) : t), (e = e.useState()[0]), (null !== wo ? wo.memoizedState : null) !== e && (bo.flags |= 1024), t;
                }
                function Ro() {
                    var e = 0 !== Po;
                    return (Po = 0), e;
                }
                function _o(e, t, n) {
                    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
                }
                function Do(e) {
                    if (ko) {
                        for (e = e.memoizedState; null !== e; ) {
                            var t = e.queue;
                            null !== t && (t.pending = null), (e = e.next);
                        }
                        ko = !1;
                    }
                    (vo = 0), (xo = wo = bo = null), (So = !1), (To = Po = 0), (Co = null);
                }
                function Fo() {
                    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
                    return null === xo ? (bo.memoizedState = xo = e) : (xo = xo.next = e), xo;
                }
                function Io() {
                    if (null === wo) {
                        var e = bo.alternate;
                        e = null !== e ? e.memoizedState : null;
                    } else e = wo.next;
                    var t = null === xo ? bo.memoizedState : xo.next;
                    if (null !== t) (xo = t), (wo = e);
                    else {
                        if (null === e) {
                            if (null === bo.alternate) throw Error(i(467));
                            throw Error(i(310));
                        }
                        (e = { memoizedState: (wo = e).memoizedState, baseState: wo.baseState, baseQueue: wo.baseQueue, queue: wo.queue, next: null }), null === xo ? (bo.memoizedState = xo = e) : (xo = xo.next = e);
                    }
                    return xo;
                }
                function Vo(e) {
                    var t = To;
                    return (To += 1), null === Co && (Co = []), (e = Ka(Co, e, t)), (t = bo), null === (null === xo ? t.memoizedState : xo.next) && ((t = t.alternate), (M.H = null === t || null === t.memoizedState ? Wi : Yi)), e;
                }
                function Bo(e) {
                    if (null !== e && "object" == typeof e) {
                        if ("function" == typeof e.then) return Vo(e);
                        if (e.$$typeof === w) return Pa(e);
                    }
                    throw Error(i(438, String(e)));
                }
                function Uo(e) {
                    var t = null,
                        n = bo.updateQueue;
                    if ((null !== n && (t = n.memoCache), null == t)) {
                        var r = bo.alternate;
                        null !== r &&
                            null !== (r = r.updateQueue) &&
                            null != (r = r.memoCache) &&
                            (t = {
                                data: r.data.map(function (e) {
                                    return e.slice();
                                }),
                                index: 0,
                            });
                    }
                    if ((null == t && (t = { data: [], index: 0 }), null === n && ((n = { lastEffect: null, events: null, stores: null, memoCache: null }), (bo.updateQueue = n)), (n.memoCache = t), void 0 === (n = t.data[t.index])))
                        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = C;
                    return t.index++, n;
                }
                function $o(e, t) {
                    return "function" == typeof t ? t(e) : t;
                }
                function Ho(e) {
                    return Wo(Io(), wo, e);
                }
                function Wo(e, t, n) {
                    var r = e.queue;
                    if (null === r) throw Error(i(311));
                    r.lastRenderedReducer = n;
                    var a = e.baseQueue,
                        o = r.pending;
                    if (null !== o) {
                        if (null !== a) {
                            var s = a.next;
                            (a.next = o.next), (o.next = s);
                        }
                        (t.baseQueue = a = o), (r.pending = null);
                    }
                    if (((o = e.baseState), null === a)) e.memoizedState = o;
                    else {
                        var l = (s = null),
                            u = null,
                            c = (t = a.next),
                            d = !1;
                        do {
                            var f = -536870913 & c.lane;
                            if (f !== c.lane ? (au & f) === f : (vo & f) === f) {
                                var h = c.revertLane;
                                if (0 === h) null !== u && (u = u.next = { lane: 0, revertLane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), f === _a && (d = !0);
                                else {
                                    if ((vo & h) === h) {
                                        (c = c.next), h === _a && (d = !0);
                                        continue;
                                    }
                                    (f = { lane: 0, revertLane: c.revertLane, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }),
                                        null === u ? ((l = u = f), (s = o)) : (u = u.next = f),
                                        (bo.lanes |= h),
                                        (fu |= h);
                                }
                                (f = c.action), Eo && n(o, f), (o = c.hasEagerState ? c.eagerState : n(o, f));
                            } else
                                (h = { lane: f, revertLane: c.revertLane, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }),
                                    null === u ? ((l = u = h), (s = o)) : (u = u.next = h),
                                    (bo.lanes |= f),
                                    (fu |= f);
                            c = c.next;
                        } while (null !== c && c !== t);
                        if ((null === u ? (s = o) : (u.next = l), !Gn(o, e.memoizedState) && ((Ts = !0), d && null !== (n = Da)))) throw n;
                        (e.memoizedState = o), (e.baseState = s), (e.baseQueue = u), (r.lastRenderedState = o);
                    }
                    return null === a && (r.lanes = 0), [e.memoizedState, r.dispatch];
                }
                function Yo(e) {
                    var t = Io(),
                        n = t.queue;
                    if (null === n) throw Error(i(311));
                    n.lastRenderedReducer = e;
                    var r = n.dispatch,
                        a = n.pending,
                        o = t.memoizedState;
                    if (null !== a) {
                        n.pending = null;
                        var s = (a = a.next);
                        do {
                            (o = e(o, s.action)), (s = s.next);
                        } while (s !== a);
                        Gn(o, t.memoizedState) || (Ts = !0), (t.memoizedState = o), null === t.baseQueue && (t.baseState = o), (n.lastRenderedState = o);
                    }
                    return [o, r];
                }
                function qo(e, t, n) {
                    var r = bo,
                        a = Io(),
                        o = aa;
                    if (o) {
                        if (void 0 === n) throw Error(i(407));
                        n = n();
                    } else n = t();
                    var s = !Gn((wo || a).memoizedState, n);
                    if ((s && ((a.memoizedState = n), (Ts = !0)), (a = a.queue), yi(2048, 8, Ko.bind(null, r, a, e), [e]), a.getSnapshot !== t || s || (null !== xo && 1 & xo.memoizedState.tag))) {
                        if (((r.flags |= 2048), hi(9, { destroy: void 0, resource: void 0 }, Xo.bind(null, r, a, n, t), null), null === nu)) throw Error(i(349));
                        o || 124 & vo || Go(r, t, n);
                    }
                    return n;
                }
                function Go(e, t, n) {
                    (e.flags |= 16384),
                        (e = { getSnapshot: t, value: n }),
                        null === (t = bo.updateQueue) ? ((t = { lastEffect: null, events: null, stores: null, memoCache: null }), (bo.updateQueue = t), (t.stores = [e])) : null === (n = t.stores) ? (t.stores = [e]) : n.push(e);
                }
                function Xo(e, t, n, r) {
                    (t.value = n), (t.getSnapshot = r), Qo(t) && Zo(e);
                }
                function Ko(e, t, n) {
                    return n(function () {
                        Qo(t) && Zo(e);
                    });
                }
                function Qo(e) {
                    var t = e.getSnapshot;
                    e = e.value;
                    try {
                        var n = t();
                        return !Gn(e, n);
                    } catch (e) {
                        return !0;
                    }
                }
                function Zo(e) {
                    var t = jr(e, 2);
                    null !== t && Ru(t, 0, 2);
                }
                function Jo(e) {
                    var t = Fo();
                    if ("function" == typeof e) {
                        var n = e;
                        if (((e = n()), Eo)) {
                            de(!0);
                            try {
                                n();
                            } finally {
                                de(!1);
                            }
                        }
                    }
                    return (t.memoizedState = t.baseState = e), (t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: $o, lastRenderedState: e }), t;
                }
                function ei(e, t, n, r) {
                    return (e.baseState = n), Wo(e, wo, "function" == typeof r ? r : $o);
                }
                function ti(e, t, n, r, a) {
                    if (Bi(e)) throw Error(i(485));
                    if (null !== (e = t.action)) {
                        var o = {
                            payload: a,
                            action: e,
                            next: null,
                            isTransition: !0,
                            status: "pending",
                            value: null,
                            reason: null,
                            listeners: [],
                            then: function (e) {
                                o.listeners.push(e);
                            },
                        };
                        null !== M.T ? n(!0) : (o.isTransition = !1), r(o), null === (n = t.pending) ? ((o.next = t.pending = o), ni(t, o)) : ((o.next = n.next), (t.pending = n.next = o));
                    }
                }
                function ni(e, t) {
                    var n = t.action,
                        r = t.payload,
                        a = e.state;
                    if (t.isTransition) {
                        var o = M.T,
                            i = {};
                        M.T = i;
                        try {
                            var s = n(a, r),
                                l = M.S;
                            null !== l && l(i, s), ri(e, t, s);
                        } catch (n) {
                            oi(e, t, n);
                        } finally {
                            M.T = o;
                        }
                    } else
                        try {
                            ri(e, t, (o = n(a, r)));
                        } catch (n) {
                            oi(e, t, n);
                        }
                }
                function ri(e, t, n) {
                    null !== n && "object" == typeof n && "function" == typeof n.then
                        ? n.then(
                              function (n) {
                                  ai(e, t, n);
                              },
                              function (n) {
                                  return oi(e, t, n);
                              }
                          )
                        : ai(e, t, n);
                }
                function ai(e, t, n) {
                    (t.status = "fulfilled"), (t.value = n), ii(t), (e.state = n), null !== (t = e.pending) && ((n = t.next) === t ? (e.pending = null) : ((n = n.next), (t.next = n), ni(e, n)));
                }
                function oi(e, t, n) {
                    var r = e.pending;
                    if (((e.pending = null), null !== r)) {
                        r = r.next;
                        do {
                            (t.status = "rejected"), (t.reason = n), ii(t), (t = t.next);
                        } while (t !== r);
                    }
                    e.action = null;
                }
                function ii(e) {
                    e = e.listeners;
                    for (var t = 0; t < e.length; t++) (0, e[t])();
                }
                function si(e, t) {
                    return t;
                }
                function li(e, t) {
                    if (aa) {
                        var n = nu.formState;
                        if (null !== n) {
                            e: {
                                var r = bo;
                                if (aa) {
                                    if (ra) {
                                        t: {
                                            for (var a = ra, o = ia; 8 !== a.nodeType; ) {
                                                if (!o) {
                                                    a = null;
                                                    break t;
                                                }
                                                if (null === (a = yd(a.nextSibling))) {
                                                    a = null;
                                                    break t;
                                                }
                                            }
                                            a = "F!" === (o = a.data) || "F" === o ? a : null;
                                        }
                                        if (a) {
                                            (ra = yd(a.nextSibling)), (r = "F!" === a.data);
                                            break e;
                                        }
                                    }
                                    la(r);
                                }
                                r = !1;
                            }
                            r && (t = n[0]);
                        }
                    }
                    return (
                        ((n = Fo()).memoizedState = n.baseState = t),
                        (r = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: si, lastRenderedState: t }),
                        (n.queue = r),
                        (n = Fi.bind(null, bo, r)),
                        (r.dispatch = n),
                        (r = Jo(!1)),
                        (o = Vi.bind(null, bo, !1, r.queue)),
                        (a = { state: t, dispatch: null, action: e, pending: null }),
                        ((r = Fo()).queue = a),
                        (n = ti.bind(null, bo, a, o, n)),
                        (a.dispatch = n),
                        (r.memoizedState = e),
                        [t, n, !1]
                    );
                }
                function ui(e) {
                    return ci(Io(), wo, e);
                }
                function ci(e, t, n) {
                    if (((t = Wo(e, t, si)[0]), (e = Ho($o)[0]), "object" == typeof t && null !== t && "function" == typeof t.then))
                        try {
                            var r = Vo(t);
                        } catch (e) {
                            if (e === Ha) throw Ya;
                            throw e;
                        }
                    else r = t;
                    var a = (t = Io()).queue,
                        o = a.dispatch;
                    return n !== t.memoizedState && ((bo.flags |= 2048), hi(9, { destroy: void 0, resource: void 0 }, di.bind(null, a, n), null)), [r, o, e];
                }
                function di(e, t) {
                    e.action = t;
                }
                function fi(e) {
                    var t = Io(),
                        n = wo;
                    if (null !== n) return ci(t, n, e);
                    Io(), (t = t.memoizedState);
                    var r = (n = Io()).queue.dispatch;
                    return (n.memoizedState = e), [t, r, !1];
                }
                function hi(e, t, n, r) {
                    return (
                        (e = { tag: e, create: n, deps: r, inst: t, next: null }),
                        null === (t = bo.updateQueue) && ((t = { lastEffect: null, events: null, stores: null, memoCache: null }), (bo.updateQueue = t)),
                        null === (n = t.lastEffect) ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
                        e
                    );
                }
                function pi() {
                    return Io().memoizedState;
                }
                function mi(e, t, n, r) {
                    var a = Fo();
                    (r = void 0 === r ? null : r), (bo.flags |= e), (a.memoizedState = hi(1 | t, { destroy: void 0, resource: void 0 }, n, r));
                }
                function yi(e, t, n, r) {
                    var a = Io();
                    r = void 0 === r ? null : r;
                    var o = a.memoizedState.inst;
                    null !== wo && null !== r && jo(r, wo.memoizedState.deps) ? (a.memoizedState = hi(t, o, n, r)) : ((bo.flags |= e), (a.memoizedState = hi(1 | t, o, n, r)));
                }
                function gi(e, t) {
                    mi(8390656, 8, e, t);
                }
                function vi(e, t) {
                    yi(2048, 8, e, t);
                }
                function bi(e, t) {
                    return yi(4, 2, e, t);
                }
                function wi(e, t) {
                    return yi(4, 4, e, t);
                }
                function xi(e, t) {
                    if ("function" == typeof t) {
                        e = e();
                        var n = t(e);
                        return function () {
                            "function" == typeof n ? n() : t(null);
                        };
                    }
                    if (null != t)
                        return (
                            (e = e()),
                            (t.current = e),
                            function () {
                                t.current = null;
                            }
                        );
                }
                function ki(e, t, n) {
                    (n = null != n ? n.concat([e]) : null), yi(4, 4, xi.bind(null, t, e), n);
                }
                function Si() {}
                function Ei(e, t) {
                    var n = Io();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== t && jo(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
                }
                function Pi(e, t) {
                    var n = Io();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    if (null !== t && jo(t, r[1])) return r[0];
                    if (((r = e()), Eo)) {
                        de(!0);
                        try {
                            e();
                        } finally {
                            de(!1);
                        }
                    }
                    return (n.memoizedState = [r, t]), r;
                }
                function Ti(e, t, n) {
                    return void 0 === n || 1073741824 & vo ? (e.memoizedState = t) : ((e.memoizedState = n), (e = zu()), (bo.lanes |= e), (fu |= e), n);
                }
                function Ci(e, t, n, r) {
                    return Gn(n, t) ? n : null !== ho.current ? ((e = Ti(e, n, r)), Gn(e, t) || (Ts = !0), e) : 42 & vo ? ((e = zu()), (bo.lanes |= e), (fu |= e), t) : ((Ts = !0), (e.memoizedState = n));
                }
                function Ai(e, t, n, r, a) {
                    var o = z.p;
                    z.p = 0 !== o && 8 > o ? o : 8;
                    var i,
                        s,
                        l,
                        u = M.T,
                        c = {};
                    (M.T = c), Vi(e, !1, t, n);
                    try {
                        var d = a(),
                            f = M.S;
                        null !== f && f(c, d),
                            null !== d && "object" == typeof d && "function" == typeof d.then
                                ? Ii(
                                      e,
                                      t,
                                      ((i = r),
                                      (s = []),
                                      (l = {
                                          status: "pending",
                                          value: null,
                                          reason: null,
                                          then: function (e) {
                                              s.push(e);
                                          },
                                      }),
                                      d.then(
                                          function () {
                                              (l.status = "fulfilled"), (l.value = i);
                                              for (var e = 0; e < s.length; e++) (0, s[e])(i);
                                          },
                                          function (e) {
                                              for (l.status = "rejected", l.reason = e, e = 0; e < s.length; e++) (0, s[e])(void 0);
                                          }
                                      ),
                                      l),
                                      Mu()
                                  )
                                : Ii(e, t, r, Mu());
                    } catch (n) {
                        Ii(e, t, { then: function () {}, status: "rejected", reason: n }, Mu());
                    } finally {
                        (z.p = o), (M.T = u);
                    }
                }
                function Li() {}
                function ji(e, t, n, r) {
                    if (5 !== e.tag) throw Error(i(476));
                    var a = Ni(e).queue;
                    Ai(
                        e,
                        a,
                        t,
                        R,
                        null === n
                            ? Li
                            : function () {
                                  return Oi(e), n(r);
                              }
                    );
                }
                function Ni(e) {
                    var t = e.memoizedState;
                    if (null !== t) return t;
                    var n = {};
                    return (
                        ((t = { memoizedState: R, baseState: R, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: $o, lastRenderedState: R }, next: null }).next = {
                            memoizedState: n,
                            baseState: n,
                            baseQueue: null,
                            queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: $o, lastRenderedState: n },
                            next: null,
                        }),
                        (e.memoizedState = t),
                        null !== (e = e.alternate) && (e.memoizedState = t),
                        t
                    );
                }
                function Oi(e) {
                    Ii(e, Ni(e).next.queue, {}, Mu());
                }
                function Mi() {
                    return Pa(qd);
                }
                function zi() {
                    return Io().memoizedState;
                }
                function Ri() {
                    return Io().memoizedState;
                }
                function _i(e) {
                    for (var t = e.return; null !== t; ) {
                        switch (t.tag) {
                            case 24:
                            case 3:
                                var n = Mu(),
                                    r = ao(t, (e = ro(n)), n);
                                return null !== r && (Ru(r, 0, n), oo(r, t, n)), (t = { cache: Oa() }), void (e.payload = t);
                        }
                        t = t.return;
                    }
                }
                function Di(e, t, n) {
                    var r = Mu();
                    (n = { lane: r, revertLane: 0, action: n, hasEagerState: !1, eagerState: null, next: null }), Bi(e) ? Ui(t, n) : null !== (n = Lr(e, t, n, r)) && (Ru(n, 0, r), $i(n, t, r));
                }
                function Fi(e, t, n) {
                    Ii(e, t, n, Mu());
                }
                function Ii(e, t, n, r) {
                    var a = { lane: r, revertLane: 0, action: n, hasEagerState: !1, eagerState: null, next: null };
                    if (Bi(e)) Ui(t, a);
                    else {
                        var o = e.alternate;
                        if (0 === e.lanes && (null === o || 0 === o.lanes) && null !== (o = t.lastRenderedReducer))
                            try {
                                var i = t.lastRenderedState,
                                    s = o(i, n);
                                if (((a.hasEagerState = !0), (a.eagerState = s), Gn(s, i))) return Ar(e, t, a, 0), null === nu && Cr(), !1;
                            } catch (e) {}
                        if (null !== (n = Lr(e, t, a, r))) return Ru(n, 0, r), $i(n, t, r), !0;
                    }
                    return !1;
                }
                function Vi(e, t, n, r) {
                    if (((r = { lane: 2, revertLane: Ac(), action: r, hasEagerState: !1, eagerState: null, next: null }), Bi(e))) {
                        if (t) throw Error(i(479));
                    } else null !== (t = Lr(e, n, r, 2)) && Ru(t, 0, 2);
                }
                function Bi(e) {
                    var t = e.alternate;
                    return e === bo || (null !== t && t === bo);
                }
                function Ui(e, t) {
                    So = ko = !0;
                    var n = e.pending;
                    null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
                }
                function $i(e, t, n) {
                    if (4194048 & n) {
                        var r = t.lanes;
                        (n |= r &= e.pendingLanes), (t.lanes = n), Te(e, n);
                    }
                }
                var Hi = {
                        readContext: Pa,
                        use: Bo,
                        useCallback: Lo,
                        useContext: Lo,
                        useEffect: Lo,
                        useImperativeHandle: Lo,
                        useLayoutEffect: Lo,
                        useInsertionEffect: Lo,
                        useMemo: Lo,
                        useReducer: Lo,
                        useRef: Lo,
                        useState: Lo,
                        useDebugValue: Lo,
                        useDeferredValue: Lo,
                        useTransition: Lo,
                        useSyncExternalStore: Lo,
                        useId: Lo,
                        useHostTransitionStatus: Lo,
                        useFormState: Lo,
                        useActionState: Lo,
                        useOptimistic: Lo,
                        useMemoCache: Lo,
                        useCacheRefresh: Lo,
                    },
                    Wi = {
                        readContext: Pa,
                        use: Bo,
                        useCallback: function (e, t) {
                            return (Fo().memoizedState = [e, void 0 === t ? null : t]), e;
                        },
                        useContext: Pa,
                        useEffect: gi,
                        useImperativeHandle: function (e, t, n) {
                            (n = null != n ? n.concat([e]) : null), mi(4194308, 4, xi.bind(null, t, e), n);
                        },
                        useLayoutEffect: function (e, t) {
                            return mi(4194308, 4, e, t);
                        },
                        useInsertionEffect: function (e, t) {
                            mi(4, 2, e, t);
                        },
                        useMemo: function (e, t) {
                            var n = Fo();
                            t = void 0 === t ? null : t;
                            var r = e();
                            if (Eo) {
                                de(!0);
                                try {
                                    e();
                                } finally {
                                    de(!1);
                                }
                            }
                            return (n.memoizedState = [r, t]), r;
                        },
                        useReducer: function (e, t, n) {
                            var r = Fo();
                            if (void 0 !== n) {
                                var a = n(t);
                                if (Eo) {
                                    de(!0);
                                    try {
                                        n(t);
                                    } finally {
                                        de(!1);
                                    }
                                }
                            } else a = t;
                            return (
                                (r.memoizedState = r.baseState = a),
                                (e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: a }),
                                (r.queue = e),
                                (e = e.dispatch = Di.bind(null, bo, e)),
                                [r.memoizedState, e]
                            );
                        },
                        useRef: function (e) {
                            return (e = { current: e }), (Fo().memoizedState = e);
                        },
                        useState: function (e) {
                            var t = (e = Jo(e)).queue,
                                n = Fi.bind(null, bo, t);
                            return (t.dispatch = n), [e.memoizedState, n];
                        },
                        useDebugValue: Si,
                        useDeferredValue: function (e, t) {
                            return Ti(Fo(), e, t);
                        },
                        useTransition: function () {
                            var e = Jo(!1);
                            return (e = Ai.bind(null, bo, e.queue, !0, !1)), (Fo().memoizedState = e), [!1, e];
                        },
                        useSyncExternalStore: function (e, t, n) {
                            var r = bo,
                                a = Fo();
                            if (aa) {
                                if (void 0 === n) throw Error(i(407));
                                n = n();
                            } else {
                                if (((n = t()), null === nu)) throw Error(i(349));
                                124 & au || Go(r, t, n);
                            }
                            a.memoizedState = n;
                            var o = { value: n, getSnapshot: t };
                            return (a.queue = o), gi(Ko.bind(null, r, o, e), [e]), (r.flags |= 2048), hi(9, { destroy: void 0, resource: void 0 }, Xo.bind(null, r, o, n, t), null), n;
                        },
                        useId: function () {
                            var e = Fo(),
                                t = nu.identifierPrefix;
                            if (aa) {
                                var n = Qr;
                                (t = "«" + t + "R" + (n = (Kr & ~(1 << (32 - fe(Kr) - 1))).toString(32) + n)), 0 < (n = Po++) && (t += "H" + n.toString(32)), (t += "»");
                            } else t = "«" + t + "r" + (n = Ao++).toString(32) + "»";
                            return (e.memoizedState = t);
                        },
                        useHostTransitionStatus: Mi,
                        useFormState: li,
                        useActionState: li,
                        useOptimistic: function (e) {
                            var t = Fo();
                            t.memoizedState = t.baseState = e;
                            var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
                            return (t.queue = n), (t = Vi.bind(null, bo, !0, n)), (n.dispatch = t), [e, t];
                        },
                        useMemoCache: Uo,
                        useCacheRefresh: function () {
                            return (Fo().memoizedState = _i.bind(null, bo));
                        },
                    },
                    Yi = {
                        readContext: Pa,
                        use: Bo,
                        useCallback: Ei,
                        useContext: Pa,
                        useEffect: vi,
                        useImperativeHandle: ki,
                        useInsertionEffect: bi,
                        useLayoutEffect: wi,
                        useMemo: Pi,
                        useReducer: Ho,
                        useRef: pi,
                        useState: function () {
                            return Ho($o);
                        },
                        useDebugValue: Si,
                        useDeferredValue: function (e, t) {
                            return Ci(Io(), wo.memoizedState, e, t);
                        },
                        useTransition: function () {
                            var e = Ho($o)[0],
                                t = Io().memoizedState;
                            return ["boolean" == typeof e ? e : Vo(e), t];
                        },
                        useSyncExternalStore: qo,
                        useId: zi,
                        useHostTransitionStatus: Mi,
                        useFormState: ui,
                        useActionState: ui,
                        useOptimistic: function (e, t) {
                            return ei(Io(), 0, e, t);
                        },
                        useMemoCache: Uo,
                        useCacheRefresh: Ri,
                    },
                    qi = {
                        readContext: Pa,
                        use: Bo,
                        useCallback: Ei,
                        useContext: Pa,
                        useEffect: vi,
                        useImperativeHandle: ki,
                        useInsertionEffect: bi,
                        useLayoutEffect: wi,
                        useMemo: Pi,
                        useReducer: Yo,
                        useRef: pi,
                        useState: function () {
                            return Yo($o);
                        },
                        useDebugValue: Si,
                        useDeferredValue: function (e, t) {
                            var n = Io();
                            return null === wo ? Ti(n, e, t) : Ci(n, wo.memoizedState, e, t);
                        },
                        useTransition: function () {
                            var e = Yo($o)[0],
                                t = Io().memoizedState;
                            return ["boolean" == typeof e ? e : Vo(e), t];
                        },
                        useSyncExternalStore: qo,
                        useId: zi,
                        useHostTransitionStatus: Mi,
                        useFormState: fi,
                        useActionState: fi,
                        useOptimistic: function (e, t) {
                            var n = Io();
                            return null !== wo ? ei(n, 0, e, t) : ((n.baseState = e), [e, n.queue.dispatch]);
                        },
                        useMemoCache: Uo,
                        useCacheRefresh: Ri,
                    },
                    Gi = null,
                    Xi = 0;
                function Ki(e) {
                    var t = Xi;
                    return (Xi += 1), null === Gi && (Gi = []), Ka(Gi, e, t);
                }
                function Qi(e, t) {
                    (t = t.props.ref), (e.ref = void 0 !== t ? t : null);
                }
                function Zi(e, t) {
                    if (t.$$typeof === f) throw Error(i(525));
                    throw ((e = Object.prototype.toString.call(t)), Error(i(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
                }
                function Ji(e) {
                    return (0, e._init)(e._payload);
                }
                function es(e) {
                    function t(t, n) {
                        if (e) {
                            var r = t.deletions;
                            null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
                        }
                    }
                    function n(n, r) {
                        if (!e) return null;
                        for (; null !== r; ) t(n, r), (r = r.sibling);
                        return null;
                    }
                    function r(e) {
                        for (var t = new Map(); null !== e; ) null !== e.key ? t.set(e.key, e) : t.set(e.index, e), (e = e.sibling);
                        return t;
                    }
                    function a(e, t) {
                        return ((e = Dr(e, t)).index = 0), (e.sibling = null), e;
                    }
                    function o(t, n, r) {
                        return (t.index = r), e ? (null !== (r = t.alternate) ? ((r = r.index) < n ? ((t.flags |= 67108866), n) : r) : ((t.flags |= 67108866), n)) : ((t.flags |= 1048576), n);
                    }
                    function s(t) {
                        return e && null === t.alternate && (t.flags |= 67108866), t;
                    }
                    function l(e, t, n, r) {
                        return null === t || 6 !== t.tag ? (((t = Br(n, e.mode, r)).return = e), t) : (((t = a(t, n)).return = e), t);
                    }
                    function u(e, t, n, r) {
                        var o = n.type;
                        return o === m
                            ? d(e, t, n.props.children, r, n.key)
                            : null !== t && (t.elementType === o || ("object" == typeof o && null !== o && o.$$typeof === P && Ji(o) === t.type))
                            ? (Qi((t = a(t, n.props)), n), (t.return = e), t)
                            : (Qi((t = Ir(n.type, n.key, n.props, null, e.mode, r)), n), (t.return = e), t);
                    }
                    function c(e, t, n, r) {
                        return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation
                            ? (((t = Ur(n, e.mode, r)).return = e), t)
                            : (((t = a(t, n.children || [])).return = e), t);
                    }
                    function d(e, t, n, r, o) {
                        return null === t || 7 !== t.tag ? (((t = Vr(n, e.mode, r, o)).return = e), t) : (((t = a(t, n)).return = e), t);
                    }
                    function f(e, t, n) {
                        if (("string" == typeof t && "" !== t) || "number" == typeof t || "bigint" == typeof t) return ((t = Br("" + t, e.mode, n)).return = e), t;
                        if ("object" == typeof t && null !== t) {
                            switch (t.$$typeof) {
                                case h:
                                    return Qi((n = Ir(t.type, t.key, t.props, null, e.mode, n)), t), (n.return = e), n;
                                case p:
                                    return ((t = Ur(t, e.mode, n)).return = e), t;
                                case P:
                                    return f(e, (t = (0, t._init)(t._payload)), n);
                            }
                            if (O(t) || L(t)) return ((t = Vr(t, e.mode, n, null)).return = e), t;
                            if ("function" == typeof t.then) return f(e, Ki(t), n);
                            if (t.$$typeof === w) return f(e, Ta(e, t), n);
                            Zi(e, t);
                        }
                        return null;
                    }
                    function y(e, t, n, r) {
                        var a = null !== t ? t.key : null;
                        if (("string" == typeof n && "" !== n) || "number" == typeof n || "bigint" == typeof n) return null !== a ? null : l(e, t, "" + n, r);
                        if ("object" == typeof n && null !== n) {
                            switch (n.$$typeof) {
                                case h:
                                    return n.key === a ? u(e, t, n, r) : null;
                                case p:
                                    return n.key === a ? c(e, t, n, r) : null;
                                case P:
                                    return y(e, t, (n = (a = n._init)(n._payload)), r);
                            }
                            if (O(n) || L(n)) return null !== a ? null : d(e, t, n, r, null);
                            if ("function" == typeof n.then) return y(e, t, Ki(n), r);
                            if (n.$$typeof === w) return y(e, t, Ta(e, n), r);
                            Zi(e, n);
                        }
                        return null;
                    }
                    function g(e, t, n, r, a) {
                        if (("string" == typeof r && "" !== r) || "number" == typeof r || "bigint" == typeof r) return l(t, (e = e.get(n) || null), "" + r, a);
                        if ("object" == typeof r && null !== r) {
                            switch (r.$$typeof) {
                                case h:
                                    return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
                                case p:
                                    return c(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
                                case P:
                                    return g(e, t, n, (r = (0, r._init)(r._payload)), a);
                            }
                            if (O(r) || L(r)) return d(t, (e = e.get(n) || null), r, a, null);
                            if ("function" == typeof r.then) return g(e, t, n, Ki(r), a);
                            if (r.$$typeof === w) return g(e, t, n, Ta(t, r), a);
                            Zi(t, r);
                        }
                        return null;
                    }
                    function v(l, u, c, d) {
                        if (("object" == typeof c && null !== c && c.type === m && null === c.key && (c = c.props.children), "object" == typeof c && null !== c)) {
                            switch (c.$$typeof) {
                                case h:
                                    e: {
                                        for (var b = c.key; null !== u; ) {
                                            if (u.key === b) {
                                                if ((b = c.type) === m) {
                                                    if (7 === u.tag) {
                                                        n(l, u.sibling), ((d = a(u, c.props.children)).return = l), (l = d);
                                                        break e;
                                                    }
                                                } else if (u.elementType === b || ("object" == typeof b && null !== b && b.$$typeof === P && Ji(b) === u.type)) {
                                                    n(l, u.sibling), Qi((d = a(u, c.props)), c), (d.return = l), (l = d);
                                                    break e;
                                                }
                                                n(l, u);
                                                break;
                                            }
                                            t(l, u), (u = u.sibling);
                                        }
                                        c.type === m ? (((d = Vr(c.props.children, l.mode, d, c.key)).return = l), (l = d)) : (Qi((d = Ir(c.type, c.key, c.props, null, l.mode, d)), c), (d.return = l), (l = d));
                                    }
                                    return s(l);
                                case p:
                                    e: {
                                        for (b = c.key; null !== u; ) {
                                            if (u.key === b) {
                                                if (4 === u.tag && u.stateNode.containerInfo === c.containerInfo && u.stateNode.implementation === c.implementation) {
                                                    n(l, u.sibling), ((d = a(u, c.children || [])).return = l), (l = d);
                                                    break e;
                                                }
                                                n(l, u);
                                                break;
                                            }
                                            t(l, u), (u = u.sibling);
                                        }
                                        ((d = Ur(c, l.mode, d)).return = l), (l = d);
                                    }
                                    return s(l);
                                case P:
                                    return v(l, u, (c = (b = c._init)(c._payload)), d);
                            }
                            if (O(c))
                                return (function (a, i, s, l) {
                                    for (var u = null, c = null, d = i, h = (i = 0), p = null; null !== d && h < s.length; h++) {
                                        d.index > h ? ((p = d), (d = null)) : (p = d.sibling);
                                        var m = y(a, d, s[h], l);
                                        if (null === m) {
                                            null === d && (d = p);
                                            break;
                                        }
                                        e && d && null === m.alternate && t(a, d), (i = o(m, i, h)), null === c ? (u = m) : (c.sibling = m), (c = m), (d = p);
                                    }
                                    if (h === s.length) return n(a, d), aa && Zr(a, h), u;
                                    if (null === d) {
                                        for (; h < s.length; h++) null !== (d = f(a, s[h], l)) && ((i = o(d, i, h)), null === c ? (u = d) : (c.sibling = d), (c = d));
                                        return aa && Zr(a, h), u;
                                    }
                                    for (d = r(d); h < s.length; h++)
                                        null !== (p = g(d, a, h, s[h], l)) && (e && null !== p.alternate && d.delete(null === p.key ? h : p.key), (i = o(p, i, h)), null === c ? (u = p) : (c.sibling = p), (c = p));
                                    return (
                                        e &&
                                            d.forEach(function (e) {
                                                return t(a, e);
                                            }),
                                        aa && Zr(a, h),
                                        u
                                    );
                                })(l, u, c, d);
                            if (L(c)) {
                                if ("function" != typeof (b = L(c))) throw Error(i(150));
                                return (function (a, s, l, u) {
                                    if (null == l) throw Error(i(151));
                                    for (var c = null, d = null, h = s, p = (s = 0), m = null, v = l.next(); null !== h && !v.done; p++, v = l.next()) {
                                        h.index > p ? ((m = h), (h = null)) : (m = h.sibling);
                                        var b = y(a, h, v.value, u);
                                        if (null === b) {
                                            null === h && (h = m);
                                            break;
                                        }
                                        e && h && null === b.alternate && t(a, h), (s = o(b, s, p)), null === d ? (c = b) : (d.sibling = b), (d = b), (h = m);
                                    }
                                    if (v.done) return n(a, h), aa && Zr(a, p), c;
                                    if (null === h) {
                                        for (; !v.done; p++, v = l.next()) null !== (v = f(a, v.value, u)) && ((s = o(v, s, p)), null === d ? (c = v) : (d.sibling = v), (d = v));
                                        return aa && Zr(a, p), c;
                                    }
                                    for (h = r(h); !v.done; p++, v = l.next())
                                        null !== (v = g(h, a, p, v.value, u)) && (e && null !== v.alternate && h.delete(null === v.key ? p : v.key), (s = o(v, s, p)), null === d ? (c = v) : (d.sibling = v), (d = v));
                                    return (
                                        e &&
                                            h.forEach(function (e) {
                                                return t(a, e);
                                            }),
                                        aa && Zr(a, p),
                                        c
                                    );
                                })(l, u, (c = b.call(c)), d);
                            }
                            if ("function" == typeof c.then) return v(l, u, Ki(c), d);
                            if (c.$$typeof === w) return v(l, u, Ta(l, c), d);
                            Zi(l, c);
                        }
                        return ("string" == typeof c && "" !== c) || "number" == typeof c || "bigint" == typeof c
                            ? ((c = "" + c), null !== u && 6 === u.tag ? (n(l, u.sibling), ((d = a(u, c)).return = l), (l = d)) : (n(l, u), ((d = Br(c, l.mode, d)).return = l), (l = d)), s(l))
                            : n(l, u);
                    }
                    return function (e, t, n, r) {
                        try {
                            Xi = 0;
                            var a = v(e, t, n, r);
                            return (Gi = null), a;
                        } catch (t) {
                            if (t === Ha || t === Ya) throw t;
                            var o = Rr(29, t, null, e.mode);
                            return (o.lanes = r), (o.return = e), o;
                        }
                    };
                }
                var ts = es(!0),
                    ns = es(!1),
                    rs = F(null),
                    as = null;
                function os(e) {
                    var t = e.alternate;
                    V(us, 1 & us.current), V(rs, e), null === as && (null === t || null !== ho.current || null !== t.memoizedState) && (as = e);
                }
                function is(e) {
                    if (22 === e.tag) {
                        if ((V(us, us.current), V(rs, e), null === as)) {
                            var t = e.alternate;
                            null !== t && null !== t.memoizedState && (as = e);
                        }
                    } else ss();
                }
                function ss() {
                    V(us, us.current), V(rs, rs.current);
                }
                function ls(e) {
                    I(rs), as === e && (as = null), I(us);
                }
                var us = F(0);
                function cs(e) {
                    for (var t = e; null !== t; ) {
                        if (13 === t.tag) {
                            var n = t.memoizedState;
                            if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || md(n))) return t;
                        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                            if (128 & t.flags) return t;
                        } else if (null !== t.child) {
                            (t.child.return = t), (t = t.child);
                            continue;
                        }
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                            if (null === t.return || t.return === e) return null;
                            t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                    }
                    return null;
                }
                function ds(e, t, n, r) {
                    (n = null == (n = n(r, (t = e.memoizedState))) ? t : d({}, t, n)), (e.memoizedState = n), 0 === e.lanes && (e.updateQueue.baseState = n);
                }
                var fs = {
                    enqueueSetState: function (e, t, n) {
                        e = e._reactInternals;
                        var r = Mu(),
                            a = ro(r);
                        (a.payload = t), null != n && (a.callback = n), null !== (t = ao(e, a, r)) && (Ru(t, 0, r), oo(t, e, r));
                    },
                    enqueueReplaceState: function (e, t, n) {
                        e = e._reactInternals;
                        var r = Mu(),
                            a = ro(r);
                        (a.tag = 1), (a.payload = t), null != n && (a.callback = n), null !== (t = ao(e, a, r)) && (Ru(t, 0, r), oo(t, e, r));
                    },
                    enqueueForceUpdate: function (e, t) {
                        e = e._reactInternals;
                        var n = Mu(),
                            r = ro(n);
                        (r.tag = 2), null != t && (r.callback = t), null !== (t = ao(e, r, n)) && (Ru(t, 0, n), oo(t, e, n));
                    },
                };
                function hs(e, t, n, r, a, o, i) {
                    return "function" == typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, o, i) : !(t.prototype && t.prototype.isPureReactComponent && Xn(n, r) && Xn(a, o));
                }
                function ps(e, t, n, r) {
                    (e = t.state),
                        "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
                        "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
                        t.state !== e && fs.enqueueReplaceState(t, t.state, null);
                }
                function ms(e, t) {
                    var n = t;
                    if ("ref" in t) for (var r in ((n = {}), t)) "ref" !== r && (n[r] = t[r]);
                    if ((e = e.defaultProps)) for (var a in (n === t && (n = d({}, n)), e)) void 0 === n[a] && (n[a] = e[a]);
                    return n;
                }
                var ys =
                    "function" == typeof reportError
                        ? reportError
                        : function (e) {
                              if ("object" == typeof window && "function" == typeof window.ErrorEvent) {
                                  var t = new window.ErrorEvent("error", { bubbles: !0, cancelable: !0, message: "object" == typeof e && null !== e && "string" == typeof e.message ? String(e.message) : String(e), error: e });
                                  if (!window.dispatchEvent(t)) return;
                              } else if ("object" == typeof process && "function" == typeof process.emit) return void process.emit("uncaughtException", e);
                              console.error(e);
                          };
                function gs(e) {
                    ys(e);
                }
                function vs(e) {
                    console.error(e);
                }
                function bs(e) {
                    ys(e);
                }
                function ws(e, t) {
                    try {
                        (0, e.onUncaughtError)(t.value, { componentStack: t.stack });
                    } catch (e) {
                        setTimeout(function () {
                            throw e;
                        });
                    }
                }
                function xs(e, t, n) {
                    try {
                        (0, e.onCaughtError)(n.value, { componentStack: n.stack, errorBoundary: 1 === t.tag ? t.stateNode : null });
                    } catch (e) {
                        setTimeout(function () {
                            throw e;
                        });
                    }
                }
                function ks(e, t, n) {
                    return (
                        ((n = ro(n)).tag = 3),
                        (n.payload = { element: null }),
                        (n.callback = function () {
                            ws(e, t);
                        }),
                        n
                    );
                }
                function Ss(e) {
                    return ((e = ro(e)).tag = 3), e;
                }
                function Es(e, t, n, r) {
                    var a = n.type.getDerivedStateFromError;
                    if ("function" == typeof a) {
                        var o = r.value;
                        (e.payload = function () {
                            return a(o);
                        }),
                            (e.callback = function () {
                                xs(t, n, r);
                            });
                    }
                    var i = n.stateNode;
                    null !== i &&
                        "function" == typeof i.componentDidCatch &&
                        (e.callback = function () {
                            xs(t, n, r), "function" != typeof a && (null === Su ? (Su = new Set([this])) : Su.add(this));
                            var e = r.stack;
                            this.componentDidCatch(r.value, { componentStack: null !== e ? e : "" });
                        });
                }
                var Ps = Error(i(461)),
                    Ts = !1;
                function Cs(e, t, n, r) {
                    t.child = null === e ? ns(t, null, n, r) : ts(t, e.child, n, r);
                }
                function As(e, t, n, r, a) {
                    n = n.render;
                    var o = t.ref;
                    if ("ref" in r) {
                        var i = {};
                        for (var s in r) "ref" !== s && (i[s] = r[s]);
                    } else i = r;
                    return Ea(t), (r = No(e, t, n, i, o, a)), (s = Ro()), null === e || Ts ? (aa && s && ea(t), (t.flags |= 1), Cs(e, t, r, a), t.child) : (_o(e, t, a), Gs(e, t, a));
                }
                function Ls(e, t, n, r, a) {
                    if (null === e) {
                        var o = n.type;
                        return "function" != typeof o || _r(o) || void 0 !== o.defaultProps || null !== n.compare
                            ? (((e = Ir(n.type, null, r, t, t.mode, a)).ref = t.ref), (e.return = t), (t.child = e))
                            : ((t.tag = 15), (t.type = o), js(e, t, o, r, a));
                    }
                    if (((o = e.child), !Xs(e, a))) {
                        var i = o.memoizedProps;
                        if ((n = null !== (n = n.compare) ? n : Xn)(i, r) && e.ref === t.ref) return Gs(e, t, a);
                    }
                    return (t.flags |= 1), ((e = Dr(o, r)).ref = t.ref), (e.return = t), (t.child = e);
                }
                function js(e, t, n, r, a) {
                    if (null !== e) {
                        var o = e.memoizedProps;
                        if (Xn(o, r) && e.ref === t.ref) {
                            if (((Ts = !1), (t.pendingProps = r = o), !Xs(e, a))) return (t.lanes = e.lanes), Gs(e, t, a);
                            131072 & e.flags && (Ts = !0);
                        }
                    }
                    return zs(e, t, n, r, a);
                }
                function Ns(e, t, n) {
                    var r = t.pendingProps,
                        a = r.children,
                        o = null !== e ? e.memoizedState : null;
                    if ("hidden" === r.mode) {
                        if (128 & t.flags) {
                            if (((r = null !== o ? o.baseLanes | n : n), null !== e)) {
                                for (a = t.child = e.child, o = 0; null !== a; ) (o = o | a.lanes | a.childLanes), (a = a.sibling);
                                t.childLanes = o & ~r;
                            } else (t.childLanes = 0), (t.child = null);
                            return Os(e, t, r, n);
                        }
                        if (!(536870912 & n)) return (t.lanes = t.childLanes = 536870912), Os(e, t, null !== o ? o.baseLanes | n : n, n);
                        (t.memoizedState = { baseLanes: 0, cachePool: null }), null !== e && Ua(0, null !== o ? o.cachePool : null), null !== o ? mo(t, o) : yo(), is(t);
                    } else null !== o ? (Ua(0, o.cachePool), mo(t, o), ss(), (t.memoizedState = null)) : (null !== e && Ua(0, null), yo(), ss());
                    return Cs(e, t, a, n), t.child;
                }
                function Os(e, t, n, r) {
                    var a = Ba();
                    return (a = null === a ? null : { parent: Na._currentValue, pool: a }), (t.memoizedState = { baseLanes: n, cachePool: a }), null !== e && Ua(0, null), yo(), is(t), null !== e && ka(e, t, r, !0), null;
                }
                function Ms(e, t) {
                    var n = t.ref;
                    if (null === n) null !== e && null !== e.ref && (t.flags |= 4194816);
                    else {
                        if ("function" != typeof n && "object" != typeof n) throw Error(i(284));
                        (null !== e && e.ref === n) || (t.flags |= 4194816);
                    }
                }
                function zs(e, t, n, r, a) {
                    return Ea(t), (n = No(e, t, n, r, void 0, a)), (r = Ro()), null === e || Ts ? (aa && r && ea(t), (t.flags |= 1), Cs(e, t, n, a), t.child) : (_o(e, t, a), Gs(e, t, a));
                }
                function Rs(e, t, n, r, a, o) {
                    return Ea(t), (t.updateQueue = null), (n = Mo(t, r, n, a)), Oo(e), (r = Ro()), null === e || Ts ? (aa && r && ea(t), (t.flags |= 1), Cs(e, t, n, o), t.child) : (_o(e, t, o), Gs(e, t, o));
                }
                function _s(e, t, n, r, a) {
                    if ((Ea(t), null === t.stateNode)) {
                        var o = Mr,
                            i = n.contextType;
                        "object" == typeof i && null !== i && (o = Pa(i)),
                            (o = new n(r, o)),
                            (t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null),
                            (o.updater = fs),
                            (t.stateNode = o),
                            (o._reactInternals = t),
                            ((o = t.stateNode).props = r),
                            (o.state = t.memoizedState),
                            (o.refs = {}),
                            to(t),
                            (i = n.contextType),
                            (o.context = "object" == typeof i && null !== i ? Pa(i) : Mr),
                            (o.state = t.memoizedState),
                            "function" == typeof (i = n.getDerivedStateFromProps) && (ds(t, n, i, r), (o.state = t.memoizedState)),
                            "function" == typeof n.getDerivedStateFromProps ||
                                "function" == typeof o.getSnapshotBeforeUpdate ||
                                ("function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount) ||
                                ((i = o.state),
                                "function" == typeof o.componentWillMount && o.componentWillMount(),
                                "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(),
                                i !== o.state && fs.enqueueReplaceState(o, o.state, null),
                                uo(t, r, o, a),
                                lo(),
                                (o.state = t.memoizedState)),
                            "function" == typeof o.componentDidMount && (t.flags |= 4194308),
                            (r = !0);
                    } else if (null === e) {
                        o = t.stateNode;
                        var s = t.memoizedProps,
                            l = ms(n, s);
                        o.props = l;
                        var u = o.context,
                            c = n.contextType;
                        (i = Mr), "object" == typeof c && null !== c && (i = Pa(c));
                        var d = n.getDerivedStateFromProps;
                        (c = "function" == typeof d || "function" == typeof o.getSnapshotBeforeUpdate),
                            (s = t.pendingProps !== s),
                            c || ("function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps) || ((s || u !== i) && ps(t, o, r, i)),
                            (eo = !1);
                        var f = t.memoizedState;
                        (o.state = f),
                            uo(t, r, o, a),
                            lo(),
                            (u = t.memoizedState),
                            s || f !== u || eo
                                ? ("function" == typeof d && (ds(t, n, d, r), (u = t.memoizedState)),
                                  (l = eo || hs(t, n, l, r, f, u, i))
                                      ? (c ||
                                            ("function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount) ||
                                            ("function" == typeof o.componentWillMount && o.componentWillMount(), "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()),
                                        "function" == typeof o.componentDidMount && (t.flags |= 4194308))
                                      : ("function" == typeof o.componentDidMount && (t.flags |= 4194308), (t.memoizedProps = r), (t.memoizedState = u)),
                                  (o.props = r),
                                  (o.state = u),
                                  (o.context = i),
                                  (r = l))
                                : ("function" == typeof o.componentDidMount && (t.flags |= 4194308), (r = !1));
                    } else {
                        (o = t.stateNode),
                            no(e, t),
                            (c = ms(n, (i = t.memoizedProps))),
                            (o.props = c),
                            (d = t.pendingProps),
                            (f = o.context),
                            (u = n.contextType),
                            (l = Mr),
                            "object" == typeof u && null !== u && (l = Pa(u)),
                            (u = "function" == typeof (s = n.getDerivedStateFromProps) || "function" == typeof o.getSnapshotBeforeUpdate) ||
                                ("function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps) ||
                                ((i !== d || f !== l) && ps(t, o, r, l)),
                            (eo = !1),
                            (f = t.memoizedState),
                            (o.state = f),
                            uo(t, r, o, a),
                            lo();
                        var h = t.memoizedState;
                        i !== d || f !== h || eo || (null !== e && null !== e.dependencies && Sa(e.dependencies))
                            ? ("function" == typeof s && (ds(t, n, s, r), (h = t.memoizedState)),
                              (c = eo || hs(t, n, c, r, f, h, l) || (null !== e && null !== e.dependencies && Sa(e.dependencies)))
                                  ? (u ||
                                        ("function" != typeof o.UNSAFE_componentWillUpdate && "function" != typeof o.componentWillUpdate) ||
                                        ("function" == typeof o.componentWillUpdate && o.componentWillUpdate(r, h, l), "function" == typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(r, h, l)),
                                    "function" == typeof o.componentDidUpdate && (t.flags |= 4),
                                    "function" == typeof o.getSnapshotBeforeUpdate && (t.flags |= 1024))
                                  : ("function" != typeof o.componentDidUpdate || (i === e.memoizedProps && f === e.memoizedState) || (t.flags |= 4),
                                    "function" != typeof o.getSnapshotBeforeUpdate || (i === e.memoizedProps && f === e.memoizedState) || (t.flags |= 1024),
                                    (t.memoizedProps = r),
                                    (t.memoizedState = h)),
                              (o.props = r),
                              (o.state = h),
                              (o.context = l),
                              (r = c))
                            : ("function" != typeof o.componentDidUpdate || (i === e.memoizedProps && f === e.memoizedState) || (t.flags |= 4),
                              "function" != typeof o.getSnapshotBeforeUpdate || (i === e.memoizedProps && f === e.memoizedState) || (t.flags |= 1024),
                              (r = !1));
                    }
                    return (
                        (o = r),
                        Ms(e, t),
                        (r = !!(128 & t.flags)),
                        o || r
                            ? ((o = t.stateNode),
                              (n = r && "function" != typeof n.getDerivedStateFromError ? null : o.render()),
                              (t.flags |= 1),
                              null !== e && r ? ((t.child = ts(t, e.child, null, a)), (t.child = ts(t, null, n, a))) : Cs(e, t, n, a),
                              (t.memoizedState = o.state),
                              (e = t.child))
                            : (e = Gs(e, t, a)),
                        e
                    );
                }
                function Ds(e, t, n, r) {
                    return fa(), (t.flags |= 256), Cs(e, t, n, r), t.child;
                }
                var Fs = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
                function Is(e) {
                    return { baseLanes: e, cachePool: $a() };
                }
                function Vs(e, t, n) {
                    return (e = null !== e ? e.childLanes & ~n : 0), t && (e |= mu), e;
                }
                function Bs(e, t, n) {
                    var r,
                        a = t.pendingProps,
                        o = !1,
                        s = !!(128 & t.flags);
                    if (((r = s) || (r = (null === e || null !== e.memoizedState) && !!(2 & us.current)), r && ((o = !0), (t.flags &= -129)), (r = !!(32 & t.flags)), (t.flags &= -33), null === e)) {
                        if (aa) {
                            if ((o ? os(t) : ss(), aa)) {
                                var l,
                                    u = ra;
                                if ((l = u)) {
                                    e: {
                                        for (l = u, u = ia; 8 !== l.nodeType; ) {
                                            if (!u) {
                                                u = null;
                                                break e;
                                            }
                                            if (null === (l = yd(l.nextSibling))) {
                                                u = null;
                                                break e;
                                            }
                                        }
                                        u = l;
                                    }
                                    null !== u
                                        ? ((t.memoizedState = { dehydrated: u, treeContext: null !== Xr ? { id: Kr, overflow: Qr } : null, retryLane: 536870912, hydrationErrors: null }),
                                          ((l = Rr(18, null, null, 0)).stateNode = u),
                                          (l.return = t),
                                          (t.child = l),
                                          (na = t),
                                          (ra = null),
                                          (l = !0))
                                        : (l = !1);
                                }
                                l || la(t);
                            }
                            if (null !== (u = t.memoizedState) && null !== (u = u.dehydrated)) return md(u) ? (t.lanes = 32) : (t.lanes = 536870912), null;
                            ls(t);
                        }
                        return (
                            (u = a.children),
                            (a = a.fallback),
                            o
                                ? (ss(),
                                  (u = $s({ mode: "hidden", children: u }, (o = t.mode))),
                                  (a = Vr(a, o, n, null)),
                                  (u.return = t),
                                  (a.return = t),
                                  (u.sibling = a),
                                  (t.child = u),
                                  ((o = t.child).memoizedState = Is(n)),
                                  (o.childLanes = Vs(e, r, n)),
                                  (t.memoizedState = Fs),
                                  a)
                                : (os(t), Us(t, u))
                        );
                    }
                    if (null !== (l = e.memoizedState) && null !== (u = l.dehydrated)) {
                        if (s)
                            256 & t.flags
                                ? (os(t), (t.flags &= -257), (t = Hs(e, t, n)))
                                : null !== t.memoizedState
                                ? (ss(), (t.child = e.child), (t.flags |= 128), (t = null))
                                : (ss(),
                                  (o = a.fallback),
                                  (u = t.mode),
                                  (a = $s({ mode: "visible", children: a.children }, u)),
                                  ((o = Vr(o, u, n, null)).flags |= 2),
                                  (a.return = t),
                                  (o.return = t),
                                  (a.sibling = o),
                                  (t.child = a),
                                  ts(t, e.child, null, n),
                                  ((a = t.child).memoizedState = Is(n)),
                                  (a.childLanes = Vs(e, r, n)),
                                  (t.memoizedState = Fs),
                                  (t = o));
                        else if ((os(t), md(u))) {
                            if ((r = u.nextSibling && u.nextSibling.dataset)) var c = r.dgst;
                            (r = c), ((a = Error(i(419))).stack = ""), (a.digest = r), pa({ value: a, source: null, stack: null }), (t = Hs(e, t, n));
                        } else if ((Ts || ka(e, t, n, !1), (r = !!(n & e.childLanes)), Ts || r)) {
                            if (null !== (r = nu) && 0 !== (a = (a = 42 & (a = n & -n) ? 1 : Ce(a)) & (r.suspendedLanes | n) ? 0 : a) && a !== l.retryLane) throw ((l.retryLane = a), jr(e, a), Ru(r, 0, a), Ps);
                            "$?" === u.data || Yu(), (t = Hs(e, t, n));
                        } else
                            "$?" === u.data
                                ? ((t.flags |= 192), (t.child = e.child), (t = null))
                                : ((e = l.treeContext),
                                  (ra = yd(u.nextSibling)),
                                  (na = t),
                                  (aa = !0),
                                  (oa = null),
                                  (ia = !1),
                                  null !== e && ((qr[Gr++] = Kr), (qr[Gr++] = Qr), (qr[Gr++] = Xr), (Kr = e.id), (Qr = e.overflow), (Xr = t)),
                                  ((t = Us(t, a.children)).flags |= 4096));
                        return t;
                    }
                    return o
                        ? (ss(),
                          (o = a.fallback),
                          (u = t.mode),
                          (c = (l = e.child).sibling),
                          ((a = Dr(l, { mode: "hidden", children: a.children })).subtreeFlags = 65011712 & l.subtreeFlags),
                          null !== c ? (o = Dr(c, o)) : ((o = Vr(o, u, n, null)).flags |= 2),
                          (o.return = t),
                          (a.return = t),
                          (a.sibling = o),
                          (t.child = a),
                          (a = o),
                          (o = t.child),
                          null === (u = e.child.memoizedState)
                              ? (u = Is(n))
                              : (null !== (l = u.cachePool) ? ((c = Na._currentValue), (l = l.parent !== c ? { parent: c, pool: c } : l)) : (l = $a()), (u = { baseLanes: u.baseLanes | n, cachePool: l })),
                          (o.memoizedState = u),
                          (o.childLanes = Vs(e, r, n)),
                          (t.memoizedState = Fs),
                          a)
                        : (os(t),
                          (e = (n = e.child).sibling),
                          ((n = Dr(n, { mode: "visible", children: a.children })).return = t),
                          (n.sibling = null),
                          null !== e && (null === (r = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
                          (t.child = n),
                          (t.memoizedState = null),
                          n);
                }
                function Us(e, t) {
                    return ((t = $s({ mode: "visible", children: t }, e.mode)).return = e), (e.child = t);
                }
                function $s(e, t) {
                    return ((e = Rr(22, e, null, t)).lanes = 0), (e.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), e;
                }
                function Hs(e, t, n) {
                    return ts(t, e.child, null, n), ((e = Us(t, t.pendingProps.children)).flags |= 2), (t.memoizedState = null), e;
                }
                function Ws(e, t, n) {
                    e.lanes |= t;
                    var r = e.alternate;
                    null !== r && (r.lanes |= t), wa(e.return, t, n);
                }
                function Ys(e, t, n, r, a) {
                    var o = e.memoizedState;
                    null === o
                        ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a })
                        : ((o.isBackwards = t), (o.rendering = null), (o.renderingStartTime = 0), (o.last = r), (o.tail = n), (o.tailMode = a));
                }
                function qs(e, t, n) {
                    var r = t.pendingProps,
                        a = r.revealOrder,
                        o = r.tail;
                    if ((Cs(e, t, r.children, n), 2 & (r = us.current))) (r = (1 & r) | 2), (t.flags |= 128);
                    else {
                        if (null !== e && 128 & e.flags)
                            e: for (e = t.child; null !== e; ) {
                                if (13 === e.tag) null !== e.memoizedState && Ws(e, n, t);
                                else if (19 === e.tag) Ws(e, n, t);
                                else if (null !== e.child) {
                                    (e.child.return = e), (e = e.child);
                                    continue;
                                }
                                if (e === t) break e;
                                for (; null === e.sibling; ) {
                                    if (null === e.return || e.return === t) break e;
                                    e = e.return;
                                }
                                (e.sibling.return = e.return), (e = e.sibling);
                            }
                        r &= 1;
                    }
                    switch ((V(us, r), a)) {
                        case "forwards":
                            for (n = t.child, a = null; null !== n; ) null !== (e = n.alternate) && null === cs(e) && (a = n), (n = n.sibling);
                            null === (n = a) ? ((a = t.child), (t.child = null)) : ((a = n.sibling), (n.sibling = null)), Ys(t, !1, a, n, o);
                            break;
                        case "backwards":
                            for (n = null, a = t.child, t.child = null; null !== a; ) {
                                if (null !== (e = a.alternate) && null === cs(e)) {
                                    t.child = a;
                                    break;
                                }
                                (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                            }
                            Ys(t, !0, n, null, o);
                            break;
                        case "together":
                            Ys(t, !1, null, null, void 0);
                            break;
                        default:
                            t.memoizedState = null;
                    }
                    return t.child;
                }
                function Gs(e, t, n) {
                    if ((null !== e && (t.dependencies = e.dependencies), (fu |= t.lanes), !(n & t.childLanes))) {
                        if (null === e) return null;
                        if ((ka(e, t, n, !1), !(n & t.childLanes))) return null;
                    }
                    if (null !== e && t.child !== e.child) throw Error(i(153));
                    if (null !== t.child) {
                        for (n = Dr((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; ) (e = e.sibling), ((n = n.sibling = Dr(e, e.pendingProps)).return = t);
                        n.sibling = null;
                    }
                    return t.child;
                }
                function Xs(e, t) {
                    return !!(e.lanes & t) || !(null === (e = e.dependencies) || !Sa(e));
                }
                function Ks(e, t, n) {
                    if (null !== e)
                        if (e.memoizedProps !== t.pendingProps) Ts = !0;
                        else {
                            if (!(Xs(e, n) || 128 & t.flags))
                                return (
                                    (Ts = !1),
                                    (function (e, t, n) {
                                        switch (t.tag) {
                                            case 3:
                                                W(t, t.stateNode.containerInfo), va(0, Na, e.memoizedState.cache), fa();
                                                break;
                                            case 27:
                                            case 5:
                                                q(t);
                                                break;
                                            case 4:
                                                W(t, t.stateNode.containerInfo);
                                                break;
                                            case 10:
                                                va(0, t.type, t.memoizedProps.value);
                                                break;
                                            case 13:
                                                var r = t.memoizedState;
                                                if (null !== r) return null !== r.dehydrated ? (os(t), (t.flags |= 128), null) : n & t.child.childLanes ? Bs(e, t, n) : (os(t), null !== (e = Gs(e, t, n)) ? e.sibling : null);
                                                os(t);
                                                break;
                                            case 19:
                                                var a = !!(128 & e.flags);
                                                if (((r = !!(n & t.childLanes)) || (ka(e, t, n, !1), (r = !!(n & t.childLanes))), a)) {
                                                    if (r) return qs(e, t, n);
                                                    t.flags |= 128;
                                                }
                                                if ((null !== (a = t.memoizedState) && ((a.rendering = null), (a.tail = null), (a.lastEffect = null)), V(us, us.current), r)) break;
                                                return null;
                                            case 22:
                                            case 23:
                                                return (t.lanes = 0), Ns(e, t, n);
                                            case 24:
                                                va(0, Na, e.memoizedState.cache);
                                        }
                                        return Gs(e, t, n);
                                    })(e, t, n)
                                );
                            Ts = !!(131072 & e.flags);
                        }
                    else (Ts = !1), aa && 1048576 & t.flags && Jr(t, Yr, t.index);
                    switch (((t.lanes = 0), t.tag)) {
                        case 16:
                            e: {
                                e = t.pendingProps;
                                var r = t.elementType,
                                    a = r._init;
                                if (((r = a(r._payload)), (t.type = r), "function" != typeof r)) {
                                    if (null != r) {
                                        if ((a = r.$$typeof) === x) {
                                            (t.tag = 11), (t = As(null, t, r, e, n));
                                            break e;
                                        }
                                        if (a === E) {
                                            (t.tag = 14), (t = Ls(null, t, r, e, n));
                                            break e;
                                        }
                                    }
                                    throw ((t = N(r) || r), Error(i(306, t, "")));
                                }
                                _r(r) ? ((e = ms(r, e)), (t.tag = 1), (t = _s(null, t, r, e, n))) : ((t.tag = 0), (t = zs(null, t, r, e, n)));
                            }
                            return t;
                        case 0:
                            return zs(e, t, t.type, t.pendingProps, n);
                        case 1:
                            return _s(e, t, (r = t.type), (a = ms(r, t.pendingProps)), n);
                        case 3:
                            e: {
                                if ((W(t, t.stateNode.containerInfo), null === e)) throw Error(i(387));
                                r = t.pendingProps;
                                var o = t.memoizedState;
                                (a = o.element), no(e, t), uo(t, r, null, n);
                                var s = t.memoizedState;
                                if (((r = s.cache), va(0, Na, r), r !== o.cache && xa(t, [Na], n, !0), lo(), (r = s.element), o.isDehydrated)) {
                                    if (((o = { element: r, isDehydrated: !1, cache: s.cache }), (t.updateQueue.baseState = o), (t.memoizedState = o), 256 & t.flags)) {
                                        t = Ds(e, t, r, n);
                                        break e;
                                    }
                                    if (r !== a) {
                                        pa((a = Sr(Error(i(424)), t))), (t = Ds(e, t, r, n));
                                        break e;
                                    }
                                    for (
                                        e = 9 === (e = t.stateNode.containerInfo).nodeType ? e.body : "HTML" === e.nodeName ? e.ownerDocument.body : e,
                                            ra = yd(e.firstChild),
                                            na = t,
                                            aa = !0,
                                            oa = null,
                                            ia = !0,
                                            n = ns(t, null, r, n),
                                            t.child = n;
                                        n;

                                    )
                                        (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                                } else {
                                    if ((fa(), r === a)) {
                                        t = Gs(e, t, n);
                                        break e;
                                    }
                                    Cs(e, t, r, n);
                                }
                                t = t.child;
                            }
                            return t;
                        case 26:
                            return (
                                Ms(e, t),
                                null === e
                                    ? (n = Cd(t.type, null, t.pendingProps, null))
                                        ? (t.memoizedState = n)
                                        : aa || ((n = t.type), (e = t.pendingProps), ((r = nd($.current).createElement(n))[Ne] = t), (r[Oe] = e), Jc(r, n, e), He(r), (t.stateNode = r))
                                    : (t.memoizedState = Cd(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
                                null
                            );
                        case 27:
                            return (
                                q(t),
                                null === e && aa && ((r = t.stateNode = bd(t.type, t.pendingProps, $.current)), (na = t), (ia = !0), (a = ra), fd(t.type) ? ((gd = a), (ra = yd(r.firstChild))) : (ra = a)),
                                Cs(e, t, t.pendingProps.children, n),
                                Ms(e, t),
                                null === e && (t.flags |= 4194304),
                                t.child
                            );
                        case 5:
                            return (
                                null === e &&
                                    aa &&
                                    ((a = r = ra) &&
                                        (null !==
                                        (r = (function (e, t, n, r) {
                                            for (; 1 === e.nodeType; ) {
                                                var a = n;
                                                if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                                                    if (!r && ("INPUT" !== e.nodeName || "hidden" !== e.type)) break;
                                                } else if (r) {
                                                    if (!e[Fe])
                                                        switch (t) {
                                                            case "meta":
                                                                if (!e.hasAttribute("itemprop")) break;
                                                                return e;
                                                            case "link":
                                                                if ("stylesheet" === (o = e.getAttribute("rel")) && e.hasAttribute("data-precedence")) break;
                                                                if (
                                                                    o !== a.rel ||
                                                                    e.getAttribute("href") !== (null == a.href || "" === a.href ? null : a.href) ||
                                                                    e.getAttribute("crossorigin") !== (null == a.crossOrigin ? null : a.crossOrigin) ||
                                                                    e.getAttribute("title") !== (null == a.title ? null : a.title)
                                                                )
                                                                    break;
                                                                return e;
                                                            case "style":
                                                                if (e.hasAttribute("data-precedence")) break;
                                                                return e;
                                                            case "script":
                                                                if (
                                                                    ((o = e.getAttribute("src")) !== (null == a.src ? null : a.src) ||
                                                                        e.getAttribute("type") !== (null == a.type ? null : a.type) ||
                                                                        e.getAttribute("crossorigin") !== (null == a.crossOrigin ? null : a.crossOrigin)) &&
                                                                    o &&
                                                                    e.hasAttribute("async") &&
                                                                    !e.hasAttribute("itemprop")
                                                                )
                                                                    break;
                                                                return e;
                                                            default:
                                                                return e;
                                                        }
                                                } else {
                                                    if ("input" !== t || "hidden" !== e.type) return e;
                                                    var o = null == a.name ? null : "" + a.name;
                                                    if ("hidden" === a.type && e.getAttribute("name") === o) return e;
                                                }
                                                if (null === (e = yd(e.nextSibling))) break;
                                            }
                                            return null;
                                        })(r, t.type, t.pendingProps, ia))
                                            ? ((t.stateNode = r), (na = t), (ra = yd(r.firstChild)), (ia = !1), (a = !0))
                                            : (a = !1)),
                                    a || la(t)),
                                q(t),
                                (a = t.type),
                                (o = t.pendingProps),
                                (s = null !== e ? e.memoizedProps : null),
                                (r = o.children),
                                od(a, o) ? (r = null) : null !== s && od(a, s) && (t.flags |= 32),
                                null !== t.memoizedState && ((a = No(e, t, zo, null, null, n)), (qd._currentValue = a)),
                                Ms(e, t),
                                Cs(e, t, r, n),
                                t.child
                            );
                        case 6:
                            return (
                                null === e &&
                                    aa &&
                                    ((e = n = ra) &&
                                        (null !==
                                        (n = (function (e, t, n) {
                                            if ("" === t) return null;
                                            for (; 3 !== e.nodeType; ) {
                                                if ((1 !== e.nodeType || "INPUT" !== e.nodeName || "hidden" !== e.type) && !n) return null;
                                                if (null === (e = yd(e.nextSibling))) return null;
                                            }
                                            return e;
                                        })(n, t.pendingProps, ia))
                                            ? ((t.stateNode = n), (na = t), (ra = null), (e = !0))
                                            : (e = !1)),
                                    e || la(t)),
                                null
                            );
                        case 13:
                            return Bs(e, t, n);
                        case 4:
                            return W(t, t.stateNode.containerInfo), (r = t.pendingProps), null === e ? (t.child = ts(t, null, r, n)) : Cs(e, t, r, n), t.child;
                        case 11:
                            return As(e, t, t.type, t.pendingProps, n);
                        case 7:
                            return Cs(e, t, t.pendingProps, n), t.child;
                        case 8:
                        case 12:
                            return Cs(e, t, t.pendingProps.children, n), t.child;
                        case 10:
                            return (r = t.pendingProps), va(0, t.type, r.value), Cs(e, t, r.children, n), t.child;
                        case 9:
                            return (a = t.type._context), (r = t.pendingProps.children), Ea(t), (r = r((a = Pa(a)))), (t.flags |= 1), Cs(e, t, r, n), t.child;
                        case 14:
                            return Ls(e, t, t.type, t.pendingProps, n);
                        case 15:
                            return js(e, t, t.type, t.pendingProps, n);
                        case 19:
                            return qs(e, t, n);
                        case 31:
                            return (
                                (r = t.pendingProps),
                                (n = t.mode),
                                (r = { mode: r.mode, children: r.children }),
                                null === e ? (((n = $s(r, n)).ref = t.ref), (t.child = n), (n.return = t), (t = n)) : (((n = Dr(e.child, r)).ref = t.ref), (t.child = n), (n.return = t), (t = n)),
                                t
                            );
                        case 22:
                            return Ns(e, t, n);
                        case 24:
                            return (
                                Ea(t),
                                (r = Pa(Na)),
                                null === e
                                    ? (null === (a = Ba()) && ((a = nu), (o = Oa()), (a.pooledCache = o), o.refCount++, null !== o && (a.pooledCacheLanes |= n), (a = o)), (t.memoizedState = { parent: r, cache: a }), to(t), va(0, Na, a))
                                    : (!!(e.lanes & n) && (no(e, t), uo(t, null, null, n), lo()),
                                      (a = e.memoizedState),
                                      (o = t.memoizedState),
                                      a.parent !== r
                                          ? ((a = { parent: r, cache: r }), (t.memoizedState = a), 0 === t.lanes && (t.memoizedState = t.updateQueue.baseState = a), va(0, Na, r))
                                          : ((r = o.cache), va(0, Na, r), r !== a.cache && xa(t, [Na], n, !0))),
                                Cs(e, t, t.pendingProps.children, n),
                                t.child
                            );
                        case 29:
                            throw t.pendingProps;
                    }
                    throw Error(i(156, t.tag));
                }
                function Qs(e) {
                    e.flags |= 4;
                }
                function Zs(e, t) {
                    if ("stylesheet" !== t.type || 4 & t.state.loading) e.flags &= -16777217;
                    else if (((e.flags |= 16777216), !Vd(t))) {
                        if (null !== (t = rs.current) && ((4194048 & au) === au ? null !== as : ((62914560 & au) !== au && !(536870912 & au)) || t !== as)) throw ((Qa = qa), Wa);
                        e.flags |= 8192;
                    }
                }
                function Js(e, t) {
                    null !== t && (e.flags |= 4), 16384 & e.flags && ((t = 22 !== e.tag ? ke() : 536870912), (e.lanes |= t), (yu |= t));
                }
                function el(e, t) {
                    if (!aa)
                        switch (e.tailMode) {
                            case "hidden":
                                t = e.tail;
                                for (var n = null; null !== t; ) null !== t.alternate && (n = t), (t = t.sibling);
                                null === n ? (e.tail = null) : (n.sibling = null);
                                break;
                            case "collapsed":
                                n = e.tail;
                                for (var r = null; null !== n; ) null !== n.alternate && (r = n), (n = n.sibling);
                                null === r ? (t || null === e.tail ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
                        }
                }
                function tl(e) {
                    var t = null !== e.alternate && e.alternate.child === e.child,
                        n = 0,
                        r = 0;
                    if (t) for (var a = e.child; null !== a; ) (n |= a.lanes | a.childLanes), (r |= 65011712 & a.subtreeFlags), (r |= 65011712 & a.flags), (a.return = e), (a = a.sibling);
                    else for (a = e.child; null !== a; ) (n |= a.lanes | a.childLanes), (r |= a.subtreeFlags), (r |= a.flags), (a.return = e), (a = a.sibling);
                    return (e.subtreeFlags |= r), (e.childLanes = n), t;
                }
                function nl(e, t, n) {
                    var r = t.pendingProps;
                    switch ((ta(t), t.tag)) {
                        case 31:
                        case 16:
                        case 15:
                        case 0:
                        case 11:
                        case 7:
                        case 8:
                        case 12:
                        case 9:
                        case 14:
                        case 1:
                            return tl(t), null;
                        case 3:
                            return (
                                (n = t.stateNode),
                                (r = null),
                                null !== e && (r = e.memoizedState.cache),
                                t.memoizedState.cache !== r && (t.flags |= 2048),
                                ba(Na),
                                Y(),
                                n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
                                (null !== e && null !== e.child) || (da(t) ? Qs(t) : null === e || (e.memoizedState.isDehydrated && !(256 & t.flags)) || ((t.flags |= 1024), ha())),
                                tl(t),
                                null
                            );
                        case 26:
                            return (
                                (n = t.memoizedState),
                                null === e
                                    ? (Qs(t), null !== n ? (tl(t), Zs(t, n)) : (tl(t), (t.flags &= -16777217)))
                                    : n
                                    ? n !== e.memoizedState
                                        ? (Qs(t), tl(t), Zs(t, n))
                                        : (tl(t), (t.flags &= -16777217))
                                    : (e.memoizedProps !== r && Qs(t), tl(t), (t.flags &= -16777217)),
                                null
                            );
                        case 27:
                            G(t), (n = $.current);
                            var a = t.type;
                            if (null !== e && null != t.stateNode) e.memoizedProps !== r && Qs(t);
                            else {
                                if (!r) {
                                    if (null === t.stateNode) throw Error(i(166));
                                    return tl(t), null;
                                }
                                (e = B.current), da(t) ? ua(t) : ((e = bd(a, r, n)), (t.stateNode = e), Qs(t));
                            }
                            return tl(t), null;
                        case 5:
                            if ((G(t), (n = t.type), null !== e && null != t.stateNode)) e.memoizedProps !== r && Qs(t);
                            else {
                                if (!r) {
                                    if (null === t.stateNode) throw Error(i(166));
                                    return tl(t), null;
                                }
                                if (((e = B.current), da(t))) ua(t);
                                else {
                                    switch (((a = nd($.current)), e)) {
                                        case 1:
                                            e = a.createElementNS("http://www.w3.org/2000/svg", n);
                                            break;
                                        case 2:
                                            e = a.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                            break;
                                        default:
                                            switch (n) {
                                                case "svg":
                                                    e = a.createElementNS("http://www.w3.org/2000/svg", n);
                                                    break;
                                                case "math":
                                                    e = a.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                                    break;
                                                case "script":
                                                    ((e = a.createElement("div")).innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild));
                                                    break;
                                                case "select":
                                                    (e = "string" == typeof r.is ? a.createElement("select", { is: r.is }) : a.createElement("select")), r.multiple ? (e.multiple = !0) : r.size && (e.size = r.size);
                                                    break;
                                                default:
                                                    e = "string" == typeof r.is ? a.createElement(n, { is: r.is }) : a.createElement(n);
                                            }
                                    }
                                    (e[Ne] = t), (e[Oe] = r);
                                    e: for (a = t.child; null !== a; ) {
                                        if (5 === a.tag || 6 === a.tag) e.appendChild(a.stateNode);
                                        else if (4 !== a.tag && 27 !== a.tag && null !== a.child) {
                                            (a.child.return = a), (a = a.child);
                                            continue;
                                        }
                                        if (a === t) break e;
                                        for (; null === a.sibling; ) {
                                            if (null === a.return || a.return === t) break e;
                                            a = a.return;
                                        }
                                        (a.sibling.return = a.return), (a = a.sibling);
                                    }
                                    t.stateNode = e;
                                    e: switch ((Jc(e, n, r), n)) {
                                        case "button":
                                        case "input":
                                        case "select":
                                        case "textarea":
                                            e = !!r.autoFocus;
                                            break e;
                                        case "img":
                                            e = !0;
                                            break e;
                                        default:
                                            e = !1;
                                    }
                                    e && Qs(t);
                                }
                            }
                            return tl(t), (t.flags &= -16777217), null;
                        case 6:
                            if (e && null != t.stateNode) e.memoizedProps !== r && Qs(t);
                            else {
                                if ("string" != typeof r && null === t.stateNode) throw Error(i(166));
                                if (((e = $.current), da(t))) {
                                    if (((e = t.stateNode), (n = t.memoizedProps), (r = null), null !== (a = na)))
                                        switch (a.tag) {
                                            case 27:
                                            case 5:
                                                r = a.memoizedProps;
                                        }
                                    (e[Ne] = t), (e = !!(e.nodeValue === n || (null !== r && !0 === r.suppressHydrationWarning) || Xc(e.nodeValue, n))) || la(t);
                                } else ((e = nd(e).createTextNode(r))[Ne] = t), (t.stateNode = e);
                            }
                            return tl(t), null;
                        case 13:
                            if (((r = t.memoizedState), null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))) {
                                if (((a = da(t)), null !== r && null !== r.dehydrated)) {
                                    if (null === e) {
                                        if (!a) throw Error(i(318));
                                        if (!(a = null !== (a = t.memoizedState) ? a.dehydrated : null)) throw Error(i(317));
                                        a[Ne] = t;
                                    } else fa(), !(128 & t.flags) && (t.memoizedState = null), (t.flags |= 4);
                                    tl(t), (a = !1);
                                } else (a = ha()), null !== e && null !== e.memoizedState && (e.memoizedState.hydrationErrors = a), (a = !0);
                                if (!a) return 256 & t.flags ? (ls(t), t) : (ls(t), null);
                            }
                            if ((ls(t), 128 & t.flags)) return (t.lanes = n), t;
                            if (((n = null !== r), (e = null !== e && null !== e.memoizedState), n)) {
                                (a = null), null !== (r = t.child).alternate && null !== r.alternate.memoizedState && null !== r.alternate.memoizedState.cachePool && (a = r.alternate.memoizedState.cachePool.pool);
                                var o = null;
                                null !== r.memoizedState && null !== r.memoizedState.cachePool && (o = r.memoizedState.cachePool.pool), o !== a && (r.flags |= 2048);
                            }
                            return n !== e && n && (t.child.flags |= 8192), Js(t, t.updateQueue), tl(t), null;
                        case 4:
                            return Y(), null === e && Ic(t.stateNode.containerInfo), tl(t), null;
                        case 10:
                            return ba(t.type), tl(t), null;
                        case 19:
                            if ((I(us), null === (a = t.memoizedState))) return tl(t), null;
                            if (((r = !!(128 & t.flags)), null === (o = a.rendering)))
                                if (r) el(a, !1);
                                else {
                                    if (0 !== du || (null !== e && 128 & e.flags))
                                        for (e = t.child; null !== e; ) {
                                            if (null !== (o = cs(e))) {
                                                for (t.flags |= 128, el(a, !1), e = o.updateQueue, t.updateQueue = e, Js(t, e), t.subtreeFlags = 0, e = n, n = t.child; null !== n; ) Fr(n, e), (n = n.sibling);
                                                return V(us, (1 & us.current) | 2), t.child;
                                            }
                                            e = e.sibling;
                                        }
                                    null !== a.tail && ee() > xu && ((t.flags |= 128), (r = !0), el(a, !1), (t.lanes = 4194304));
                                }
                            else {
                                if (!r)
                                    if (null !== (e = cs(o))) {
                                        if (((t.flags |= 128), (r = !0), (e = e.updateQueue), (t.updateQueue = e), Js(t, e), el(a, !0), null === a.tail && "hidden" === a.tailMode && !o.alternate && !aa)) return tl(t), null;
                                    } else 2 * ee() - a.renderingStartTime > xu && 536870912 !== n && ((t.flags |= 128), (r = !0), el(a, !1), (t.lanes = 4194304));
                                a.isBackwards ? ((o.sibling = t.child), (t.child = o)) : (null !== (e = a.last) ? (e.sibling = o) : (t.child = o), (a.last = o));
                            }
                            return null !== a.tail ? ((t = a.tail), (a.rendering = t), (a.tail = t.sibling), (a.renderingStartTime = ee()), (t.sibling = null), (e = us.current), V(us, r ? (1 & e) | 2 : 1 & e), t) : (tl(t), null);
                        case 22:
                        case 23:
                            return (
                                ls(t),
                                go(),
                                (r = null !== t.memoizedState),
                                null !== e ? (null !== e.memoizedState) !== r && (t.flags |= 8192) : r && (t.flags |= 8192),
                                r ? !!(536870912 & n) && !(128 & t.flags) && (tl(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : tl(t),
                                null !== (n = t.updateQueue) && Js(t, n.retryQueue),
                                (n = null),
                                null !== e && null !== e.memoizedState && null !== e.memoizedState.cachePool && (n = e.memoizedState.cachePool.pool),
                                (r = null),
                                null !== t.memoizedState && null !== t.memoizedState.cachePool && (r = t.memoizedState.cachePool.pool),
                                r !== n && (t.flags |= 2048),
                                null !== e && I(Va),
                                null
                            );
                        case 24:
                            return (n = null), null !== e && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), ba(Na), tl(t), null;
                        case 25:
                        case 30:
                            return null;
                    }
                    throw Error(i(156, t.tag));
                }
                function rl(e, t) {
                    switch ((ta(t), t.tag)) {
                        case 1:
                            return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
                        case 3:
                            return ba(Na), Y(), 65536 & (e = t.flags) && !(128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null;
                        case 26:
                        case 27:
                        case 5:
                            return G(t), null;
                        case 13:
                            if ((ls(t), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                                if (null === t.alternate) throw Error(i(340));
                                fa();
                            }
                            return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
                        case 19:
                            return I(us), null;
                        case 4:
                            return Y(), null;
                        case 10:
                            return ba(t.type), null;
                        case 22:
                        case 23:
                            return ls(t), go(), null !== e && I(Va), 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
                        case 24:
                            return ba(Na), null;
                        default:
                            return null;
                    }
                }
                function al(e, t) {
                    switch ((ta(t), t.tag)) {
                        case 3:
                            ba(Na), Y();
                            break;
                        case 26:
                        case 27:
                        case 5:
                            G(t);
                            break;
                        case 4:
                            Y();
                            break;
                        case 13:
                            ls(t);
                            break;
                        case 19:
                            I(us);
                            break;
                        case 10:
                            ba(t.type);
                            break;
                        case 22:
                        case 23:
                            ls(t), go(), null !== e && I(Va);
                            break;
                        case 24:
                            ba(Na);
                    }
                }
                function ol(e, t) {
                    try {
                        var n = t.updateQueue,
                            r = null !== n ? n.lastEffect : null;
                        if (null !== r) {
                            var a = r.next;
                            n = a;
                            do {
                                if ((n.tag & e) === e) {
                                    r = void 0;
                                    var o = n.create,
                                        i = n.inst;
                                    (r = o()), (i.destroy = r);
                                }
                                n = n.next;
                            } while (n !== a);
                        }
                    } catch (e) {
                        uc(t, t.return, e);
                    }
                }
                function il(e, t, n) {
                    try {
                        var r = t.updateQueue,
                            a = null !== r ? r.lastEffect : null;
                        if (null !== a) {
                            var o = a.next;
                            r = o;
                            do {
                                if ((r.tag & e) === e) {
                                    var i = r.inst,
                                        s = i.destroy;
                                    if (void 0 !== s) {
                                        (i.destroy = void 0), (a = t);
                                        var l = n,
                                            u = s;
                                        try {
                                            u();
                                        } catch (e) {
                                            uc(a, l, e);
                                        }
                                    }
                                }
                                r = r.next;
                            } while (r !== o);
                        }
                    } catch (e) {
                        uc(t, t.return, e);
                    }
                }
                function sl(e) {
                    var t = e.updateQueue;
                    if (null !== t) {
                        var n = e.stateNode;
                        try {
                            fo(t, n);
                        } catch (t) {
                            uc(e, e.return, t);
                        }
                    }
                }
                function ll(e, t, n) {
                    (n.props = ms(e.type, e.memoizedProps)), (n.state = e.memoizedState);
                    try {
                        n.componentWillUnmount();
                    } catch (n) {
                        uc(e, t, n);
                    }
                }
                function ul(e, t) {
                    try {
                        var n = e.ref;
                        if (null !== n) {
                            switch (e.tag) {
                                case 26:
                                case 27:
                                case 5:
                                    var r = e.stateNode;
                                    break;
                                default:
                                    r = e.stateNode;
                            }
                            "function" == typeof n ? (e.refCleanup = n(r)) : (n.current = r);
                        }
                    } catch (n) {
                        uc(e, t, n);
                    }
                }
                function cl(e, t) {
                    var n = e.ref,
                        r = e.refCleanup;
                    if (null !== n)
                        if ("function" == typeof r)
                            try {
                                r();
                            } catch (n) {
                                uc(e, t, n);
                            } finally {
                                (e.refCleanup = null), null != (e = e.alternate) && (e.refCleanup = null);
                            }
                        else if ("function" == typeof n)
                            try {
                                n(null);
                            } catch (n) {
                                uc(e, t, n);
                            }
                        else n.current = null;
                }
                function dl(e) {
                    var t = e.type,
                        n = e.memoizedProps,
                        r = e.stateNode;
                    try {
                        e: switch (t) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                n.autoFocus && r.focus();
                                break e;
                            case "img":
                                n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
                        }
                    } catch (t) {
                        uc(e, e.return, t);
                    }
                }
                function fl(e, t, n) {
                    try {
                        var r = e.stateNode;
                        !(function (e, t, n, r) {
                            switch (t) {
                                case "div":
                                case "span":
                                case "svg":
                                case "path":
                                case "a":
                                case "g":
                                case "p":
                                case "li":
                                    break;
                                case "input":
                                    var a = null,
                                        o = null,
                                        s = null,
                                        l = null,
                                        u = null,
                                        c = null,
                                        d = null;
                                    for (p in n) {
                                        var f = n[p];
                                        if (n.hasOwnProperty(p) && null != f)
                                            switch (p) {
                                                case "checked":
                                                case "value":
                                                    break;
                                                case "defaultValue":
                                                    u = f;
                                                default:
                                                    r.hasOwnProperty(p) || Qc(e, t, p, null, r, f);
                                            }
                                    }
                                    for (var h in r) {
                                        var p = r[h];
                                        if (((f = n[h]), r.hasOwnProperty(h) && (null != p || null != f)))
                                            switch (h) {
                                                case "type":
                                                    o = p;
                                                    break;
                                                case "name":
                                                    a = p;
                                                    break;
                                                case "checked":
                                                    c = p;
                                                    break;
                                                case "defaultChecked":
                                                    d = p;
                                                    break;
                                                case "value":
                                                    s = p;
                                                    break;
                                                case "defaultValue":
                                                    l = p;
                                                    break;
                                                case "children":
                                                case "dangerouslySetInnerHTML":
                                                    if (null != p) throw Error(i(137, t));
                                                    break;
                                                default:
                                                    p !== f && Qc(e, t, h, p, r, f);
                                            }
                                    }
                                    return void mt(e, s, l, u, c, d, o, a);
                                case "select":
                                    for (o in ((p = s = l = h = null), n))
                                        if (((u = n[o]), n.hasOwnProperty(o) && null != u))
                                            switch (o) {
                                                case "value":
                                                    break;
                                                case "multiple":
                                                    p = u;
                                                default:
                                                    r.hasOwnProperty(o) || Qc(e, t, o, null, r, u);
                                            }
                                    for (a in r)
                                        if (((o = r[a]), (u = n[a]), r.hasOwnProperty(a) && (null != o || null != u)))
                                            switch (a) {
                                                case "value":
                                                    h = o;
                                                    break;
                                                case "defaultValue":
                                                    l = o;
                                                    break;
                                                case "multiple":
                                                    s = o;
                                                default:
                                                    o !== u && Qc(e, t, a, o, r, u);
                                            }
                                    return (t = l), (n = s), (r = p), void (null != h ? vt(e, !!n, h, !1) : !!r != !!n && (null != t ? vt(e, !!n, t, !0) : vt(e, !!n, n ? [] : "", !1)));
                                case "textarea":
                                    for (l in ((p = h = null), n))
                                        if (((a = n[l]), n.hasOwnProperty(l) && null != a && !r.hasOwnProperty(l)))
                                            switch (l) {
                                                case "value":
                                                case "children":
                                                    break;
                                                default:
                                                    Qc(e, t, l, null, r, a);
                                            }
                                    for (s in r)
                                        if (((a = r[s]), (o = n[s]), r.hasOwnProperty(s) && (null != a || null != o)))
                                            switch (s) {
                                                case "value":
                                                    h = a;
                                                    break;
                                                case "defaultValue":
                                                    p = a;
                                                    break;
                                                case "children":
                                                    break;
                                                case "dangerouslySetInnerHTML":
                                                    if (null != a) throw Error(i(91));
                                                    break;
                                                default:
                                                    a !== o && Qc(e, t, s, a, r, o);
                                            }
                                    return void bt(e, h, p);
                                case "option":
                                    for (var m in n) (h = n[m]), n.hasOwnProperty(m) && null != h && !r.hasOwnProperty(m) && ("selected" === m ? (e.selected = !1) : Qc(e, t, m, null, r, h));
                                    for (u in r)
                                        (h = r[u]), (p = n[u]), !r.hasOwnProperty(u) || h === p || (null == h && null == p) || ("selected" === u ? (e.selected = h && "function" != typeof h && "symbol" != typeof h) : Qc(e, t, u, h, r, p));
                                    return;
                                case "img":
                                case "link":
                                case "area":
                                case "base":
                                case "br":
                                case "col":
                                case "embed":
                                case "hr":
                                case "keygen":
                                case "meta":
                                case "param":
                                case "source":
                                case "track":
                                case "wbr":
                                case "menuitem":
                                    for (var y in n) (h = n[y]), n.hasOwnProperty(y) && null != h && !r.hasOwnProperty(y) && Qc(e, t, y, null, r, h);
                                    for (c in r)
                                        if (((h = r[c]), (p = n[c]), r.hasOwnProperty(c) && h !== p && (null != h || null != p)))
                                            switch (c) {
                                                case "children":
                                                case "dangerouslySetInnerHTML":
                                                    if (null != h) throw Error(i(137, t));
                                                    break;
                                                default:
                                                    Qc(e, t, c, h, r, p);
                                            }
                                    return;
                                default:
                                    if (Pt(t)) {
                                        for (var g in n) (h = n[g]), n.hasOwnProperty(g) && void 0 !== h && !r.hasOwnProperty(g) && Zc(e, t, g, void 0, r, h);
                                        for (d in r) (h = r[d]), (p = n[d]), !r.hasOwnProperty(d) || h === p || (void 0 === h && void 0 === p) || Zc(e, t, d, h, r, p);
                                        return;
                                    }
                            }
                            for (var v in n) (h = n[v]), n.hasOwnProperty(v) && null != h && !r.hasOwnProperty(v) && Qc(e, t, v, null, r, h);
                            for (f in r) (h = r[f]), (p = n[f]), !r.hasOwnProperty(f) || h === p || (null == h && null == p) || Qc(e, t, f, h, r, p);
                        })(r, e.type, n, t),
                            (r[Oe] = t);
                    } catch (t) {
                        uc(e, e.return, t);
                    }
                }
                function hl(e) {
                    return 5 === e.tag || 3 === e.tag || 26 === e.tag || (27 === e.tag && fd(e.type)) || 4 === e.tag;
                }
                function pl(e) {
                    e: for (;;) {
                        for (; null === e.sibling; ) {
                            if (null === e.return || hl(e.return)) return null;
                            e = e.return;
                        }
                        for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag; ) {
                            if (27 === e.tag && fd(e.type)) continue e;
                            if (2 & e.flags) continue e;
                            if (null === e.child || 4 === e.tag) continue e;
                            (e.child.return = e), (e = e.child);
                        }
                        if (!(2 & e.flags)) return e.stateNode;
                    }
                }
                function ml(e, t, n) {
                    var r = e.tag;
                    if (5 === r || 6 === r)
                        (e = e.stateNode),
                            t
                                ? (9 === n.nodeType ? n.body : "HTML" === n.nodeName ? n.ownerDocument.body : n).insertBefore(e, t)
                                : ((t = 9 === n.nodeType ? n.body : "HTML" === n.nodeName ? n.ownerDocument.body : n).appendChild(e), null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Kc));
                    else if (4 !== r && (27 === r && fd(e.type) && ((n = e.stateNode), (t = null)), null !== (e = e.child))) for (ml(e, t, n), e = e.sibling; null !== e; ) ml(e, t, n), (e = e.sibling);
                }
                function yl(e, t, n) {
                    var r = e.tag;
                    if (5 === r || 6 === r) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
                    else if (4 !== r && (27 === r && fd(e.type) && (n = e.stateNode), null !== (e = e.child))) for (yl(e, t, n), e = e.sibling; null !== e; ) yl(e, t, n), (e = e.sibling);
                }
                function gl(e) {
                    var t = e.stateNode,
                        n = e.memoizedProps;
                    try {
                        for (var r = e.type, a = t.attributes; a.length; ) t.removeAttributeNode(a[0]);
                        Jc(t, r, n), (t[Ne] = e), (t[Oe] = n);
                    } catch (t) {
                        uc(e, e.return, t);
                    }
                }
                var vl = !1,
                    bl = !1,
                    wl = !1,
                    xl = "function" == typeof WeakSet ? WeakSet : Set,
                    kl = null;
                function Sl(e, t, n) {
                    var r = n.flags;
                    switch (n.tag) {
                        case 0:
                        case 11:
                        case 15:
                            _l(e, n), 4 & r && ol(5, n);
                            break;
                        case 1:
                            if ((_l(e, n), 4 & r))
                                if (((e = n.stateNode), null === t))
                                    try {
                                        e.componentDidMount();
                                    } catch (e) {
                                        uc(n, n.return, e);
                                    }
                                else {
                                    var a = ms(n.type, t.memoizedProps);
                                    t = t.memoizedState;
                                    try {
                                        e.componentDidUpdate(a, t, e.__reactInternalSnapshotBeforeUpdate);
                                    } catch (e) {
                                        uc(n, n.return, e);
                                    }
                                }
                            64 & r && sl(n), 512 & r && ul(n, n.return);
                            break;
                        case 3:
                            if ((_l(e, n), 64 & r && null !== (e = n.updateQueue))) {
                                if (((t = null), null !== n.child))
                                    switch (n.child.tag) {
                                        case 27:
                                        case 5:
                                        case 1:
                                            t = n.child.stateNode;
                                    }
                                try {
                                    fo(e, t);
                                } catch (e) {
                                    uc(n, n.return, e);
                                }
                            }
                            break;
                        case 27:
                            null === t && 4 & r && gl(n);
                        case 26:
                        case 5:
                            _l(e, n), null === t && 4 & r && dl(n), 512 & r && ul(n, n.return);
                            break;
                        case 12:
                            _l(e, n);
                            break;
                        case 13:
                            _l(e, n),
                                4 & r && Ll(e, n),
                                64 & r &&
                                    null !== (e = n.memoizedState) &&
                                    null !== (e = e.dehydrated) &&
                                    (function (e, t) {
                                        var n = e.ownerDocument;
                                        if ("$?" !== e.data || "complete" === n.readyState) t();
                                        else {
                                            var r = function () {
                                                t(), n.removeEventListener("DOMContentLoaded", r);
                                            };
                                            n.addEventListener("DOMContentLoaded", r), (e._reactRetry = r);
                                        }
                                    })(e, (n = hc.bind(null, n)));
                            break;
                        case 22:
                            if (!(r = null !== n.memoizedState || vl)) {
                                (t = (null !== t && null !== t.memoizedState) || bl), (a = vl);
                                var o = bl;
                                (vl = r), (bl = t) && !o ? Fl(e, n, !!(8772 & n.subtreeFlags)) : _l(e, n), (vl = a), (bl = o);
                            }
                            break;
                        case 30:
                            break;
                        default:
                            _l(e, n);
                    }
                }
                function El(e) {
                    var t = e.alternate;
                    null !== t && ((e.alternate = null), El(t)),
                        (e.child = null),
                        (e.deletions = null),
                        (e.sibling = null),
                        5 === e.tag && null !== (t = e.stateNode) && Ie(t),
                        (e.stateNode = null),
                        (e.return = null),
                        (e.dependencies = null),
                        (e.memoizedProps = null),
                        (e.memoizedState = null),
                        (e.pendingProps = null),
                        (e.stateNode = null),
                        (e.updateQueue = null);
                }
                var Pl = null,
                    Tl = !1;
                function Cl(e, t, n) {
                    for (n = n.child; null !== n; ) Al(e, t, n), (n = n.sibling);
                }
                function Al(e, t, n) {
                    if (ce && "function" == typeof ce.onCommitFiberUnmount)
                        try {
                            ce.onCommitFiberUnmount(ue, n);
                        } catch (e) {}
                    switch (n.tag) {
                        case 26:
                            bl || cl(n, t), Cl(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode).parentNode.removeChild(n);
                            break;
                        case 27:
                            bl || cl(n, t);
                            var r = Pl,
                                a = Tl;
                            fd(n.type) && ((Pl = n.stateNode), (Tl = !1)), Cl(e, t, n), wd(n.stateNode), (Pl = r), (Tl = a);
                            break;
                        case 5:
                            bl || cl(n, t);
                        case 6:
                            if (((r = Pl), (a = Tl), (Pl = null), Cl(e, t, n), (Tl = a), null !== (Pl = r)))
                                if (Tl)
                                    try {
                                        (9 === Pl.nodeType ? Pl.body : "HTML" === Pl.nodeName ? Pl.ownerDocument.body : Pl).removeChild(n.stateNode);
                                    } catch (e) {
                                        uc(n, t, e);
                                    }
                                else
                                    try {
                                        Pl.removeChild(n.stateNode);
                                    } catch (e) {
                                        uc(n, t, e);
                                    }
                            break;
                        case 18:
                            null !== Pl && (Tl ? (hd(9 === (e = Pl).nodeType ? e.body : "HTML" === e.nodeName ? e.ownerDocument.body : e, n.stateNode), Pf(e)) : hd(Pl, n.stateNode));
                            break;
                        case 4:
                            (r = Pl), (a = Tl), (Pl = n.stateNode.containerInfo), (Tl = !0), Cl(e, t, n), (Pl = r), (Tl = a);
                            break;
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            bl || il(2, n, t), bl || il(4, n, t), Cl(e, t, n);
                            break;
                        case 1:
                            bl || (cl(n, t), "function" == typeof (r = n.stateNode).componentWillUnmount && ll(n, t, r)), Cl(e, t, n);
                            break;
                        case 21:
                            Cl(e, t, n);
                            break;
                        case 22:
                            (bl = (r = bl) || null !== n.memoizedState), Cl(e, t, n), (bl = r);
                            break;
                        default:
                            Cl(e, t, n);
                    }
                }
                function Ll(e, t) {
                    if (null === t.memoizedState && null !== (e = t.alternate) && null !== (e = e.memoizedState) && null !== (e = e.dehydrated))
                        try {
                            Pf(e);
                        } catch (e) {
                            uc(t, t.return, e);
                        }
                }
                function jl(e, t) {
                    var n = (function (e) {
                        switch (e.tag) {
                            case 13:
                            case 19:
                                var t = e.stateNode;
                                return null === t && (t = e.stateNode = new xl()), t;
                            case 22:
                                return null === (t = (e = e.stateNode)._retryCache) && (t = e._retryCache = new xl()), t;
                            default:
                                throw Error(i(435, e.tag));
                        }
                    })(e);
                    t.forEach(function (t) {
                        var r = pc.bind(null, e, t);
                        n.has(t) || (n.add(t), t.then(r, r));
                    });
                }
                function Nl(e, t) {
                    var n = t.deletions;
                    if (null !== n)
                        for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                                o = e,
                                s = t,
                                l = s;
                            e: for (; null !== l; ) {
                                switch (l.tag) {
                                    case 27:
                                        if (fd(l.type)) {
                                            (Pl = l.stateNode), (Tl = !1);
                                            break e;
                                        }
                                        break;
                                    case 5:
                                        (Pl = l.stateNode), (Tl = !1);
                                        break e;
                                    case 3:
                                    case 4:
                                        (Pl = l.stateNode.containerInfo), (Tl = !0);
                                        break e;
                                }
                                l = l.return;
                            }
                            if (null === Pl) throw Error(i(160));
                            Al(o, s, a), (Pl = null), (Tl = !1), null !== (o = a.alternate) && (o.return = null), (a.return = null);
                        }
                    if (13878 & t.subtreeFlags) for (t = t.child; null !== t; ) Ml(t, e), (t = t.sibling);
                }
                var Ol = null;
                function Ml(e, t) {
                    var n = e.alternate,
                        r = e.flags;
                    switch (e.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Nl(t, e), zl(e), 4 & r && (il(3, e, e.return), ol(3, e), il(5, e, e.return));
                            break;
                        case 1:
                            Nl(t, e),
                                zl(e),
                                512 & r && (bl || null === n || cl(n, n.return)),
                                64 & r && vl && null !== (e = e.updateQueue) && null !== (r = e.callbacks) && ((n = e.shared.hiddenCallbacks), (e.shared.hiddenCallbacks = null === n ? r : n.concat(r)));
                            break;
                        case 26:
                            var a = Ol;
                            if ((Nl(t, e), zl(e), 512 & r && (bl || null === n || cl(n, n.return)), 4 & r)) {
                                var o = null !== n ? n.memoizedState : null;
                                if (((r = e.memoizedState), null === n))
                                    if (null === r)
                                        if (null === e.stateNode) {
                                            e: {
                                                (r = e.type), (n = e.memoizedProps), (a = a.ownerDocument || a);
                                                t: switch (r) {
                                                    case "title":
                                                        (!(o = a.getElementsByTagName("title")[0]) || o[Fe] || o[Ne] || "http://www.w3.org/2000/svg" === o.namespaceURI || o.hasAttribute("itemprop")) &&
                                                            ((o = a.createElement(r)), a.head.insertBefore(o, a.querySelector("head > title"))),
                                                            Jc(o, r, n),
                                                            (o[Ne] = e),
                                                            He(o),
                                                            (r = o);
                                                        break e;
                                                    case "link":
                                                        var s = Fd("link", "href", a).get(r + (n.href || ""));
                                                        if (s)
                                                            for (var l = 0; l < s.length; l++)
                                                                if (
                                                                    (o = s[l]).getAttribute("href") === (null == n.href || "" === n.href ? null : n.href) &&
                                                                    o.getAttribute("rel") === (null == n.rel ? null : n.rel) &&
                                                                    o.getAttribute("title") === (null == n.title ? null : n.title) &&
                                                                    o.getAttribute("crossorigin") === (null == n.crossOrigin ? null : n.crossOrigin)
                                                                ) {
                                                                    s.splice(l, 1);
                                                                    break t;
                                                                }
                                                        Jc((o = a.createElement(r)), r, n), a.head.appendChild(o);
                                                        break;
                                                    case "meta":
                                                        if ((s = Fd("meta", "content", a).get(r + (n.content || ""))))
                                                            for (l = 0; l < s.length; l++)
                                                                if (
                                                                    (o = s[l]).getAttribute("content") === (null == n.content ? null : "" + n.content) &&
                                                                    o.getAttribute("name") === (null == n.name ? null : n.name) &&
                                                                    o.getAttribute("property") === (null == n.property ? null : n.property) &&
                                                                    o.getAttribute("http-equiv") === (null == n.httpEquiv ? null : n.httpEquiv) &&
                                                                    o.getAttribute("charset") === (null == n.charSet ? null : n.charSet)
                                                                ) {
                                                                    s.splice(l, 1);
                                                                    break t;
                                                                }
                                                        Jc((o = a.createElement(r)), r, n), a.head.appendChild(o);
                                                        break;
                                                    default:
                                                        throw Error(i(468, r));
                                                }
                                                (o[Ne] = e), He(o), (r = o);
                                            }
                                            e.stateNode = r;
                                        } else Id(a, e.type, e.stateNode);
                                    else e.stateNode = Md(a, r, e.memoizedProps);
                                else
                                    o !== r
                                        ? (null === o ? null !== n.stateNode && (n = n.stateNode).parentNode.removeChild(n) : o.count--, null === r ? Id(a, e.type, e.stateNode) : Md(a, r, e.memoizedProps))
                                        : null === r && null !== e.stateNode && fl(e, e.memoizedProps, n.memoizedProps);
                            }
                            break;
                        case 27:
                            Nl(t, e), zl(e), 512 & r && (bl || null === n || cl(n, n.return)), null !== n && 4 & r && fl(e, e.memoizedProps, n.memoizedProps);
                            break;
                        case 5:
                            if ((Nl(t, e), zl(e), 512 & r && (bl || null === n || cl(n, n.return)), 32 & e.flags)) {
                                a = e.stateNode;
                                try {
                                    xt(a, "");
                                } catch (t) {
                                    uc(e, e.return, t);
                                }
                            }
                            4 & r && null != e.stateNode && fl(e, (a = e.memoizedProps), null !== n ? n.memoizedProps : a), 1024 & r && (wl = !0);
                            break;
                        case 6:
                            if ((Nl(t, e), zl(e), 4 & r)) {
                                if (null === e.stateNode) throw Error(i(162));
                                (r = e.memoizedProps), (n = e.stateNode);
                                try {
                                    n.nodeValue = r;
                                } catch (t) {
                                    uc(e, e.return, t);
                                }
                            }
                            break;
                        case 3:
                            if (((Dd = null), (a = Ol), (Ol = Sd(t.containerInfo)), Nl(t, e), (Ol = a), zl(e), 4 & r && null !== n && n.memoizedState.isDehydrated))
                                try {
                                    Pf(t.containerInfo);
                                } catch (t) {
                                    uc(e, e.return, t);
                                }
                            wl && ((wl = !1), Rl(e));
                            break;
                        case 4:
                            (r = Ol), (Ol = Sd(e.stateNode.containerInfo)), Nl(t, e), zl(e), (Ol = r);
                            break;
                        case 12:
                        default:
                            Nl(t, e), zl(e);
                            break;
                        case 13:
                            Nl(t, e), zl(e), 8192 & e.child.flags && (null !== e.memoizedState) != (null !== n && null !== n.memoizedState) && (wu = ee()), 4 & r && null !== (r = e.updateQueue) && ((e.updateQueue = null), jl(e, r));
                            break;
                        case 22:
                            a = null !== e.memoizedState;
                            var u = null !== n && null !== n.memoizedState,
                                c = vl,
                                d = bl;
                            if (((vl = c || a), (bl = d || u), Nl(t, e), (bl = d), (vl = c), zl(e), 8192 & r))
                                e: for (t = e.stateNode, t._visibility = a ? -2 & t._visibility : 1 | t._visibility, a && (null === n || u || vl || bl || Dl(e)), n = null, t = e; ; ) {
                                    if (5 === t.tag || 26 === t.tag) {
                                        if (null === n) {
                                            u = n = t;
                                            try {
                                                if (((o = u.stateNode), a)) "function" == typeof (s = o.style).setProperty ? s.setProperty("display", "none", "important") : (s.display = "none");
                                                else {
                                                    l = u.stateNode;
                                                    var f = u.memoizedProps.style,
                                                        h = null != f && f.hasOwnProperty("display") ? f.display : null;
                                                    l.style.display = null == h || "boolean" == typeof h ? "" : ("" + h).trim();
                                                }
                                            } catch (e) {
                                                uc(u, u.return, e);
                                            }
                                        }
                                    } else if (6 === t.tag) {
                                        if (null === n) {
                                            u = t;
                                            try {
                                                u.stateNode.nodeValue = a ? "" : u.memoizedProps;
                                            } catch (e) {
                                                uc(u, u.return, e);
                                            }
                                        }
                                    } else if (((22 !== t.tag && 23 !== t.tag) || null === t.memoizedState || t === e) && null !== t.child) {
                                        (t.child.return = t), (t = t.child);
                                        continue;
                                    }
                                    if (t === e) break e;
                                    for (; null === t.sibling; ) {
                                        if (null === t.return || t.return === e) break e;
                                        n === t && (n = null), (t = t.return);
                                    }
                                    n === t && (n = null), (t.sibling.return = t.return), (t = t.sibling);
                                }
                            4 & r && null !== (r = e.updateQueue) && null !== (n = r.retryQueue) && ((r.retryQueue = null), jl(e, n));
                            break;
                        case 19:
                            Nl(t, e), zl(e), 4 & r && null !== (r = e.updateQueue) && ((e.updateQueue = null), jl(e, r));
                        case 30:
                        case 21:
                    }
                }
                function zl(e) {
                    var t = e.flags;
                    if (2 & t) {
                        try {
                            for (var n, r = e.return; null !== r; ) {
                                if (hl(r)) {
                                    n = r;
                                    break;
                                }
                                r = r.return;
                            }
                            if (null == n) throw Error(i(160));
                            switch (n.tag) {
                                case 27:
                                    var a = n.stateNode;
                                    yl(e, pl(e), a);
                                    break;
                                case 5:
                                    var o = n.stateNode;
                                    32 & n.flags && (xt(o, ""), (n.flags &= -33)), yl(e, pl(e), o);
                                    break;
                                case 3:
                                case 4:
                                    var s = n.stateNode.containerInfo;
                                    ml(e, pl(e), s);
                                    break;
                                default:
                                    throw Error(i(161));
                            }
                        } catch (t) {
                            uc(e, e.return, t);
                        }
                        e.flags &= -3;
                    }
                    4096 & t && (e.flags &= -4097);
                }
                function Rl(e) {
                    if (1024 & e.subtreeFlags)
                        for (e = e.child; null !== e; ) {
                            var t = e;
                            Rl(t), 5 === t.tag && 1024 & t.flags && t.stateNode.reset(), (e = e.sibling);
                        }
                }
                function _l(e, t) {
                    if (8772 & t.subtreeFlags) for (t = t.child; null !== t; ) Sl(e, t.alternate, t), (t = t.sibling);
                }
                function Dl(e) {
                    for (e = e.child; null !== e; ) {
                        var t = e;
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                il(4, t, t.return), Dl(t);
                                break;
                            case 1:
                                cl(t, t.return);
                                var n = t.stateNode;
                                "function" == typeof n.componentWillUnmount && ll(t, t.return, n), Dl(t);
                                break;
                            case 27:
                                wd(t.stateNode);
                            case 26:
                            case 5:
                                cl(t, t.return), Dl(t);
                                break;
                            case 22:
                                null === t.memoizedState && Dl(t);
                                break;
                            default:
                                Dl(t);
                        }
                        e = e.sibling;
                    }
                }
                function Fl(e, t, n) {
                    for (n = n && !!(8772 & t.subtreeFlags), t = t.child; null !== t; ) {
                        var r = t.alternate,
                            a = e,
                            o = t,
                            i = o.flags;
                        switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Fl(a, o, n), ol(4, o);
                                break;
                            case 1:
                                if ((Fl(a, o, n), "function" == typeof (a = (r = o).stateNode).componentDidMount))
                                    try {
                                        a.componentDidMount();
                                    } catch (e) {
                                        uc(r, r.return, e);
                                    }
                                if (null !== (a = (r = o).updateQueue)) {
                                    var s = r.stateNode;
                                    try {
                                        var l = a.shared.hiddenCallbacks;
                                        if (null !== l) for (a.shared.hiddenCallbacks = null, a = 0; a < l.length; a++) co(l[a], s);
                                    } catch (e) {
                                        uc(r, r.return, e);
                                    }
                                }
                                n && 64 & i && sl(o), ul(o, o.return);
                                break;
                            case 27:
                                gl(o);
                            case 26:
                            case 5:
                                Fl(a, o, n), n && null === r && 4 & i && dl(o), ul(o, o.return);
                                break;
                            case 12:
                                Fl(a, o, n);
                                break;
                            case 13:
                                Fl(a, o, n), n && 4 & i && Ll(a, o);
                                break;
                            case 22:
                                null === o.memoizedState && Fl(a, o, n), ul(o, o.return);
                                break;
                            case 30:
                                break;
                            default:
                                Fl(a, o, n);
                        }
                        t = t.sibling;
                    }
                }
                function Il(e, t) {
                    var n = null;
                    null !== e && null !== e.memoizedState && null !== e.memoizedState.cachePool && (n = e.memoizedState.cachePool.pool),
                        (e = null),
                        null !== t.memoizedState && null !== t.memoizedState.cachePool && (e = t.memoizedState.cachePool.pool),
                        e !== n && (null != e && e.refCount++, null != n && Ma(n));
                }
                function Vl(e, t) {
                    (e = null), null !== t.alternate && (e = t.alternate.memoizedState.cache), (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && Ma(e));
                }
                function Bl(e, t, n, r) {
                    if (10256 & t.subtreeFlags) for (t = t.child; null !== t; ) Ul(e, t, n, r), (t = t.sibling);
                }
                function Ul(e, t, n, r) {
                    var a = t.flags;
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Bl(e, t, n, r), 2048 & a && ol(9, t);
                            break;
                        case 1:
                        case 13:
                        default:
                            Bl(e, t, n, r);
                            break;
                        case 3:
                            Bl(e, t, n, r), 2048 & a && ((e = null), null !== t.alternate && (e = t.alternate.memoizedState.cache), (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && Ma(e)));
                            break;
                        case 12:
                            if (2048 & a) {
                                Bl(e, t, n, r), (e = t.stateNode);
                                try {
                                    var o = t.memoizedProps,
                                        i = o.id,
                                        s = o.onPostCommit;
                                    "function" == typeof s && s(i, null === t.alternate ? "mount" : "update", e.passiveEffectDuration, -0);
                                } catch (e) {
                                    uc(t, t.return, e);
                                }
                            } else Bl(e, t, n, r);
                            break;
                        case 23:
                            break;
                        case 22:
                            (o = t.stateNode),
                                (i = t.alternate),
                                null !== t.memoizedState ? (2 & o._visibility ? Bl(e, t, n, r) : Hl(e, t)) : 2 & o._visibility ? Bl(e, t, n, r) : ((o._visibility |= 2), $l(e, t, n, r, !!(10256 & t.subtreeFlags))),
                                2048 & a && Il(i, t);
                            break;
                        case 24:
                            Bl(e, t, n, r), 2048 & a && Vl(t.alternate, t);
                    }
                }
                function $l(e, t, n, r, a) {
                    for (a = a && !!(10256 & t.subtreeFlags), t = t.child; null !== t; ) {
                        var o = e,
                            i = t,
                            s = n,
                            l = r,
                            u = i.flags;
                        switch (i.tag) {
                            case 0:
                            case 11:
                            case 15:
                                $l(o, i, s, l, a), ol(8, i);
                                break;
                            case 23:
                                break;
                            case 22:
                                var c = i.stateNode;
                                null !== i.memoizedState ? (2 & c._visibility ? $l(o, i, s, l, a) : Hl(o, i)) : ((c._visibility |= 2), $l(o, i, s, l, a)), a && 2048 & u && Il(i.alternate, i);
                                break;
                            case 24:
                                $l(o, i, s, l, a), a && 2048 & u && Vl(i.alternate, i);
                                break;
                            default:
                                $l(o, i, s, l, a);
                        }
                        t = t.sibling;
                    }
                }
                function Hl(e, t) {
                    if (10256 & t.subtreeFlags)
                        for (t = t.child; null !== t; ) {
                            var n = e,
                                r = t,
                                a = r.flags;
                            switch (r.tag) {
                                case 22:
                                    Hl(n, r), 2048 & a && Il(r.alternate, r);
                                    break;
                                case 24:
                                    Hl(n, r), 2048 & a && Vl(r.alternate, r);
                                    break;
                                default:
                                    Hl(n, r);
                            }
                            t = t.sibling;
                        }
                }
                var Wl = 8192;
                function Yl(e) {
                    if (e.subtreeFlags & Wl) for (e = e.child; null !== e; ) ql(e), (e = e.sibling);
                }
                function ql(e) {
                    switch (e.tag) {
                        case 26:
                            Yl(e),
                                e.flags & Wl &&
                                    null !== e.memoizedState &&
                                    (function (e, t, n) {
                                        if (null === Bd) throw Error(i(475));
                                        var r = Bd;
                                        if (!("stylesheet" !== t.type || ("string" == typeof n.media && !1 === matchMedia(n.media).matches) || 4 & t.state.loading)) {
                                            if (null === t.instance) {
                                                var a = Ad(n.href),
                                                    o = e.querySelector(Ld(a));
                                                if (o) return null !== (e = o._p) && "object" == typeof e && "function" == typeof e.then && (r.count++, (r = $d.bind(r)), e.then(r, r)), (t.state.loading |= 4), (t.instance = o), void He(o);
                                                (o = e.ownerDocument || e), (n = jd(n)), (a = xd.get(a)) && Rd(n, a), He((o = o.createElement("link")));
                                                var s = o;
                                                (s._p = new Promise(function (e, t) {
                                                    (s.onload = e), (s.onerror = t);
                                                })),
                                                    Jc(o, "link", n),
                                                    (t.instance = o);
                                            }
                                            null === r.stylesheets && (r.stylesheets = new Map()),
                                                r.stylesheets.set(t, e),
                                                (e = t.state.preload) && !(3 & t.state.loading) && (r.count++, (t = $d.bind(r)), e.addEventListener("load", t), e.addEventListener("error", t));
                                        }
                                    })(Ol, e.memoizedState, e.memoizedProps);
                            break;
                        case 5:
                        default:
                            Yl(e);
                            break;
                        case 3:
                        case 4:
                            var t = Ol;
                            (Ol = Sd(e.stateNode.containerInfo)), Yl(e), (Ol = t);
                            break;
                        case 22:
                            null === e.memoizedState && (null !== (t = e.alternate) && null !== t.memoizedState ? ((t = Wl), (Wl = 16777216), Yl(e), (Wl = t)) : Yl(e));
                    }
                }
                function Gl(e) {
                    var t = e.alternate;
                    if (null !== t && null !== (e = t.child)) {
                        t.child = null;
                        do {
                            (t = e.sibling), (e.sibling = null), (e = t);
                        } while (null !== e);
                    }
                }
                function Xl(e) {
                    var t = e.deletions;
                    if (16 & e.flags) {
                        if (null !== t)
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                (kl = r), Zl(r, e);
                            }
                        Gl(e);
                    }
                    if (10256 & e.subtreeFlags) for (e = e.child; null !== e; ) Kl(e), (e = e.sibling);
                }
                function Kl(e) {
                    switch (e.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Xl(e), 2048 & e.flags && il(9, e, e.return);
                            break;
                        case 3:
                        case 12:
                        default:
                            Xl(e);
                            break;
                        case 22:
                            var t = e.stateNode;
                            null !== e.memoizedState && 2 & t._visibility && (null === e.return || 13 !== e.return.tag) ? ((t._visibility &= -3), Ql(e)) : Xl(e);
                    }
                }
                function Ql(e) {
                    var t = e.deletions;
                    if (16 & e.flags) {
                        if (null !== t)
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                (kl = r), Zl(r, e);
                            }
                        Gl(e);
                    }
                    for (e = e.child; null !== e; ) {
                        switch ((t = e).tag) {
                            case 0:
                            case 11:
                            case 15:
                                il(8, t, t.return), Ql(t);
                                break;
                            case 22:
                                2 & (n = t.stateNode)._visibility && ((n._visibility &= -3), Ql(t));
                                break;
                            default:
                                Ql(t);
                        }
                        e = e.sibling;
                    }
                }
                function Zl(e, t) {
                    for (; null !== kl; ) {
                        var n = kl;
                        switch (n.tag) {
                            case 0:
                            case 11:
                            case 15:
                                il(8, n, t);
                                break;
                            case 23:
                            case 22:
                                if (null !== n.memoizedState && null !== n.memoizedState.cachePool) {
                                    var r = n.memoizedState.cachePool.pool;
                                    null != r && r.refCount++;
                                }
                                break;
                            case 24:
                                Ma(n.memoizedState.cache);
                        }
                        if (null !== (r = n.child)) (r.return = n), (kl = r);
                        else
                            e: for (n = e; null !== kl; ) {
                                var a = (r = kl).sibling,
                                    o = r.return;
                                if ((El(r), r === n)) {
                                    kl = null;
                                    break e;
                                }
                                if (null !== a) {
                                    (a.return = o), (kl = a);
                                    break e;
                                }
                                kl = o;
                            }
                    }
                }
                var Jl = {
                        getCacheForType: function (e) {
                            var t = Pa(Na),
                                n = t.data.get(e);
                            return void 0 === n && ((n = e()), t.data.set(e, n)), n;
                        },
                    },
                    eu = "function" == typeof WeakMap ? WeakMap : Map,
                    tu = 0,
                    nu = null,
                    ru = null,
                    au = 0,
                    ou = 0,
                    iu = null,
                    su = !1,
                    lu = !1,
                    uu = !1,
                    cu = 0,
                    du = 0,
                    fu = 0,
                    hu = 0,
                    pu = 0,
                    mu = 0,
                    yu = 0,
                    gu = null,
                    vu = null,
                    bu = !1,
                    wu = 0,
                    xu = 1 / 0,
                    ku = null,
                    Su = null,
                    Eu = 0,
                    Pu = null,
                    Tu = null,
                    Cu = 0,
                    Au = 0,
                    Lu = null,
                    ju = null,
                    Nu = 0,
                    Ou = null;
                function Mu() {
                    return 2 & tu && 0 !== au ? au & -au : null !== M.T ? (0 !== _a ? _a : Ac()) : Le();
                }
                function zu() {
                    0 === mu && (mu = 536870912 & au && !aa ? 536870912 : xe());
                    var e = rs.current;
                    return null !== e && (e.flags |= 32), mu;
                }
                function Ru(e, t, n) {
                    ((e !== nu || (2 !== ou && 9 !== ou)) && null === e.cancelPendingCommit) || (Uu(e, 0), Iu(e, au, mu, !1)), Ee(e, n), (2 & tu && e === nu) || (e === nu && (!(2 & tu) && (hu |= n), 4 === du && Iu(e, au, mu, !1)), xc(e));
                }
                function _u(e, t, n) {
                    if (6 & tu) throw Error(i(327));
                    for (
                        var r = (!n && !(124 & t) && !(t & e.expiredLanes)) || be(e, t),
                            a = r
                                ? (function (e, t) {
                                      var n = tu;
                                      tu |= 2;
                                      var r = Hu(),
                                          a = Wu();
                                      nu !== e || au !== t ? ((ku = null), (xu = ee() + 500), Uu(e, t)) : (lu = be(e, t));
                                      e: for (;;)
                                          try {
                                              if (0 !== ou && null !== ru) {
                                                  t = ru;
                                                  var o = iu;
                                                  t: switch (ou) {
                                                      case 1:
                                                          (ou = 0), (iu = null), Zu(e, t, o, 1);
                                                          break;
                                                      case 2:
                                                      case 9:
                                                          if (Ga(o)) {
                                                              (ou = 0), (iu = null), Qu(t);
                                                              break;
                                                          }
                                                          (t = function () {
                                                              (2 !== ou && 9 !== ou) || nu !== e || (ou = 7), xc(e);
                                                          }),
                                                              o.then(t, t);
                                                          break e;
                                                      case 3:
                                                          ou = 7;
                                                          break e;
                                                      case 4:
                                                          ou = 5;
                                                          break e;
                                                      case 7:
                                                          Ga(o) ? ((ou = 0), (iu = null), Qu(t)) : ((ou = 0), (iu = null), Zu(e, t, o, 7));
                                                          break;
                                                      case 5:
                                                          var s = null;
                                                          switch (ru.tag) {
                                                              case 26:
                                                                  s = ru.memoizedState;
                                                              case 5:
                                                              case 27:
                                                                  var l = ru;
                                                                  if (!s || Vd(s)) {
                                                                      (ou = 0), (iu = null);
                                                                      var u = l.sibling;
                                                                      if (null !== u) ru = u;
                                                                      else {
                                                                          var c = l.return;
                                                                          null !== c ? ((ru = c), Ju(c)) : (ru = null);
                                                                      }
                                                                      break t;
                                                                  }
                                                          }
                                                          (ou = 0), (iu = null), Zu(e, t, o, 5);
                                                          break;
                                                      case 6:
                                                          (ou = 0), (iu = null), Zu(e, t, o, 6);
                                                          break;
                                                      case 8:
                                                          Bu(), (du = 6);
                                                          break e;
                                                      default:
                                                          throw Error(i(462));
                                                  }
                                              }
                                              Xu();
                                              break;
                                          } catch (t) {
                                              $u(e, t);
                                          }
                                      return (ga = ya = null), (M.H = r), (M.A = a), (tu = n), null !== ru ? 0 : ((nu = null), (au = 0), Cr(), du);
                                  })(e, t)
                                : qu(e, t, !0),
                            o = r;
                        ;

                    ) {
                        if (0 === a) {
                            lu && !r && Iu(e, t, 0, !1);
                            break;
                        }
                        if (((n = e.current.alternate), !o || Fu(n))) {
                            if (2 === a) {
                                if (((o = t), e.errorRecoveryDisabledLanes & o)) var s = 0;
                                else s = 0 != (s = -536870913 & e.pendingLanes) ? s : 536870912 & s ? 536870912 : 0;
                                if (0 !== s) {
                                    t = s;
                                    e: {
                                        var l = e;
                                        a = gu;
                                        var u = l.current.memoizedState.isDehydrated;
                                        if ((u && (Uu(l, s).flags |= 256), 2 !== (s = qu(l, s, !1)))) {
                                            if (uu && !u) {
                                                (l.errorRecoveryDisabledLanes |= o), (hu |= o), (a = 4);
                                                break e;
                                            }
                                            (o = vu), (vu = a), null !== o && (null === vu ? (vu = o) : vu.push.apply(vu, o));
                                        }
                                        a = s;
                                    }
                                    if (((o = !1), 2 !== a)) continue;
                                }
                            }
                            if (1 === a) {
                                Uu(e, 0), Iu(e, t, 0, !0);
                                break;
                            }
                            e: {
                                switch (((r = e), (o = a))) {
                                    case 0:
                                    case 1:
                                        throw Error(i(345));
                                    case 4:
                                        if ((4194048 & t) !== t) break;
                                    case 6:
                                        Iu(r, t, mu, !su);
                                        break e;
                                    case 2:
                                        vu = null;
                                        break;
                                    case 3:
                                    case 5:
                                        break;
                                    default:
                                        throw Error(i(329));
                                }
                                if ((62914560 & t) === t && 10 < (a = wu + 300 - ee())) {
                                    if ((Iu(r, t, mu, !su), 0 !== ve(r, 0, !0))) break e;
                                    r.timeoutHandle = sd(Du.bind(null, r, n, vu, ku, bu, t, mu, hu, yu, su, o, 2, -0, 0), a);
                                } else Du(r, n, vu, ku, bu, t, mu, hu, yu, su, o, 0, -0, 0);
                            }
                            break;
                        }
                        (a = qu(e, t, !1)), (o = !1);
                    }
                    xc(e);
                }
                function Du(e, t, n, r, a, o, s, l, u, c, d, f, h, p) {
                    if (
                        ((e.timeoutHandle = -1),
                        (8192 & (f = t.subtreeFlags) || !(16785408 & ~f)) &&
                            ((Bd = { stylesheets: null, count: 0, unsuspend: Ud }),
                            ql(t),
                            null !==
                                (f = (function () {
                                    if (null === Bd) throw Error(i(475));
                                    var e = Bd;
                                    return (
                                        e.stylesheets && 0 === e.count && Wd(e, e.stylesheets),
                                        0 < e.count
                                            ? function (t) {
                                                  var n = setTimeout(function () {
                                                      if ((e.stylesheets && Wd(e, e.stylesheets), e.unsuspend)) {
                                                          var t = e.unsuspend;
                                                          (e.unsuspend = null), t();
                                                      }
                                                  }, 6e4);
                                                  return (
                                                      (e.unsuspend = t),
                                                      function () {
                                                          (e.unsuspend = null), clearTimeout(n);
                                                      }
                                                  );
                                              }
                                            : null
                                    );
                                })())))
                    )
                        return (e.cancelPendingCommit = f(tc.bind(null, e, t, o, n, r, a, s, l, u, d, 1, h, p))), void Iu(e, o, s, !c);
                    tc(e, t, o, n, r, a, s, l, u);
                }
                function Fu(e) {
                    for (var t = e; ; ) {
                        var n = t.tag;
                        if ((0 === n || 11 === n || 15 === n) && 16384 & t.flags && null !== (n = t.updateQueue) && null !== (n = n.stores))
                            for (var r = 0; r < n.length; r++) {
                                var a = n[r],
                                    o = a.getSnapshot;
                                a = a.value;
                                try {
                                    if (!Gn(o(), a)) return !1;
                                } catch (e) {
                                    return !1;
                                }
                            }
                        if (((n = t.child), 16384 & t.subtreeFlags && null !== n)) (n.return = t), (t = n);
                        else {
                            if (t === e) break;
                            for (; null === t.sibling; ) {
                                if (null === t.return || t.return === e) return !0;
                                t = t.return;
                            }
                            (t.sibling.return = t.return), (t = t.sibling);
                        }
                    }
                    return !0;
                }
                function Iu(e, t, n, r) {
                    (t &= ~pu), (t &= ~hu), (e.suspendedLanes |= t), (e.pingedLanes &= ~t), r && (e.warmLanes |= t), (r = e.expirationTimes);
                    for (var a = t; 0 < a; ) {
                        var o = 31 - fe(a),
                            i = 1 << o;
                        (r[o] = -1), (a &= ~i);
                    }
                    0 !== n && Pe(e, n, t);
                }
                function Vu() {
                    return !!(6 & tu) || (kc(0, !1), !1);
                }
                function Bu() {
                    if (null !== ru) {
                        if (0 === ou) var e = ru.return;
                        else (ga = ya = null), Do((e = ru)), (Gi = null), (Xi = 0), (e = ru);
                        for (; null !== e; ) al(e.alternate, e), (e = e.return);
                        ru = null;
                    }
                }
                function Uu(e, t) {
                    var n = e.timeoutHandle;
                    -1 !== n && ((e.timeoutHandle = -1), ld(n)),
                        null !== (n = e.cancelPendingCommit) && ((e.cancelPendingCommit = null), n()),
                        Bu(),
                        (nu = e),
                        (ru = n = Dr(e.current, null)),
                        (au = t),
                        (ou = 0),
                        (iu = null),
                        (su = !1),
                        (lu = be(e, t)),
                        (uu = !1),
                        (yu = mu = pu = hu = fu = du = 0),
                        (vu = gu = null),
                        (bu = !1),
                        8 & t && (t |= 32 & t);
                    var r = e.entangledLanes;
                    if (0 !== r)
                        for (e = e.entanglements, r &= t; 0 < r; ) {
                            var a = 31 - fe(r),
                                o = 1 << a;
                            (t |= e[a]), (r &= ~o);
                        }
                    return (cu = t), Cr(), n;
                }
                function $u(e, t) {
                    (bo = null),
                        (M.H = Hi),
                        t === Ha || t === Ya ? ((t = Za()), (ou = 3)) : t === Wa ? ((t = Za()), (ou = 4)) : (ou = t === Ps ? 8 : null !== t && "object" == typeof t && "function" == typeof t.then ? 6 : 1),
                        (iu = t),
                        null === ru && ((du = 1), ws(e, Sr(t, e.current)));
                }
                function Hu() {
                    var e = M.H;
                    return (M.H = Hi), null === e ? Hi : e;
                }
                function Wu() {
                    var e = M.A;
                    return (M.A = Jl), e;
                }
                function Yu() {
                    (du = 4), su || ((4194048 & au) !== au && null !== rs.current) || (lu = !0), (!(134217727 & fu) && !(134217727 & hu)) || null === nu || Iu(nu, au, mu, !1);
                }
                function qu(e, t, n) {
                    var r = tu;
                    tu |= 2;
                    var a = Hu(),
                        o = Wu();
                    (nu === e && au === t) || ((ku = null), Uu(e, t)), (t = !1);
                    var i = du;
                    e: for (;;)
                        try {
                            if (0 !== ou && null !== ru) {
                                var s = ru,
                                    l = iu;
                                switch (ou) {
                                    case 8:
                                        Bu(), (i = 6);
                                        break e;
                                    case 3:
                                    case 2:
                                    case 9:
                                    case 6:
                                        null === rs.current && (t = !0);
                                        var u = ou;
                                        if (((ou = 0), (iu = null), Zu(e, s, l, u), n && lu)) {
                                            i = 0;
                                            break e;
                                        }
                                        break;
                                    default:
                                        (u = ou), (ou = 0), (iu = null), Zu(e, s, l, u);
                                }
                            }
                            Gu(), (i = du);
                            break;
                        } catch (t) {
                            $u(e, t);
                        }
                    return t && e.shellSuspendCounter++, (ga = ya = null), (tu = r), (M.H = a), (M.A = o), null === ru && ((nu = null), (au = 0), Cr()), i;
                }
                function Gu() {
                    for (; null !== ru; ) Ku(ru);
                }
                function Xu() {
                    for (; null !== ru && !Z(); ) Ku(ru);
                }
                function Ku(e) {
                    var t = Ks(e.alternate, e, cu);
                    (e.memoizedProps = e.pendingProps), null === t ? Ju(e) : (ru = t);
                }
                function Qu(e) {
                    var t = e,
                        n = t.alternate;
                    switch (t.tag) {
                        case 15:
                        case 0:
                            t = Rs(n, t, t.pendingProps, t.type, void 0, au);
                            break;
                        case 11:
                            t = Rs(n, t, t.pendingProps, t.type.render, t.ref, au);
                            break;
                        case 5:
                            Do(t);
                        default:
                            al(n, t), (t = Ks(n, (t = ru = Fr(t, cu)), cu));
                    }
                    (e.memoizedProps = e.pendingProps), null === t ? Ju(e) : (ru = t);
                }
                function Zu(e, t, n, r) {
                    (ga = ya = null), Do(t), (Gi = null), (Xi = 0);
                    var a = t.return;
                    try {
                        if (
                            (function (e, t, n, r, a) {
                                if (((n.flags |= 32768), null !== r && "object" == typeof r && "function" == typeof r.then)) {
                                    if ((null !== (t = n.alternate) && ka(t, n, a, !0), null !== (n = rs.current))) {
                                        switch (n.tag) {
                                            case 13:
                                                return (
                                                    null === as ? Yu() : null === n.alternate && 0 === du && (du = 3),
                                                    (n.flags &= -257),
                                                    (n.flags |= 65536),
                                                    (n.lanes = a),
                                                    r === qa ? (n.flags |= 16384) : (null === (t = n.updateQueue) ? (n.updateQueue = new Set([r])) : t.add(r), cc(e, r, a)),
                                                    !1
                                                );
                                            case 22:
                                                return (
                                                    (n.flags |= 65536),
                                                    r === qa
                                                        ? (n.flags |= 16384)
                                                        : (null === (t = n.updateQueue)
                                                              ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([r]) }), (n.updateQueue = t))
                                                              : null === (n = t.retryQueue)
                                                              ? (t.retryQueue = new Set([r]))
                                                              : n.add(r),
                                                          cc(e, r, a)),
                                                    !1
                                                );
                                        }
                                        throw Error(i(435, n.tag));
                                    }
                                    return cc(e, r, a), Yu(), !1;
                                }
                                if (aa)
                                    return (
                                        null !== (t = rs.current)
                                            ? (!(65536 & t.flags) && (t.flags |= 256), (t.flags |= 65536), (t.lanes = a), r !== sa && pa(Sr((e = Error(i(422), { cause: r })), n)))
                                            : (r !== sa && pa(Sr((t = Error(i(423), { cause: r })), n)),
                                              ((e = e.current.alternate).flags |= 65536),
                                              (a &= -a),
                                              (e.lanes |= a),
                                              (r = Sr(r, n)),
                                              io(e, (a = ks(e.stateNode, r, a))),
                                              4 !== du && (du = 2)),
                                        !1
                                    );
                                var o = Error(i(520), { cause: r });
                                if (((o = Sr(o, n)), null === gu ? (gu = [o]) : gu.push(o), 4 !== du && (du = 2), null === t)) return !0;
                                (r = Sr(r, n)), (n = t);
                                do {
                                    switch (n.tag) {
                                        case 3:
                                            return (n.flags |= 65536), (e = a & -a), (n.lanes |= e), io(n, (e = ks(n.stateNode, r, e))), !1;
                                        case 1:
                                            if (
                                                ((t = n.type),
                                                (o = n.stateNode),
                                                !(128 & n.flags || ("function" != typeof t.getDerivedStateFromError && (null === o || "function" != typeof o.componentDidCatch || (null !== Su && Su.has(o))))))
                                            )
                                                return (n.flags |= 65536), (a &= -a), (n.lanes |= a), Es((a = Ss(a)), e, n, r), io(n, a), !1;
                                    }
                                    n = n.return;
                                } while (null !== n);
                                return !1;
                            })(e, a, t, n, au)
                        )
                            return (du = 1), ws(e, Sr(n, e.current)), void (ru = null);
                    } catch (t) {
                        if (null !== a) throw ((ru = a), t);
                        return (du = 1), ws(e, Sr(n, e.current)), void (ru = null);
                    }
                    32768 & t.flags
                        ? (aa || 1 === r ? (e = !0) : lu || 536870912 & au ? (e = !1) : ((su = e = !0), (2 === r || 9 === r || 3 === r || 6 === r) && null !== (r = rs.current) && 13 === r.tag && (r.flags |= 16384)), ec(t, e))
                        : Ju(t);
                }
                function Ju(e) {
                    var t = e;
                    do {
                        if (32768 & t.flags) return void ec(t, su);
                        e = t.return;
                        var n = nl(t.alternate, t, cu);
                        if (null !== n) return void (ru = n);
                        if (null !== (t = t.sibling)) return void (ru = t);
                        ru = t = e;
                    } while (null !== t);
                    0 === du && (du = 5);
                }
                function ec(e, t) {
                    do {
                        var n = rl(e.alternate, e);
                        if (null !== n) return (n.flags &= 32767), void (ru = n);
                        if ((null !== (n = e.return) && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)), !t && null !== (e = e.sibling))) return void (ru = e);
                        ru = e = n;
                    } while (null !== e);
                    (du = 6), (ru = null);
                }
                function tc(e, t, n, r, a, o, s, l, u) {
                    e.cancelPendingCommit = null;
                    do {
                        ic();
                    } while (0 !== Eu);
                    if (6 & tu) throw Error(i(327));
                    if (null !== t) {
                        if (t === e.current) throw Error(i(177));
                        if (
                            ((o = t.lanes | t.childLanes),
                            (function (e, t, n, r, a, o) {
                                var i = e.pendingLanes;
                                (e.pendingLanes = n), (e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0), (e.expiredLanes &= n), (e.entangledLanes &= n), (e.errorRecoveryDisabledLanes &= n), (e.shellSuspendCounter = 0);
                                var s = e.entanglements,
                                    l = e.expirationTimes,
                                    u = e.hiddenUpdates;
                                for (n = i & ~n; 0 < n; ) {
                                    var c = 31 - fe(n),
                                        d = 1 << c;
                                    (s[c] = 0), (l[c] = -1);
                                    var f = u[c];
                                    if (null !== f)
                                        for (u[c] = null, c = 0; c < f.length; c++) {
                                            var h = f[c];
                                            null !== h && (h.lane &= -536870913);
                                        }
                                    n &= ~d;
                                }
                                0 !== r && Pe(e, r, 0), 0 !== o && 0 === a && 0 !== e.tag && (e.suspendedLanes |= o & ~(i & ~t));
                            })(e, n, (o |= Tr), s, l, u),
                            e === nu && ((ru = nu = null), (au = 0)),
                            (Tu = t),
                            (Pu = e),
                            (Cu = n),
                            (Au = o),
                            (Lu = a),
                            (ju = r),
                            10256 & t.subtreeFlags || 10256 & t.flags
                                ? ((e.callbackNode = null),
                                  (e.callbackPriority = 0),
                                  K(ae, function () {
                                      return sc(), null;
                                  }))
                                : ((e.callbackNode = null), (e.callbackPriority = 0)),
                            (r = !!(13878 & t.flags)),
                            13878 & t.subtreeFlags || r)
                        ) {
                            (r = M.T), (M.T = null), (a = z.p), (z.p = 2), (s = tu), (tu |= 4);
                            try {
                                !(function (e, t) {
                                    if (((e = e.containerInfo), (ed = Jd), er((e = Jn(e))))) {
                                        if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
                                        else
                                            e: {
                                                var r = (n = ((n = e.ownerDocument) && n.defaultView) || window).getSelection && n.getSelection();
                                                if (r && 0 !== r.rangeCount) {
                                                    n = r.anchorNode;
                                                    var a = r.anchorOffset,
                                                        o = r.focusNode;
                                                    r = r.focusOffset;
                                                    try {
                                                        n.nodeType, o.nodeType;
                                                    } catch (e) {
                                                        n = null;
                                                        break e;
                                                    }
                                                    var s = 0,
                                                        l = -1,
                                                        u = -1,
                                                        c = 0,
                                                        d = 0,
                                                        f = e,
                                                        h = null;
                                                    t: for (;;) {
                                                        for (
                                                            var p;
                                                            f !== n || (0 !== a && 3 !== f.nodeType) || (l = s + a),
                                                                f !== o || (0 !== r && 3 !== f.nodeType) || (u = s + r),
                                                                3 === f.nodeType && (s += f.nodeValue.length),
                                                                null !== (p = f.firstChild);

                                                        )
                                                            (h = f), (f = p);
                                                        for (;;) {
                                                            if (f === e) break t;
                                                            if ((h === n && ++c === a && (l = s), h === o && ++d === r && (u = s), null !== (p = f.nextSibling))) break;
                                                            h = (f = h).parentNode;
                                                        }
                                                        f = p;
                                                    }
                                                    n = -1 === l || -1 === u ? null : { start: l, end: u };
                                                } else n = null;
                                            }
                                        n = n || { start: 0, end: 0 };
                                    } else n = null;
                                    for (td = { focusedElem: e, selectionRange: n }, Jd = !1, kl = t; null !== kl; )
                                        if (((e = (t = kl).child), 1024 & t.subtreeFlags && null !== e)) (e.return = t), (kl = e);
                                        else
                                            for (; null !== kl; ) {
                                                switch (((o = (t = kl).alternate), (e = t.flags), t.tag)) {
                                                    case 0:
                                                    case 11:
                                                    case 15:
                                                    case 5:
                                                    case 26:
                                                    case 27:
                                                    case 6:
                                                    case 4:
                                                    case 17:
                                                        break;
                                                    case 1:
                                                        if (1024 & e && null !== o) {
                                                            (e = void 0), (n = t), (a = o.memoizedProps), (o = o.memoizedState), (r = n.stateNode);
                                                            try {
                                                                var m = ms(n.type, a, (n.elementType, n.type));
                                                                (e = r.getSnapshotBeforeUpdate(m, o)), (r.__reactInternalSnapshotBeforeUpdate = e);
                                                            } catch (e) {
                                                                uc(n, n.return, e);
                                                            }
                                                        }
                                                        break;
                                                    case 3:
                                                        if (1024 & e)
                                                            if (9 === (n = (e = t.stateNode.containerInfo).nodeType)) pd(e);
                                                            else if (1 === n)
                                                                switch (e.nodeName) {
                                                                    case "HEAD":
                                                                    case "HTML":
                                                                    case "BODY":
                                                                        pd(e);
                                                                        break;
                                                                    default:
                                                                        e.textContent = "";
                                                                }
                                                        break;
                                                    default:
                                                        if (1024 & e) throw Error(i(163));
                                                }
                                                if (null !== (e = t.sibling)) {
                                                    (e.return = t.return), (kl = e);
                                                    break;
                                                }
                                                kl = t.return;
                                            }
                                })(e, t);
                            } finally {
                                (tu = s), (z.p = a), (M.T = r);
                            }
                        }
                        (Eu = 1), nc(), rc(), ac();
                    }
                }
                function nc() {
                    if (1 === Eu) {
                        Eu = 0;
                        var e = Pu,
                            t = Tu,
                            n = !!(13878 & t.flags);
                        if (13878 & t.subtreeFlags || n) {
                            (n = M.T), (M.T = null);
                            var r = z.p;
                            z.p = 2;
                            var a = tu;
                            tu |= 4;
                            try {
                                Ml(t, e);
                                var o = td,
                                    i = Jn(e.containerInfo),
                                    s = o.focusedElem,
                                    l = o.selectionRange;
                                if (i !== s && s && s.ownerDocument && Zn(s.ownerDocument.documentElement, s)) {
                                    if (null !== l && er(s)) {
                                        var u = l.start,
                                            c = l.end;
                                        if ((void 0 === c && (c = u), "selectionStart" in s)) (s.selectionStart = u), (s.selectionEnd = Math.min(c, s.value.length));
                                        else {
                                            var d = s.ownerDocument || document,
                                                f = (d && d.defaultView) || window;
                                            if (f.getSelection) {
                                                var h = f.getSelection(),
                                                    p = s.textContent.length,
                                                    m = Math.min(l.start, p),
                                                    y = void 0 === l.end ? m : Math.min(l.end, p);
                                                !h.extend && m > y && ((i = y), (y = m), (m = i));
                                                var g = Qn(s, m),
                                                    v = Qn(s, y);
                                                if (g && v && (1 !== h.rangeCount || h.anchorNode !== g.node || h.anchorOffset !== g.offset || h.focusNode !== v.node || h.focusOffset !== v.offset)) {
                                                    var b = d.createRange();
                                                    b.setStart(g.node, g.offset), h.removeAllRanges(), m > y ? (h.addRange(b), h.extend(v.node, v.offset)) : (b.setEnd(v.node, v.offset), h.addRange(b));
                                                }
                                            }
                                        }
                                    }
                                    for (d = [], h = s; (h = h.parentNode); ) 1 === h.nodeType && d.push({ element: h, left: h.scrollLeft, top: h.scrollTop });
                                    for ("function" == typeof s.focus && s.focus(), s = 0; s < d.length; s++) {
                                        var w = d[s];
                                        (w.element.scrollLeft = w.left), (w.element.scrollTop = w.top);
                                    }
                                }
                                (Jd = !!ed), (td = ed = null);
                            } finally {
                                (tu = a), (z.p = r), (M.T = n);
                            }
                        }
                        (e.current = t), (Eu = 2);
                    }
                }
                function rc() {
                    if (2 === Eu) {
                        Eu = 0;
                        var e = Pu,
                            t = Tu,
                            n = !!(8772 & t.flags);
                        if (8772 & t.subtreeFlags || n) {
                            (n = M.T), (M.T = null);
                            var r = z.p;
                            z.p = 2;
                            var a = tu;
                            tu |= 4;
                            try {
                                Sl(e, t.alternate, t);
                            } finally {
                                (tu = a), (z.p = r), (M.T = n);
                            }
                        }
                        Eu = 3;
                    }
                }
                function ac() {
                    if (4 === Eu || 3 === Eu) {
                        (Eu = 0), J();
                        var e = Pu,
                            t = Tu,
                            n = Cu,
                            r = ju;
                        10256 & t.subtreeFlags || 10256 & t.flags ? (Eu = 5) : ((Eu = 0), (Tu = Pu = null), oc(e, e.pendingLanes));
                        var a = e.pendingLanes;
                        if ((0 === a && (Su = null), Ae(n), (t = t.stateNode), ce && "function" == typeof ce.onCommitFiberRoot))
                            try {
                                ce.onCommitFiberRoot(ue, t, void 0, !(128 & ~t.current.flags));
                            } catch (e) {}
                        if (null !== r) {
                            (t = M.T), (a = z.p), (z.p = 2), (M.T = null);
                            try {
                                for (var o = e.onRecoverableError, i = 0; i < r.length; i++) {
                                    var s = r[i];
                                    o(s.value, { componentStack: s.stack });
                                }
                            } finally {
                                (M.T = t), (z.p = a);
                            }
                        }
                        3 & Cu && ic(), xc(e), (a = e.pendingLanes), 4194090 & n && 42 & a ? (e === Ou ? Nu++ : ((Nu = 0), (Ou = e))) : (Nu = 0), kc(0, !1);
                    }
                }
                function oc(e, t) {
                    0 == (e.pooledCacheLanes &= t) && null != (t = e.pooledCache) && ((e.pooledCache = null), Ma(t));
                }
                function ic(e) {
                    return nc(), rc(), ac(), sc();
                }
                function sc() {
                    if (5 !== Eu) return !1;
                    var e = Pu,
                        t = Au;
                    Au = 0;
                    var n = Ae(Cu),
                        r = M.T,
                        a = z.p;
                    try {
                        (z.p = 32 > n ? 32 : n), (M.T = null), (n = Lu), (Lu = null);
                        var o = Pu,
                            s = Cu;
                        if (((Eu = 0), (Tu = Pu = null), (Cu = 0), 6 & tu)) throw Error(i(331));
                        var l = tu;
                        if (((tu |= 4), Kl(o.current), Ul(o, o.current, s, n), (tu = l), kc(0, !1), ce && "function" == typeof ce.onPostCommitFiberRoot))
                            try {
                                ce.onPostCommitFiberRoot(ue, o);
                            } catch (e) {}
                        return !0;
                    } finally {
                        (z.p = a), (M.T = r), oc(e, t);
                    }
                }
                function lc(e, t, n) {
                    (t = Sr(n, t)), null !== (e = ao(e, (t = ks(e.stateNode, t, 2)), 2)) && (Ee(e, 2), xc(e));
                }
                function uc(e, t, n) {
                    if (3 === e.tag) lc(e, e, n);
                    else
                        for (; null !== t; ) {
                            if (3 === t.tag) {
                                lc(t, e, n);
                                break;
                            }
                            if (1 === t.tag) {
                                var r = t.stateNode;
                                if ("function" == typeof t.type.getDerivedStateFromError || ("function" == typeof r.componentDidCatch && (null === Su || !Su.has(r)))) {
                                    (e = Sr(n, e)), null !== (r = ao(t, (n = Ss(2)), 2)) && (Es(n, r, t, e), Ee(r, 2), xc(r));
                                    break;
                                }
                            }
                            t = t.return;
                        }
                }
                function cc(e, t, n) {
                    var r = e.pingCache;
                    if (null === r) {
                        r = e.pingCache = new eu();
                        var a = new Set();
                        r.set(t, a);
                    } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
                    a.has(n) || ((uu = !0), a.add(n), (e = dc.bind(null, e, t, n)), t.then(e, e));
                }
                function dc(e, t, n) {
                    var r = e.pingCache;
                    null !== r && r.delete(t),
                        (e.pingedLanes |= e.suspendedLanes & n),
                        (e.warmLanes &= ~n),
                        nu === e && (au & n) === n && (4 === du || (3 === du && (62914560 & au) === au && 300 > ee() - wu) ? !(2 & tu) && Uu(e, 0) : (pu |= n), yu === au && (yu = 0)),
                        xc(e);
                }
                function fc(e, t) {
                    0 === t && (t = ke()), null !== (e = jr(e, t)) && (Ee(e, t), xc(e));
                }
                function hc(e) {
                    var t = e.memoizedState,
                        n = 0;
                    null !== t && (n = t.retryLane), fc(e, n);
                }
                function pc(e, t) {
                    var n = 0;
                    switch (e.tag) {
                        case 13:
                            var r = e.stateNode,
                                a = e.memoizedState;
                            null !== a && (n = a.retryLane);
                            break;
                        case 19:
                            r = e.stateNode;
                            break;
                        case 22:
                            r = e.stateNode._retryCache;
                            break;
                        default:
                            throw Error(i(314));
                    }
                    null !== r && r.delete(t), fc(e, n);
                }
                var mc = null,
                    yc = null,
                    gc = !1,
                    vc = !1,
                    bc = !1,
                    wc = 0;
                function xc(e) {
                    e !== yc && null === e.next && (null === yc ? (mc = yc = e) : (yc = yc.next = e)),
                        (vc = !0),
                        gc ||
                            ((gc = !0),
                            cd(function () {
                                6 & tu ? K(ne, Sc) : Ec();
                            }));
                }
                function kc(e, t) {
                    if (!bc && vc) {
                        bc = !0;
                        do {
                            for (var n = !1, r = mc; null !== r; ) {
                                if (!t)
                                    if (0 !== e) {
                                        var a = r.pendingLanes;
                                        if (0 === a) var o = 0;
                                        else {
                                            var i = r.suspendedLanes,
                                                s = r.pingedLanes;
                                            (o = (1 << (31 - fe(42 | e) + 1)) - 1), (o = 201326741 & (o &= a & ~(i & ~s)) ? (201326741 & o) | 1 : o ? 2 | o : 0);
                                        }
                                        0 !== o && ((n = !0), Cc(r, o));
                                    } else (o = au), !(3 & (o = ve(r, r === nu ? o : 0, null !== r.cancelPendingCommit || -1 !== r.timeoutHandle))) || be(r, o) || ((n = !0), Cc(r, o));
                                r = r.next;
                            }
                        } while (n);
                        bc = !1;
                    }
                }
                function Sc() {
                    Ec();
                }
                function Ec() {
                    vc = gc = !1;
                    var e,
                        t = 0;
                    0 !== wc && (((e = window.event) && "popstate" === e.type ? e !== id && ((id = e), !0) : ((id = null), !1)) && (t = wc), (wc = 0));
                    for (var n = ee(), r = null, a = mc; null !== a; ) {
                        var o = a.next,
                            i = Pc(a, n);
                        0 === i ? ((a.next = null), null === r ? (mc = o) : (r.next = o), null === o && (yc = r)) : ((r = a), (0 !== t || 3 & i) && (vc = !0)), (a = o);
                    }
                    kc(t, !1);
                }
                function Pc(e, t) {
                    for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, o = -62914561 & e.pendingLanes; 0 < o; ) {
                        var i = 31 - fe(o),
                            s = 1 << i,
                            l = a[i];
                        -1 === l ? (s & n && !(s & r)) || (a[i] = we(s, t)) : l <= t && (e.expiredLanes |= s), (o &= ~s);
                    }
                    if (((n = au), (n = ve(e, e === (t = nu) ? n : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle)), (r = e.callbackNode), 0 === n || (e === t && (2 === ou || 9 === ou)) || null !== e.cancelPendingCommit))
                        return null !== r && null !== r && Q(r), (e.callbackNode = null), (e.callbackPriority = 0);
                    if (!(3 & n) || be(e, n)) {
                        if ((t = n & -n) === e.callbackPriority) return t;
                        switch ((null !== r && Q(r), Ae(n))) {
                            case 2:
                            case 8:
                                n = re;
                                break;
                            case 32:
                            default:
                                n = ae;
                                break;
                            case 268435456:
                                n = ie;
                        }
                        return (r = Tc.bind(null, e)), (n = K(n, r)), (e.callbackPriority = t), (e.callbackNode = n), t;
                    }
                    return null !== r && null !== r && Q(r), (e.callbackPriority = 2), (e.callbackNode = null), 2;
                }
                function Tc(e, t) {
                    if (0 !== Eu && 5 !== Eu) return (e.callbackNode = null), (e.callbackPriority = 0), null;
                    var n = e.callbackNode;
                    if (ic() && e.callbackNode !== n) return null;
                    var r = au;
                    return 0 === (r = ve(e, e === nu ? r : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle)) ? null : (_u(e, r, t), Pc(e, ee()), null != e.callbackNode && e.callbackNode === n ? Tc.bind(null, e) : null);
                }
                function Cc(e, t) {
                    if (ic()) return null;
                    _u(e, t, !0);
                }
                function Ac() {
                    return 0 === wc && (wc = xe()), wc;
                }
                function Lc(e) {
                    return null == e || "symbol" == typeof e || "boolean" == typeof e ? null : "function" == typeof e ? e : At("" + e);
                }
                function jc(e, t) {
                    var n = t.ownerDocument.createElement("input");
                    return (n.name = t.name), (n.value = t.value), e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), (e = new FormData(e)), n.parentNode.removeChild(n), e;
                }
                for (var Nc = 0; Nc < wr.length; Nc++) {
                    var Oc = wr[Nc];
                    xr(Oc.toLowerCase(), "on" + (Oc[0].toUpperCase() + Oc.slice(1)));
                }
                xr(fr, "onAnimationEnd"),
                    xr(hr, "onAnimationIteration"),
                    xr(pr, "onAnimationStart"),
                    xr("dblclick", "onDoubleClick"),
                    xr("focusin", "onFocus"),
                    xr("focusout", "onBlur"),
                    xr(mr, "onTransitionRun"),
                    xr(yr, "onTransitionStart"),
                    xr(gr, "onTransitionCancel"),
                    xr(vr, "onTransitionEnd"),
                    Ge("onMouseEnter", ["mouseout", "mouseover"]),
                    Ge("onMouseLeave", ["mouseout", "mouseover"]),
                    Ge("onPointerEnter", ["pointerout", "pointerover"]),
                    Ge("onPointerLeave", ["pointerout", "pointerover"]),
                    qe("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
                    qe("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
                    qe("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
                    qe("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
                    qe("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
                    qe("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
                var Mc = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
                        " "
                    ),
                    zc = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mc));
                function Rc(e, t) {
                    t = !!(4 & t);
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n],
                            a = r.event;
                        r = r.listeners;
                        e: {
                            var o = void 0;
                            if (t)
                                for (var i = r.length - 1; 0 <= i; i--) {
                                    var s = r[i],
                                        l = s.instance,
                                        u = s.currentTarget;
                                    if (((s = s.listener), l !== o && a.isPropagationStopped())) break e;
                                    (o = s), (a.currentTarget = u);
                                    try {
                                        o(a);
                                    } catch (e) {
                                        ys(e);
                                    }
                                    (a.currentTarget = null), (o = l);
                                }
                            else
                                for (i = 0; i < r.length; i++) {
                                    if (((l = (s = r[i]).instance), (u = s.currentTarget), (s = s.listener), l !== o && a.isPropagationStopped())) break e;
                                    (o = s), (a.currentTarget = u);
                                    try {
                                        o(a);
                                    } catch (e) {
                                        ys(e);
                                    }
                                    (a.currentTarget = null), (o = l);
                                }
                        }
                    }
                }
                function _c(e, t) {
                    var n = t[ze];
                    void 0 === n && (n = t[ze] = new Set());
                    var r = e + "__bubble";
                    n.has(r) || (Vc(t, e, 2, !1), n.add(r));
                }
                function Dc(e, t, n) {
                    var r = 0;
                    t && (r |= 4), Vc(n, e, r, t);
                }
                var Fc = "_reactListening" + Math.random().toString(36).slice(2);
                function Ic(e) {
                    if (!e[Fc]) {
                        (e[Fc] = !0),
                            We.forEach(function (t) {
                                "selectionchange" !== t && (zc.has(t) || Dc(t, !1, e), Dc(t, !0, e));
                            });
                        var t = 9 === e.nodeType ? e : e.ownerDocument;
                        null === t || t[Fc] || ((t[Fc] = !0), Dc("selectionchange", !1, t));
                    }
                }
                function Vc(e, t, n, r) {
                    switch (sf(t)) {
                        case 2:
                            var a = ef;
                            break;
                        case 8:
                            a = tf;
                            break;
                        default:
                            a = nf;
                    }
                    (n = a.bind(null, t, n, e)),
                        (a = void 0),
                        !Ft || ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) || (a = !0),
                        r ? (void 0 !== a ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0)) : void 0 !== a ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1);
                }
                function Bc(e, t, n, r, a) {
                    var o = r;
                    if (!(1 & t || 2 & t || null === r))
                        e: for (;;) {
                            if (null === r) return;
                            var i = r.tag;
                            if (3 === i || 4 === i) {
                                var l = r.stateNode.containerInfo;
                                if (l === a) break;
                                if (4 === i)
                                    for (i = r.return; null !== i; ) {
                                        var u = i.tag;
                                        if ((3 === u || 4 === u) && i.stateNode.containerInfo === a) return;
                                        i = i.return;
                                    }
                                for (; null !== l; ) {
                                    if (null === (i = Ve(l))) return;
                                    if (5 === (u = i.tag) || 6 === u || 26 === u || 27 === u) {
                                        r = o = i;
                                        continue e;
                                    }
                                    l = l.parentNode;
                                }
                            }
                            r = r.return;
                        }
                    Rt(function () {
                        var r = o,
                            a = jt(n),
                            i = [];
                        e: {
                            var l = br.get(e);
                            if (void 0 !== l) {
                                var u = Zt,
                                    c = e;
                                switch (e) {
                                    case "keypress":
                                        if (0 === Ht(n)) break e;
                                    case "keydown":
                                    case "keyup":
                                        u = pn;
                                        break;
                                    case "focusin":
                                        (c = "focus"), (u = an);
                                        break;
                                    case "focusout":
                                        (c = "blur"), (u = an);
                                        break;
                                    case "beforeblur":
                                    case "afterblur":
                                        u = an;
                                        break;
                                    case "click":
                                        if (2 === n.button) break e;
                                    case "auxclick":
                                    case "dblclick":
                                    case "mousedown":
                                    case "mousemove":
                                    case "mouseup":
                                    case "mouseout":
                                    case "mouseover":
                                    case "contextmenu":
                                        u = nn;
                                        break;
                                    case "drag":
                                    case "dragend":
                                    case "dragenter":
                                    case "dragexit":
                                    case "dragleave":
                                    case "dragover":
                                    case "dragstart":
                                    case "drop":
                                        u = rn;
                                        break;
                                    case "touchcancel":
                                    case "touchend":
                                    case "touchmove":
                                    case "touchstart":
                                        u = yn;
                                        break;
                                    case fr:
                                    case hr:
                                    case pr:
                                        u = on;
                                        break;
                                    case vr:
                                        u = gn;
                                        break;
                                    case "scroll":
                                    case "scrollend":
                                        u = en;
                                        break;
                                    case "wheel":
                                        u = vn;
                                        break;
                                    case "copy":
                                    case "cut":
                                    case "paste":
                                        u = sn;
                                        break;
                                    case "gotpointercapture":
                                    case "lostpointercapture":
                                    case "pointercancel":
                                    case "pointerdown":
                                    case "pointermove":
                                    case "pointerout":
                                    case "pointerover":
                                    case "pointerup":
                                        u = mn;
                                        break;
                                    case "toggle":
                                    case "beforetoggle":
                                        u = bn;
                                }
                                var d = !!(4 & t),
                                    f = !d && ("scroll" === e || "scrollend" === e),
                                    h = d ? (null !== l ? l + "Capture" : null) : l;
                                d = [];
                                for (var p, m = r; null !== m; ) {
                                    var y = m;
                                    if (((p = y.stateNode), (5 !== (y = y.tag) && 26 !== y && 27 !== y) || null === p || null === h || (null != (y = _t(m, h)) && d.push(Uc(m, y, p))), f)) break;
                                    m = m.return;
                                }
                                0 < d.length && ((l = new u(l, c, null, n, a)), i.push({ event: l, listeners: d }));
                            }
                        }
                        if (!(7 & t)) {
                            if (
                                ((u = "mouseout" === e || "pointerout" === e),
                                (!(l = "mouseover" === e || "pointerover" === e) || n === Lt || !(c = n.relatedTarget || n.fromElement) || (!Ve(c) && !c[Me])) &&
                                    (u || l) &&
                                    ((l = a.window === a ? a : (l = a.ownerDocument) ? l.defaultView || l.parentWindow : window),
                                    u ? ((u = r), null !== (c = (c = n.relatedTarget || n.toElement) ? Ve(c) : null) && ((f = s(c)), (d = c.tag), c !== f || (5 !== d && 27 !== d && 6 !== d)) && (c = null)) : ((u = null), (c = r)),
                                    u !== c))
                            ) {
                                if (
                                    ((d = nn),
                                    (y = "onMouseLeave"),
                                    (h = "onMouseEnter"),
                                    (m = "mouse"),
                                    ("pointerout" !== e && "pointerover" !== e) || ((d = mn), (y = "onPointerLeave"), (h = "onPointerEnter"), (m = "pointer")),
                                    (f = null == u ? l : Ue(u)),
                                    (p = null == c ? l : Ue(c)),
                                    ((l = new d(y, m + "leave", u, n, a)).target = f),
                                    (l.relatedTarget = p),
                                    (y = null),
                                    Ve(a) === r && (((d = new d(h, m + "enter", c, n, a)).target = p), (d.relatedTarget = f), (y = d)),
                                    (f = y),
                                    u && c)
                                )
                                    e: {
                                        for (h = c, m = 0, p = d = u; p; p = Hc(p)) m++;
                                        for (p = 0, y = h; y; y = Hc(y)) p++;
                                        for (; 0 < m - p; ) (d = Hc(d)), m--;
                                        for (; 0 < p - m; ) (h = Hc(h)), p--;
                                        for (; m--; ) {
                                            if (d === h || (null !== h && d === h.alternate)) break e;
                                            (d = Hc(d)), (h = Hc(h));
                                        }
                                        d = null;
                                    }
                                else d = null;
                                null !== u && Wc(i, l, u, d, !1), null !== c && null !== f && Wc(i, f, c, d, !0);
                            }
                            if ("select" === (u = (l = r ? Ue(r) : window).nodeName && l.nodeName.toLowerCase()) || ("input" === u && "file" === l.type)) var g = Dn;
                            else if (Nn(l))
                                if (Fn) g = qn;
                                else {
                                    g = Wn;
                                    var v = Hn;
                                }
                            else !(u = l.nodeName) || "input" !== u.toLowerCase() || ("checkbox" !== l.type && "radio" !== l.type) ? r && Pt(r.elementType) && (g = Dn) : (g = Yn);
                            switch ((g && (g = g(e, r)) ? On(i, g, n, a) : (v && v(e, l, r), "focusout" === e && r && "number" === l.type && null != r.memoizedProps.value && gt(l, "number", l.value)), (v = r ? Ue(r) : window), e)) {
                                case "focusin":
                                    (Nn(v) || "true" === v.contentEditable) && ((nr = v), (rr = r), (ar = null));
                                    break;
                                case "focusout":
                                    ar = rr = nr = null;
                                    break;
                                case "mousedown":
                                    or = !0;
                                    break;
                                case "contextmenu":
                                case "mouseup":
                                case "dragend":
                                    (or = !1), ir(i, n, a);
                                    break;
                                case "selectionchange":
                                    if (tr) break;
                                case "keydown":
                                case "keyup":
                                    ir(i, n, a);
                            }
                            var b;
                            if (xn)
                                e: {
                                    switch (e) {
                                        case "compositionstart":
                                            var w = "onCompositionStart";
                                            break e;
                                        case "compositionend":
                                            w = "onCompositionEnd";
                                            break e;
                                        case "compositionupdate":
                                            w = "onCompositionUpdate";
                                            break e;
                                    }
                                    w = void 0;
                                }
                            else Ln ? Cn(e, n) && (w = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (w = "onCompositionStart");
                            w &&
                                (En && "ko" !== n.locale && (Ln || "onCompositionStart" !== w ? "onCompositionEnd" === w && Ln && (b = $t()) : ((Bt = "value" in (Vt = a) ? Vt.value : Vt.textContent), (Ln = !0))),
                                0 < (v = $c(r, w)).length && ((w = new ln(w, e, null, n, a)), i.push({ event: w, listeners: v }), (b || null !== (b = An(n))) && (w.data = b))),
                                (b = Sn
                                    ? (function (e, t) {
                                          switch (e) {
                                              case "compositionend":
                                                  return An(t);
                                              case "keypress":
                                                  return 32 !== t.which ? null : ((Tn = !0), Pn);
                                              case "textInput":
                                                  return (e = t.data) === Pn && Tn ? null : e;
                                              default:
                                                  return null;
                                          }
                                      })(e, n)
                                    : (function (e, t) {
                                          if (Ln) return "compositionend" === e || (!xn && Cn(e, t)) ? ((e = $t()), (Ut = Bt = Vt = null), (Ln = !1), e) : null;
                                          switch (e) {
                                              case "paste":
                                              default:
                                                  return null;
                                              case "keypress":
                                                  if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                                                      if (t.char && 1 < t.char.length) return t.char;
                                                      if (t.which) return String.fromCharCode(t.which);
                                                  }
                                                  return null;
                                              case "compositionend":
                                                  return En && "ko" !== t.locale ? null : t.data;
                                          }
                                      })(e, n)) &&
                                    0 < (w = $c(r, "onBeforeInput")).length &&
                                    ((v = new ln("onBeforeInput", "beforeinput", null, n, a)), i.push({ event: v, listeners: w }), (v.data = b)),
                                (function (e, t, n, r, a) {
                                    if ("submit" === t && n && n.stateNode === a) {
                                        var o = Lc((a[Oe] || null).action),
                                            i = r.submitter;
                                        i && null !== (t = (t = i[Oe] || null) ? Lc(t.formAction) : i.getAttribute("formAction")) && ((o = t), (i = null));
                                        var s = new Zt("action", "action", null, r, a);
                                        e.push({
                                            event: s,
                                            listeners: [
                                                {
                                                    instance: null,
                                                    listener: function () {
                                                        if (r.defaultPrevented) {
                                                            if (0 !== wc) {
                                                                var e = i ? jc(a, i) : new FormData(a);
                                                                ji(n, { pending: !0, data: e, method: a.method, action: o }, null, e);
                                                            }
                                                        } else "function" == typeof o && (s.preventDefault(), (e = i ? jc(a, i) : new FormData(a)), ji(n, { pending: !0, data: e, method: a.method, action: o }, o, e));
                                                    },
                                                    currentTarget: a,
                                                },
                                            ],
                                        });
                                    }
                                })(i, e, r, n, a);
                        }
                        Rc(i, t);
                    });
                }
                function Uc(e, t, n) {
                    return { instance: e, listener: t, currentTarget: n };
                }
                function $c(e, t) {
                    for (var n = t + "Capture", r = []; null !== e; ) {
                        var a = e,
                            o = a.stateNode;
                        if (((5 !== (a = a.tag) && 26 !== a && 27 !== a) || null === o || (null != (a = _t(e, n)) && r.unshift(Uc(e, a, o)), null != (a = _t(e, t)) && r.push(Uc(e, a, o))), 3 === e.tag)) return r;
                        e = e.return;
                    }
                    return [];
                }
                function Hc(e) {
                    if (null === e) return null;
                    do {
                        e = e.return;
                    } while (e && 5 !== e.tag && 27 !== e.tag);
                    return e || null;
                }
                function Wc(e, t, n, r, a) {
                    for (var o = t._reactName, i = []; null !== n && n !== r; ) {
                        var s = n,
                            l = s.alternate,
                            u = s.stateNode;
                        if (((s = s.tag), null !== l && l === r)) break;
                        (5 !== s && 26 !== s && 27 !== s) || null === u || ((l = u), a ? null != (u = _t(n, o)) && i.unshift(Uc(n, u, l)) : a || (null != (u = _t(n, o)) && i.push(Uc(n, u, l)))), (n = n.return);
                    }
                    0 !== i.length && e.push({ event: t, listeners: i });
                }
                var Yc = /\r\n?/g,
                    qc = /\u0000|\uFFFD/g;
                function Gc(e) {
                    return ("string" == typeof e ? e : "" + e).replace(Yc, "\n").replace(qc, "");
                }
                function Xc(e, t) {
                    return (t = Gc(t)), Gc(e) === t;
                }
                function Kc() {}
                function Qc(e, t, n, r, a, o) {
                    switch (n) {
                        case "children":
                            "string" == typeof r ? "body" === t || ("textarea" === t && "" === r) || xt(e, r) : ("number" == typeof r || "bigint" == typeof r) && "body" !== t && xt(e, "" + r);
                            break;
                        case "className":
                            tt(e, "class", r);
                            break;
                        case "tabIndex":
                            tt(e, "tabindex", r);
                            break;
                        case "dir":
                        case "role":
                        case "viewBox":
                        case "width":
                        case "height":
                            tt(e, n, r);
                            break;
                        case "style":
                            Et(e, r, o);
                            break;
                        case "data":
                            if ("object" !== t) {
                                tt(e, "data", r);
                                break;
                            }
                        case "src":
                        case "href":
                            if ("" === r && ("a" !== t || "href" !== n)) {
                                e.removeAttribute(n);
                                break;
                            }
                            if (null == r || "function" == typeof r || "symbol" == typeof r || "boolean" == typeof r) {
                                e.removeAttribute(n);
                                break;
                            }
                            (r = At("" + r)), e.setAttribute(n, r);
                            break;
                        case "action":
                        case "formAction":
                            if ("function" == typeof r) {
                                e.setAttribute(
                                    n,
                                    "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
                                );
                                break;
                            }
                            if (
                                ("function" == typeof o &&
                                    ("formAction" === n
                                        ? ("input" !== t && Qc(e, t, "name", a.name, a, null), Qc(e, t, "formEncType", a.formEncType, a, null), Qc(e, t, "formMethod", a.formMethod, a, null), Qc(e, t, "formTarget", a.formTarget, a, null))
                                        : (Qc(e, t, "encType", a.encType, a, null), Qc(e, t, "method", a.method, a, null), Qc(e, t, "target", a.target, a, null))),
                                null == r || "symbol" == typeof r || "boolean" == typeof r)
                            ) {
                                e.removeAttribute(n);
                                break;
                            }
                            (r = At("" + r)), e.setAttribute(n, r);
                            break;
                        case "onClick":
                            null != r && (e.onclick = Kc);
                            break;
                        case "onScroll":
                            null != r && _c("scroll", e);
                            break;
                        case "onScrollEnd":
                            null != r && _c("scrollend", e);
                            break;
                        case "dangerouslySetInnerHTML":
                            if (null != r) {
                                if ("object" != typeof r || !("__html" in r)) throw Error(i(61));
                                if (null != (n = r.__html)) {
                                    if (null != a.children) throw Error(i(60));
                                    e.innerHTML = n;
                                }
                            }
                            break;
                        case "multiple":
                            e.multiple = r && "function" != typeof r && "symbol" != typeof r;
                            break;
                        case "muted":
                            e.muted = r && "function" != typeof r && "symbol" != typeof r;
                            break;
                        case "suppressContentEditableWarning":
                        case "suppressHydrationWarning":
                        case "defaultValue":
                        case "defaultChecked":
                        case "innerHTML":
                        case "ref":
                        case "autoFocus":
                            break;
                        case "xlinkHref":
                            if (null == r || "function" == typeof r || "boolean" == typeof r || "symbol" == typeof r) {
                                e.removeAttribute("xlink:href");
                                break;
                            }
                            (n = At("" + r)), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
                            break;
                        case "contentEditable":
                        case "spellCheck":
                        case "draggable":
                        case "value":
                        case "autoReverse":
                        case "externalResourcesRequired":
                        case "focusable":
                        case "preserveAlpha":
                            null != r && "function" != typeof r && "symbol" != typeof r ? e.setAttribute(n, "" + r) : e.removeAttribute(n);
                            break;
                        case "inert":
                        case "allowFullScreen":
                        case "async":
                        case "autoPlay":
                        case "controls":
                        case "default":
                        case "defer":
                        case "disabled":
                        case "disablePictureInPicture":
                        case "disableRemotePlayback":
                        case "formNoValidate":
                        case "hidden":
                        case "loop":
                        case "noModule":
                        case "noValidate":
                        case "open":
                        case "playsInline":
                        case "readOnly":
                        case "required":
                        case "reversed":
                        case "scoped":
                        case "seamless":
                        case "itemScope":
                            r && "function" != typeof r && "symbol" != typeof r ? e.setAttribute(n, "") : e.removeAttribute(n);
                            break;
                        case "capture":
                        case "download":
                            !0 === r ? e.setAttribute(n, "") : !1 !== r && null != r && "function" != typeof r && "symbol" != typeof r ? e.setAttribute(n, r) : e.removeAttribute(n);
                            break;
                        case "cols":
                        case "rows":
                        case "size":
                        case "span":
                            null != r && "function" != typeof r && "symbol" != typeof r && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
                            break;
                        case "rowSpan":
                        case "start":
                            null == r || "function" == typeof r || "symbol" == typeof r || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
                            break;
                        case "popover":
                            _c("beforetoggle", e), _c("toggle", e), et(e, "popover", r);
                            break;
                        case "xlinkActuate":
                            nt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
                            break;
                        case "xlinkArcrole":
                            nt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
                            break;
                        case "xlinkRole":
                            nt(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
                            break;
                        case "xlinkShow":
                            nt(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
                            break;
                        case "xlinkTitle":
                            nt(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
                            break;
                        case "xlinkType":
                            nt(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
                            break;
                        case "xmlBase":
                            nt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
                            break;
                        case "xmlLang":
                            nt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
                            break;
                        case "xmlSpace":
                            nt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
                            break;
                        case "is":
                            et(e, "is", r);
                            break;
                        case "innerText":
                        case "textContent":
                            break;
                        default:
                            (!(2 < n.length) || ("o" !== n[0] && "O" !== n[0]) || ("n" !== n[1] && "N" !== n[1])) && et(e, (n = Tt.get(n) || n), r);
                    }
                }
                function Zc(e, t, n, r, a, o) {
                    switch (n) {
                        case "style":
                            Et(e, r, o);
                            break;
                        case "dangerouslySetInnerHTML":
                            if (null != r) {
                                if ("object" != typeof r || !("__html" in r)) throw Error(i(61));
                                if (null != (n = r.__html)) {
                                    if (null != a.children) throw Error(i(60));
                                    e.innerHTML = n;
                                }
                            }
                            break;
                        case "children":
                            "string" == typeof r ? xt(e, r) : ("number" == typeof r || "bigint" == typeof r) && xt(e, "" + r);
                            break;
                        case "onScroll":
                            null != r && _c("scroll", e);
                            break;
                        case "onScrollEnd":
                            null != r && _c("scrollend", e);
                            break;
                        case "onClick":
                            null != r && (e.onclick = Kc);
                            break;
                        case "suppressContentEditableWarning":
                        case "suppressHydrationWarning":
                        case "innerHTML":
                        case "ref":
                        case "innerText":
                        case "textContent":
                            break;
                        default:
                            Ye.hasOwnProperty(n) ||
                                ("o" !== n[0] ||
                                "n" !== n[1] ||
                                ((a = n.endsWith("Capture")), (t = n.slice(2, a ? n.length - 7 : void 0)), "function" == typeof (o = null != (o = e[Oe] || null) ? o[n] : null) && e.removeEventListener(t, o, a), "function" != typeof r)
                                    ? n in e
                                        ? (e[n] = r)
                                        : !0 === r
                                        ? e.setAttribute(n, "")
                                        : et(e, n, r)
                                    : ("function" != typeof o && null !== o && (n in e ? (e[n] = null) : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, r, a)));
                    }
                }
                function Jc(e, t, n) {
                    switch (t) {
                        case "div":
                        case "span":
                        case "svg":
                        case "path":
                        case "a":
                        case "g":
                        case "p":
                        case "li":
                            break;
                        case "img":
                            _c("error", e), _c("load", e);
                            var r,
                                a = !1,
                                o = !1;
                            for (r in n)
                                if (n.hasOwnProperty(r)) {
                                    var s = n[r];
                                    if (null != s)
                                        switch (r) {
                                            case "src":
                                                a = !0;
                                                break;
                                            case "srcSet":
                                                o = !0;
                                                break;
                                            case "children":
                                            case "dangerouslySetInnerHTML":
                                                throw Error(i(137, t));
                                            default:
                                                Qc(e, t, r, s, n, null);
                                        }
                                }
                            return o && Qc(e, t, "srcSet", n.srcSet, n, null), void (a && Qc(e, t, "src", n.src, n, null));
                        case "input":
                            _c("invalid", e);
                            var l = (r = s = o = null),
                                u = null,
                                c = null;
                            for (a in n)
                                if (n.hasOwnProperty(a)) {
                                    var d = n[a];
                                    if (null != d)
                                        switch (a) {
                                            case "name":
                                                o = d;
                                                break;
                                            case "type":
                                                s = d;
                                                break;
                                            case "checked":
                                                u = d;
                                                break;
                                            case "defaultChecked":
                                                c = d;
                                                break;
                                            case "value":
                                                r = d;
                                                break;
                                            case "defaultValue":
                                                l = d;
                                                break;
                                            case "children":
                                            case "dangerouslySetInnerHTML":
                                                if (null != d) throw Error(i(137, t));
                                                break;
                                            default:
                                                Qc(e, t, a, d, n, null);
                                        }
                                }
                            return yt(e, r, l, u, c, s, o, !1), void ct(e);
                        case "select":
                            for (o in (_c("invalid", e), (a = s = r = null), n))
                                if (n.hasOwnProperty(o) && null != (l = n[o]))
                                    switch (o) {
                                        case "value":
                                            r = l;
                                            break;
                                        case "defaultValue":
                                            s = l;
                                            break;
                                        case "multiple":
                                            a = l;
                                        default:
                                            Qc(e, t, o, l, n, null);
                                    }
                            return (t = r), (n = s), (e.multiple = !!a), void (null != t ? vt(e, !!a, t, !1) : null != n && vt(e, !!a, n, !0));
                        case "textarea":
                            for (s in (_c("invalid", e), (r = o = a = null), n))
                                if (n.hasOwnProperty(s) && null != (l = n[s]))
                                    switch (s) {
                                        case "value":
                                            a = l;
                                            break;
                                        case "defaultValue":
                                            o = l;
                                            break;
                                        case "children":
                                            r = l;
                                            break;
                                        case "dangerouslySetInnerHTML":
                                            if (null != l) throw Error(i(91));
                                            break;
                                        default:
                                            Qc(e, t, s, l, n, null);
                                    }
                            return wt(e, a, o, r), void ct(e);
                        case "option":
                            for (u in n) n.hasOwnProperty(u) && null != (a = n[u]) && ("selected" === u ? (e.selected = a && "function" != typeof a && "symbol" != typeof a) : Qc(e, t, u, a, n, null));
                            return;
                        case "dialog":
                            _c("beforetoggle", e), _c("toggle", e), _c("cancel", e), _c("close", e);
                            break;
                        case "iframe":
                        case "object":
                            _c("load", e);
                            break;
                        case "video":
                        case "audio":
                            for (a = 0; a < Mc.length; a++) _c(Mc[a], e);
                            break;
                        case "image":
                            _c("error", e), _c("load", e);
                            break;
                        case "details":
                            _c("toggle", e);
                            break;
                        case "embed":
                        case "source":
                        case "link":
                            _c("error", e), _c("load", e);
                        case "area":
                        case "base":
                        case "br":
                        case "col":
                        case "hr":
                        case "keygen":
                        case "meta":
                        case "param":
                        case "track":
                        case "wbr":
                        case "menuitem":
                            for (c in n)
                                if (n.hasOwnProperty(c) && null != (a = n[c]))
                                    switch (c) {
                                        case "children":
                                        case "dangerouslySetInnerHTML":
                                            throw Error(i(137, t));
                                        default:
                                            Qc(e, t, c, a, n, null);
                                    }
                            return;
                        default:
                            if (Pt(t)) {
                                for (d in n) n.hasOwnProperty(d) && void 0 !== (a = n[d]) && Zc(e, t, d, a, n, void 0);
                                return;
                            }
                    }
                    for (l in n) n.hasOwnProperty(l) && null != (a = n[l]) && Qc(e, t, l, a, n, null);
                }
                var ed = null,
                    td = null;
                function nd(e) {
                    return 9 === e.nodeType ? e : e.ownerDocument;
                }
                function rd(e) {
                    switch (e) {
                        case "http://www.w3.org/2000/svg":
                            return 1;
                        case "http://www.w3.org/1998/Math/MathML":
                            return 2;
                        default:
                            return 0;
                    }
                }
                function ad(e, t) {
                    if (0 === e)
                        switch (t) {
                            case "svg":
                                return 1;
                            case "math":
                                return 2;
                            default:
                                return 0;
                        }
                    return 1 === e && "foreignObject" === t ? 0 : e;
                }
                function od(e, t) {
                    return (
                        "textarea" === e ||
                        "noscript" === e ||
                        "string" == typeof t.children ||
                        "number" == typeof t.children ||
                        "bigint" == typeof t.children ||
                        ("object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html)
                    );
                }
                var id = null,
                    sd = "function" == typeof setTimeout ? setTimeout : void 0,
                    ld = "function" == typeof clearTimeout ? clearTimeout : void 0,
                    ud = "function" == typeof Promise ? Promise : void 0,
                    cd =
                        "function" == typeof queueMicrotask
                            ? queueMicrotask
                            : void 0 !== ud
                            ? function (e) {
                                  return ud.resolve(null).then(e).catch(dd);
                              }
                            : sd;
                function dd(e) {
                    setTimeout(function () {
                        throw e;
                    });
                }
                function fd(e) {
                    return "head" === e;
                }
                function hd(e, t) {
                    var n = t,
                        r = 0,
                        a = 0;
                    do {
                        var o = n.nextSibling;
                        if ((e.removeChild(n), o && 8 === o.nodeType))
                            if ("/$" === (n = o.data)) {
                                if (0 < r && 8 > r) {
                                    n = r;
                                    var i = e.ownerDocument;
                                    if ((1 & n && wd(i.documentElement), 2 & n && wd(i.body), 4 & n))
                                        for (wd((n = i.head)), i = n.firstChild; i; ) {
                                            var s = i.nextSibling,
                                                l = i.nodeName;
                                            i[Fe] || "SCRIPT" === l || "STYLE" === l || ("LINK" === l && "stylesheet" === i.rel.toLowerCase()) || n.removeChild(i), (i = s);
                                        }
                                }
                                if (0 === a) return e.removeChild(o), void Pf(t);
                                a--;
                            } else "$" === n || "$?" === n || "$!" === n ? a++ : (r = n.charCodeAt(0) - 48);
                        else r = 0;
                        n = o;
                    } while (n);
                    Pf(t);
                }
                function pd(e) {
                    var t = e.firstChild;
                    for (t && 10 === t.nodeType && (t = t.nextSibling); t; ) {
                        var n = t;
                        switch (((t = t.nextSibling), n.nodeName)) {
                            case "HTML":
                            case "HEAD":
                            case "BODY":
                                pd(n), Ie(n);
                                continue;
                            case "SCRIPT":
                            case "STYLE":
                                continue;
                            case "LINK":
                                if ("stylesheet" === n.rel.toLowerCase()) continue;
                        }
                        e.removeChild(n);
                    }
                }
                function md(e) {
                    return "$!" === e.data || ("$?" === e.data && "complete" === e.ownerDocument.readyState);
                }
                function yd(e) {
                    for (; null != e; e = e.nextSibling) {
                        var t = e.nodeType;
                        if (1 === t || 3 === t) break;
                        if (8 === t) {
                            if ("$" === (t = e.data) || "$!" === t || "$?" === t || "F!" === t || "F" === t) break;
                            if ("/$" === t) return null;
                        }
                    }
                    return e;
                }
                var gd = null;
                function vd(e) {
                    e = e.previousSibling;
                    for (var t = 0; e; ) {
                        if (8 === e.nodeType) {
                            var n = e.data;
                            if ("$" === n || "$!" === n || "$?" === n) {
                                if (0 === t) return e;
                                t--;
                            } else "/$" === n && t++;
                        }
                        e = e.previousSibling;
                    }
                    return null;
                }
                function bd(e, t, n) {
                    switch (((t = nd(n)), e)) {
                        case "html":
                            if (!(e = t.documentElement)) throw Error(i(452));
                            return e;
                        case "head":
                            if (!(e = t.head)) throw Error(i(453));
                            return e;
                        case "body":
                            if (!(e = t.body)) throw Error(i(454));
                            return e;
                        default:
                            throw Error(i(451));
                    }
                }
                function wd(e) {
                    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
                    Ie(e);
                }
                var xd = new Map(),
                    kd = new Set();
                function Sd(e) {
                    return "function" == typeof e.getRootNode ? e.getRootNode() : 9 === e.nodeType ? e : e.ownerDocument;
                }
                var Ed = z.d;
                z.d = {
                    f: function () {
                        var e = Ed.f(),
                            t = Vu();
                        return e || t;
                    },
                    r: function (e) {
                        var t = Be(e);
                        null !== t && 5 === t.tag && "form" === t.type ? Oi(t) : Ed.r(e);
                    },
                    D: function (e) {
                        Ed.D(e), Td("dns-prefetch", e, null);
                    },
                    C: function (e, t) {
                        Ed.C(e, t), Td("preconnect", e, t);
                    },
                    L: function (e, t, n) {
                        Ed.L(e, t, n);
                        var r = Pd;
                        if (r && e && t) {
                            var a = 'link[rel="preload"][as="' + pt(t) + '"]';
                            "image" === t && n && n.imageSrcSet ? ((a += '[imagesrcset="' + pt(n.imageSrcSet) + '"]'), "string" == typeof n.imageSizes && (a += '[imagesizes="' + pt(n.imageSizes) + '"]')) : (a += '[href="' + pt(e) + '"]');
                            var o = a;
                            switch (t) {
                                case "style":
                                    o = Ad(e);
                                    break;
                                case "script":
                                    o = Nd(e);
                            }
                            xd.has(o) ||
                                ((e = d({ rel: "preload", href: "image" === t && n && n.imageSrcSet ? void 0 : e, as: t }, n)),
                                xd.set(o, e),
                                null !== r.querySelector(a) || ("style" === t && r.querySelector(Ld(o))) || ("script" === t && r.querySelector(Od(o))) || (Jc((t = r.createElement("link")), "link", e), He(t), r.head.appendChild(t)));
                        }
                    },
                    m: function (e, t) {
                        Ed.m(e, t);
                        var n = Pd;
                        if (n && e) {
                            var r = t && "string" == typeof t.as ? t.as : "script",
                                a = 'link[rel="modulepreload"][as="' + pt(r) + '"][href="' + pt(e) + '"]',
                                o = a;
                            switch (r) {
                                case "audioworklet":
                                case "paintworklet":
                                case "serviceworker":
                                case "sharedworker":
                                case "worker":
                                case "script":
                                    o = Nd(e);
                            }
                            if (!xd.has(o) && ((e = d({ rel: "modulepreload", href: e }, t)), xd.set(o, e), null === n.querySelector(a))) {
                                switch (r) {
                                    case "audioworklet":
                                    case "paintworklet":
                                    case "serviceworker":
                                    case "sharedworker":
                                    case "worker":
                                    case "script":
                                        if (n.querySelector(Od(o))) return;
                                }
                                Jc((r = n.createElement("link")), "link", e), He(r), n.head.appendChild(r);
                            }
                        }
                    },
                    X: function (e, t) {
                        Ed.X(e, t);
                        var n = Pd;
                        if (n && e) {
                            var r = $e(n).hoistableScripts,
                                a = Nd(e),
                                o = r.get(a);
                            o ||
                                ((o = n.querySelector(Od(a))) || ((e = d({ src: e, async: !0 }, t)), (t = xd.get(a)) && _d(e, t), He((o = n.createElement("script"))), Jc(o, "link", e), n.head.appendChild(o)),
                                (o = { type: "script", instance: o, count: 1, state: null }),
                                r.set(a, o));
                        }
                    },
                    S: function (e, t, n) {
                        Ed.S(e, t, n);
                        var r = Pd;
                        if (r && e) {
                            var a = $e(r).hoistableStyles,
                                o = Ad(e);
                            t = t || "default";
                            var i = a.get(o);
                            if (!i) {
                                var s = { loading: 0, preload: null };
                                if ((i = r.querySelector(Ld(o)))) s.loading = 5;
                                else {
                                    (e = d({ rel: "stylesheet", href: e, "data-precedence": t }, n)), (n = xd.get(o)) && Rd(e, n);
                                    var l = (i = r.createElement("link"));
                                    He(l),
                                        Jc(l, "link", e),
                                        (l._p = new Promise(function (e, t) {
                                            (l.onload = e), (l.onerror = t);
                                        })),
                                        l.addEventListener("load", function () {
                                            s.loading |= 1;
                                        }),
                                        l.addEventListener("error", function () {
                                            s.loading |= 2;
                                        }),
                                        (s.loading |= 4),
                                        zd(i, t, r);
                                }
                                (i = { type: "stylesheet", instance: i, count: 1, state: s }), a.set(o, i);
                            }
                        }
                    },
                    M: function (e, t) {
                        Ed.M(e, t);
                        var n = Pd;
                        if (n && e) {
                            var r = $e(n).hoistableScripts,
                                a = Nd(e),
                                o = r.get(a);
                            o ||
                                ((o = n.querySelector(Od(a))) || ((e = d({ src: e, async: !0, type: "module" }, t)), (t = xd.get(a)) && _d(e, t), He((o = n.createElement("script"))), Jc(o, "link", e), n.head.appendChild(o)),
                                (o = { type: "script", instance: o, count: 1, state: null }),
                                r.set(a, o));
                        }
                    },
                };
                var Pd = "undefined" == typeof document ? null : document;
                function Td(e, t, n) {
                    var r = Pd;
                    if (r && "string" == typeof t && t) {
                        var a = pt(t);
                        (a = 'link[rel="' + e + '"][href="' + a + '"]'),
                            "string" == typeof n && (a += '[crossorigin="' + n + '"]'),
                            kd.has(a) || (kd.add(a), (e = { rel: e, crossOrigin: n, href: t }), null === r.querySelector(a) && (Jc((t = r.createElement("link")), "link", e), He(t), r.head.appendChild(t)));
                    }
                }
                function Cd(e, t, n, r) {
                    var a,
                        o,
                        s,
                        l,
                        u = (u = $.current) ? Sd(u) : null;
                    if (!u) throw Error(i(446));
                    switch (e) {
                        case "meta":
                        case "title":
                            return null;
                        case "style":
                            return "string" == typeof n.precedence && "string" == typeof n.href
                                ? ((t = Ad(n.href)), (r = (n = $e(u).hoistableStyles).get(t)) || ((r = { type: "style", instance: null, count: 0, state: null }), n.set(t, r)), r)
                                : { type: "void", instance: null, count: 0, state: null };
                        case "link":
                            if ("stylesheet" === n.rel && "string" == typeof n.href && "string" == typeof n.precedence) {
                                e = Ad(n.href);
                                var c = $e(u).hoistableStyles,
                                    d = c.get(e);
                                if (
                                    (d ||
                                        ((u = u.ownerDocument || u),
                                        (d = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }),
                                        c.set(e, d),
                                        (c = u.querySelector(Ld(e))) && !c._p && ((d.instance = c), (d.state.loading = 5)),
                                        xd.has(e) ||
                                            ((n = { rel: "preload", as: "style", href: n.href, crossOrigin: n.crossOrigin, integrity: n.integrity, media: n.media, hrefLang: n.hrefLang, referrerPolicy: n.referrerPolicy }),
                                            xd.set(e, n),
                                            c ||
                                                ((a = u),
                                                (o = e),
                                                (s = n),
                                                (l = d.state),
                                                a.querySelector('link[rel="preload"][as="style"][' + o + "]")
                                                    ? (l.loading = 1)
                                                    : ((o = a.createElement("link")),
                                                      (l.preload = o),
                                                      o.addEventListener("load", function () {
                                                          return (l.loading |= 1);
                                                      }),
                                                      o.addEventListener("error", function () {
                                                          return (l.loading |= 2);
                                                      }),
                                                      Jc(o, "link", s),
                                                      He(o),
                                                      a.head.appendChild(o))))),
                                    t && null === r)
                                )
                                    throw Error(i(528, ""));
                                return d;
                            }
                            if (t && null !== r) throw Error(i(529, ""));
                            return null;
                        case "script":
                            return (
                                (t = n.async),
                                "string" == typeof (n = n.src) && t && "function" != typeof t && "symbol" != typeof t
                                    ? ((t = Nd(n)), (r = (n = $e(u).hoistableScripts).get(t)) || ((r = { type: "script", instance: null, count: 0, state: null }), n.set(t, r)), r)
                                    : { type: "void", instance: null, count: 0, state: null }
                            );
                        default:
                            throw Error(i(444, e));
                    }
                }
                function Ad(e) {
                    return 'href="' + pt(e) + '"';
                }
                function Ld(e) {
                    return 'link[rel="stylesheet"][' + e + "]";
                }
                function jd(e) {
                    return d({}, e, { "data-precedence": e.precedence, precedence: null });
                }
                function Nd(e) {
                    return '[src="' + pt(e) + '"]';
                }
                function Od(e) {
                    return "script[async]" + e;
                }
                function Md(e, t, n) {
                    if ((t.count++, null === t.instance))
                        switch (t.type) {
                            case "style":
                                var r = e.querySelector('style[data-href~="' + pt(n.href) + '"]');
                                if (r) return (t.instance = r), He(r), r;
                                var a = d({}, n, { "data-href": n.href, "data-precedence": n.precedence, href: null, precedence: null });
                                return He((r = (e.ownerDocument || e).createElement("style"))), Jc(r, "style", a), zd(r, n.precedence, e), (t.instance = r);
                            case "stylesheet":
                                a = Ad(n.href);
                                var o = e.querySelector(Ld(a));
                                if (o) return (t.state.loading |= 4), (t.instance = o), He(o), o;
                                (r = jd(n)), (a = xd.get(a)) && Rd(r, a), He((o = (e.ownerDocument || e).createElement("link")));
                                var s = o;
                                return (
                                    (s._p = new Promise(function (e, t) {
                                        (s.onload = e), (s.onerror = t);
                                    })),
                                    Jc(o, "link", r),
                                    (t.state.loading |= 4),
                                    zd(o, n.precedence, e),
                                    (t.instance = o)
                                );
                            case "script":
                                return (
                                    (o = Nd(n.src)),
                                    (a = e.querySelector(Od(o)))
                                        ? ((t.instance = a), He(a), a)
                                        : ((r = n), (a = xd.get(o)) && _d((r = d({}, n)), a), He((a = (e = e.ownerDocument || e).createElement("script"))), Jc(a, "link", r), e.head.appendChild(a), (t.instance = a))
                                );
                            case "void":
                                return null;
                            default:
                                throw Error(i(443, t.type));
                        }
                    else "stylesheet" === t.type && !(4 & t.state.loading) && ((r = t.instance), (t.state.loading |= 4), zd(r, n.precedence, e));
                    return t.instance;
                }
                function zd(e, t, n) {
                    for (var r = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), a = r.length ? r[r.length - 1] : null, o = a, i = 0; i < r.length; i++) {
                        var s = r[i];
                        if (s.dataset.precedence === t) o = s;
                        else if (o !== a) break;
                    }
                    o ? o.parentNode.insertBefore(e, o.nextSibling) : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild);
                }
                function Rd(e, t) {
                    null == e.crossOrigin && (e.crossOrigin = t.crossOrigin), null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy), null == e.title && (e.title = t.title);
                }
                function _d(e, t) {
                    null == e.crossOrigin && (e.crossOrigin = t.crossOrigin), null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy), null == e.integrity && (e.integrity = t.integrity);
                }
                var Dd = null;
                function Fd(e, t, n) {
                    if (null === Dd) {
                        var r = new Map(),
                            a = (Dd = new Map());
                        a.set(n, r);
                    } else (r = (a = Dd).get(n)) || ((r = new Map()), a.set(n, r));
                    if (r.has(e)) return r;
                    for (r.set(e, null), n = n.getElementsByTagName(e), a = 0; a < n.length; a++) {
                        var o = n[a];
                        if (!(o[Fe] || o[Ne] || ("link" === e && "stylesheet" === o.getAttribute("rel"))) && "http://www.w3.org/2000/svg" !== o.namespaceURI) {
                            var i = o.getAttribute(t) || "";
                            i = e + i;
                            var s = r.get(i);
                            s ? s.push(o) : r.set(i, [o]);
                        }
                    }
                    return r;
                }
                function Id(e, t, n) {
                    (e = e.ownerDocument || e).head.insertBefore(n, "title" === t ? e.querySelector("head > title") : null);
                }
                function Vd(e) {
                    return !!("stylesheet" !== e.type || 3 & e.state.loading);
                }
                var Bd = null;
                function Ud() {}
                function $d() {
                    if ((this.count--, 0 === this.count))
                        if (this.stylesheets) Wd(this, this.stylesheets);
                        else if (this.unsuspend) {
                            var e = this.unsuspend;
                            (this.unsuspend = null), e();
                        }
                }
                var Hd = null;
                function Wd(e, t) {
                    (e.stylesheets = null), null !== e.unsuspend && (e.count++, (Hd = new Map()), t.forEach(Yd, e), (Hd = null), $d.call(e));
                }
                function Yd(e, t) {
                    if (!(4 & t.state.loading)) {
                        var n = Hd.get(e);
                        if (n) var r = n.get(null);
                        else {
                            (n = new Map()), Hd.set(e, n);
                            for (var a = e.querySelectorAll("link[data-precedence],style[data-precedence]"), o = 0; o < a.length; o++) {
                                var i = a[o];
                                ("LINK" !== i.nodeName && "not all" === i.getAttribute("media")) || (n.set(i.dataset.precedence, i), (r = i));
                            }
                            r && n.set(null, r);
                        }
                        (i = (a = t.instance).getAttribute("data-precedence")),
                            (o = n.get(i) || r) === r && n.set(null, a),
                            n.set(i, a),
                            this.count++,
                            (r = $d.bind(this)),
                            a.addEventListener("load", r),
                            a.addEventListener("error", r),
                            o ? o.parentNode.insertBefore(a, o.nextSibling) : (e = 9 === e.nodeType ? e.head : e).insertBefore(a, e.firstChild),
                            (t.state.loading |= 4);
                    }
                }
                var qd = { $$typeof: w, Provider: null, Consumer: null, _currentValue: R, _currentValue2: R, _threadCount: 0 };
                function Gd(e, t, n, r, a, o, i, s) {
                    (this.tag = 1),
                        (this.containerInfo = e),
                        (this.pingCache = this.current = this.pendingChildren = null),
                        (this.timeoutHandle = -1),
                        (this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null),
                        (this.callbackPriority = 0),
                        (this.expirationTimes = Se(-1)),
                        (this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
                        (this.entanglements = Se(0)),
                        (this.hiddenUpdates = Se(null)),
                        (this.identifierPrefix = r),
                        (this.onUncaughtError = a),
                        (this.onCaughtError = o),
                        (this.onRecoverableError = i),
                        (this.pooledCache = null),
                        (this.pooledCacheLanes = 0),
                        (this.formState = s),
                        (this.incompleteTransitions = new Map());
                }
                function Xd(e, t, n, r, a, o) {
                    (a = (function (e) {
                        return e ? (e = Mr) : Mr;
                    })(a)),
                        null === r.context ? (r.context = a) : (r.pendingContext = a),
                        ((r = ro(t)).payload = { element: n }),
                        null !== (o = void 0 === o ? null : o) && (r.callback = o),
                        null !== (n = ao(e, r, t)) && (Ru(n, 0, t), oo(n, e, t));
                }
                function Kd(e, t) {
                    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                        var n = e.retryLane;
                        e.retryLane = 0 !== n && n < t ? n : t;
                    }
                }
                function Qd(e, t) {
                    Kd(e, t), (e = e.alternate) && Kd(e, t);
                }
                function Zd(e) {
                    if (13 === e.tag) {
                        var t = jr(e, 67108864);
                        null !== t && Ru(t, 0, 67108864), Qd(e, 67108864);
                    }
                }
                var Jd = !0;
                function ef(e, t, n, r) {
                    var a = M.T;
                    M.T = null;
                    var o = z.p;
                    try {
                        (z.p = 2), nf(e, t, n, r);
                    } finally {
                        (z.p = o), (M.T = a);
                    }
                }
                function tf(e, t, n, r) {
                    var a = M.T;
                    M.T = null;
                    var o = z.p;
                    try {
                        (z.p = 8), nf(e, t, n, r);
                    } finally {
                        (z.p = o), (M.T = a);
                    }
                }
                function nf(e, t, n, r) {
                    if (Jd) {
                        var a = rf(r);
                        if (null === a) Bc(e, t, r, af, n), yf(e, r);
                        else if (
                            (function (e, t, n, r, a) {
                                switch (t) {
                                    case "focusin":
                                        return (uf = gf(uf, e, t, n, r, a)), !0;
                                    case "dragenter":
                                        return (cf = gf(cf, e, t, n, r, a)), !0;
                                    case "mouseover":
                                        return (df = gf(df, e, t, n, r, a)), !0;
                                    case "pointerover":
                                        var o = a.pointerId;
                                        return ff.set(o, gf(ff.get(o) || null, e, t, n, r, a)), !0;
                                    case "gotpointercapture":
                                        return (o = a.pointerId), hf.set(o, gf(hf.get(o) || null, e, t, n, r, a)), !0;
                                }
                                return !1;
                            })(a, e, t, n, r)
                        )
                            r.stopPropagation();
                        else if ((yf(e, r), 4 & t && -1 < mf.indexOf(e))) {
                            for (; null !== a; ) {
                                var o = Be(a);
                                if (null !== o)
                                    switch (o.tag) {
                                        case 3:
                                            if ((o = o.stateNode).current.memoizedState.isDehydrated) {
                                                var i = ge(o.pendingLanes);
                                                if (0 !== i) {
                                                    var s = o;
                                                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; i; ) {
                                                        var l = 1 << (31 - fe(i));
                                                        (s.entanglements[1] |= l), (i &= ~l);
                                                    }
                                                    xc(o), !(6 & tu) && ((xu = ee() + 500), kc(0, !1));
                                                }
                                            }
                                            break;
                                        case 13:
                                            null !== (s = jr(o, 2)) && Ru(s, 0, 2), Vu(), Qd(o, 2);
                                    }
                                if ((null === (o = rf(r)) && Bc(e, t, r, af, n), o === a)) break;
                                a = o;
                            }
                            null !== a && r.stopPropagation();
                        } else Bc(e, t, r, null, n);
                    }
                }
                function rf(e) {
                    return of((e = jt(e)));
                }
                var af = null;
                function of(e) {
                    if (((af = null), null !== (e = Ve(e)))) {
                        var t = s(e);
                        if (null === t) e = null;
                        else {
                            var n = t.tag;
                            if (13 === n) {
                                if (null !== (e = l(t))) return e;
                                e = null;
                            } else if (3 === n) {
                                if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
                                e = null;
                            } else t !== e && (e = null);
                        }
                    }
                    return (af = e), null;
                }
                function sf(e) {
                    switch (e) {
                        case "beforetoggle":
                        case "cancel":
                        case "click":
                        case "close":
                        case "contextmenu":
                        case "copy":
                        case "cut":
                        case "auxclick":
                        case "dblclick":
                        case "dragend":
                        case "dragstart":
                        case "drop":
                        case "focusin":
                        case "focusout":
                        case "input":
                        case "invalid":
                        case "keydown":
                        case "keypress":
                        case "keyup":
                        case "mousedown":
                        case "mouseup":
                        case "paste":
                        case "pause":
                        case "play":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointerup":
                        case "ratechange":
                        case "reset":
                        case "resize":
                        case "seeked":
                        case "submit":
                        case "toggle":
                        case "touchcancel":
                        case "touchend":
                        case "touchstart":
                        case "volumechange":
                        case "change":
                        case "selectionchange":
                        case "textInput":
                        case "compositionstart":
                        case "compositionend":
                        case "compositionupdate":
                        case "beforeblur":
                        case "afterblur":
                        case "beforeinput":
                        case "blur":
                        case "fullscreenchange":
                        case "focus":
                        case "hashchange":
                        case "popstate":
                        case "select":
                        case "selectstart":
                            return 2;
                        case "drag":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "mousemove":
                        case "mouseout":
                        case "mouseover":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "scroll":
                        case "touchmove":
                        case "wheel":
                        case "mouseenter":
                        case "mouseleave":
                        case "pointerenter":
                        case "pointerleave":
                            return 8;
                        case "message":
                            switch (te()) {
                                case ne:
                                    return 2;
                                case re:
                                    return 8;
                                case ae:
                                case oe:
                                    return 32;
                                case ie:
                                    return 268435456;
                                default:
                                    return 32;
                            }
                        default:
                            return 32;
                    }
                }
                var lf = !1,
                    uf = null,
                    cf = null,
                    df = null,
                    ff = new Map(),
                    hf = new Map(),
                    pf = [],
                    mf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
                        " "
                    );
                function yf(e, t) {
                    switch (e) {
                        case "focusin":
                        case "focusout":
                            uf = null;
                            break;
                        case "dragenter":
                        case "dragleave":
                            cf = null;
                            break;
                        case "mouseover":
                        case "mouseout":
                            df = null;
                            break;
                        case "pointerover":
                        case "pointerout":
                            ff.delete(t.pointerId);
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                            hf.delete(t.pointerId);
                    }
                }
                function gf(e, t, n, r, a, o) {
                    return null === e || e.nativeEvent !== o
                        ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [a] }), null !== t && null !== (t = Be(t)) && Zd(t), e)
                        : ((e.eventSystemFlags |= r), (t = e.targetContainers), null !== a && -1 === t.indexOf(a) && t.push(a), e);
                }
                function vf(e) {
                    var t = Ve(e.target);
                    if (null !== t) {
                        var n = s(t);
                        if (null !== n)
                            if (13 === (t = n.tag)) {
                                if (null !== (t = l(n)))
                                    return (
                                        (e.blockedOn = t),
                                        void (function (e) {
                                            var t = z.p;
                                            try {
                                                return (
                                                    (z.p = e),
                                                    (function () {
                                                        if (13 === n.tag) {
                                                            var e = Mu();
                                                            e = Ce(e);
                                                            var t = jr(n, e);
                                                            null !== t && Ru(t, 0, e), Qd(n, e);
                                                        }
                                                    })()
                                                );
                                            } finally {
                                                z.p = t;
                                            }
                                        })(e.priority)
                                    );
                            } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
                    }
                    e.blockedOn = null;
                }
                function bf(e) {
                    if (null !== e.blockedOn) return !1;
                    for (var t = e.targetContainers; 0 < t.length; ) {
                        var n = rf(e.nativeEvent);
                        if (null !== n) return null !== (t = Be(n)) && Zd(t), (e.blockedOn = n), !1;
                        var r = new (n = e.nativeEvent).constructor(n.type, n);
                        (Lt = r), n.target.dispatchEvent(r), (Lt = null), t.shift();
                    }
                    return !0;
                }
                function wf(e, t, n) {
                    bf(e) && n.delete(t);
                }
                function xf() {
                    (lf = !1), null !== uf && bf(uf) && (uf = null), null !== cf && bf(cf) && (cf = null), null !== df && bf(df) && (df = null), ff.forEach(wf), hf.forEach(wf);
                }
                function kf(e, t) {
                    e.blockedOn === t && ((e.blockedOn = null), lf || ((lf = !0), r.unstable_scheduleCallback(r.unstable_NormalPriority, xf)));
                }
                var Sf = null;
                function Ef(e) {
                    Sf !== e &&
                        ((Sf = e),
                        r.unstable_scheduleCallback(r.unstable_NormalPriority, function () {
                            Sf === e && (Sf = null);
                            for (var t = 0; t < e.length; t += 3) {
                                var n = e[t],
                                    r = e[t + 1],
                                    a = e[t + 2];
                                if ("function" != typeof r) {
                                    if (null === of(r || n)) continue;
                                    break;
                                }
                                var o = Be(n);
                                null !== o && (e.splice(t, 3), (t -= 3), ji(o, { pending: !0, data: a, method: n.method, action: r }, r, a));
                            }
                        }));
                }
                function Pf(e) {
                    function t(t) {
                        return kf(t, e);
                    }
                    null !== uf && kf(uf, e), null !== cf && kf(cf, e), null !== df && kf(df, e), ff.forEach(t), hf.forEach(t);
                    for (var n = 0; n < pf.length; n++) {
                        var r = pf[n];
                        r.blockedOn === e && (r.blockedOn = null);
                    }
                    for (; 0 < pf.length && null === (n = pf[0]).blockedOn; ) vf(n), null === n.blockedOn && pf.shift();
                    if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
                        for (r = 0; r < n.length; r += 3) {
                            var a = n[r],
                                o = n[r + 1],
                                i = a[Oe] || null;
                            if ("function" == typeof o) i || Ef(n);
                            else if (i) {
                                var s = null;
                                if (o && o.hasAttribute("formAction")) {
                                    if (((a = o), (i = o[Oe] || null))) s = i.formAction;
                                    else if (null !== of(a)) continue;
                                } else s = i.action;
                                "function" == typeof s ? (n[r + 1] = s) : (n.splice(r, 3), (r -= 3)), Ef(n);
                            }
                        }
                }
                function Tf(e) {
                    this._internalRoot = e;
                }
                function Cf(e) {
                    this._internalRoot = e;
                }
                (Cf.prototype.render = Tf.prototype.render = function (e) {
                    var t = this._internalRoot;
                    if (null === t) throw Error(i(409));
                    Xd(t.current, Mu(), e, t, null, null);
                }),
                    (Cf.prototype.unmount = Tf.prototype.unmount = function () {
                        var e = this._internalRoot;
                        if (null !== e) {
                            this._internalRoot = null;
                            var t = e.containerInfo;
                            Xd(e.current, 2, null, e, null, null), Vu(), (t[Me] = null);
                        }
                    }),
                    (Cf.prototype.unstable_scheduleHydration = function (e) {
                        if (e) {
                            var t = Le();
                            e = { blockedOn: null, target: e, priority: t };
                            for (var n = 0; n < pf.length && 0 !== t && t < pf[n].priority; n++);
                            pf.splice(n, 0, e), 0 === n && vf(e);
                        }
                    });
                var Af = a.version;
                if ("19.1.0" !== Af) throw Error(i(527, Af, "19.1.0"));
                z.findDOMNode = function (e) {
                    var t = e._reactInternals;
                    if (void 0 === t) {
                        if ("function" == typeof e.render) throw Error(i(188));
                        throw ((e = Object.keys(e).join(",")), Error(i(268, e)));
                    }
                    return (
                        (e = (function (e) {
                            var t = e.alternate;
                            if (!t) {
                                if (null === (t = s(e))) throw Error(i(188));
                                return t !== e ? null : e;
                            }
                            for (var n = e, r = t; ; ) {
                                var a = n.return;
                                if (null === a) break;
                                var o = a.alternate;
                                if (null === o) {
                                    if (null !== (r = a.return)) {
                                        n = r;
                                        continue;
                                    }
                                    break;
                                }
                                if (a.child === o.child) {
                                    for (o = a.child; o; ) {
                                        if (o === n) return u(a), e;
                                        if (o === r) return u(a), t;
                                        o = o.sibling;
                                    }
                                    throw Error(i(188));
                                }
                                if (n.return !== r.return) (n = a), (r = o);
                                else {
                                    for (var l = !1, c = a.child; c; ) {
                                        if (c === n) {
                                            (l = !0), (n = a), (r = o);
                                            break;
                                        }
                                        if (c === r) {
                                            (l = !0), (r = a), (n = o);
                                            break;
                                        }
                                        c = c.sibling;
                                    }
                                    if (!l) {
                                        for (c = o.child; c; ) {
                                            if (c === n) {
                                                (l = !0), (n = o), (r = a);
                                                break;
                                            }
                                            if (c === r) {
                                                (l = !0), (r = o), (n = a);
                                                break;
                                            }
                                            c = c.sibling;
                                        }
                                        if (!l) throw Error(i(189));
                                    }
                                }
                                if (n.alternate !== r) throw Error(i(190));
                            }
                            if (3 !== n.tag) throw Error(i(188));
                            return n.stateNode.current === n ? e : t;
                        })(t)),
                        null === (e = null !== e ? c(e) : null) ? null : e.stateNode
                    );
                };
                var Lf = { bundleType: 0, version: "19.1.0", rendererPackageName: "react-dom", currentDispatcherRef: M, reconcilerVersion: "19.1.0" };
                if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                    var jf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                    if (!jf.isDisabled && jf.supportsFiber)
                        try {
                            (ue = jf.inject(Lf)), (ce = jf);
                        } catch (e) {}
                }
                t.createRoot = function (e, t) {
                    if (!(n = e) || (1 !== n.nodeType && 9 !== n.nodeType && 11 !== n.nodeType)) throw Error(i(299));
                    var n,
                        r = !1,
                        a = "",
                        o = gs,
                        s = vs,
                        l = bs;
                    return (
                        null != t &&
                            (!0 === t.unstable_strictMode && (r = !0),
                            void 0 !== t.identifierPrefix && (a = t.identifierPrefix),
                            void 0 !== t.onUncaughtError && (o = t.onUncaughtError),
                            void 0 !== t.onCaughtError && (s = t.onCaughtError),
                            void 0 !== t.onRecoverableError && (l = t.onRecoverableError),
                            void 0 !== t.unstable_transitionCallbacks && t.unstable_transitionCallbacks),
                        (t = (function (e, t, n, r, a, o, i, s, l, u, c, d) {
                            return (
                                (e = new Gd(e, t, n, i, s, l, u, d)),
                                (t = 1),
                                !0 === o && (t |= 24),
                                (o = Rr(3, null, null, t)),
                                (e.current = o),
                                (o.stateNode = e),
                                (t = Oa()).refCount++,
                                (e.pooledCache = t),
                                t.refCount++,
                                (o.memoizedState = { element: r, isDehydrated: n, cache: t }),
                                to(o),
                                e
                            );
                        })(e, 1, !1, null, 0, r, a, o, s, l, 0, null)),
                        (e[Me] = t.current),
                        Ic(e),
                        new Tf(t)
                    );
                };
            },
            314: (e) => {
                e.exports = function (e) {
                    var t = [];
                    return (
                        (t.toString = function () {
                            return this.map(function (t) {
                                var n = "",
                                    r = void 0 !== t[5];
                                return (
                                    t[4] && (n += "@supports (".concat(t[4], ") {")),
                                    t[2] && (n += "@media ".concat(t[2], " {")),
                                    r && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")),
                                    (n += e(t)),
                                    r && (n += "}"),
                                    t[2] && (n += "}"),
                                    t[4] && (n += "}"),
                                    n
                                );
                            }).join("");
                        }),
                        (t.i = function (e, n, r, a, o) {
                            "string" == typeof e && (e = [[null, e, void 0]]);
                            var i = {};
                            if (r)
                                for (var s = 0; s < this.length; s++) {
                                    var l = this[s][0];
                                    null != l && (i[l] = !0);
                                }
                            for (var u = 0; u < e.length; u++) {
                                var c = [].concat(e[u]);
                                (r && i[c[0]]) ||
                                    (void 0 !== o && (void 0 === c[5] || (c[1] = "@layer".concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {").concat(c[1], "}")), (c[5] = o)),
                                    n && (c[2] ? ((c[1] = "@media ".concat(c[2], " {").concat(c[1], "}")), (c[2] = n)) : (c[2] = n)),
                                    a && (c[4] ? ((c[1] = "@supports (".concat(c[4], ") {").concat(c[1], "}")), (c[4] = a)) : (c[4] = "".concat(a))),
                                    t.push(c));
                            }
                        }),
                        t
                    );
                };
            },
            338: (e, t, n) => {
                !(function e() {
                    if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
                        try {
                            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
                        } catch (e) {
                            console.error(e);
                        }
                })(),
                    (e.exports = n(247));
            },
            477: (e, t) => {
                function n(e, t) {
                    var n = e.length;
                    e.push(t);
                    e: for (; 0 < n; ) {
                        var r = (n - 1) >>> 1,
                            a = e[r];
                        if (!(0 < o(a, t))) break e;
                        (e[r] = t), (e[n] = a), (n = r);
                    }
                }
                function r(e) {
                    return 0 === e.length ? null : e[0];
                }
                function a(e) {
                    if (0 === e.length) return null;
                    var t = e[0],
                        n = e.pop();
                    if (n !== t) {
                        e[0] = n;
                        e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
                            var s = 2 * (r + 1) - 1,
                                l = e[s],
                                u = s + 1,
                                c = e[u];
                            if (0 > o(l, n)) u < a && 0 > o(c, l) ? ((e[r] = c), (e[u] = n), (r = u)) : ((e[r] = l), (e[s] = n), (r = s));
                            else {
                                if (!(u < a && 0 > o(c, n))) break e;
                                (e[r] = c), (e[u] = n), (r = u);
                            }
                        }
                    }
                    return t;
                }
                function o(e, t) {
                    var n = e.sortIndex - t.sortIndex;
                    return 0 !== n ? n : e.id - t.id;
                }
                if (((t.unstable_now = void 0), "object" == typeof performance && "function" == typeof performance.now)) {
                    var i = performance;
                    t.unstable_now = function () {
                        return i.now();
                    };
                } else {
                    var s = Date,
                        l = s.now();
                    t.unstable_now = function () {
                        return s.now() - l;
                    };
                }
                var u = [],
                    c = [],
                    d = 1,
                    f = null,
                    h = 3,
                    p = !1,
                    m = !1,
                    y = !1,
                    g = !1,
                    v = "function" == typeof setTimeout ? setTimeout : null,
                    b = "function" == typeof clearTimeout ? clearTimeout : null,
                    w = "undefined" != typeof setImmediate ? setImmediate : null;
                function x(e) {
                    for (var t = r(c); null !== t; ) {
                        if (null === t.callback) a(c);
                        else {
                            if (!(t.startTime <= e)) break;
                            a(c), (t.sortIndex = t.expirationTime), n(u, t);
                        }
                        t = r(c);
                    }
                }
                function k(e) {
                    if (((y = !1), x(e), !m))
                        if (null !== r(u)) (m = !0), E || ((E = !0), S());
                        else {
                            var t = r(c);
                            null !== t && O(k, t.startTime - e);
                        }
                }
                var S,
                    E = !1,
                    P = -1,
                    T = 5,
                    C = -1;
                function A() {
                    return !(!g && t.unstable_now() - C < T);
                }
                function L() {
                    if (((g = !1), E)) {
                        var e = t.unstable_now();
                        C = e;
                        var n = !0;
                        try {
                            e: {
                                (m = !1), y && ((y = !1), b(P), (P = -1)), (p = !0);
                                var o = h;
                                try {
                                    t: {
                                        for (x(e), f = r(u); null !== f && !(f.expirationTime > e && A()); ) {
                                            var i = f.callback;
                                            if ("function" == typeof i) {
                                                (f.callback = null), (h = f.priorityLevel);
                                                var s = i(f.expirationTime <= e);
                                                if (((e = t.unstable_now()), "function" == typeof s)) {
                                                    (f.callback = s), x(e), (n = !0);
                                                    break t;
                                                }
                                                f === r(u) && a(u), x(e);
                                            } else a(u);
                                            f = r(u);
                                        }
                                        if (null !== f) n = !0;
                                        else {
                                            var l = r(c);
                                            null !== l && O(k, l.startTime - e), (n = !1);
                                        }
                                    }
                                    break e;
                                } finally {
                                    (f = null), (h = o), (p = !1);
                                }
                                n = void 0;
                            }
                        } finally {
                            n ? S() : (E = !1);
                        }
                    }
                }
                if ("function" == typeof w)
                    S = function () {
                        w(L);
                    };
                else if ("undefined" != typeof MessageChannel) {
                    var j = new MessageChannel(),
                        N = j.port2;
                    (j.port1.onmessage = L),
                        (S = function () {
                            N.postMessage(null);
                        });
                } else
                    S = function () {
                        v(L, 0);
                    };
                function O(e, n) {
                    P = v(function () {
                        e(t.unstable_now());
                    }, n);
                }
                (t.unstable_IdlePriority = 5),
                    (t.unstable_ImmediatePriority = 1),
                    (t.unstable_LowPriority = 4),
                    (t.unstable_NormalPriority = 3),
                    (t.unstable_Profiling = null),
                    (t.unstable_UserBlockingPriority = 2),
                    (t.unstable_cancelCallback = function (e) {
                        e.callback = null;
                    }),
                    (t.unstable_forceFrameRate = function (e) {
                        0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : (T = 0 < e ? Math.floor(1e3 / e) : 5);
                    }),
                    (t.unstable_getCurrentPriorityLevel = function () {
                        return h;
                    }),
                    (t.unstable_next = function (e) {
                        switch (h) {
                            case 1:
                            case 2:
                            case 3:
                                var t = 3;
                                break;
                            default:
                                t = h;
                        }
                        var n = h;
                        h = t;
                        try {
                            return e();
                        } finally {
                            h = n;
                        }
                    }),
                    (t.unstable_requestPaint = function () {
                        g = !0;
                    }),
                    (t.unstable_runWithPriority = function (e, t) {
                        switch (e) {
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                break;
                            default:
                                e = 3;
                        }
                        var n = h;
                        h = e;
                        try {
                            return t();
                        } finally {
                            h = n;
                        }
                    }),
                    (t.unstable_scheduleCallback = function (e, a, o) {
                        var i = t.unstable_now();
                        switch (((o = "object" == typeof o && null !== o && "number" == typeof (o = o.delay) && 0 < o ? i + o : i), e)) {
                            case 1:
                                var s = -1;
                                break;
                            case 2:
                                s = 250;
                                break;
                            case 5:
                                s = 1073741823;
                                break;
                            case 4:
                                s = 1e4;
                                break;
                            default:
                                s = 5e3;
                        }
                        return (
                            (e = { id: d++, callback: a, priorityLevel: e, startTime: o, expirationTime: (s = o + s), sortIndex: -1 }),
                            o > i ? ((e.sortIndex = o), n(c, e), null === r(u) && e === r(c) && (y ? (b(P), (P = -1)) : (y = !0), O(k, o - i))) : ((e.sortIndex = s), n(u, e), m || p || ((m = !0), E || ((E = !0), S()))),
                            e
                        );
                    }),
                    (t.unstable_shouldYield = A),
                    (t.unstable_wrapCallback = function (e) {
                        var t = h;
                        return function () {
                            var n = h;
                            h = t;
                            try {
                                return e.apply(this, arguments);
                            } finally {
                                h = n;
                            }
                        };
                    });
            },
            540: (e, t, n) => {
                e.exports = n(869);
            },
            601: (e) => {
                e.exports = function (e) {
                    return e[1];
                };
            },
            659: (e) => {
                var t = {};
                e.exports = function (e, n) {
                    var r = (function (e) {
                        if (void 0 === t[e]) {
                            var n = document.querySelector(e);
                            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                                try {
                                    n = n.contentDocument.head;
                                } catch (e) {
                                    n = null;
                                }
                            t[e] = n;
                        }
                        return t[e];
                    })(e);
                    if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    r.appendChild(n);
                };
            },
            698: (e, t) => {
                var n = Symbol.for("react.transitional.element");
                function r(e, t, r) {
                    var a = null;
                    if ((void 0 !== r && (a = "" + r), void 0 !== t.key && (a = "" + t.key), "key" in t)) for (var o in ((r = {}), t)) "key" !== o && (r[o] = t[o]);
                    else r = t;
                    return (t = r.ref), { $$typeof: n, type: e, key: a, ref: void 0 !== t ? t : null, props: r };
                }
                Symbol.for("react.fragment"), (t.jsx = r), (t.jsxs = r);
            },
            825: (e) => {
                e.exports = function (e) {
                    if ("undefined" == typeof document) return { update: function () {}, remove: function () {} };
                    var t = e.insertStyleElement(e);
                    return {
                        update: function (n) {
                            !(function (e, t, n) {
                                var r = "";
                                n.supports && (r += "@supports (".concat(n.supports, ") {")), n.media && (r += "@media ".concat(n.media, " {"));
                                var a = void 0 !== n.layer;
                                a && (r += "@layer".concat(n.layer.length > 0 ? " ".concat(n.layer) : "", " {")), (r += n.css), a && (r += "}"), n.media && (r += "}"), n.supports && (r += "}");
                                var o = n.sourceMap;
                                o && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")), t.styleTagTransform(r, e, t.options);
                            })(t, e, n);
                        },
                        remove: function () {
                            !(function (e) {
                                if (null === e.parentNode) return !1;
                                e.parentNode.removeChild(e);
                            })(t);
                        },
                    };
                };
            },
            848: (e, t, n) => {
                e.exports = n(698);
            },
            869: (e, t) => {
                var n = Symbol.for("react.transitional.element"),
                    r = Symbol.for("react.portal"),
                    a = Symbol.for("react.fragment"),
                    o = Symbol.for("react.strict_mode"),
                    i = Symbol.for("react.profiler"),
                    s = Symbol.for("react.consumer"),
                    l = Symbol.for("react.context"),
                    u = Symbol.for("react.forward_ref"),
                    c = Symbol.for("react.suspense"),
                    d = Symbol.for("react.memo"),
                    f = Symbol.for("react.lazy"),
                    h = Symbol.iterator,
                    p = {
                        isMounted: function () {
                            return !1;
                        },
                        enqueueForceUpdate: function () {},
                        enqueueReplaceState: function () {},
                        enqueueSetState: function () {},
                    },
                    m = Object.assign,
                    y = {};
                function g(e, t, n) {
                    (this.props = e), (this.context = t), (this.refs = y), (this.updater = n || p);
                }
                function v() {}
                function b(e, t, n) {
                    (this.props = e), (this.context = t), (this.refs = y), (this.updater = n || p);
                }
                (g.prototype.isReactComponent = {}),
                    (g.prototype.setState = function (e, t) {
                        if ("object" != typeof e && "function" != typeof e && null != e) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
                        this.updater.enqueueSetState(this, e, t, "setState");
                    }),
                    (g.prototype.forceUpdate = function (e) {
                        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
                    }),
                    (v.prototype = g.prototype);
                var w = (b.prototype = new v());
                (w.constructor = b), m(w, g.prototype), (w.isPureReactComponent = !0);
                var x = Array.isArray,
                    k = { H: null, A: null, T: null, S: null, V: null },
                    S = Object.prototype.hasOwnProperty;
                function E(e, t, r, a, o, i) {
                    return (r = i.ref), { $$typeof: n, type: e, key: t, ref: void 0 !== r ? r : null, props: i };
                }
                function P(e) {
                    return "object" == typeof e && null !== e && e.$$typeof === n;
                }
                var T = /\/+/g;
                function C(e, t) {
                    return "object" == typeof e && null !== e && null != e.key
                        ? ((n = "" + e.key),
                          (r = { "=": "=0", ":": "=2" }),
                          "$" +
                              n.replace(/[=:]/g, function (e) {
                                  return r[e];
                              }))
                        : t.toString(36);
                    var n, r;
                }
                function A() {}
                function L(e, t, a, o, i) {
                    var s = typeof e;
                    ("undefined" !== s && "boolean" !== s) || (e = null);
                    var l,
                        u,
                        c = !1;
                    if (null === e) c = !0;
                    else
                        switch (s) {
                            case "bigint":
                            case "string":
                            case "number":
                                c = !0;
                                break;
                            case "object":
                                switch (e.$$typeof) {
                                    case n:
                                    case r:
                                        c = !0;
                                        break;
                                    case f:
                                        return L((c = e._init)(e._payload), t, a, o, i);
                                }
                        }
                    if (c)
                        return (
                            (i = i(e)),
                            (c = "" === o ? "." + C(e, 0) : o),
                            x(i)
                                ? ((a = ""),
                                  null != c && (a = c.replace(T, "$&/") + "/"),
                                  L(i, t, a, "", function (e) {
                                      return e;
                                  }))
                                : null != i && (P(i) && ((l = i), (u = a + (null == i.key || (e && e.key === i.key) ? "" : ("" + i.key).replace(T, "$&/") + "/") + c), (i = E(l.type, u, void 0, 0, 0, l.props))), t.push(i)),
                            1
                        );
                    c = 0;
                    var d,
                        p = "" === o ? "." : o + ":";
                    if (x(e)) for (var m = 0; m < e.length; m++) c += L((o = e[m]), t, a, (s = p + C(o, m)), i);
                    else if ("function" == typeof (m = null === (d = e) || "object" != typeof d ? null : "function" == typeof (d = (h && d[h]) || d["@@iterator"]) ? d : null))
                        for (e = m.call(e), m = 0; !(o = e.next()).done; ) c += L((o = o.value), t, a, (s = p + C(o, m++)), i);
                    else if ("object" === s) {
                        if ("function" == typeof e.then)
                            return L(
                                (function (e) {
                                    switch (e.status) {
                                        case "fulfilled":
                                            return e.value;
                                        case "rejected":
                                            throw e.reason;
                                        default:
                                            switch (
                                                ("string" == typeof e.status
                                                    ? e.then(A, A)
                                                    : ((e.status = "pending"),
                                                      e.then(
                                                          function (t) {
                                                              "pending" === e.status && ((e.status = "fulfilled"), (e.value = t));
                                                          },
                                                          function (t) {
                                                              "pending" === e.status && ((e.status = "rejected"), (e.reason = t));
                                                          }
                                                      )),
                                                e.status)
                                            ) {
                                                case "fulfilled":
                                                    return e.value;
                                                case "rejected":
                                                    throw e.reason;
                                            }
                                    }
                                    throw e;
                                })(e),
                                t,
                                a,
                                o,
                                i
                            );
                        throw (
                            ((t = String(e)),
                            Error(
                                "Objects are not valid as a React child (found: " +
                                    ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) +
                                    "). If you meant to render a collection of children, use an array instead."
                            ))
                        );
                    }
                    return c;
                }
                function j(e, t, n) {
                    if (null == e) return e;
                    var r = [],
                        a = 0;
                    return (
                        L(e, r, "", "", function (e) {
                            return t.call(n, e, a++);
                        }),
                        r
                    );
                }
                function N(e) {
                    if (-1 === e._status) {
                        var t = e._result;
                        (t = t()).then(
                            function (t) {
                                (0 !== e._status && -1 !== e._status) || ((e._status = 1), (e._result = t));
                            },
                            function (t) {
                                (0 !== e._status && -1 !== e._status) || ((e._status = 2), (e._result = t));
                            }
                        ),
                            -1 === e._status && ((e._status = 0), (e._result = t));
                    }
                    if (1 === e._status) return e._result.default;
                    throw e._result;
                }
                var O =
                    "function" == typeof reportError
                        ? reportError
                        : function (e) {
                              if ("object" == typeof window && "function" == typeof window.ErrorEvent) {
                                  var t = new window.ErrorEvent("error", { bubbles: !0, cancelable: !0, message: "object" == typeof e && null !== e && "string" == typeof e.message ? String(e.message) : String(e), error: e });
                                  if (!window.dispatchEvent(t)) return;
                              } else if ("object" == typeof process && "function" == typeof process.emit) return void process.emit("uncaughtException", e);
                              console.error(e);
                          };
                function M() {}
                (t.Children = {
                    map: j,
                    forEach: function (e, t, n) {
                        j(
                            e,
                            function () {
                                t.apply(this, arguments);
                            },
                            n
                        );
                    },
                    count: function (e) {
                        var t = 0;
                        return (
                            j(e, function () {
                                t++;
                            }),
                            t
                        );
                    },
                    toArray: function (e) {
                        return (
                            j(e, function (e) {
                                return e;
                            }) || []
                        );
                    },
                    only: function (e) {
                        if (!P(e)) throw Error("React.Children.only expected to receive a single React element child.");
                        return e;
                    },
                }),
                    (t.Component = g),
                    (t.Fragment = a),
                    (t.Profiler = i),
                    (t.PureComponent = b),
                    (t.StrictMode = o),
                    (t.Suspense = c),
                    (t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k),
                    (t.__COMPILER_RUNTIME = {
                        __proto__: null,
                        c: function (e) {
                            return k.H.useMemoCache(e);
                        },
                    }),
                    (t.cache = function (e) {
                        return function () {
                            return e.apply(null, arguments);
                        };
                    }),
                    (t.cloneElement = function (e, t, n) {
                        if (null == e) throw Error("The argument must be a React element, but you passed " + e + ".");
                        var r = m({}, e.props),
                            a = e.key;
                        if (null != t) for (o in (t.ref, void 0 !== t.key && (a = "" + t.key), t)) !S.call(t, o) || "key" === o || "__self" === o || "__source" === o || ("ref" === o && void 0 === t.ref) || (r[o] = t[o]);
                        var o = arguments.length - 2;
                        if (1 === o) r.children = n;
                        else if (1 < o) {
                            for (var i = Array(o), s = 0; s < o; s++) i[s] = arguments[s + 2];
                            r.children = i;
                        }
                        return E(e.type, a, void 0, 0, 0, r);
                    }),
                    (t.createContext = function (e) {
                        return ((e = { $$typeof: l, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null }).Provider = e), (e.Consumer = { $$typeof: s, _context: e }), e;
                    }),
                    (t.createElement = function (e, t, n) {
                        var r,
                            a = {},
                            o = null;
                        if (null != t) for (r in (void 0 !== t.key && (o = "" + t.key), t)) S.call(t, r) && "key" !== r && "__self" !== r && "__source" !== r && (a[r] = t[r]);
                        var i = arguments.length - 2;
                        if (1 === i) a.children = n;
                        else if (1 < i) {
                            for (var s = Array(i), l = 0; l < i; l++) s[l] = arguments[l + 2];
                            a.children = s;
                        }
                        if (e && e.defaultProps) for (r in (i = e.defaultProps)) void 0 === a[r] && (a[r] = i[r]);
                        return E(e, o, void 0, 0, 0, a);
                    }),
                    (t.createRef = function () {
                        return { current: null };
                    }),
                    (t.forwardRef = function (e) {
                        return { $$typeof: u, render: e };
                    }),
                    (t.isValidElement = P),
                    (t.lazy = function (e) {
                        return { $$typeof: f, _payload: { _status: -1, _result: e }, _init: N };
                    }),
                    (t.memo = function (e, t) {
                        return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
                    }),
                    (t.startTransition = function (e) {
                        var t = k.T,
                            n = {};
                        k.T = n;
                        try {
                            var r = e(),
                                a = k.S;
                            null !== a && a(n, r), "object" == typeof r && null !== r && "function" == typeof r.then && r.then(M, O);
                        } catch (e) {
                            O(e);
                        } finally {
                            k.T = t;
                        }
                    }),
                    (t.unstable_useCacheRefresh = function () {
                        return k.H.useCacheRefresh();
                    }),
                    (t.use = function (e) {
                        return k.H.use(e);
                    }),
                    (t.useActionState = function (e, t, n) {
                        return k.H.useActionState(e, t, n);
                    }),
                    (t.useCallback = function (e, t) {
                        return k.H.useCallback(e, t);
                    }),
                    (t.useContext = function (e) {
                        return k.H.useContext(e);
                    }),
                    (t.useDebugValue = function () {}),
                    (t.useDeferredValue = function (e, t) {
                        return k.H.useDeferredValue(e, t);
                    }),
                    (t.useEffect = function (e, t, n) {
                        var r = k.H;
                        if ("function" == typeof n) throw Error("useEffect CRUD overload is not enabled in this build of React.");
                        return r.useEffect(e, t);
                    }),
                    (t.useId = function () {
                        return k.H.useId();
                    }),
                    (t.useImperativeHandle = function (e, t, n) {
                        return k.H.useImperativeHandle(e, t, n);
                    }),
                    (t.useInsertionEffect = function (e, t) {
                        return k.H.useInsertionEffect(e, t);
                    }),
                    (t.useLayoutEffect = function (e, t) {
                        return k.H.useLayoutEffect(e, t);
                    }),
                    (t.useMemo = function (e, t) {
                        return k.H.useMemo(e, t);
                    }),
                    (t.useOptimistic = function (e, t) {
                        return k.H.useOptimistic(e, t);
                    }),
                    (t.useReducer = function (e, t, n) {
                        return k.H.useReducer(e, t, n);
                    }),
                    (t.useRef = function (e) {
                        return k.H.useRef(e);
                    }),
                    (t.useState = function (e) {
                        return k.H.useState(e);
                    }),
                    (t.useSyncExternalStore = function (e, t, n) {
                        return k.H.useSyncExternalStore(e, t, n);
                    }),
                    (t.useTransition = function () {
                        return k.H.useTransition();
                    }),
                    (t.version = "19.1.0");
            },
            961: (e, t, n) => {
                !(function e() {
                    if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
                        try {
                            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
                        } catch (e) {
                            console.error(e);
                        }
                })(),
                    (e.exports = n(221));
            },
            982: (e, t, n) => {
                e.exports = n(477);
            },
        },
        t = {};
    function n(r) {
        var a = t[r];
        if (void 0 !== a) return a.exports;
        var o = (t[r] = { id: r, exports: {} });
        return e[r](o, o.exports, n), o.exports;
    }
    (n.n = (e) => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, { a: t }), t;
    }),
        (n.d = (e, t) => {
            for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        }),
        (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (n.nc = void 0);
    var r = n(540),
        a = n(338);
    function o(e, t) {
        -1 === e.indexOf(t) && e.push(t);
    }
    function i(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
    }
    function s(e) {
        let t;
        return () => (void 0 === t && (t = e()), t);
    }
    const l = (e) => e,
        u = (e, t, n) => {
            const r = t - e;
            return 0 === r ? 1 : (n - e) / r;
        };
    class c {
        constructor() {
            this.subscriptions = [];
        }
        add(e) {
            return o(this.subscriptions, e), () => i(this.subscriptions, e);
        }
        notify(e, t, n) {
            const r = this.subscriptions.length;
            if (r)
                if (1 === r) this.subscriptions[0](e, t, n);
                else
                    for (let a = 0; a < r; a++) {
                        const r = this.subscriptions[a];
                        r && r(e, t, n);
                    }
        }
        getSize() {
            return this.subscriptions.length;
        }
        clear() {
            this.subscriptions.length = 0;
        }
    }
    const d = (e) => 1e3 * e,
        f = (e) => e / 1e3;
    function h(e, t) {
        return t ? e * (1e3 / t) : 0;
    }
    function p(e) {
        if ("undefined" == typeof Proxy) return e;
        const t = new Map();
        return new Proxy((...t) => e(...t), { get: (n, r) => ("create" === r ? e : (t.has(r) || t.set(r, e(r)), t.get(r))) });
    }
    function m(e) {
        return null !== e && "object" == typeof e && "function" == typeof e.start;
    }
    function y(e) {
        const t = [{}, {}];
        return (
            e?.values.forEach((e, n) => {
                (t[0][n] = e.get()), (t[1][n] = e.getVelocity());
            }),
            t
        );
    }
    function g(e, t, n, r) {
        if ("function" == typeof t) {
            const [a, o] = y(r);
            t = t(void 0 !== n ? n : e.custom, a, o);
        }
        if (("string" == typeof t && (t = e.variants && e.variants[t]), "function" == typeof t)) {
            const [a, o] = y(r);
            t = t(void 0 !== n ? n : e.custom, a, o);
        }
        return t;
    }
    function v(e, t, n) {
        const r = e.getProps();
        return g(r, t, void 0 !== n ? n : r.custom, e);
    }
    new Set();
    const b = s(() => void 0 !== window.ScrollTimeline);
    class w {
        constructor(e) {
            (this.stop = () => this.runAll("stop")), (this.animations = e.filter(Boolean));
        }
        get finished() {
            return Promise.all(this.animations.map((e) => e.finished));
        }
        getAll(e) {
            return this.animations[0][e];
        }
        setAll(e, t) {
            for (let n = 0; n < this.animations.length; n++) this.animations[n][e] = t;
        }
        attachTimeline(e, t) {
            const n = this.animations.map((n) => (b() && n.attachTimeline ? n.attachTimeline(e) : "function" == typeof t ? t(n) : void 0));
            return () => {
                n.forEach((e, t) => {
                    e && e(), this.animations[t].stop();
                });
            };
        }
        get time() {
            return this.getAll("time");
        }
        set time(e) {
            this.setAll("time", e);
        }
        get speed() {
            return this.getAll("speed");
        }
        set speed(e) {
            this.setAll("speed", e);
        }
        get startTime() {
            return this.getAll("startTime");
        }
        get duration() {
            let e = 0;
            for (let t = 0; t < this.animations.length; t++) e = Math.max(e, this.animations[t].duration);
            return e;
        }
        runAll(e) {
            this.animations.forEach((t) => t[e]());
        }
        flatten() {
            this.runAll("flatten");
        }
        play() {
            this.runAll("play");
        }
        pause() {
            this.runAll("pause");
        }
        cancel() {
            this.runAll("cancel");
        }
        complete() {
            this.runAll("complete");
        }
    }
    class x extends w {
        then(e, t) {
            return this.finished.finally(e).then(() => {});
        }
    }
    new Set([
        "borderWidth",
        "borderTopWidth",
        "borderRightWidth",
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRadius",
        "radius",
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomRightRadius",
        "borderBottomLeftRadius",
        "width",
        "maxWidth",
        "height",
        "maxHeight",
        "top",
        "right",
        "bottom",
        "left",
        "padding",
        "paddingTop",
        "paddingRight",
        "paddingBottom",
        "paddingLeft",
        "margin",
        "marginTop",
        "marginRight",
        "marginBottom",
        "marginLeft",
        "backgroundPositionX",
        "backgroundPositionY",
    ]);
    const k = { layout: 0, mainThread: 0, waapi: 0 },
        S = { value: null, addProjectionMetrics: null },
        E = (e) => Array.isArray(e) && "number" == typeof e[0],
        P = {};
    function T(e, t) {
        const n = s(e);
        return () => P[t] ?? n();
    }
    const C = T(() => {
            try {
                document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
            } catch (e) {
                return !1;
            }
            return !0;
        }, "linearEasing"),
        A = (e, t, n = 10) => {
            let r = "";
            const a = Math.max(Math.round(t / n), 2);
            for (let t = 0; t < a; t++) r += e(t / (a - 1)) + ", ";
            return `linear(${r.substring(0, r.length - 2)})`;
        },
        L = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
        j = {
            linear: "linear",
            ease: "ease",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out",
            circIn: L([0, 0.65, 0.55, 1]),
            circOut: L([0.55, 0, 1, 0.45]),
            backIn: L([0.31, 0.01, 0.66, -0.59]),
            backOut: L([0.33, 1.53, 0.69, 0.99]),
        };
    function N(e, t) {
        return e ? ("function" == typeof e && C() ? A(e, t) : E(e) ? L(e) : Array.isArray(e) ? e.map((e) => N(e, t) || j.easeOut) : j[e]) : void 0;
    }
    function O(e, t, n, { delay: r = 0, duration: a = 300, repeat: o = 0, repeatType: i = "loop", ease: s = "easeInOut", times: l } = {}, u = void 0) {
        const c = { [t]: n };
        l && (c.offset = l);
        const d = N(s, a);
        Array.isArray(d) && (c.easing = d), S.value && k.waapi++;
        const f = e.animate(c, { delay: r, duration: a, easing: Array.isArray(d) ? "linear" : d, fill: "both", iterations: o + 1, direction: "reverse" === i ? "alternate" : "normal", pseudoElement: u });
        return (
            S.value &&
                f.finished.finally(() => {
                    k.waapi--;
                }),
            f
        );
    }
    function M(e, t) {
        return e?.[t] ?? e?.default ?? e;
    }
    new WeakMap();
    const z = 2e4;
    function R(e) {
        let t = 0,
            n = e.next(t);
        for (; !n.done && t < z; ) (t += 50), (n = e.next(t));
        return t >= z ? 1 / 0 : t;
    }
    function _(e) {
        return "function" == typeof e && "applyToOptions" in e;
    }
    function D(e) {
        return Boolean(("function" == typeof e && C()) || !e || ("string" == typeof e && (e in j || C())) || E(e) || (Array.isArray(e) && e.every(D)));
    }
    function F(e, t) {
        (e.timeline = t), (e.onfinish = null);
    }
    const I = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"];
    function V(e, t) {
        let n = !1,
            r = !0;
        const a = { delta: 0, timestamp: 0, isProcessing: !1 },
            o = () => (n = !0),
            i = I.reduce(
                (e, n) => (
                    (e[n] = (function (e, t) {
                        let n = new Set(),
                            r = new Set(),
                            a = !1,
                            o = !1;
                        const i = new WeakSet();
                        let s = { delta: 0, timestamp: 0, isProcessing: !1 },
                            l = 0;
                        function u(t) {
                            i.has(t) && (c.schedule(t), e()), l++, t(s);
                        }
                        const c = {
                            schedule: (e, t = !1, o = !1) => {
                                const s = o && a ? n : r;
                                return t && i.add(e), s.has(e) || s.add(e), e;
                            },
                            cancel: (e) => {
                                r.delete(e), i.delete(e);
                            },
                            process: (e) => {
                                (s = e), a ? (o = !0) : ((a = !0), ([n, r] = [r, n]), n.forEach(u), t && S.value && S.value.frameloop[t].push(l), (l = 0), n.clear(), (a = !1), o && ((o = !1), c.process(e)));
                            },
                        };
                        return c;
                    })(o, t ? n : void 0)),
                    e
                ),
                {}
            ),
            { read: s, resolveKeyframes: l, update: u, preRender: c, render: d, postRender: f } = i,
            h = () => {
                const o = performance.now();
                (n = !1),
                    (a.delta = r ? 1e3 / 60 : Math.max(Math.min(o - a.timestamp, 40), 1)),
                    (a.timestamp = o),
                    (a.isProcessing = !0),
                    s.process(a),
                    l.process(a),
                    u.process(a),
                    c.process(a),
                    d.process(a),
                    f.process(a),
                    (a.isProcessing = !1),
                    n && t && ((r = !1), e(h));
            };
        return {
            schedule: I.reduce((t, o) => {
                const s = i[o];
                return (t[o] = (t, o = !1, i = !1) => (n || ((n = !0), (r = !0), a.isProcessing || e(h)), s.schedule(t, o, i))), t;
            }, {}),
            cancel: (e) => {
                for (let t = 0; t < I.length; t++) i[I[t]].cancel(e);
            },
            state: a,
            steps: i,
        };
    }
    const { schedule: B, cancel: U, state: $, steps: H } = V("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : l, !0),
        { schedule: W, cancel: Y } = V(queueMicrotask, !1);
    let q;
    function G() {
        q = void 0;
    }
    const X = {
            now: () => (void 0 === q && X.set($.isProcessing ? $.timestamp : performance.now()), q),
            set: (e) => {
                (q = e), queueMicrotask(G);
            },
        },
        K = { x: !1, y: !1 };
    function Q() {
        return K.x || K.y;
    }
    function Z(e, t) {
        const n = (function (e) {
                if (e instanceof EventTarget) return [e];
                if ("string" == typeof e) {
                    let t = document;
                    const n = t.querySelectorAll(e);
                    return n ? Array.from(n) : [];
                }
                return Array.from(e);
            })(e),
            r = new AbortController();
        return [n, { passive: !0, ...t, signal: r.signal }, () => r.abort()];
    }
    function J(e) {
        return !("touch" === e.pointerType || Q());
    }
    const ee = (e, t) => !!t && (e === t || ee(e, t.parentElement)),
        te = (e) => ("mouse" === e.pointerType ? "number" != typeof e.button || e.button <= 0 : !1 !== e.isPrimary),
        ne = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        re = new WeakSet();
    function ae(e) {
        return (t) => {
            "Enter" === t.key && e(t);
        };
    }
    function oe(e, t) {
        e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
    }
    function ie(e) {
        return te(e) && !Q();
    }
    const se = { current: void 0 };
    class le {
        constructor(e, t = {}) {
            (this.version = "12.6.3"),
                (this.canTrackVelocity = null),
                (this.events = {}),
                (this.updateAndNotify = (e, t = !0) => {
                    const n = X.now();
                    this.updatedAt !== n && this.setPrevFrameValue(),
                        (this.prev = this.current),
                        this.setCurrent(e),
                        this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
                        t && this.events.renderRequest && this.events.renderRequest.notify(this.current);
                }),
                (this.hasAnimated = !1),
                this.setCurrent(e),
                (this.owner = t.owner);
        }
        setCurrent(e) {
            var t;
            (this.current = e), (this.updatedAt = X.now()), null === this.canTrackVelocity && void 0 !== e && (this.canTrackVelocity = ((t = this.current), !isNaN(parseFloat(t))));
        }
        setPrevFrameValue(e = this.current) {
            (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(e) {
            return this.on("change", e);
        }
        on(e, t) {
            this.events[e] || (this.events[e] = new c());
            const n = this.events[e].add(t);
            return "change" === e
                ? () => {
                      n(),
                          B.read(() => {
                              this.events.change.getSize() || this.stop();
                          });
                  }
                : n;
        }
        clearListeners() {
            for (const e in this.events) this.events[e].clear();
        }
        attach(e, t) {
            (this.passiveEffect = e), (this.stopPassiveEffect = t);
        }
        set(e, t = !0) {
            t && this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e, t);
        }
        setWithVelocity(e, t, n) {
            this.set(t), (this.prev = void 0), (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt - n);
        }
        jump(e, t = !0) {
            this.updateAndNotify(e), (this.prev = e), (this.prevUpdatedAt = this.prevFrameValue = void 0), t && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
            return se.current && se.current.push(this), this.current;
        }
        getPrevious() {
            return this.prev;
        }
        getVelocity() {
            const e = X.now();
            if (!this.canTrackVelocity || void 0 === this.prevFrameValue || e - this.updatedAt > 30) return 0;
            const t = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
            return h(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
        }
        start(e) {
            return (
                this.stop(),
                new Promise((t) => {
                    (this.hasAnimated = !0), (this.animation = e(t)), this.events.animationStart && this.events.animationStart.notify();
                }).then(() => {
                    this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
                })
            );
        }
        stop() {
            this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
        }
        isAnimating() {
            return !!this.animation;
        }
        clearAnimation() {
            delete this.animation;
        }
        destroy() {
            this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
        }
    }
    function ue(e, t) {
        return new le(e, t);
    }
    const ce = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
        de = new Set(ce),
        fe = new Set(["width", "height", "top", "left", "right", "bottom", ...ce]),
        he = (e) => Array.isArray(e);
    function pe(e, t, n) {
        e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ue(n));
    }
    function me(e, t) {
        const n = v(e, t);
        let { transitionEnd: r = {}, transition: a = {}, ...o } = n || {};
        o = { ...o, ...r };
        for (const t in o) pe(e, t, ((i = o[t]), he(i) ? i[i.length - 1] || 0 : i));
        var i;
    }
    const ye = (e) => Boolean(e && e.getVelocity);
    function ge(e, t) {
        const n = e.getValue("willChange");
        if (((r = n), Boolean(ye(r) && r.add))) return n.add(t);
        var r;
    }
    const ve = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        be = "data-" + ve("framerAppearId");
    function we(e) {
        return e.props[be];
    }
    const xe = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;
    function ke(e, t, n, r) {
        if (e === t && n === r) return l;
        return (a) =>
            0 === a || 1 === a
                ? a
                : xe(
                      (function (e, t, n, r, a) {
                          let o,
                              i,
                              s = 0;
                          do {
                              (i = t + (n - t) / 2), (o = xe(i, r, a) - e), o > 0 ? (n = i) : (t = i);
                          } while (Math.abs(o) > 1e-7 && ++s < 12);
                          return i;
                      })(a, 0, 1, e, n),
                      t,
                      r
                  );
    }
    const Se = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
        Ee = (e) => (t) => 1 - e(1 - t),
        Pe = ke(0.33, 1.53, 0.69, 0.99),
        Te = Ee(Pe),
        Ce = Se(Te),
        Ae = (e) => ((e *= 2) < 1 ? 0.5 * Te(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)))),
        Le = (e) => 1 - Math.sin(Math.acos(e)),
        je = Ee(Le),
        Ne = Se(Le),
        Oe = (e) => /^0[^.\s]+$/u.test(e),
        Me = (e, t, n) => (n > t ? t : n < e ? e : n),
        ze = { test: (e) => "number" == typeof e, parse: parseFloat, transform: (e) => e },
        Re = { ...ze, transform: (e) => Me(0, 1, e) },
        _e = { ...ze, default: 1 },
        De = (e) => Math.round(1e5 * e) / 1e5,
        Fe = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        Ie = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        Ve = (e, t) => (n) =>
            Boolean(
                ("string" == typeof n && Ie.test(n) && n.startsWith(e)) ||
                    (t &&
                        !(function (e) {
                            return null == e;
                        })(n) &&
                        Object.prototype.hasOwnProperty.call(n, t))
            ),
        Be = (e, t, n) => (r) => {
            if ("string" != typeof r) return r;
            const [a, o, i, s] = r.match(Fe);
            return { [e]: parseFloat(a), [t]: parseFloat(o), [n]: parseFloat(i), alpha: void 0 !== s ? parseFloat(s) : 1 };
        },
        Ue = { ...ze, transform: (e) => Math.round(((e) => Me(0, 255, e))(e)) },
        $e = {
            test: Ve("rgb", "red"),
            parse: Be("red", "green", "blue"),
            transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Ue.transform(e) + ", " + Ue.transform(t) + ", " + Ue.transform(n) + ", " + De(Re.transform(r)) + ")",
        },
        He = {
            test: Ve("#"),
            parse: function (e) {
                let t = "",
                    n = "",
                    r = "",
                    a = "";
                return (
                    e.length > 5
                        ? ((t = e.substring(1, 3)), (n = e.substring(3, 5)), (r = e.substring(5, 7)), (a = e.substring(7, 9)))
                        : ((t = e.substring(1, 2)), (n = e.substring(2, 3)), (r = e.substring(3, 4)), (a = e.substring(4, 5)), (t += t), (n += n), (r += r), (a += a)),
                    { red: parseInt(t, 16), green: parseInt(n, 16), blue: parseInt(r, 16), alpha: a ? parseInt(a, 16) / 255 : 1 }
                );
            },
            transform: $e.transform,
        },
        We = (e) => ({ test: (t) => "string" == typeof t && t.endsWith(e) && 1 === t.split(" ").length, parse: parseFloat, transform: (t) => `${t}${e}` }),
        Ye = We("deg"),
        qe = We("%"),
        Ge = We("px"),
        Xe = We("vh"),
        Ke = We("vw"),
        Qe = { ...qe, parse: (e) => qe.parse(e) / 100, transform: (e) => qe.transform(100 * e) },
        Ze = {
            test: Ve("hsl", "hue"),
            parse: Be("hue", "saturation", "lightness"),
            transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + qe.transform(De(t)) + ", " + qe.transform(De(n)) + ", " + De(Re.transform(r)) + ")",
        },
        Je = {
            test: (e) => $e.test(e) || He.test(e) || Ze.test(e),
            parse: (e) => ($e.test(e) ? $e.parse(e) : Ze.test(e) ? Ze.parse(e) : He.parse(e)),
            transform: (e) => ("string" == typeof e ? e : e.hasOwnProperty("red") ? $e.transform(e) : Ze.transform(e)),
        },
        et = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        tt = "number",
        nt = "color",
        rt = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
    function at(e) {
        const t = e.toString(),
            n = [],
            r = { color: [], number: [], var: [] },
            a = [];
        let o = 0;
        const i = t
            .replace(rt, (e) => (Je.test(e) ? (r.color.push(o), a.push(nt), n.push(Je.parse(e))) : e.startsWith("var(") ? (r.var.push(o), a.push("var"), n.push(e)) : (r.number.push(o), a.push(tt), n.push(parseFloat(e))), ++o, "${}"))
            .split("${}");
        return { values: n, split: i, indexes: r, types: a };
    }
    function ot(e) {
        return at(e).values;
    }
    function it(e) {
        const { split: t, types: n } = at(e),
            r = t.length;
        return (e) => {
            let a = "";
            for (let o = 0; o < r; o++)
                if (((a += t[o]), void 0 !== e[o])) {
                    const t = n[o];
                    a += t === tt ? De(e[o]) : t === nt ? Je.transform(e[o]) : e[o];
                }
            return a;
        };
    }
    const st = (e) => ("number" == typeof e ? 0 : e),
        lt = {
            test: function (e) {
                return isNaN(e) && "string" == typeof e && (e.match(Fe)?.length || 0) + (e.match(et)?.length || 0) > 0;
            },
            parse: ot,
            createTransformer: it,
            getAnimatableNone: function (e) {
                const t = ot(e);
                return it(e)(t.map(st));
            },
        },
        ut = new Set(["brightness", "contrast", "saturate", "opacity"]);
    function ct(e) {
        const [t, n] = e.slice(0, -1).split("(");
        if ("drop-shadow" === t) return e;
        const [r] = n.match(Fe) || [];
        if (!r) return e;
        const a = n.replace(r, "");
        let o = ut.has(t) ? 1 : 0;
        return r !== n && (o *= 100), t + "(" + o + a + ")";
    }
    const dt = /\b([a-z-]*)\(.*?\)/gu,
        ft = {
            ...lt,
            getAnimatableNone: (e) => {
                const t = e.match(dt);
                return t ? t.map(ct).join(" ") : e;
            },
        },
        ht = {
            borderWidth: Ge,
            borderTopWidth: Ge,
            borderRightWidth: Ge,
            borderBottomWidth: Ge,
            borderLeftWidth: Ge,
            borderRadius: Ge,
            radius: Ge,
            borderTopLeftRadius: Ge,
            borderTopRightRadius: Ge,
            borderBottomRightRadius: Ge,
            borderBottomLeftRadius: Ge,
            width: Ge,
            maxWidth: Ge,
            height: Ge,
            maxHeight: Ge,
            top: Ge,
            right: Ge,
            bottom: Ge,
            left: Ge,
            padding: Ge,
            paddingTop: Ge,
            paddingRight: Ge,
            paddingBottom: Ge,
            paddingLeft: Ge,
            margin: Ge,
            marginTop: Ge,
            marginRight: Ge,
            marginBottom: Ge,
            marginLeft: Ge,
            backgroundPositionX: Ge,
            backgroundPositionY: Ge,
        },
        pt = {
            rotate: Ye,
            rotateX: Ye,
            rotateY: Ye,
            rotateZ: Ye,
            scale: _e,
            scaleX: _e,
            scaleY: _e,
            scaleZ: _e,
            skew: Ye,
            skewX: Ye,
            skewY: Ye,
            distance: Ge,
            translateX: Ge,
            translateY: Ge,
            translateZ: Ge,
            x: Ge,
            y: Ge,
            z: Ge,
            perspective: Ge,
            transformPerspective: Ge,
            opacity: Re,
            originX: Qe,
            originY: Qe,
            originZ: Ge,
        },
        mt = { ...ze, transform: Math.round },
        yt = { ...ht, ...pt, zIndex: mt, size: Ge, fillOpacity: Re, strokeOpacity: Re, numOctaves: mt },
        gt = { ...yt, color: Je, backgroundColor: Je, outlineColor: Je, fill: Je, stroke: Je, borderColor: Je, borderTopColor: Je, borderRightColor: Je, borderBottomColor: Je, borderLeftColor: Je, filter: ft, WebkitFilter: ft },
        vt = (e) => gt[e];
    function bt(e, t) {
        let n = vt(e);
        return n !== ft && (n = lt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
    }
    const wt = new Set(["auto", "none", "0"]),
        xt = (e) => (180 * e) / Math.PI,
        kt = (e) => {
            const t = xt(Math.atan2(e[1], e[0]));
            return Et(t);
        },
        St = {
            x: 4,
            y: 5,
            translateX: 4,
            translateY: 5,
            scaleX: 0,
            scaleY: 3,
            scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
            rotate: kt,
            rotateZ: kt,
            skewX: (e) => xt(Math.atan(e[1])),
            skewY: (e) => xt(Math.atan(e[2])),
            skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
        },
        Et = (e) => ((e %= 360) < 0 && (e += 360), e),
        Pt = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
        Tt = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
        Ct = {
            x: 12,
            y: 13,
            z: 14,
            translateX: 12,
            translateY: 13,
            translateZ: 14,
            scaleX: Pt,
            scaleY: Tt,
            scale: (e) => (Pt(e) + Tt(e)) / 2,
            rotateX: (e) => Et(xt(Math.atan2(e[6], e[5]))),
            rotateY: (e) => Et(xt(Math.atan2(-e[2], e[0]))),
            rotateZ: kt,
            rotate: kt,
            skewX: (e) => xt(Math.atan(e[4])),
            skewY: (e) => xt(Math.atan(e[1])),
            skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
        };
    function At(e) {
        return e.includes("scale") ? 1 : 0;
    }
    function Lt(e, t) {
        if (!e || "none" === e) return At(t);
        const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
        let r, a;
        if (n) (r = Ct), (a = n);
        else {
            const t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
            (r = St), (a = t);
        }
        if (!a) return At(t);
        const o = r[t],
            i = a[1].split(",").map(jt);
        return "function" == typeof o ? o(i) : i[o];
    }
    function jt(e) {
        return parseFloat(e.trim());
    }
    const Nt = (e) => e === ze || e === Ge,
        Ot = new Set(["x", "y", "z"]),
        Mt = ce.filter((e) => !Ot.has(e)),
        zt = {
            width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
            height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
            top: (e, { top: t }) => parseFloat(t),
            left: (e, { left: t }) => parseFloat(t),
            bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
            right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
            x: (e, { transform: t }) => Lt(t, "x"),
            y: (e, { transform: t }) => Lt(t, "y"),
        };
    (zt.translateX = zt.x), (zt.translateY = zt.y);
    const Rt = new Set();
    let _t = !1,
        Dt = !1;
    function Ft() {
        if (Dt) {
            const e = Array.from(Rt).filter((e) => e.needsMeasurement),
                t = new Set(e.map((e) => e.element)),
                n = new Map();
            t.forEach((e) => {
                const t = (function (e) {
                    const t = [];
                    return (
                        Mt.forEach((n) => {
                            const r = e.getValue(n);
                            void 0 !== r && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
                        }),
                        t
                    );
                })(e);
                t.length && (n.set(e, t), e.render());
            }),
                e.forEach((e) => e.measureInitialState()),
                t.forEach((e) => {
                    e.render();
                    const t = n.get(e);
                    t &&
                        t.forEach(([t, n]) => {
                            e.getValue(t)?.set(n);
                        });
                }),
                e.forEach((e) => e.measureEndState()),
                e.forEach((e) => {
                    void 0 !== e.suspendedScrollY && window.scrollTo(0, e.suspendedScrollY);
                });
        }
        (Dt = !1), (_t = !1), Rt.forEach((e) => e.complete()), Rt.clear();
    }
    function It() {
        Rt.forEach((e) => {
            e.readKeyframes(), e.needsMeasurement && (Dt = !0);
        });
    }
    class Vt {
        constructor(e, t, n, r, a, o = !1) {
            (this.isComplete = !1),
                (this.isAsync = !1),
                (this.needsMeasurement = !1),
                (this.isScheduled = !1),
                (this.unresolvedKeyframes = [...e]),
                (this.onComplete = t),
                (this.name = n),
                (this.motionValue = r),
                (this.element = a),
                (this.isAsync = o);
        }
        scheduleResolve() {
            (this.isScheduled = !0), this.isAsync ? (Rt.add(this), _t || ((_t = !0), B.read(It), B.resolveKeyframes(Ft))) : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
            const { unresolvedKeyframes: e, name: t, element: n, motionValue: r } = this;
            for (let a = 0; a < e.length; a++)
                if (null === e[a])
                    if (0 === a) {
                        const a = r?.get(),
                            o = e[e.length - 1];
                        if (void 0 !== a) e[0] = a;
                        else if (n && t) {
                            const r = n.readValue(t, o);
                            null != r && (e[0] = r);
                        }
                        void 0 === e[0] && (e[0] = o), r && void 0 === a && r.set(e[0]);
                    } else e[a] = e[a - 1];
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
            (this.isComplete = !0), this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), Rt.delete(this);
        }
        cancel() {
            this.isComplete || ((this.isScheduled = !1), Rt.delete(this));
        }
        resume() {
            this.isComplete || this.scheduleResolve();
        }
    }
    const Bt = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
        Ut = (e) => (t) => "string" == typeof t && t.startsWith(e),
        $t = Ut("--"),
        Ht = Ut("var(--"),
        Wt = (e) => !!Ht(e) && Yt.test(e.split("/*")[0].trim()),
        Yt = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
        qt = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
    function Gt(e, t, n = 1) {
        const [r, a] = (function (e) {
            const t = qt.exec(e);
            if (!t) return [,];
            const [, n, r, a] = t;
            return [`--${n ?? r}`, a];
        })(e);
        if (!r) return;
        const o = window.getComputedStyle(t).getPropertyValue(r);
        if (o) {
            const e = o.trim();
            return Bt(e) ? parseFloat(e) : e;
        }
        return Wt(a) ? Gt(a, t, n + 1) : a;
    }
    const Xt = (e) => (t) => t.test(e),
        Kt = [ze, Ge, qe, Ye, Ke, Xe, { test: (e) => "auto" === e, parse: (e) => e }],
        Qt = (e) => Kt.find(Xt(e));
    class Zt extends Vt {
        constructor(e, t, n, r, a) {
            super(e, t, n, r, a, !0);
        }
        readKeyframes() {
            const { unresolvedKeyframes: e, element: t, name: n } = this;
            if (!t || !t.current) return;
            super.readKeyframes();
            for (let n = 0; n < e.length; n++) {
                let r = e[n];
                if ("string" == typeof r && ((r = r.trim()), Wt(r))) {
                    const a = Gt(r, t.current);
                    void 0 !== a && (e[n] = a), n === e.length - 1 && (this.finalKeyframe = r);
                }
            }
            if ((this.resolveNoneKeyframes(), !fe.has(n) || 2 !== e.length)) return;
            const [r, a] = e,
                o = Qt(r),
                i = Qt(a);
            if (o !== i)
                if (Nt(o) && Nt(i))
                    for (let t = 0; t < e.length; t++) {
                        const n = e[t];
                        "string" == typeof n && (e[t] = parseFloat(n));
                    }
                else this.needsMeasurement = !0;
        }
        resolveNoneKeyframes() {
            const { unresolvedKeyframes: e, name: t } = this,
                n = [];
            for (let t = 0; t < e.length; t++) ("number" == typeof (r = e[t]) ? 0 === r : null === r || "none" === r || "0" === r || Oe(r)) && n.push(t);
            var r;
            n.length &&
                (function (e, t, n) {
                    let r,
                        a = 0;
                    for (; a < e.length && !r; ) {
                        const t = e[a];
                        "string" == typeof t && !wt.has(t) && at(t).values.length && (r = e[a]), a++;
                    }
                    if (r && n) for (const a of t) e[a] = bt(n, r);
                })(e, n, t);
        }
        measureInitialState() {
            const { element: e, unresolvedKeyframes: t, name: n } = this;
            if (!e || !e.current) return;
            "height" === n && (this.suspendedScrollY = window.pageYOffset), (this.measuredOrigin = zt[n](e.measureViewportBox(), window.getComputedStyle(e.current))), (t[0] = this.measuredOrigin);
            const r = t[t.length - 1];
            void 0 !== r && e.getValue(n, r).jump(r, !1);
        }
        measureEndState() {
            const { element: e, name: t, unresolvedKeyframes: n } = this;
            if (!e || !e.current) return;
            const r = e.getValue(t);
            r && r.jump(this.measuredOrigin, !1);
            const a = n.length - 1,
                o = n[a];
            (n[a] = zt[t](e.measureViewportBox(), window.getComputedStyle(e.current))),
                null !== o && void 0 === this.finalKeyframe && (this.finalKeyframe = o),
                this.removedTransforms?.length &&
                    this.removedTransforms.forEach(([t, n]) => {
                        e.getValue(t).set(n);
                    }),
                this.resolveNoneKeyframes();
        }
    }
    const Jt = (e, t) => !("zIndex" === t || ("number" != typeof e && !Array.isArray(e) && ("string" != typeof e || (!lt.test(e) && "0" !== e) || e.startsWith("url("))));
    function en(e, t, n, r) {
        const a = e[0];
        if (null === a) return !1;
        if ("display" === t || "visibility" === t) return !0;
        const o = e[e.length - 1],
            i = Jt(a, t),
            s = Jt(o, t);
        return (
            !(!i || !s) &&
            ((function (e) {
                const t = e[0];
                if (1 === e.length) return !0;
                for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
            })(e) ||
                (("spring" === n || _(n)) && r))
        );
    }
    const tn = (e) => null !== e;
    function nn(e, { repeat: t, repeatType: n = "loop" }, r) {
        const a = e.filter(tn),
            o = t && "loop" !== n && t % 2 == 1 ? 0 : a.length - 1;
        return o && void 0 !== r ? r : a[o];
    }
    class rn {
        constructor({ autoplay: e = !0, delay: t = 0, type: n = "keyframes", repeat: r = 0, repeatDelay: a = 0, repeatType: o = "loop", ...i }) {
            (this.isStopped = !1), (this.hasAttemptedResolve = !1), (this.createdAt = X.now()), (this.options = { autoplay: e, delay: t, type: n, repeat: r, repeatDelay: a, repeatType: o, ...i }), this.updateFinishedPromise();
        }
        calcStartTime() {
            return this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt;
        }
        get resolved() {
            return this._resolved || this.hasAttemptedResolve || (It(), Ft()), this._resolved;
        }
        onKeyframesResolved(e, t) {
            (this.resolvedAt = X.now()), (this.hasAttemptedResolve = !0);
            const { name: n, type: r, velocity: a, delay: o, onComplete: i, onUpdate: s, isGenerator: l } = this.options;
            if (!l && !en(e, n, r, a)) {
                if (!o) return s && s(nn(e, this.options, t)), i && i(), void this.resolveFinishedPromise();
                this.options.duration = 0;
            }
            const u = this.initPlayback(e, t);
            !1 !== u && ((this._resolved = { keyframes: e, finalKeyframe: t, ...u }), this.onPostResolved());
        }
        onPostResolved() {}
        then(e, t) {
            return this.currentFinishedPromise.then(e, t);
        }
        flatten() {
            this.options.allowFlatten && ((this.options.type = "keyframes"), (this.options.ease = "linear"));
        }
        updateFinishedPromise() {
            this.currentFinishedPromise = new Promise((e) => {
                this.resolveFinishedPromise = e;
            });
        }
    }
    const an = (e, t, n) => e + (t - e) * n;
    function on(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
    }
    function sn(e, t) {
        return (n) => (n > 0 ? t : e);
    }
    const ln = (e, t, n) => {
            const r = e * e,
                a = n * (t * t - r) + r;
            return a < 0 ? 0 : Math.sqrt(a);
        },
        un = [He, $e, Ze];
    function cn(e) {
        const t = ((n = e), un.find((e) => e.test(n)));
        var n;
        if ((Boolean(t), !Boolean(t))) return !1;
        let r = t.parse(e);
        return (
            t === Ze &&
                (r = (function ({ hue: e, saturation: t, lightness: n, alpha: r }) {
                    (e /= 360), (n /= 100);
                    let a = 0,
                        o = 0,
                        i = 0;
                    if ((t /= 100)) {
                        const r = n < 0.5 ? n * (1 + t) : n + t - n * t,
                            s = 2 * n - r;
                        (a = on(s, r, e + 1 / 3)), (o = on(s, r, e)), (i = on(s, r, e - 1 / 3));
                    } else a = o = i = n;
                    return { red: Math.round(255 * a), green: Math.round(255 * o), blue: Math.round(255 * i), alpha: r };
                })(r)),
            r
        );
    }
    const dn = (e, t) => {
            const n = cn(e),
                r = cn(t);
            if (!n || !r) return sn(e, t);
            const a = { ...n };
            return (e) => ((a.red = ln(n.red, r.red, e)), (a.green = ln(n.green, r.green, e)), (a.blue = ln(n.blue, r.blue, e)), (a.alpha = an(n.alpha, r.alpha, e)), $e.transform(a));
        },
        fn = (e, t) => (n) => t(e(n)),
        hn = (...e) => e.reduce(fn),
        pn = new Set(["none", "hidden"]);
    function mn(e, t) {
        return (n) => an(e, t, n);
    }
    function yn(e) {
        return "number" == typeof e ? mn : "string" == typeof e ? (Wt(e) ? sn : Je.test(e) ? dn : bn) : Array.isArray(e) ? gn : "object" == typeof e ? (Je.test(e) ? dn : vn) : sn;
    }
    function gn(e, t) {
        const n = [...e],
            r = n.length,
            a = e.map((e, n) => yn(e)(e, t[n]));
        return (e) => {
            for (let t = 0; t < r; t++) n[t] = a[t](e);
            return n;
        };
    }
    function vn(e, t) {
        const n = { ...e, ...t },
            r = {};
        for (const a in n) void 0 !== e[a] && void 0 !== t[a] && (r[a] = yn(e[a])(e[a], t[a]));
        return (e) => {
            for (const t in r) n[t] = r[t](e);
            return n;
        };
    }
    const bn = (e, t) => {
        const n = lt.createTransformer(t),
            r = at(e),
            a = at(t);
        return r.indexes.var.length === a.indexes.var.length && r.indexes.color.length === a.indexes.color.length && r.indexes.number.length >= a.indexes.number.length
            ? (pn.has(e) && !a.values.length) || (pn.has(t) && !r.values.length)
                ? (function (e, t) {
                      return pn.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
                  })(e, t)
                : hn(
                      gn(
                          (function (e, t) {
                              const n = [],
                                  r = { color: 0, var: 0, number: 0 };
                              for (let a = 0; a < t.values.length; a++) {
                                  const o = t.types[a],
                                      i = e.indexes[o][r[o]],
                                      s = e.values[i] ?? 0;
                                  (n[a] = s), r[o]++;
                              }
                              return n;
                          })(r, a),
                          a.values
                      ),
                      n
                  )
            : sn(e, t);
    };
    function wn(e, t, n) {
        return "number" == typeof e && "number" == typeof t && "number" == typeof n ? an(e, t, n) : yn(e)(e, t);
    }
    function xn(e, t, n) {
        const r = Math.max(t - 5, 0);
        return h(n - e(r), t - r);
    }
    const kn = 0.01,
        Sn = 2,
        En = 0.005,
        Pn = 0.5;
    const Tn = 12;
    function Cn(e, t) {
        return e * Math.sqrt(1 - t * t);
    }
    const An = ["duration", "bounce"],
        Ln = ["stiffness", "damping", "mass"];
    function jn(e, t) {
        return t.some((t) => void 0 !== e[t]);
    }
    function Nn(e = 0.3, t = 0.3) {
        const n = "object" != typeof e ? { visualDuration: e, keyframes: [0, 1], bounce: t } : e;
        let { restSpeed: r, restDelta: a } = n;
        const o = n.keyframes[0],
            i = n.keyframes[n.keyframes.length - 1],
            s = { done: !1, value: o },
            { stiffness: l, damping: u, mass: c, duration: h, velocity: p, isResolvedFromDuration: m } = (function (e) {
                let t = { velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...e };
                if (!jn(e, Ln) && jn(e, An))
                    if (e.visualDuration) {
                        const n = e.visualDuration,
                            r = (2 * Math.PI) / (1.2 * n),
                            a = r * r,
                            o = 2 * Me(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(a);
                        t = { ...t, mass: 1, stiffness: a, damping: o };
                    } else {
                        const n = (function ({ duration: e = 800, bounce: t = 0.3, velocity: n = 0, mass: r = 1 }) {
                            let a, o;
                            d(10);
                            let i = 1 - t;
                            (i = Me(0.05, 1, i)),
                                (e = Me(0.01, 10, f(e))),
                                i < 1
                                    ? ((a = (t) => {
                                          const r = t * i,
                                              a = r * e;
                                          return 0.001 - ((r - n) / Cn(t, i)) * Math.exp(-a);
                                      }),
                                      (o = (t) => {
                                          const r = t * i * e,
                                              o = r * n + n,
                                              s = Math.pow(i, 2) * Math.pow(t, 2) * e,
                                              l = Math.exp(-r),
                                              u = Cn(Math.pow(t, 2), i);
                                          return ((0.001 - a(t) > 0 ? -1 : 1) * ((o - s) * l)) / u;
                                      }))
                                    : ((a = (t) => Math.exp(-t * e) * ((t - n) * e + 1) - 0.001), (o = (t) => Math.exp(-t * e) * (e * e * (n - t))));
                            const s = (function (e, t, n) {
                                let r = n;
                                for (let n = 1; n < Tn; n++) r -= e(r) / t(r);
                                return r;
                            })(a, o, 5 / e);
                            if (((e = d(e)), isNaN(s))) return { stiffness: 100, damping: 10, duration: e };
                            {
                                const t = Math.pow(s, 2) * r;
                                return { stiffness: t, damping: 2 * i * Math.sqrt(r * t), duration: e };
                            }
                        })(e);
                        (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
                    }
                return t;
            })({ ...n, velocity: -f(n.velocity || 0) }),
            y = p || 0,
            g = u / (2 * Math.sqrt(l * c)),
            v = i - o,
            b = f(Math.sqrt(l / c)),
            w = Math.abs(v) < 5;
        let x;
        if ((r || (r = w ? kn : Sn), a || (a = w ? En : Pn), g < 1)) {
            const e = Cn(b, g);
            x = (t) => {
                const n = Math.exp(-g * b * t);
                return i - n * (((y + g * b * v) / e) * Math.sin(e * t) + v * Math.cos(e * t));
            };
        } else if (1 === g) x = (e) => i - Math.exp(-b * e) * (v + (y + b * v) * e);
        else {
            const e = b * Math.sqrt(g * g - 1);
            x = (t) => {
                const n = Math.exp(-g * b * t),
                    r = Math.min(e * t, 300);
                return i - (n * ((y + g * b * v) * Math.sinh(r) + e * v * Math.cosh(r))) / e;
            };
        }
        const k = {
            calculatedDuration: (m && h) || null,
            next: (e) => {
                const t = x(e);
                if (m) s.done = e >= h;
                else {
                    let n = 0;
                    g < 1 && (n = 0 === e ? d(y) : xn(x, e, t));
                    const o = Math.abs(n) <= r,
                        l = Math.abs(i - t) <= a;
                    s.done = o && l;
                }
                return (s.value = s.done ? i : t), s;
            },
            toString: () => {
                const e = Math.min(R(k), z),
                    t = A((t) => k.next(e * t).value, e, 30);
                return e + "ms " + t;
            },
            toTransition: () => {},
        };
        return k;
    }
    function On({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: a = 10, bounceStiffness: o = 500, modifyTarget: i, min: s, max: l, restDelta: u = 0.5, restSpeed: c }) {
        const d = e[0],
            f = { done: !1, value: d },
            h = (e) => (void 0 === s ? l : void 0 === l || Math.abs(s - e) < Math.abs(l - e) ? s : l);
        let p = n * t;
        const m = d + p,
            y = void 0 === i ? m : i(m);
        y !== m && (p = y - d);
        const g = (e) => -p * Math.exp(-e / r),
            v = (e) => y + g(e),
            b = (e) => {
                const t = g(e),
                    n = v(e);
                (f.done = Math.abs(t) <= u), (f.value = f.done ? y : n);
            };
        let w, x;
        const k = (e) => {
            var t;
            (t = f.value), ((void 0 !== s && t < s) || (void 0 !== l && t > l)) && ((w = e), (x = Nn({ keyframes: [f.value, h(f.value)], velocity: xn(v, e, f.value), damping: a, stiffness: o, restDelta: u, restSpeed: c })));
        };
        return (
            k(0),
            {
                calculatedDuration: null,
                next: (e) => {
                    let t = !1;
                    return x || void 0 !== w || ((t = !0), b(e), k(e)), void 0 !== w && e >= w ? x.next(e - w) : (!t && b(e), f);
                },
            }
        );
    }
    Nn.applyToOptions = (e) => {
        const t = (function (e, t = 100, n) {
            const r = n({ ...e, keyframes: [0, t] }),
                a = Math.min(R(r), z);
            return { type: "keyframes", ease: (e) => r.next(a * e).value / t, duration: f(a) };
        })(e, 100, Nn);
        return (e.ease = C() ? t.ease : "easeOut"), (e.duration = d(t.duration)), (e.type = "keyframes"), e;
    };
    const Mn = ke(0.42, 0, 1, 1),
        zn = ke(0, 0, 0.58, 1),
        Rn = ke(0.42, 0, 0.58, 1),
        _n = { linear: l, easeIn: Mn, easeInOut: Rn, easeOut: zn, circIn: Le, circInOut: Ne, circOut: je, backIn: Te, backInOut: Ce, backOut: Pe, anticipate: Ae },
        Dn = (e) => {
            if (E(e)) {
                e.length;
                const [t, n, r, a] = e;
                return ke(t, n, r, a);
            }
            return "string" == typeof e ? _n[e] : e;
        };
    function Fn({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
        const a = ((e) => Array.isArray(e) && "number" != typeof e[0])(r) ? r.map(Dn) : Dn(r),
            o = { done: !1, value: t[0] },
            i = (function (e, t) {
                return e.map((e) => e * t);
            })(
                n && n.length === t.length
                    ? n
                    : (function (e) {
                          const t = [0];
                          return (
                              (function (e, t) {
                                  const n = e[e.length - 1];
                                  for (let r = 1; r <= t; r++) {
                                      const a = u(0, t, r);
                                      e.push(an(n, 1, a));
                                  }
                              })(t, e.length - 1),
                              t
                          );
                      })(t),
                e
            ),
            s = (function (e, t, { clamp: n = !0, ease: r, mixer: a } = {}) {
                const o = e.length;
                if ((t.length, 1 === o)) return () => t[0];
                if (2 === o && t[0] === t[1]) return () => t[1];
                const i = e[0] === e[1];
                e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
                const s = (function (e, t, n) {
                        const r = [],
                            a = n || wn,
                            o = e.length - 1;
                        for (let n = 0; n < o; n++) {
                            let o = a(e[n], e[n + 1]);
                            if (t) {
                                const e = Array.isArray(t) ? t[n] || l : t;
                                o = hn(e, o);
                            }
                            r.push(o);
                        }
                        return r;
                    })(t, r, a),
                    c = s.length,
                    d = (n) => {
                        if (i && n < e[0]) return t[0];
                        let r = 0;
                        if (c > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
                        const a = u(e[r], e[r + 1], n);
                        return s[r](a);
                    };
                return n ? (t) => d(Me(e[0], e[o - 1], t)) : d;
            })(i, t, { ease: Array.isArray(a) ? a : ((c = t), (d = a), c.map(() => d || Rn).splice(0, c.length - 1)) });
        var c, d;
        return { calculatedDuration: e, next: (t) => ((o.value = s(t)), (o.done = t >= e), o) };
    }
    const In = (e) => {
            const t = ({ timestamp: t }) => e(t);
            return { start: () => B.update(t, !0), stop: () => U(t), now: () => ($.isProcessing ? $.timestamp : X.now()) };
        },
        Vn = { decay: On, inertia: On, tween: Fn, keyframes: Fn, spring: Nn },
        Bn = (e) => e / 100;
    class Un extends rn {
        constructor(e) {
            super(e),
                (this.holdTime = null),
                (this.cancelTime = null),
                (this.currentTime = 0),
                (this.playbackSpeed = 1),
                (this.pendingPlayState = "running"),
                (this.startTime = null),
                (this.state = "idle"),
                (this.stop = () => {
                    if ((this.resolver.cancel(), (this.isStopped = !0), "idle" === this.state)) return;
                    this.teardown();
                    const { onStop: e } = this.options;
                    e && e();
                });
            const { name: t, motionValue: n, element: r, keyframes: a } = this.options,
                o = r?.KeyframeResolver || Vt;
            (this.resolver = new o(a, (e, t) => this.onKeyframesResolved(e, t), t, n, r)), this.resolver.scheduleResolve();
        }
        flatten() {
            super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
        }
        initPlayback(e) {
            const { type: t = "keyframes", repeat: n = 0, repeatDelay: r = 0, repeatType: a, velocity: o = 0 } = this.options,
                i = _(t) ? t : Vn[t] || Fn;
            let s, l;
            i !== Fn && "number" != typeof e[0] && ((s = hn(Bn, wn(e[0], e[1]))), (e = [0, 100]));
            const u = i({ ...this.options, keyframes: e });
            "mirror" === a && (l = i({ ...this.options, keyframes: [...e].reverse(), velocity: -o })), null === u.calculatedDuration && (u.calculatedDuration = R(u));
            const { calculatedDuration: c } = u,
                d = c + r;
            return { generator: u, mirroredGenerator: l, mapPercentToKeyframes: s, calculatedDuration: c, resolvedDuration: d, totalDuration: d * (n + 1) - r };
        }
        onPostResolved() {
            const { autoplay: e = !0 } = this.options;
            k.mainThread++, this.play(), "paused" !== this.pendingPlayState && e ? (this.state = this.pendingPlayState) : this.pause();
        }
        tick(e, t = !1) {
            const { resolved: n } = this;
            if (!n) {
                const { keyframes: e } = this.options;
                return { done: !0, value: e[e.length - 1] };
            }
            const { finalKeyframe: r, generator: a, mirroredGenerator: o, mapPercentToKeyframes: i, keyframes: s, calculatedDuration: l, totalDuration: u, resolvedDuration: c } = n;
            if (null === this.startTime) return a.next(0);
            const { delay: d, repeat: f, repeatType: h, repeatDelay: p, onUpdate: m } = this.options;
            this.speed > 0 ? (this.startTime = Math.min(this.startTime, e)) : this.speed < 0 && (this.startTime = Math.min(e - u / this.speed, this.startTime)),
                t ? (this.currentTime = e) : null !== this.holdTime ? (this.currentTime = this.holdTime) : (this.currentTime = Math.round(e - this.startTime) * this.speed);
            const y = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
                g = this.speed >= 0 ? y < 0 : y > u;
            (this.currentTime = Math.max(y, 0)), "finished" === this.state && null === this.holdTime && (this.currentTime = u);
            let v = this.currentTime,
                b = a;
            if (f) {
                const e = Math.min(this.currentTime, u) / c;
                let t = Math.floor(e),
                    n = e % 1;
                !n && e >= 1 && (n = 1), 1 === n && t--, (t = Math.min(t, f + 1)), Boolean(t % 2) && ("reverse" === h ? ((n = 1 - n), p && (n -= p / c)) : "mirror" === h && (b = o)), (v = Me(0, 1, n) * c);
            }
            const w = g ? { done: !1, value: s[0] } : b.next(v);
            i && (w.value = i(w.value));
            let { done: x } = w;
            g || null === l || (x = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
            const k = null === this.holdTime && ("finished" === this.state || ("running" === this.state && x));
            return k && void 0 !== r && (w.value = nn(s, this.options, r)), m && m(w.value), k && this.finish(), w;
        }
        get duration() {
            const { resolved: e } = this;
            return e ? f(e.calculatedDuration) : 0;
        }
        get time() {
            return f(this.currentTime);
        }
        set time(e) {
            (e = d(e)), (this.currentTime = e), null !== this.holdTime || 0 === this.speed ? (this.holdTime = e) : this.driver && (this.startTime = this.driver.now() - e / this.speed);
        }
        get speed() {
            return this.playbackSpeed;
        }
        set speed(e) {
            const t = this.playbackSpeed !== e;
            (this.playbackSpeed = e), t && (this.time = f(this.currentTime));
        }
        play() {
            if ((this.resolver.isScheduled || this.resolver.resume(), !this._resolved)) return void (this.pendingPlayState = "running");
            if (this.isStopped) return;
            const { driver: e = In, onPlay: t, startTime: n } = this.options;
            this.driver || (this.driver = e((e) => this.tick(e))), t && t();
            const r = this.driver.now();
            null !== this.holdTime ? (this.startTime = r - this.holdTime) : this.startTime ? "finished" === this.state && (this.startTime = r) : (this.startTime = n ?? this.calcStartTime()),
                "finished" === this.state && this.updateFinishedPromise(),
                (this.cancelTime = this.startTime),
                (this.holdTime = null),
                (this.state = "running"),
                this.driver.start();
        }
        pause() {
            this._resolved ? ((this.state = "paused"), (this.holdTime = this.currentTime ?? 0)) : (this.pendingPlayState = "paused");
        }
        complete() {
            "running" !== this.state && this.play(), (this.pendingPlayState = this.state = "finished"), (this.holdTime = null);
        }
        finish() {
            this.teardown(), (this.state = "finished");
            const { onComplete: e } = this.options;
            e && e();
        }
        cancel() {
            null !== this.cancelTime && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise();
        }
        teardown() {
            (this.state = "idle"), this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), (this.startTime = this.cancelTime = null), this.resolver.cancel(), k.mainThread--;
        }
        stopDriver() {
            this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(e) {
            return (this.startTime = 0), this.tick(e, !0);
        }
        get finished() {
            return this.currentFinishedPromise;
        }
    }
    const $n = new Set(["opacity", "clipPath", "filter", "transform"]),
        Hn = s(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
        Wn = { anticipate: Ae, backInOut: Ce, circInOut: Ne };
    class Yn extends rn {
        constructor(e) {
            super(e);
            const { name: t, motionValue: n, element: r, keyframes: a } = this.options;
            (this.resolver = new Zt(a, (e, t) => this.onKeyframesResolved(e, t), t, n, r)), this.resolver.scheduleResolve();
        }
        initPlayback(e, t) {
            let { duration: n = 300, times: r, ease: a, type: o, motionValue: i, name: s, startTime: l } = this.options;
            if (!i.owner || !i.owner.current) return !1;
            if (
                ("string" == typeof a && C() && a in Wn && (a = Wn[a]),
                (function (e) {
                    return _(e.type) || "spring" === e.type || !D(e.ease);
                })(this.options))
            ) {
                const { onComplete: t, onUpdate: i, motionValue: s, element: l, ...u } = this.options,
                    c = (function (e, t) {
                        const n = new Un({ ...t, keyframes: e, repeat: 0, delay: 0, isGenerator: !0 });
                        let r = { done: !1, value: e[0] };
                        const a = [];
                        let o = 0;
                        for (; !r.done && o < 2e4; ) (r = n.sample(o)), a.push(r.value), (o += 10);
                        return { times: void 0, keyframes: a, duration: o - 10, ease: "linear" };
                    })(e, u);
                1 === (e = c.keyframes).length && (e[1] = e[0]), (n = c.duration), (r = c.times), (a = c.ease), (o = "keyframes");
            }
            const u = O(i.owner.current, s, e, { ...this.options, duration: n, times: r, ease: a });
            return (
                (u.startTime = l ?? this.calcStartTime()),
                this.pendingTimeline
                    ? (F(u, this.pendingTimeline), (this.pendingTimeline = void 0))
                    : (u.onfinish = () => {
                          const { onComplete: n } = this.options;
                          i.set(nn(e, this.options, t)), n && n(), this.cancel(), this.resolveFinishedPromise();
                      }),
                { animation: u, duration: n, times: r, type: o, ease: a, keyframes: e }
            );
        }
        get duration() {
            const { resolved: e } = this;
            if (!e) return 0;
            const { duration: t } = e;
            return f(t);
        }
        get time() {
            const { resolved: e } = this;
            if (!e) return 0;
            const { animation: t } = e;
            return f(t.currentTime || 0);
        }
        set time(e) {
            const { resolved: t } = this;
            if (!t) return;
            const { animation: n } = t;
            n.currentTime = d(e);
        }
        get speed() {
            const { resolved: e } = this;
            if (!e) return 1;
            const { animation: t } = e;
            return t.playbackRate;
        }
        get finished() {
            return this.resolved.animation.finished;
        }
        set speed(e) {
            const { resolved: t } = this;
            if (!t) return;
            const { animation: n } = t;
            n.playbackRate = e;
        }
        get state() {
            const { resolved: e } = this;
            if (!e) return "idle";
            const { animation: t } = e;
            return t.playState;
        }
        get startTime() {
            const { resolved: e } = this;
            if (!e) return null;
            const { animation: t } = e;
            return t.startTime;
        }
        attachTimeline(e) {
            if (this._resolved) {
                const { resolved: t } = this;
                if (!t) return l;
                const { animation: n } = t;
                F(n, e);
            } else this.pendingTimeline = e;
            return l;
        }
        play() {
            if (this.isStopped) return;
            const { resolved: e } = this;
            if (!e) return;
            const { animation: t } = e;
            "finished" === t.playState && this.updateFinishedPromise(), t.play();
        }
        pause() {
            const { resolved: e } = this;
            if (!e) return;
            const { animation: t } = e;
            t.pause();
        }
        stop() {
            if ((this.resolver.cancel(), (this.isStopped = !0), "idle" === this.state)) return;
            this.resolveFinishedPromise(), this.updateFinishedPromise();
            const { resolved: e } = this;
            if (!e) return;
            const { animation: t, keyframes: n, duration: r, type: a, ease: o, times: i } = e;
            if ("idle" === t.playState || "finished" === t.playState) return;
            if (this.time) {
                const { motionValue: e, onUpdate: t, onComplete: s, element: l, ...u } = this.options,
                    c = new Un({ ...u, keyframes: n, duration: r, type: a, ease: o, times: i, isGenerator: !0 }),
                    f = d(this.time);
                e.setWithVelocity(c.sample(f - 10).value, c.sample(f).value, 10);
            }
            const { onStop: s } = this.options;
            s && s(), this.cancel();
        }
        complete() {
            const { resolved: e } = this;
            e && e.animation.finish();
        }
        cancel() {
            const { resolved: e } = this;
            e && e.animation.cancel();
        }
        static supports(e) {
            const { motionValue: t, name: n, repeatDelay: r, repeatType: a, damping: o, type: i } = e;
            if (!(t && t.owner && t.owner.current instanceof HTMLElement)) return !1;
            const { onUpdate: s, transformTemplate: l } = t.owner.getProps();
            return Hn() && n && $n.has(n) && ("transform" !== n || !l) && !s && !r && "mirror" !== a && 0 !== o && "inertia" !== i;
        }
    }
    const qn = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        Gn = { type: "keyframes", duration: 0.8 },
        Xn = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        Kn = (e, { keyframes: t }) => (t.length > 2 ? Gn : de.has(e) ? (e.startsWith("scale") ? { type: "spring", stiffness: 550, damping: 0 === t[1] ? 2 * Math.sqrt(550) : 30, restSpeed: 10 } : qn) : Xn),
        Qn = (e, t, n, r = {}, a, o) => (i) => {
            const s = M(r, e) || {},
                l = s.delay || r.delay || 0;
            let { elapsed: u = 0 } = r;
            u -= d(l);
            let c = {
                keyframes: Array.isArray(n) ? n : [null, n],
                ease: "easeOut",
                velocity: t.getVelocity(),
                ...s,
                delay: -u,
                onUpdate: (e) => {
                    t.set(e), s.onUpdate && s.onUpdate(e);
                },
                onComplete: () => {
                    i(), s.onComplete && s.onComplete();
                },
                name: e,
                motionValue: t,
                element: o ? void 0 : a,
            };
            (function ({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: a, repeat: o, repeatType: i, repeatDelay: s, from: l, elapsed: u, ...c }) {
                return !!Object.keys(c).length;
            })(s) || (c = { ...c, ...Kn(e, c) }),
                c.duration && (c.duration = d(c.duration)),
                c.repeatDelay && (c.repeatDelay = d(c.repeatDelay)),
                void 0 !== c.from && (c.keyframes[0] = c.from);
            let f = !1;
            if (((!1 === c.type || (0 === c.duration && !c.repeatDelay)) && ((c.duration = 0), 0 === c.delay && (f = !0)), (c.allowFlatten = !s.type && !s.ease), f && !o && void 0 !== t.get())) {
                const e = nn(c.keyframes, s);
                if (void 0 !== e)
                    return (
                        B.update(() => {
                            c.onUpdate(e), c.onComplete();
                        }),
                        new x([])
                    );
            }
            return !o && Yn.supports(c) ? new Yn(c) : new Un(c);
        };
    function Zn({ protectedKeys: e, needsAnimating: t }, n) {
        const r = e.hasOwnProperty(n) && !0 !== t[n];
        return (t[n] = !1), r;
    }
    function Jn(e, t, { delay: n = 0, transitionOverride: r, type: a } = {}) {
        let { transition: o = e.getDefaultTransition(), transitionEnd: i, ...s } = t;
        r && (o = r);
        const l = [],
            u = a && e.animationState && e.animationState.getState()[a];
        for (const t in s) {
            const r = e.getValue(t, e.latestValues[t] ?? null),
                a = s[t];
            if (void 0 === a || (u && Zn(u, t))) continue;
            const i = { delay: n, ...M(o || {}, t) };
            let c = !1;
            if (window.MotionHandoffAnimation) {
                const n = we(e);
                if (n) {
                    const e = window.MotionHandoffAnimation(n, t, B);
                    null !== e && ((i.startTime = e), (c = !0));
                }
            }
            ge(e, t), r.start(Qn(t, r, a, e.shouldReduceMotion && fe.has(t) ? { type: !1 } : i, e, c));
            const d = r.animation;
            d && l.push(d);
        }
        return (
            i &&
                Promise.all(l).then(() => {
                    B.update(() => {
                        i && me(e, i);
                    });
                }),
            l
        );
    }
    function er(e, t, n = {}) {
        const r = v(e, t, "exit" === n.type ? e.presenceContext?.custom : void 0);
        let { transition: a = e.getDefaultTransition() || {} } = r || {};
        n.transitionOverride && (a = n.transitionOverride);
        const o = r ? () => Promise.all(Jn(e, r, n)) : () => Promise.resolve(),
            i =
                e.variantChildren && e.variantChildren.size
                    ? (r = 0) => {
                          const { delayChildren: o = 0, staggerChildren: i, staggerDirection: s } = a;
                          return (function (e, t, n = 0, r = 0, a = 1, o) {
                              const i = [],
                                  s = (e.variantChildren.size - 1) * r,
                                  l = 1 === a ? (e = 0) => e * r : (e = 0) => s - e * r;
                              return (
                                  Array.from(e.variantChildren)
                                      .sort(tr)
                                      .forEach((e, r) => {
                                          e.notify("AnimationStart", t), i.push(er(e, t, { ...o, delay: n + l(r) }).then(() => e.notify("AnimationComplete", t)));
                                      }),
                                  Promise.all(i)
                              );
                          })(e, t, o + r, i, s, n);
                      }
                    : () => Promise.resolve(),
            { when: s } = a;
        if (s) {
            const [e, t] = "beforeChildren" === s ? [o, i] : [i, o];
            return e().then(() => t());
        }
        return Promise.all([o(), i(n.delay)]);
    }
    function tr(e, t) {
        return e.sortNodePosition(t);
    }
    function nr(e, t, n = {}) {
        let r;
        if ((e.notify("AnimationStart", t), Array.isArray(t))) {
            const a = t.map((t) => er(e, t, n));
            r = Promise.all(a);
        } else if ("string" == typeof t) r = er(e, t, n);
        else {
            const a = "function" == typeof t ? v(e, t, n.custom) : t;
            r = Promise.all(Jn(e, a, n));
        }
        return r.then(() => {
            e.notify("AnimationComplete", t);
        });
    }
    function rr(e, t) {
        if (!Array.isArray(t)) return !1;
        const n = t.length;
        if (n !== e.length) return !1;
        for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
        return !0;
    }
    function ar(e) {
        return "string" == typeof e || Array.isArray(e);
    }
    const or = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
        ir = ["initial", ...or],
        sr = ir.length;
    function lr(e) {
        if (!e) return;
        if (!e.isControllingVariants) {
            const t = (e.parent && lr(e.parent)) || {};
            return void 0 !== e.props.initial && (t.initial = e.props.initial), t;
        }
        const t = {};
        for (let n = 0; n < sr; n++) {
            const r = ir[n],
                a = e.props[r];
            (ar(a) || !1 === a) && (t[r] = a);
        }
        return t;
    }
    const ur = [...or].reverse(),
        cr = or.length;
    function dr(e) {
        let t = (function (e) {
                return (t) => Promise.all(t.map(({ animation: t, options: n }) => nr(e, t, n)));
            })(e),
            n = hr(),
            r = !0;
        const a = (t) => (n, r) => {
            const a = v(e, r, "exit" === t ? e.presenceContext?.custom : void 0);
            if (a) {
                const { transition: e, transitionEnd: t, ...r } = a;
                n = { ...n, ...r, ...t };
            }
            return n;
        };
        function o(o) {
            const { props: i } = e,
                s = lr(e.parent) || {},
                l = [],
                u = new Set();
            let c = {},
                d = 1 / 0;
            for (let t = 0; t < cr; t++) {
                const p = ur[t],
                    y = n[p],
                    g = void 0 !== i[p] ? i[p] : s[p],
                    v = ar(g),
                    b = p === o ? y.isActive : null;
                !1 === b && (d = t);
                let w = g === s[p] && g !== i[p] && v;
                if ((w && r && e.manuallyAnimateOnMount && (w = !1), (y.protectedKeys = { ...c }), (!y.isActive && null === b) || (!g && !y.prevProp) || m(g) || "boolean" == typeof g)) continue;
                const x = ((f = y.prevProp), "string" == typeof (h = g) ? h !== f : !!Array.isArray(h) && !rr(h, f));
                let k = x || (p === o && y.isActive && !w && v) || (t > d && v),
                    S = !1;
                const E = Array.isArray(g) ? g : [g];
                let P = E.reduce(a(p), {});
                !1 === b && (P = {});
                const { prevResolvedValues: T = {} } = y,
                    C = { ...T, ...P },
                    A = (t) => {
                        (k = !0), u.has(t) && ((S = !0), u.delete(t)), (y.needsAnimating[t] = !0);
                        const n = e.getValue(t);
                        n && (n.liveStyle = !1);
                    };
                for (const e in C) {
                    const t = P[e],
                        n = T[e];
                    if (c.hasOwnProperty(e)) continue;
                    let r = !1;
                    (r = he(t) && he(n) ? !rr(t, n) : t !== n), r ? (null != t ? A(e) : u.add(e)) : void 0 !== t && u.has(e) ? A(e) : (y.protectedKeys[e] = !0);
                }
                (y.prevProp = g), (y.prevResolvedValues = P), y.isActive && (c = { ...c, ...P }), r && e.blockInitialAnimation && (k = !1), k && (!w || !x || S) && l.push(...E.map((e) => ({ animation: e, options: { type: p } })));
            }
            var f, h;
            if (u.size) {
                const t = {};
                if ("boolean" != typeof i.initial) {
                    const n = v(e, Array.isArray(i.initial) ? i.initial[0] : i.initial);
                    n && n.transition && (t.transition = n.transition);
                }
                u.forEach((n) => {
                    const r = e.getBaseTarget(n),
                        a = e.getValue(n);
                    a && (a.liveStyle = !0), (t[n] = r ?? null);
                }),
                    l.push({ animation: t });
            }
            let p = Boolean(l.length);
            return !r || (!1 !== i.initial && i.initial !== i.animate) || e.manuallyAnimateOnMount || (p = !1), (r = !1), p ? t(l) : Promise.resolve();
        }
        return {
            animateChanges: o,
            setActive: function (t, r) {
                if (n[t].isActive === r) return Promise.resolve();
                e.variantChildren?.forEach((e) => e.animationState?.setActive(t, r)), (n[t].isActive = r);
                const a = o(t);
                for (const e in n) n[e].protectedKeys = {};
                return a;
            },
            setAnimateFunction: function (n) {
                t = n(e);
            },
            getState: () => n,
            reset: () => {
                (n = hr()), (r = !0);
            },
        };
    }
    function fr(e = !1) {
        return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
    }
    function hr() {
        return { animate: fr(!0), whileInView: fr(), whileHover: fr(), whileTap: fr(), whileDrag: fr(), whileFocus: fr(), exit: fr() };
    }
    class pr {
        constructor(e) {
            (this.isMounted = !1), (this.node = e);
        }
        update() {}
    }
    let mr = 0;
    const yr = {
        animation: {
            Feature: class extends pr {
                constructor(e) {
                    super(e), e.animationState || (e.animationState = dr(e));
                }
                updateAnimationControlsSubscription() {
                    const { animate: e } = this.node.getProps();
                    m(e) && (this.unmountControls = e.subscribe(this.node));
                }
                mount() {
                    this.updateAnimationControlsSubscription();
                }
                update() {
                    const { animate: e } = this.node.getProps(),
                        { animate: t } = this.node.prevProps || {};
                    e !== t && this.updateAnimationControlsSubscription();
                }
                unmount() {
                    this.node.animationState.reset(), this.unmountControls?.();
                }
            },
        },
        exit: {
            Feature: class extends pr {
                constructor() {
                    super(...arguments), (this.id = mr++);
                }
                update() {
                    if (!this.node.presenceContext) return;
                    const { isPresent: e, onExitComplete: t } = this.node.presenceContext,
                        { isPresent: n } = this.node.prevPresenceContext || {};
                    if (!this.node.animationState || e === n) return;
                    const r = this.node.animationState.setActive("exit", !e);
                    t &&
                        !e &&
                        r.then(() => {
                            t(this.id);
                        });
                }
                mount() {
                    const { register: e, onExitComplete: t } = this.node.presenceContext || {};
                    t && t(this.id), e && (this.unmount = e(this.id));
                }
                unmount() {}
            },
        },
    };
    function gr(e, t, n, r = { passive: !0 }) {
        return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
    }
    function vr(e) {
        return { point: { x: e.pageX, y: e.pageY } };
    }
    function br(e, t, n, r) {
        return gr(e, t, ((e) => (t) => te(t) && e(t, vr(t)))(n), r);
    }
    function wr({ top: e, left: t, right: n, bottom: r }) {
        return { x: { min: t, max: n }, y: { min: e, max: r } };
    }
    function xr(e) {
        return e.max - e.min;
    }
    function kr(e, t, n, r = 0.5) {
        (e.origin = r),
            (e.originPoint = an(t.min, t.max, e.origin)),
            (e.scale = xr(n) / xr(t)),
            (e.translate = an(n.min, n.max, e.origin) - e.originPoint),
            ((e.scale >= 0.9999 && e.scale <= 1.0001) || isNaN(e.scale)) && (e.scale = 1),
            ((e.translate >= -0.01 && e.translate <= 0.01) || isNaN(e.translate)) && (e.translate = 0);
    }
    function Sr(e, t, n, r) {
        kr(e.x, t.x, n.x, r ? r.originX : void 0), kr(e.y, t.y, n.y, r ? r.originY : void 0);
    }
    function Er(e, t, n) {
        (e.min = n.min + t.min), (e.max = e.min + xr(t));
    }
    function Pr(e, t, n) {
        (e.min = t.min - n.min), (e.max = e.min + xr(t));
    }
    function Tr(e, t, n) {
        Pr(e.x, t.x, n.x), Pr(e.y, t.y, n.y);
    }
    const Cr = () => ({ x: { min: 0, max: 0 }, y: { min: 0, max: 0 } });
    function Ar(e) {
        return [e("x"), e("y")];
    }
    function Lr(e) {
        return void 0 === e || 1 === e;
    }
    function jr({ scale: e, scaleX: t, scaleY: n }) {
        return !Lr(e) || !Lr(t) || !Lr(n);
    }
    function Nr(e) {
        return jr(e) || Or(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
    }
    function Or(e) {
        return Mr(e.x) || Mr(e.y);
    }
    function Mr(e) {
        return e && "0%" !== e;
    }
    function zr(e, t, n) {
        return n + t * (e - n);
    }
    function Rr(e, t, n, r, a) {
        return void 0 !== a && (e = zr(e, a, r)), zr(e, n, r) + t;
    }
    function _r(e, t = 0, n = 1, r, a) {
        (e.min = Rr(e.min, t, n, r, a)), (e.max = Rr(e.max, t, n, r, a));
    }
    function Dr(e, { x: t, y: n }) {
        _r(e.x, t.translate, t.scale, t.originPoint), _r(e.y, n.translate, n.scale, n.originPoint);
    }
    const Fr = 0.999999999999,
        Ir = 1.0000000000001;
    function Vr(e, t) {
        (e.min = e.min + t), (e.max = e.max + t);
    }
    function Br(e, t, n, r, a = 0.5) {
        _r(e, t, n, an(e.min, e.max, a), r);
    }
    function Ur(e, t) {
        Br(e.x, t.x, t.scaleX, t.scale, t.originX), Br(e.y, t.y, t.scaleY, t.scale, t.originY);
    }
    function $r(e, t) {
        return wr(
            (function (e, t) {
                if (!t) return e;
                const n = t({ x: e.left, y: e.top }),
                    r = t({ x: e.right, y: e.bottom });
                return { top: n.y, left: n.x, bottom: r.y, right: r.x };
            })(e.getBoundingClientRect(), t)
        );
    }
    const Hr = ({ current: e }) => (e ? e.ownerDocument.defaultView : null);
    function Wr(e) {
        return e && "object" == typeof e && Object.prototype.hasOwnProperty.call(e, "current");
    }
    const Yr = (e, t) => Math.abs(e - t);
    class qr {
        constructor(e, t, { transformPagePoint: n, contextWindow: r, dragSnapToOrigin: a = !1 } = {}) {
            if (
                ((this.startEvent = null),
                (this.lastMoveEvent = null),
                (this.lastMoveEventInfo = null),
                (this.handlers = {}),
                (this.contextWindow = window),
                (this.updatePoint = () => {
                    if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
                    const e = Kr(this.lastMoveEventInfo, this.history),
                        t = null !== this.startEvent,
                        n =
                            (function (e, t) {
                                const n = Yr(e.x, t.x),
                                    r = Yr(e.y, t.y);
                                return Math.sqrt(n ** 2 + r ** 2);
                            })(e.offset, { x: 0, y: 0 }) >= 3;
                    if (!t && !n) return;
                    const { point: r } = e,
                        { timestamp: a } = $;
                    this.history.push({ ...r, timestamp: a });
                    const { onStart: o, onMove: i } = this.handlers;
                    t || (o && o(this.lastMoveEvent, e), (this.startEvent = this.lastMoveEvent)), i && i(this.lastMoveEvent, e);
                }),
                (this.handlePointerMove = (e, t) => {
                    (this.lastMoveEvent = e), (this.lastMoveEventInfo = Gr(t, this.transformPagePoint)), B.update(this.updatePoint, !0);
                }),
                (this.handlePointerUp = (e, t) => {
                    this.end();
                    const { onEnd: n, onSessionEnd: r, resumeAnimation: a } = this.handlers;
                    if ((this.dragSnapToOrigin && a && a(), !this.lastMoveEvent || !this.lastMoveEventInfo)) return;
                    const o = Kr("pointercancel" === e.type ? this.lastMoveEventInfo : Gr(t, this.transformPagePoint), this.history);
                    this.startEvent && n && n(e, o), r && r(e, o);
                }),
                !te(e))
            )
                return;
            (this.dragSnapToOrigin = a), (this.handlers = t), (this.transformPagePoint = n), (this.contextWindow = r || window);
            const o = Gr(vr(e), this.transformPagePoint),
                { point: i } = o,
                { timestamp: s } = $;
            this.history = [{ ...i, timestamp: s }];
            const { onSessionStart: l } = t;
            l && l(e, Kr(o, this.history)),
                (this.removeListeners = hn(br(this.contextWindow, "pointermove", this.handlePointerMove), br(this.contextWindow, "pointerup", this.handlePointerUp), br(this.contextWindow, "pointercancel", this.handlePointerUp)));
        }
        updateHandlers(e) {
            this.handlers = e;
        }
        end() {
            this.removeListeners && this.removeListeners(), U(this.updatePoint);
        }
    }
    function Gr(e, t) {
        return t ? { point: t(e.point) } : e;
    }
    function Xr(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
    }
    function Kr({ point: e }, t) {
        return { point: e, delta: Xr(e, Zr(t)), offset: Xr(e, Qr(t)), velocity: Jr(t, 0.1) };
    }
    function Qr(e) {
        return e[0];
    }
    function Zr(e) {
        return e[e.length - 1];
    }
    function Jr(e, t) {
        if (e.length < 2) return { x: 0, y: 0 };
        let n = e.length - 1,
            r = null;
        const a = Zr(e);
        for (; n >= 0 && ((r = e[n]), !(a.timestamp - r.timestamp > d(t))); ) n--;
        if (!r) return { x: 0, y: 0 };
        const o = f(a.timestamp - r.timestamp);
        if (0 === o) return { x: 0, y: 0 };
        const i = { x: (a.x - r.x) / o, y: (a.y - r.y) / o };
        return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
    }
    function ea(e, t, n) {
        return { min: void 0 !== t ? e.min + t : void 0, max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0 };
    }
    function ta(e, t) {
        let n = t.min - e.min,
            r = t.max - e.max;
        return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
    }
    const na = 0.35;
    function ra(e, t, n) {
        return { min: aa(e, t), max: aa(e, n) };
    }
    function aa(e, t) {
        return "number" == typeof e ? e : e[t] || 0;
    }
    const oa = new WeakMap();
    class ia {
        constructor(e) {
            (this.openDragLock = null),
                (this.isDragging = !1),
                (this.currentDirection = null),
                (this.originPoint = { x: 0, y: 0 }),
                (this.constraints = !1),
                (this.hasMutatedConstraints = !1),
                (this.elastic = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
                (this.visualElement = e);
        }
        start(e, { snapToCursor: t = !1 } = {}) {
            const { presenceContext: n } = this.visualElement;
            if (n && !1 === n.isPresent) return;
            const { dragSnapToOrigin: r } = this.getProps();
            this.panSession = new qr(
                e,
                {
                    onSessionStart: (e) => {
                        const { dragSnapToOrigin: n } = this.getProps();
                        n ? this.pauseAnimation() : this.stopAnimation(), t && this.snapToCursor(vr(e).point);
                    },
                    onStart: (e, t) => {
                        const { drag: n, dragPropagation: r, onDragStart: a } = this.getProps();
                        if (
                            n &&
                            !r &&
                            (this.openDragLock && this.openDragLock(),
                            (this.openDragLock =
                                "x" === (o = n) || "y" === o
                                    ? K[o]
                                        ? null
                                        : ((K[o] = !0),
                                          () => {
                                              K[o] = !1;
                                          })
                                    : K.x || K.y
                                    ? null
                                    : ((K.x = K.y = !0),
                                      () => {
                                          K.x = K.y = !1;
                                      })),
                            !this.openDragLock)
                        )
                            return;
                        var o;
                        (this.isDragging = !0),
                            (this.currentDirection = null),
                            this.resolveConstraints(),
                            this.visualElement.projection && ((this.visualElement.projection.isAnimationBlocked = !0), (this.visualElement.projection.target = void 0)),
                            Ar((e) => {
                                let t = this.getAxisMotionValue(e).get() || 0;
                                if (qe.test(t)) {
                                    const { projection: n } = this.visualElement;
                                    if (n && n.layout) {
                                        const r = n.layout.layoutBox[e];
                                        r && (t = xr(r) * (parseFloat(t) / 100));
                                    }
                                }
                                this.originPoint[e] = t;
                            }),
                            a && B.postRender(() => a(e, t)),
                            ge(this.visualElement, "transform");
                        const { animationState: i } = this.visualElement;
                        i && i.setActive("whileDrag", !0);
                    },
                    onMove: (e, t) => {
                        const { dragPropagation: n, dragDirectionLock: r, onDirectionLock: a, onDrag: o } = this.getProps();
                        if (!n && !this.openDragLock) return;
                        const { offset: i } = t;
                        if (r && null === this.currentDirection)
                            return (
                                (this.currentDirection = (function (e, t = 10) {
                                    let n = null;
                                    return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
                                })(i)),
                                void (null !== this.currentDirection && a && a(this.currentDirection))
                            );
                        this.updateAxis("x", t.point, i), this.updateAxis("y", t.point, i), this.visualElement.render(), o && o(e, t);
                    },
                    onSessionEnd: (e, t) => this.stop(e, t),
                    resumeAnimation: () => Ar((e) => "paused" === this.getAnimationState(e) && this.getAxisMotionValue(e).animation?.play()),
                },
                { transformPagePoint: this.visualElement.getTransformPagePoint(), dragSnapToOrigin: r, contextWindow: Hr(this.visualElement) }
            );
        }
        stop(e, t) {
            const n = this.isDragging;
            if ((this.cancel(), !n)) return;
            const { velocity: r } = t;
            this.startAnimation(r);
            const { onDragEnd: a } = this.getProps();
            a && B.postRender(() => a(e, t));
        }
        cancel() {
            this.isDragging = !1;
            const { projection: e, animationState: t } = this.visualElement;
            e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), (this.panSession = void 0);
            const { dragPropagation: n } = this.getProps();
            !n && this.openDragLock && (this.openDragLock(), (this.openDragLock = null)), t && t.setActive("whileDrag", !1);
        }
        updateAxis(e, t, n) {
            const { drag: r } = this.getProps();
            if (!n || !sa(e, r, this.currentDirection)) return;
            const a = this.getAxisMotionValue(e);
            let o = this.originPoint[e] + n[e];
            this.constraints &&
                this.constraints[e] &&
                (o = (function (e, { min: t, max: n }, r) {
                    return void 0 !== t && e < t ? (e = r ? an(t, e, r.min) : Math.max(e, t)) : void 0 !== n && e > n && (e = r ? an(n, e, r.max) : Math.min(e, n)), e;
                })(o, this.constraints[e], this.elastic[e])),
                a.set(o);
        }
        resolveConstraints() {
            const { dragConstraints: e, dragElastic: t } = this.getProps(),
                n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout,
                r = this.constraints;
            e && Wr(e)
                ? this.constraints || (this.constraints = this.resolveRefConstraints())
                : (this.constraints =
                      !(!e || !n) &&
                      (function (e, { top: t, left: n, bottom: r, right: a }) {
                          return { x: ea(e.x, n, a), y: ea(e.y, t, r) };
                      })(n.layoutBox, e)),
                (this.elastic = (function (e = na) {
                    return !1 === e ? (e = 0) : !0 === e && (e = na), { x: ra(e, "left", "right"), y: ra(e, "top", "bottom") };
                })(t)),
                r !== this.constraints &&
                    n &&
                    this.constraints &&
                    !this.hasMutatedConstraints &&
                    Ar((e) => {
                        !1 !== this.constraints &&
                            this.getAxisMotionValue(e) &&
                            (this.constraints[e] = (function (e, t) {
                                const n = {};
                                return void 0 !== t.min && (n.min = t.min - e.min), void 0 !== t.max && (n.max = t.max - e.min), n;
                            })(n.layoutBox[e], this.constraints[e]));
                    });
        }
        resolveRefConstraints() {
            const { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
            if (!e || !Wr(e)) return !1;
            const n = e.current,
                { projection: r } = this.visualElement;
            if (!r || !r.layout) return !1;
            const a = (function (e, t, n) {
                const r = $r(e, n),
                    { scroll: a } = t;
                return a && (Vr(r.x, a.offset.x), Vr(r.y, a.offset.y)), r;
            })(n, r.root, this.visualElement.getTransformPagePoint());
            let o = (function (e, t) {
                return { x: ta(e.x, t.x), y: ta(e.y, t.y) };
            })(r.layout.layoutBox, a);
            if (t) {
                const e = t(
                    (function ({ x: e, y: t }) {
                        return { top: t.min, right: e.max, bottom: t.max, left: e.min };
                    })(o)
                );
                (this.hasMutatedConstraints = !!e), e && (o = wr(e));
            }
            return o;
        }
        startAnimation(e) {
            const { drag: t, dragMomentum: n, dragElastic: r, dragTransition: a, dragSnapToOrigin: o, onDragTransitionEnd: i } = this.getProps(),
                s = this.constraints || {},
                l = Ar((i) => {
                    if (!sa(i, t, this.currentDirection)) return;
                    let l = (s && s[i]) || {};
                    o && (l = { min: 0, max: 0 });
                    const u = r ? 200 : 1e6,
                        c = r ? 40 : 1e7,
                        d = { type: "inertia", velocity: n ? e[i] : 0, bounceStiffness: u, bounceDamping: c, timeConstant: 750, restDelta: 1, restSpeed: 10, ...a, ...l };
                    return this.startAxisValueAnimation(i, d);
                });
            return Promise.all(l).then(i);
        }
        startAxisValueAnimation(e, t) {
            const n = this.getAxisMotionValue(e);
            return ge(this.visualElement, e), n.start(Qn(e, n, 0, t, this.visualElement, !1));
        }
        stopAnimation() {
            Ar((e) => this.getAxisMotionValue(e).stop());
        }
        pauseAnimation() {
            Ar((e) => this.getAxisMotionValue(e).animation?.pause());
        }
        getAnimationState(e) {
            return this.getAxisMotionValue(e).animation?.state;
        }
        getAxisMotionValue(e) {
            const t = `_drag${e.toUpperCase()}`,
                n = this.visualElement.getProps();
            return n[t] || this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0);
        }
        snapToCursor(e) {
            Ar((t) => {
                const { drag: n } = this.getProps();
                if (!sa(t, n, this.currentDirection)) return;
                const { projection: r } = this.visualElement,
                    a = this.getAxisMotionValue(t);
                if (r && r.layout) {
                    const { min: n, max: o } = r.layout.layoutBox[t];
                    a.set(e[t] - an(n, o, 0.5));
                }
            });
        }
        scalePositionWithinConstraints() {
            if (!this.visualElement.current) return;
            const { drag: e, dragConstraints: t } = this.getProps(),
                { projection: n } = this.visualElement;
            if (!Wr(t) || !n || !this.constraints) return;
            this.stopAnimation();
            const r = { x: 0, y: 0 };
            Ar((e) => {
                const t = this.getAxisMotionValue(e);
                if (t && !1 !== this.constraints) {
                    const n = t.get();
                    r[e] = (function (e, t) {
                        let n = 0.5;
                        const r = xr(e),
                            a = xr(t);
                        return a > r ? (n = u(t.min, t.max - r, e.min)) : r > a && (n = u(e.min, e.max - a, t.min)), Me(0, 1, n);
                    })({ min: n, max: n }, this.constraints[e]);
                }
            });
            const { transformTemplate: a } = this.visualElement.getProps();
            (this.visualElement.current.style.transform = a ? a({}, "") : "none"),
                n.root && n.root.updateScroll(),
                n.updateLayout(),
                this.resolveConstraints(),
                Ar((t) => {
                    if (!sa(t, e, null)) return;
                    const n = this.getAxisMotionValue(t),
                        { min: a, max: o } = this.constraints[t];
                    n.set(an(a, o, r[t]));
                });
        }
        addListeners() {
            if (!this.visualElement.current) return;
            oa.set(this.visualElement, this);
            const e = br(this.visualElement.current, "pointerdown", (e) => {
                    const { drag: t, dragListener: n = !0 } = this.getProps();
                    t && n && this.start(e);
                }),
                t = () => {
                    const { dragConstraints: e } = this.getProps();
                    Wr(e) && e.current && (this.constraints = this.resolveRefConstraints());
                },
                { projection: n } = this.visualElement,
                r = n.addEventListener("measure", t);
            n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()), B.read(t);
            const a = gr(window, "resize", () => this.scalePositionWithinConstraints()),
                o = n.addEventListener("didUpdate", ({ delta: e, hasLayoutChanged: t }) => {
                    this.isDragging &&
                        t &&
                        (Ar((t) => {
                            const n = this.getAxisMotionValue(t);
                            n && ((this.originPoint[t] += e[t].translate), n.set(n.get() + e[t].translate));
                        }),
                        this.visualElement.render());
                });
            return () => {
                a(), e(), r(), o && o();
            };
        }
        getProps() {
            const e = this.visualElement.getProps(),
                { drag: t = !1, dragDirectionLock: n = !1, dragPropagation: r = !1, dragConstraints: a = !1, dragElastic: o = na, dragMomentum: i = !0 } = e;
            return { ...e, drag: t, dragDirectionLock: n, dragPropagation: r, dragConstraints: a, dragElastic: o, dragMomentum: i };
        }
    }
    function sa(e, t, n) {
        return !((!0 !== t && t !== e) || (null !== n && n !== e));
    }
    const la = (e) => (t, n) => {
        e && B.postRender(() => e(t, n));
    };
    var ua = n(848);
    const ca = (0, r.createContext)(null),
        da = (0, r.createContext)({}),
        fa = (0, r.createContext)({}),
        ha = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
    function pa(e, t) {
        return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
    }
    const ma = {
            correct: (e, t) => {
                if (!t.target) return e;
                if ("string" == typeof e) {
                    if (!Ge.test(e)) return e;
                    e = parseFloat(e);
                }
                return `${pa(e, t.target.x)}% ${pa(e, t.target.y)}%`;
            },
        },
        ya = {
            correct: (e, { treeScale: t, projectionDelta: n }) => {
                const r = e,
                    a = lt.parse(e);
                if (a.length > 5) return r;
                const o = lt.createTransformer(e),
                    i = "number" != typeof a[0] ? 1 : 0,
                    s = n.x.scale * t.x,
                    l = n.y.scale * t.y;
                (a[0 + i] /= s), (a[1 + i] /= l);
                const u = an(s, l, 0.5);
                return "number" == typeof a[2 + i] && (a[2 + i] /= u), "number" == typeof a[3 + i] && (a[3 + i] /= u), o(a);
            },
        },
        ga = {};
    class va extends r.Component {
        componentDidMount() {
            const { visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: r } = this.props,
                { projection: a } = e;
            !(function (e) {
                for (const t in e) (ga[t] = e[t]), $t(t) && (ga[t].isCSSVariable = !0);
            })(wa),
                a &&
                    (t.group && t.group.add(a),
                    n && n.register && r && n.register(a),
                    a.root.didUpdate(),
                    a.addEventListener("animationComplete", () => {
                        this.safeToRemove();
                    }),
                    a.setOptions({ ...a.options, onExitComplete: () => this.safeToRemove() })),
                (ha.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(e) {
            const { layoutDependency: t, visualElement: n, drag: r, isPresent: a } = this.props,
                o = n.projection;
            return o
                ? ((o.isPresent = a),
                  r || e.layoutDependency !== t || void 0 === t || e.isPresent !== a ? o.willUpdate() : this.safeToRemove(),
                  e.isPresent !== a &&
                      (a
                          ? o.promote()
                          : o.relegate() ||
                            B.postRender(() => {
                                const e = o.getStack();
                                (e && e.members.length) || this.safeToRemove();
                            })),
                  null)
                : null;
        }
        componentDidUpdate() {
            const { projection: e } = this.props.visualElement;
            e &&
                (e.root.didUpdate(),
                W.postRender(() => {
                    !e.currentAnimation && e.isLead() && this.safeToRemove();
                }));
        }
        componentWillUnmount() {
            const { visualElement: e, layoutGroup: t, switchLayoutGroup: n } = this.props,
                { projection: r } = e;
            r && (r.scheduleCheckAfterUnmount(), t && t.group && t.group.remove(r), n && n.deregister && n.deregister(r));
        }
        safeToRemove() {
            const { safeToRemove: e } = this.props;
            e && e();
        }
        render() {
            return null;
        }
    }
    function ba(e) {
        const [t, n] = (function (e = !0) {
                const t = (0, r.useContext)(ca);
                if (null === t) return [!0, null];
                const { isPresent: n, onExitComplete: a, register: o } = t,
                    i = (0, r.useId)();
                (0, r.useEffect)(() => {
                    if (e) return o(i);
                }, [e]);
                const s = (0, r.useCallback)(() => e && a && a(i), [i, a, e]);
                return !n && a ? [!1, s] : [!0];
            })(),
            a = (0, r.useContext)(da);
        return (0, ua.jsx)(va, { ...e, layoutGroup: a, switchLayoutGroup: (0, r.useContext)(fa), isPresent: t, safeToRemove: n });
    }
    const wa = {
            borderRadius: { ...ma, applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"] },
            borderTopLeftRadius: ma,
            borderTopRightRadius: ma,
            borderBottomLeftRadius: ma,
            borderBottomRightRadius: ma,
            boxShadow: ya,
        },
        xa = (e, t) => e.depth - t.depth;
    class ka {
        constructor() {
            (this.children = []), (this.isDirty = !1);
        }
        add(e) {
            o(this.children, e), (this.isDirty = !0);
        }
        remove(e) {
            i(this.children, e), (this.isDirty = !0);
        }
        forEach(e) {
            this.isDirty && this.children.sort(xa), (this.isDirty = !1), this.children.forEach(e);
        }
    }
    function Sa(e) {
        const t = ye(e) ? e.get() : e;
        return (n = t), Boolean(n && "object" == typeof n && n.mix && n.toValue) ? t.toValue() : t;
        var n;
    }
    const Ea = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        Pa = Ea.length,
        Ta = (e) => ("string" == typeof e ? parseFloat(e) : e),
        Ca = (e) => "number" == typeof e || Ge.test(e);
    function Aa(e, t) {
        return void 0 !== e[t] ? e[t] : e.borderRadius;
    }
    const La = Na(0, 0.5, je),
        ja = Na(0.5, 0.95, l);
    function Na(e, t, n) {
        return (r) => (r < e ? 0 : r > t ? 1 : n(u(e, t, r)));
    }
    function Oa(e, t) {
        (e.min = t.min), (e.max = t.max);
    }
    function Ma(e, t) {
        Oa(e.x, t.x), Oa(e.y, t.y);
    }
    function za(e, t) {
        (e.translate = t.translate), (e.scale = t.scale), (e.originPoint = t.originPoint), (e.origin = t.origin);
    }
    function Ra(e, t, n, r, a) {
        return (e = zr((e -= t), 1 / n, r)), void 0 !== a && (e = zr(e, 1 / a, r)), e;
    }
    function _a(e, t, [n, r, a], o, i) {
        !(function (e, t = 0, n = 1, r = 0.5, a, o = e, i = e) {
            if ((qe.test(t) && ((t = parseFloat(t)), (t = an(i.min, i.max, t / 100) - i.min)), "number" != typeof t)) return;
            let s = an(o.min, o.max, r);
            e === o && (s -= t), (e.min = Ra(e.min, t, n, s, a)), (e.max = Ra(e.max, t, n, s, a));
        })(e, t[n], t[r], t[a], t.scale, o, i);
    }
    const Da = ["x", "scaleX", "originX"],
        Fa = ["y", "scaleY", "originY"];
    function Ia(e, t, n, r) {
        _a(e.x, t, Da, n ? n.x : void 0, r ? r.x : void 0), _a(e.y, t, Fa, n ? n.y : void 0, r ? r.y : void 0);
    }
    function Va(e) {
        return 0 === e.translate && 1 === e.scale;
    }
    function Ba(e) {
        return Va(e.x) && Va(e.y);
    }
    function Ua(e, t) {
        return e.min === t.min && e.max === t.max;
    }
    function $a(e, t) {
        return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
    }
    function Ha(e, t) {
        return $a(e.x, t.x) && $a(e.y, t.y);
    }
    function Wa(e) {
        return xr(e.x) / xr(e.y);
    }
    function Ya(e, t) {
        return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
    }
    class qa {
        constructor() {
            this.members = [];
        }
        add(e) {
            o(this.members, e), e.scheduleRender();
        }
        remove(e) {
            if ((i(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead)) {
                const e = this.members[this.members.length - 1];
                e && this.promote(e);
            }
        }
        relegate(e) {
            const t = this.members.findIndex((t) => e === t);
            if (0 === t) return !1;
            let n;
            for (let e = t; e >= 0; e--) {
                const t = this.members[e];
                if (!1 !== t.isPresent) {
                    n = t;
                    break;
                }
            }
            return !!n && (this.promote(n), !0);
        }
        promote(e, t) {
            const n = this.lead;
            if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
                n.instance && n.scheduleRender(),
                    e.scheduleRender(),
                    (e.resumeFrom = n),
                    t && (e.resumeFrom.preserveOpacity = !0),
                    n.snapshot && ((e.snapshot = n.snapshot), (e.snapshot.latestValues = n.animationValues || n.latestValues)),
                    e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
                const { crossfade: r } = e.options;
                !1 === r && n.hide();
            }
        }
        exitAnimationComplete() {
            this.members.forEach((e) => {
                const { options: t, resumingFrom: n } = e;
                t.onExitComplete && t.onExitComplete(), n && n.options.onExitComplete && n.options.onExitComplete();
            });
        }
        scheduleRender() {
            this.members.forEach((e) => {
                e.instance && e.scheduleRender(!1);
            });
        }
        removeLeadSnapshot() {
            this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
    }
    const Ga = { nodes: 0, calculatedTargetDeltas: 0, calculatedProjections: 0 },
        Xa = ["", "X", "Y", "Z"],
        Ka = { visibility: "hidden" };
    let Qa = 0;
    function Za(e, t, n, r) {
        const { latestValues: a } = t;
        a[e] && ((n[e] = a[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
    }
    function Ja(e) {
        if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
        const { visualElement: t } = e.options;
        if (!t) return;
        const n = we(t);
        if (window.MotionHasOptimisedAnimation(n, "transform")) {
            const { layout: t, layoutId: r } = e.options;
            window.MotionCancelOptimisedAnimation(n, "transform", B, !(t || r));
        }
        const { parent: r } = e;
        r && !r.hasCheckedOptimisedAppear && Ja(r);
    }
    function eo({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: a }) {
        return class {
            constructor(e = {}, n = t?.()) {
                (this.id = Qa++),
                    (this.animationId = 0),
                    (this.children = new Set()),
                    (this.options = {}),
                    (this.isTreeAnimating = !1),
                    (this.isAnimationBlocked = !1),
                    (this.isLayoutDirty = !1),
                    (this.isProjectionDirty = !1),
                    (this.isSharedProjectionDirty = !1),
                    (this.isTransformDirty = !1),
                    (this.updateManuallyBlocked = !1),
                    (this.updateBlockedByResize = !1),
                    (this.isUpdating = !1),
                    (this.isSVG = !1),
                    (this.needsReset = !1),
                    (this.shouldResetTransform = !1),
                    (this.hasCheckedOptimisedAppear = !1),
                    (this.treeScale = { x: 1, y: 1 }),
                    (this.eventHandlers = new Map()),
                    (this.hasTreeAnimated = !1),
                    (this.updateScheduled = !1),
                    (this.scheduleUpdate = () => this.update()),
                    (this.projectionUpdateScheduled = !1),
                    (this.checkUpdateFailed = () => {
                        this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
                    }),
                    (this.updateProjection = () => {
                        (this.projectionUpdateScheduled = !1),
                            S.value && (Ga.nodes = Ga.calculatedTargetDeltas = Ga.calculatedProjections = 0),
                            this.nodes.forEach(ro),
                            this.nodes.forEach(co),
                            this.nodes.forEach(fo),
                            this.nodes.forEach(ao),
                            S.addProjectionMetrics && S.addProjectionMetrics(Ga);
                    }),
                    (this.resolvedRelativeTargetAt = 0),
                    (this.hasProjected = !1),
                    (this.isVisible = !0),
                    (this.animationProgress = 0),
                    (this.sharedNodes = new Map()),
                    (this.latestValues = e),
                    (this.root = n ? n.root || n : this),
                    (this.path = n ? [...n.path, n] : []),
                    (this.parent = n),
                    (this.depth = n ? n.depth + 1 : 0);
                for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
                this.root === this && (this.nodes = new ka());
            }
            addEventListener(e, t) {
                return this.eventHandlers.has(e) || this.eventHandlers.set(e, new c()), this.eventHandlers.get(e).add(t);
            }
            notifyListeners(e, ...t) {
                const n = this.eventHandlers.get(e);
                n && n.notify(...t);
            }
            hasListeners(e) {
                return this.eventHandlers.has(e);
            }
            mount(t, n = this.root.hasTreeAnimated) {
                if (this.instance) return;
                var r;
                (this.isSVG = (r = t) instanceof SVGElement && "svg" !== r.tagName), (this.instance = t);
                const { layoutId: a, layout: o, visualElement: i } = this.options;
                if ((i && !i.current && i.mount(t), this.root.nodes.add(this), this.parent && this.parent.children.add(this), n && (o || a) && (this.isLayoutDirty = !0), e)) {
                    let n;
                    const r = () => (this.root.updateBlockedByResize = !1);
                    e(t, () => {
                        (this.root.updateBlockedByResize = !0),
                            n && n(),
                            (n = (function (e, t) {
                                const n = X.now(),
                                    r = ({ timestamp: a }) => {
                                        const o = a - n;
                                        o >= t && (U(r), e(o - t));
                                    };
                                return B.read(r, !0), () => U(r);
                            })(r, 250)),
                            ha.hasAnimatedSinceResize && ((ha.hasAnimatedSinceResize = !1), this.nodes.forEach(uo));
                    });
                }
                a && this.root.registerSharedNode(a, this),
                    !1 !== this.options.animate &&
                        i &&
                        (a || o) &&
                        this.addEventListener("didUpdate", ({ delta: e, hasLayoutChanged: t, hasRelativeLayoutChanged: n, layout: r }) => {
                            if (this.isTreeAnimationBlocked()) return (this.target = void 0), void (this.relativeTarget = void 0);
                            const a = this.options.transition || i.getDefaultTransition() || vo,
                                { onLayoutAnimationStart: o, onLayoutAnimationComplete: s } = i.getProps(),
                                l = !this.targetLayout || !Ha(this.targetLayout, r),
                                u = !t && n;
                            if (this.options.layoutRoot || this.resumeFrom || u || (t && (l || !this.currentAnimation))) {
                                this.resumeFrom && ((this.resumingFrom = this.resumeFrom), (this.resumingFrom.resumingFrom = void 0)), this.setAnimationOrigin(e, u);
                                const t = { ...M(a, "layout"), onPlay: o, onComplete: s };
                                (i.shouldReduceMotion || this.options.layoutRoot) && ((t.delay = 0), (t.type = !1)), this.startAnimation(t);
                            } else t || uo(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                            this.targetLayout = r;
                        });
            }
            unmount() {
                this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                const e = this.getStack();
                e && e.remove(this), this.parent && this.parent.children.delete(this), (this.instance = void 0), U(this.updateProjection);
            }
            blockUpdate() {
                this.updateManuallyBlocked = !0;
            }
            unblockUpdate() {
                this.updateManuallyBlocked = !1;
            }
            isUpdateBlocked() {
                return this.updateManuallyBlocked || this.updateBlockedByResize;
            }
            isTreeAnimationBlocked() {
                return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1;
            }
            startUpdate() {
                this.isUpdateBlocked() || ((this.isUpdating = !0), this.nodes && this.nodes.forEach(ho), this.animationId++);
            }
            getTransformTemplate() {
                const { visualElement: e } = this.options;
                return e && e.getProps().transformTemplate;
            }
            willUpdate(e = !0) {
                if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) return void (this.options.onExitComplete && this.options.onExitComplete());
                if ((window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Ja(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)) return;
                this.isLayoutDirty = !0;
                for (let e = 0; e < this.path.length; e++) {
                    const t = this.path[e];
                    (t.shouldResetTransform = !0), t.updateScroll("snapshot"), t.options.layoutRoot && t.willUpdate(!1);
                }
                const { layoutId: t, layout: n } = this.options;
                if (void 0 === t && !n) return;
                const r = this.getTransformTemplate();
                (this.prevTransformTemplateValue = r ? r(this.latestValues, "") : void 0), this.updateSnapshot(), e && this.notifyListeners("willUpdate");
            }
            update() {
                if (((this.updateScheduled = !1), this.isUpdateBlocked())) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(io);
                this.isUpdating || this.nodes.forEach(so), (this.isUpdating = !1), this.nodes.forEach(lo), this.nodes.forEach(to), this.nodes.forEach(no), this.clearAllSnapshots();
                const e = X.now();
                ($.delta = Me(0, 1e3 / 60, e - $.timestamp)), ($.timestamp = e), ($.isProcessing = !0), H.update.process($), H.preRender.process($), H.render.process($), ($.isProcessing = !1);
            }
            didUpdate() {
                this.updateScheduled || ((this.updateScheduled = !0), W.read(this.scheduleUpdate));
            }
            clearAllSnapshots() {
                this.nodes.forEach(oo), this.sharedNodes.forEach(po);
            }
            scheduleUpdateProjection() {
                this.projectionUpdateScheduled || ((this.projectionUpdateScheduled = !0), B.preRender(this.updateProjection, !1, !0));
            }
            scheduleCheckAfterUnmount() {
                B.postRender(() => {
                    this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
                });
            }
            updateSnapshot() {
                !this.snapshot && this.instance && ((this.snapshot = this.measure()), !this.snapshot || xr(this.snapshot.measuredBox.x) || xr(this.snapshot.measuredBox.y) || (this.snapshot = void 0));
            }
            updateLayout() {
                if (!this.instance) return;
                if ((this.updateScroll(), !((this.options.alwaysMeasureLayout && this.isLead()) || this.isLayoutDirty))) return;
                if (this.resumeFrom && !this.resumeFrom.instance) for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
                const e = this.layout;
                (this.layout = this.measure(!1)), (this.layoutCorrected = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }), (this.isLayoutDirty = !1), (this.projectionDelta = void 0), this.notifyListeners("measure", this.layout.layoutBox);
                const { visualElement: t } = this.options;
                t && t.notify("LayoutMeasure", this.layout.layoutBox, e ? e.layoutBox : void 0);
            }
            updateScroll(e = "measure") {
                let t = Boolean(this.options.layoutScroll && this.instance);
                if ((this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1), t)) {
                    const t = r(this.instance);
                    this.scroll = { animationId: this.root.animationId, phase: e, isRoot: t, offset: n(this.instance), wasRoot: this.scroll ? this.scroll.isRoot : t };
                }
            }
            resetTransform() {
                if (!a) return;
                const e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                    t = this.projectionDelta && !Ba(this.projectionDelta),
                    n = this.getTransformTemplate(),
                    r = n ? n(this.latestValues, "") : void 0,
                    o = r !== this.prevTransformTemplateValue;
                e && (t || Nr(this.latestValues) || o) && (a(this.instance, r), (this.shouldResetTransform = !1), this.scheduleRender());
            }
            measure(e = !0) {
                const t = this.measurePageBox();
                let n = this.removeElementScroll(t);
                var r;
                return e && (n = this.removeTransform(n)), xo((r = n).x), xo(r.y), { animationId: this.root.animationId, measuredBox: t, layoutBox: n, latestValues: {}, source: this.id };
            }
            measurePageBox() {
                const { visualElement: e } = this.options;
                if (!e) return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                const t = e.measureViewportBox();
                if (!this.scroll?.wasRoot && !this.path.some(So)) {
                    const { scroll: e } = this.root;
                    e && (Vr(t.x, e.offset.x), Vr(t.y, e.offset.y));
                }
                return t;
            }
            removeElementScroll(e) {
                const t = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                if ((Ma(t, e), this.scroll?.wasRoot)) return t;
                for (let n = 0; n < this.path.length; n++) {
                    const r = this.path[n],
                        { scroll: a, options: o } = r;
                    r !== this.root && a && o.layoutScroll && (a.wasRoot && Ma(t, e), Vr(t.x, a.offset.x), Vr(t.y, a.offset.y));
                }
                return t;
            }
            applyTransform(e, t = !1) {
                const n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                Ma(n, e);
                for (let e = 0; e < this.path.length; e++) {
                    const r = this.path[e];
                    !t && r.options.layoutScroll && r.scroll && r !== r.root && Ur(n, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }), Nr(r.latestValues) && Ur(n, r.latestValues);
                }
                return Nr(this.latestValues) && Ur(n, this.latestValues), n;
            }
            removeTransform(e) {
                const t = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                Ma(t, e);
                for (let e = 0; e < this.path.length; e++) {
                    const n = this.path[e];
                    if (!n.instance) continue;
                    if (!Nr(n.latestValues)) continue;
                    jr(n.latestValues) && n.updateSnapshot();
                    const r = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                    Ma(r, n.measurePageBox()), Ia(t, n.latestValues, n.snapshot ? n.snapshot.layoutBox : void 0, r);
                }
                return Nr(this.latestValues) && Ia(t, this.latestValues), t;
            }
            setTargetDelta(e) {
                (this.targetDelta = e), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0);
            }
            setOptions(e) {
                this.options = { ...this.options, ...e, crossfade: void 0 === e.crossfade || e.crossfade };
            }
            clearMeasurements() {
                (this.scroll = void 0), (this.layout = void 0), (this.snapshot = void 0), (this.prevTransformTemplateValue = void 0), (this.targetDelta = void 0), (this.target = void 0), (this.isLayoutDirty = !1);
            }
            forceRelativeParentToResolveTarget() {
                this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== $.timestamp && this.relativeParent.resolveTargetDelta(!0);
            }
            resolveTargetDelta(e = !1) {
                const t = this.getLead();
                this.isProjectionDirty || (this.isProjectionDirty = t.isProjectionDirty),
                    this.isTransformDirty || (this.isTransformDirty = t.isTransformDirty),
                    this.isSharedProjectionDirty || (this.isSharedProjectionDirty = t.isSharedProjectionDirty);
                const n = Boolean(this.resumingFrom) || this !== t;
                if (!(e || (n && this.isSharedProjectionDirty) || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
                const { layout: r, layoutId: a } = this.options;
                if (this.layout && (r || a)) {
                    if (((this.resolvedRelativeTargetAt = $.timestamp), !this.targetDelta && !this.relativeTarget)) {
                        const e = this.getClosestProjectingParent();
                        e && e.layout && 1 !== this.animationProgress
                            ? ((this.relativeParent = e),
                              this.forceRelativeParentToResolveTarget(),
                              (this.relativeTarget = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
                              (this.relativeTargetOrigin = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
                              Tr(this.relativeTargetOrigin, this.layout.layoutBox, e.layout.layoutBox),
                              Ma(this.relativeTarget, this.relativeTargetOrigin))
                            : (this.relativeParent = this.relativeTarget = void 0);
                    }
                    if (this.relativeTarget || this.targetDelta) {
                        var o, i, s;
                        if (
                            (this.target || ((this.target = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }), (this.targetWithTransforms = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } })),
                            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target
                                ? (this.forceRelativeParentToResolveTarget(), (o = this.target), (i = this.relativeTarget), (s = this.relativeParent.target), Er(o.x, i.x, s.x), Er(o.y, i.y, s.y))
                                : this.targetDelta
                                ? (Boolean(this.resumingFrom) ? (this.target = this.applyTransform(this.layout.layoutBox)) : Ma(this.target, this.layout.layoutBox), Dr(this.target, this.targetDelta))
                                : Ma(this.target, this.layout.layoutBox),
                            this.attemptToResolveRelativeTarget)
                        ) {
                            this.attemptToResolveRelativeTarget = !1;
                            const e = this.getClosestProjectingParent();
                            e && Boolean(e.resumingFrom) === Boolean(this.resumingFrom) && !e.options.layoutScroll && e.target && 1 !== this.animationProgress
                                ? ((this.relativeParent = e),
                                  this.forceRelativeParentToResolveTarget(),
                                  (this.relativeTarget = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
                                  (this.relativeTargetOrigin = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
                                  Tr(this.relativeTargetOrigin, this.target, e.target),
                                  Ma(this.relativeTarget, this.relativeTargetOrigin))
                                : (this.relativeParent = this.relativeTarget = void 0);
                        }
                        S.value && Ga.calculatedTargetDeltas++;
                    }
                }
            }
            getClosestProjectingParent() {
                if (this.parent && !jr(this.parent.latestValues) && !Or(this.parent.latestValues)) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
            }
            isProjecting() {
                return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
            }
            calcProjection() {
                const e = this.getLead(),
                    t = Boolean(this.resumingFrom) || this !== e;
                let n = !0;
                if (((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1), t && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === $.timestamp && (n = !1), n)) return;
                const { layout: r, layoutId: a } = this.options;
                if (
                    ((this.isTreeAnimating = Boolean((this.parent && this.parent.isTreeAnimating) || this.currentAnimation || this.pendingAnimation)),
                    this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                    !this.layout || (!r && !a))
                )
                    return;
                Ma(this.layoutCorrected, this.layout.layoutBox);
                const o = this.treeScale.x,
                    i = this.treeScale.y;
                !(function (e, t, n, r = !1) {
                    const a = n.length;
                    if (!a) return;
                    let o, i;
                    t.x = t.y = 1;
                    for (let s = 0; s < a; s++) {
                        (o = n[s]), (i = o.projectionDelta);
                        const { visualElement: a } = o.options;
                        (a && a.props.style && "contents" === a.props.style.display) ||
                            (r && o.options.layoutScroll && o.scroll && o !== o.root && Ur(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
                            i && ((t.x *= i.x.scale), (t.y *= i.y.scale), Dr(e, i)),
                            r && Nr(o.latestValues) && Ur(e, o.latestValues));
                    }
                    t.x < Ir && t.x > Fr && (t.x = 1), t.y < Ir && t.y > Fr && (t.y = 1);
                })(this.layoutCorrected, this.treeScale, this.path, t),
                    !e.layout || e.target || (1 === this.treeScale.x && 1 === this.treeScale.y) || ((e.target = e.layout.layoutBox), (e.targetWithTransforms = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }));
                const { target: s } = e;
                s
                    ? (this.projectionDelta && this.prevProjectionDelta ? (za(this.prevProjectionDelta.x, this.projectionDelta.x), za(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(),
                      Sr(this.projectionDelta, this.layoutCorrected, s, this.latestValues),
                      (this.treeScale.x === o && this.treeScale.y === i && Ya(this.projectionDelta.x, this.prevProjectionDelta.x) && Ya(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                          ((this.hasProjected = !0), this.scheduleRender(), this.notifyListeners("projectionUpdate", s)),
                      S.value && Ga.calculatedProjections++)
                    : this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
            }
            hide() {
                this.isVisible = !1;
            }
            show() {
                this.isVisible = !0;
            }
            scheduleRender(e = !0) {
                if ((this.options.visualElement?.scheduleRender(), e)) {
                    const e = this.getStack();
                    e && e.scheduleRender();
                }
                this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
            }
            createProjectionDeltas() {
                (this.prevProjectionDelta = { x: { translate: 0, scale: 1, origin: 0, originPoint: 0 }, y: { translate: 0, scale: 1, origin: 0, originPoint: 0 } }),
                    (this.projectionDelta = { x: { translate: 0, scale: 1, origin: 0, originPoint: 0 }, y: { translate: 0, scale: 1, origin: 0, originPoint: 0 } }),
                    (this.projectionDeltaWithTransform = { x: { translate: 0, scale: 1, origin: 0, originPoint: 0 }, y: { translate: 0, scale: 1, origin: 0, originPoint: 0 } });
            }
            setAnimationOrigin(e, t = !1) {
                const n = this.snapshot,
                    r = n ? n.latestValues : {},
                    a = { ...this.latestValues },
                    o = { x: { translate: 0, scale: 1, origin: 0, originPoint: 0 }, y: { translate: 0, scale: 1, origin: 0, originPoint: 0 } };
                (this.relativeParent && this.relativeParent.options.layoutRoot) || (this.relativeTarget = this.relativeTargetOrigin = void 0), (this.attemptToResolveRelativeTarget = !t);
                const i = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } },
                    s = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0),
                    l = this.getStack(),
                    u = !l || l.members.length <= 1,
                    c = Boolean(s && !u && !0 === this.options.crossfade && !this.path.some(go));
                let d;
                (this.animationProgress = 0),
                    (this.mixTargetDelta = (t) => {
                        const n = t / 1e3;
                        var l, f, h, p, m, y;
                        mo(o.x, e.x, n),
                            mo(o.y, e.y, n),
                            this.setTargetDelta(o),
                            this.relativeTarget &&
                                this.relativeTargetOrigin &&
                                this.layout &&
                                this.relativeParent &&
                                this.relativeParent.layout &&
                                (Tr(i, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                                (h = this.relativeTarget),
                                (p = this.relativeTargetOrigin),
                                (m = i),
                                (y = n),
                                yo(h.x, p.x, m.x, y),
                                yo(h.y, p.y, m.y, y),
                                d && ((l = this.relativeTarget), (f = d), Ua(l.x, f.x) && Ua(l.y, f.y)) && (this.isProjectionDirty = !1),
                                d || (d = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
                                Ma(d, this.relativeTarget)),
                            s &&
                                ((this.animationValues = a),
                                (function (e, t, n, r, a, o) {
                                    a
                                        ? ((e.opacity = an(0, void 0 !== n.opacity ? n.opacity : 1, La(r))), (e.opacityExit = an(void 0 !== t.opacity ? t.opacity : 1, 0, ja(r))))
                                        : o && (e.opacity = an(void 0 !== t.opacity ? t.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, r));
                                    for (let a = 0; a < Pa; a++) {
                                        const o = `border${Ea[a]}Radius`;
                                        let i = Aa(t, o),
                                            s = Aa(n, o);
                                        (void 0 === i && void 0 === s) ||
                                            (i || (i = 0), s || (s = 0), 0 === i || 0 === s || Ca(i) === Ca(s) ? ((e[o] = Math.max(an(Ta(i), Ta(s), r), 0)), (qe.test(s) || qe.test(i)) && (e[o] += "%")) : (e[o] = s));
                                    }
                                    (t.rotate || n.rotate) && (e.rotate = an(t.rotate || 0, n.rotate || 0, r));
                                })(a, r, this.latestValues, n, c, u)),
                            this.root.scheduleUpdateProjection(),
                            this.scheduleRender(),
                            (this.animationProgress = n);
                    }),
                    this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
            }
            startAnimation(e) {
                this.notifyListeners("animationStart"),
                    this.currentAnimation && this.currentAnimation.stop(),
                    this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
                    this.pendingAnimation && (U(this.pendingAnimation), (this.pendingAnimation = void 0)),
                    (this.pendingAnimation = B.update(() => {
                        (ha.hasAnimatedSinceResize = !0),
                            k.layout++,
                            (this.currentAnimation = (function (e, t, n) {
                                const r = ye(0) ? 0 : ue(0);
                                return r.start(Qn("", r, 1e3, n)), r.animation;
                            })(0, 0, {
                                ...e,
                                onUpdate: (t) => {
                                    this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
                                },
                                onStop: () => {
                                    k.layout--;
                                },
                                onComplete: () => {
                                    k.layout--, e.onComplete && e.onComplete(), this.completeAnimation();
                                },
                            })),
                            this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                            (this.pendingAnimation = void 0);
                    }));
            }
            completeAnimation() {
                this.resumingFrom && ((this.resumingFrom.currentAnimation = void 0), (this.resumingFrom.preserveOpacity = void 0));
                const e = this.getStack();
                e && e.exitAnimationComplete(), (this.resumingFrom = this.currentAnimation = this.animationValues = void 0), this.notifyListeners("animationComplete");
            }
            finishAnimation() {
                this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation();
            }
            applyTransformsToTarget() {
                const e = this.getLead();
                let { targetWithTransforms: t, target: n, layout: r, latestValues: a } = e;
                if (t && n && r) {
                    if (this !== e && this.layout && r && ko(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
                        n = this.target || { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                        const t = xr(this.layout.layoutBox.x);
                        (n.x.min = e.target.x.min), (n.x.max = n.x.min + t);
                        const r = xr(this.layout.layoutBox.y);
                        (n.y.min = e.target.y.min), (n.y.max = n.y.min + r);
                    }
                    Ma(t, n), Ur(t, a), Sr(this.projectionDeltaWithTransform, this.layoutCorrected, t, a);
                }
            }
            registerSharedNode(e, t) {
                this.sharedNodes.has(e) || this.sharedNodes.set(e, new qa()), this.sharedNodes.get(e).add(t);
                const n = t.options.initialPromotionConfig;
                t.promote({ transition: n ? n.transition : void 0, preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(t) : void 0 });
            }
            isLead() {
                const e = this.getStack();
                return !e || e.lead === this;
            }
            getLead() {
                const { layoutId: e } = this.options;
                return (e && this.getStack()?.lead) || this;
            }
            getPrevLead() {
                const { layoutId: e } = this.options;
                return e ? this.getStack()?.prevLead : void 0;
            }
            getStack() {
                const { layoutId: e } = this.options;
                if (e) return this.root.sharedNodes.get(e);
            }
            promote({ needsReset: e, transition: t, preserveFollowOpacity: n } = {}) {
                const r = this.getStack();
                r && r.promote(this, n), e && ((this.projectionDelta = void 0), (this.needsReset = !0)), t && this.setOptions({ transition: t });
            }
            relegate() {
                const e = this.getStack();
                return !!e && e.relegate(this);
            }
            resetSkewAndRotation() {
                const { visualElement: e } = this.options;
                if (!e) return;
                let t = !1;
                const { latestValues: n } = e;
                if (((n.z || n.rotate || n.rotateX || n.rotateY || n.rotateZ || n.skewX || n.skewY) && (t = !0), !t)) return;
                const r = {};
                n.z && Za("z", e, r, this.animationValues);
                for (let t = 0; t < Xa.length; t++) Za(`rotate${Xa[t]}`, e, r, this.animationValues), Za(`skew${Xa[t]}`, e, r, this.animationValues);
                e.render();
                for (const t in r) e.setStaticValue(t, r[t]), this.animationValues && (this.animationValues[t] = r[t]);
                e.scheduleRender();
            }
            getProjectionStyles(e) {
                if (!this.instance || this.isSVG) return;
                if (!this.isVisible) return Ka;
                const t = { visibility: "" },
                    n = this.getTransformTemplate();
                if (this.needsReset) return (this.needsReset = !1), (t.opacity = ""), (t.pointerEvents = Sa(e?.pointerEvents) || ""), (t.transform = n ? n(this.latestValues, "") : "none"), t;
                const r = this.getLead();
                if (!this.projectionDelta || !this.layout || !r.target) {
                    const t = {};
                    return (
                        this.options.layoutId && ((t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1), (t.pointerEvents = Sa(e?.pointerEvents) || "")),
                        this.hasProjected && !Nr(this.latestValues) && ((t.transform = n ? n({}, "") : "none"), (this.hasProjected = !1)),
                        t
                    );
                }
                const a = r.animationValues || r.latestValues;
                this.applyTransformsToTarget(),
                    (t.transform = (function (e, t, n) {
                        let r = "";
                        const a = e.x.translate / t.x,
                            o = e.y.translate / t.y,
                            i = n?.z || 0;
                        if (((a || o || i) && (r = `translate3d(${a}px, ${o}px, ${i}px) `), (1 === t.x && 1 === t.y) || (r += `scale(${1 / t.x}, ${1 / t.y}) `), n)) {
                            const { transformPerspective: e, rotate: t, rotateX: a, rotateY: o, skewX: i, skewY: s } = n;
                            e && (r = `perspective(${e}px) ${r}`), t && (r += `rotate(${t}deg) `), a && (r += `rotateX(${a}deg) `), o && (r += `rotateY(${o}deg) `), i && (r += `skewX(${i}deg) `), s && (r += `skewY(${s}deg) `);
                        }
                        const s = e.x.scale * t.x,
                            l = e.y.scale * t.y;
                        return (1 === s && 1 === l) || (r += `scale(${s}, ${l})`), r || "none";
                    })(this.projectionDeltaWithTransform, this.treeScale, a)),
                    n && (t.transform = n(a, t.transform));
                const { x: o, y: i } = this.projectionDelta;
                (t.transformOrigin = `${100 * o.origin}% ${100 * i.origin}% 0`),
                    r.animationValues
                        ? (t.opacity = r === this ? a.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : a.opacityExit)
                        : (t.opacity = r === this ? (void 0 !== a.opacity ? a.opacity : "") : void 0 !== a.opacityExit ? a.opacityExit : 0);
                for (const e in ga) {
                    if (void 0 === a[e]) continue;
                    const { correct: n, applyTo: o, isCSSVariable: i } = ga[e],
                        s = "none" === t.transform ? a[e] : n(a[e], r);
                    if (o) {
                        const e = o.length;
                        for (let n = 0; n < e; n++) t[o[n]] = s;
                    } else i ? (this.options.visualElement.renderState.vars[e] = s) : (t[e] = s);
                }
                return this.options.layoutId && (t.pointerEvents = r === this ? Sa(e?.pointerEvents) || "" : "none"), t;
            }
            clearSnapshot() {
                this.resumeFrom = this.snapshot = void 0;
            }
            resetTree() {
                this.root.nodes.forEach((e) => e.currentAnimation?.stop()), this.root.nodes.forEach(io), this.root.sharedNodes.clear();
            }
        };
    }
    function to(e) {
        e.updateLayout();
    }
    function no(e) {
        const t = e.resumeFrom?.snapshot || e.snapshot;
        if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
            const { layoutBox: n, measuredBox: r } = e.layout,
                { animationType: a } = e.options,
                o = t.source !== e.layout.source;
            "size" === a
                ? Ar((e) => {
                      const r = o ? t.measuredBox[e] : t.layoutBox[e],
                          a = xr(r);
                      (r.min = n[e].min), (r.max = r.min + a);
                  })
                : ko(a, t.layoutBox, n) &&
                  Ar((r) => {
                      const a = o ? t.measuredBox[r] : t.layoutBox[r],
                          i = xr(n[r]);
                      (a.max = a.min + i), e.relativeTarget && !e.currentAnimation && ((e.isProjectionDirty = !0), (e.relativeTarget[r].max = e.relativeTarget[r].min + i));
                  });
            const i = { x: { translate: 0, scale: 1, origin: 0, originPoint: 0 }, y: { translate: 0, scale: 1, origin: 0, originPoint: 0 } };
            Sr(i, n, t.layoutBox);
            const s = { x: { translate: 0, scale: 1, origin: 0, originPoint: 0 }, y: { translate: 0, scale: 1, origin: 0, originPoint: 0 } };
            o ? Sr(s, e.applyTransform(r, !0), t.measuredBox) : Sr(s, n, t.layoutBox);
            const l = !Ba(i);
            let u = !1;
            if (!e.resumeFrom) {
                const r = e.getClosestProjectingParent();
                if (r && !r.resumeFrom) {
                    const { snapshot: a, layout: o } = r;
                    if (a && o) {
                        const i = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                        Tr(i, t.layoutBox, a.layoutBox);
                        const s = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                        Tr(s, n, o.layoutBox), Ha(i, s) || (u = !0), r.options.layoutRoot && ((e.relativeTarget = s), (e.relativeTargetOrigin = i), (e.relativeParent = r));
                    }
                }
            }
            e.notifyListeners("didUpdate", { layout: n, snapshot: t, delta: s, layoutDelta: i, hasLayoutChanged: l, hasRelativeLayoutChanged: u });
        } else if (e.isLead()) {
            const { onExitComplete: t } = e.options;
            t && t();
        }
        e.options.transition = void 0;
    }
    function ro(e) {
        S.value && Ga.nodes++,
            e.parent &&
                (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
                e.isSharedProjectionDirty || (e.isSharedProjectionDirty = Boolean(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
                e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
    }
    function ao(e) {
        e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
    }
    function oo(e) {
        e.clearSnapshot();
    }
    function io(e) {
        e.clearMeasurements();
    }
    function so(e) {
        e.isLayoutDirty = !1;
    }
    function lo(e) {
        const { visualElement: t } = e.options;
        t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
    }
    function uo(e) {
        e.finishAnimation(), (e.targetDelta = e.relativeTarget = e.target = void 0), (e.isProjectionDirty = !0);
    }
    function co(e) {
        e.resolveTargetDelta();
    }
    function fo(e) {
        e.calcProjection();
    }
    function ho(e) {
        e.resetSkewAndRotation();
    }
    function po(e) {
        e.removeLeadSnapshot();
    }
    function mo(e, t, n) {
        (e.translate = an(t.translate, 0, n)), (e.scale = an(t.scale, 1, n)), (e.origin = t.origin), (e.originPoint = t.originPoint);
    }
    function yo(e, t, n, r) {
        (e.min = an(t.min, n.min, r)), (e.max = an(t.max, n.max, r));
    }
    function go(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit;
    }
    const vo = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        bo = (e) => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
        wo = bo("applewebkit/") && !bo("chrome/") ? Math.round : l;
    function xo(e) {
        (e.min = wo(e.min)), (e.max = wo(e.max));
    }
    function ko(e, t, n) {
        return "position" === e || ("preserve-aspect" === e && ((r = Wa(t)), (a = Wa(n)), !(Math.abs(r - a) <= 0.2)));
        var r, a;
    }
    function So(e) {
        return e !== e.root && e.scroll?.wasRoot;
    }
    const Eo = eo({
            attachResizeListener: (e, t) => gr(e, "resize", t),
            measureScroll: () => ({ x: document.documentElement.scrollLeft || document.body.scrollLeft, y: document.documentElement.scrollTop || document.body.scrollTop }),
            checkIsScrollRoot: () => !0,
        }),
        Po = { current: void 0 },
        To = eo({
            measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
            defaultParent: () => {
                if (!Po.current) {
                    const e = new Eo({});
                    e.mount(window), e.setOptions({ layoutScroll: !0 }), (Po.current = e);
                }
                return Po.current;
            },
            resetTransform: (e, t) => {
                e.style.transform = void 0 !== t ? t : "none";
            },
            checkIsScrollRoot: (e) => Boolean("fixed" === window.getComputedStyle(e).position),
        }),
        Co = {
            pan: {
                Feature: class extends pr {
                    constructor() {
                        super(...arguments), (this.removePointerDownListener = l);
                    }
                    onPointerDown(e) {
                        this.session = new qr(e, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint(), contextWindow: Hr(this.node) });
                    }
                    createPanHandlers() {
                        const { onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: r } = this.node.getProps();
                        return {
                            onSessionStart: la(e),
                            onStart: la(t),
                            onMove: n,
                            onEnd: (e, t) => {
                                delete this.session, r && B.postRender(() => r(e, t));
                            },
                        };
                    }
                    mount() {
                        this.removePointerDownListener = br(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
                    }
                    update() {
                        this.session && this.session.updateHandlers(this.createPanHandlers());
                    }
                    unmount() {
                        this.removePointerDownListener(), this.session && this.session.end();
                    }
                },
            },
            drag: {
                Feature: class extends pr {
                    constructor(e) {
                        super(e), (this.removeGroupControls = l), (this.removeListeners = l), (this.controls = new ia(e));
                    }
                    mount() {
                        const { dragControls: e } = this.node.getProps();
                        e && (this.removeGroupControls = e.subscribe(this.controls)), (this.removeListeners = this.controls.addListeners() || l);
                    }
                    unmount() {
                        this.removeGroupControls(), this.removeListeners();
                    }
                },
                ProjectionNode: To,
                MeasureLayout: ba,
            },
        };
    function Ao(e, t, n) {
        const { props: r } = e;
        e.animationState && r.whileHover && e.animationState.setActive("whileHover", "Start" === n);
        const a = r["onHover" + n];
        a && B.postRender(() => a(t, vr(t)));
    }
    function Lo(e, t, n) {
        const { props: r } = e;
        if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
        e.animationState && r.whileTap && e.animationState.setActive("whileTap", "Start" === n);
        const a = r["onTap" + ("End" === n ? "" : n)];
        a && B.postRender(() => a(t, vr(t)));
    }
    const jo = new WeakMap(),
        No = new WeakMap(),
        Oo = (e) => {
            const t = jo.get(e.target);
            t && t(e);
        },
        Mo = (e) => {
            e.forEach(Oo);
        };
    const zo = { some: 0, all: 1 },
        Ro = {
            inView: {
                Feature: class extends pr {
                    constructor() {
                        super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
                    }
                    startObserver() {
                        this.unmount();
                        const { viewport: e = {} } = this.node.getProps(),
                            { root: t, margin: n, amount: r = "some", once: a } = e,
                            o = { root: t ? t.current : void 0, rootMargin: n, threshold: "number" == typeof r ? r : zo[r] };
                        return (function (e, t, n) {
                            const r = (function ({ root: e, ...t }) {
                                const n = e || document;
                                No.has(n) || No.set(n, {});
                                const r = No.get(n),
                                    a = JSON.stringify(t);
                                return r[a] || (r[a] = new IntersectionObserver(Mo, { root: e, ...t })), r[a];
                            })(t);
                            return (
                                jo.set(e, n),
                                r.observe(e),
                                () => {
                                    jo.delete(e), r.unobserve(e);
                                }
                            );
                        })(this.node.current, o, (e) => {
                            const { isIntersecting: t } = e;
                            if (this.isInView === t) return;
                            if (((this.isInView = t), a && !t && this.hasEnteredView)) return;
                            t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", t);
                            const { onViewportEnter: n, onViewportLeave: r } = this.node.getProps(),
                                o = t ? n : r;
                            o && o(e);
                        });
                    }
                    mount() {
                        this.startObserver();
                    }
                    update() {
                        if ("undefined" == typeof IntersectionObserver) return;
                        const { props: e, prevProps: t } = this.node;
                        ["amount", "margin", "root"].some(
                            (function ({ viewport: e = {} }, { viewport: t = {} } = {}) {
                                return (n) => e[n] !== t[n];
                            })(e, t)
                        ) && this.startObserver();
                    }
                    unmount() {}
                },
            },
            tap: {
                Feature: class extends pr {
                    mount() {
                        const { current: e } = this.node;
                        e &&
                            (this.unmount = (function (e, t, n = {}) {
                                const [r, a, o] = Z(e, n),
                                    i = (e) => {
                                        const r = e.currentTarget;
                                        if (!ie(e) || re.has(r)) return;
                                        re.add(r);
                                        const o = t(r, e),
                                            i = (e, t) => {
                                                window.removeEventListener("pointerup", s), window.removeEventListener("pointercancel", l), ie(e) && re.has(r) && (re.delete(r), "function" == typeof o && o(e, { success: t }));
                                            },
                                            s = (e) => {
                                                i(e, r === window || r === document || n.useGlobalTarget || ee(r, e.target));
                                            },
                                            l = (e) => {
                                                i(e, !1);
                                            };
                                        window.addEventListener("pointerup", s, a), window.addEventListener("pointercancel", l, a);
                                    };
                                return (
                                    r.forEach((e) => {
                                        var t;
                                        (n.useGlobalTarget ? window : e).addEventListener("pointerdown", i, a),
                                            e instanceof HTMLElement &&
                                                (e.addEventListener("focus", (e) =>
                                                    ((e, t) => {
                                                        const n = e.currentTarget;
                                                        if (!n) return;
                                                        const r = ae(() => {
                                                            if (re.has(n)) return;
                                                            oe(n, "down");
                                                            const e = ae(() => {
                                                                oe(n, "up");
                                                            });
                                                            n.addEventListener("keyup", e, t), n.addEventListener("blur", () => oe(n, "cancel"), t);
                                                        });
                                                        n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
                                                    })(e, a)
                                                ),
                                                (t = e),
                                                ne.has(t.tagName) || -1 !== t.tabIndex || e.hasAttribute("tabindex") || (e.tabIndex = 0));
                                    }),
                                    o
                                );
                            })(e, (e, t) => (Lo(this.node, t, "Start"), (e, { success: t }) => Lo(this.node, e, t ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
                    }
                    unmount() {}
                },
            },
            focus: {
                Feature: class extends pr {
                    constructor() {
                        super(...arguments), (this.isActive = !1);
                    }
                    onFocus() {
                        let e = !1;
                        try {
                            e = this.node.current.matches(":focus-visible");
                        } catch (t) {
                            e = !0;
                        }
                        e && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), (this.isActive = !0));
                    }
                    onBlur() {
                        this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), (this.isActive = !1));
                    }
                    mount() {
                        this.unmount = hn(
                            gr(this.node.current, "focus", () => this.onFocus()),
                            gr(this.node.current, "blur", () => this.onBlur())
                        );
                    }
                    unmount() {}
                },
            },
            hover: {
                Feature: class extends pr {
                    mount() {
                        const { current: e } = this.node;
                        e &&
                            (this.unmount = (function (e, t, n = {}) {
                                const [r, a, o] = Z(e, n),
                                    i = (e) => {
                                        if (!J(e)) return;
                                        const { target: n } = e,
                                            r = t(n, e);
                                        if ("function" != typeof r || !n) return;
                                        const o = (e) => {
                                            J(e) && (r(e), n.removeEventListener("pointerleave", o));
                                        };
                                        n.addEventListener("pointerleave", o, a);
                                    };
                                return (
                                    r.forEach((e) => {
                                        e.addEventListener("pointerenter", i, a);
                                    }),
                                    o
                                );
                            })(e, (e, t) => (Ao(this.node, t, "Start"), (e) => Ao(this.node, e, "End"))));
                    }
                    unmount() {}
                },
            },
        },
        _o = { layout: { ProjectionNode: To, MeasureLayout: ba } },
        Do = (0, r.createContext)({ strict: !1 }),
        Fo = (0, r.createContext)({ transformPagePoint: (e) => e, isStatic: !1, reducedMotion: "never" }),
        Io = (0, r.createContext)({});
    function Vo(e) {
        return m(e.animate) || ir.some((t) => ar(e[t]));
    }
    function Bo(e) {
        return Boolean(Vo(e) || e.variants);
    }
    function Uo(e) {
        return Array.isArray(e) ? e.join(" ") : e;
    }
    const $o = "undefined" != typeof window,
        Ho = {
            animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
            exit: ["exit"],
            drag: ["drag", "dragControls"],
            focus: ["whileFocus"],
            hover: ["whileHover", "onHoverStart", "onHoverEnd"],
            tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
            pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
            inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
            layout: ["layout", "layoutId"],
        },
        Wo = {};
    for (const e in Ho) Wo[e] = { isEnabled: (t) => Ho[e].some((e) => !!t[e]) };
    const Yo = Symbol.for("motionComponentSymbol");
    function qo(e, t, n) {
        return (0, r.useCallback)(
            (r) => {
                r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && ("function" == typeof n ? n(r) : Wr(n) && (n.current = r));
            },
            [t]
        );
    }
    const Go = $o ? r.useLayoutEffect : r.useEffect;
    function Xo(e, t, n, a, o) {
        const { visualElement: i } = (0, r.useContext)(Io),
            s = (0, r.useContext)(Do),
            l = (0, r.useContext)(ca),
            u = (0, r.useContext)(Fo).reducedMotion,
            c = (0, r.useRef)(null);
        (a = a || s.renderer), !c.current && a && (c.current = a(e, { visualState: t, parent: i, props: n, presenceContext: l, blockInitialAnimation: !!l && !1 === l.initial, reducedMotionConfig: u }));
        const d = c.current,
            f = (0, r.useContext)(fa);
        !d ||
            d.projection ||
            !o ||
            ("html" !== d.type && "svg" !== d.type) ||
            (function (e, t, n, r) {
                const { layoutId: a, layout: o, drag: i, dragConstraints: s, layoutScroll: l, layoutRoot: u } = t;
                (e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : Ko(e.parent))),
                    e.projection.setOptions({
                        layoutId: a,
                        layout: o,
                        alwaysMeasureLayout: Boolean(i) || (s && Wr(s)),
                        visualElement: e,
                        animationType: "string" == typeof o ? o : "both",
                        initialPromotionConfig: r,
                        layoutScroll: l,
                        layoutRoot: u,
                    });
            })(c.current, n, o, f);
        const h = (0, r.useRef)(!1);
        (0, r.useInsertionEffect)(() => {
            d && h.current && d.update(n, l);
        });
        const p = n[be],
            m = (0, r.useRef)(Boolean(p) && !window.MotionHandoffIsComplete?.(p) && window.MotionHasOptimisedAnimation?.(p));
        return (
            Go(() => {
                d && ((h.current = !0), (window.MotionIsMounted = !0), d.updateFeatures(), W.render(d.render), m.current && d.animationState && d.animationState.animateChanges());
            }),
            (0, r.useEffect)(() => {
                d &&
                    (!m.current && d.animationState && d.animationState.animateChanges(),
                    m.current &&
                        (queueMicrotask(() => {
                            window.MotionHandoffMarkAsComplete?.(p);
                        }),
                        (m.current = !1)));
            }),
            d
        );
    }
    function Ko(e) {
        if (e) return !1 !== e.options.allowProjection ? e.projection : Ko(e.parent);
    }
    function Qo({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: a, Component: o }) {
        function i(e, i) {
            let s;
            const l = { ...(0, r.useContext)(Fo), ...e, layoutId: Zo(e) },
                { isStatic: u } = l,
                c = (function (e) {
                    const { initial: t, animate: n } = (function (e, t) {
                        if (Vo(e)) {
                            const { initial: t, animate: n } = e;
                            return { initial: !1 === t || ar(t) ? t : void 0, animate: ar(n) ? n : void 0 };
                        }
                        return !1 !== e.inherit ? t : {};
                    })(e, (0, r.useContext)(Io));
                    return (0, r.useMemo)(() => ({ initial: t, animate: n }), [Uo(t), Uo(n)]);
                })(e),
                d = a(e, u);
            if (!u && $o) {
                (0, r.useContext)(Do).strict;
                const e = (function (e) {
                    const { drag: t, layout: n } = Wo;
                    if (!t && !n) return {};
                    const r = { ...t, ...n };
                    return { MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0, ProjectionNode: r.ProjectionNode };
                })(l);
                (s = e.MeasureLayout), (c.visualElement = Xo(o, d, l, t, e.ProjectionNode));
            }
            return (0, ua.jsxs)(Io.Provider, { value: c, children: [s && c.visualElement ? (0, ua.jsx)(s, { visualElement: c.visualElement, ...l }) : null, n(o, e, qo(d, c.visualElement, i), d, u, c.visualElement)] });
        }
        e &&
            (function (e) {
                for (const t in e) Wo[t] = { ...Wo[t], ...e[t] };
            })(e),
            (i.displayName = `motion.${"string" == typeof o ? o : `create(${o.displayName ?? o.name ?? ""})`}`);
        const s = (0, r.forwardRef)(i);
        return (s[Yo] = o), s;
    }
    function Zo({ layoutId: e }) {
        const t = (0, r.useContext)(da).id;
        return t && void 0 !== e ? t + "-" + e : e;
    }
    function Jo(e, { layout: t, layoutId: n }) {
        return de.has(e) || e.startsWith("origin") || ((t || void 0 !== n) && (!!ga[e] || "opacity" === e));
    }
    const ei = (e, t) => (t && "number" == typeof e ? t.transform(e) : e),
        ti = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" },
        ni = ce.length;
    function ri(e, t, n) {
        const { style: r, vars: a, transformOrigin: o } = e;
        let i = !1,
            s = !1;
        for (const e in t) {
            const n = t[e];
            if (de.has(e)) i = !0;
            else if ($t(e)) a[e] = n;
            else {
                const t = ei(n, yt[e]);
                e.startsWith("origin") ? ((s = !0), (o[e] = t)) : (r[e] = t);
            }
        }
        if (
            (t.transform ||
                (i || n
                    ? (r.transform = (function (e, t, n) {
                          let r = "",
                              a = !0;
                          for (let o = 0; o < ni; o++) {
                              const i = ce[o],
                                  s = e[i];
                              if (void 0 === s) continue;
                              let l = !0;
                              if (((l = "number" == typeof s ? s === (i.startsWith("scale") ? 1 : 0) : 0 === parseFloat(s)), !l || n)) {
                                  const e = ei(s, yt[i]);
                                  l || ((a = !1), (r += `${ti[i] || i}(${e}) `)), n && (t[i] = e);
                              }
                          }
                          return (r = r.trim()), n ? (r = n(t, a ? "" : r)) : a && (r = "none"), r;
                      })(t, e.transform, n))
                    : r.transform && (r.transform = "none")),
            s)
        ) {
            const { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = o;
            r.transformOrigin = `${e} ${t} ${n}`;
        }
    }
    function ai(e, t, n) {
        for (const r in t) ye(t[r]) || Jo(r, n) || (e[r] = t[r]);
    }
    function oi(e, t) {
        const n = {},
            a = (function (e, t) {
                const n = {};
                return (
                    ai(n, e.style || {}, e),
                    Object.assign(
                        n,
                        (function ({ transformTemplate: e }, t) {
                            return (0, r.useMemo)(() => {
                                const n = { style: {}, transform: {}, transformOrigin: {}, vars: {} };
                                return ri(n, t, e), Object.assign({}, n.vars, n.style);
                            }, [t]);
                        })(e, t)
                    ),
                    n
                );
            })(e, t);
        return (
            e.drag && !1 !== e.dragListener && ((n.draggable = !1), (a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none"), (a.touchAction = !0 === e.drag ? "none" : "pan-" + ("x" === e.drag ? "y" : "x"))),
            void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
            (n.style = a),
            n
        );
    }
    const ii = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
    ]);
    function si(e) {
        return e.startsWith("while") || (e.startsWith("drag") && "draggable" !== e) || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || ii.has(e);
    }
    let li = (e) => !si(e);
    try {
        (ui = require("@emotion/is-prop-valid").default) && (li = (e) => (e.startsWith("on") ? !si(e) : ui(e)));
    } catch {}
    var ui;
    const ci = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
    ];
    function di(e) {
        return "string" == typeof e && !e.includes("-") && !!(ci.indexOf(e) > -1 || /[A-Z]/u.test(e));
    }
    const fi = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        hi = { offset: "strokeDashoffset", array: "strokeDasharray" };
    function pi(e, t, n) {
        return "string" == typeof e ? e : Ge.transform(t + n * e);
    }
    function mi(e, { attrX: t, attrY: n, attrScale: r, originX: a, originY: o, pathLength: i, pathSpacing: s = 1, pathOffset: l = 0, ...u }, c, d) {
        if ((ri(e, u, d), c)) return void (e.style.viewBox && (e.attrs.viewBox = e.style.viewBox));
        (e.attrs = e.style), (e.style = {});
        const { attrs: f, style: h, dimensions: p } = e;
        f.transform && (p && (h.transform = f.transform), delete f.transform),
            p &&
                (void 0 !== a || void 0 !== o || h.transform) &&
                (h.transformOrigin = (function (e, t, n) {
                    return `${pi(t, e.x, e.width)} ${pi(n, e.y, e.height)}`;
                })(p, void 0 !== a ? a : 0.5, void 0 !== o ? o : 0.5)),
            void 0 !== t && (f.x = t),
            void 0 !== n && (f.y = n),
            void 0 !== r && (f.scale = r),
            void 0 !== i &&
                (function (e, t, n = 1, r = 0, a = !0) {
                    e.pathLength = 1;
                    const o = a ? fi : hi;
                    e[o.offset] = Ge.transform(-r);
                    const i = Ge.transform(t),
                        s = Ge.transform(n);
                    e[o.array] = `${i} ${s}`;
                })(f, i, s, l, !1);
    }
    const yi = (e) => "string" == typeof e && "svg" === e.toLowerCase();
    function gi(e, t, n, a) {
        const o = (0, r.useMemo)(() => {
            const n = { style: {}, transform: {}, transformOrigin: {}, vars: {}, attrs: {} };
            return mi(n, t, yi(a), e.transformTemplate), { ...n.attrs, style: { ...n.style } };
        }, [t]);
        if (e.style) {
            const t = {};
            ai(t, e.style, e), (o.style = { ...t, ...o.style });
        }
        return o;
    }
    function vi(e = !1) {
        return (t, n, a, { latestValues: o }, i) => {
            const s = (di(t) ? gi : oi)(n, o, i, t),
                l = (function (e, t, n) {
                    const r = {};
                    for (const a in e) ("values" === a && "object" == typeof e.values) || ((li(a) || (!0 === n && si(a)) || (!t && !si(a)) || (e.draggable && a.startsWith("onDrag"))) && (r[a] = e[a]));
                    return r;
                })(n, "string" == typeof t, e),
                u = t !== r.Fragment ? { ...l, ...s, ref: a } : {},
                { children: c } = n,
                d = (0, r.useMemo)(() => (ye(c) ? c.get() : c), [c]);
            return (0, r.createElement)(t, { ...u, children: d });
        };
    }
    function bi(e) {
        const t = (0, r.useRef)(null);
        return null === t.current && (t.current = e()), t.current;
    }
    const wi = (e) => (t, n) => {
        const a = (0, r.useContext)(Io),
            o = (0, r.useContext)(ca),
            i = () =>
                (function ({ scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n }, r, a, o) {
                    const i = { latestValues: xi(r, a, o, e), renderState: t() };
                    return n && ((i.onMount = (e) => n({ props: r, current: e, ...i })), (i.onUpdate = (e) => n(e))), i;
                })(e, t, a, o);
        return n ? i() : bi(i);
    };
    function xi(e, t, n, r) {
        const a = {},
            o = r(e, {});
        for (const e in o) a[e] = Sa(o[e]);
        let { initial: i, animate: s } = e;
        const l = Vo(e),
            u = Bo(e);
        t && u && !l && !1 !== e.inherit && (void 0 === i && (i = t.initial), void 0 === s && (s = t.animate));
        let c = !!n && !1 === n.initial;
        c = c || !1 === i;
        const d = c ? s : i;
        if (d && "boolean" != typeof d && !m(d)) {
            const t = Array.isArray(d) ? d : [d];
            for (let n = 0; n < t.length; n++) {
                const r = g(e, t[n]);
                if (r) {
                    const { transitionEnd: e, transition: t, ...n } = r;
                    for (const e in n) {
                        let t = n[e];
                        Array.isArray(t) && (t = t[c ? t.length - 1 : 0]), null !== t && (a[e] = t);
                    }
                    for (const t in e) a[t] = e[t];
                }
            }
        }
        return a;
    }
    function ki(e, t, n) {
        const { style: r } = e,
            a = {};
        for (const o in r) (ye(r[o]) || (t.style && ye(t.style[o])) || Jo(o, e) || void 0 !== n?.getValue(o)?.liveStyle) && (a[o] = r[o]);
        return a;
    }
    const Si = { useVisualState: wi({ scrapeMotionValuesFromProps: ki, createRenderState: () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }) }) };
    function Ei(e, t) {
        try {
            t.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect();
        } catch (e) {
            t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
        }
    }
    function Pi(e, { style: t, vars: n }, r, a) {
        Object.assign(e.style, t, a && a.getProjectionStyles(r));
        for (const t in n) e.style.setProperty(t, n[t]);
    }
    const Ti = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
    ]);
    function Ci(e, t, n, r) {
        Pi(e, t, void 0, r);
        for (const n in t.attrs) e.setAttribute(Ti.has(n) ? n : ve(n), t.attrs[n]);
    }
    function Ai(e, t, n) {
        const r = ki(e, t, n);
        for (const n in e) (ye(e[n]) || ye(t[n])) && (r[-1 !== ce.indexOf(n) ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n] = e[n]);
        return r;
    }
    const Li = ["x", "y", "width", "height", "cx", "cy", "r"],
        ji = {
            useVisualState: wi({
                scrapeMotionValuesFromProps: Ai,
                createRenderState: () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {}, attrs: {} }),
                onUpdate: ({ props: e, prevProps: t, current: n, renderState: r, latestValues: a }) => {
                    if (!n) return;
                    let o = !!e.drag;
                    if (!o)
                        for (const e in a)
                            if (de.has(e)) {
                                o = !0;
                                break;
                            }
                    if (!o) return;
                    let i = !t;
                    if (t)
                        for (let n = 0; n < Li.length; n++) {
                            const r = Li[n];
                            e[r] !== t[r] && (i = !0);
                        }
                    i &&
                        B.read(() => {
                            Ei(n, r),
                                B.render(() => {
                                    mi(r, a, yi(n.tagName), e.transformTemplate), Ci(n, r);
                                });
                        });
                },
            }),
        };
    function Ni(e, t) {
        return function (n, { forwardMotionProps: r } = { forwardMotionProps: !1 }) {
            return Qo({ ...(di(n) ? ji : Si), preloadedFeatures: e, useRender: vi(r), createVisualElement: t, Component: n });
        };
    }
    const Oi = { current: null },
        Mi = { current: !1 },
        zi = [...Kt, Je, lt],
        Ri = new WeakMap(),
        _i = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
    class Di {
        scrapeMotionValuesFromProps(e, t, n) {
            return {};
        }
        constructor({ parent: e, props: t, presenceContext: n, reducedMotionConfig: r, blockInitialAnimation: a, visualState: o }, i = {}) {
            (this.current = null),
                (this.children = new Set()),
                (this.isVariantNode = !1),
                (this.isControllingVariants = !1),
                (this.shouldReduceMotion = null),
                (this.values = new Map()),
                (this.KeyframeResolver = Vt),
                (this.features = {}),
                (this.valueSubscriptions = new Map()),
                (this.prevMotionValues = {}),
                (this.events = {}),
                (this.propEventSubscriptions = {}),
                (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
                (this.render = () => {
                    this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
                }),
                (this.renderScheduledAt = 0),
                (this.scheduleRender = () => {
                    const e = X.now();
                    this.renderScheduledAt < e && ((this.renderScheduledAt = e), B.render(this.render, !1, !0));
                });
            const { latestValues: s, renderState: l, onUpdate: u } = o;
            (this.onUpdate = u),
                (this.latestValues = s),
                (this.baseTarget = { ...s }),
                (this.initialValues = t.initial ? { ...s } : {}),
                (this.renderState = l),
                (this.parent = e),
                (this.props = t),
                (this.presenceContext = n),
                (this.depth = e ? e.depth + 1 : 0),
                (this.reducedMotionConfig = r),
                (this.options = i),
                (this.blockInitialAnimation = Boolean(a)),
                (this.isControllingVariants = Vo(t)),
                (this.isVariantNode = Bo(t)),
                this.isVariantNode && (this.variantChildren = new Set()),
                (this.manuallyAnimateOnMount = Boolean(e && e.current));
            const { willChange: c, ...d } = this.scrapeMotionValuesFromProps(t, {}, this);
            for (const e in d) {
                const t = d[e];
                void 0 !== s[e] && ye(t) && t.set(s[e], !1);
            }
        }
        mount(e) {
            (this.current = e),
                Ri.set(e, this),
                this.projection && !this.projection.instance && this.projection.mount(e),
                this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
                this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
                Mi.current ||
                    (function () {
                        if (((Mi.current = !0), $o))
                            if (window.matchMedia) {
                                const e = window.matchMedia("(prefers-reduced-motion)"),
                                    t = () => (Oi.current = e.matches);
                                e.addListener(t), t();
                            } else Oi.current = !1;
                    })(),
                (this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || Oi.current)),
                this.parent && this.parent.children.add(this),
                this.update(this.props, this.presenceContext);
        }
        unmount() {
            this.projection && this.projection.unmount(),
                U(this.notifyUpdate),
                U(this.render),
                this.valueSubscriptions.forEach((e) => e()),
                this.valueSubscriptions.clear(),
                this.removeFromVariantTree && this.removeFromVariantTree(),
                this.parent && this.parent.children.delete(this);
            for (const e in this.events) this.events[e].clear();
            for (const e in this.features) {
                const t = this.features[e];
                t && (t.unmount(), (t.isMounted = !1));
            }
            this.current = null;
        }
        bindToMotionValue(e, t) {
            this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
            const n = de.has(e);
            n && this.onBindTransform && this.onBindTransform();
            const r = t.on("change", (t) => {
                    (this.latestValues[e] = t), this.props.onUpdate && B.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0);
                }),
                a = t.on("renderRequest", this.scheduleRender);
            let o;
            window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, e, t)),
                this.valueSubscriptions.set(e, () => {
                    r(), a(), o && o(), t.owner && t.stop();
                });
        }
        sortNodePosition(e) {
            return this.current && this.sortInstanceNodePosition && this.type === e.type ? this.sortInstanceNodePosition(this.current, e.current) : 0;
        }
        updateFeatures() {
            let e = "animation";
            for (e in Wo) {
                const t = Wo[e];
                if (!t) continue;
                const { isEnabled: n, Feature: r } = t;
                if ((!this.features[e] && r && n(this.props) && (this.features[e] = new r(this)), this.features[e])) {
                    const t = this.features[e];
                    t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
                }
            }
        }
        triggerBuild() {
            this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
            return this.current ? this.measureInstanceViewportBox(this.current, this.props) : { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
        }
        getStaticValue(e) {
            return this.latestValues[e];
        }
        setStaticValue(e, t) {
            this.latestValues[e] = t;
        }
        update(e, t) {
            (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), (this.prevProps = this.props), (this.props = e), (this.prevPresenceContext = this.presenceContext), (this.presenceContext = t);
            for (let t = 0; t < _i.length; t++) {
                const n = _i[t];
                this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
                const r = e["on" + n];
                r && (this.propEventSubscriptions[n] = this.on(n, r));
            }
            (this.prevMotionValues = (function (e, t, n) {
                for (const r in t) {
                    const a = t[r],
                        o = n[r];
                    if (ye(a)) e.addValue(r, a);
                    else if (ye(o)) e.addValue(r, ue(a, { owner: e }));
                    else if (o !== a)
                        if (e.hasValue(r)) {
                            const t = e.getValue(r);
                            !0 === t.liveStyle ? t.jump(a) : t.hasAnimated || t.set(a);
                        } else {
                            const t = e.getStaticValue(r);
                            e.addValue(r, ue(void 0 !== t ? t : a, { owner: e }));
                        }
                }
                for (const r in n) void 0 === t[r] && e.removeValue(r);
                return t;
            })(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues)),
                this.handleChildMotionValue && this.handleChildMotionValue(),
                this.onUpdate && this.onUpdate(this);
        }
        getProps() {
            return this.props;
        }
        getVariant(e) {
            return this.props.variants ? this.props.variants[e] : void 0;
        }
        getDefaultTransition() {
            return this.props.transition;
        }
        getTransformPagePoint() {
            return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
            return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
        }
        addVariantChild(e) {
            const t = this.getClosestVariantNode();
            if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e);
        }
        addValue(e, t) {
            const n = this.values.get(e);
            t !== n && (n && this.removeValue(e), this.bindToMotionValue(e, t), this.values.set(e, t), (this.latestValues[e] = t.get()));
        }
        removeValue(e) {
            this.values.delete(e);
            const t = this.valueSubscriptions.get(e);
            t && (t(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
        }
        hasValue(e) {
            return this.values.has(e);
        }
        getValue(e, t) {
            if (this.props.values && this.props.values[e]) return this.props.values[e];
            let n = this.values.get(e);
            return void 0 === n && void 0 !== t && ((n = ue(null === t ? void 0 : t, { owner: this })), this.addValue(e, n)), n;
        }
        readValue(e, t) {
            let n = void 0 === this.latestValues[e] && this.current ? this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options) : this.latestValues[e];
            var r;
            return null != n && ("string" == typeof n && (Bt(n) || Oe(n)) ? (n = parseFloat(n)) : ((r = n), !zi.find(Xt(r)) && lt.test(t) && (n = bt(e, t))), this.setBaseTarget(e, ye(n) ? n.get() : n)), ye(n) ? n.get() : n;
        }
        setBaseTarget(e, t) {
            this.baseTarget[e] = t;
        }
        getBaseTarget(e) {
            const { initial: t } = this.props;
            let n;
            if ("string" == typeof t || "object" == typeof t) {
                const r = g(this.props, t, this.presenceContext?.custom);
                r && (n = r[e]);
            }
            if (t && void 0 !== n) return n;
            const r = this.getBaseTargetFromProps(this.props, e);
            return void 0 === r || ye(r) ? (void 0 !== this.initialValues[e] && void 0 === n ? void 0 : this.baseTarget[e]) : r;
        }
        on(e, t) {
            return this.events[e] || (this.events[e] = new c()), this.events[e].add(t);
        }
        notify(e, ...t) {
            this.events[e] && this.events[e].notify(...t);
        }
    }
    class Fi extends Di {
        constructor() {
            super(...arguments), (this.KeyframeResolver = Zt);
        }
        sortInstanceNodePosition(e, t) {
            return 2 & e.compareDocumentPosition(t) ? 1 : -1;
        }
        getBaseTargetFromProps(e, t) {
            return e.style ? e.style[t] : void 0;
        }
        removeValueFromRenderState(e, { vars: t, style: n }) {
            delete t[e], delete n[e];
        }
        handleChildMotionValue() {
            this.childSubscription && (this.childSubscription(), delete this.childSubscription);
            const { children: e } = this.props;
            ye(e) &&
                (this.childSubscription = e.on("change", (e) => {
                    this.current && (this.current.textContent = `${e}`);
                }));
        }
    }
    class Ii extends Fi {
        constructor() {
            super(...arguments), (this.type = "html"), (this.renderInstance = Pi);
        }
        readValueFromInstance(e, t) {
            if (de.has(t))
                return ((e, t) => {
                    const { transform: n = "none" } = getComputedStyle(e);
                    return Lt(n, t);
                })(e, t);
            {
                const r = ((n = e), window.getComputedStyle(n)),
                    a = ($t(t) ? r.getPropertyValue(t) : r[t]) || 0;
                return "string" == typeof a ? a.trim() : a;
            }
            var n;
        }
        measureInstanceViewportBox(e, { transformPagePoint: t }) {
            return $r(e, t);
        }
        build(e, t, n) {
            ri(e, t, n.transformTemplate);
        }
        scrapeMotionValuesFromProps(e, t, n) {
            return ki(e, t, n);
        }
    }
    class Vi extends Fi {
        constructor() {
            super(...arguments),
                (this.type = "svg"),
                (this.isSVGTag = !1),
                (this.measureInstanceViewportBox = Cr),
                (this.updateDimensions = () => {
                    this.current && !this.renderState.dimensions && Ei(this.current, this.renderState);
                });
        }
        getBaseTargetFromProps(e, t) {
            return e[t];
        }
        readValueFromInstance(e, t) {
            if (de.has(t)) {
                const e = vt(t);
                return (e && e.default) || 0;
            }
            return (t = Ti.has(t) ? t : ve(t)), e.getAttribute(t);
        }
        scrapeMotionValuesFromProps(e, t, n) {
            return Ai(e, t, n);
        }
        onBindTransform() {
            this.current && !this.renderState.dimensions && B.postRender(this.updateDimensions);
        }
        build(e, t, n) {
            mi(e, t, this.isSVGTag, n.transformTemplate);
        }
        renderInstance(e, t, n, r) {
            Ci(e, t, 0, r);
        }
        mount(e) {
            (this.isSVGTag = yi(e.tagName)), super.mount(e);
        }
    }
    const Bi = (e, t) => (di(e) ? new Vi(t) : new Ii(t, { allowProjection: e !== r.Fragment })),
        Ui = p(Ni({ ...yr, ...Ro, ...Co, ..._o }, Bi));
    Object.defineProperty;
    var $i = new Map(),
        Hi = new WeakMap(),
        Wi = 0;
    function Yi(e, t, n = {}, r = undefined) {
        if (void 0 === window.IntersectionObserver && void 0 !== r) {
            const a = e.getBoundingClientRect();
            return t(r, { isIntersecting: r, target: e, intersectionRatio: "number" == typeof n.threshold ? n.threshold : 0, time: 0, boundingClientRect: a, intersectionRect: a, rootBounds: a }), () => {};
        }
        const { id: a, observer: o, elements: i } = (function (e) {
                const t = (function (e) {
                    return Object.keys(e)
                        .sort()
                        .filter((t) => void 0 !== e[t])
                        .map((t) => {
                            return `${t}_${"root" === t ? ((n = e.root), n ? (Hi.has(n) || ((Wi += 1), Hi.set(n, Wi.toString())), Hi.get(n)) : "0") : e[t]}`;
                            var n;
                        })
                        .toString();
                })(e);
                let n = $i.get(t);
                if (!n) {
                    const r = new Map();
                    let a;
                    const o = new IntersectionObserver((t) => {
                        t.forEach((t) => {
                            var n;
                            const o = t.isIntersecting && a.some((e) => t.intersectionRatio >= e);
                            e.trackVisibility && void 0 === t.isVisible && (t.isVisible = o),
                                null == (n = r.get(t.target)) ||
                                    n.forEach((e) => {
                                        e(o, t);
                                    });
                        });
                    }, e);
                    (a = o.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0])), (n = { id: t, observer: o, elements: r }), $i.set(t, n);
                }
                return n;
            })(n),
            s = i.get(e) || [];
        return (
            i.has(e) || i.set(e, s),
            s.push(t),
            o.observe(e),
            function () {
                s.splice(s.indexOf(t), 1), 0 === s.length && (i.delete(e), o.unobserve(e)), 0 === i.size && (o.disconnect(), $i.delete(a));
            }
        );
    }
    function qi(e, t) {
        return (
            (function (e) {
                if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
                var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                if (null != n) {
                    var r,
                        a,
                        o,
                        i,
                        s = [],
                        l = !0,
                        u = !1;
                    try {
                        if (((o = (n = n.call(e)).next), 0 === t)) {
                            if (Object(n) !== n) return;
                            l = !1;
                        } else for (; !(l = (r = o.call(n)).done) && (s.push(r.value), s.length !== t); l = !0);
                    } catch (e) {
                        (u = !0), (a = e);
                    } finally {
                        try {
                            if (!l && null != n.return && ((i = n.return()), Object(i) !== i)) return;
                        } finally {
                            if (u) throw a;
                        }
                    }
                    return s;
                }
            })(e, t) ||
            (function (e, t) {
                if (e) {
                    if ("string" == typeof e) return Gi(e, t);
                    var n = {}.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Gi(e, t) : void 0;
                }
            })(e, t) ||
            (function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            })()
        );
    }
    function Gi(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
    }
    r.Component;
    const Xi = function (e) {
        var t = e.children,
            n = e.duration,
            a = void 0 === n ? 0.7 : n,
            o = e.delay,
            i = void 0 === o ? 0.2 : o,
            s = e.className,
            l = void 0 === s ? "" : s,
            u = e.animationType,
            c = void 0 === u ? "fade" : u,
            d = e.staggerChildren,
            f = void 0 === d ? 0.02 : d,
            h = e.threshold,
            p = void 0 === h ? 0.1 : h,
            m = e.triggerOnce,
            y = void 0 === m || m,
            g = e.cursorStyle,
            v = void 0 === g ? "none" : g,
            b = e.glowEffect,
            w = void 0 !== b && b,
            x = (function ({ threshold: e, delay: t, trackVisibility: n, rootMargin: a, root: o, triggerOnce: i, skip: s, initialInView: l, fallbackInView: u, onChange: c } = {}) {
                var d;
                const [f, h] = r.useState(null),
                    p = r.useRef(c),
                    [m, y] = r.useState({ inView: !!l, entry: void 0 });
                (p.current = c),
                    r.useEffect(() => {
                        if (s || !f) return;
                        let r;
                        return (
                            (r = Yi(
                                f,
                                (e, t) => {
                                    y({ inView: e, entry: t }), p.current && p.current(e, t), t.isIntersecting && i && r && (r(), (r = void 0));
                                },
                                { root: o, rootMargin: a, threshold: e, trackVisibility: n, delay: t },
                                u
                            )),
                            () => {
                                r && r();
                            }
                        );
                    }, [Array.isArray(e) ? e.toString() : e, f, o, a, i, s, n, u, t]);
                const g = null == (d = m.entry) ? void 0 : d.target,
                    v = r.useRef(void 0);
                f || !g || i || s || v.current === g || ((v.current = g), y({ inView: !!l, entry: void 0 }));
                const b = [h, m.inView, m.entry];
                return (b.ref = b[0]), (b.inView = b[1]), (b.entry = b[2]), b;
            })({ threshold: p, triggerOnce: y, rootMargin: "100px" }),
            k = qi(x, 2),
            S = k[0],
            E = k[1],
            P = qi((0, r.useState)(!1), 2),
            T = P[0],
            C = P[1],
            A = (0, r.useRef)(0),
            L = qi((0, r.useState)(!1), 2),
            j = L[0],
            N = L[1],
            O = (0, r.useMemo)(
                function () {
                    return { hidden: { opacity: 0, y: "slide" === c ? 20 : 0 }, visible: { opacity: 1, y: 0, transition: { duration: a, delay: i, ease: [0.22, 1, 0.36, 1] } } };
                },
                [c, a, i]
            ),
            M = (0, r.useMemo)(
                function () {
                    return { hidden: { opacity: 1 }, visible: { opacity: 1, transition: { staggerChildren: f, delayChildren: i, staggerDirection: 1, when: "beforeChildren" } } };
                },
                [f, i]
            ),
            z = (0, r.useMemo)(
                function () {
                    return {
                        hidden: { opacity: 0, y: 5, filter: "blur(8px)", scale: 0.9, transition: { type: "spring", damping: 12 } },
                        visible: { opacity: 1, y: 0, filter: "blur(0px)", scale: 1, transition: { type: "spring", damping: 25, stiffness: 400, mass: 0.4, velocity: 2, duration: a } },
                    };
                },
                [a]
            ),
            R = (0, r.useMemo)(function () {
                return { blink: { opacity: [1, 1, 0, 0], transition: { duration: 1, repeat: 1 / 0, repeatType: "loop" } } };
            }, []);
        (0, r.useEffect)(
            function () {
                if ("typewriter" === c && !T) {
                    var e = r.Children.only(t).props.children,
                        n = (Array.isArray(e) ? e.join("") : String(e)).replace(/<br\s*\/?>/gi, "").length;
                    A.current = n;
                }
            },
            [t, c, T]
        ),
            (0, r.useEffect)(
                function () {
                    E && !T && C(!0);
                },
                [E, T]
            );
        var _ = (0, r.useCallback)(function () {
                C(!0), N(!0);
            }, []),
            D = (0, r.useCallback)(
                function () {
                    return "none" === v || j
                        ? null
                        : (0, ua.jsx)(Ui.span, {
                              variants: R,
                              animate: "blink",
                              style: {
                                  block: { width: "0.6em", height: "1.2em", display: "inline-block", background: "currentColor", marginLeft: "2px", position: "absolute" },
                                  underline: { width: "0.6em", height: "2px", display: "inline-block", background: "currentColor", marginBottom: "-0.1em", marginLeft: "2px", position: "absolute" },
                                  vertical: { width: "2px", height: "1.2em", display: "inline-block", background: "currentColor", marginLeft: "2px", position: "absolute" },
                              }[v],
                              className: "typing-cursor",
                          });
                },
                [v, j, R]
            );
        if ("typewriter" === c) {
            var F = r.Children.only(t),
                I = F.props.children,
                V = Array.isArray(I) ? I : [I],
                B = "p" === F.type,
                U = (0, r.useMemo)(
                    function () {
                        return V.map(function (e, t) {
                            return "string" != typeof e ? { type: "element", content: e, key: "element-".concat(t) } : { type: "text", content: e, key: "text-".concat(t) };
                        });
                    },
                    [V]
                ),
                $ = B ? Ui.span : Ui.div;
            return r.cloneElement(
                F,
                {
                    className: ""
                        .concat(F.props.className || "", " ")
                        .concat(l, " ")
                        .concat(w ? "glow-effect" : "")
                        .trim(),
                    ref: S,
                },
                (0, ua.jsx)($, {
                    initial: "hidden",
                    animate: E ? "visible" : "hidden",
                    variants: M,
                    style: { width: "100%", minHeight: "1.2em" },
                    onAnimationComplete: _,
                    children: U.map(function (e) {
                        return "element" === e.type
                            ? (0, ua.jsx)(r.Fragment, { children: e.content }, e.key)
                            : (0, ua.jsx)(
                                  "span",
                                  {
                                      style: { display: "inline" },
                                      children: e.content.split(" ").map(function (t, n, o) {
                                          return (0, ua.jsxs)(
                                              r.Fragment,
                                              {
                                                  children: [
                                                      (0, ua.jsx)("span", {
                                                          style: { whiteSpace: "nowrap", position: "relative", display: "inline-block" },
                                                          children: t.split("").map(function (e, t) {
                                                              return (0,
                                                              ua.jsx)(Ui.span, { custom: t, variants: z, style: { display: "inline-block", transform: "translateZ(0)", position: "relative", height: "100%" }, transition: { duration: a, delay: 0.03 * Math.random(), type: "spring", damping: 20 + 10 * Math.random() }, className: w ? "char-glow" : "", children: e }, "char-".concat(t));
                                                          }),
                                                      }),
                                                      n < o.length - 1 && " ",
                                                      n === o.length - 1 && U.indexOf(e) === U.length - 1 && D(),
                                                  ],
                                              },
                                              "word-".concat(n)
                                          );
                                      }),
                                  },
                                  e.key
                              );
                    }),
                })
            );
        }
        return y && T
            ? (0, ua.jsx)("div", { className: "appearing-text ".concat(l).trim(), children: t })
            : (0, ua.jsx)(Ui.div, {
                  ref: S,
                  className: "appearing-text ".concat(l).trim(),
                  initial: "hidden",
                  animate: E ? "visible" : "hidden",
                  variants: O,
                  transition: { duration: a, delay: i, ease: [0.22, 1, 0.36, 1] },
                  onAnimationComplete: _,
                  children: t,
              });
    };
    function Ki(e, t) {
        [...t].reverse().forEach((n) => {
            const r = e.getVariant(n);
            r && me(e, r),
                e.variantChildren &&
                    e.variantChildren.forEach((e) => {
                        Ki(e, t);
                    });
        });
    }
    function Qi() {
        let e = !1;
        const t = new Set(),
            n = {
                subscribe: (e) => (
                    t.add(e),
                    () => {
                        t.delete(e);
                    }
                ),
                start(e, n) {
                    const r = [];
                    return (
                        t.forEach((t) => {
                            r.push(nr(t, e, { transitionOverride: n }));
                        }),
                        Promise.all(r)
                    );
                },
                set: (e) =>
                    t.forEach((t) => {
                        !(function (e, t) {
                            Array.isArray(t) ? Ki(e, t) : "string" == typeof t ? Ki(e, [t]) : me(e, t);
                        })(t, e);
                    }),
                stop() {
                    t.forEach((e) => {
                        !(function (e) {
                            e.values.forEach((e) => e.stop());
                        })(e);
                    });
                },
                mount: () => (
                    (e = !0),
                    () => {
                        (e = !1), n.stop();
                    }
                ),
            };
        return n;
    }
    const Zi = function () {
        const e = bi(Qi);
        return Go(e.mount, []), e;
    };
    function Ji(e) {
        return (
            (Ji =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      }),
            Ji(e)
        );
    }
    function es() {
        es = function () {
            return t;
        };
        var e,
            t = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            a =
                Object.defineProperty ||
                function (e, t, n) {
                    e[t] = n.value;
                },
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            s = o.asyncIterator || "@@asyncIterator",
            l = o.toStringTag || "@@toStringTag";
        function u(e, t, n) {
            return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t];
        }
        try {
            u({}, "");
        } catch (e) {
            u = function (e, t, n) {
                return (e[t] = n);
            };
        }
        function c(e, t, n, r) {
            var o = t && t.prototype instanceof g ? t : g,
                i = Object.create(o.prototype),
                s = new j(r || []);
            return a(i, "_invoke", { value: T(e, n, s) }), i;
        }
        function d(e, t, n) {
            try {
                return { type: "normal", arg: e.call(t, n) };
            } catch (e) {
                return { type: "throw", arg: e };
            }
        }
        t.wrap = c;
        var f = "suspendedStart",
            h = "suspendedYield",
            p = "executing",
            m = "completed",
            y = {};
        function g() {}
        function v() {}
        function b() {}
        var w = {};
        u(w, i, function () {
            return this;
        });
        var x = Object.getPrototypeOf,
            k = x && x(x(N([])));
        k && k !== n && r.call(k, i) && (w = k);
        var S = (b.prototype = g.prototype = Object.create(w));
        function E(e) {
            ["next", "throw", "return"].forEach(function (t) {
                u(e, t, function (e) {
                    return this._invoke(t, e);
                });
            });
        }
        function P(e, t) {
            function n(a, o, i, s) {
                var l = d(e[a], e, o);
                if ("throw" !== l.type) {
                    var u = l.arg,
                        c = u.value;
                    return c && "object" == Ji(c) && r.call(c, "__await")
                        ? t.resolve(c.__await).then(
                              function (e) {
                                  n("next", e, i, s);
                              },
                              function (e) {
                                  n("throw", e, i, s);
                              }
                          )
                        : t.resolve(c).then(
                              function (e) {
                                  (u.value = e), i(u);
                              },
                              function (e) {
                                  return n("throw", e, i, s);
                              }
                          );
                }
                s(l.arg);
            }
            var o;
            a(this, "_invoke", {
                value: function (e, r) {
                    function a() {
                        return new t(function (t, a) {
                            n(e, r, t, a);
                        });
                    }
                    return (o = o ? o.then(a, a) : a());
                },
            });
        }
        function T(t, n, r) {
            var a = f;
            return function (o, i) {
                if (a === p) throw Error("Generator is already running");
                if (a === m) {
                    if ("throw" === o) throw i;
                    return { value: e, done: !0 };
                }
                for (r.method = o, r.arg = i; ; ) {
                    var s = r.delegate;
                    if (s) {
                        var l = C(s, r);
                        if (l) {
                            if (l === y) continue;
                            return l;
                        }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                        if (a === f) throw ((a = m), r.arg);
                        r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    a = p;
                    var u = d(t, n, r);
                    if ("normal" === u.type) {
                        if (((a = r.done ? m : h), u.arg === y)) continue;
                        return { value: u.arg, done: r.done };
                    }
                    "throw" === u.type && ((a = m), (r.method = "throw"), (r.arg = u.arg));
                }
            };
        }
        function C(t, n) {
            var r = n.method,
                a = t.iterator[r];
            if (a === e)
                return (
                    (n.delegate = null),
                    ("throw" === r && t.iterator.return && ((n.method = "return"), (n.arg = e), C(t, n), "throw" === n.method)) ||
                        ("return" !== r && ((n.method = "throw"), (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
                    y
                );
            var o = d(a, t.iterator, n.arg);
            if ("throw" === o.type) return (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), y;
            var i = o.arg;
            return i
                ? i.done
                    ? ((n[t.resultName] = i.value), (n.next = t.nextLoc), "return" !== n.method && ((n.method = "next"), (n.arg = e)), (n.delegate = null), y)
                    : i
                : ((n.method = "throw"), (n.arg = new TypeError("iterator result is not an object")), (n.delegate = null), y);
        }
        function A(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
        }
        function L(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function j(e) {
            (this.tryEntries = [{ tryLoc: "root" }]), e.forEach(A, this), this.reset(!0);
        }
        function N(t) {
            if (t || "" === t) {
                var n = t[i];
                if (n) return n.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var a = -1,
                        o = function n() {
                            for (; ++a < t.length; ) if (r.call(t, a)) return (n.value = t[a]), (n.done = !1), n;
                            return (n.value = e), (n.done = !0), n;
                        };
                    return (o.next = o);
                }
            }
            throw new TypeError(Ji(t) + " is not iterable");
        }
        return (
            (v.prototype = b),
            a(S, "constructor", { value: b, configurable: !0 }),
            a(b, "constructor", { value: v, configurable: !0 }),
            (v.displayName = u(b, l, "GeneratorFunction")),
            (t.isGeneratorFunction = function (e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name));
            }),
            (t.mark = function (e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, b) : ((e.__proto__ = b), u(e, l, "GeneratorFunction")), (e.prototype = Object.create(S)), e;
            }),
            (t.awrap = function (e) {
                return { __await: e };
            }),
            E(P.prototype),
            u(P.prototype, s, function () {
                return this;
            }),
            (t.AsyncIterator = P),
            (t.async = function (e, n, r, a, o) {
                void 0 === o && (o = Promise);
                var i = new P(c(e, n, r, a), o);
                return t.isGeneratorFunction(n)
                    ? i
                    : i.next().then(function (e) {
                          return e.done ? e.value : i.next();
                      });
            }),
            E(S),
            u(S, l, "Generator"),
            u(S, i, function () {
                return this;
            }),
            u(S, "toString", function () {
                return "[object Generator]";
            }),
            (t.keys = function (e) {
                var t = Object(e),
                    n = [];
                for (var r in t) n.push(r);
                return (
                    n.reverse(),
                    function e() {
                        for (; n.length; ) {
                            var r = n.pop();
                            if (r in t) return (e.value = r), (e.done = !1), e;
                        }
                        return (e.done = !0), e;
                    }
                );
            }),
            (t.values = N),
            (j.prototype = {
                constructor: j,
                reset: function (t) {
                    if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = e), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = e), this.tryEntries.forEach(L), !t))
                        for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
                },
                stop: function () {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval;
                },
                dispatchException: function (t) {
                    if (this.done) throw t;
                    var n = this;
                    function a(r, a) {
                        return (s.type = "throw"), (s.arg = t), (n.next = r), a && ((n.method = "next"), (n.arg = e)), !!a;
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o],
                            s = i.completion;
                        if ("root" === i.tryLoc) return a("end");
                        if (i.tryLoc <= this.prev) {
                            var l = r.call(i, "catchLoc"),
                                u = r.call(i, "finallyLoc");
                            if (l && u) {
                                if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                            } else if (l) {
                                if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                            } else {
                                if (!u) throw Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function (e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var a = this.tryEntries[n];
                        if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                            var o = a;
                            break;
                        }
                    }
                    o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                    var i = o ? o.completion : {};
                    return (i.type = e), (i.arg = t), o ? ((this.method = "next"), (this.next = o.finallyLoc), y) : this.complete(i);
                },
                complete: function (e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return (
                        "break" === e.type || "continue" === e.type ? (this.next = e.arg) : "return" === e.type ? ((this.rval = this.arg = e.arg), (this.method = "return"), (this.next = "end")) : "normal" === e.type && t && (this.next = t),
                        y
                    );
                },
                finish: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), L(n), y;
                    }
                },
                catch: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var a = r.arg;
                                L(n);
                            }
                            return a;
                        }
                    }
                    throw Error("illegal catch attempt");
                },
                delegateYield: function (t, n, r) {
                    return (this.delegate = { iterator: N(t), resultName: n, nextLoc: r }), "next" === this.method && (this.arg = e), y;
                },
            }),
            t
        );
    }
    function ts(e, t, n, r, a, o, i) {
        try {
            var s = e[o](i),
                l = s.value;
        } catch (e) {
            return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(r, a);
    }
    function ns(e) {
        return function () {
            var t = this,
                n = arguments;
            return new Promise(function (r, a) {
                var o = e.apply(t, n);
                function i(e) {
                    ts(o, r, a, i, s, "next", e);
                }
                function s(e) {
                    ts(o, r, a, i, s, "throw", e);
                }
                i(void 0);
            });
        };
    }
    function rs(e, t) {
        return (
            (function (e) {
                if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
                var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                if (null != n) {
                    var r,
                        a,
                        o,
                        i,
                        s = [],
                        l = !0,
                        u = !1;
                    try {
                        if (((o = (n = n.call(e)).next), 0 === t)) {
                            if (Object(n) !== n) return;
                            l = !1;
                        } else for (; !(l = (r = o.call(n)).done) && (s.push(r.value), s.length !== t); l = !0);
                    } catch (e) {
                        (u = !0), (a = e);
                    } finally {
                        try {
                            if (!l && null != n.return && ((i = n.return()), Object(i) !== i)) return;
                        } finally {
                            if (u) throw a;
                        }
                    }
                    return s;
                }
            })(e, t) ||
            as(e, t) ||
            (function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            })()
        );
    }
    function as(e, t) {
        if (e) {
            if ("string" == typeof e) return os(e, t);
            var n = {}.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? os(e, t) : void 0;
        }
    }
    function os(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
    }
    /*const is = function() {
        var e = rs((0, r.useState)(null), 2),
            t = e[0],
            n = e[1],
            a = Zi(),
            o = (0, r.useRef)(!1),
            i = (0, r.useRef)(null),
            s = rs((0, r.useState)([]), 2),
            l = s[0],
            u = s[1];
        return (
            (0, r.useEffect)(
                function() {
                    (o.current = !0), u([]);
                    var e = (function() {
                            var e = ns(
                                es().mark(function e(t) {
                                    return es().wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    if (!o.current) {
                                                        e.next = 2;
                                                        break;
                                                    }
                                                    return e.abrupt("return", a.start(t));
                                                case 2:
                                                    return e.abrupt("return", Promise.resolve());
                                                case 3:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            );
                            return function(t) {
                                return e.apply(this, arguments);
                            };
                        })(),
                        t = (function() {
                            var t = ns(
                                es().mark(function t() {
                                    var r, a, i;
                                    return es().wrap(function(t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    if (((t.prev = 0), o.current)) {
                                                        t.next = 3;
                                                        break;
                                                    }
                                                    return t.abrupt("return");
                                                case 3:
                                                    return (t.next = 5), new Promise((e) => setTimeout(e, 500));
                                                case 5:
                                                    if (o.current) {
                                                        t.next = 7;
                                                        break;
                                                    }
                                                    return t.abrupt("return");
                                                case 7:
                                                    return (
                                                        (r = [{
                                                            x: 140,
                                                            y: 260,
                                                            duration: 250
                                                        }, {
                                                            x: 220,
                                                            y: 260,
                                                            duration: 250
                                                        }, {
                                                            x: 160,
                                                            y: 295,
                                                            duration: 250
                                                        }, {
                                                            x: 100,
                                                            y: 150,
                                                            click: !0,
                                                            duration: 400
                                                        }, ]),
                                                        (a = function(t) {
                                                            var a,
                                                                s =
                                                                ((a = ns(
                                                                    es().mark(function e() {
                                                                        var n;
                                                                        return es().wrap(function(e) {
                                                                            for (;;)
                                                                                switch ((e.prev = e.next)) {
                                                                                    case 0:
                                                                                        if (o.current) {
                                                                                            e.next = 2;
                                                                                            break;
                                                                                        }
                                                                                        return e.abrupt("return");
                                                                                    case 2:
                                                                                        return (n = r[t]), (e.next = 5), new Promise((e) => setTimeout(e, n.duration));
                                                                                    case 5:
                                                                                        if (o.current) {
                                                                                            e.next = 7;
                                                                                            break;
                                                                                        }
                                                                                        return e.abrupt("return");
                                                                                    case 7:
                                                                                        return (e.next = 9), e.start({
                                                                                            x: n.x,
                                                                                            y: n.y,
                                                                                            transition: {
                                                                                                duration: 0.3
                                                                                            }
                                                                                        }));
                                                                                    case 9:
                                                                                        if (!n.click) {
                                                                                            e.next = 15;
                                                                                            break;
                                                                                        }
                                                                                        return (e.next = 12), new Promise((e) => setTimeout(e, 100));
                                                                                    case 12:
                                                                                        o.current && n(n), (e.next = 15);
                                                                                        break;
                                                                                    case 15:
                                                                                    case "end":
                                                                                        return e.stop();
                                                                                }
                                                                        }, e);
                                                                    })
                                                                )),
                                                                function() {
                                                                    return a.apply(this, arguments);
                                                                });
                                                            var l = 0;
                                                            (function e() {
                                                                var t,
                                                                    r =
                                                                    ((t = ns(
                                                                        es().mark(function t() {
                                                                            var r;
                                                                            return es().wrap(function(t) {
                                                                                for (;;)
                                                                                    switch ((t.prev = t.next)) {
                                                                                        case 0:
                                                                                            if (!o.current) {
                                                                                                t.next = 13;
                                                                                                break;
                                                                                            }
                                                                                            if (((r = [1, 2, 3]), !(l < r.length))) {
                                                                                                t.next = 8;
                                                                                                break;
                                                                                            }
                                                                                            return u((e) => [...e, r[l]]), (l += 1), (t.next = 7), new Promise((e) => setTimeout(e, 250));
                                                                                        case 7:
                                                                                            return t.abrupt("break", 8);
                                                                                        case 8:
                                                                                            return (t.next = 10), new Promise((e) => setTimeout(e, 1e3));
                                                                                        case 10:
                                                                                            o.current && (u([]), (l = 0), s());
                                                                                        case 13:
                                                                                        case "end":
                                                                                            return t.stop();
                                                                                    }
                                                                            }, t);
                                                                        })
                                                                    )),
                                                                    function() {
                                                                        return t.apply(this, arguments);
                                                                    });
    
                                                                function a() {
                                                                    return r.apply(this, arguments);
                                                                }
                                                                return (
                                                                    (a.toString = function() {
                                                                        return r.toString();
                                                                    }),
                                                                    a
                                                                );
                                                            })()();
                                                        }),
                                                        (i = 0);
                                                case 9:
                                                    if (!(i < r.length)) {
                                                        t.next = 14;
                                                        break;
                                                    }
                                                    return t.delegateYield(a(i), "t0", 11);
                                                case 11:
                                                    i++, (t.next = 9);
                                                    break;
                                                case 14:
                                                    t.next = 19;
                                                    break;
                                                case 16:
                                                    (t.prev = 16), (t.t1 = t.catch(0)), console.error(t.t1);
                                                case 19:
                                                case "end":
                                                    return t.stop();
                                            }
                                    }, t, null, [
                                        [0, 16]
                                    ]);
                                })
                            );
                            return function() {
                                return t.apply(this, arguments);
                            };
                        })();
                    return (
                        t(),
                        function() {
                            (o.current = !1), a.stop(), n(null);
                        }
                    );
                },
                [a]
            ),
            (0, ua.jsxs)("div", {
                className: "relative h-full bg-stone-100 rounded-b-lg p-4 flex flex-col justify-between",
                children: [
                    (0, ua.jsxs)("div", {
                        children: [
                            (0, ua.jsx)("div", {
                                className: "h-4 w-1/3 bg-stone-200 rounded-sm mb-2",
                            }),
                            (0, ua.jsx)("div", {
                                className: "h-3 w-full bg-stone-200 rounded-sm",
                            }),
                        ],
                    }),
                    (0, ua.jsx)("div", {
                        className: "flex-grow flex items-center justify-center",
                        children: (0, ua.jsxs)("div", {
                            className: "w-full h-32 bg-stone-50 border-2 border-dashed border-stone-300 rounded-lg flex flex-col items-center justify-center text-stone-500",
                            children: [
                                (0, ua.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-8 w-8 mb-2 text-stone-400",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: (0, ua.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 1.5,
                                        d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                                    }),
                                }),
                                (0, ua.jsx)("span", {
                                    className: "text-xs font-semibold",
                                    children: "Drag & drop a file",
                                }),
                            ],
                        }),
                    }),
                    (0, ua.jsxs)("div", {
                        className: "grid grid-cols-2 gap-3 mt-4",
                        children: [
                            (0, ua.jsx)("div", {
                                className: "h-8 rounded-md ".concat(l.includes(1) ? "bg-amber-500" : "bg-stone-200"),
                            }),
                            (0, ua.jsx)("div", {
                                className: "h-8 rounded-md ".concat(l.includes(2) ? "bg-amber-500" : "bg-stone-200"),
                            }),
                        ],
                    }),
                    (0, ua.jsx)("div", {
                        className: "h-10 mt-3 rounded-md ".concat(l.includes(3) ? "bg-amber-600" : "bg-stone-300"),
                    }),
                    (0, ua.jsxs)("div", {
                        className: "absolute inset-0 pointer-events-none overflow-hidden",
                        style: {
                            position: "absolute",
                            zIndex: 100
                        },
                        children: [
                            (0, ua.jsx)(Ui.div, {
                                animate: a,
                                className: "absolute cursor-mac",
                                style: {
                                    width: "16px",
                                    height: "16px",
                                    backgroundImage: "url('../icons/cursor-mac.svg')",
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                    zIndex: 100,
                                    filter: "drop-shadow(0 1px 1px rgb(0 0 0 / 0.1))",
                                },
                            }),
                            t &&
                            (0, ua.jsx)(Ui.div, {
                                className: "absolute w-4 h-4 -translate-x-2 -translate-y-2",
                                style: {
                                    left: t.x,
                                    top: t.y
                                },
                                initial: {
                                    scale: 0,
                                    opacity: 0
                                },
                                animate: {
                                    scale: [1, 2],
                                    opacity: [0.2, 0]
                                },
                                transition: {
                                    duration: 0.3,
                                    ease: "easeOut"
                                },
                                children: (0, ua.jsx)("div", {
                                    className: "w-full h-full bg-gray-500/40 rounded-full"
                                }),
                            }),
                            (0, ua.jsx)("style", {
                                jsx: "true",
                                global: "true",
                                children: "\n          .cursor-mac {\n            transform-origin: 3.5px 1px;\n            pointer-events: none;\n          }\n        ",
                            }),
                        ],
                    }),
                ],
            })
        );
    };*/
    
    const is = function () {
            var e = rs((0, r.useState)(null), 2),
                t = e[0],
                n = e[1],
                a = Zi(),
                o = (0, r.useRef)(!1),
                i = (0, r.useRef)(null),
                s = rs((0, r.useState)([]), 2),
                l = s[0],
                u = s[1];
            return (
                (0, r.useEffect)(
                    function () {
                        (o.current = !0), u([]);
                        var e = (function () {
                                var e = ns(
                                    es().mark(function e(t) {
                                        return es().wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        if (!o.current) {
                                                            e.next = 2;
                                                            break;
                                                        }
                                                        return e.abrupt("return", a.start(t));
                                                    case 2:
                                                        return e.abrupt("return", Promise.resolve());
                                                    case 3:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                );
                                return function (t) {
                                    return e.apply(this, arguments);
                                };
                            })(),
                            t = (function () {
                                var t = ns(
                                    es().mark(function t() {
                                        var r, a;
                                        return es().wrap(function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        if (o.current) {
                                                            t.next = 2;
                                                            break;
                                                        }
                                                        return t.abrupt("return");
                                                    case 2:
                                                        (r = [
                                                            { x: 50, y: 60, field: "name", delay: 800 },
                                                            { x: 40, y: 110, field: "email", delay: 800 },
                                                            { x: 130, y: 160, field: "upload", delay: 800 },
                                                        ]),
                                                            (a = (function () {
                                                                var t = ns(
                                                                    es().mark(function t() {
                                                                        var a, i, s, l;
                                                                        return es().wrap(
                                                                            function (t) {
                                                                                for (;;)
                                                                                    switch ((t.prev = t.next)) {
                                                                                        case 0:
                                                                                            if (!o.current) {
                                                                                                t.next = 38;
                                                                                                break;
                                                                                            }
                                                                                            (t.prev = 1),
                                                                                                u([]),
                                                                                                (a = es().mark(function t() {
                                                                                                    var r;
                                                                                                    return es().wrap(function (t) {
                                                                                                        for (;;)
                                                                                                            switch ((t.prev = t.next)) {
                                                                                                                case 0:
                                                                                                                    if (((r = l[s]), o.current)) {
                                                                                                                        t.next = 3;
                                                                                                                        break;
                                                                                                                    }
                                                                                                                    return t.abrupt("return", { v: void 0 });
                                                                                                                case 3:
                                                                                                                    return (t.next = 5), e({ x: r.x, y: r.y, transition: { duration: 0.3, ease: "easeInOut" } });
                                                                                                                case 5:
                                                                                                                    if (o.current) {
                                                                                                                        t.next = 7;
                                                                                                                        break;
                                                                                                                    }
                                                                                                                    return t.abrupt("return", { v: void 0 });
                                                                                                                case 7:
                                                                                                                    return (
                                                                                                                        n({ x: r.x, y: r.y }),
                                                                                                                        (t.next = 10),
                                                                                                                        new Promise(function (e) {
                                                                                                                            return setTimeout(e, 300);
                                                                                                                        })
                                                                                                                    );
                                                                                                                case 10:
                                                                                                                    if (o.current) {
                                                                                                                        t.next = 12;
                                                                                                                        break;
                                                                                                                    }
                                                                                                                    return t.abrupt("return", { v: void 0 });
                                                                                                                case 12:
                                                                                                                    return (
                                                                                                                        n(null),
                                                                                                                        u(function (e) {
                                                                                                                            return [].concat(
                                                                                                                                (function (e) {
                                                                                                                                    if (Array.isArray(e)) return os(e);
                                                                                                                                })((t = e)) ||
                                                                                                                                    (function (e) {
                                                                                                                                        if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"])
                                                                                                                                            return Array.from(e);
                                                                                                                                    })(t) ||
                                                                                                                                    as(t) ||
                                                                                                                                    (function () {
                                                                                                                                        throw new TypeError(
                                                                                                                                            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                                                                                                                                        );
                                                                                                                                    })(),
                                                                                                                                [r.field]
                                                                                                                            );
                                                                                                                            var t;
                                                                                                                        }),
                                                                                                                        (t.next = 16),
                                                                                                                        new Promise(function (e) {
                                                                                                                            return setTimeout(e, r.delay);
                                                                                                                        })
                                                                                                                    );
                                                                                                                case 16:
                                                                                                                    if (o.current) {
                                                                                                                        t.next = 18;
                                                                                                                        break;
                                                                                                                    }
                                                                                                                    return t.abrupt("return", { v: void 0 });
                                                                                                                case 18:
                                                                                                                case "end":
                                                                                                                    return t.stop();
                                                                                                            }
                                                                                                    }, t);
                                                                                                })),
                                                                                                (s = 0),
                                                                                                (l = r);
                                                                                        case 5:
                                                                                            if (!(s < l.length)) {
                                                                                                t.next = 13;
                                                                                                break;
                                                                                            }
                                                                                            return t.delegateYield(a(), "t0", 7);
                                                                                        case 7:
                                                                                            if (!(i = t.t0)) {
                                                                                                t.next = 10;
                                                                                                break;
                                                                                            }
                                                                                            return t.abrupt("return", i.v);
                                                                                        case 10:
                                                                                            s++, (t.next = 5);
                                                                                            break;
                                                                                        case 13:
                                                                                            return (t.next = 15), e({ x: 200, y: 250, transition: { duration: 0.3, ease: "easeInOut" } });
                                                                                        case 15:
                                                                                            if (o.current) {
                                                                                                t.next = 17;
                                                                                                break;
                                                                                            }
                                                                                            return t.abrupt("return");
                                                                                        case 17:
                                                                                            return (
                                                                                                n({ x: 200, y: 280 }),
                                                                                                (t.next = 20),
                                                                                                new Promise(function (e) {
                                                                                                    return setTimeout(e, 300);
                                                                                                })
                                                                                            );
                                                                                        case 20:
                                                                                            if (o.current) {
                                                                                                t.next = 22;
                                                                                                break;
                                                                                            }
                                                                                            return t.abrupt("return");
                                                                                        case 22:
                                                                                            return (
                                                                                                n(null),
                                                                                                (t.next = 25),
                                                                                                new Promise(function (e) {
                                                                                                    return setTimeout(e, 1e3);
                                                                                                })
                                                                                            );
                                                                                        case 25:
                                                                                            if (o.current) {
                                                                                                t.next = 27;
                                                                                                break;
                                                                                            }
                                                                                            return t.abrupt("return");
                                                                                        case 27:
                                                                                            return u([]), (t.next = 30), e({ x: 80, y: 80, transition: { duration: 0.3, ease: "easeInOut" } });
                                                                                        case 30:
                                                                                            t.next = 36;
                                                                                            break;
                                                                                        case 32:
                                                                                            return (t.prev = 32), (t.t1 = t.catch(1)), console.error("Animation error:", t.t1), t.abrupt("break", 38);
                                                                                        case 36:
                                                                                            t.next = 0;
                                                                                            break;
                                                                                        case 38:
                                                                                        case "end":
                                                                                            return t.stop();
                                                                                    }
                                                                            },
                                                                            t,
                                                                            null,
                                                                            [[1, 32]]
                                                                        );
                                                                    })
                                                                );
                                                                return function () {
                                                                    return t.apply(this, arguments);
                                                                };
                                                            })()),
                                                            a();
                                                    case 5:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        }, t);
                                    })
                                );
                                return function () {
                                    return t.apply(this, arguments);
                                };
                            })();
                        return (
                            (i.current = setTimeout(t, 500)),
                            function () {
                                (o.current = !1), i.current && clearTimeout(i.current), a.stop();
                            }
                        );
                    },
                    [a]
                ),
                (0, ua.jsxs)("div", {
                    className: "relative h-full",
                    children: [
                        (0, ua.jsx)("div", {
                            className: "p-4 h-[calc(100%-28px)] bg-stone-300 overflow-y-auto rounded-b-lg",
                            children: (0, ua.jsxs)("div", {
                                className: "space-y-4",
                                children: [
                                    (0, ua.jsx)("div", { className: "h-3 w-32 bg-stone-100 rounded mb-4" }),
                                    (0, ua.jsx)("div", {
                                        className: "relative",
                                        children: (0, ua.jsx)("div", {
                                            className: "h-8 w-full bg-stone-300 rounded-md border border-stone-300 px-3 flex items-center",
                                            children:
                                                l.includes("name") &&
                                                (0, ua.jsx)(Ui.div, {
                                                    initial: { opacity: 0 },
                                                    animate: { opacity: 1 },
                                                    transition: { duration: 0.3 },
                                                    className: "h-full flex items-center",
                                                    children: (0, ua.jsx)("div", { className: "h-2 w-24 bg-stone-100 rounded" }),
                                                }),
                                        }),
                                    }),
                                    (0, ua.jsx)("div", {
                                        className: "relative",
                                        children: (0, ua.jsx)("div", {
                                            className: "h-8 w-full bg-stone-300 rounded-md border border-stone-300 px-3 flex items-center",
                                            children:
                                                l.includes("email") &&
                                                (0, ua.jsx)(Ui.div, {
                                                    initial: { opacity: 0 },
                                                    animate: { opacity: 1 },
                                                    transition: { duration: 0.3 },
                                                    className: "h-full flex items-center",
                                                    children: (0, ua.jsx)("div", { className: "h-2 w-40 bg-stone-100 rounded" }),
                                                }),
                                        }),
                                    }),
                                    (0, ua.jsx)("div", {
                                        className: "h-20 w-full bg-stone-400 rounded-md border-2 border-dashed border-stone-300 flex flex-col items-center justify-center gap-2",
                                        children: l.includes("upload")
                                            ? (0, ua.jsxs)(Ui.div, {
                                                  initial: { opacity: 0 },
                                                  animate: { opacity: 1 },
                                                  transition: { duration: 0.3 },
                                                  className: "h-full flex flex-col items-center justify-center gap-2",
                                                  children: (0, ua.jsx)("div", { className: "file-icon" })
                                              })
                                            : (0, ua.jsxs)("div", {
                                                  className: "h-full flex flex-col items-center justify-center opacity-0",
                                                  children: [(0, ua.jsx)("div", { className: "h-2 w-24 bg-transparent rounded" }), (0, ua.jsx)("div", { className: "h-2 w-16 bg-transparent rounded" })],
                                              }),
                                    }),
                                    (0, ua.jsx)("div", {
                                        className: "h-8 w-24 rounded-md ml-auto flex items-center justify-center bg-stone-500 border border-gray-300",
                                        children:
                                            l.length > 0 &&
                                            (0, ua.jsx)(Ui.div, {
                                                initial: { opacity: 0 },
                                                animate: { opacity: 1 },
                                                transition: { duration: 0.3 },
                                                className: "h-full flex items-center justify-center",
                                                children: (0, ua.jsx)("div", { className: "h-2 w-12 bg-stone-500 rounded" }),
                                            }),
                                    }),
                                ],
                            }),
                        }),
                        (0, ua.jsxs)("div", {
                            className: "absolute inset-0 pointer-events-none overflow-hidden",
                            style: { position: "absolute", zIndex: 100 },
                            children: [
                                (0, ua.jsx)(Ui.div, {
                                    animate: a,
                                    className: "absolute cursor-mac",
                                    style: {
                                        width: "16px",
                                        height: "16px",
                                        backgroundImage: "url('../icons/cursor-mac.svg')",
                                        backgroundSize: "contain",
                                        backgroundRepeat: "no-repeat",
                                        zIndex: 100,
                                        filter: "drop-shadow(0 1px 1px rgb(0 0 0 / 0.1))",
                                    },
                                }),
                                t &&
                                    (0, ua.jsx)(Ui.div, {
                                        className: "absolute w-4 h-4 -translate-x-2 -translate-y-2",
                                        style: { left: t.x, top: t.y },
                                        initial: { scale: 0, opacity: 0 },
                                        animate: { scale: [1, 2], opacity: [0.2, 0] },
                                        transition: { duration: 0.3, ease: "easeOut" },
                                        children: (0, ua.jsx)("div", { className: "w-full h-full bg-amber-600/40 rounded-full" }),
                                    }),
                                (0, ua.jsx)("style", { jsx: "true", global: "true", children: "\n          .cursor-mac {\n            transform-origin: 3.5px 1px;\n            pointer-events: none;\n          }\n        " }),
                            ],
                        }),
                    ],
                })
            );
        },
        ss = (e) => {
            const t = ((e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => (n ? n.toUpperCase() : t.toLowerCase())))(e);
            return t.charAt(0).toUpperCase() + t.slice(1);
        },
        ls = (...e) =>
            e
                .filter((e, t, n) => Boolean(e) && "" !== e.trim() && n.indexOf(e) === t)
                .join(" ")
                .trim();
    var us = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };

    const cs = (0, r.forwardRef)(({ color: e = "currentColor", size: t = 24, strokeWidth: n = 2, absoluteStrokeWidth: a, className: o = "", children: i, iconNode: s, ...l }, u) =>
            (0, r.createElement)("svg", { ref: u, ...us, width: t, height: t, stroke: e, strokeWidth: a ? (24 * Number(n)) / Number(t) : n, className: ls("lucide", o), ...l }, [
                ...s.map(([e, t]) => (0, r.createElement)(e, t)),
                ...(Array.isArray(i) ? i : [i]),
            ])
        ),
        ds = (e, t) => {
            const n = (0, r.forwardRef)(({ className: n, ...a }, o) => {
                return (0, r.createElement)(cs, { ref: o, iconNode: t, className: ls(`lucide-${((i = ss(e)), i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase())}`, `lucide-${e}`, n), ...a });
                var i;
            });
            return (n.displayName = ss(e)), n;
        },
        fs = ds("corner-up-right", [
            ["polyline", { points: "15 14 20 9 15 4", key: "1tbx3s" }],
            ["path", { d: "M4 20v-7a4 4 0 0 1 4-4h12", key: "1lu4f8" }],
        ]);
    function hs(e) {
        return (
            (hs =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      }),
            hs(e)
        );
    }
    function ps() {
        ps = function () {
            return t;
        };
        var e,
            t = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            a =
                Object.defineProperty ||
                function (e, t, n) {
                    e[t] = n.value;
                },
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            s = o.asyncIterator || "@@asyncIterator",
            l = o.toStringTag || "@@toStringTag";
        function u(e, t, n) {
            return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t];
        }
        try {
            u({}, "");
        } catch (e) {
            u = function (e, t, n) {
                return (e[t] = n);
            };
        }
        function c(e, t, n, r) {
            var o = t && t.prototype instanceof g ? t : g,
                i = Object.create(o.prototype),
                s = new j(r || []);
            return a(i, "_invoke", { value: T(e, n, s) }), i;
        }
        function d(e, t, n) {
            try {
                return { type: "normal", arg: e.call(t, n) };
            } catch (e) {
                return { type: "throw", arg: e };
            }
        }
        t.wrap = c;
        var f = "suspendedStart",
            h = "suspendedYield",
            p = "executing",
            m = "completed",
            y = {};
        function g() {}
        function v() {}
        function b() {}
        var w = {};
        u(w, i, function () {
            return this;
        });
        var x = Object.getPrototypeOf,
            k = x && x(x(N([])));
        k && k !== n && r.call(k, i) && (w = k);
        var S = (b.prototype = g.prototype = Object.create(w));
        function E(e) {
            ["next", "throw", "return"].forEach(function (t) {
                u(e, t, function (e) {
                    return this._invoke(t, e);
                });
            });
        }
        function P(e, t) {
            function n(a, o, i, s) {
                var l = d(e[a], e, o);
                if ("throw" !== l.type) {
                    var u = l.arg,
                        c = u.value;
                    return c && "object" == hs(c) && r.call(c, "__await")
                        ? t.resolve(c.__await).then(
                              function (e) {
                                  n("next", e, i, s);
                              },
                              function (e) {
                                  n("throw", e, i, s);
                              }
                          )
                        : t.resolve(c).then(
                              function (e) {
                                  (u.value = e), i(u);
                              },
                              function (e) {
                                  return n("throw", e, i, s);
                              }
                          );
                }
                s(l.arg);
            }
            var o;
            a(this, "_invoke", {
                value: function (e, r) {
                    function a() {
                        return new t(function (t, a) {
                            n(e, r, t, a);
                        });
                    }
                    return (o = o ? o.then(a, a) : a());
                },
            });
        }
        function T(t, n, r) {
            var a = f;
            return function (o, i) {
                if (a === p) throw Error("Generator is already running");
                if (a === m) {
                    if ("throw" === o) throw i;
                    return { value: e, done: !0 };
                }
                for (r.method = o, r.arg = i; ; ) {
                    var s = r.delegate;
                    if (s) {
                        var l = C(s, r);
                        if (l) {
                            if (l === y) continue;
                            return l;
                        }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                        if (a === f) throw ((a = m), r.arg);
                        r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    a = p;
                    var u = d(t, n, r);
                    if ("normal" === u.type) {
                        if (((a = r.done ? m : h), u.arg === y)) continue;
                        return { value: u.arg, done: r.done };
                    }
                    "throw" === u.type && ((a = m), (r.method = "throw"), (r.arg = u.arg));
                }
            };
        }
        function C(t, n) {
            var r = n.method,
                a = t.iterator[r];
            if (a === e)
                return (
                    (n.delegate = null),
                    ("throw" === r && t.iterator.return && ((n.method = "return"), (n.arg = e), C(t, n), "throw" === n.method)) ||
                        ("return" !== r && ((n.method = "throw"), (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
                    y
                );
            var o = d(a, t.iterator, n.arg);
            if ("throw" === o.type) return (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), y;
            var i = o.arg;
            return i
                ? i.done
                    ? ((n[t.resultName] = i.value), (n.next = t.nextLoc), "return" !== n.method && ((n.method = "next"), (n.arg = e)), (n.delegate = null), y)
                    : i
                : ((n.method = "throw"), (n.arg = new TypeError("iterator result is not an object")), (n.delegate = null), y);
        }
        function A(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
        }
        function L(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function j(e) {
            (this.tryEntries = [{ tryLoc: "root" }]), e.forEach(A, this), this.reset(!0);
        }
        function N(t) {
            if (t || "" === t) {
                var n = t[i];
                if (n) return n.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var a = -1,
                        o = function n() {
                            for (; ++a < t.length; ) if (r.call(t, a)) return (n.value = t[a]), (n.done = !1), n;
                            return (n.value = e), (n.done = !0), n;
                        };
                    return (o.next = o);
                }
            }
            throw new TypeError(hs(t) + " is not iterable");
        }
        return (
            (v.prototype = b),
            a(S, "constructor", { value: b, configurable: !0 }),
            a(b, "constructor", { value: v, configurable: !0 }),
            (v.displayName = u(b, l, "GeneratorFunction")),
            (t.isGeneratorFunction = function (e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name));
            }),
            (t.mark = function (e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, b) : ((e.__proto__ = b), u(e, l, "GeneratorFunction")), (e.prototype = Object.create(S)), e;
            }),
            (t.awrap = function (e) {
                return { __await: e };
            }),
            E(P.prototype),
            u(P.prototype, s, function () {
                return this;
            }),
            (t.AsyncIterator = P),
            (t.async = function (e, n, r, a, o) {
                void 0 === o && (o = Promise);
                var i = new P(c(e, n, r, a), o);
                return t.isGeneratorFunction(n)
                    ? i
                    : i.next().then(function (e) {
                          return e.done ? e.value : i.next();
                      });
            }),
            E(S),
            u(S, l, "Generator"),
            u(S, i, function () {
                return this;
            }),
            u(S, "toString", function () {
                return "[object Generator]";
            }),
            (t.keys = function (e) {
                var t = Object(e),
                    n = [];
                for (var r in t) n.push(r);
                return (
                    n.reverse(),
                    function e() {
                        for (; n.length; ) {
                            var r = n.pop();
                            if (r in t) return (e.value = r), (e.done = !1), e;
                        }
                        return (e.done = !0), e;
                    }
                );
            }),
            (t.values = N),
            (j.prototype = {
                constructor: j,
                reset: function (t) {
                    if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = e), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = e), this.tryEntries.forEach(L), !t))
                        for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
                },
                stop: function () {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval;
                },
                dispatchException: function (t) {
                    if (this.done) throw t;
                    var n = this;
                    function a(r, a) {
                        return (s.type = "throw"), (s.arg = t), (n.next = r), a && ((n.method = "next"), (n.arg = e)), !!a;
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o],
                            s = i.completion;
                        if ("root" === i.tryLoc) return a("end");
                        if (i.tryLoc <= this.prev) {
                            var l = r.call(i, "catchLoc"),
                                u = r.call(i, "finallyLoc");
                            if (l && u) {
                                if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                            } else if (l) {
                                if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                            } else {
                                if (!u) throw Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function (e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var a = this.tryEntries[n];
                        if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                            var o = a;
                            break;
                        }
                    }
                    o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                    var i = o ? o.completion : {};
                    return (i.type = e), (i.arg = t), o ? ((this.method = "next"), (this.next = o.finallyLoc), y) : this.complete(i);
                },
                complete: function (e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return (
                        "break" === e.type || "continue" === e.type ? (this.next = e.arg) : "return" === e.type ? ((this.rval = this.arg = e.arg), (this.method = "return"), (this.next = "end")) : "normal" === e.type && t && (this.next = t),
                        y
                    );
                },
                finish: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), L(n), y;
                    }
                },
                catch: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var a = r.arg;
                                L(n);
                            }
                            return a;
                        }
                    }
                    throw Error("illegal catch attempt");
                },
                delegateYield: function (t, n, r) {
                    return (this.delegate = { iterator: N(t), resultName: n, nextLoc: r }), "next" === this.method && (this.arg = e), y;
                },
            }),
            t
        );
    }
    function ms(e, t, n, r, a, o, i) {
        try {
            var s = e[o](i),
                l = s.value;
        } catch (e) {
            return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(r, a);
    }
    function ys(e) {
        return function () {
            var t = this,
                n = arguments;
            return new Promise(function (r, a) {
                var o = e.apply(t, n);
                function i(e) {
                    ms(o, r, a, i, s, "next", e);
                }
                function s(e) {
                    ms(o, r, a, i, s, "throw", e);
                }
                i(void 0);
            });
        };
    }
    function gs(e, t) {
        return (
            (function (e) {
                if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
                var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                if (null != n) {
                    var r,
                        a,
                        o,
                        i,
                        s = [],
                        l = !0,
                        u = !1;
                    try {
                        if (((o = (n = n.call(e)).next), 0 === t)) {
                            if (Object(n) !== n) return;
                            l = !1;
                        } else for (; !(l = (r = o.call(n)).done) && (s.push(r.value), s.length !== t); l = !0);
                    } catch (e) {
                        (u = !0), (a = e);
                    } finally {
                        try {
                            if (!l && null != n.return && ((i = n.return()), Object(i) !== i)) return;
                        } finally {
                            if (u) throw a;
                        }
                    }
                    return s;
                }
            })(e, t) ||
            (function (e, t) {
                if (e) {
                    if ("string" == typeof e) return vs(e, t);
                    var n = {}.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? vs(e, t) : void 0;
                }
            })(e, t) ||
            (function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            })()
        );
    }
    function vs(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
    }
    
    const bs = function (e) {
        var t = e.placeholderText,
            n = void 0 === t ? "Discover. Design. Deliver." : t,
            a = e.showAnimations,
            o = void 0 === a || a,
            i = e.onMessageSubmit,
            s = e.onTypingStart,
            l = e.onTypingEnd,
            u = Zi(),
            c = (0, r.useRef)(!1),
            d = (0, r.useRef)(null),
            f = gs((0, r.useState)(""), 2),
            h = f[0],
            p = f[1],
            m = gs((0, r.useState)(""), 2),
            y = m[0],
            g = m[1],
            v = gs((0, r.useState)(!1), 2),
            b = v[0],
            w = v[1];
        (0, r.useEffect)(
            function () {
                if (o) {
                    var e = !0;
                    c.current = !0;
                    var t = (function () {
                        var t = ys(
                            ps().mark(function t() {
                                var n;
                                return ps().wrap(function (t) {
                                    for (;;)
                                        switch ((t.prev = t.next)) {
                                            case 0:
                                                if (e) {
                                                    t.next = 2;
                                                    break;
                                                }
                                                return t.abrupt("return");
                                            case 2:
                                                (n = (function () {
                                                    var t = ys(
                                                        ps().mark(function t() {
                                                            return ps().wrap(
                                                                function (t) {
                                                                    for (;;)
                                                                        switch ((t.prev = t.next)) {
                                                                            case 0:
                                                                                if (!e) {
                                                                                    t.next = 30;
                                                                                    break;
                                                                                }
                                                                                if (((t.prev = 1), e)) {
                                                                                    t.next = 4;
                                                                                    break;
                                                                                }
                                                                                return t.abrupt("break", 30);
                                                                            case 4:
                                                                                return (t.next = 6), u.start({ x: 150, y: 150, transition: { duration: 0.5, ease: "easeInOut" } });
                                                                            case 6:
                                                                                return (
                                                                                    (t.next = 8),
                                                                                    new Promise(function (e) {
                                                                                        return setTimeout(e, 800);
                                                                                    })
                                                                                );
                                                                            case 8:
                                                                                if (e) {
                                                                                    t.next = 10;
                                                                                    break;
                                                                                }
                                                                                return t.abrupt("break", 30);
                                                                            case 10:
                                                                                if (b) {
                                                                                    t.next = 16;
                                                                                    break;
                                                                                }
                                                                                if (!c.current) {
                                                                                    t.next = 16;
                                                                                    break;
                                                                                }
                                                                                return (t.next = 14), u.start({ x: 120, y: 295, transition: { duration: 1, ease: "easeInOut" } });
                                                                            case 14:
                                                                                return (
                                                                                    (t.next = 16),
                                                                                    new Promise(function (e) {
                                                                                        return setTimeout(e, 3e3);
                                                                                    })
                                                                                );
                                                                            case 16:
                                                                                if (e) {
                                                                                    t.next = 18;
                                                                                    break;
                                                                                }
                                                                                return t.abrupt("break", 30);
                                                                            case 18:
                                                                                return (t.next = 20), u.start({ x: 150, y: 150, transition: { duration: 1, ease: "easeInOut" } });
                                                                            case 20:
                                                                                return (
                                                                                    (t.next = 22),
                                                                                    new Promise(function (e) {
                                                                                        return setTimeout(e, 1e3);
                                                                                    })
                                                                                );
                                                                            case 22:
                                                                                t.next = 28;
                                                                                break;
                                                                            case 24:
                                                                                return (t.prev = 24), (t.t0 = t.catch(1)), console.error("Animation error:", t.t0), t.abrupt("break", 30);
                                                                            case 28:
                                                                                t.next = 0;
                                                                                break;
                                                                            case 30:
                                                                            case "end":
                                                                                return t.stop();
                                                                        }
                                                                },
                                                                t,
                                                                null,
                                                                [[1, 24]]
                                                            );
                                                        })
                                                    );
                                                    return function () {
                                                        return t.apply(this, arguments);
                                                    };
                                                })()),
                                                    (d.current = setTimeout(function () {
                                                        e && c.current && n();
                                                    }, 1e3));
                                            case 4:
                                            case "end":
                                                return t.stop();
                                        }
                                }, t);
                            })
                        );
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })();
                    return (
                        setTimeout(function () {
                            e && t();
                        }, 100),
                        function () {
                            (e = !1), (c.current = !1), d.current && clearTimeout(d.current), u.stop();
                        }
                    );
                }
            },
            [o, b, u]
        );
        var x = function () {
            y.trim() && (null == i || i(y), g(""), w(!1), null == l || l());
        };
        return (
            (0, r.useEffect)(
                function () {
                    if (o && !b) {
                        var e = 0,
                            t = setInterval(function () {
                                e <= n.length
                                    ? (p(n.slice(0, e)), e++)
                                    : setTimeout(function () {
                                          (e = 0), p("");
                                      }, 1500);
                            }, 80);
                        return function () {
                            return clearInterval(t);
                        };
                    }
                },
                [o, b, n]
            ),
            (0, ua.jsxs)("div", {
                className: "relative h-full",
                children: [
                    (0, ua.jsxs)("div", {
                        className: "h-[calc(100%-28px)] flex flex-col bg-pink-200 rounded-lg overflow-hidden",
                        children: [
                            (0, ua.jsxs)("div", {
                                className: "flex-1 p-3 space-y-2 overflow-hidden border-b border-gray-200",
                                children: [
                                    (0, ua.jsx)("div", {
                                        className: "bg-blue-200 border border-gray-300 p-2 rounded-lg max-w-[80%] ml-auto mb-3",
                                        children: (0, ua.jsxs)("div", {
                                            className: "space-y-1.5",
                                            children: [
                                                (0, ua.jsx)("div", { className: "h-2 bg-blue-20 rounded w-[70%]" }),
                                                (0, ua.jsx)("div", { className: "h-2 bg-blue-20 rounded w-[90%]" }),
                                                (0, ua.jsx)("div", { className: "h-2 bg-blue-20 rounded w-[60%]" }),
                                            ],
                                        }),
                                    }),
                                    (0, ua.jsx)("div", {
                                        className: "bg-blue-200 border border-gray-300 p-2 rounded-lg max-w-[80%]",
                                        children: (0, ua.jsxs)("div", {
                                            className: "space-y-1.5",
                                            children: [
                                                (0, ua.jsx)("div", { className: "h-2 bg-blue-200 rounded w-[85%]" }),
                                                (0, ua.jsx)("div", { className: "h-2 bg-blue-200 rounded w-[75%]" }),
                                                (0, ua.jsx)("div", { className: "h-2 bg-blue-200 rounded w-[40%]" }),
                                            ],
                                        }),
                                    }),
                                    (0, ua.jsx)("div", {
                                        className: "bg-blue-200 border border-gray-300 p-2 rounded-lg max-w-[80%] ml-auto",
                                        children: (0, ua.jsxs)("div", {
                                            className: "space-y-1.5",
                                            children: [
                                                (0, ua.jsx)("div", { className: "h-2 bg-blue-200 rounded w-[65%]" }),
                                                (0, ua.jsx)("div", { className: "h-2 bg-blue-200 rounded w-[80%]" }),
                                                (0, ua.jsx)("div", { className: "h-2 bg-blue-200 rounded w-[95%]" }),
                                                (0, ua.jsx)("div", { className: "h-2 bg-blue-20 rounded w-[50%]" }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                            (0, ua.jsxs)("div", {
                                className: "bg-gray-100 flex items-center p-3 border-t border-gray-200 rounded-b-lg",
                                children: [
                                    (0, ua.jsx)("input", {
                                        type: "text",
                                        value: y,
                                        onChange: function (e) {
                                            g(e.target.value), w(!0), null == s || s();
                                        },
                                        onKeyPress: function (e) {
                                            "Enter" !== e.key || e.shiftKey || (e.preventDefault(), x());
                                        },
                                        placeholder: b ? "" : h,
                                        className: "min-h-[40px] bg-white rounded-md flex-1 border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500",
                                    }),
                                    (0, ua.jsx)("button", {
                                        onClick: x,
                                        className: "h-10 w-10 bg-white border border-gray-300 rounded-md ml-2 flex items-center justify-center transition-colors hover:border-gray-400 hover:bg-gray-50",
                                        children: (0, ua.jsx)(fs, { className: "w-4 h-4 text-gray-600" }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    o &&
                        (0, ua.jsx)("div", {
                            className: "absolute inset-0 pointer-events-none overflow-hidden",
                            style: { zIndex: 100 },
                            children: (0, ua.jsx)(Ui.div, {
                                animate: u,
                                initial: { x: 150, y: 150 },
                                className: "absolute cursor-mac",
                                style: {
                                    width: "16px",
                                    height: "16px",
                                    backgroundImage: "url('../icons/cursor-mac.svg')",
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                    zIndex: 100,
                                    filter: "drop-shadow(0 1px 1px rgb(0 0 0 / 0.1))",
                                },
                            }),
                        }),
                    (0, ua.jsx)("style", { children: "\n        .cursor-mac {\n          transform-origin: 3.5px 1px;\n          pointer-events: none;\n        }\n      " }),
                ],
            })
        );
    };
    function ws(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
    }
    const xs = function () {
        var e,
            t,
            n =
                ((e = (0, r.useState)(0)),
                (t = 2),
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(e) ||
                    (function (e, t) {
                        var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                        if (null != n) {
                            var r,
                                a,
                                o,
                                i,
                                s = [],
                                l = !0,
                                u = !1;
                            try {
                                if (((o = (n = n.call(e)).next), 0 === t)) {
                                    if (Object(n) !== n) return;
                                    l = !1;
                                } else for (; !(l = (r = o.call(n)).done) && (s.push(r.value), s.length !== t); l = !0);
                            } catch (e) {
                                (u = !0), (a = e);
                            } finally {
                                try {
                                    if (!l && null != n.return && ((i = n.return()), Object(i) !== i)) return;
                                } finally {
                                    if (u) throw a;
                                }
                            }
                            return s;
                        }
                    })(e, t) ||
                    (function (e, t) {
                        if (e) {
                            if ("string" == typeof e) return ws(e, t);
                            var n = {}.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ws(e, t) : void 0;
                        }
                    })(e, t) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()),
            a = n[0],
            o = n[1];
        return (
            (0, r.useEffect)(function () {
                var e = setInterval(function () {
                    o(function (e) {
                        return (e + 1) % 2;
                    });
                }, 6e3);
                return function () {
                    return clearInterval(e);
                };
            }, []),
            (0, ua.jsxs)("div", {
                className: "relative h-[calc(100%-30px)] w-full overflow-hidden bg-gray-50 rounded-b-lg",
                children: [
                    (0, ua.jsx)("div", {
                        className: "absolute right-0 top-0 bottom-0 w-4 bg-gray-200 z-10 rounded-tr-lg",
                        children: (0, ua.jsx)(Ui.div, {
                            variants: { initial: { top: "5%" }, scrollDown: { top: "80%", transition: { duration: 4, ease: "easeInOut", delay: 1 } }, scrollUp: { top: "5%", transition: { duration: 4, ease: "easeInOut", delay: 1 } } },
                            initial: "initial",
                            animate: 0 === a ? "scrollDown" : "scrollUp",
                            className: "absolute right-0 w-4 bg-gray-400 hover:bg-gray-500 rounded-sm transition-colors",
                            style: { height: "20%" },
                        }),
                    }),
                    (0, ua.jsx)("div", {
                        className: "relative h-full overflow-hidden pr-4",
                        children: (0, ua.jsx)(Ui.div, {
                            variants: { initial: { y: 0 }, scrollDown: { y: -700, transition: { duration: 4, ease: "easeInOut", delay: 1 } }, scrollUp: { y: 0, transition: { duration: 4, ease: "easeInOut", delay: 1 } } },
                            initial: "initial",
                            animate: 0 === a ? "scrollDown" : "scrollUp",
                            className: "absolute w-full",
                            children: (0, ua.jsxs)("div", {
                                className: "px-4 py-4",
                                children: [
                                    (0, ua.jsxs)("div", {
                                        className: "",
                                        children: [
                                            (0, ua.jsxs)("div", {
                                                className: "flex items-center mb-6",
                                                children: [
                                                    (0, ua.jsx)("div", { className: "w-4 h-4 bg-gray-600 rounded-full mr-6 flex-shrink-0" }),
                                                    (0, ua.jsx)("div", { className: "h-4 bg-gray-300 rounded w-3/5" })
                                                ]
                                            }),
                                            (0, ua.jsxs)("div", {
                                                className: "space-y-3 mb-6",
                                                children: [
                                                    (0, ua.jsxs)("div", { className: "flex items-center", children: [(0, ua.jsx)("div", { className: "w-3 h-3 bg-b-500 rounded-full mr-2 flex-shrink-0" }), (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-full" })] }),
                                                    (0, ua.jsxs)("div", { className: "flex items-center", children: [(0, ua.jsx)("div", { className: "w-3 h-3 bg-b-500 rounded-full mr-2 flex-shrink-0" }), (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[90%]" })] }),
                                                    (0, ua.jsxs)("div", { className: "flex items-center", children: [(0, ua.jsx)("div", { className: "w-3 h-3 bg-b-500 rounded-full mr-2 flex-shrink-0" }), (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[75%]" })] }),
                                                    (0, ua.jsxs)("div", { className: "flex items-center", children: [(0, ua.jsx)("div", { className: "w-3 h-3 bg-b-500 rounded-full mr-2 flex-shrink-0" }), (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[60%]" })] }),
                                                    (0, ua.jsxs)("div", { className: "flex items-center", children: [(0, ua.jsx)("div", { className: "w-3 h-3 bg-b-500 rounded-full mr-2 flex-shrink-0" }), (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[50%]" })] })
                                                ],
                                            }),
                                            (0, ua.jsxs)("div", {
                                                className: "space-y-3 mb-6",
                                                children: [
                                                    (0, ua.jsxs)("div", { className: "flex items-center", children: [(0, ua.jsx)("div", { className: "w-3 h-3 bg-r-500 rounded-full mr-2 flex-shrink-0" }), (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[50%]" })] }),
                                                    (0, ua.jsxs)("div", { className: "flex items-center", children: [(0, ua.jsx)("div", { className: "w-3 h-3 bg-r-500 rounded-full mr-2 flex-shrink-0" }), (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[60%]" })] }),
                                                    (0, ua.jsxs)("div", { className: "flex items-center", children: [(0, ua.jsx)("div", { className: "w-3 h-3 bg-r-500 rounded-full mr-2 flex-shrink-0" }), (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[70%]" })] }),
                                                    (0, ua.jsxs)("div", { className: "flex items-center", children: [(0, ua.jsx)("div", { className: "w-3 h-3 bg-r-500 rounded-full mr-2 flex-shrink-0" }), (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[80%]" })] }),
                                                    (0, ua.jsxs)("div", { className: "flex items-center", children: [(0, ua.jsx)("div", { className: "w-3 h-3 bg-r-500 rounded-full mr-2 flex-shrink-0" }), (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[90%]" })] })
                                                ],
                                            }),
                                            (0, ua.jsxs)("div", {
                                                className: "space-y-3 mb-6",
                                                children: [
                                                    (0, ua.jsxs)("div", { className: "flex items-center", children: [(0, ua.jsx)("div", { className: "w-3 h-3 bg-o-500 rounded-full mr-2 flex-shrink-0" }), (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[98%]" })] }),
                                                    (0, ua.jsxs)("div", { className: "flex items-center", children: [(0, ua.jsx)("div", { className: "w-3 h-3 bg-o-500 rounded-full mr-2 flex-shrink-0" }), (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[85%]" })] }),
                                                    (0, ua.jsxs)("div", { className: "flex items-center", children: [(0, ua.jsx)("div", { className: "w-3 h-3 bg-o-500 rounded-full mr-2 flex-shrink-0" }), (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[75%]" })] }),
                                                    (0, ua.jsxs)("div", { className: "flex items-center", children: [(0, ua.jsx)("div", { className: "w-3 h-3 bg-o-500 rounded-full mr-2 flex-shrink-0" }), (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[60%]" })] }),
                                                    (0, ua.jsxs)("div", { className: "flex items-center", children: [(0, ua.jsx)("div", { className: "w-3 h-3 bg-o-500 rounded-full mr-2 flex-shrink-0" }), (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[75%]" })] })
                                                ],
                                            }),
                                            (0, ua.jsxs)("div", {
                                                className: "space-y-3 mb-6",
                                                children: [
                                                    (0, ua.jsxs)("div", { className: "flex items-center", children: [(0, ua.jsx)("div", { className: "w-3 h-3 bg-g-500 rounded-full mr-2 flex-shrink-0" }), (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[50%]" })] }),
                                                    (0, ua.jsxs)("div", { className: "flex items-center", children: [(0, ua.jsx)("div", { className: "w-3 h-3 bg-g-500 rounded-full mr-2 flex-shrink-0" }), (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[65%]" })] }),
                                                    (0, ua.jsxs)("div", { className: "flex items-center", children: [(0, ua.jsx)("div", { className: "w-3 h-3 bg-g-500 rounded-full mr-2 flex-shrink-0" }), (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[80%]" })] }),
                                                    (0, ua.jsxs)("div", { className: "flex items-center", children: [(0, ua.jsx)("div", { className: "w-3 h-3 bg-g-500 rounded-full mr-2 flex-shrink-0" }), (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[90%]" })] }),
                                                    (0, ua.jsxs)("div", { className: "flex items-center", children: [(0, ua.jsx)("div", { className: "w-3 h-3 bg-g-500 rounded-full mr-2 flex-shrink-0" }), (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[75%]" })] })
                                                ],
                                            }),
                                            (0, ua.jsxs)("div", {
                                                className: "space-y-3 mb-6",
                                                children: [
                                                    (0, ua.jsxs)("div", { className: "flex items-center", children: [(0, ua.jsx)("div", { className: "w-3 h-3 bg-y-500 rounded-full mr-2 flex-shrink-0" }), (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[94%]" })] }),
                                                    (0, ua.jsxs)("div", { className: "flex items-center", children: [(0, ua.jsx)("div", { className: "w-3 h-3 bg-y-500 rounded-full mr-2 flex-shrink-0" }), (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[80%]" })] }),
                                                    (0, ua.jsxs)("div", { className: "flex items-center", children: [(0, ua.jsx)("div", { className: "w-3 h-3 bg-y-500 rounded-full mr-2 flex-shrink-0" }), (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[65%]" })] }),
                                                    (0, ua.jsxs)("div", { className: "flex items-center", children: [(0, ua.jsx)("div", { className: "w-3 h-3 bg-y-500 rounded-full mr-2 flex-shrink-0" }), (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[50%]" })] }),
                                                    (0, ua.jsxs)("div", { className: "flex items-center", children: [(0, ua.jsx)("div", { className: "w-3 h-3 bg-y-500 rounded-full mr-2 flex-shrink-0" }), (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[50%]" })] })
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, ua.jsx)("div", { className: "h-12 w-full bg-gray-300 rounded-md flex items-center justify-center mb-6", children: (0, ua.jsx)("div", { className: "h-3 bg-gray-400 rounded w-1/3" }) }),
                                ],
                            }),
                        }),
                    }),
                ],
            })
        );
    },
    /*const xs = function () {
            var e,
                t,
                n =
                    ((e = (0, r.useState)(0)),
                    (t = 2),
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                        (function (e, t) {
                            var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                            if (null != n) {
                                var r,
                                    a,
                                    o,
                                    i,
                                    s = [],
                                    l = !0,
                                    u = !1;
                                try {
                                    if (((o = (n = n.call(e)).next), 0 === t)) {
                                        if (Object(n) !== n) return;
                                        l = !1;
                                    } else for (; !(l = (r = o.call(n)).done) && (s.push(r.value), s.length !== t); l = !0);
                                } catch (e) {
                                    (u = !0), (a = e);
                                } finally {
                                    try {
                                        if (!l && null != n.return && ((i = n.return()), Object(i) !== i)) return;
                                    } finally {
                                        if (u) throw a;
                                    }
                                }
                                return s;
                            }
                        })(e, t) ||
                        (function (e, t) {
                            if (e) {
                                if ("string" == typeof e) return ws(e, t);
                                var n = {}.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ws(e, t) : void 0;
                            }
                        })(e, t) ||
                        (function () {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                        })()),
                a = n[0],
                o = n[1];
            return (
                (0, r.useEffect)(function () {
                    var e = setInterval(function () {
                        o(function (e) {
                            return (e + 1) % 2;
                        });
                    }, 6e3);
                    return function () {
                        return clearInterval(e);
                    };
                }, []),
                (0, ua.jsxs)("div", {
                    className: "relative h-[calc(100%-30px)] w-full overflow-hidden bg-gray-50 rounded-b-lg",
                    children: [
                        (0, ua.jsx)("div", {
                            className: "absolute right-0 top-0 bottom-0 w-4 bg-gray-200 z-10 rounded-tr-lg",
                            children: (0, ua.jsx)(Ui.div, {
                                variants: { initial: { top: "5%" }, scrollDown: { top: "80%", transition: { duration: 4, ease: "easeInOut", delay: 1 } }, scrollUp: { top: "5%", transition: { duration: 4, ease: "easeInOut", delay: 1 } } },
                                initial: "initial",
                                animate: 0 === a ? "scrollDown" : "scrollUp",
                                className: "absolute right-0 w-4 bg-gray-400 hover:bg-gray-500 rounded-sm transition-colors",
                                style: { height: "20%" },
                            }),
                        }),
                        (0, ua.jsx)("div", {
                            className: "relative h-full overflow-hidden pr-4",
                            children: (0, ua.jsx)(Ui.div, {
                                variants: { initial: { y: 0 }, scrollDown: { y: -700, transition: { duration: 4, ease: "easeInOut", delay: 1 } }, scrollUp: { y: 0, transition: { duration: 4, ease: "easeInOut", delay: 1 } } },
                                initial: "initial",
                                animate: 0 === a ? "scrollDown" : "scrollUp",
                                className: "absolute w-full",
                                children: (0, ua.jsxs)("div", {
                                    className: "px-4 py-4",
                                    children: [
                                        (0, ua.jsxs)("div", {
                                            className: "",
                                            children: [
                                                (0, ua.jsx)("div", { className: "h-4 bg-gray-300 rounded w-3/5 mb-6" }),
                                                (0, ua.jsxs)("div", {
                                                    className: "space-y-3 mb-6",
                                                    children: [
                                                        (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-full" }),
                                                        (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[95%]" }),
                                                        (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[98%]" }),
                                                        (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-full" }),
                                                        (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[90%]" }),
                                                    ],
                                                }),
                                                (0, ua.jsxs)("div", {
                                                    className: "space-y-3 mb-6",
                                                    children: [
                                                        (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[97%]" }),
                                                        (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-full" }),
                                                        (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[94%]" }),
                                                        (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[92%]" }),
                                                        (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[98%]" }),
                                                    ],
                                                }),
                                                (0, ua.jsxs)("div", {
                                                    className: "space-y-3 mb-6",
                                                    children: [
                                                        (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-full" }),
                                                        (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[91%]" }),
                                                        (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[96%]" }),
                                                        (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[88%]" }),
                                                        (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-full" }),
                                                    ],
                                                }),
                                                (0, ua.jsxs)("div", {
                                                    className: "space-y-3 mb-6",
                                                    children: [
                                                        (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[95%]" }),
                                                        (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[93%]" }),
                                                        (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-full" }),
                                                        (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[97%]" }),
                                                        (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[89%]" }),
                                                    ],
                                                }),
                                                (0, ua.jsxs)("div", {
                                                    className: "space-y-3 mb-6",
                                                    children: [
                                                        (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[94%]" }),
                                                        (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[90%]" }),
                                                        (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-full" }),
                                                        (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[92%]" }),
                                                        (0, ua.jsx)("div", { className: "h-3 bg-gray-300 rounded w-[96%]" }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        (0, ua.jsx)("div", { className: "h-12 w-full bg-gray-300 rounded-md flex items-center justify-center mb-6", children: (0, ua.jsx)("div", { className: "h-3 bg-gray-400 rounded w-1/3" }) }),
                                    ],
                                }),
                            }),
                        }),
                    ],
                })
            );
        },*/
        ks = ds("globe", [
            ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
            ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
            ["path", { d: "M2 12h20", key: "9i4pu4" }],
        ]),
        Ss = ds("triangle-dashed", [
            ["path", { d: "M10.17 4.193a2 2 0 0 1 3.666.013", key: "pltmmw" }],
            ["path", { d: "M14 21h2", key: "v4qezv" }],
            ["path", { d: "m15.874 7.743 1 1.732", key: "10m0iw" }],
            ["path", { d: "m18.849 12.952 1 1.732", key: "zadnam" }],
            ["path", { d: "M21.824 18.18a2 2 0 0 1-1.835 2.824", key: "fvwuk4" }],
            ["path", { d: "M4.024 21a2 2 0 0 1-1.839-2.839", key: "1e1kah" }],
            ["path", { d: "m5.136 12.952-1 1.732", key: "1u4ldi" }],
            ["path", { d: "M8 21h2", key: "i9zjee" }],
            ["path", { d: "m8.102 7.743-1 1.732", key: "1zzo4u" }],
        ]),
        Es = ds("asterisk", [
            ["path", { d: "M12 6v12", key: "1vza4d" }],
            ["path", { d: "M17.196 9 6.804 15", key: "1ah31z" }],
            ["path", { d: "m6.804 9 10.392 6", key: "1b6pxd" }],
        ]);
    function Ps(e) {
        return (
            (Ps =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      }),
            Ps(e)
        );
    }
    function Ts() {
        Ts = function () {
            return t;
        };
        var e,
            t = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            a =
                Object.defineProperty ||
                function (e, t, n) {
                    e[t] = n.value;
                },
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            s = o.asyncIterator || "@@asyncIterator",
            l = o.toStringTag || "@@toStringTag";
        function u(e, t, n) {
            return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t];
        }
        try {
            u({}, "");
        } catch (e) {
            u = function (e, t, n) {
                return (e[t] = n);
            };
        }
        function c(e, t, n, r) {
            var o = t && t.prototype instanceof g ? t : g,
                i = Object.create(o.prototype),
                s = new j(r || []);
            return a(i, "_invoke", { value: T(e, n, s) }), i;
        }
        function d(e, t, n) {
            try {
                return { type: "normal", arg: e.call(t, n) };
            } catch (e) {
                return { type: "throw", arg: e };
            }
        }
        t.wrap = c;
        var f = "suspendedStart",
            h = "suspendedYield",
            p = "executing",
            m = "completed",
            y = {};
        function g() {}
        function v() {}
        function b() {}
        var w = {};
        u(w, i, function () {
            return this;
        });
        var x = Object.getPrototypeOf,
            k = x && x(x(N([])));
        k && k !== n && r.call(k, i) && (w = k);
        var S = (b.prototype = g.prototype = Object.create(w));
        function E(e) {
            ["next", "throw", "return"].forEach(function (t) {
                u(e, t, function (e) {
                    return this._invoke(t, e);
                });
            });
        }
        function P(e, t) {
            function n(a, o, i, s) {
                var l = d(e[a], e, o);
                if ("throw" !== l.type) {
                    var u = l.arg,
                        c = u.value;
                    return c && "object" == Ps(c) && r.call(c, "__await")
                        ? t.resolve(c.__await).then(
                              function (e) {
                                  n("next", e, i, s);
                              },
                              function (e) {
                                  n("throw", e, i, s);
                              }
                          )
                        : t.resolve(c).then(
                              function (e) {
                                  (u.value = e), i(u);
                              },
                              function (e) {
                                  return n("throw", e, i, s);
                              }
                          );
                }
                s(l.arg);
            }
            var o;
            a(this, "_invoke", {
                value: function (e, r) {
                    function a() {
                        return new t(function (t, a) {
                            n(e, r, t, a);
                        });
                    }
                    return (o = o ? o.then(a, a) : a());
                },
            });
        }
        function T(t, n, r) {
            var a = f;
            return function (o, i) {
                if (a === p) throw Error("Generator is already running");
                if (a === m) {
                    if ("throw" === o) throw i;
                    return { value: e, done: !0 };
                }
                for (r.method = o, r.arg = i; ; ) {
                    var s = r.delegate;
                    if (s) {
                        var l = C(s, r);
                        if (l) {
                            if (l === y) continue;
                            return l;
                        }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                        if (a === f) throw ((a = m), r.arg);
                        r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    a = p;
                    var u = d(t, n, r);
                    if ("normal" === u.type) {
                        if (((a = r.done ? m : h), u.arg === y)) continue;
                        return { value: u.arg, done: r.done };
                    }
                    "throw" === u.type && ((a = m), (r.method = "throw"), (r.arg = u.arg));
                }
            };
        }
        function C(t, n) {
            var r = n.method,
                a = t.iterator[r];
            if (a === e)
                return (
                    (n.delegate = null),
                    ("throw" === r && t.iterator.return && ((n.method = "return"), (n.arg = e), C(t, n), "throw" === n.method)) ||
                        ("return" !== r && ((n.method = "throw"), (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
                    y
                );
            var o = d(a, t.iterator, n.arg);
            if ("throw" === o.type) return (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), y;
            var i = o.arg;
            return i
                ? i.done
                    ? ((n[t.resultName] = i.value), (n.next = t.nextLoc), "return" !== n.method && ((n.method = "next"), (n.arg = e)), (n.delegate = null), y)
                    : i
                : ((n.method = "throw"), (n.arg = new TypeError("iterator result is not an object")), (n.delegate = null), y);
        }
        function A(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
        }
        function L(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function j(e) {
            (this.tryEntries = [{ tryLoc: "root" }]), e.forEach(A, this), this.reset(!0);
        }
        function N(t) {
            if (t || "" === t) {
                var n = t[i];
                if (n) return n.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var a = -1,
                        o = function n() {
                            for (; ++a < t.length; ) if (r.call(t, a)) return (n.value = t[a]), (n.done = !1), n;
                            return (n.value = e), (n.done = !0), n;
                        };
                    return (o.next = o);
                }
            }
            throw new TypeError(Ps(t) + " is not iterable");
        }
        return (
            (v.prototype = b),
            a(S, "constructor", { value: b, configurable: !0 }),
            a(b, "constructor", { value: v, configurable: !0 }),
            (v.displayName = u(b, l, "GeneratorFunction")),
            (t.isGeneratorFunction = function (e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name));
            }),
            (t.mark = function (e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, b) : ((e.__proto__ = b), u(e, l, "GeneratorFunction")), (e.prototype = Object.create(S)), e;
            }),
            (t.awrap = function (e) {
                return { __await: e };
            }),
            E(P.prototype),
            u(P.prototype, s, function () {
                return this;
            }),
            (t.AsyncIterator = P),
            (t.async = function (e, n, r, a, o) {
                void 0 === o && (o = Promise);
                var i = new P(c(e, n, r, a), o);
                return t.isGeneratorFunction(n)
                    ? i
                    : i.next().then(function (e) {
                          return e.done ? e.value : i.next();
                      });
            }),
            E(S),
            u(S, l, "Generator"),
            u(S, i, function () {
                return this;
            }),
            u(S, "toString", function () {
                return "[object Generator]";
            }),
            (t.keys = function (e) {
                var t = Object(e),
                    n = [];
                for (var r in t) n.push(r);
                return (
                    n.reverse(),
                    function e() {
                        for (; n.length; ) {
                            var r = n.pop();
                            if (r in t) return (e.value = r), (e.done = !1), e;
                        }
                        return (e.done = !0), e;
                    }
                );
            }),
            (t.values = N),
            (j.prototype = {
                constructor: j,
                reset: function (t) {
                    if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = e), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = e), this.tryEntries.forEach(L), !t))
                        for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
                },
                stop: function () {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval;
                },
                dispatchException: function (t) {
                    if (this.done) throw t;
                    var n = this;
                    function a(r, a) {
                        return (s.type = "throw"), (s.arg = t), (n.next = r), a && ((n.method = "next"), (n.arg = e)), !!a;
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o],
                            s = i.completion;
                        if ("root" === i.tryLoc) return a("end");
                        if (i.tryLoc <= this.prev) {
                            var l = r.call(i, "catchLoc"),
                                u = r.call(i, "finallyLoc");
                            if (l && u) {
                                if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                            } else if (l) {
                                if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                            } else {
                                if (!u) throw Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function (e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var a = this.tryEntries[n];
                        if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                            var o = a;
                            break;
                        }
                    }
                    o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                    var i = o ? o.completion : {};
                    return (i.type = e), (i.arg = t), o ? ((this.method = "next"), (this.next = o.finallyLoc), y) : this.complete(i);
                },
                complete: function (e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return (
                        "break" === e.type || "continue" === e.type ? (this.next = e.arg) : "return" === e.type ? ((this.rval = this.arg = e.arg), (this.method = "return"), (this.next = "end")) : "normal" === e.type && t && (this.next = t),
                        y
                    );
                },
                finish: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), L(n), y;
                    }
                },
                catch: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var a = r.arg;
                                L(n);
                            }
                            return a;
                        }
                    }
                    throw Error("illegal catch attempt");
                },
                delegateYield: function (t, n, r) {
                    return (this.delegate = { iterator: N(t), resultName: n, nextLoc: r }), "next" === this.method && (this.arg = e), y;
                },
            }),
            t
        );
    }
    function Cs(e, t, n, r, a, o, i) {
        try {
            var s = e[o](i),
                l = s.value;
        } catch (e) {
            return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(r, a);
    }
    function As(e) {
        return function () {
            var t = this,
                n = arguments;
            return new Promise(function (r, a) {
                var o = e.apply(t, n);
                function i(e) {
                    Cs(o, r, a, i, s, "next", e);
                }
                function s(e) {
                    Cs(o, r, a, i, s, "throw", e);
                }
                i(void 0);
            });
        };
    }
    function Ls(e, t) {
        return (
            (function (e) {
                if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
                var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                if (null != n) {
                    var r,
                        a,
                        o,
                        i,
                        s = [],
                        l = !0,
                        u = !1;
                    try {
                        if (((o = (n = n.call(e)).next), 0 === t)) {
                            if (Object(n) !== n) return;
                            l = !1;
                        } else for (; !(l = (r = o.call(n)).done) && (s.push(r.value), s.length !== t); l = !0);
                    } catch (e) {
                        (u = !0), (a = e);
                    } finally {
                        try {
                            if (!l && null != n.return && ((i = n.return()), Object(i) !== i)) return;
                        } finally {
                            if (u) throw a;
                        }
                    }
                    return s;
                }
            })(e, t) ||
            js(e, t) ||
            (function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            })()
        );
    }
    function js(e, t) {
        if (e) {
            if ("string" == typeof e) return Ns(e, t);
            var n = {}.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ns(e, t) : void 0;
        }
    }
    function Ns(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
    }
    const Os = function () {
        var e,
            t = Ls((0, r.useState)(null), 2),
            n = t[0],
            a = t[1],
            o = Zi(),
            i = (0, r.useRef)(!1),
            s = (0, r.useRef)(null),
            l = Ls((0, r.useState)([]), 2),
            u = l[0],
            c = l[1];
        return (
            (0, r.useEffect)(
                function () {
                    i.current = !0;
                    var e = (function () {
                            var e = As(
                                Ts().mark(function e(t) {
                                    return Ts().wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    if (!i.current) {
                                                        e.next = 2;
                                                        break;
                                                    }
                                                    return e.abrupt("return", o.start(t));
                                                case 2:
                                                    return e.abrupt("return", Promise.resolve());
                                                case 3:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            );
                            return function (t) {
                                return e.apply(this, arguments);
                            };
                        })(),
                        t = (function () {
                            var t = As(
                                Ts().mark(function t() {
                                    var n;
                                    return Ts().wrap(function (t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    if (i.current) {
                                                        t.next = 2;
                                                        break;
                                                    }
                                                    return t.abrupt("return");
                                                case 2:
                                                    (n = (function () {
                                                        var t = As(
                                                            Ts().mark(function t() {
                                                                var n, r, o, s, l;
                                                                return Ts().wrap(
                                                                    function (t) {
                                                                        for (;;)
                                                                            switch ((t.prev = t.next)) {
                                                                                case 0:
                                                                                    if (!i.current) {
                                                                                        t.next = 52;
                                                                                        break;
                                                                                    }
                                                                                    return (t.prev = 1), (t.next = 4), e({ x: 40, y: 40, transition: { duration: 0.3, ease: "easeInOut" } });
                                                                                case 4:
                                                                                    if (i.current) {
                                                                                        t.next = 6;
                                                                                        break;
                                                                                    }
                                                                                    return t.abrupt("return");
                                                                                case 6:
                                                                                    a({ x: 40, y: 40, width: 0, height: 0 }), (n = 1);
                                                                                case 8:
                                                                                    if (!(n <= 6)) {
                                                                                        t.next = 20;
                                                                                        break;
                                                                                    }
                                                                                    if (i.current) {
                                                                                        t.next = 11;
                                                                                        break;
                                                                                    }
                                                                                    return t.abrupt("return");
                                                                                case 11:
                                                                                    return (o = 140 * (r = n / 6)), (s = 110 * r), (t.next = 16), e({ x: 40 + o, y: 40 + s, transition: { duration: 0.08, ease: "linear" } });
                                                                                case 16:
                                                                                    a({ x: 40, y: 40, width: o, height: s });
                                                                                case 17:
                                                                                    n++, (t.next = 8);
                                                                                    break;
                                                                                case 20:
                                                                                    if (i.current) {
                                                                                        t.next = 22;
                                                                                        break;
                                                                                    }
                                                                                    return t.abrupt("return");
                                                                                case 22:
                                                                                    return (
                                                                                        c(["circle", "triangle", "star", "computer", "cloud"]),
                                                                                        (t.next = 25),
                                                                                        new Promise(function (e) {
                                                                                            return setTimeout(e, 800);
                                                                                        })
                                                                                    );
                                                                                case 25:
                                                                                    return a(null), (t.next = 28), e({ x: 70, y: 60, transition: { duration: 0.3, ease: "easeOut" } });
                                                                                case 28:
                                                                                    return (
                                                                                        (t.next = 30),
                                                                                        new Promise(function (e) {
                                                                                            return setTimeout(e, 300);
                                                                                        })
                                                                                    );
                                                                                case 30:
                                                                                    l = 1;
                                                                                case 31:
                                                                                    if (!(l <= 7)) {
                                                                                        t.next = 39;
                                                                                        break;
                                                                                    }
                                                                                    if (i.current) {
                                                                                        t.next = 34;
                                                                                        break;
                                                                                    }
                                                                                    return t.abrupt("return");
                                                                                case 34:
                                                                                    return (t.next = 36), e({ x: 70 + 12 * l, y: 60 - 4 * l, transition: { duration: 0.15, ease: "linear" } });
                                                                                case 36:
                                                                                    l++, (t.next = 31);
                                                                                    break;
                                                                                case 39:
                                                                                    return (
                                                                                        c([]),
                                                                                        (t.next = 42),
                                                                                        new Promise(function (e) {
                                                                                            return setTimeout(e, 500);
                                                                                        })
                                                                                    );
                                                                                case 42:
                                                                                    return (
                                                                                        (t.next = 44),
                                                                                        new Promise(function (e) {
                                                                                            return setTimeout(e, 1200);
                                                                                        })
                                                                                    );
                                                                                case 44:
                                                                                    t.next = 50;
                                                                                    break;
                                                                                case 46:
                                                                                    return (t.prev = 46), (t.t0 = t.catch(1)), console.error("Animation error:", t.t0), t.abrupt("break", 52);
                                                                                case 50:
                                                                                    t.next = 0;
                                                                                    break;
                                                                                case 52:
                                                                                case "end":
                                                                                    return t.stop();
                                                                            }
                                                                    },
                                                                    t,
                                                                    null,
                                                                    [[1, 46]]
                                                                );
                                                            })
                                                        );
                                                        return function () {
                                                            return t.apply(this, arguments);
                                                        };
                                                    })()),
                                                        n();
                                                case 4:
                                                case "end":
                                                    return t.stop();
                                            }
                                    }, t);
                                })
                            );
                            return function () {
                                return t.apply(this, arguments);
                            };
                        })();
                    return (
                        (s.current = setTimeout(t, 300)),
                        function () {
                            (i.current = !1), s.current && clearTimeout(s.current), o.stop();
                        }
                    );
                },
                [o]
            ),
            (0, ua.jsxs)("div", {
                className: "relative h-[calc(100%-30px)] overflow-hidden rounded-b-lg bg-gray-50",
                children: [
                    (0, ua.jsx)("div", {
                        className: "p-2 h-full bg-gray-100",
                        children: (0, ua.jsxs)("div", {
                            className: "relative h-full bg-white rounded border border-gray-300",
                            children: [
                                (0, ua.jsx)("div", {
                                    className: "absolute inset-0 grid grid-cols-8 grid-rows-6",
                                    children: ((e = Array(48)),
                                    (function (e) {
                                        if (Array.isArray(e)) return Ns(e);
                                    })(e) ||
                                        (function (e) {
                                            if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
                                        })(e) ||
                                        js(e) ||
                                        (function () {
                                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                        })()).map(function (e, t) {
                                        return (0, ua.jsx)("div", { className: "border-[0.5px] border-blue-1000" }, t);
                                    }),
                                }),
                                /*(0, ua.jsx)("div", {
                                    className: "absolute left-[50px] top-[90px] w-10 h-10 flex items-center justify-center ".concat(u.includes("circle") ? "text-gray-700" : "text-gray-500"),
                                    children: (0, ua.jsx)(ks, { className: "w-8 h-8", strokeWidth: 1.5 }),
                                }),*/
                                (0, ua.jsx)("div", {
                                    className: "absolute left-[100px] top-[90px] w-10 h-10 flex items-center justify-center ".concat(u.includes("triangle") ? "text-gray-700" : "text-gray-500"),
                                    children: (0, ua.jsx)(Ss, { className: "w-8 h-8", strokeWidth: 1.5 }),
                                }),
                                (0, ua.jsx)("div", {
                                    className: "absolute left-[150px] top-[60px] w-10 h-10 flex items-center justify-center ".concat(u.includes("star") ? "text-gray-700" : "text-gray-500"),
                                    children: (0, ua.jsx)(Es, { className: "w-8 h-8", strokeWidth: 1.5 }),
                                }),
                       
                                (0, ua.jsx)("div", {
                                    className: "absolute left-[50px] top-[50px] w-10 h-10 flex items-center justify-center ".concat(u.includes("computer") ? "text-gray-700" : "text-gray-500"),
                                    children: (0, ua.jsx)("div", { className: "computer-icon" })
                                }),
                                (0, ua.jsx)("div", {
                                    className: "absolute left-[100px] top-[50px] w-10 h-10 flex items-center justify-center ".concat(u.includes("cloud") ? "text-gray-700" : "text-gray-500"),
                                    children: (0, ua.jsx)("div", { className: "cloud-icon" })
                                }),
                                n &&
                                    (0, ua.jsx)("div", {
                                        className: "absolute border border-gray-400/70 bg-gray-400/10",
                                        style: { left: "".concat(n.x, "px"), top: "".concat(n.y, "px"), width: "".concat(n.width, "px"), height: "".concat(n.height, "px"), pointerEvents: "none" },
                                    }),
                            ],
                        }),
                    }),
                    (0, ua.jsx)("div", {
                        className: "absolute inset-0 pointer-events-none overflow-hidden",
                        style: { zIndex: 100 },
                        children: (0, ua.jsx)(Ui.div, {
                            animate: o,
                            className: "absolute cursor-mac",
                            style: {
                                width: "16px",
                                height: "16px",
                                backgroundImage: "url('../icons/cursor-mac.svg')",
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                                zIndex: 100,
                                filter: "drop-shadow(0 1px 1px rgb(0 0 0 / 0.1))",
                                transformOrigin: "3.5px 1px",
                                pointerEvents: "none",
                            },
                        }),
                    }),
                ],
            })
        );
    };
    function Ms(e) {
        return (
            (Ms =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      }),
            Ms(e)
        );
    }
    function zs(e, t) {
        var n = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
        if (!n) {
            if (Array.isArray(e) || (n = Is(e)) || (t && e && "number" == typeof e.length)) {
                n && (e = n);
                var r = 0,
                    a = function () {};
                return {
                    s: a,
                    n: function () {
                        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                    },
                    e: function (e) {
                        throw e;
                    },
                    f: a,
                };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var o,
            i = !0,
            s = !1;
        return {
            s: function () {
                n = n.call(e);
            },
            n: function () {
                var e = n.next();
                return (i = e.done), e;
            },
            e: function (e) {
                (s = !0), (o = e);
            },
            f: function () {
                try {
                    i || null == n.return || n.return();
                } finally {
                    if (s) throw o;
                }
            },
        };
    }
    function Rs() {
        Rs = function () {
            return t;
        };
        var e,
            t = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            a =
                Object.defineProperty ||
                function (e, t, n) {
                    e[t] = n.value;
                },
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            s = o.asyncIterator || "@@asyncIterator",
            l = o.toStringTag || "@@toStringTag";
        function u(e, t, n) {
            return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t];
        }
        try {
            u({}, "");
        } catch (e) {
            u = function (e, t, n) {
                return (e[t] = n);
            };
        }
        function c(e, t, n, r) {
            var o = t && t.prototype instanceof g ? t : g,
                i = Object.create(o.prototype),
                s = new j(r || []);
            return a(i, "_invoke", { value: T(e, n, s) }), i;
        }
        function d(e, t, n) {
            try {
                return { type: "normal", arg: e.call(t, n) };
            } catch (e) {
                return { type: "throw", arg: e };
            }
        }
        t.wrap = c;
        var f = "suspendedStart",
            h = "suspendedYield",
            p = "executing",
            m = "completed",
            y = {};
        function g() {}
        function v() {}
        function b() {}
        var w = {};
        u(w, i, function () {
            return this;
        });
        var x = Object.getPrototypeOf,
            k = x && x(x(N([])));
        k && k !== n && r.call(k, i) && (w = k);
        var S = (b.prototype = g.prototype = Object.create(w));
        function E(e) {
            ["next", "throw", "return"].forEach(function (t) {
                u(e, t, function (e) {
                    return this._invoke(t, e);
                });
            });
        }
        function P(e, t) {
            function n(a, o, i, s) {
                var l = d(e[a], e, o);
                if ("throw" !== l.type) {
                    var u = l.arg,
                        c = u.value;
                    return c && "object" == Ms(c) && r.call(c, "__await")
                        ? t.resolve(c.__await).then(
                              function (e) {
                                  n("next", e, i, s);
                              },
                              function (e) {
                                  n("throw", e, i, s);
                              }
                          )
                        : t.resolve(c).then(
                              function (e) {
                                  (u.value = e), i(u);
                              },
                              function (e) {
                                  return n("throw", e, i, s);
                              }
                          );
                }
                s(l.arg);
            }
            var o;
            a(this, "_invoke", {
                value: function (e, r) {
                    function a() {
                        return new t(function (t, a) {
                            n(e, r, t, a);
                        });
                    }
                    return (o = o ? o.then(a, a) : a());
                },
            });
        }
        function T(t, n, r) {
            var a = f;
            return function (o, i) {
                if (a === p) throw Error("Generator is already running");
                if (a === m) {
                    if ("throw" === o) throw i;
                    return { value: e, done: !0 };
                }
                for (r.method = o, r.arg = i; ; ) {
                    var s = r.delegate;
                    if (s) {
                        var l = C(s, r);
                        if (l) {
                            if (l === y) continue;
                            return l;
                        }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                        if (a === f) throw ((a = m), r.arg);
                        r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    a = p;
                    var u = d(t, n, r);
                    if ("normal" === u.type) {
                        if (((a = r.done ? m : h), u.arg === y)) continue;
                        return { value: u.arg, done: r.done };
                    }
                    "throw" === u.type && ((a = m), (r.method = "throw"), (r.arg = u.arg));
                }
            };
        }
        function C(t, n) {
            var r = n.method,
                a = t.iterator[r];
            if (a === e)
                return (
                    (n.delegate = null),
                    ("throw" === r && t.iterator.return && ((n.method = "return"), (n.arg = e), C(t, n), "throw" === n.method)) ||
                        ("return" !== r && ((n.method = "throw"), (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
                    y
                );
            var o = d(a, t.iterator, n.arg);
            if ("throw" === o.type) return (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), y;
            var i = o.arg;
            return i
                ? i.done
                    ? ((n[t.resultName] = i.value), (n.next = t.nextLoc), "return" !== n.method && ((n.method = "next"), (n.arg = e)), (n.delegate = null), y)
                    : i
                : ((n.method = "throw"), (n.arg = new TypeError("iterator result is not an object")), (n.delegate = null), y);
        }
        function A(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
        }
        function L(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function j(e) {
            (this.tryEntries = [{ tryLoc: "root" }]), e.forEach(A, this), this.reset(!0);
        }
        function N(t) {
            if (t || "" === t) {
                var n = t[i];
                if (n) return n.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var a = -1,
                        o = function n() {
                            for (; ++a < t.length; ) if (r.call(t, a)) return (n.value = t[a]), (n.done = !1), n;
                            return (n.value = e), (n.done = !0), n;
                        };
                    return (o.next = o);
                }
            }
            throw new TypeError(Ms(t) + " is not iterable");
        }
        return (
            (v.prototype = b),
            a(S, "constructor", { value: b, configurable: !0 }),
            a(b, "constructor", { value: v, configurable: !0 }),
            (v.displayName = u(b, l, "GeneratorFunction")),
            (t.isGeneratorFunction = function (e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name));
            }),
            (t.mark = function (e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, b) : ((e.__proto__ = b), u(e, l, "GeneratorFunction")), (e.prototype = Object.create(S)), e;
            }),
            (t.awrap = function (e) {
                return { __await: e };
            }),
            E(P.prototype),
            u(P.prototype, s, function () {
                return this;
            }),
            (t.AsyncIterator = P),
            (t.async = function (e, n, r, a, o) {
                void 0 === o && (o = Promise);
                var i = new P(c(e, n, r, a), o);
                return t.isGeneratorFunction(n)
                    ? i
                    : i.next().then(function (e) {
                          return e.done ? e.value : i.next();
                      });
            }),
            E(S),
            u(S, l, "Generator"),
            u(S, i, function () {
                return this;
            }),
            u(S, "toString", function () {
                return "[object Generator]";
            }),
            (t.keys = function (e) {
                var t = Object(e),
                    n = [];
                for (var r in t) n.push(r);
                return (
                    n.reverse(),
                    function e() {
                        for (; n.length; ) {
                            var r = n.pop();
                            if (r in t) return (e.value = r), (e.done = !1), e;
                        }
                        return (e.done = !0), e;
                    }
                );
            }),
            (t.values = N),
            (j.prototype = {
                constructor: j,
                reset: function (t) {
                    if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = e), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = e), this.tryEntries.forEach(L), !t))
                        for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
                },
                stop: function () {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval;
                },
                dispatchException: function (t) {
                    if (this.done) throw t;
                    var n = this;
                    function a(r, a) {
                        return (s.type = "throw"), (s.arg = t), (n.next = r), a && ((n.method = "next"), (n.arg = e)), !!a;
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o],
                            s = i.completion;
                        if ("root" === i.tryLoc) return a("end");
                        if (i.tryLoc <= this.prev) {
                            var l = r.call(i, "catchLoc"),
                                u = r.call(i, "finallyLoc");
                            if (l && u) {
                                if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                            } else if (l) {
                                if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                            } else {
                                if (!u) throw Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function (e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var a = this.tryEntries[n];
                        if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                            var o = a;
                            break;
                        }
                    }
                    o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                    var i = o ? o.completion : {};
                    return (i.type = e), (i.arg = t), o ? ((this.method = "next"), (this.next = o.finallyLoc), y) : this.complete(i);
                },
                complete: function (e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return (
                        "break" === e.type || "continue" === e.type ? (this.next = e.arg) : "return" === e.type ? ((this.rval = this.arg = e.arg), (this.method = "return"), (this.next = "end")) : "normal" === e.type && t && (this.next = t),
                        y
                    );
                },
                finish: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), L(n), y;
                    }
                },
                catch: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var a = r.arg;
                                L(n);
                            }
                            return a;
                        }
                    }
                    throw Error("illegal catch attempt");
                },
                delegateYield: function (t, n, r) {
                    return (this.delegate = { iterator: N(t), resultName: n, nextLoc: r }), "next" === this.method && (this.arg = e), y;
                },
            }),
            t
        );
    }
    function _s(e, t, n, r, a, o, i) {
        try {
            var s = e[o](i),
                l = s.value;
        } catch (e) {
            return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(r, a);
    }
    function Ds(e) {
        return function () {
            var t = this,
                n = arguments;
            return new Promise(function (r, a) {
                var o = e.apply(t, n);
                function i(e) {
                    _s(o, r, a, i, s, "next", e);
                }
                function s(e) {
                    _s(o, r, a, i, s, "throw", e);
                }
                i(void 0);
            });
        };
    }
    function Fs(e, t) {
        return (
            (function (e) {
                if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
                var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                if (null != n) {
                    var r,
                        a,
                        o,
                        i,
                        s = [],
                        l = !0,
                        u = !1;
                    try {
                        if (((o = (n = n.call(e)).next), 0 === t)) {
                            if (Object(n) !== n) return;
                            l = !1;
                        } else for (; !(l = (r = o.call(n)).done) && (s.push(r.value), s.length !== t); l = !0);
                    } catch (e) {
                        (u = !0), (a = e);
                    } finally {
                        try {
                            if (!l && null != n.return && ((i = n.return()), Object(i) !== i)) return;
                        } finally {
                            if (u) throw a;
                        }
                    }
                    return s;
                }
            })(e, t) ||
            Is(e, t) ||
            (function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            })()
        );
    }
    function Is(e, t) {
        if (e) {
            if ("string" == typeof e) return Vs(e, t);
            var n = {}.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Vs(e, t) : void 0;
        }
    }

    function Vs(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
    }

    var qs = function () {
        return (0, ua.jsxs)("div", {
            className: "relative w-full h-full bg-gray-50 rounded-lg overflow-hidden p-2 research-bg",
            children: [
                (0, ua.jsx)("svg", { className: "globe-icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: (0, ua.jsx)("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L8 12v1c0 1.1.9 2 2 2v3.93zm9.6-2.23c-.15.44-.34.85-.57 1.23l-2.28-2.28c.1-.24.15-.5.15-.78h.02c.01 0 .01 0 0 0v-2c0-1.1-.9-2-2-2h-2V7h2c.55 0 1 .45 1 1v1h2c1.1 0 2 .9 2 2v.41c.91.43 1.74 1.01 2.4 1.77z" }) }),
                (0, ua.jsxs)("div", {
                    className: "animated-link-container",
                    children: [
                        (0, ua.jsx)("div", { className: "animated-link" }),
                        (0, ua.jsx)("div", { className: "animated-link" }),
                        (0, ua.jsx)("div", { className: "animated-link" }),
                        (0, ua.jsx)("div", { className: "animated-link" })
                    ]
                }),
                (0, ua.jsxs)("div", {
                    className: "absolute w-20 h-20 research-magnifying-glass-container",
                    children: [
                        (0, ua.jsxs)("div", {
                            className: "w-full h-full rounded-full border-4 border-gray-400 bg-white/30 backdrop-blur-sm relative overflow-hidden",
                            children: [
                                (0, ua.jsx)("div", { className: "scan-line" }),
                                (0, ua.jsx)("div", { className: "sparkle" }),
                                (0, ua.jsx)("div", { className: "sparkle" }),
                                (0, ua.jsx)("div", { className: "sparkle" })
                            ]
                        }),
                        (0, ua.jsx)("div", {
                            className: "absolute w-4 h-8 bg-gray-500 research-magnifying-glass-handle"
                        })
                    ]
                })
            ]
        })
    };
    const Bs = function () {
        var e = Fs((0, r.useState)(null), 2),
            t = e[0],
            n = e[1],
            a = Fs((0, r.useState)(null), 2),
            o = a[0],
            i = a[1],
            s = Zi(),
            l = (0, r.useRef)(!1),
            u = (0, r.useRef)(null);
        return (
            (0, r.useEffect)(
                function () {
                    l.current = !0;
                    var e = (function () {
                            var e = Ds(
                                Rs().mark(function e(t) {
                                    return Rs().wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    if (!l.current) {
                                                        e.next = 2;
                                                        break;
                                                    }
                                                    return e.abrupt("return", s.start(t));
                                                case 2:
                                                    return e.abrupt("return", Promise.resolve());
                                                case 3:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            );
                            return function (t) {
                                return e.apply(this, arguments);
                            };
                        })(),
                        t = (function () {
                            var t = Ds(
                                Rs().mark(function t() {
                                    var r;
                                    return Rs().wrap(function (t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    if (l.current) {
                                                        t.next = 2;
                                                        break;
                                                    }
                                                    return t.abrupt("return");
                                                case 2:
                                                    (r = (function () {
                                                        var t = Ds(
                                                            Rs().mark(function t() {
                                                                var r, a, o, s;
                                                                return Rs().wrap(
                                                                    function (t) {
                                                                        for (;;)
                                                                            switch ((t.prev = t.next)) {
                                                                                case 0:
                                                                                    if (!l.current) {
                                                                                        t.next = 47;
                                                                                        break;
                                                                                    }
                                                                                    (t.prev = 1),
                                                                                        (r = [8, 15, 19, 24].map(function (e) {
                                                                                            return { x: (e % 7) * 40 + 20, y: 40 * (Math.floor(e / 7) + 1) + 30, dayIndex: e };
                                                                                        })),
                                                                                        (a = zs(r)),
                                                                                        (t.prev = 5),
                                                                                        a.s();
                                                                                case 7:
                                                                                    if ((o = a.n()).done) {
                                                                                        t.next = 29;
                                                                                        break;
                                                                                    }
                                                                                    if (((s = o.value), l.current)) {
                                                                                        t.next = 11;
                                                                                        break;
                                                                                    }
                                                                                    return t.abrupt("return");
                                                                                case 11:
                                                                                    return (t.next = 13), e({ x: s.x, y: s.y, transition: { duration: 0.8 } });
                                                                                case 13:
                                                                                    if (l.current) {
                                                                                        t.next = 15;
                                                                                        break;
                                                                                    }
                                                                                    return t.abrupt("return");
                                                                                case 15:
                                                                                    return (
                                                                                        n({ x: s.x, y: s.y }),
                                                                                        i(s.dayIndex),
                                                                                        (t.next = 19),
                                                                                        new Promise(function (e) {
                                                                                            return setTimeout(e, 500);
                                                                                        })
                                                                                    );
                                                                                case 19:
                                                                                    if (l.current) {
                                                                                        t.next = 21;
                                                                                        break;
                                                                                    }
                                                                                    return t.abrupt("return");
                                                                                case 21:
                                                                                    return (
                                                                                        n(null),
                                                                                        (t.next = 24),
                                                                                        new Promise(function (e) {
                                                                                            return setTimeout(e, 300);
                                                                                        })
                                                                                    );
                                                                                case 24:
                                                                                    return (
                                                                                        i(null),
                                                                                        (t.next = 27),
                                                                                        new Promise(function (e) {
                                                                                            return setTimeout(e, 500);
                                                                                        })
                                                                                    );
                                                                                case 27:
                                                                                    t.next = 7;
                                                                                    break;
                                                                                case 29:
                                                                                    t.next = 34;
                                                                                    break;
                                                                                case 31:
                                                                                    (t.prev = 31), (t.t0 = t.catch(5)), a.e(t.t0);
                                                                                case 34:
                                                                                    return (t.prev = 34), a.f(), t.finish(34);
                                                                                case 37:
                                                                                    return (
                                                                                        (t.next = 39),
                                                                                        new Promise(function (e) {
                                                                                            return setTimeout(e, 1500);
                                                                                        })
                                                                                    );
                                                                                case 39:
                                                                                    t.next = 45;
                                                                                    break;
                                                                                case 41:
                                                                                    return (t.prev = 41), (t.t1 = t.catch(1)), console.error("Animation error:", t.t1), t.abrupt("break", 47);
                                                                                case 45:
                                                                                    t.next = 0;
                                                                                    break;
                                                                                case 47:
                                                                                case "end":
                                                                                    return t.stop();
                                                                            }
                                                                    },
                                                                    t,
                                                                    null,
                                                                    [
                                                                        [1, 41],
                                                                        [5, 31, 34, 37],
                                                                    ]
                                                                );
                                                            })
                                                        );
                                                        return function () {
                                                            return t.apply(this, arguments);
                                                        };
                                                    })()),
                                                        r();
                                                case 4:
                                                case "end":
                                                    return t.stop();
                                            }
                                    }, t);
                                })
                            );
                            return function () {
                                return t.apply(this, arguments);
                            };
                        })();
                    return (
                        (u.current = setTimeout(t, 500)),
                        function () {
                            (l.current = !1), u.current && clearTimeout(u.current), s.stop();
                        }
                    );
                },
                [s]
            ),
            (0, ua.jsxs)("div", {
                className: "relative h-[calc(100%-30px)] overflow-hidden rounded-b-lg",
                children: [
                    (0, ua.jsx)("div", {
                        className: "h-full bg-gray-50 p-2",
                        children: (0, ua.jsxs)("div", {
                            className: "grid grid-cols-7 gap-1",
                            children: [
                                Array(7)
                                    .fill(0)
                                    .map(function (e, t) {
                                        return (0, ua.jsx)("div", { className: "aspect-square flex items-center justify-center text-[10px] font-medium text-gray-500", children: ["S", "M", "T", "W", "T", "F", "S"][t] }, "day-".concat(t));
                                    }),
                                Array(35)
                                    .fill(0)
                                    .map(function (e, t) {
                                        var n = [8, 12, 19, 24].includes(t),
                                            r = o === t;
                                        return (0,
                                        ua.jsxs)("div", { className: "aspect-square rounded-sm flex items-center justify-center text-[10px] relative\n                  border border-gray-200\n                  ".concat(r ? "bg-gray-200" : "bg-white", "\n                  transition-colors duration-150"), children: [(0, ua.jsx)("div", { className: "w-3 h-2 bg-gray-400 rounded" }), n && (0, ua.jsx)("div", { className: "absolute bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-gray-500" })] }, t);
                                    }),
                            ],
                        }),
                    }),
                    (0, ua.jsxs)("div", {
                        className: "absolute inset-0 pointer-events-none overflow-hidden",
                        style: { zIndex: 100 },
                        children: [
                            (0, ua.jsx)(Ui.div, {
                                animate: s,
                                initial: { x: 150, y: 150 },
                                className: "absolute cursor-mac",
                                style: {
                                    width: "16px",
                                    height: "16px",
                                    backgroundImage: "url('../icons/cursor-mac.svg')",
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                    zIndex: 100,
                                    filter: "drop-shadow(0 1px 1px rgb(0 0 0 / 0.1))",
                                },
                            }),
                            t &&
                                (0, ua.jsx)(Ui.div, {
                                    className: "absolute w-5 h-5 -translate-x-2.5 -translate-y-2.5",
                                    style: { left: t.x, top: t.y },
                                    initial: { scale: 0, opacity: 0 },
                                    animate: { scale: [1, 1.5], opacity: [0.4, 0] },
                                    transition: { duration: 0.4, ease: "easeOut" },
                                    children: (0, ua.jsx)("div", { className: "w-full h-full bg-gray-400/40 rounded-full" }),
                                }),
                            (0, ua.jsx)("style", { children: "\n          .cursor-mac {\n            transform-origin: 3.5px 1px;\n            pointer-events: none;\n          }\n        " }),
                        ],
                    }),
                ],
            })
        );
    };
    function Us(e) {
        return (
            (Us =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      }),
            Us(e)
        );
    }
    function $s(e) {
        return (
            (function (e) {
                if (Array.isArray(e)) return Gs(e);
            })(e) ||
            (function (e) {
                if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
            })(e) ||
            qs(e) ||
            (function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            })()
        );
    }
    function Hs() {
        Hs = function () {
            return t;
        };
        var e,
            t = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            a =
                Object.defineProperty ||
                function (e, t, n) {
                    e[t] = n.value;
                },
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            s = o.asyncIterator || "@@asyncIterator",
            l = o.toStringTag || "@@toStringTag";
        function u(e, t, n) {
            return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t];
        }
        try {
            u({}, "");
        } catch (e) {
            u = function (e, t, n) {
                return (e[t] = n);
            };
        }
        function c(e, t, n, r) {
            var o = t && t.prototype instanceof g ? t : g,
                i = Object.create(o.prototype),
                s = new j(r || []);
            return a(i, "_invoke", { value: T(e, n, s) }), i;
        }
        function d(e, t, n) {
            try {
                return { type: "normal", arg: e.call(t, n) };
            } catch (e) {
                return { type: "throw", arg: e };
            }
        }
        t.wrap = c;
        var f = "suspendedStart",
            h = "suspendedYield",
            p = "executing",
            m = "completed",
            y = {};
        function g() {}
        function v() {}
        function b() {}
        var w = {};
        u(w, i, function () {
            return this;
        });
        var x = Object.getPrototypeOf,
            k = x && x(x(N([])));
        k && k !== n && r.call(k, i) && (w = k);
        var S = (b.prototype = g.prototype = Object.create(w));
        function E(e) {
            ["next", "throw", "return"].forEach(function (t) {
                u(e, t, function (e) {
                    return this._invoke(t, e);
                });
            });
        }
        function P(e, t) {
            function n(a, o, i, s) {
                var l = d(e[a], e, o);
                if ("throw" !== l.type) {
                    var u = l.arg,
                        c = u.value;
                    return c && "object" == Us(c) && r.call(c, "__await")
                        ? t.resolve(c.__await).then(
                              function (e) {
                                  n("next", e, i, s);
                              },
                              function (e) {
                                  n("throw", e, i, s);
                              }
                          )
                        : t.resolve(c).then(
                              function (e) {
                                  (u.value = e), i(u);
                              },
                              function (e) {
                                  return n("throw", e, i, s);
                              }
                          );
                }
                s(l.arg);
            }
            var o;
            a(this, "_invoke", {
                value: function (e, r) {
                    function a() {
                        return new t(function (t, a) {
                            n(e, r, t, a);
                        });
                    }
                    return (o = o ? o.then(a, a) : a());
                },
            });
        }
        function T(t, n, r) {
            var a = f;
            return function (o, i) {
                if (a === p) throw Error("Generator is already running");
                if (a === m) {
                    if ("throw" === o) throw i;
                    return { value: e, done: !0 };
                }
                for (r.method = o, r.arg = i; ; ) {
                    var s = r.delegate;
                    if (s) {
                        var l = C(s, r);
                        if (l) {
                            if (l === y) continue;
                            return l;
                        }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                        if (a === f) throw ((a = m), r.arg);
                        r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    a = p;
                    var u = d(t, n, r);
                    if ("normal" === u.type) {
                        if (((a = r.done ? m : h), u.arg === y)) continue;
                        return { value: u.arg, done: r.done };
                    }
                    "throw" === u.type && ((a = m), (r.method = "throw"), (r.arg = u.arg));
                }
            };
        }
        function C(t, n) {
            var r = n.method,
                a = t.iterator[r];
            if (a === e)
                return (
                    (n.delegate = null),
                    ("throw" === r && t.iterator.return && ((n.method = "return"), (n.arg = e), C(t, n), "throw" === n.method)) ||
                        ("return" !== r && ((n.method = "throw"), (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
                    y
                );
            var o = d(a, t.iterator, n.arg);
            if ("throw" === o.type) return (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), y;
            var i = o.arg;
            return i
                ? i.done
                    ? ((n[t.resultName] = i.value), (n.next = t.nextLoc), "return" !== n.method && ((n.method = "next"), (n.arg = e)), (n.delegate = null), y)
                    : i
                : ((n.method = "throw"), (n.arg = new TypeError("iterator result is not an object")), (n.delegate = null), y);
        }
        function A(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
        }
        function L(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function j(e) {
            (this.tryEntries = [{ tryLoc: "root" }]), e.forEach(A, this), this.reset(!0);
        }
        function N(t) {
            if (t || "" === t) {
                var n = t[i];
                if (n) return n.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var a = -1,
                        o = function n() {
                            for (; ++a < t.length; ) if (r.call(t, a)) return (n.value = t[a]), (n.done = !1), n;
                            return (n.value = e), (n.done = !0), n;
                        };
                    return (o.next = o);
                }
            }
            throw new TypeError(Us(t) + " is not iterable");
        }
        return (
            (v.prototype = b),
            a(S, "constructor", { value: b, configurable: !0 }),
            a(b, "constructor", { value: v, configurable: !0 }),
            (v.displayName = u(b, l, "GeneratorFunction")),
            (t.isGeneratorFunction = function (e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name));
            }),
            (t.mark = function (e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, b) : ((e.__proto__ = b), u(e, l, "GeneratorFunction")), (e.prototype = Object.create(S)), e;
            }),
            (t.awrap = function (e) {
                return { __await: e };
            }),
            E(P.prototype),
            u(P.prototype, s, function () {
                return this;
            }),
            (t.AsyncIterator = P),
            (t.async = function (e, n, r, a, o) {
                void 0 === o && (o = Promise);
                var i = new P(c(e, n, r, a), o);
                return t.isGeneratorFunction(n)
                    ? i
                    : i.next().then(function (e) {
                          return e.done ? e.value : i.next();
                      });
            }),
            E(S),
            u(S, l, "Generator"),
            u(S, i, function () {
                return this;
            }),
            u(S, "toString", function () {
                return "[object Generator]";
            }),
            (t.keys = function (e) {
                var t = Object(e),
                    n = [];
                for (var r in t) n.push(r);
                return (
                    n.reverse(),
                    function e() {
                        for (; n.length; ) {
                            var r = n.pop();
                            if (r in t) return (e.value = r), (e.done = !1), e;
                        }
                        return (e.done = !0), e;
                    }
                );
            }),
            (t.values = N),
            (j.prototype = {
                constructor: j,
                reset: function (t) {
                    if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = e), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = e), this.tryEntries.forEach(L), !t))
                        for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
                },
                stop: function () {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval;
                },
                dispatchException: function (t) {
                    if (this.done) throw t;
                    var n = this;
                    function a(r, a) {
                        return (s.type = "throw"), (s.arg = t), (n.next = r), a && ((n.method = "next"), (n.arg = e)), !!a;
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o],
                            s = i.completion;
                        if ("root" === i.tryLoc) return a("end");
                        if (i.tryLoc <= this.prev) {
                            var l = r.call(i, "catchLoc"),
                                u = r.call(i, "finallyLoc");
                            if (l && u) {
                                if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                            } else if (l) {
                                if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                            } else {
                                if (!u) throw Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function (e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var a = this.tryEntries[n];
                        if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                            var o = a;
                            break;
                        }
                    }
                    o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                    var i = o ? o.completion : {};
                    return (i.type = e), (i.arg = t), o ? ((this.method = "next"), (this.next = o.finallyLoc), y) : this.complete(i);
                },
                complete: function (e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return (
                        "break" === e.type || "continue" === e.type ? (this.next = e.arg) : "return" === e.type ? ((this.rval = this.arg = e.arg), (this.method = "return"), (this.next = "end")) : "normal" === e.type && t && (this.next = t),
                        y
                    );
                },
                finish: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), L(n), y;
                    }
                },
                catch: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var a = r.arg;
                                L(n);
                            }
                            return a;
                        }
                    }
                    throw Error("illegal catch attempt");
                },
                delegateYield: function (t, n, r) {
                    return (this.delegate = { iterator: N(t), resultName: n, nextLoc: r }), "next" === this.method && (this.arg = e), y;
                },
            }),
            t
        );
    }
    function Ws(e, t, n, r, a, o, i) {
        try {
            var s = e[o](i),
                l = s.value;
        } catch (e) {
            return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(r, a);
    }
    function Ys(e) {
        return function () {
            var t = this,
                n = arguments;
            return new Promise(function (r, a) {
                var o = e.apply(t, n);
                function i(e) {
                    Ws(o, r, a, i, s, "next", e);
                }
                function s(e) {
                    Ws(o, r, a, i, s, "throw", e);
                }
                i(void 0);
            });
        };
    }
    function qs(e, t) {
        if (e) {
            if ("string" == typeof e) return Gs(e, t);
            var n = {}.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Gs(e, t) : void 0;
        }
    }
    function Gs(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
    }
    
    const Xs = function () {
        var e,
            t,
            n =
                ((e = (0, r.useState)([])),
                (t = 2),
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(e) ||
                    (function (e, t) {
                        var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                        if (null != n) {
                            var r,
                                a,
                                o,
                                i,
                                s = [],
                                l = !0,
                                u = !1;
                            try {
                                if (((o = (n = n.call(e)).next), 0 === t)) {
                                    if (Object(n) !== n) return;
                                    l = !1;
                                } else for (; !(l = (r = o.call(n)).done) && (s.push(r.value), s.length !== t); l = !0);
                            } catch (e) {
                                (u = !0), (a = e);
                            } finally {
                                try {
                                    if (!l && null != n.return && ((i = n.return()), Object(i) !== i)) return;
                                } finally {
                                    if (u) throw a;
                                }
                            }
                            return s;
                        }
                    })(e, t) ||
                    qs(e, t) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()),
            a = n[0],
            o = n[1],
            i = Zi(),
            s = Zi(),
            l = (0, r.useRef)(!1),
            u = (0, r.useRef)(null);
        return (
            (0, r.useEffect)(
                function () {
                    (l.current = !0), o([]);
                    var e = (function () {
                            var e = Ys(
                                Hs().mark(function e(t, n) {
                                    return Hs().wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    if (!l.current) {
                                                        e.next = 2;
                                                        break;
                                                    }
                                                    return e.abrupt("return", t.start(n));
                                                case 2:
                                                    return e.abrupt("return", Promise.resolve());
                                                case 3:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            );
                            return function (t, n) {
                                return e.apply(this, arguments);
                            };
                        })(),
                        t = (function () {
                            var t = Ys(
                                Hs().mark(function t() {
                                    var n;
                                    return Hs().wrap(function (t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    if (l.current) {
                                                        t.next = 2;
                                                        break;
                                                    }
                                                    return t.abrupt("return");
                                                case 2:
                                                    return (
                                                        (n = (function () {
                                                            var t = Ys(
                                                                Hs().mark(function t() {
                                                                    var r, a, s, u;
                                                                    return Hs().wrap(
                                                                        function (t) {
                                                                            for (;;)
                                                                                switch ((t.prev = t.next)) {
                                                                                    case 0:
                                                                                        (r = [
                                                                                            { row: 0, position: { x: 120, y: 50 } },
                                                                                            { row: 1, position: { x: 120, y: 90 } },
                                                                                            { row: 2, position: { x: 120, y: 130 } },
                                                                                            { row: 3, position: { x: 120, y: 170 } },
                                                                                            { row: 4, position: { x: 120, y: 210 } },
                                                                                        ]),
                                                                                            (t.prev = 1),
                                                                                            (a = Hs().mark(function t() {
                                                                                                var n;
                                                                                                return Hs().wrap(function (t) {
                                                                                                    for (;;)
                                                                                                        switch ((t.prev = t.next)) {
                                                                                                            case 0:
                                                                                                                if (l.current) {
                                                                                                                    t.next = 2;
                                                                                                                    break;
                                                                                                                }
                                                                                                                return t.abrupt("return", { v: void 0 });
                                                                                                            case 2:
                                                                                                                return (n = r[u]), (t.next = 5), e(i, { x: n.position.x, y: n.position.y, transition: { duration: 0.25, ease: "easeInOut" } });
                                                                                                            case 5:
                                                                                                                if (l.current) {
                                                                                                                    t.next = 7;
                                                                                                                    break;
                                                                                                                }
                                                                                                                return t.abrupt("return", { v: void 0 });
                                                                                                            case 7:
                                                                                                                return (
                                                                                                                    (t.next = 9),
                                                                                                                    new Promise(function (e) {
                                                                                                                        return setTimeout(e, 300);
                                                                                                                    })
                                                                                                                );
                                                                                                            case 9:
                                                                                                                return (
                                                                                                                    o(function (e) {
                                                                                                                        return [].concat($s(e), [n.row]);
                                                                                                                    }),
                                                                                                                    (t.next = 12),
                                                                                                                    new Promise(function (e) {
                                                                                                                        return setTimeout(e, 100);
                                                                                                                    })
                                                                                                                );
                                                                                                            case 12:
                                                                                                            case "end":
                                                                                                                return t.stop();
                                                                                                        }
                                                                                                }, t);
                                                                                            })),
                                                                                            (u = 0);
                                                                                    case 4:
                                                                                        if (!(u < r.length)) {
                                                                                            t.next = 12;
                                                                                            break;
                                                                                        }
                                                                                        return t.delegateYield(a(), "t0", 6);
                                                                                    case 6:
                                                                                        if (!(s = t.t0)) {
                                                                                            t.next = 9;
                                                                                            break;
                                                                                        }
                                                                                        return t.abrupt("return", s.v);
                                                                                    case 9:
                                                                                        u++, (t.next = 4);
                                                                                        break;
                                                                                    case 12:
                                                                                        return (
                                                                                            (t.next = 14),
                                                                                            new Promise(function (e) {
                                                                                                return setTimeout(e, 100);
                                                                                            })
                                                                                        );
                                                                                    case 14:
                                                                                        if (!l.current) {
                                                                                            t.next = 19;
                                                                                            break;
                                                                                        }
                                                                                        return (
                                                                                            o([]),
                                                                                            (t.next = 18),
                                                                                            new Promise(function (e) {
                                                                                                return setTimeout(e, 500);
                                                                                            })
                                                                                        );
                                                                                    case 18:
                                                                                        l.current && n();
                                                                                    case 19:
                                                                                        t.next = 25;
                                                                                        break;
                                                                                    case 21:
                                                                                        (t.prev = 21),
                                                                                            (t.t1 = t.catch(1)),
                                                                                            console.error("Animation error:", t.t1),
                                                                                            l.current &&
                                                                                                setTimeout(function () {
                                                                                                    l.current && n();
                                                                                                }, 1e3);
                                                                                    case 25:
                                                                                    case "end":
                                                                                        return t.stop();
                                                                                }
                                                                        },
                                                                        t,
                                                                        null,
                                                                        [[1, 21]]
                                                                    );
                                                                })
                                                            );
                                                            return function () {
                                                                return t.apply(this, arguments);
                                                            };
                                                        })()),
                                                        (t.next = 5),
                                                        new Promise(function (e) {
                                                            return setTimeout(e, 100);
                                                        })
                                                    );
                                                case 5:
                                                    l.current && n();
                                                case 6:
                                                case "end":
                                                    return t.stop();
                                            }
                                    }, t);
                                })
                            );
                            return function () {
                                return t.apply(this, arguments);
                            };
                        })();
                    return (
                        (u.current = setTimeout(t, 500)),
                        function () {
                            (l.current = !1), u.current && clearTimeout(u.current), i.stop(), s.stop();
                        }
                    );
                },
                [i, s]
            ),
            (0, ua.jsxs)("div", {
                className: "relative h-full bg-green-100 rounded-b-lg overflow-hidden",
                children: [
                    (0, ua.jsx)("div", {
                        className: "h-full bg-green-100",
                        children: (0, ua.jsxs)("div", {
                            className: "grid grid-cols-5 h-full",
                            children: [
                                (0, ua.jsx)("div", { className: "bg-green-100 border-r border-b border-green-200 p-1 text-[10px] font-medium text-gray-600 flex items-center justify-center h-8" }),
                                Array(4)
                                    .fill(0)
                                    .map(function (e, t) {
                                        return (0,
                                        ua.jsx)("div", { className: "bg-green-200 border-r border-b border-gray-300 p-1 text-[10px] font-medium text-gray-700 flex items-center justify-center h-8", children: String.fromCharCode(65 + t) }, "header-".concat(t));
                                    }),
                                Array(5)
                                    .fill(0)
                                    .map(function (e, t) {
                                        return (0, ua.jsxs)(
                                            r.Fragment,
                                            {
                                                children: [
                                                    (0, ua.jsx)("div", { className: "bg-green-200 border-r border-b border-gray-300 p-1 text-[10px] font-medium text-gray-600 flex items-center justify-center h-10", children: t + 1 }),
                                                    Array(4)
                                                        .fill(0)
                                                        .map(function (e, n) {
                                                            var r = n > 0 || a.includes(t),
                                                                o = 60 + ((7 * t) % 20);
                                                            return (0,
                                                            ua.jsx)("div", { className: "bg-green-50 border border-gray-200 p-1 text-[10px] text-gray-800 overflow-hidden h-10 flex items-center", children: r && (0, ua.jsx)("div", { className: "h-2 bg-green-400 rounded transition-all duration-200", style: { width: "".concat(o, "%") } }) }, "cell-".concat(t, "-").concat(n));
                                                        }),
                                                ],
                                            },
                                            "row-".concat(t)
                                        );
                                    }),
                            ],
                        }),
                    }),
                    (0, ua.jsxs)("div", {
                        className: "absolute inset-0 pointer-events-none overflow-hidden",
                        style: { zIndex: 100 },
                        children: [
                            (0, ua.jsx)(Ui.div, {
                                animate: i,
                                initial: { x: 85, y: 10 },
                                className: "absolute cursor-mac",
                                style: {
                                    width: "16px",
                                    height: "16px",
                                    backgroundImage: "url('../icons/cursor-mac.svg')",
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                    zIndex: 100,
                                    filter: "drop-shadow(0 1px 1px rgb(0 0 0 / 0.1))",
                                },
                            }),
                            (0, ua.jsx)("style", { children: "\n          .cursor-mac {\n            transform-origin: 3.5px 1px;\n            pointer-events: none;\n          }\n        " }),
                        ],
                    }),
                ],
            })
        );
    };
    function Ks(e, t) {
        return (
            (function (e) {
                if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
                var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                if (null != n) {
                    var r,
                        a,
                        o,
                        i,
                        s = [],
                        l = !0,
                        u = !1;
                    try {
                        if (((o = (n = n.call(e)).next), 0 === t)) {
                            if (Object(n) !== n) return;
                            l = !1;
                        } else for (; !(l = (r = o.call(n)).done) && (s.push(r.value), s.length !== t); l = !0);
                    } catch (e) {
                        (u = !0), (a = e);
                    } finally {
                        try {
                            if (!l && null != n.return && ((i = n.return()), Object(i) !== i)) return;
                        } finally {
                            if (u) throw a;
                        }
                    }
                    return s;
                }
            })(e, t) ||
            (function (e, t) {
                if (e) {
                    if ("string" == typeof e) return Qs(e, t);
                    var n = {}.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Qs(e, t) : void 0;
                }
            })(e, t) ||
            (function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            })()
        );
    }
    function Qs(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
    }
    const Zs = function (e) {
        var t,
            n,
            a = e.delay,
            o = void 0 === a ? 2.5 : a,
            i = e.position,
            s = void 0 === i ? "right" : i,
            l = Ks((0, r.useState)(!0), 2),
            u = l[0],
            c = l[1],
            d = Ks((0, r.useState)(!0), 2),
            f = d[0],
            h = d[1],
            p = Ks((0, r.useState)(!1), 2),
            m = p[0],
            y = p[1],
            g = "right" === s ? "bottom-8 right-8" : "bottom-8 left-1/2 -translate-x-1/2",
            v = (0, r.useCallback)(
                ((t = function () {
                    window.scrollY > 0 ? (c(!1), y(!0)) : m || c(!0);
                }),
                (n = !1),
                function () {
                    n ||
                        (t.apply(this, arguments),
                        (n = !0),
                        setTimeout(function () {
                            n = !1;
                        }, 100));
                }),
                [m]
            );
        return (
            (0, r.useEffect)(
                function () {
                    window.addEventListener("scroll", v);
                    var e = setTimeout(function () {
                        h(!1);
                    }, 1e3 * o);
                    return function () {
                        window.removeEventListener("scroll", v), clearTimeout(e);
                    };
                },
                [o, m, v]
            ),
            (0, ua.jsxs)("div", {
                className: "absolute ".concat(g, " z-50 transition-opacity duration-500"),
                style: { opacity: f || m ? 0 : u ? 0.6 : 0 },
                children: [
                    (0, ua.jsxs)("div", {
                        className: "flex flex-col items-center space-y-2",
                        children: [
                            (0, ua.jsx)("div", {
                                className: "w-6 h-10 border border-zinc-500/60 rounded-full flex justify-center p-1",
                                children: (0, ua.jsx)("div", { className: "w-1.5 h-1.5 bg-zinc-400/70 rounded-full animate-scrollBounce" }),
                            }),
                            (0, ua.jsx)("div", {
                                className: "mt-1",
                                children: (0, ua.jsx)("svg", {
                                    width: "16",
                                    height: "10",
                                    viewBox: "0 0 16 10",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "animate-pulse",
                                    children: (0, ua.jsx)("path", { d: "M1 1L8 8L15 1", stroke: "rgba(161, 161, 170, 0.7)", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
                                }),
                            }),
                        ],
                    }),
                    (0, ua.jsx)("style", {
                        jsx: "true",
                        global: "true",
                        children:
                            "\n        @keyframes scrollBounce {\n          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }\n          40% { transform: translateY(3px); }\n          60% { transform: translateY(1.5px); }\n        }\n\n        .animate-scrollBounce {\n          animation: scrollBounce 2s infinite;\n        }\n\n        .animate-pulse {\n          animation: pulse 2s infinite;\n        }\n\n        @keyframes pulse {\n          0%, 100% { opacity: 0.6; }\n          50% { opacity: 0.3; }\n        }\n      ",
                    }),
                ],
            })
        );
    };
    function Js(e) {
        return (
            (Js =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      }),
            Js(e)
        );
    }
    function el(e, t) {
        return (
            (function (e) {
                if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
                var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                if (null != n) {
                    var r,
                        a,
                        o,
                        i,
                        s = [],
                        l = !0,
                        u = !1;
                    try {
                        if (((o = (n = n.call(e)).next), 0 === t)) {
                            if (Object(n) !== n) return;
                            l = !1;
                        } else for (; !(l = (r = o.call(n)).done) && (s.push(r.value), s.length !== t); l = !0);
                    } catch (e) {
                        (u = !0), (a = e);
                    } finally {
                        try {
                            if (!l && null != n.return && ((i = n.return()), Object(i) !== i)) return;
                        } finally {
                            if (u) throw a;
                        }
                    }
                    return s;
                }
            })(e, t) ||
            tl(e, t) ||
            (function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            })()
        );
    }
    function tl(e, t) {
        if (e) {
            if ("string" == typeof e) return nl(e, t);
            var n = {}.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? nl(e, t) : void 0;
        }
    }
    function nl(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
    }
    function rl(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
                (r = r.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, r);
        }
        return n;
    }
    function al(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
                ? rl(Object(n), !0).forEach(function (t) {
                      ol(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : rl(Object(n)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                  });
        }
        return e;
    }
    function ol(e, t, n) {
        return (
            (t = (function (e) {
                var t = (function (e) {
                    if ("object" != Js(e) || !e) return e;
                    var t = e[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var n = t.call(e, "string");
                        if ("object" != Js(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                })(e);
                return "symbol" == Js(t) ? t : t + "";
            })(t)) in e
                ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
                : (e[t] = n),
            e
        );
    }
    var il = [
            { type: "form", position: { top: "12%", left: "2%" }, mobilePosition: { top: "5%", left: "4%" }, size: { width: 280, height: 320 }, mobileSize: { width: 150, height: 180 }, style: "macos", showOnMobile: !0 },
            { type: "buttons", position: { top: "8%", right: "2%" }, mobilePosition: { top: "8%", right: "5%" }, size: { width: 300, height: 250 }, mobileSize: { width: 130, height: 120 }, style: "macos", showOnMobile: !0 },
            { type: "dropdown", position: { bottom: "20%", left: "5%" }, mobilePosition: { top: "72%", left: "20%" }, size: { width: 220, height: 220 }, mobileSize: { width: 170, height: 150 }, style: "macos", showOnMobile: !0 },
            { type: "research", position: { bottom: "-4%", right: "15%" }, mobilePosition: { bottom: "2%", right: "2%" }, size: { width: 300, height: 300 }, mobileSize: { width: 180, height: 180 }, style: "macos", showOnMobile: !1 },
            { type: "spreadsheet", position: { bottom: "-2%", left: "22%" }, mobilePosition: { bottom: "2%", left: "2%" }, size: { width: 450, height: 220 }, mobileSize: { width: 180, height: 140 }, style: "macos", showOnMobile: !1 },
            { type: "chat", position: { top: "30%", right: "-1%" }, mobilePosition: { top: "38%", right: "2%" }, size: { width: 280, height: 350 }, mobileSize: { width: 180, height: 180 }, style: "macos", showOnMobile: !1 },
        ],
        sl = (0, r.memo)(function (e) {
            var t = e.element,
                n = e.index,
                r = e.children,
                a = e.isVisible,
                o = e.isMobile,
                i = "wobble-".concat(n % 6),
                s = n % 2 == 0 ? "reverse" : "normal",
                l = o && t.mobilePosition ? t.mobilePosition : t.position,
                u = o && t.mobileSize ? t.mobileSize : t.size;
            return o && !1 === t.showOnMobile
                ? null
                : (0, ua.jsxs)("div", {
                      className: "absolute bg-gray-50 rounded-lg shadow-lg border border-gray-300 transition-all duration-700 ease-in-out ".concat(a ? "opacity-100" : "opacity-0"),
                      style: al(
                          al({}, l),
                          {},
                          {
                              width: u.width,
                              height: u.height,
                              zIndex: 20 + n,
                              animation: a
                                  ? ""
                                        .concat(i, " ")
                                        .concat(8 + (n % 3), "s ease-in-out infinite ")
                                        .concat(s)
                                  : "none",
                              pointerEvents: a ? "auto" : "none",
                              transitionProperty: "opacity, transform",
                              transitionDelay: a ? "".concat(100 * n, "ms") : "0ms",
                          }
                      ),
                      children: [
                          (0, ua.jsx)("div", {
                              className: "h-7 bg-gradient-to-b from-gray-100 to-gray-200 flex items-center px-3 border-b border-gray-300 rounded-t-lg",
                              children: (0, ua.jsxs)("div", {
                                  className: "flex space-x-1.5",
                                  children: [
                                      (0, ua.jsx)("div", { className: "w-3 h-3 rounded-full bg-gray-400 border border-gray-500/80" }),
                                      (0, ua.jsx)("div", { className: "w-3 h-3 rounded-full bg-gray-400 border border-gray-500/80" }),
                                      (0, ua.jsx)("div", { className: "w-3 h-3 rounded-full bg-gray-400 border border-gray-500/80" }),
                                  ],
                              }),
                          }),
                          r,
                      ],
                  });
        });
    sl.displayName = "WindowWrapper";
    var ll = function (e) {
        switch (e) {
            case "form":
                return (0, ua.jsx)(is, {});
            case "buttons":
                return (0, ua.jsx)(xs, {});
            case "dropdown":
                return (0, ua.jsx)(Os, {});
            case "research":
                return (0, ua.jsx)(qs, {});
            case "spreadsheet":
                return (0, ua.jsx)(Xs, {});
            case "chat":
                return (0, ua.jsx)(bs, {});
            default:
                return null;
        }
    };
    const ul = function () {
        var e = (0, r.useRef)(null),
            t = el((0, r.useState)(Array(il.length).fill(!1)), 2),
            n = t[0],
            a = t[1],
            o = el((0, r.useState)(!1), 2),
            i = o[0],
            s = o[1],
            l = el((0, r.useState)(0), 2),
            u = l[0],
            c = l[1],
            d = el((0, r.useState)(!1), 2),
            f = d[0],
            h = d[1],
            p = el((0, r.useState)("8px"), 2),
            m = p[0],
            y = p[1],
            g = el((0, r.useState)(0), 2),
            v = g[0],
            b = g[1],
            w = el((0, r.useState)(0), 2),
            x = w[0],
            k = w[1],
            S = el((0, r.useState)(0), 2),
            E = S[0],
            P = S[1];
        (0, r.useEffect)(function () {
            var e = function () {
                s(window.innerWidth < 768), c(window.innerWidth);
            };
            return (
                e(),
                window.addEventListener("resize", e),
                function () {
                    return window.removeEventListener("resize", e);
                }
            );
        }, []),
            (0, r.useEffect)(
                function () {
                    b(C());
                    var e = i ? 2 : 0;
                    k(Math.max(e, Math.min(8, 4 * (1 - u / window.screen.width))));
                },
                [u, i, C]
            ),
            (0, r.useEffect)(function () {
                var e = function () {
                    var e = window.scrollY,
                        t = Math.min(3, (e / 200) * 3);
                    P(t);
                };
                return (
                    window.addEventListener("scroll", e),
                    function () {
                        return window.removeEventListener("scroll", e);
                    }
                );
            }, []);
        var T = (0, r.useCallback)(function () {
            h(!0),
                setTimeout(function () {
                    y("8px");
                }, 100);
        }, []);
        (0, r.useEffect)(
            function () {
                var e = [];
                return (
                    il.forEach(function (t, n) {
                        if (!i || !1 !== t.showOnMobile) {
                            var r = setTimeout(function () {
                                a(function (e) {
                                    var t,
                                        r =
                                            (function (e) {
                                                if (Array.isArray(e)) return nl(e);
                                            })((t = e)) ||
                                            (function (e) {
                                                if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
                                            })(t) ||
                                            tl(t) ||
                                            (function () {
                                                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                            })();
                                    return (r[n] = !0), r;
                                });
                            }, 500 + 200 * n);
                            e.push(r);
                        }
                    }),
                    function () {
                        e.forEach(clearTimeout);
                    }
                );
            },
            [i]
        );
        var C = (0, r.useCallback)(
            function () {
                var e = window.screen.width,
                    t = Math.max(u, 320);
                return t >= e ? 0 : t <= 640 ? 0.5 : 0.5 * (1 - (t - 640) / (e - 640));
            },
            [u]
        );
        return (0, ua.jsxs)("section", {
            id: "desktop-interaction",
            ref: e,
            className: "relative w-full h-[50vh] md:h-[100vh] overflow-hidden border-b border-zinc-700 flex items-center justify-center bg-zinc-900",
            children: [
                (0, ua.jsx)("img", {
                    src: "../icons/Desktop.jpg",
                    alt: "Desktop background",
                    className: "absolute inset-0 w-full h-full object-cover ".concat(f ? "opacity-100" : "opacity-0"),
                    style: { filter: "blur(".concat(m, ") brightness(0.8)"), zIndex: 0, transition: "opacity 1000ms ease-in-out, filter 1000ms ease-in-out" },
                    onLoad: T,
                }),
                (0, ua.jsx)("div", {
                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-screen-2xl w-full inset-0 h-full overflow-visible hidden sm:block",
                    children: il.map(function (e, t) {
                        return (0, ua.jsx)(sl, { element: e, index: t, isVisible: n[t], isMobile: i, children: ll(e.type) }, "window-".concat(e.type, "-").concat(t));
                    }),
                }),
                (0, ua.jsx)("div", {
                    className: "absolute inset-0 z-30 pointer-events-none",
                    style: { backgroundColor: "rgba(0, 0, 0, ".concat(v, ")"), backdropFilter: "blur(".concat(x + E, "px)"), transition: "background-color 300ms ease-in-out, backdrop-filter 300ms ease-in-out" },
                }),
                (0, ua.jsx)("div", {
                    className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 relative z-40 flex flex-col justify-center items-center",
                    children: (0, ua.jsxs)("div", {
                        className: "mt-12 sm:mt-0 flex flex-col items-center text-center",
                        children: [
                            (0, ua.jsx)("h1", {
                                className: "text-5xl sm:text-7xl md:text-8xl lg:text-8xl max-w-xl md:max-w-2xl mx-auto text-zinc-100/95 mb-1 sm:mb-2 font-medium tracking-tight leading-tight metallic-text",
                                children: "AutoBro",
                            }),
                            (0, ua.jsx)(Xi, {
                                duration: 0.1,
                                delay: 0.3,
                                animationType: "typewriter",
                                staggerChildren: 0.01,
                                children: (0, ua.jsx)("p", { className: "text-xl sm:text-3xl md:text-3xl lg:text-3xl text-zinc-300 max-w-3xl mx-auto mb-6 sm:mb-8 leading-normal font-medium", children: "Your AI WorkAgent " }),
                            }),
                        ],
                    }),
                }),
                !i && (0, ua.jsx)(Zs, { delay: 2, position: "right" }),
                (0, ua.jsx)("style", {
                    jsx: "true",
                    global: "true",
                    children:
                        "\n        @keyframes wobble-0 {\n          0% {\n            transform: translate(0, 0) rotate(0deg);\n          }\n          25% {\n            transform: translate(-8px, 8px) rotate(-1deg);\n          }\n          50% {\n            transform: translate(0, -8px) rotate(1deg);\n          }\n          75% {\n            transform: translate(8px, -8px) rotate(-0.5deg);\n          }\n          100% {\n            transform: translate(0, 0) rotate(0deg);\n          }\n        }\n\n        @keyframes wobble-1 {\n          0% {\n            transform: translate(0, 0) scale(1);\n          }\n          25% {\n            transform: translate(-12px, 4px) scale(0.98);\n          }\n          50% {\n            transform: translate(0, -4px) scale(1.02);\n          }\n          75% {\n            transform: translate(12px, -4px) scale(0.99);\n          }\n          100% {\n            transform: translate(0, 0) scale(1);\n          }\n        }\n\n        @keyframes wobble-2 {\n          0% {\n            transform: translate(0, 0);\n          }\n          20% {\n            transform: translate(-10px, 2px);\n          }\n          40% {\n            transform: translate(5px, 8px);\n          }\n          60% {\n            transform: translate(-7px, -10px);\n          }\n          80% {\n            transform: translate(8px, -2px);\n          }\n          100% {\n            transform: translate(0, 0);\n          }\n        }\n\n        @keyframes wobble-3 {\n          0% {\n            transform: translate(0, 0) rotate(0deg);\n          }\n          30% {\n            transform: translate(-5px, 9px) rotate(1.5deg);\n          }\n          60% {\n            transform: translate(7px, -3px) rotate(-1deg);\n          }\n          100% {\n            transform: translate(0, 0) rotate(0deg);\n          }\n        }\n\n        @keyframes wobble-4 {\n          0% {\n            transform: translate(0, 0);\n          }\n          33% {\n            transform: translate(-12px, -6px);\n          }\n          66% {\n            transform: translate(9px, 8px);\n          }\n          100% {\n            transform: translate(0, 0);\n          }\n        }\n\n        @keyframes wobble-5 {\n          0% {\n            transform: translate(0, 0) scale(1) rotate(0deg);\n          }\n          25% {\n            transform: translate(-5px, 6px) scale(0.97) rotate(-0.5deg);\n          }\n          50% {\n            transform: translate(7px, -9px) scale(1.02) rotate(1deg);\n          }\n          75% {\n            transform: translate(-8px, -3px) scale(0.99) rotate(-0.7deg);\n          }\n          100% {\n            transform: translate(0, 0) scale(1) rotate(0deg);\n          }\n        }\n      ",
                }),
            ],
        });
    };
    var cl = n(72),
        dl = n.n(cl),
        fl = n(825),
        hl = n.n(fl),
        pl = n(659),
        ml = n.n(pl),
        yl = n(56),
        gl = n.n(yl),
        vl = n(159),
        bl = n.n(vl),
        wl = n(113),
        xl = n.n(wl),
        kl = n(21),
        Sl = {};
    (Sl.styleTagTransform = xl()),
        (Sl.setAttributes = gl()),
        (Sl.insert = ml().bind(null, "head")),
        (Sl.domAPI = hl()),
        (Sl.insertStyleElement = bl()),
        dl()(kl.A, Sl),
        kl.A && kl.A.locals && kl.A.locals,
        document.addEventListener("DOMContentLoaded", function () {
            var e = document.getElementById("ace-hero-root");
            e && (0, a.createRoot)(e).render((0, ua.jsx)(ul, {}));
        });
})();
