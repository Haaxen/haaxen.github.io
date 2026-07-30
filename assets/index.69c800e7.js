var e = Object.defineProperty
  , t = Object.defineProperties
  , o = Object.getOwnPropertyDescriptors
  , n = Object.getOwnPropertySymbols
  , i = Object.prototype.hasOwnProperty
  , a = Object.prototype.propertyIsEnumerable
  , r = (t, o, n) => o in t ? e(t, o, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[o] = n;
import {d as l, C as s, r as c, a as m, c as p, b as d, t as u, e as h, w as v, v as k, o as g, f as b, g as y, h as f, i as w, j as x, k as C, u as M, l as S, s as P, m as I, n as L, p as U, q as A, F as D, x as R, y as B, z as j, A as E, B as N} from "./vendor.1b8a50b2.js";
var G = l({
    name: "Demon",
    components: {
        CopyIcon: s
    },
    props: {
        demon: {
            type: Object,
            required: !0
        },
        active: Boolean,
        percent: Number,
        currentPercent: Number,
        animate: {
            type: Boolean,
            default: !0
        }
    },
    emits: ["done", "give-up"],
    setup(e, t) {
        const o = c("");
        return {
            iptPercent: o,
            done: function() {
                t.emit("done", parseInt(o.value))
            },
            giveUp: function() {
                o.value = "",
                t.emit("give-up")
            },
            clipboardCopy: function() {
                e.demon.levelID && navigator.clipboard.writeText(e.demon.levelID.toString())
            }
        }
    }
});
const T = {
    class: "flex mt-2 md:mt-0 justify-between md:justify-start"
}
  , O = {
    class: "flex flex-col md:ml-5"
}
  , F = {
    class: "text-xl md:text-3xl font-medium text-gray-900 dark:text-gray-200 hover:underline"
}
  , V = {
    class: "text-lg italic text-gray-700 dark:text-gray-200"
}
  , z = {
    key: 0
}
  , H = {
    key: 1,
    class: "ml-3 mt-0.5 text-gray-500 dark:text-gray-400 text-2xl"
}
  , K = {
    key: 0,
    class: "flex md:flex-grow justify-center md:justify-end mt-4 md:mt-0"
}
  , _ = {
    class: "flex flex-col w-full md:w-auto"
}
  , W = {
    class: "flex justify-between mt-5"
};
G.render = function(e, t, o, n, i, a) {
    var r;
    const l = m("copy-icon");
    return g(),
    p("article", {
        class: ["flex flex-col md:flex-row p-5 shadow-lg w-full", {
            "fade-in-up": e.animate
        }]
    }, [d("a", {
        href: e.demon.video ? `https://youtu.be/${e.demon.video}` : "#",
        target: "_blank",
        rel: "noopener noreferrer"
    }, [d("img", {
        class: "w-full md:w-48 md:h-28",
        loading: "lazy",
        src: `https://i.ytimg.com/vi/${e.demon.video}/mqdefault.jpg`,
        alt: "thumbnail"
    }, null, 8, ["src"])], 8, ["href"]), d("div", T, [d("div", O, [d("a", {
        href: null != (r = e.demon.link) ? r : `https://demonlist.org/classic/${e.demon.position}`,
        target: "_blank",
        rel: "noopener noreferrer"
    }, [d("header", F, " #" + u(e.demon.position) + " - " + u(e.demon.name), 1)], 8, ["href"]), d("section", V, " by " + u(e.demon.creator), 1)]), e.active && e.demon.levelID ? (g(),
    p("div", z, [d("div", {
        class: "text-gray-400 hover:text-gray-600 active:text-gray-900 hover:cursor-pointer mt-3 ml-2",
        onClick: t[1] || (t[1] = (...t) => e.clipboardCopy && e.clipboardCopy(...t))
    }, [d(l, {
        size: "1.1x"
    })])])) : h("", !0), e.percent ? (g(),
    p("span", H, u(e.percent) + "%", 1)) : h("", !0)]), e.active ? (g(),
    p("div", K, [d("div", _, [v(d("input", {
        type: "number",
        class: "border rounded border-gray-200 dark:border-gray-600 dark:text-gray-100 shadow-inner p-2 dark:bg-plain-gray-light",
        placeholder: `At least ${e.currentPercent}%`,
        "onUpdate:modelValue": t[2] || (t[2] = t => e.iptPercent = t)
    }, null, 8, ["placeholder"]), [[k, e.iptPercent]]), d("div", W, [d("button", {
        onClick: t[3] || (t[3] = t => e.done()),
        class: "px-4 py-2 shadow bg-green-500 hover:bg-green-600 text-white rounded"
    }, " Done "), d("button", {
        onClick: t[4] || (t[4] = t => e.giveUp()),
        class: "px-4 py-2 shadow bg-red-500 hover:bg-red-600 text-white rounded"
    }, " Give up ")])])])) : h("", !0)], 2)
}
;
var J = l({
    name: "Modal",
    props: {
        show: Boolean,
        cancelable: Boolean
    },
    emits: ["close"],
    setup: (e, t) => ({
        close: function() {
            e.cancelable && t.emit("close")
        }
    })
});
const Z = {
    key: 0,
    class: "flex flex-col justify-center items-center left-0 top-0 right-0 bottom-0 fixed"
}
  , Q = {
    class: "relative z-20"
};
J.render = function(e, t, o, n, i, a) {
    return e.show ? (g(),
    p("div", Z, [d("div", {
        onClick: t[1] || (t[1] = (...t) => e.close && e.close(...t)),
        class: "absolute left-0 top-0 right-0 bottom-0 bg-black opacity-50 z-10"
    }), d("div", Q, [d("article", null, [b(e.$slots, "default")])])])) : h("", !0)
}
;
var q = l({
    name: "SaveModal",
    components: {
        Modal: J
    },
    props: {
        show: Boolean
    },
    emits: ["close", "save"],
    setup(e, t) {
        const o = c(null);
        return {
            close: function(e=!1) {
                t.emit("close", e ? o.value : null),
                o.value = null
            },
            onFileChange: function(e) {
                const t = e.target;
                t && (o.value = t.files[0])
            },
            file: o,
            save: function() {
                t.emit("save")
            }
        }
    }
});
const X = {
    class: "md:w-96"
}
  , Y = d("header", {
    class: "bg-gray-50 dark:bg-plain-gray-light dark:text-gray-200 p-4 rounded-t-lg"
}, [d("h2", {
    class: "text-2xl"
}, "Save / Load")], -1)
  , $ = {
    class: "bg-white dark:bg-plain-gray py-5 px-4"
}
  , ee = {
    class: "flex justify-between md:justify-start bg-gray-100 dark:bg-plain-gray-light p-4 rounded-b-lg"
};
q.render = function(e, t, o, n, i, a) {
    const r = m("modal");
    return g(),
    p(r, {
        show: e.show,
        cancelable: !0,
        onClose: t[4] || (t[4] = t => e.close(!1))
    }, {
        default: y(( () => [d("div", X, [Y, d("section", $, [d("input", {
            type: "file",
            class: "text-gray-800 dark:text-gray-200",
            onChange: t[1] || (t[1] = (...t) => e.onFileChange && e.onFileChange(...t))
        }, null, 32)]), d("footer", ee, [d("button", {
            onClick: t[2] || (t[2] = (...t) => e.save && e.save(...t)),
            class: "px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
        }, " Save "), d("button", {
            onClick: t[3] || (t[3] = t => e.close(!0)),
            class: "px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded ml-2 disabled:opacity-50",
            disabled: !e.file
        }, " Load ", 8, ["disabled"])])])])),
        _: 1
    }, 8, ["show"])
}
;
var te = l({
    name: "GiveUpModal",
    components: {
        Modal: J
    },
    props: {
        show: Boolean
    },
    emits: ["close", "give-up"],
    setup: (e, t) => ({
        close: function() {
            t.emit("close")
        },
        giveUp: function() {
            t.emit("give-up")
        }
    })
});
const oe = {
    class: "md:w-96"
}
  , ne = d("header", {
    class: "bg-white dark:bg-plain-gray dark:text-gray-200 p-4 rounded-t"
}, [d("h2", {
    class: "text-2xl"
}, "Are you sure?")], -1)
  , ie = {
    class: "flex justify-between md:justify-start bg-gray-100 dark:bg-plain-gray-light p-4 rounded-b"
};
function ae(e) {
    e.splice(0, e.length)
}
te.render = function(e, t, o, n, i, a) {
    const r = m("modal");
    return g(),
    p(r, {
        show: e.show,
        cancelable: !1,
        onClose: e.close
    }, {
        default: y(( () => [d("div", oe, [ne, d("footer", ie, [d("button", {
            onClick: t[1] || (t[1] = (...t) => e.giveUp && e.giveUp(...t)),
            class: "px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
        }, " Yes "), d("button", {
            onClick: t[2] || (t[2] = (...t) => e.close && e.close(...t)),
            class: "px-4 py-2 bg-white hover:bg-gray-300 shadow rounded ml-2"
        }, " No ")])])])),
        _: 1
    }, 8, ["show", "onClose"])
}
;
const re = [{
    position: 1,
    name: "Erebus",
    video: "8csWDx6C2YI",
    creator: "BoldStep",
    link: "https://pointercrate.com/demonlist/permalink/93/"
}, {
    position: 2,
    name: "Sonic Wave",
    video: "GpXTwPgweAk",
    creator: "Sunix",
    link: "https://pointercrate.com/demonlist/permalink/118/"
}, {
    position: 3,
    name: "Yatagarasu",
    video: "GrGFFPhtAFc",
    creator: "TrusTa",
    link: "https://pointercrate.com/demonlist/permalink/146/"
}, {
    position: 4,
    name: "ZAPHKIEL",
    video: "RkW_aKtshMI",
    creator: "Darwin",
    link: "https://pointercrate.com/demonlist/permalink/42/"
}, {
    position: 5,
    name: "Artificial Ascent",
    video: "laok-nI3-t8",
    creator: "ViPriN",
    link: "https://pointercrate.com/demonlist/permalink/47/"
}, {
    position: 6,
    name: "Bausha Vortex",
    video: "J4Jwp3-ub3I",
    creator: "Pennutoh",
    link: "https://pointercrate.com/demonlist/permalink/206/"
}, {
    position: 7,
    name: "Mystic",
    video: "VPcjyLMgE9g",
    creator: "Endlevel",
    link: "https://pointercrate.com/demonlist/permalink/171/"
}, {
    position: 8,
    name: "Devil Vortex",
    video: "ntCP1ao3ogI",
    creator: "Rustam",
    link: "https://pointercrate.com/demonlist/permalink/88/"
}, {
    position: 9,
    name: "Step To Hell",
    video: "mQ7zvkT99Qc",
    creator: "LaZye",
    link: "https://pointercrate.com/demonlist/permalink/89/"
}, {
    position: 10,
    name: "Sakupen Hell",
    video: "svyOjwLCErg",
    creator: "TrusTa",
    link: "https://pointercrate.com/demonlist/permalink/30/"
}, {
    position: 11,
    name: "SubSonic",
    video: "F-AfSPnjIcM",
    creator: "ViPriN",
    link: "https://pointercrate.com/demonlist/permalink/147/"
}, {
    position: 12,
    name: "The Hell World",
    video: "WEJR4EO8DzM",
    creator: "Stormfly",
    link: "https://pointercrate.com/demonlist/permalink/124/"
}, {
    position: 13,
    name: "Black Blizzard",
    video: "lsT5TjQ1Ubc",
    creator: "KrmaL",
    link: "https://pointercrate.com/demonlist/permalink/204/"
}, {
    position: 14,
    name: "Hatred",
    video: "mq5-I5UXZrQ",
    creator: "AZuLer4",
    link: "https://pointercrate.com/demonlist/permalink/203/"
}, {
    position: 15,
    name: "Bloodbath",
    video: "twTw4fjT0ik",
    creator: "Riot",
    link: "https://pointercrate.com/demonlist/permalink/69/"
}, {
    position: 16,
    name: "Phobos",
    video: "wC8VJ4B2WRg",
    creator: "KrmaL",
    link: "https://pointercrate.com/demonlist/permalink/202/"
}, {
    position: 17,
    name: "Athanatos",
    video: "RF8aW4Ngwbw",
    creator: "Exenity",
    link: "https://pointercrate.com/demonlist/permalink/41/"
}, {
    position: 18,
    name: "Aurora",
    video: "vbsiPTq2JSw",
    creator: "TheKris",
    link: "https://pointercrate.com/demonlist/permalink/36/"
}, {
    position: 19,
    name: "Infernal Abyss",
    video: "mgefA4FTEXk",
    creator: "Ggb0y",
    link: "https://pointercrate.com/demonlist/permalink/38/"
}, {
    position: 20,
    name: "Carnage Mode",
    video: "GuJkgwNJ0UU",
    creator: "Findexi",
    link: "https://pointercrate.com/demonlist/permalink/52/"
}, {
    position: 21,
    name: "Conical Depression",
    video: "wdEuFpV9CXw",
    creator: "KrmaL",
    link: "https://pointercrate.com/demonlist/permalink/35/"
}, {
    position: 22,
    name: "The Hell Zone",
    video: "6ebIqtnGpdo",
    creator: "Stormfly",
    link: "https://pointercrate.com/demonlist/permalink/162/"
}, {
    position: 23,
    name: "Betrayal of Fate",
    video: null,
    creator: "weoweoteo",
    link: "https://pointercrate.com/demonlist/permalink/197/"
}, {
    position: 24,
    name: "A Bizarre Phantasm",
    video: "ivC0NJVPAwo",
    creator: "TeamN2",
    link: "https://pointercrate.com/demonlist/permalink/169/"
}, {
    position: 25,
    name: "Down Bass",
    video: null,
    creator: "Spectra",
    link: "https://pointercrate.com/demonlist/permalink/77/"
}, {
    position: 26,
    name: "Artificial Ideology",
    video: "WRfaroi9PpA",
    creator: "TeamN2",
    link: "https://pointercrate.com/demonlist/permalink/33/"
}, {
    position: 27,
    name: "Blade of Justice",
    video: "6018CbEjA-4",
    creator: "Manix648",
    link: "https://pointercrate.com/demonlist/permalink/70/"
}, {
    position: 28,
    name: "Audio Extraction",
    video: "RyjPsu84PMs",
    creator: "GoodSmile",
    link: "https://pointercrate.com/demonlist/permalink/167/"
}, {
    position: 29,
    name: "Plasma Pulse III",
    video: "obz_F8jnBUU",
    creator: "Smokes",
    link: "https://pointercrate.com/demonlist/permalink/76/"
}, {
    position: 30,
    name: "aftermath",
    video: "nhcyfGUkCMk",
    creator: "Satcho",
    link: "https://pointercrate.com/demonlist/permalink/104/"
}, {
    position: 31,
    name: "Novalis",
    video: "ecuAlcs3dIw",
    creator: "Gryllex",
    link: "https://pointercrate.com/demonlist/permalink/121/"
}, {
    position: 32,
    name: "The Hell Dignity",
    video: "nQuVjZ11Lyw",
    creator: "Stormfly",
    link: "https://pointercrate.com/demonlist/permalink/212/"
}, {
    position: 33,
    name: "Breakout",
    video: "foEA5hS1aUw",
    creator: "Surv",
    link: "https://pointercrate.com/demonlist/permalink/138/"
}, {
    position: 34,
    name: "Twisted Tranquility",
    video: "TiaOm9j36Pg",
    creator: "Flukester",
    link: "https://pointercrate.com/demonlist/permalink/196/"
}, {
    position: 35,
    name: "Niflheim",
    video: "FFAHbgkNH10",
    creator: "Vismuth",
    link: "https://pointercrate.com/demonlist/permalink/73/"
}, {
    position: 36,
    name: "Red World Rebirth",
    video: "WsxDUMLRqN4",
    creator: "Riot",
    link: "https://pointercrate.com/demonlist/permalink/61/"
}, {
    position: 37,
    name: "The Flawless",
    video: "RHOCE37dP2A",
    creator: "IIIRyanIII",
    link: "https://pointercrate.com/demonlist/permalink/26/"
}, {
    position: 38,
    name: "The Hell Factory",
    video: "MxzBAnBeZCE",
    creator: "TeamN2",
    link: "https://pointercrate.com/demonlist/permalink/96/"
}, {
    position: 39,
    name: "SUBVERSIVE",
    video: "9sxy51MfUKU",
    creator: "Snowr33de",
    link: "https://pointercrate.com/demonlist/permalink/60/"
}, {
    position: 40,
    name: "Elite Z Rebirth",
    video: "B1GKgUNT8Q0",
    creator: "KrmaL",
    link: "https://pointercrate.com/demonlist/permalink/166/"
}, {
    position: 41,
    name: "Uprise",
    video: "4RhvXuFLBQc",
    creator: "Blad3M",
    link: "https://pointercrate.com/demonlist/permalink/141/"
}, {
    position: 42,
    name: "Allegiance",
    video: "wzutYMNXr-Y",
    creator: "nikroplays",
    link: "https://pointercrate.com/demonlist/permalink/143/"
}, {
    position: 43,
    name: "Deception Dive",
    video: "A6xBC52UN4M",
    creator: "Rustam",
    link: "https://pointercrate.com/demonlist/permalink/164/"
}, {
    position: 44,
    name: "Cataclysm",
    video: "vGV4j8C66JY",
    creator: "Ggb0y",
    link: "https://pointercrate.com/demonlist/permalink/142/"
}, {
    position: 45,
    name: "Heartbeat",
    video: "UDVbmaJGlKQ",
    creator: "KrmaL",
    link: "https://pointercrate.com/demonlist/permalink/220/"
}, {
    position: 46,
    name: "ICE Carbon Diablo X",
    video: null,
    creator: "Roadbose",
    link: "https://pointercrate.com/demonlist/permalink/111/"
}, {
    position: 47,
    name: "Retention",
    video: "3VUfd7jRt5U",
    creator: "WOOGI1411",
    link: "https://pointercrate.com/demonlist/permalink/190/"
}, {
    position: 48,
    name: "AcropoliX",
    video: "9GrlZLD8wZ0",
    creator: "SoulsTRK",
    link: "https://pointercrate.com/demonlist/permalink/192/"
}, {
    position: 49,
    name: "The Ultimate Phase",
    video: null,
    creator: "Andromeda",
    link: "https://pointercrate.com/demonlist/permalink/215/"
}, {
    position: 50,
    name: "Temple of Destiny",
    video: "mQzjEsBE2qY",
    creator: "DrakeGhast",
    link: "https://pointercrate.com/demonlist/permalink/14/"
}, {
    position: 51,
    name: "Photovoltaic",
    video: "wx0xuyw0uHg",
    creator: "Mazl",
    link: "https://pointercrate.com/demonlist/permalink/100/"
}, {
    position: 52,
    name: "Creeper Force",
    video: "l2Kk2re3rJo",
    creator: "CreeperMILK",
    link: "https://pointercrate.com/demonlist/permalink/176/"
}, {
    position: 53,
    name: "Asymmetry",
    video: "NCQv0-CIZ0M",
    creator: "WOOGI1411",
    link: "https://pointercrate.com/demonlist/permalink/225/"
}, {
    position: 54,
    name: "Catastrophic",
    video: null,
    creator: "Lalter",
    link: "https://pointercrate.com/demonlist/permalink/175/"
}, {
    position: 55,
    name: "Cosmic Calamity",
    video: "bIS_dBO56S0",
    creator: "SrGuillester",
    link: "https://pointercrate.com/demonlist/permalink/130/"
}, {
    position: 56,
    name: "Crimson Clutter",
    video: "3-bYZqsyZAI",
    creator: "RedUniverse",
    link: "https://pointercrate.com/demonlist/permalink/56/"
}, {
    position: 57,
    name: "Cyber Chaos",
    video: "S1qRt75W2BI",
    creator: "Hinds",
    link: "https://pointercrate.com/demonlist/permalink/227/"
}, {
    position: 58,
    name: "Dark RainBow Rebirth",
    video: "QdzguI3kK_A",
    creator: "knobbelboy",
    link: "https://pointercrate.com/demonlist/permalink/179/"
}, {
    position: 59,
    name: "Duelo Maestro",
    video: "_ownLb_GPRg",
    creator: "Nacho21",
    link: "https://pointercrate.com/demonlist/permalink/57/"
}, {
    position: 60,
    name: "Elements X",
    video: "j3ngCBs_Pi8",
    creator: "Eiken",
    link: "https://pointercrate.com/demonlist/permalink/181/"
}, {
    position: 61,
    name: "Entwined Room",
    video: null,
    creator: "MidNight",
    link: "https://pointercrate.com/demonlist/permalink/217/"
}, {
    position: 62,
    name: "Falling Up",
    video: "gHHqPIvZXeM",
    creator: "KrmaL",
    link: "https://pointercrate.com/demonlist/permalink/116/"
}, {
    position: 63,
    name: "Future Circles",
    video: "VlHuB_gRFzI",
    creator: "KeiAs",
    link: "https://pointercrate.com/demonlist/permalink/208/"
}, {
    position: 64,
    name: "Galatic Fragility",
    video: "nQvDMt5WmkQ",
    creator: "TeamSmokeWeed",
    link: "https://pointercrate.com/demonlist/permalink/17/"
}, {
    position: 65,
    name: "Galaxy Breaker",
    video: "6el_wN6FkBA",
    creator: "Bianox",
    link: "https://pointercrate.com/demonlist/permalink/108/"
}, {
    position: 66,
    name: "Hate War",
    video: "CPfmyR1oegE",
    creator: "Stormfly",
    link: "https://pointercrate.com/demonlist/permalink/98/"
}, {
    position: 67,
    name: "HyperSonic",
    video: "RmrPEJ7Z6lY",
    creator: "ViPriN",
    link: "https://pointercrate.com/demonlist/permalink/214/"
}, {
    position: 68,
    name: "Kurumi City",
    video: "UgrjdXJc3wg",
    creator: "xnail",
    link: "https://pointercrate.com/demonlist/permalink/106/"
}, {
    position: 69,
    name: "Light Years",
    video: "E4ejBDnz1Gg",
    creator: "Smokes",
    link: "https://pointercrate.com/demonlist/permalink/226/"
}, {
    position: 70,
    name: "Matilda the Machine",
    video: "_ICKNhOQ4Tw",
    creator: "Jeyzor",
    link: "https://pointercrate.com/demonlist/permalink/158/"
}, {
    position: 71,
    name: "Necropolis",
    video: null,
    creator: "NePtunE",
    link: "https://pointercrate.com/demonlist/permalink/103/"
}, {
    position: 72,
    name: "New Supersonic",
    video: "p0vz4e3cBV4",
    creator: "CronosCrl",
    link: "https://pointercrate.com/demonlist/permalink/228/"
}, {
    position: 73,
    name: "Night Terrors",
    video: "bPOHEFKLY_c",
    creator: "Hinds",
    link: "https://pointercrate.com/demonlist/permalink/150/"
}, {
    position: 74,
    name: "Plasma Pulse II",
    video: "R6rDdoqB_-A",
    creator: "Giron",
    link: "https://pointercrate.com/demonlist/permalink/188/"
}, {
    position: 75,
    name: "Quest for Perfection",
    video: "MAN_ZWb2rY0",
    creator: "LazerBlitz",
    link: "https://pointercrate.com/demonlist/permalink/223/"
}, {
    position: 76,
    name: "Sadism",
    video: "L0rDpGSJxXc",
    creator: "Nox",
    link: "https://pointercrate.com/demonlist/permalink/16/"
}, {
    position: 77,
    name: "The JanuS Miracle",
    video: null,
    creator: "Megadere",
    link: "https://pointercrate.com/demonlist/permalink/144/"
}, {
    position: 78,
    name: "Ultraviolet",
    video: "GxvVgS1mSnE",
    creator: "ViPriN",
    link: "https://pointercrate.com/demonlist/permalink/48/"
}, {
    position: 79,
    name: "Wander of Thought",
    video: "e1NH0e1LpBg",
    creator: "Noriega",
    link: "https://pointercrate.com/demonlist/permalink/224/"
}, {
    position: 80,
    name: "Wolfstep",
    video: "0LV8Nm4ndE8",
    creator: "RLOL",
    link: "https://pointercrate.com/demonlist/permalink/99/"
}, {
    position: 81,
    name: "X Adventure",
    video: "nO2sM_KIPmI",
    creator: "pasiblitz",
    link: "https://pointercrate.com/demonlist/permalink/15/"
}];
function le(e) {
    var t;
    const o = null == (t = e.video) ? void 0 : t.match(/https:\/\/www\.youtube\.com\/watch\?v=(.{11})/);
    return {
        name: e.name,
        creator: e.publisher.name,
        position: e.position,
        levelID: e.level_id,
        video: o ? o[1] : null
    }
}
function se(e) {
    const l = (s = ( (e, t) => {
        for (var o in t || (t = {}))
            i.call(t, o) && r(e, o, t[o]);
        if (n)
            for (var o of n(t))
                a.call(t, o) && r(e, o, t[o]);
        return e
    }
    )({}, e),
    t(s, o({
        version: 1
    })));
    var s;
    const c = w(l);
    return f(c)
}
function ce(e) {
    return e.every((e => {
        return (t = e) >= 65 && t <= 90 || t >= 97 && t <= 122 || t >= 48 && t <= 57 || 43 === t || 47 === t || 61 === t;
        var t
    }
    )) ? function(e) {
        const t = x(M(S(P(e))));
        return {
            current: t.demon,
            percent: t.percent,
            percents: t.percents,
            playing: t.playing,
            selectedLists: {
                main: t.main,
                extended: t.extended,
                legacy: t.legacy
            },
            demons: t.demons.map((e => ({
                position: e[0],
                name: e[1],
                creator: e[2],
                video: e[3]
            })))
        }
    }(e) : x(C(e))
}
var me = l({
    components: {
        Demon: G,
        Modal: J,
        SaveModal: q,
        GiveUpModal: te
    },
    setup() {
        const e = I({
            main: !0,
            extended: !0,
            legacy: !1
        });
        let t = I([]);
        async function o(e=0, t=100) {
            const o = await fetch(`https://pointercrate.com/api/v2/demons/listed/?limit=${t}&after=${e}`);
            return o.ok ? (await o.json()).map(le) : []
        }
        const n = c(!1)
          , i = c(!1)
          , a = L(( () => window.location.search.includes("2017")))
          , r = function(e) {
            const t = t => {
                if (e.value)
                    return t.preventDefault(),
                    t.returnValue = "",
                    !0
            }
            ;
            return window.addEventListener("beforeunload", t),
            () => {
                window.removeEventListener("beforeunload", t)
            }
        }(n);
        U(( () => {
            r()
        }
        ));
        const l = L(( () => t.slice(0, s.value + 1)))
          , s = c(0)
          , m = c(1)
          , p = I([]);
        const d = L(( () => !n.value && t.length))
          , u = c(!1)
          , h = L(( () => t.slice(s.value + 1).filter(( (e, t) => m.value + t + 1 <= 100))))
          , v = c(!1);
        const k = c(!1);
        const g = c(!1)
          , b = c("dark" === localStorage.theme || !("theme"in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
        return A(( () => {
            localStorage.setItem("theme", b.value ? "dark" : "light")
        }
        )),
        {
            demons: t,
            currentDemons: l,
            currentDemon: s,
            currentPercent: m,
            percents: p,
            demonDone: function(e) {
                isNaN(e) || e < m.value || (e >= 100 ? (e = 100,
                n.value = !1) : s.value >= t.length - 1 ? n.value = !1 : s.value++,
                m.value = e + 1,
                p.push(e))
            },
            giveUp: function() {
                v.value = !1,
                n.value = !1
            },
            selectedLists: e,
            start: async function() {
                i.value || Object.values(e).some((e => e)) && (n.value = !0,
                i.value = !0,
                u.value = !1,
                ae(t),
                s.value = -1,
                e.main && t.push(...await o(0, 75)),
                e.extended && t.push(...await o(75, 75)),
                e.legacy && (t.push(...await o(150)),
                t.push(...(await o(250)).filter((e => e.levelID)))),
                a.value && (t = re.slice()),
                i.value = !1,
                function(e) {
                    for (let t = e.length - 1; t > 0; t--) {
                        const o = Math.floor(Math.random() * (t + 1));
                        [e[t],e[o]] = [e[o], e[t]]
                    }
                }(t),
                s.value = 0,
                m.value = 1,
                ae(p))
            },
            playing: n,
            fetching: i,
            showResults: d,
            showRemaining: u,
            remainingDemons: h,
            showGiveUpModal: v,
            save: function() {
                const o = se({
                    playing: n.value,
                    selectedLists: e,
                    demons: t,
                    current: s.value,
                    percent: m.value,
                    percents: p
                })
                  , i = new Blob([o],{
                    type: "application/msgpack"
                });
                D.saveAs(i, "roulette-save.mp")
            },
            onSaveModalClose: function(o) {
                o && function(o) {
                    o.arrayBuffer().then((o => {
                        const i = ce(new Uint8Array(o));
                        n.value = i.playing,
                        Object.assign(e, i.selectedLists),
                        ae(t),
                        t.push(...i.demons),
                        s.value = i.current,
                        m.value = i.percent,
                        ae(p),
                        p.push(...i.percents),
                        u.value = !1
                    }
                    ))
                }(o),
                k.value = !1
            },
            showSaveModal: k,
            showAboutModal: g,
            darkMode: b,
            useOldList: a
        }
    }
});
const pe = d("div", {
    class: "w-screen h-screen fixed -z-10 dark:bg-plain-gray"
}, null, -1)
  , de = {
    class: "flex justify-center"
}
  , ue = {
    class: "flex flex-col"
}
  , he = E(" Extreme Demon Roulette (Global Demonlist Edition)")
  , ve = {
    key: 0
}
  , ke = {
    class: "flex mt-5 mx-3 justify-between items-center"
}
  , ge = {
    class: "flex flex-col text-gray-800 dark:text-gray-300"
}
  , be = E(" Main list ")
  , ye = {
    key: 0
}
  , fe = E(" Extended list ")
  , we = {
    key: 1
}
  , xe = E(" Legacy list ")
  , Ce = {
    class: "flex"
}
  , Me = {
    class: "flex flex-col items-center w-screen max-w-7xl gap-5 mt-10"
}
  , Se = {
    key: 0,
    class: "flex flex-col items-center mt-5 p-5 shadow-lg w-full"
}
  , Pe = d("h2", {
    class: "text-3xl font-medium text-gray-800 dark:text-gray-200"
}, "Results", -1)
  , Ie = {
    class: "text-xl mt-4 text-center dark:text-gray-200"
}
  , Le = {
    key: 1,
    class: "flex flex-col mt-5 gap-5"
}
  , Ue = d("div", {
    class: "mb-64"
}, null, -1)
  , Ae = {
    class: "max-w-xl bg-white dark:bg-plain-gray dark:text-gray-200 rounded-lg p-5"
}
  , De = d("header", null, [d("h2", {
    class: "text-2xl"
}, "About")], -1)
  , Re = d("section", null, [d("p", null, " The Extreme Demon Roulette is a challenge where you must go through as many demons as possible, with the challenge ending when you get 100% or give up. "), d("p", null, [E(" Idea by "), d("a", {
    href: "https://youtu.be/nv_9FkfGRsc",
    class: "text-blue-500 hover:underline"
}, "npesta"), E(", website by "), d("a", {
    href: "https://github.com/matcool/",
    class: "text-blue-500 hover:underline"
}, "me :)")])], -1)
  , Be = {
    class: "pt-4"
}
  , je = E(" Dark mode ");
me.render = function(e, t, o, n, i, a) {
    const r = m("demon")
      , l = m("give-up-modal")
      , s = m("save-modal")
      , c = m("modal");
    return g(),
    p("main", {
        class: {
            dark: e.darkMode
        }
    }, [pe, d("div", de, [d("div", ue, [d("h1", {
        class: "md:absolute md:left-1/2 md:top-3 md:transform-gpu md:-translate-x-1/2 mt-5 text-3xl font-medium text-center text-gray-800 dark:text-gray-200 cursor-help md:border-b-2 border-dashed hover:border-gray-600 dark:border-gray-600 dark:hover:border-gray-300",
        onClick: t[1] || (t[1] = t => e.showAboutModal = !0)
    }, [he, e.useOldList ? (g(),
    p("p", ve, "2017 List")) : h("", !0)]), d("div", ke, [d("div", ge, [d("label", null, [v(d("input", {
        type: "checkbox",
        "onUpdate:modelValue": t[2] || (t[2] = t => e.selectedLists.main = t),
        disabled: e.useOldList
    }, null, 8, ["disabled"]), [[R, e.selectedLists.main]]), be]), e.useOldList ? h("", !0) : (g(),
    p("label", ye, [v(d("input", {
        type: "checkbox",
        "onUpdate:modelValue": t[3] || (t[3] = t => e.selectedLists.extended = t)
    }, null, 512), [[R, e.selectedLists.extended]]), fe])), e.useOldList ? h("", !0) : (g(),
    p("label", we, [v(d("input", {
        type: "checkbox",
        "onUpdate:modelValue": t[4] || (t[4] = t => e.selectedLists.legacy = t)
    }, null, 512), [[R, e.selectedLists.legacy]]), xe]))]), d("div", Ce, [d("button", {
        onClick: t[5] || (t[5] = t => e.showSaveModal = !0),
        class: "text-white rounded px-4 py-2 bg-blue-500 hover:bg-blue-600 mr-2"
    }, " Save "), d("button", {
        onClick: t[6] || (t[6] = t => e.start()),
        class: ["text-white rounded px-4 py-2", {
            "bg-green-500 hover:bg-green-600": !e.playing,
            "bg-red-500 hover:bg-red-600": e.playing,
            "opacity-60 cursor-not-allowed": e.fetching
        }],
        disabled: e.fetching
    }, u(e.playing ? "Restart" : "Start"), 11, ["disabled"])])]), d("div", Me, [(g(!0),
    p(B, null, j(e.currentDemons, ( (o, n) => (g(),
    p(r, {
        key: n,
        demon: o,
        active: e.playing && n === e.currentDemon,
        currentPercent: e.currentPercent,
        percent: e.percents[n],
        onDone: e.demonDone,
        onGiveUp: t[7] || (t[7] = t => e.showGiveUpModal = !0)
    }, null, 8, ["demon", "active", "currentPercent", "percent", "onDone"])))), 128))]), e.showResults ? (g(),
    p("article", Se, [Pe, d("section", Ie, [d("p", null, "Number of demons: " + u(e.percents.length), 1), d("p", null, "Highest percent: " + u(e.currentPercent - 1) + "%", 1)]), e.currentPercent < 100 ? (g(),
    p("button", {
        key: 0,
        onClick: t[8] || (t[8] = t => e.showRemaining = !0),
        class: "mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
    }, " Show remaining demons ")) : h("", !0)])) : h("", !0), e.showRemaining ? (g(),
    p("div", Le, [(g(!0),
    p(B, null, j(e.remainingDemons, ( (t, o) => (g(),
    p(r, {
        key: o,
        demon: t,
        active: !1,
        currentPercent: 0,
        percent: e.currentPercent + o + 1,
        animate: !1
    }, null, 8, ["demon", "percent"])))), 128))])) : h("", !0), Ue])]), d(l, {
        show: e.showGiveUpModal,
        onClose: t[9] || (t[9] = t => e.showGiveUpModal = !1),
        onGiveUp: e.giveUp
    }, null, 8, ["show", "onGiveUp"]), d(s, {
        show: e.showSaveModal,
        onClose: e.onSaveModalClose,
        onSave: e.save
    }, null, 8, ["show", "onClose", "onSave"]), d(c, {
        cancelable: !0,
        show: e.showAboutModal,
        onClose: t[11] || (t[11] = t => e.showAboutModal = !1)
    }, {
        default: y(( () => [d("div", Ae, [De, Re, d("section", Be, [d("label", null, [v(d("input", {
            type: "checkbox",
            "onUpdate:modelValue": t[10] || (t[10] = t => e.darkMode = t)
        }, null, 512), [[R, e.darkMode]]), je])])])])),
        _: 1
    }, 8, ["show"])], 2)
}
;
N(me).mount("#app");
